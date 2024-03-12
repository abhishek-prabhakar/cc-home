import { BookingPaymentMode, BookingStatus } from "@prisma/client";
import { ActionArgs, defer, redirect } from "@remix-run/node";
import { CartService } from "~/service/cart.service";
import EmailService from "~/service/email.service";
import { USER_SESSION_KEY, cartCheckoutCookie, getSession } from "~/session.server";
import { CartInput } from "~/types";
import { db } from "~/utils/database";
import generateUuid from "~/utils/uuid.generator";

export async function action({
    request,
}: ActionArgs) {
    const cookieHeader = request.headers.get("Cookie");
    const session = await getSession(cookieHeader);
    const userId = session.get(USER_SESSION_KEY);
    const form = await request.formData();
    const paymentMode = form.get('paymentMode')?.toString() as BookingPaymentMode;

    if (!userId) {
        return redirect('/user/login');
    }


    const loggedInUser = await db.user.findFirst({
        where: {
            id: userId
        }
    });

    if (!loggedInUser || paymentMode) {
        return redirect('/user/login');
    }


    const cartData: CartInput[] = await cartCheckoutCookie.parse(cookieHeader);

    if (!cartData?.length) {
        return redirect('/cart/checkout');
    }

    const newOrder = await new Promise<string>(function (resolve) {
        CartService.summary(cartData).then(async res => {
            if (!res) {
                return;
            }

            function extractTwoDigit(number: number) {
                return number % 100;
            }

            const summary = CartService.calculate(res);
            const date = new Date();
            const orderId = 'CC' + extractTwoDigit(date.getFullYear()) + date.getMonth() + extractTwoDigit(+loggedInUser.username) + extractTwoDigit(Date.now());

            const data = await db.booking.create({
                data: {
                    id: generateUuid(),
                    userId: loggedInUser.id,
                    orderId: orderId,
                    status: BookingStatus.PENDING,
                    total: summary.total,
                    tax: summary.tax,
                    discount: 0,
                    coupon: null,
                    paymentMode
                }
            });


            for (let i = 0; i < res.length; i++) {
                const item = res[i];
                const endDate = new Date(item.date);
                endDate.setHours(item.timeHour);

                const serviceData = await db.bookingService.create({
                    data: {
                        id: generateUuid(),
                        bookingId: data.id,
                        vendorServiceGroupId: item.vendorServiceGroupId,
                        status: BookingStatus.PENDING,
                        cost: item.cost,
                        date: item.date,
                        timeHour: item.timeHour,
                        duration: item.duration,
                        endTime: item.timeHour + item.duration,
                        endDate: endDate,
                        location: '',
                        locationLat: 0,
                        locationLon: 0
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

                await EmailService.notifyVendorNewOrder({
                    username: item.vendorId,
                    date: item.date.toString(),
                    serviceName: item.name
                });
            }

            resolve(orderId);
        });

    });

    return redirect('/order/success?id=' + newOrder, {
        headers: {
            "Set-Cookie": await cartCheckoutCookie.serialize(null),
        },
    });
}

export default () => {
    return 'Processing your order. Please wait...'
}