import { ActionFunction, json, redirect } from "@remix-run/node"
import { PrismaClient } from "@prisma/client";
import { db } from "~/utils/database";
import { USER_SESSION_KEY, commitSession, getSession } from "~/session.server";
var bcrypt = require('bcryptjs');

export async function action({
    request,
}: any) {
    const body = await request.formData();
    const prisma = new PrismaClient();
    const username = body.get('phone');
    const otp = body.get('otp');
    const redirectUrl = body.get('redirectUrl')?.toString() || '/user/home';

    let success = false;
    let resCode = 400;
    try {
        const existingUser = await prisma.userOtp.findFirstOrThrow({
            where: {
                username
            }
        });

        const verified = await bcrypt.compare(otp, existingUser.otpHash);
        if (verified) {
            await prisma.userOtp.deleteMany({
                where: {
                    username
                },
            });
            const user = await db.user.findFirst({
                where: {
                    username
                }
            })
            success = true;

            if (user) {
                const token = user?.id;
                const session = await getSession(
                    request.headers.get("Cookie")
                );

                session.set(USER_SESSION_KEY, token);
                return redirect(redirectUrl, {
                    headers: {
                        "Set-Cookie": await commitSession(session),
                    },
                });
            }
        }
    } catch (r) {

    }

    if (success) {
        resCode = 200;
    }

    return json({ success }, resCode);
}