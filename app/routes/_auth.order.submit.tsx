import { BookingPaymentMode, BookingStatus } from "@prisma/client";
import { ActionArgs, LoaderArgs, defer, redirect } from "@remix-run/node";
import { useActionData, useLoaderData, useSubmit } from "@remix-run/react";
import { useEffect } from "react";
import useRazorpay, { RazorpayOptions } from "react-razorpay";
import { CartService } from "~/service/cart.service";
import EmailService from "~/service/email.service";
import PaymentService from "~/service/payment.service";
import { USER_SESSION_KEY, cartCheckoutCookie, getSession, userCartCookie } from "~/session.server";
import { CartInput } from "~/types";
import { db } from "~/utils/database";
import generateUuid from "~/utils/uuid.generator";


function genOrderId(user: number) {
    function extractTwoDigit(number: number) {
        return number % 100;
    }
    const date = new Date();
    const orderId = 'CC' + extractTwoDigit(date.getFullYear()) + date.getMonth() + extractTwoDigit(+user) + extractTwoDigit(Date.now());

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

    let REDIRECT_SUCCESS = '/order/success';
    let debug_point = 'starting';
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
    const cartInput = await CartService.summary(cartData);

    if (!cartInput) {
        return;
    }
    debug_point = '3';
    const summary = await CartService.calculate(cartInput, coupon, paymentMode);
    const orderId = genOrderId(+loggedInUser.username);
    debug_point = '4';
    let rpOrderRef: string = '';
    if (paymentMode === BookingPaymentMode.FULL) {
        const rpOrder = await PaymentService.createOrder({
            amount: summary.final * 100,
            orderId
        });
        rpOrderRef = rpOrder.id;
        REDIRECT_SUCCESS = '/order/payment'
        debug_point = '5';
    }
    debug_point = '6';
    const data = await db.booking.create({
        data: {
            id: generateUuid(),
            userId: loggedInUser.id,
            orderId: orderId,
            status: BookingStatus.PENDING,
            total: summary.final,
            subTotal: summary.total,
            tax: summary.tax,
            discount: summary.discount,
            coupon: summary.coupon,
            paymentMode,
            paymentRef: rpOrderRef
        }
    });

    debug_point = '7';
    for (let i = 0; i < cartInput.length; i++) {
        const item = cartInput[i];
        const endDate = new Date(item.date);
        endDate.setHours(item.timeHour);

        const serviceData = await db.bookingService.create({
            data: {
                id: generateUuid(),
                bookingId: data.id,
                vendorServiceGroupId: item.vendorServiceGroupId,
                status: BookingStatus.PENDING,
                cost: item.cost,
                originalCost: item.cost,
                date: item.date,
                timeHour: item.timeHour,
                duration: item.duration,
                endTime: item.timeHour + item.duration,
                endDate: endDate,
                location: item.location,
                locationLat: item.locationLat,
                locationLon: item.locationLon
            }
        });

        await db.bookingAddons.createMany({
            data: item.services.filter(x => !!x.id).map(x => ({
                id: generateUuid(),
                bookingServiceId: serviceData.id,
                serviceId: x.id,
                serviceName: x.name,
                fareMode: x.fareMode,
                status: BookingStatus.PENDING,
                cost: x.cost
            }))
        });

        // await EmailService.notifyVendorNewOrder({
        //     username: item.vendorId,
        //     date: item.date.toString(),
        //     serviceName: item.name,
        //     orderId: orderId
        // });
    }
    debug_point = '8';

    REDIRECT_SUCCESS = REDIRECT_SUCCESS + '?id=' + orderId;
} catch(e){
    REDIRECT_SUCCESS = '/order/failed?id='+debug_point+'e='+JSON.stringify(e)
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