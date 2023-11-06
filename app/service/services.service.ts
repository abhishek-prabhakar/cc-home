import { db } from "~/utils/database";

export const ServiceQuery = {
    getVendorServices: (serviceIds: string[]) => {
        return db.serviceGroup.findFirst({
            where: {
                serviceGroupItem: {
                    some: {
                        service: {
                            vendorServices: {
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
                    select: {
                        isOptional: true,
                        service: {
                            select: {
                                name: true,
                                vendorServices: {
                                    select: {
                                        id: true,
                                        cost: true,
                                        vendors: {
                                            select: {
                                                username: true
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