import { UserSource } from "@prisma/client";
import { PATH } from "~/path.data";
import { AddonGroupItem, VendorProfile, VendorResultListItem, VendorService, VendorServiceOption, VendorServicePublic } from "~/types";
import { db } from "~/utils/database";
import generateUuid from "~/utils/uuid.generator";


function Stories(username?: string) {
    if (!username) {
        throw new Response('vendor not found',{
			status: 500,
		});
    }
    return db.vendorPortfolio.findMany({
        select: {
            serviceGroupId: true,
            serviceGroup: {
                where:{
                    isActive: true,
                },
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
            },
            fileType: 'img'
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
        throw new Response('User not found',{
			status: 500,
		});
    }

    return db.vendorPortfolio.findMany({
        where: {
            vendor: {
                username: username,
            }
        },
        select: {
            fileType: true,
            fileName: true
        },
        orderBy: {
            createdAt: 'desc'
        }
    });
}


function getFilteredVendors(params: {
    vendorType: string, serviceGroupIds: string[], page: number, limit: number, sortBy: {
        cost?: 'asc' | 'desc'
    }
}) {

    const result = new Promise<{ data: VendorResultListItem[], loadMore: boolean }>(function (resolve, reject) {
        db.vendorType
            .findFirstOrThrow({
                where: {
                    isActive: true,
                    keyName: params.vendorType,
                },
                select: {
                    id: true,
                    serviceGroup: {
                        where: {
                            isActive: true,
                            id: {
                                in: params.serviceGroupIds,
                            },
                        },
                        select: {
                            id: true,
                        },
                    },
                },
            })
            .then(async (res) => {
                const serviceGrpIds = res.serviceGroup.map((x) => x.id);

                const query = db.vendorServiceGroup.findMany({
                    skip: params.page * params.limit,
                    take: params.limit,
                    distinct: ['vendorId'],
                    orderBy: {
                        cost: params.sortBy.cost
                    },
                    select: {
                        cost: true,
                        BookingService: {
                            select: {
                                rating: true
                            }
                        },
                        vendor: {
                            select: {
                                id: true,
                                username: true,
                                profileImageName: true,
                                services: {
                                    select: {
                                        service: {
                                            select: {
                                                name: true,
                                            },
                                        },
                                    },
                                    where: {
                                        serviceGroup: {
                                            isActive: true,
                                            groupId: {
                                                in: serviceGrpIds.length ? serviceGrpIds : undefined,
                                            },
                                        },
                                    },
                                    take: 5,
                                },
                                vendorPortfolio: {
                                    orderBy: {
                                        createdAt: 'desc'
                                    },
                                    select: {
                                        fileName: true,
                                        fileType: true,
                                    },
                                    where: {
                                        serviceGroupId: {
                                            in: serviceGrpIds.length ? serviceGrpIds : undefined,
                                        },
                                    },
                                    take: 4
                                },
                            }
                        }
                    },
                    where: {
                        isActive: true,
                        vendor: {
                            isActive: true,
                            categoryId: res.id,
                        },
                        groupId: {
                            in: serviceGrpIds.length ? serviceGrpIds : undefined,
                        }
                    }
                });

                const totalCount = db.vendorServiceGroup.findMany({
                    distinct: ['vendorId'],
                    select: {
                        id: true
                    },
                    where: {
                        vendor: {
                            isActive: true,
                            categoryId: res.id,
                        },
                        groupId: {
                            in: serviceGrpIds.length ? serviceGrpIds : undefined,
                        },
                    },
                });

                const [resultData, countData] = await db.$transaction([
                    query,
                    totalCount
                ]);

                const loadMore = params.page * params.limit + params.limit <= countData.length;
                resolve({
                    data: resultData.map((x) => ({
                        id: x.vendor.username,
                        name: x.vendor.username,
                        portfolio: x.vendor.vendorPortfolio.map((x) =>
                            ({ type: x.fileType, value: x.fileName })
                        ),
                        rating: x.BookingService.reduce((s, i) => s + i.rating, 0),
                        tag: x.vendor.vendorPortfolio.length ? 'Popular' : undefined,
                        startsFrom: x.cost || 0,
                        profileImg: x.vendor.profileImageName
                            ? PATH.THUMB_URL + x.vendor.profileImageName
                            : PATH.AVATAR_PLACEHOLDER,
                        services: x.vendor.services.map((x) => x.service.name),
                    })),
                    loadMore,
                });
            }, e => {
                reject('Connection failed');
            }).catch(e => {
                reject('Connection failed');
            });;
    });

    return result
}

function signup(props: {
    fullName: string,
    mobileNumber: string,
    email: string,
    username: string
    socialUrl?: string | null,
    categoryId?: string | null
}) {
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
}

function getVendorByUsername(username: string) {
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
                    where: {
                        isActive: true
                    },
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
}

function getServices(username: string) {
    return new Promise<{ name: string, services: VendorServicePublic[] }[]>(function (resolve, reject) {

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
                isActive: true,
                vendor: {
                    username
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
                            }
                        }
                    }
                }
            },
        }).then(r => {
            const groupedItems: { [key in string]: { name: string, services: VendorServicePublic[] } } = {};
            r.forEach(x => {
                const grouptype = x.group.serviceGroupType?.name || 'Others';
                if (!groupedItems[grouptype]) {
                    groupedItems[grouptype] = { name: grouptype, services: [] };
                }

                const includedIds = x.group.serviceGroupItem.filter(i => !i.isOptional).map(i => i.serviceId);
                const included = x.vendorService.filter(i => includedIds.includes(i.service.id));
                let optional = x.vendorService.filter(i => !includedIds.includes(i.service.id))

                groupedItems[grouptype].services.push({
                    vendorServiceGroupId: x.id,
                    groupId: x.group.id,
                    title: x.group.name,
                    cost: x.cost,
                    isEstimated: x.group.isEstimated,
                    included: included.map(i => ({
                        id: i.service.id,
                        title: i.service.name,
                    })),
                    addons: optional.map(i => ({
                        id: i.service.id,
                        title: i.service.name,
                    })),
                });
            });

            resolve(Object.values(groupedItems));
        }).catch(e => {
            reject('Connection failed');
        });;
    });
}

