import { BookingPaymentMode, BookingStatus } from "@prisma/client";
import { ActionArgs, redirect } from "@remix-run/node";
import adminData from "~/data/admin.data";
import { CartService } from "~/service/cart.service";
import ChatService from "~/service/chat.service";
import EmailService from "~/service/email.service";
import Notification from "~/service/notification.service";
import PaymentService from "~/service/payment.service";
import { VendorQuery } from "~/service/vendor.service";
import WhatsappService from "~/service/whatsapp.service";
import { USER_SESSION_KEY, cartCheckoutCookie, getSession, userCartCookie } from "~/session.server";
import { CartInput } from "~/types";
import { db } from "~/utils/database";
import { DateFormatter } from "~/utils/date.transform";
import generateUuid from "~/utils/uuid.generator";

const ORDER_PREFIX = 'CC';

function genOrderId(user: number) {
    function extractTwoDigit(number: number) {
        return number % 100;
    }
    const date = new Date();
    const orderId = ORDER_PREFIX + extractTwoDigit(date.getFullYear()) + date.getMonth() + date.getDay() + extractTwoDigit(+user) + extractTwoDigit(Date.now());

    return orderId;
}

export async function action({
    request,
}: ActionArgs) {
    const cookieHeader = request.headers.get("Cookie");
    const session = await getSession(cookieHeader);
    const userId = session.get(USER_SESSION_KEY);
    const form = await request.formData();
    const paymentMode = form.get('paymentMode')?.toString() as BookingPaymentMode;
    const source = form.get('source')?.toString();
    const coupon = form.get('coupon')?.toString();

    let orderId:string = '';
    let REDIRECT_SUCCESS = '/order/success';
    let debug_point = 'starting';
    const notification = new Notification();

    try{
        if (!userId) {
            return redirect('/user/login');
        }

        const loggedInUser = await db.user.findFirst({
            where: {
                id: userId
            }
        });

        if (!loggedInUser || !paymentMode) {
            return redirect('/user/login');
        }

        const cartData: CartInput[] = await cartCheckoutCookie.parse(cookieHeader);

        if (!cartData?.length) {
            return redirect('/cart/checkout');
        }
        debug_point = '2';

        if (!cartData?.length) {
            return;
        }

        debug_point = '3';
        const summary = await CartService.cartEstimationForCheckout(cartData, coupon, paymentMode);
        orderId = genOrderId(+loggedInUser.username);
        debug_point = '4';
        let rpOrderRef: string = '';
        if (paymentMode !== BookingPaymentMode.EMI) {
            const rpOrder = await PaymentService.createOrder({
                amount: summary.estimation.final * 100,
                orderId,
                partialPay: paymentMode === BookingPaymentMode.PAY_LATER
            });
            rpOrderRef = rpOrder.id;
            debug_point = '5';
        }

        if(paymentMode === BookingPaymentMode.FULL){
            REDIRECT_SUCCESS = '/order/payment';
        }

        debug_point = '6';
        const data = await db.booking.create({
            data: {
                id: generateUuid(),
                userId: loggedInUser.id,
                orderId: orderId,
                status: BookingStatus.PENDING,
                total: summary.estimation.final,
                subTotal: summary.estimation.total,
                tax: summary.estimation.tax,
                discount: summary.estimation.discount,
                coupon: summary.estimation.coupon,
                paymentMode,
                paymentRef: rpOrderRef
            }
        });

        const chatGroup = await ChatService.createChatGroup(data.id);
        
        await ChatService.addUserAsChatGroupMember({
            chatGroupId: chatGroup.id,
            userId: loggedInUser.id
        });

        debug_point = '7';
        for (let i = 0; i < summary.groupData.length; i++) {
            const item = summary.groupData[i];
            const cartItem = cartData.find(x => x.vendorServiceGroupId === item.id);
            const addons = summary.addonData.filter(x => x.vendorServiceGroupId === item.id);
            if(!cartItem){
                continue;
            }
            const endDate = new Date(cartItem.date);
            endDate.setHours(cartItem.timeHour);

            const serviceData = await db.bookingService.create({
                data: {
                    id: generateUuid(),
                    bookingId: data.id,
                    vendorServiceGroupId: item.id,
                    status: BookingStatus.PENDING,
                    cost: item.cost,
                    originalCost: item.cost,
                    vendorCost: item.costByVendor,
                    date: cartItem.date,
                    timeHour: cartItem.timeHour,
                    duration: cartItem.duration,
                    endTime: cartItem.timeHour + cartItem.duration,
                    endDate: endDate,
                    location: cartItem.location,
                    locationLat: cartItem.locationLat,
                    locationLon: cartItem.locationLon
                }
            });
            await db.bookingAddons.createMany({
                data: addons.map(x => ({
                    id: generateUuid(),
                    bookingServiceId: serviceData.id,
                    serviceId: x.serviceId,
                    serviceName: x.service.name,
                    fareMode: x.fareMode,
                    status: BookingStatus.PENDING,
                    cost: x.cost
                }))
            });
            await ChatService.addVendorAsChatGroupMember({
                chatGroupId: chatGroup.id,
                vendorId: item.vendorId
            });
        }
        debug_point = '8';
        
        REDIRECT_SUCCESS = REDIRECT_SUCCESS + '?id=' + orderId;
    } catch(e){
        REDIRECT_SUCCESS = '/order/failed?id='+orderId+'&p='+debug_point+'e='+JSON.stringify(e)
    }

    notification.admin('You have a new order: ' + orderId);
    await notification.publish();

    const headers: [string, string][] = [
        ["Set-Cookie", await cartCheckoutCookie.serialize(null)]
    ]

    if (source === 'cart') {
        headers.push(["Set-Cookie", await userCartCookie.serialize(null)])
    }

    return redirect(REDIRECT_SUCCESS, {
        headers
    });
}

export async function loader() {
    return null
}

export default () => {
    return 'Processing your order. Please wait...'
}