import { db } from "~/utils/database";

export const ServiceQuery = {
    getVendorServices: (serviceIds: string[]) => {
        return db.serviceGroup.findFirst({
            select: {
                id: true,
                name: true,
                serviceGroupItem: {
                    where: {
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