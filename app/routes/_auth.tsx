import { Grid } from "@mantine/core";
import { LoaderArgs, TypedResponse, V2_MetaFunction, redirect } from "@remix-run/node"
import { Outlet, useLoaderData, useLocation } from "@remix-run/react"
import UserLogin from "~/components/UserLogin";
import { getSession, USER_SESSION_KEY } from "~/session.server";

export const meta: V2_MetaFunction = () => {
    return [
        { title: "My Account" },
        { name: "description", content: "Celebria Collective, Find your Pefect vendor" },
    ];
};

export async function loader(args: LoaderArgs): Promise<boolean | TypedResponse> {
    const session = await getSession(
        args.request.headers.get("Cookie")
    );
    const userId = session.get(USER_SESSION_KEY);

    if (!userId) {
        return false;
    }

    return true;
}

export default function UserLayout() {
    const data = useLoaderData<typeof loader>();
    const location = useLocation();

    return <div className="container">
       {data? <Outlet />: 
       <Grid justify="center">
        <Grid.Col span={{md: 4, base: 12}}>
            <UserLogin redirectUrl={location.pathname}/>
        </Grid.Col>
        </Grid>}
    </div>
}