import { UserSource } from "@prisma/client";
import axios from "axios";
import { UserLoginInput, UserVerifyOtpInput } from "~/types";
import { db } from "~/utils/database";
import generateUuid from "~/utils/uuid.generator";

const UserService = {
    Login: (data: UserLoginInput) => {
        return Request.post('/login', { phone: data.phone })
    },
    VerifyOtp: (data: UserVerifyOtpInput) => {
        return Request.post('/verify-otp', { phone: data.phone, otp: data.otp });
    },
    Create: async (username: string, source:UserSource = UserSource.ORGANIC) =>{
       const data = await db.user.create({
            data: {
                id: generateUuid(),
                username,
                source
            },
        });
        return data;
    }
}

const Request = {
    post: (url: string, params: Object) => {
        return axios({
            method: 'post', url, data: params,
            headers: { "Content-Type": "multipart/form-data" }
        });
    }
}

export default UserService;