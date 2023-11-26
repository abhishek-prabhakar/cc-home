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
                                imageName: true,
                                vendorServices: {
                                    select: {
                                        id: true,
                                        cost: true,
                                        vendors: {
                                            select: {
                                                id: true,
                                                username: true,
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