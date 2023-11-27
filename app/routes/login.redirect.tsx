// import { ActionFunction, LoaderArgs, LoaderFunction, json, redirect } from "@remix-run/node";
// import { commitSession, createUserSession, getSession, logout } from "~/session.server";

// export const action: ActionFunction = async ({ request, params }) => {

//     const body = await request.formData();
//     const userToken = body.get('id')?.toString();
//     let redirectUrl = body.get('redirect')?.toString();
//     if (!userToken) {
//         return redirect(redirectUrl || "/");
//     }
//     console.log('- goin')
//     if (!redirectUrl?.length) redirectUrl = '/user/home';
//     console.log('- goin')

//     return await createUserSession({ request, userId: 'userToken', remember: true, redirectTo: redirectUrl });
// };

// export async function loader({
//     request,
// }: LoaderArgs) {
//     const session = await getSession(
//         request
//     );

//     // if (session.has("userId")) {
//     //     // Redirect to the home page if they are already signed in.
//     //     return redirect("/");
//     // }

//     const data = { error: session.get("error") };

//     return json(data, {
//         headers: {
//             "Set-Cookie": await commitSession(session),
//         },
//     });
// }

// export default function () {

//     return 'Please wait while we are redirecting...'
// }



import { ActionArgs, ActionFunction, LoaderArgs, LoaderFunction, json, redirect } from "@remix-run/node";
import { USER_SESSION_KEY, commitSession, getSession } from "~/session.server";
// import { createUserSession, logout } from "~/session.server";

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
        return redirect("/");
    }

    const data = { error: session.get("error") };

    return json(data, {
        headers: {
            "Set-Cookie": await commitSession(session),
        },
    });
}