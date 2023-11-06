import { VendorProfile, VendorService } from "~/types";
import { db } from "~/utils/database";

export const VendorQuery = {
    getVendorByUsername: (username: string) => {
        return new Promise<VendorProfile | null>(function (resolve) {
            db.vendors.findFirst({
                where: {
                    username
                },
                select: {
                    id: true,
                    username: true,
                    name: true,
                    vendorType: {
                        select: {
                            name: true
                        }
                    }
                }
            }).then(r => {
                if (r) {
                    resolve({
                        id: r.id,
                        username: r.username,
                        fullName: r.username,
                        location: '',
                        gender: '',
                        type: r.vendorType.name
                    });
                } else {
                    resolve(null);
                }
            });
        });
    },
    getServices: (username: string) => {
        return new Promise<VendorService[]>(function (resolve) {
            db.serviceGroup.findMany({
                select: {
                    id: true,
                    name: true,
                    serviceGroupItem: {
                        select: {
                            isOptional: true,
                            service: {
                                select: {
                                    id: true,
                                    name: true,
                                    vendorServices: {
                                        select: {
                                            id: true,
                                            cost: true,
                                            duration: true,
                                            vendorId: true
                                        }
                                    }
                                }
                            }
                        },
                        where: {
                            service: {
                                vendorServices: {
                                    some: {
                                        vendors: {
                                            username
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                where: {
                    serviceGroupItem: {
                        some: {
                            service: {
                                vendorServices: {
                                    some: {
                                        vendors: {
                                            username
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                orderBy: {
                    name: 'asc'
                }
            }).then(r => {
                resolve(r.map(x => ({
                    id: x.id,
                    title: x.name,
                    included: x.serviceGroupItem.filter(y => !y.isOptional).map(y => ({
                        id: y.service.vendorServices[0].id,
                        title: y.service.name,
                        duration: y.service.vendorServices[0]?.duration
                    })),
                    addons: x.serviceGroupItem.filter(y => y.isOptional).map(y => ({
                        id: y.service.vendorServices[0].id,
                        title: y.service.name,
                        duration: y.service.vendorServices[0]?.duration
                    }))
                })))
            });
        });

    }
}