import { CartInput, CartItem, CartItemService } from "~/types";
import { ServiceQuery } from "./services.service";
import { PATH } from "~/path.data";
import { BookingPaymentMode, BookingStatus, Coupons_chargeType, DiscountType, FareMode } from "@prisma/client";
import { db } from "~/utils/database";

const GST_PERCENTAGE = 18;
const FULL_PAYMENT_DISCOUNT = 5; //in percentage
const FULL_PAYMENT_DISCOUNT_MAX_VALUE = 2000;

async function getVendorServiceBookingsByDate(vendorServiceGrpId: string, date: string) {
    const vendor = await db.vendorServiceGroup.findFirst({
        where: {
            id: vendorServiceGrpId
        },
        select: {
            vendorId: true
        }
    });

    if (!vendor) {
        return [];
    }

    return db.bookingService.findMany({
        where: {
            date,
            vendorServiceGroup: {
                vendorId: vendor.vendorId
            },
            status: {
                notIn: [BookingStatus.CANCELLED, BookingStatus.REJECTED]
            }
        },
        select: {
            timeHour: true,
            endTime: true,
            duration: true,
            vendorServiceGroup: {
                select: {
                    group: {
                        select: {
                            commitFullDay: true
                        }
                    }
                }
            }
        }
    })
}

async function cartEstimationForCheckout(cart: CartInput[], coupon?: string, paymentMode?: BookingPaymentMode){
    const vendorGrpIds:string[] = [];
    let addonsIds:string[] = [];
    cart.forEach(x => {
        vendorGrpIds.push(x.vendorServiceGroupId);
        addonsIds = addonsIds.concat(x.services.map(y => y.id));
    });
    const groupData  = await db.vendorServiceGroup.findMany({
        where:{
            id:{
                in: vendorGrpIds
            }
        },
        select:{
            id:true,
            cost: true,
            costByVendor: true,
            vendorId: true,
            group:{
                select:{
                    name: true
                }
            }
        }
    });

    const addonData  = await db.vendorService.findMany({
        where:{
            id:{
                in: addonsIds
            }
        },
        select:{
            vendorServiceGroupId: true,
            cost: true,
            serviceId: true,
            fareMode: true,
            service:{
                select:{
                    name: true
                }
            }
        }
    });
    const estimation = await cartCalculateCost(
        groupData.map(x => x.cost),
        addonData.map(x => x.cost),
        coupon,
        paymentMode
    );
    return {
        groupData,
        addonData,
        estimation
    }
}

function cartSummary(cart?: CartInput[] | null) {
    return new Promise<CartItem[]>(async function (resolve) {
        if (!cart?.length) {
            resolve([]);
            return;
        }
        let results: CartItem[] = [];
        for (let i = 0; i < cart.length; i++) {
            const item = cart[i];
            const res = await ServiceQuery.getVendorServices(item.vendorServiceGroupId, item.services.map(x => x.id).filter(x => !!x));
            if (res) {
                results.push({
                    name: res.group.name,
                    coverImg: res.group.imageName ? PATH.THUMB_URL + res.group.imageName : '',
                    vendorServiceGroupId: res.id,
                    vendorType: res.vendor.vendorType?.name || '',
                    vendorName: res.vendor.username,
                    vendorImg: res.vendor.profileImageName ? PATH.THUMB_URL + res.vendor.profileImageName : PATH.AVATAR_PLACEHOLDER,
                    vendorId: res.vendor.username,
                    date: item.date,
                    timeHour: item.timeHour,
                    duration: res.group.minHour,
                    cost: res.cost,
                    isEstimated: res.group.isEstimated,
                    location: item.location,
                    locationLat: item.locationLat,
                    locationLon: item.locationLon,
                    services: [{ name: 'Base charge', cost: res.cost, id: '', fareMode: 'FLAT' }, ...res.vendorService.map(x => ({
                        name: x.service.name,
                        cost: x.cost,
                        id: x.service.id,
                        fareMode: x.fareMode
                    }))]
                });
            }
        };

        resolve(results);

    });
}

async function calculateCouponDiscount(coupon: string, total: number): Promise<{ code?: string; value: number; discount: number; }> {
    const couponData = await db.coupons.findFirst({
        where: {
            code: coupon
        }
    });

    let discount = 0;
    let value = total;

    switch (couponData?.chargeType) {
        case Coupons_chargeType.FLAT:
            discount = couponData.chargeValue;
            break;
        case Coupons_chargeType.PERCENTAGE:
            discount = (couponData.chargeValue * value) / 100;
            if (couponData.maxDiscountValue && discount > couponData.maxDiscountValue) {
                discount = couponData.maxDiscountValue;
            }
            break;
    }
    discount = Math.round(discount);

    return {
        code: couponData?.code,
        value: value - discount,
        discount
    }
}

function calculateFullPaymentPromo(value: number) {
    const discount = Math.round((FULL_PAYMENT_DISCOUNT * value) / 100);
    if (discount > FULL_PAYMENT_DISCOUNT_MAX_VALUE) {
        return FULL_PAYMENT_DISCOUNT_MAX_VALUE;
    } else {
        return discount;
    }
}


async function calculatePackageDiscount(packageId: string, total: number): Promise<{ code?: string; value: number; discount: number; promo: string | null}> {
    const packageData = await db.package.findFirst({
        where: {
            id: packageId,
        },
        select:{
            discountType: true,
            discountValue: true
        }
    });

    let discount = 0;
    let value = total;
    let promo = null;

    switch (packageData?.discountType) {
        case DiscountType.FLAT:
            discount = packageData.discountValue;
            promo = 'FLAT '+ discount;
            break;
        case DiscountType.PERCENTAGE:
            discount = (packageData.discountValue * value) / 100;
            promo = packageData.discountValue+'%';
            break;
    }
    discount = Math.round(discount);

    return {
        value: value - discount,
        discount,
        promo
    }
}

async function cartCalculateCost(groupCosts: number[], addonsCost: number[], coupon?: string, paymentMode?: BookingPaymentMode,packageId?: string | null) {
    const gst = GST_PERCENTAGE;
    const total = groupCosts.concat(addonsCost).reduce((sum, item) => sum + item, 0);
    let discount = 0;
    let additionalPromo = 0;
    let appliedPromo = null;
    let appliedCoupon = null;
    

    if(packageId){
       const packageData = await calculatePackageDiscount(packageId, total);
       discount =  packageData.discount;
       appliedPromo = packageData.promo;
    } else if (coupon) {
        const couponData = await calculateCouponDiscount(coupon, total);
        discount = couponData.discount;
        appliedPromo = couponData.code;
        appliedCoupon = couponData.code;
    }

    if (paymentMode === BookingPaymentMode.FULL) {
        additionalPromo = calculateFullPaymentPromo(total);
    }

    const finalTotal = total - discount - additionalPromo;
    const tax = Math.round((gst * finalTotal) / 100);

    return {
        total,
        tax,
        gst,
        additionalPromo,
        final: finalTotal + tax,
        discount,
        coupon: appliedPromo,
        invalidCoupon: coupon && !appliedCoupon ? true : false
    };
}

export const CartService = {
    getGst: GST_PERCENTAGE,
    calculate: cartCalculateCost,
    summary: cartSummary, 
    getVendorServiceBookingsByDate,
    cartEstimationForCheckout,
    calculateCouponDiscount
}