import { BookingStatus } from "@prisma/client";
import { ActionArgs, defer, redirect } from "@remix-run/node";
import { CartService } from "~/service/cart.service";
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
    if (!userId) {
        return redirect('/user/login');
    }


    const loggedInUser = await db.user.findFirst({
        where: {
            id: userId
        }
    });

    if (!loggedInUser) {
        return redirect('/user/login');
    }


    const cartData: CartInput[] = await cartCheckoutCookie.parse(cookieHeader);

    if (!cartData?.length) {
        return redirect('/cart/checkout');
    }

    const orderId = await new Promise<string>(function (resolve) {
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


            for (let i = 0; i < res.length; i++) {
                const item = res[i];
                const data = await db.booking.create({
                    data: {
                        id: generateUuid(),
                        userId: loggedInUser.id,
                        orderId: orderId,
                        vendorServiceGroupId: item.vendorServiceGroupId,
                        status: BookingStatus.PENDING,
                        total: summary.total,
                        tax: summary.tax,
                        discount: 0,
                        coupon: null
                    }
                });

                await db.bookingService.createMany({
                    data: item.services.filter(x => !!x.id).map(x => ({
                        id: generateUuid(),
                        bookingId: data.id,
                        serviceId: x.id,
                        serviceName: x.name,
                        fareMode: x.fareMode,
                        status: BookingStatus.PENDING,
                        date: item.date,
                        timeHour: item.timeHour,
                        duration: item.duration,
                        location: '',
                        cost: x.cost
                    }))
                });
            }

            resolve('');
        });

    });

    return redirect('/order/success?id=' + orderId, {
        headers: {
            "Set-Cookie": await cartCheckoutCookie.serialize(null),
        },
    });
}

export default () => {
    return 'Processing your order. Please wait...'
}