import { db } from "~/utils/database";

export const ServiceQuery = {
    getVendorServices: (vendorServiceGroupId: string, serviceIds: string[]) => {

        return db.vendorServiceGroup.findFirst({
            where: {
                id: vendorServiceGroupId
            },
            select: {
                id: true,
                cost: true,
                vendor: {
                    select: {
                        username: true,
                        profileImageName: true,
                        vendorType: {
                            select: {
                                name: true
                            }
                        }
                    }
                },
                group: {
                    select: {
                        id: true,
                        name: true,
                        imageName: true
                    }
                },
                vendorService: {
                    where: {
                        serviceId: {
                            in: serviceIds
                        }
                    },
                    select: {
                        fareMode: true,
                        cost: true,
                        service: {
                            select: {
                                fareMode: true,
                                id: true,
                                name: true
                            }
                        }
                    }
                }
            }
        });
    },
    getServicesByJob: () => {
        return db.vendorType.findMany({
            orderBy: {
                name: 'asc'
            },
            select: {
                id: true,
                name: true,
                serviceGroup: {
                    orderBy: {
                        name: 'asc'
                    },
                    select: {
                        id: true,
                        name: true,
                        serviceGroupItem: {
                            orderBy: {
                                isOptional: 'asc'
                            },
                            select: {
                                addonGroup: {
                                    select: {
                                        name: true
                                    }
                                },
                                isOptional: true,
                                service: {
                                    select: {
                                        id: true,
                                        name: true,
                                        fareMode: true,
                                        minHour: true,
                                        description: true
                                    }
                                }
                            }
                        }
                    }
                }
            }
        })
    },
    getServiceByGroup: () => {
        return db.serviceGroup.findMany({
            orderBy: {
                name: 'asc'
            },
            select: {
                name: true,
                id: true,
                serviceGroupItem: {
                    select: {
                        service: {
                            select: {
                                id: true,
                                name: true
                            }
                        }
                    }
                }
            }
        })
    }
}