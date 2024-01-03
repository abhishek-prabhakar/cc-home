import { db } from "~/utils/database";

export const ServiceQuery = {
    getVendorServices: (serviceGroupId: string, serviceIds: string[]) => {

        return db.vendorServiceGroup.findFirst({
            where: {
                groupId: serviceGroupId
            },
            select: {
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
                        cost: true,
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

        // return db.serviceGroup.findFirst({
        //     where: {
        //         serviceGroupItem: {
        //             some: {
        //                 service: {
        //                     id: {
        //                         in: serviceIds
        //                     }
        //                 }
        //             },
        //         }
        //     },
        //     select: {
        //         id: true,
        //         name: true,
        //         serviceGroupItem: {
        //             where: {
        //                 service: {
        //                     id: {
        //                         in: serviceIds
        //                     }
        //                 }
        //             },
        //             select: {
        //                 isOptional: true,
        //                 service: {
        //                     select: {
        //                         name: true,
        //                         imageName: true,
        //                         vendorService: {
        //                             select: {
        //                                 id: true,
        //                                 cost: true,
        //                                 vendor: {
        //                                     select: {
        //                                         id: true,
        //                                         username: true,
        //                                         profileImageName: true,
        //                                         vendorType: {
        //                                             select: {
        //                                                 name: true
        //                                             }
        //                                         }
        //                                     }
        //                                 }
        //                             }
        //                         }
        //                     }
        //                 }
        //             }
        //         }
        //     }
        // });
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
                    select: {
                        id: true,
                        name: true,
                        serviceGroupItem: {
                            select: {
                                service: {
                                    select: {
                                        id: true,
                                        name: true,
                                        fareMode: true
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