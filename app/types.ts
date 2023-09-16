export type VendorProfile = {
    id: string,
    fullName: string,
    location: string
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