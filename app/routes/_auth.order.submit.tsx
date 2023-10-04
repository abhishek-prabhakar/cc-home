import { redirect } from "@remix-run/node";

export async function action({
    request,
}: any) {
    redirect('/order/success');
}