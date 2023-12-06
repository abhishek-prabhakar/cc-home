import { db } from "~/utils/database";

export const ServiceQuery = {
    getVendorServices: (serviceIds: string[]) => {
        return db.serviceGroup.findFirst({
            where: {
                serviceGroupItem: {
                    some: {
                        service: {
                            vendorService: {
                                some: {
                                    id: {
                                        in: serviceIds
                                    }
                                }
                            }
                        }
                    },
                }
            },
            select: {
                id: true,
                name: true,
                serviceGroupItem: {
                    where: {
                        service: {
                            vendorService: {
                                some: {
                                    id: {
                                        in: serviceIds
                                    }
                                }
                            }
                        }
                    },
                    select: {
                        isOptional: true,
                        service: {
                            select: {
                                name: true,
                                imageName: true,
                                vendorService: {
                                    select: {
                                        id: true,
                                        cost: true,
                                        vendor: {
                                            select: {
                                                id: true,
                                                username: true,
                                                profileImageName: true,
                                                vendorType: {
                                                    select: {
                                                        name: true
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        });
    }
}