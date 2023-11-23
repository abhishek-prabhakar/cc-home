import { ActionArgs, redirect } from "@remix-run/node";
import { useActionData } from "@remix-run/react";
import { userCartCookie } from "~/session.server";
import { CartInput } from "~/types";
import { db } from "~/utils/database";

export async function action({
    request,
}: ActionArgs) {
    const cookieHeader = request.headers.get("Cookie");
    const cookie = await userCartCookie.parse(cookieHeader);
    const data: CartInput = JSON.parse(cookie)

    if (!data?.service?.length) {
        return redirect('/cart/checkout');
    }

    const params = data.service.reduce<{ [key in string]: { date: Date, time: number[] } }>((obj, x) => {
        obj[x.vendorServiceId] = {
            date: new Date(x.date),
            time: x.time
        };
        return obj;
    }, {});

    db.booking.create({
        data: {
            userId
        }
    })

    const body = await request.formData();
    //cookie = body.get('cart');


    return redirect('/order/success?id=' + id);
}

export default () => {
    return 'Processing your order. Please wait...'
}