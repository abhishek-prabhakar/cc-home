import { BookingStatus } from "@prisma/client";
import { ActionArgs, redirect } from "@remix-run/node";
import { useActionData } from "@remix-run/react";
import { CartService } from "~/service/cart.service";
import UserService from "~/service/user.service";
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

    const params = data.service.reduce<{ [key in string]: { date: Date, time: string } }>((obj, x) => {
        obj[x.vendorServiceId] = {
            date: new Date(x.date),
            time: x.time
        };
        return obj;
    }, {});

    CartService.summary(data).then(async res => {
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
                time: x.time,
                duration: x.duration,
                location: '',
                cost: x.cost
            }))
        })

        redirect('/order/success?id=' + data.id);
    })

}

export default () => {
    return 'Processing your order. Please wait...'
}