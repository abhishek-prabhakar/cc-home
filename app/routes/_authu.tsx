import { LoaderArgs, TypedResponse, redirect } from "@remix-run/node"
import { Outlet, useLoaderData } from "@remix-run/react"
import { getSessionUser, getSessionUserId } from "~/session.server";

export async function loader(args: LoaderArgs): Promise<boolean | TypedResponse> {
    // const userId = await getSessionUser(args.request);
    // if (!userId) {
    //     console.log(userId)
    //     console.log('---', 'fialed')
    //     return redirect('/');
    // }
    // console.log('---', 'here')
    return true;
}

export default function UserLayout() {
    const data = useLoaderData();

    return <div className="container">
        <Outlet />
    </div>
}