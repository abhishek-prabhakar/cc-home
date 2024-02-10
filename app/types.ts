import { BannerLocation, FareMode } from "@prisma/client";

export type RootLoaderData = {
    user: User | null,
    pages: HeaderNavListItem[]
}

export type HeaderNavListItem = {
    id: string,
    name: string,
    children: {
        name: string,
        list: {
            path: string,
            id: string,
            name: string,
        }[]
    }[]
}

export type VendorProfile = {
    username: string,
    id: string,
    fullName: string,
    location: string
    gender: string;
    type: string;
    coverImageName?: string | null;
    primaryColor?: string;
    avatar?: string;
}

export type VendorPortfolio = {
    portfolio: string[]
}

export type VendorServiceOption = {
    id: string,
    title: string,
    duration: number
}

export type AddonGroupItem = { id: string, title: string, services: VendorServiceOption[] }

export type VendorService = {
    vendorServiceGroupId: string,
    title: string,
    minHour: number,
    cost: number,
    included: VendorServiceOption[],
    addons: VendorServiceOption[],
    selectableList?: AddonGroupItem[]
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
export type CartItemService = {
    id: string,
    name: string,
    cost: number,
    fareMode: FareMode
};
export type CartItem = {
    name: string,
    coverImg?: string | null,
    vendorId: string,
    vendorName: string,
    vendorType: string,
    vendorImg: string;
    vendorServiceGroupId: string,
    date: Date | string,
    timeHour: number,
    duration: number,
    services: CartItemService[]
};
export type CartInputService = { id: string };
export type CartInput = {
    vendorServiceGroupId: string,
    date: Date,
    timeHour: number,
    duration: number,
    services: CartInputService[]
}



export type Jumbotron = {
    title: string,
    description: string,
    img: string,
    url: string
}
export type BannerItem = Jumbotron & { bannerLocation: BannerLocation }


export type CollectionType = {
    id: string;
    name: string;
    description?: string;
    imageName?: string | null;
    collection?: string | null;
    isCollection: boolean;
    path: string,
}
export type HomeCategoryItem = {
    id: string,
    title: string,
    description?: string;
    serviceGroup: CollectionType[]
}


export type Collection = {
    id: string,
    title: string,
    label: string,
    image: string | null,
    path: string,
    cost: number,
}