function getVendorServiceGroupBasicInfo(id: string){
    return new Promise<{
        vendorServiceGroupId: string,
                groupId: string,
                title:string,
                image: string,
                minHour: number,
                costExtraHour: number,
                addons: {
                    id: string,
                    title: string,
                    duration: number,
                    cost: number
                }[],
                selectableList: AddonGroupItem[]
    }>(function (resolve, reject) {
        db.vendorServiceGroup.findFirstOrThrow({
            where: {
                id,
                isActive: true
            },
            select: {
                id: true,
                costExtraHour: true,
                group: {
                    select: {
                        id: true,
                        name: true,
                        imageName: true,
                        minHour: true,
                        serviceGroupItem: {
                            orderBy: {
                                position: 'asc'
                            },
                            where:{
                                isOptional: true
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
            const optionalIds = r.group.serviceGroupItem.filter(i => i.isOptional).map(i => i.serviceId);
            let optional = r.vendorService.filter(i => optionalIds.includes(i.service.id));
            const selectableList = r.group.serviceGroupItem.reduce<AddonGroupItem[]>((acc, item) => {
                if (!item.addonGroup || !r.vendorService.map(x=>x.service.id).includes(item.service.id)) {
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

            const groupData = {
                vendorServiceGroupId: r.id,
                groupId: r.group.id,
                title: r.group.name,
                minHour: r.group.minHour,
                costExtraHour: r.costExtraHour,
                image: r.group.imageName ? PATH.THUMB_URL + r.group.imageName : PATH.FALLBACK_IMG,
                addons: optional.map(i => ({
                    id: i.service.id,
                    title: i.service.name,
                    duration: i.duration,
                    cost: i.cost
                })),
                selectableList
            };

            resolve(groupData);
        }).catch(e => {
            reject('Connection failed');
        });;
    });
}

function getVendorServiceGroup(id: string) {
    return new Promise<VendorService>(function (resolve, reject) {
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
                id,
                isActive: true
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
                                serviceGroupItem:{
                                    select:{
                                        isOptional: true
                                    }
                                }
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
                if (!item.addonGroup || !r.vendorService.map(x=>x.service.id).includes(item.service.id)) {
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
                image: r.group.imageName ? PATH.THUMB_URL + r.group.imageName : PATH.FALLBACK_IMG,
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
        }).catch(e => {
            reject('Connection failed');
        });;
    });
}


function topRatedVendorsByType(vendorType: string) {
    return new Promise<{
        id: string,
        name: string,
        image: string
    }[]>(function (resolve, reject) {
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
                image: x.profileImageName ? PATH.THUMB_URL + x.profileImageName : PATH.AVATAR_PLACEHOLDER
            })))
        }).catch(e => {
            reject('Connection failed');
        });;
    })
}


async function getLinkedProfiles(username: string) {
    const currentVendor = await db.vendor.findFirstOrThrow({
        where: {
            username
        },
        select: {
            email: true,
            mobileNumber: true
        }
    });
    return db.vendor.findMany({
        where: {
            isActive: true,
            vendorType: {
                isActive: true
            },
            OR: [{
                email: currentVendor.email
            }, {
                mobileNumber: currentVendor.mobileNumber
            }]
        },
        select: {
            username: true,
            vendorType: {
                select: {
                    vendorIdentifier: true
                }
            }
        }
    })
}

function getVendorBasicInfo(username: string) {
    return db.vendor.findFirstOrThrow({
        where: {
            username
        },
        select: {
            profileImageName: true,
            username: true,
            location: true,
            VendorServiceGroup: {
                take: 1,
                where: {
                    isActive: true
                },
                orderBy: {
                    cost: 'asc'
                },
                select: {
                    cost: true
                }
            }
        }
    })
}



async function getVendorContactsByUsername(username: string) {
    return await db.vendor.findFirst({
        where: {
            username
        },
        select: {
            email: true,
            mobileNumber: true
        }
    });
}

export const VendorQuery = {
    Stories,
    portfolioByAlbumId,
    portfolioByUsername,
    getFilteredVendors,
    Signup: signup,
    getVendorByUsername,
    getVendorBasicInfo,
    getServices,
    getVendorServiceGroup,
    getVendorServiceGroupBasicInfo,
    getLinkedProfiles,
    topRatedVendorsByType,
    getVendorContactsByUsername
}