import { redirect } from "@remix-run/node";

export async function action({
    request,
}: any) {
    const id = 'CC124'
    redirect('/order/success?id=' + id);
}