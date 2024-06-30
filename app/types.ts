import { BannerLocation, ChatThread_type, FareMode } from "@prisma/client";

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
    bio?: string | null;
    baseCharge: number;
}

export type VendorPortfolio = {
    portfolio: string[]
}

export type VendorServiceOption = {
    id: string,
    title: string,
    duration: number,
    cost?: number,
    fareMode?: FareMode
}

export type AddonGroupItem = { id: string, title: string, services: VendorServiceOption[] }

export type VendorService = {
    vendorServiceGroupId: string,
    title: string,
    groupId: string,
    minHour: number,
    cost: number,
    image?: string,
    costExtraHour?: number,
    isEstimated?: boolean,
    included: VendorServiceOption[],
    addons: VendorServiceOption[],
    selectableList?: AddonGroupItem[]
}

export type VendorServicePublic = {
    vendorServiceGroupId: string,
    groupId:string,
    title: string,
    cost: number,
    isEstimated?: boolean,
    included: { id: string,
        title: string }[],
    addons: { id: string,
        title: string }[],
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
    cost: number,
    isEstimated: boolean,
    location: string,
    locationLat: number,
    locationLon: number,
    services: CartItemService[]
};
export type CartInputService = { id: string };
export type CartInput = {
    vendorServiceGroupId: string,
    date: string,
    timeHour: number,
    duration: number,
    location: string,
    locationLat: number,
    locationLon: number,
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


export type SearchResultItem = {
    id: string,
    name: string,
    vendorType: {
        keyName: string,
        name: string
    },
    serviceGroupType: { name: string } | null,
    serviceGroupItem: {
        service: {
            name: string;
        };
    }[];
}

export type PortfolioItem = {
    type: string,
    value: string
}


export type VendorResultListItem = {
    id: string;
    name: string;
    portfolio: PortfolioItem[];
    rating: number;
    tag?: string;
    profileImg: string;
    services: string[];
    startsFrom?: number;
};
export type ChatOutputThread = {
    type: ChatThread_type;
    message: string;
    created_at: Date | string;
    memberId: string;
}

export type ChatOutput = {
   threads: ChatOutputThread[],
    members: {
        user: {
            name: string | null;
        } | null;
        vendor: {
            username: string;
            profileImageName: string | null;
        } | null;
    }[]
}


export enum CHAT_DATA_TYPE {
    RECENT = 'RECENT',
    ALL_THREADS = 'ALL_THREADS'
}