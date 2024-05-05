import { CartInput, CartItem, CartItemService } from "~/types";
import { ServiceQuery } from "./services.service";
import { PATH } from "~/path.data";
import { BookingStatus, Coupons_chargeType, FareMode } from "@prisma/client";
import { db } from "~/utils/database";

const GST_PERCENTAGE = 18;

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

function cartSummary(cart: CartInput[]) {
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
                    coverImg: res.group.imageName ? PATH.RESOURCE_URL + res.group.imageName : '',
                    vendorServiceGroupId: res.id,
                    vendorType: res.vendor.vendorType?.name || '',
                    vendorName: res.vendor.username,
                    vendorImg: res.vendor.profileImageName ? PATH.RESOURCE_URL + res.vendor.profileImageName : PATH.AVATAR_PLACEHOLDER,
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


    return {
        code: couponData?.code,
        value: value - discount,
        discount
    }
}

async function cartCalculateCost(cart: CartItem[], coupon?: string) {
    const gst = GST_PERCENTAGE;
    const total = cart.reduce<CartItemService[]>((arr, x) => arr.concat(x.services), []).reduce((sum, item) => sum + item.cost, 0);
    let couponData;
    let discount = 0;

    if (coupon) {
        couponData = await calculateCouponDiscount(coupon, total);
        discount = couponData.discount;
    }

    const finalTotal = total - discount;
    const tax = (gst * finalTotal) / 100;

    return {
        total,
        tax,
        gst,
        final: finalTotal + tax,
        discount,
        coupon: couponData?.code,
        invalidCoupon: coupon && !couponData ? true : false
    };
}

export const CartService = {
    getGst: GST_PERCENTAGE,
    calculate: cartCalculateCost,
    summary: cartSummary,
    getVendorServiceBookingsByDate
}