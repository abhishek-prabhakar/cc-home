export type VendorProfile = {
    id: string,
    fullName: string,
    location: string
    gender: string;
    email: string;
    type: string;
    avatar?: {
        large: string;
        thumbnail: string;
    };
}

export type VendorPortfolio = {
    portfolio?: string[]
}

export type Vendor = VendorProfile & VendorPortfolio;


export type Jumbotron = {
    title: string,
    description: string,
    label: string,
    img: string
}

export type HomePage = { jumbotron: Jumbotron[] };

export type UserLoginInput = {
    phone: number
}
export type UserVerifyOtpInput = {
    phone: number,
    otp: number
}
export type User = {
    id: string,
    name: string,
    phone: number,
    email?: string
}

export type UserBooking = {
    id: string,
    name: string,
    date: Date,
    vendors: VendorProfile[]
}

export type UserData = {
    bookings: UserBooking[]
}

export enum OrderStatus {
    CONFIRMED = 'CONFIRMED',
    PENDING = 'PENDING',
    CANCELLED = 'CANCELLED'
}
