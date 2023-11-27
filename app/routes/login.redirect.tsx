import { ActionArgs, ActionFunction, LoaderArgs, LoaderFunction, json, redirect } from "@remix-run/node";
import { USER_SESSION_KEY, commitSession, getSession } from "~/session.server";

export async function action({
    request,
}: ActionArgs) {
    const session = await getSession(
        request.headers.get("Cookie")
    );

    // const url = new URL(request.url)
    // const userToken = url.searchParams.get('id');
    // const redirectUrl = url.searchParams.get('redirect') || '/user/home';

    const body = await request.formData();
    const userToken = body.get('id')?.toString();
    let redirectUrl = body.get('redirect')?.toString() || '/user/home';

    if (!userToken) {
        return redirect(redirectUrl || "/");
    }

    session.set(USER_SESSION_KEY, userToken);
    console.log(userToken)
    return redirect(redirectUrl, {
        headers: {
            "Set-Cookie": await commitSession(session),
        },
    });
};


export async function loader({
    request,
}: LoaderArgs) {
    const session = await getSession(
        request.headers.get("Cookie")
    );

    if (session.has(USER_SESSION_KEY)) {
        console.log('/--->')
        return redirect("/");
    }

    const data = { error: session.get("error") };

    return json(data, {
        headers: {
            "Set-Cookie": await commitSession(session),
        },
    });
}