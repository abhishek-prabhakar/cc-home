import { ActionFunction, json, redirect } from "@remix-run/node"
import { PrismaClient } from "@prisma/client";
var bcrypt = require('bcryptjs');

export async function action({
    request,
}: any) {
    const body = await request.formData();
    const prisma = new PrismaClient();
    const username = body.get('phone');
    const otp = body.get('otp');

    let success = false;
    try {
        const otpHash = await bcrypt.hash(otp, 10);
        const existingUser = await prisma.userOtp.findFirstOrThrow({
            where: {
                username,
                otpHash
            }
        });

        if (existingUser) {
            success = true;
            await prisma.userOtp.deleteMany({
                where: {
                    username
                },
            });
        }
    } catch (r) {
        console.log(r)
    }


    return json({ success }, 200);
}