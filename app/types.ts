export type RootLoaderData = {
    user: User | null,
    pages: { keyName: string, name: string }[]
}


export type VendorProfile = {
    username: string,
    id: string,
    fullName: string,
    location: string
    gender: string;
    type: string;
    avatar?: {
        large: string;
        thumbnail: string;
    };
}

export type VendorPortfolio = {
    portfolio: string[]
}

export type VendorServiceOption = {
    id: string,
    title: string,
    duration: number
}

export type VendorService = {
    id: string,
    title: string,
    included: VendorServiceOption[],
    addons: VendorServiceOption[]
}

export type Vendor = VendorProfile & VendorPortfolio & { services: VendorService[] };



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

export type CartActiveService = VendorServiceOption & { date: string, time: string };
export type CartItem = {
    serviceGroupId: string,
    services: {
        id: string,
        name: string,
        vendorId: string,
        vendorName: string,
        vendorType: string,
        cost: number,
        isOptional: boolean,
        date: Date,
        time: string,
        duration: number,
        image?: string | null
    }[]
};
export type CartInputService = { vendorServiceId: string, date: Date, time: string };
export type CartInput = {
    serviceGroupId: string,
    service: CartInputService[]
}