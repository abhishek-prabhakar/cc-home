import { ActionArgs, json, redirect } from "@remix-run/node";
import { useForm } from "react-hook-form";
import { userCartCookie } from "~/session.server";
import { CartInput } from "~/types";

export async function action({
    request,
}: ActionArgs) {
    const cookieHeader = request.headers.get("Cookie");
    const currentCart: CartInput[] = await userCartCookie.parse(cookieHeader) || [];
    const body = await request.formData();
    let redirectUrl;
    try {
        const newItem: any = JSON.parse(body.get('cart')?.toString() || '');
        currentCart.push(newItem)

        redirectUrl = new URL(body.get('redirectUrl')?.toString() || '');
        redirectUrl.searchParams.set('cartStatus', 'true');
    } catch (e) {
        redirectUrl = null
    }
    return redirect(redirectUrl ? redirectUrl.href : '/cart/checkout', {
        headers: {
            "Set-Cookie": await userCartCookie.serialize(currentCart),
        },
    });
}

export default () => {
    return 'please wait...'
}