import { LoaderArgs, TypedResponse, redirect } from "@remix-run/node"
import { Outlet, useLoaderData } from "@remix-run/react"
import { getSession, USER_SESSION_KEY } from "~/session.server";

export async function loader(args: LoaderArgs): Promise<boolean | TypedResponse> {
    const session = await getSession(
        args.request.headers.get("Cookie")
    );
    const userId = session.get(USER_SESSION_KEY);

    console.log(userId, '----')
    if (!userId) {
        return redirect('/');
    }

    return true;
}

export default function UserLayout() {
    const data = useLoaderData();

    return <div className="container">
        <Outlet />
    </div>
}