import { BookingStatus } from "@prisma/client";
import { ActionArgs, defer, redirect } from "@remix-run/node";
import { CartService } from "~/service/cart.service";
import { getSessionUserId, userCartCookie } from "~/session.server";
import { CartInput } from "~/types";
import { db } from "~/utils/database";

export async function action({
    request,
}: ActionArgs) {
    const cookieHeader = request.headers.get("Cookie");
    const userId = await getSessionUserId(request);
    if (!userId) {
        return;
    }


    const loggedInUser = await db.user.findFirst({
        where: {
            username: userId
        }
    });

    if (!loggedInUser) {
        return;
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

            const summary = CartService.calculate(res);

            const data = await db.booking.create({
                data: {
                    userId: loggedInUser.id,
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
                    vendorId: x.vendorId,
                    status: BookingStatus.PENDING,
                    date: x.date,
                    time: x.time + '',
                    duration: x.duration,
                    location: '',
                    cost: x.cost
                }))
            })

            resolve(data.id);
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