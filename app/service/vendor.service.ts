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
                                            cost: true,
                                            duration: true,
                                            vendorId: true
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
                }
            }).then(r => {
                resolve(r.map(x => ({
                    id: x.id,
                    title: x.name,
                    included: x.serviceGroupItem.filter(y => !y.isOptional).map(y => ({
                        id: y.service.id,
                        title: y.service.name,
                        duration: y.service.vendorServices[0]?.duration
                    })),
                    addons: x.serviceGroupItem.filter(y => y.isOptional).map(y => ({
                        id: y.service.id,
                        title: y.service.name,
                        duration: y.service.vendorServices[0]?.duration
                    }))
                })))
            });
        });

    },
    getServiceById: (serviceId: string) => {
        return {
            id: 's1',
            title: 'Wedding',
            included: [{
                id: 'Pre-wedding',
                title: 'Pre-wedding',
                duration: 4
            },
            {
                id: 'op2',
                title: 'Wedding eve',
                duration: 4
            }],
            addons: [{
                id: 'ad1',
                title: 'Kids shoot',
                duration: 4
            }]
        };
    }
}