import { ActionArgs, json, redirect } from "@remix-run/node";
import { useForm } from "react-hook-form";
import { cartCheckoutCookie } from "~/session.server";
import { CartInput } from "~/types";

export async function action({
    request,
}: ActionArgs) {
    const cookieHeader = request.headers.get("Cookie");
    let currentCart: CartInput[] = [];
    const body = await request.formData();
    let redirectUrl;
    try {
        const newItem: any = JSON.parse(body.get('cart')?.toString() || '');
        if (newItem) {
            currentCart = newItem;
        }

        redirectUrl = new URL(body.get('redirectUrl')?.toString() || '/cart/checkout/payment');
        redirectUrl.searchParams.set('cartStatus', 'true');
    } catch (e) {
        redirectUrl = null
    }
    return redirect(redirectUrl ? redirectUrl.href : '/cart/checkout/payment', {
        headers: {
            "Set-Cookie": await cartCheckoutCookie.serialize(currentCart),
        },
    });
}

export default () => {
    return 'please wait...'
}