import { BookingPaymentMode, BookingStatus } from "@prisma/client";
import { ActionArgs, redirect } from "@remix-run/node";
import { CartService } from "~/service/cart.service";
import ChatService from "~/service/chat.service";
import EmailService from "~/service/email.service";
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
    console.log(debug_point);
    const notificationQueue:Promise<any>[] = [];

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
        console.log(debug_point);

        if (!cartData?.length) {
            return;
        }

        debug_point = '3';
        const summary = await CartService.cartEstimationForCheckout(cartData, coupon, paymentMode);
        orderId = genOrderId(+loggedInUser.username);
        debug_point = '4';console.log(debug_point);
        let rpOrderRef: string = '';
        if (paymentMode !== BookingPaymentMode.EMI) {
            const rpOrder = await PaymentService.createOrder({
                amount: summary.estimation.final * 100,
                orderId,
                partialPay: paymentMode === BookingPaymentMode.PAY_LATER
            });
            rpOrderRef = rpOrder.id;
            debug_point = '5';console.log(debug_point);
        }

        if(paymentMode === BookingPaymentMode.FULL){
            REDIRECT_SUCCESS = '/order/payment';
        }

        debug_point = '6';console.log(debug_point);
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

        debug_point = '7';console.log(debug_point);
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
            console.log(debug_point, i, 'x');
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
            console.log(debug_point, i, 'y');
        }
        debug_point = '8';console.log(debug_point);

        notificationQueue.push(
            WhatsappService.orderConfirmationUser({
                to: loggedInUser.username, 
                orderId,
                cost: summary.estimation.final,
                date: DateFormatter.short(cartData[0].date),
                time: DateFormatter.timeHourTo12Hrs(cartData[0].timeHour),
                serviceName: summary.groupData[0].group.name
            })
        );
        
        REDIRECT_SUCCESS = REDIRECT_SUCCESS + '?id=' + orderId;
    } catch(e){
        REDIRECT_SUCCESS = '/order/failed?id='+orderId+'&p='+debug_point+'e='+JSON.stringify(e)
    }

    /** Notification exceptions shouldn't impact the order placement flow  */
    try{
        await Promise.allSettled(notificationQueue);
    } catch(e){
        console.log('Notification failed')
    }

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

export function ErrorBoundary() {
    return <div>
        Invalid data
    </div>
}