import { Container } from "@mantine/core";
import { LoaderArgs } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import { USER_SESSION_KEY, getSession } from "~/session.server";
import { db } from "~/utils/database";


export async function loader(args: LoaderArgs): Promise<boolean> {
    const session = await getSession(
        args.request.headers.get("Cookie")
    );
    const userId = session.get(USER_SESSION_KEY);

    if (!userId) {
        return false;
    }

    const user = await db.user.findFirstOrThrow({
        select:{
            username: true
        },
        where:{
            id: userId
        }
    });

    const vendor =  await db.vendor.findFirstOrThrow({
        where:{
            mobileNumber: user.username
        },
        select:{
            id: true
        }
    });

    if(!vendor){
        throw new Response('Page not found',{
			status: 404,
		});
    }

    return true;
}

export default function(){
    return <Outlet/>
}
