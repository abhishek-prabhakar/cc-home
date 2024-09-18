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

        const cartData = await cartCheckoutCookie.parse(cookieHeader);
        const packageId = cartData?.packageId;

        if (!cartData?.cart?.length) {
            return redirect('/cart/checkout');
        }
        debug_point = '2';

        if (!cartData?.cart?.length) {
            return;
        }

        debug_point = '3';
        const summary = await CartService.cartEstimationForCheckout(cartData.cart, coupon, paymentMode, packageId);
        orderId = genOrderId(+loggedInUser.username);
        debug_point = '4';
      

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
                packageId
            }
        });


        debug_point = '5';
        const orderValue:number[] = [];
        if (paymentMode === BookingPaymentMode.FULL) {
            orderValue.push(summary.estimation.final);
        }

        if (paymentMode === BookingPaymentMode.PAY_LATER) {
            const splitAmount = summary.estimation.final/2;
            orderValue.push(splitAmount);
            orderValue.push(splitAmount);
        }
        for(let i =0;i<orderValue.length;i++){
             await PaymentService.createOrder({
                amount: orderValue[i] * 100,
                orderId,
                bookingId: data.id,
                partialPay: false
            });
        }
        debug_point = '6';
        if(paymentMode === BookingPaymentMode.FULL){
            REDIRECT_SUCCESS = '/order/payment';
        }

        const chatGroup = await ChatService.createChatGroup(data.id);
        
        await ChatService.addUserAsChatGroupMember({
            chatGroupId: chatGroup.id,
            userId: loggedInUser.id
        });

        if(paymentMode === BookingPaymentMode.PAY_LATER){
            const firstItemInfo = summary.groupData[0];
            notification.whatsapp(WhatsappService.remindUserOrderPayment({
                to: loggedInUser.username,
                vendorName: '',
                service: firstItemInfo.group.name,
                orderId: orderId
            }));
        }
console.log('passed')
        debug_point = '7';
        for (let i = 0; i < summary.groupData.length; i++) {
            const item = summary.groupData[i];
            const cartItem = cartData.cart.find(x => x.vendorServiceGroupId === item.id);
            const addons = summary.addonData.filter(x => x.vendorServiceGroupId === item.id);
            if(!cartItem){
                continue;
            }
            let endDate = '';
            if(cartItem.date){
                const endDate = new Date(cartItem.date);
                endDate.setHours(cartItem.timeHour);
            }

            const serviceData = await db.bookingService.create({
                data: {
                    id: generateUuid(),
                    bookingId: data.id,
                    vendorServiceGroupId: item.id,
                    status: BookingStatus.PENDING,
                    cost: item.cost,
                    originalCost: item.cost,
                    vendorCost: item.costByVendor,
                    date: cartItem.date || null,
                    timeHour: cartItem.timeHour,
                    duration: cartItem.duration,
                    endTime: cartItem.timeHour + cartItem.duration,
                    endDate: endDate || null,
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
            console.log(i)
        }
        debug_point = '8';
        
        REDIRECT_SUCCESS = REDIRECT_SUCCESS + '?id=' + orderId;
    } catch(e){
        REDIRECT_SUCCESS = '/order/failed?id='+orderId+'&p='+debug_point+'e='+JSON.stringify(e)
    }
    console.log('notifi')
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