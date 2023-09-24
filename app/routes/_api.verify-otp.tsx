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
            success = true;
        }
    } catch (r) {

    }

    if (success) {
        resCode = 200;
    }

    return json({ success }, resCode);
}