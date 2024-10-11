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
    const body = await request.formData();

    let currentCart: CartInput[] = [];
    
    const source = body.get('source')?.toString();
    const paymentUrl = Routes.get('CheckoutPayment') + '?source=' + source;
    // if source is cart, then after placing the order the cart will be cleared.

    let redirectUrlInstance, packageId;
    try {
        const newItem: any = JSON.parse(body.get('cart')?.toString() || '');
        packageId = body.get('packageId')?.toString();
        if (newItem) {
            currentCart = newItem;
        }

        redirectUrlInstance = new URL(body.get('redirectUrl')?.toString() || paymentUrl);
        redirectUrlInstance.searchParams.set('cartStatus', 'true');
    } catch (e) {
        redirectUrlInstance = null
    }


    let redirectUrl = redirectUrlInstance ? redirectUrlInstance.href : paymentUrl;
    if (!userId) {
        redirectUrl = '/user/login?redirectUrl='+redirectUrl;
    }


    return redirect(redirectUrl, {
        headers: {
            "Set-Cookie": await cartCheckoutCookie.serialize({cart:currentCart, packageId }),
        },
    });
}

export default () => {
    return 'please wait...'
}