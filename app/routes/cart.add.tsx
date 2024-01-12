import { ActionArgs, json, redirect } from "@remix-run/node";
import { useForm } from "react-hook-form";
import { userCartCookie } from "~/session.server";
import { CartInput } from "~/types";

export async function action({
    request,
}: ActionArgs) {
    const cookieHeader = request.headers.get("Cookie");
    const currentCart: CartInput[] = await userCartCookie.parse(cookieHeader);
    const body = await request.formData();
    const newItem: any = JSON.parse(body.get('cart')?.toString() || '');
    const redirectUrl = body.get('redirectUrl')?.toString()
    if (newItem) {
        currentCart.push(newItem)
    }
    return redirect(redirectUrl || '/cart/checkout', {
        headers: {
            "Set-Cookie": await userCartCookie.serialize(currentCart),
        },
    });
}

export default () => {
    return 'please wait...'
}