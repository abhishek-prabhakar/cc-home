import { LoaderArgs, TypedResponse, redirect } from "@remix-run/node"
import { Outlet, useLoaderData } from "@remix-run/react"
import { getSessionUserId } from "~/session.server";

export async function loader(args: LoaderArgs): Promise<boolean | TypedResponse> {
    const userId = await getSessionUserId(args.request);
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