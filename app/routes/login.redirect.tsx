import { ActionFunction, LoaderFunction, redirect } from "@remix-run/node";
import { createUserSession, logout } from "~/session.server";

export const loader: LoaderFunction = async ({ request, params }) => {
    const url = new URL(request.url)
    const userToken = url.searchParams.get('id');
    if (!userToken) {
        return redirect("/");
    }

    return createUserSession({ request, userId: userToken, remember: true, redirectTo: '/user/home' });
};
