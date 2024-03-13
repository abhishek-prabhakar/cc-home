import { UserSource } from "@prisma/client";
import { PATH } from "~/path.data";
import { AddonGroupItem, VendorProfile, VendorService, VendorServiceOption } from "~/types";
import { db } from "~/utils/database";
import generateUuid from "~/utils/uuid.generator";


function Stories(username?: string) {
    if (!username) {
        throw new Error("invalid user");
    }
    return db.vendorPortfolio.findMany({
        select: {
            serviceGroupId: true,
            serviceGroup: {
                select: {
                    name: true,
                    vendorType: {
                        select: {
                            name: true
                        }
                    }
                }
            },
            fileName: true,
        },
        where: {
            vendor: {
                username
            }
        },
        orderBy: {
            createdAt: 'desc'
        },
        distinct: ['serviceGroupId']
    });
}

function portfolioByAlbumId(input: { username: string, albumId?: string | null }) {
    return db.vendorPortfolio.findMany({
        where: {
            vendor: {
                username: input.username,
            },
            serviceGroupId: input.albumId
        },
        select: {
            fileName: true
        },
        orderBy: {
            createdAt: 'desc'
        }
    });
}

function portfolioByUsername(username?: string) {
    if (!username) {
        throw new Error("invalid user");
    }

    return db.vendorPortfolio.findMany({
        where: {
            vendor: {
                username: username,
            }
        },
        select: {
            fileName: true
        },
        orderBy: {
            createdAt: 'desc'
        }
    });
}

export const VendorQuery = {
    Stories,
    portfolioByAlbumId,
    portfolioByUsername,
    Signup: (props: {
        fullName: string,
        mobileNumber: string,
        email: string,
        username: string
        socialUrl?: string | null,
        categoryId?: string | null
    }) => {
        return db.vendor.create({
            data: {
                id: generateUuid(),
                name: props.fullName,
                mobileNumber: props.mobileNumber,
                email: props.email,
                username: props.username,
                source: UserSource.MANUAL,
                isActive: false,
                socialUrl: props.socialUrl,
                categoryId: props.categoryId
            }
        });
    },
    getVendorByUsername: (username: string) => {
        return new Promise<VendorProfile | null>(function (resolve, reject) {
            db.vendor.findFirstOrThrow({
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
                    bio: true,
                    vendorType: {
                        select: {
                            name: true
                        }
                    },
                    VendorServiceGroup: {
                        take: 1,
                        orderBy: {
                            cost: 'asc'
                        },
                        select: {
                            cost: true
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
                        bio: r.bio,
                        baseCharge: r.VendorServiceGroup[0]?.cost || 0
                    });
                } else {
                    resolve(null);
                }
            }).catch(e => reject(false));
        });
    },
    getServices: (username: string) => {
        return new Promise<{ name: string, services: VendorService[] }[]>(function (resolve) {

            db.vendorServiceGroup.findMany({
                orderBy: [{
                    group: {
                        name: 'asc'
                    }
                }, {
                    group: {
                        serviceGroupType: {
                            name: 'asc'
                        }
                    }
                }],
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
                            serviceGroupType: {
                                select: {
                                    name: true
                                }
                            },
                            id: true,
                            name: true,
                            minHour: true,
                            isEstimated: true,
                            serviceGroupItem: {
                                orderBy: {
                                    position: 'asc'
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
                                    fareMode: true
                                }
                            },
                            cost: true,
                            duration: true,
                        }
                    }
                },
            }).then(r => {
                const groupedItems: { [key in string]: { name: string, services: VendorService[] } } = {};

                r.forEach(x => {
                    const grouptype = x.group.serviceGroupType?.name || 'Others';
                    if (!groupedItems[grouptype]) {
                        groupedItems[grouptype] = { name: grouptype, services: [] };
                    }

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
                                    duration: 0,
                                }]
                            });
                        } else {
                            const addonItem = optional.find(x => x.service.id === item.serviceId);
                            addongGrp.services.push({
                                id: item.service.id,
                                title: item.service.name,
                                duration: 0,
                                cost: addonItem?.cost,
                                fareMode: addonItem?.service.fareMode
                            });
                        }
                        optional = optional.filter(x => x.service.id !== item.serviceId);
                        return acc;
                    }, []);

                    groupedItems[grouptype].services.push({
                        vendorServiceGroupId: x.id,
                        groupId: x.group.id,
                        title: x.group.name,
                        minHour: x.group.minHour,
                        cost: x.cost,
                        isEstimated: x.group.isEstimated,
                        included: included.map(i => ({
                            id: i.service.id,
                            title: i.service.name,
                            duration: i.duration,
                        })),
                        addons: optional.map(i => ({
                            id: i.service.id,
                            title: i.service.name,
                            duration: i.duration,
                            cost: i.cost,
                            fareMode: i.service.fareMode
                        })),
                        selectableList
                    });
                });

                resolve(Object.values(groupedItems));
            });
        });
    },
    getVendorServiceGroup: (id: string) => {
        return new Promise<VendorService>(function (resolve) {

            db.vendorServiceGroup.findFirstOrThrow({
                orderBy: [{
                    group: {
                        name: 'asc'
                    }
                }, {
                    group: {
                        serviceGroupType: {
                            name: 'asc'
                        }
                    }
                }],
                where: {
                    id
                },
                select: {
                    id: true,
                    cost: true,
                    costExtraHour: true,
                    group: {
                        select: {
                            serviceGroupType: {
                                select: {
                                    name: true
                                }
                            },
                            id: true,
                            name: true,
                            minHour: true,
                            imageName: true,
                            serviceGroupItem: {
                                orderBy: {
                                    position: 'asc'
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

                const includedIds = r.group.serviceGroupItem.filter(i => !i.isOptional).map(i => i.serviceId);
                const included = r.vendorService.filter(i => includedIds.includes(i.service.id));
                let optional = r.vendorService.filter(i => !includedIds.includes(i.service.id))

                const selectableList = r.group.serviceGroupItem.reduce<AddonGroupItem[]>((acc, item) => {
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

                const groupData: VendorService = {
                    vendorServiceGroupId: r.id,
                    groupId: r.group.id,
                    title: r.group.name,
                    image: r.group.imageName ? PATH.RESOURCE_URL + r.group.imageName : PATH.FALLBACK_IMG,
                    minHour: r.group.minHour,
                    cost: r.cost,
                    costExtraHour: r.costExtraHour,
                    included: included.map(i => ({
                        id: i.service.id,
                        title: i.service.name,
                        duration: i.duration
                    })),
                    addons: optional.map(i => ({
                        id: i.service.id,
                        title: i.service.name,
                        duration: i.duration,
                        cost: i.cost
                    })),
                    selectableList
                };

                resolve(groupData);
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