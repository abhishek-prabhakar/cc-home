import { ActionFunction, json } from "@remix-run/node";
import { PrismaClient, UserSource } from "@prisma/client";
import generateUuid from "~/utils/uuid.generator";
var bcrypt = require('bcryptjs');

export async function action({
    request,
}: any) {
    const body = await request.formData();
    const prisma = new PrismaClient();
    const username = body.get('phone');
    let data
    let success = false;
    try {
        const existingUser = await prisma.user.findFirst({
            where: {
                username
            }
        });

        if (!existingUser?.id) {
            data = await prisma.user.create({
                data: {
                    id: generateUuid(),
                    username,
                    source: UserSource.ORGANIC
                },
            });
        }

        const otp = '1234';
        const otpHash = await bcrypt.hash(otp, 10);
        await prisma.userOtp.deleteMany({
            where: {
                username
            },
        });

        await prisma.userOtp.create({
            data: {
                id: generateUuid(),
                username,
                otpHash
            },
        });

        success = true;
    } catch (r) {
        data = r;
    }


    return json({ success, data: data }, 200);
}