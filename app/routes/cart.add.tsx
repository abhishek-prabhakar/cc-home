import { ActionArgs, json, redirect } from "@remix-run/node";
import { useForm } from "react-hook-form";
import { userCartCookie } from "~/session.server";

export async function action({
    request,
}: ActionArgs) {
    const cookieHeader = request.headers.get("Cookie");
    let cookie = await userCartCookie.parse(cookieHeader);
    const body = await request.formData();
    cookie = body.get('cart');
    console.log(cookie)
    return redirect('/cart/checkout', {
        headers: {
            "Set-Cookie": await userCartCookie.serialize(cookie),
        },
    });
}

export default () => {
    return 'please wait...'
}