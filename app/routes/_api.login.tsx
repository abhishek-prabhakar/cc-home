import {  json } from "@remix-run/node";
import generateUuid from "~/utils/uuid.generator";
import SmsService from "~/service/sms.service";
import { generateOtp } from "~/utils/otp.generator";
import UserService from "~/service/user.service";
import { db } from "~/utils/database";
var bcrypt = require('bcryptjs');

export async function action({
    request,
}: any) {
    const body = await request.formData();
    const username = body.get('phone');
    let data;
    let success = false;
    try {
        const existingUser = await db.user.findFirst({
            where: {
                username
            }
        });

        if (!existingUser?.id) {
            data = await UserService.Create(username);
        }

        const otp = generateOtp(); 
        const otpHash = await bcrypt.hash('' + otp, 10);
        await db.userOtp.deleteMany({
            where: {
                username
            },
        });

        await db.userOtp.create({
            data: {
                id: generateUuid(),
                username,
                otpHash
            },
        });

        await SmsService.sendSMS({
            to: username,
            message: otp + ' is your OTP to login to Celebria Collective - celebriacollective.com'
        });

        success = true;
    } catch (r) {
        data = r;
    }


    return json({ success, data: data }, 200);
}