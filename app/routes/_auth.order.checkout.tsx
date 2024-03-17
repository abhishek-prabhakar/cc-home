import { ActionArgs, json, redirect } from "@remix-run/node";
import { useForm } from "react-hook-form";
import Routes from "~/routes.data";
import { USER_SESSION_KEY, cartCheckoutCookie, getSession } from "~/session.server";
import { CartInput } from "~/types";

export async function action({
    request,
}: ActionArgs) {
    const cookieHeader = request.headers.get("Cookie");
    const session = await getSession(cookieHeader);
    const userId = session.get(USER_SESSION_KEY);
    if (!userId) {
        return redirect('/user/login');
    }


    let currentCart: CartInput[] = [];
    const body = await request.formData();
    const source = body.get('source')?.toString();
    const payment = Routes.get('CheckoutPayment') + '?source=' + source;

    let redirectUrl;
    try {
        const newItem: any = JSON.parse(body.get('cart')?.toString() || '');
        if (newItem) {
            currentCart = newItem;
        }

        redirectUrl = new URL(body.get('redirectUrl')?.toString() || payment);
        redirectUrl.searchParams.set('cartStatus', 'true');
    } catch (e) {
        redirectUrl = null
    }
    return redirect(redirectUrl ? redirectUrl.href : payment, {
        headers: {
            "Set-Cookie": await cartCheckoutCookie.serialize(currentCart),
        },
    });
}

export default () => {
    return 'please wait...'
}