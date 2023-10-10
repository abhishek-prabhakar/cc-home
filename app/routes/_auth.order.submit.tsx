import { redirect } from "@remix-run/node";
import { useActionData } from "@remix-run/react";

export async function action({
    request,
}: any) {
    const id = 'CC124';

    return redirect('/order/success?id=' + id);
}

export default () => {
    return 'Processing your order. Please wait...'
}