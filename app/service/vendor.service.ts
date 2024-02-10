import { PATH } from "~/path.data";
import { AddonGroupItem, VendorProfile, VendorService, VendorServiceOption } from "~/types";
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
                orderBy: {
                    group: {
                        name: 'asc'
                    }
                },
                where: {
                    vendorService: {
                        some: {
                            vendor: {
                                username
                            }
                        }
                    }
                },
                select: {
                    id: true,
                    cost: true,
                    group: {
                        select: {
                            name: true,
                            minHour: true,
                            serviceGroupItem: {
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
                                },
                                select: {
                                    serviceId: true,
                                    isOptional: true,
                                    addonGroup: {
                                        select: {
                                            name: true,
                                            id: true
                                        }
                                    },
                                    service: {
                                        select: {
                                            id: true,
                                            name: true,
                                        }
                                    }
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

                resolve(r.map(x => {
                    const includedIds = x.group.serviceGroupItem.filter(i => !i.isOptional).map(i => i.serviceId);
                    const included = x.vendorService.filter(i => includedIds.includes(i.service.id));
                    let optional = x.vendorService.filter(i => !includedIds.includes(i.service.id))

                    const selectableList = x.group.serviceGroupItem.reduce<AddonGroupItem[]>((acc, item) => {
                        if (!item.addonGroup) {
                            return acc;
                        }
                        const addongGrp = acc.find(i => i.id === item.addonGroup?.id);
                        if (!addongGrp) {
                            acc.push({
                                id: item.addonGroup?.id,
                                title: item.addonGroup?.name,
                                services: [{
                                    id: item.service.id,
                                    title: item.service.name,
                                    duration: 0
                                }]
                            });
                        } else {
                            addongGrp.services.push({
                                id: item.service.id,
                                title: item.service.name,
                                duration: 0
                            });
                        }
                        optional = optional.filter(x => x.service.id !== item.serviceId);
                        return acc;
                    }, []);

                    return {
                        vendorServiceGroupId: x.id,
                        title: x.group.name,
                        minHour: x.group.minHour,
                        cost: x.cost,
                        included: included.map(i => ({
                            id: i.service.id,
                            title: i.service.name,
                            duration: i.duration
                        })),
                        addons: optional.map(i => ({
                            id: i.service.id,
                            title: i.service.name,
                            duration: i.duration
                        })),
                        selectableList
                    }
                }));
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
                    isActive: true,
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