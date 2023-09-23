import axios from "axios";
import { UserLoginInput, UserVerifyOtpInput } from "~/types";

const UserService = {
    Login: (data: UserLoginInput) => {
        return axios({
            method: 'post', url: '/login', data: { username: data.phone },
            headers: { "Content-Type": "multipart/form-data" }
        });
    },
    VerifyOtp: (data: UserVerifyOtpInput) => {
        return axios.post('/verify-otp', { phone: data.phone, otp: data.otp });
    }
}

export default UserService;