import { BookingStatus } from "@prisma/client";
import { ActionArgs, defer, redirect } from "@remix-run/node";
import { CartService } from "~/service/cart.service";
import { USER_SESSION_KEY, getSession, userCartCookie } from "~/session.server";
import { CartInput } from "~/types";
import { db } from "~/utils/database";

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


    const cookie = await userCartCookie.parse(cookieHeader);
    const data: CartInput = JSON.parse(cookie)

    if (!data?.service?.length) {
        return redirect('/cart/checkout');
    }

    const orderId = await new Promise<string>(function (resolve) {
        CartService.summary(data).then(async res => {
            console.log(res)
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
                    userId: loggedInUser.id,
                    orderId: orderId,
                    status: BookingStatus.PENDING,
                    total: summary.total,
                    tax: summary.tax,
                    discount: 0,
                    coupon: null
                }
            });

            await db.bookingService.createMany({
                data: res.services.map(x => ({
                    bookingId: data.id,
                    vendorServiceId: x.id,
                    status: BookingStatus.PENDING,
                    date: x.date,
                    timeHour: x.timeHour,
                    duration: x.duration,
                    location: '',
                    cost: x.cost
                }))
            })

            resolve(data.orderId);
        });

    });

    return redirect('/order/success?id=' + orderId, {
        headers: {
            "Set-Cookie": await userCartCookie.serialize(null),
        },
    });
}

export default () => {
    return 'Processing your order. Please wait...'
}