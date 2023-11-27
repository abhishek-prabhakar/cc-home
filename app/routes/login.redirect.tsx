import { ActionFunction, LoaderArgs, LoaderFunction, json, redirect } from "@remix-run/node";
import { commitSession, createUserSession, getSession, logout } from "~/session.server";

export const action: ActionFunction = async ({ request, params }) => {

    const body = await request.formData();
    const userToken = body.get('id')?.toString();
    let redirectUrl = body.get('redirect')?.toString();
    if (!userToken) {
        return redirect(redirectUrl || "/");
    }
    console.log('- goin')
    if (!redirectUrl?.length) redirectUrl = '/user/home';
    console.log('- goin')

    return await createUserSession({ request, userId: 'userToken', remember: true, redirectTo: redirectUrl });
};

export async function loader({
    request,
}: LoaderArgs) {
    const session = await getSession(
        request
    );

    const data = { error: session.get("error") };

    return json(data, {
        headers: {
            "Set-Cookie": await commitSession(session),
        },
    });
}

export default function () {

    return 'Please wait while we are redirecting...'
}