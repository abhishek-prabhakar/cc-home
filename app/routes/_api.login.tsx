import { Prisma } from "@prisma/client";
import { ActionFunction, json } from "@remix-run/node";
import { PrismaClient } from "@prisma/client";

export async function action({
    request,
}: any) {
    const body = await request.formData();
    const prisma = new PrismaClient();

    const data = prisma.user.create({
        data: {
            username: body.get('username')
        },
    });

    return json({ success: true, data: data }, 200);
}