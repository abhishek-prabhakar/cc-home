import { PATH } from "~/path.data";
import { VendorProfile, VendorService } from "~/types";
import { db } from "~/utils/database";

export const VendorQuery = {
    getVendorByUsername: (username: string) => {
        return new Promise<VendorProfile | null>(function (resolve) {
            db.vendor.findFirst({
                where: {
                    username,
                    isActive: true
                },
                select: {
                    id: true,
                    username: true,
                    name: true,
                    primaryColor: true,
                    coverImageName: true,
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
                        type: r.vendorType?.name || '',
                        primaryColor: r.primaryColor,
                        coverImageName: r.coverImageName ? PATH.RESOURCE_URL + r.coverImageName : '',
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
                                    vendorService: {
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
                                vendorService: {
                                    some: {
                                        vendor: {
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
                                vendorService: {
                                    some: {
                                        vendor: {
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
                        id: y.service.vendorService[0].id,
                        title: y.service.name,
                        duration: y.service.vendorService[0]?.duration
                    })),
                    addons: x.serviceGroupItem.filter(y => y.isOptional).map(y => ({
                        id: y.service.vendorService[0].id,
                        title: y.service.name,
                        duration: y.service.vendorService[0]?.duration
                    }))
                })))
            });
        });

    }
}