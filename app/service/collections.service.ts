import { PATH } from "~/path.data";
import { db } from "~/utils/database";

function getCollectionByType(type: string, vendorTypeKey: string) {
    return new Promise<{
        name: string,
        vendorType: string,
        services: {
            id: string,
            name: string,
            imageName: string
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
                    imageName: service.imageName ? PATH.RESOURCE_URL + service.imageName : PATH.FALLBACK_IMG
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
        vendorType: string,
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
                vendorType: service.vendorType.name
            })));
        })

    });
}

const CollectionService = {
    getCollectionByType,
    getRelatedCollectionByType
}

export default CollectionService;