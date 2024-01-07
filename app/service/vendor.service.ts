import { PATH } from "~/path.data";
import { VendorProfile, VendorService, VendorServiceOption } from "~/types";
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
                    profileImageName: true,
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
                        avatar: r.profileImageName ? PATH.RESOURCE_URL + r.profileImageName : PATH.AVATAR_PLACEHOLDER,
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

            db.vendorServiceGroup.findMany({
                where: {
                    group: {
                        VendorServiceGroup: {
                            some: {
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
                select: {
                    id: true,
                    group: {
                        select: {
                            name: true,
                            serviceGroupItem: {
                                select: {
                                    serviceId: true,
                                    isOptional: true
                                }
                            }
                        },
                    },
                    vendorService: {
                        select: {
                            service: {
                                select: {
                                    id: true,
                                    name: true,
                                }
                            },
                            cost: true,
                            duration: true,
                        }
                    }
                },
            }).then(r => {
                resolve(r.map(x => ({
                    vendorServiceGroupId: x.id,
                    title: x.group.name,
                    included: x.vendorService.reduce<VendorServiceOption[]>((arr, i) => {
                        const item = x.group.serviceGroupItem.find(y => y.serviceId === i.service.id);
                        if (item && !item?.isOptional) {
                            arr.push({
                                id: i.service.id,
                                title: i.service.name,
                                duration: i.duration
                            })
                        }
                        return arr;
                    }, []),
                    addons: x.vendorService.filter(y => x.group.serviceGroupItem.find(service => y.service.id === service.serviceId)?.isOptional).map(y => ({
                        id: y.service.id,
                        title: y.service.name,
                        duration: y.duration
                    }))
                })));
            });
        });
    },
    topRatedVendorsByType: (vendorType: string) => {
        return new Promise<{
            id: string,
            name: string,
            image: string
        }[]>(function (resolve) {
            db.vendor.findMany({
                take: 6,
                where: {
                    vendorType: {
                        keyName: vendorType
                    }
                },
                select: {
                    username: true,
                    profileImageName: true
                }
            }).then(r => {
                resolve(r.map(x => ({
                    id: x.username,
                    name: x.username,
                    image: x.profileImageName ? PATH.RESOURCE_URL + x.profileImageName : PATH.AVATAR_PLACEHOLDER
                })))
            });
        })
    }
}