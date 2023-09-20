import { ActionFunction, json } from "@remix-run/node"

export async function action({
    request,
}: any) {

    return json({ success: true }, 200);
}