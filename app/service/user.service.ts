import axios from "axios";
import { UserLoginInput, UserVerifyOtpInput } from "~/types";
import { db } from "~/utils/database";

const UserService = {
    Login: (data: UserLoginInput) => {
        return Request.post('/login', { phone: data.phone })
    },
    VerifyOtp: (data: UserVerifyOtpInput) => {
        return Request.post('/verify-otp', { phone: data.phone, otp: data.otp });
    },
    getUser: (username: string) => {
        return db.user.findFirst({
            where: {
                username
            }
        });
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