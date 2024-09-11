import { ActionArgs } from "@remix-run/node";
import { USER_SESSION_KEY, getSession } from "~/session.server";
import { User } from "~/types";
import { db } from "~/utils/database";

export async function action({
    request,
}: ActionArgs) {
    const cookieHeader = request.headers.get("Cookie");
    const session = await getSession(cookieHeader);
    const userId = session.get(USER_SESSION_KEY);

    const form = await request.formData();
    const fullName = form.get('fullName')?.toString();

    const data = await db.user.update({
        where:{
            id: userId
        },
        data:{
            name: fullName
        },
        select:{
            id: true,
            name: true,
            username: true,
            email: true
        }
    });
    const user: User = {
        id: data.id,
        name:data.name,
        phone: data.username,
        email: data.email
    }
    return  user;
}