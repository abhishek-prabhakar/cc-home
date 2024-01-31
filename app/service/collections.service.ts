import { PATH } from "~/path.data";
import { db } from "~/utils/database";

function getCollectionByType(type: string, vendorTypeKey: string) {
    return new Promise<{
        name: string,
        vendorType: string,
        services: {
            id: string,
            name: string,
            imageName: string,
            description: string[]
        }[]
    } | null>(function (resovle) {
        db.serviceGroupType.findFirst({
            where: {
                keyName: type,
            },
            select: {
                name: true,
                ServiceGroup: {
                    where: {
                        vendorType: {
                            keyName: vendorTypeKey
                        }
                    },
                    select: {
                        id: true,
                        name: true,
                        imageName: true,
                        vendorType: {
                            select: {
                                name: true
                            }
                        },
                        serviceGroupItem: {
                            select: {
                                service: {
                                    select: {
                                        name: true
                                    }
                                }
                            },
                            where: {
                                isOptional: false
                            },
                            take: 5
                        }
                    }
                }
            }
        }).then(r => {
            if (!r) {
                resovle(null);
                return;
            };

            resovle({
                name: r?.name,
                services: r?.ServiceGroup.map(service => ({
                    name: service.name,
                    id: service.id,
                    imageName: service.imageName ? PATH.RESOURCE_URL + service.imageName : PATH.FALLBACK_IMG,
                    description: service.serviceGroupItem.map(x => x.service.name?.toLocaleLowerCase())
                })),
                vendorType: r?.ServiceGroup[0].vendorType.name
            });
        })

    });
}

function getRelatedCollectionByType(type: string, vendorTypeKey: string) {
    return new Promise<{
        id: string,
        name: string,
        imageName: string,
        vendorType: {
            keyName: string, name: string
        },
    }[]>(function (resovle) {
        db.serviceGroupType.findFirst({
            where: {
                keyName: type,
            },
            select: {
                name: true,
                ServiceGroup: {
                    where: {
                        vendorType: {
                            NOT: {
                                keyName: vendorTypeKey
                            }
                        }
                    },
                    select: {
                        id: true,
                        name: true,
                        imageName: true,
                        vendorType: {
                            select: {
                                keyName: true,
                                name: true
                            }
                        }
                    }
                }
            }
        }).then(r => {
            if (!r) {
                resovle([]);
                return;
            };

            resovle(r?.ServiceGroup.map(service => ({
                name: service.name,
                id: service.id,
                imageName: service.imageName ? PATH.RESOURCE_URL + service.imageName : PATH.FALLBACK_IMG,
                vendorType: service.vendorType
            })));
        })

    });
}


function getServicesGroupsByCollection(keyName?: string | null) {
    return new Promise<{
        name: string;
        keyName: string;
        serviceGroup: {
            id: string;
            name: string;
            imageName: string | null;
            serviceGroupItem: {
                service: {
                    name: string;
                };
            }[];
        }[];
    }[]>(function (resolve) {
        if (!keyName) {
            resolve([]);
            return;
        }
        db.vendorType.findMany({
            select: {
                name: true,
                keyName: true,
                serviceGroup: {
                    orderBy: {
                        name: 'asc'
                    },
                    where: {
                        serviceGroupType: {
                            keyName
                        }
                    },
                    select: {
                        name: true,
                        id: true,
                        imageName: true,
                        serviceGroupItem: {
                            take: 4,
                            select: {
                                service: {
                                    select: {
                                        name: true
                                    }
                                }
                            }
                        }
                    }
                }
            },
            where: {
                serviceGroup: {
                    some: {
                        serviceGroupType: {
                            keyName
                        }
                    }
                }
            }
        }).then(r => {
            resolve(r)
        })
    });
}

function getCollectionInfo(keyName: string) {
    return new Promise<{
        name: string,
        description: string | null
    }>(function (resolve) {
        db.serviceGroupType.findFirstOrThrow({
            where: {
                keyName
            },
            select: {
                name: true,
                description: true
            }
        }).then(r => {
            resolve(r)
        });
    })
}

const CollectionService = {
    getCollectionByType,
    getRelatedCollectionByType,
    getServicesGroupsByCollection,
    getCollectionInfo
}

export default CollectionService;