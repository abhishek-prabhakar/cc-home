import { ActionFunction, LoaderFunction, redirect } from "@remix-run/node";
import { createUserSession, logout } from "~/session.server";

export const loader: LoaderFunction = async ({ request, params }) => {
    const url = new URL(request.url)
    const userToken = url.searchParams.get('id')?.toString();
    const redirectUrl = url.searchParams.get('redirect')?.toString() || '/user/home';
    if (!userToken) {
        return redirect(redirectUrl || "/");
    }

    return createUserSession({ request, userId: userToken, remember: true, redirectTo: redirectUrl });
};
