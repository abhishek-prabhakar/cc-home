import { ActionArgs, json, redirect } from "@remix-run/node";
import { useForm } from "react-hook-form";
import Routes from "~/routes.data";
import { userCartCookie } from "~/session.server";
import { CartInput } from "~/types";

export async function action({
    request,
}: ActionArgs) {
    const cookieHeader = request.headers.get("Cookie");
    let currentCart: CartInput[] = await userCartCookie.parse(cookieHeader) || [];
    const body = await request.formData();
    let redirectUrl;
    try {
        const newItems: CartInput[] = JSON.parse(body.get('cart')?.toString() || '');
        if (newItems?.length) {
            const vendorIds = newItems.map(x => x.vendorServiceGroupId);
            currentCart = currentCart.filter(x => !vendorIds.includes( x.vendorServiceGroupId));
            currentCart = currentCart.concat(newItems);
        }

        redirectUrl = new URL(body.get('redirectUrl')?.toString() || Routes.get('Cart'));
        redirectUrl.searchParams.set('cartStatus', 'true');
    } catch (e) {
        redirectUrl = null
    }
    return redirect(redirectUrl ? redirectUrl.href : Routes.get('Cart'), {
        headers: {
            "Set-Cookie": await userCartCookie.serialize(currentCart),
        },
    });
}

export default () => {
    return 'please wait...'
}