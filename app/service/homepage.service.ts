import { PATH } from "~/path.data";
import Routes from "~/routes.data";
import { Collection, CollectionType, HomeCategoryItem, Jumbotron } from "~/types";
import { db } from "~/utils/database";
import { generateJumbotronUrl } from "~/utils/generateJumbotronUrl";

function getJumbotronList() {
    return new Promise<Jumbotron[]>(function (resolve) {
        db.websiteSlider.findMany({
            orderBy: {
                createdAt: 'desc'
            },
            select: {
                jumbotron: {
                    select: {
                        title: true,
                        description: true,
                        imageName: true,
                        vendorId: true,
                        vendorTypeId: true,
                        serviceGroupId: true,
                        serviceId: true,
                        vendorType: {
                            select: {
                                keyName: true
                            }
                        },
                        group: {
                            select: {
                                vendorType: {
                                    select: {
                                        keyName: true
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }).then(r => {
            resolve(r.map(x => x.jumbotron).map(x => {
                const url = generateJumbotronUrl({
                    vendorTypeId: x.vendorTypeId,
                    serviceGroupId: x.serviceGroupId,
                    serviceId: x.serviceId
                });

                return {
                    title: x.title,
                    description: x.description,
                    img: x.imageName ? PATH.RESOURCE_URL + x.imageName : '',
                    url: url.replace(':vendorType', x.vendorType?.keyName || x.group?.vendorType.keyName || '').replace(':serviceGroupId', x.serviceGroupId || '').replace(':serviceId', x.serviceId || '')
                }
            })
            );
        });

    });

}

function getCategoryCollection() {
    return new Promise<HomeCategoryItem[]>(function (resolve) {

        db.vendorType.findMany({
            orderBy: {
                name: 'asc'
            },
            select: {
                id: true,
                name: true,
                description: true,
                keyName: true,
                serviceGroup: {
                    select: {
                        id: true,
                        name: true,
                        imageName: true,
                        serviceGroupType: {
                            select: {
                                keyName: true,
                                name: true
                            }
                        }
                    },
                    orderBy: {
                        serviceGroupType: {
                            name: 'desc'
                        }
                    }
                }
            }
        }).then(r => {
            const response: HomeCategoryItem[] = r.map<HomeCategoryItem>((category => {
                const serviceGroup = category.serviceGroup.reduce<CollectionType[]>((items, item) => {
                    const collection = item.serviceGroupType?.keyName;
                    if (!collection) {
                        items.push({
                            id: item.id,
                            isCollection: false,
                            name: item.name,
                            imageName: item.imageName,
                            path: Routes.ServiceGroup.replace(':id', category.keyName).replace(':subId', item.id)
                        })
                        return items;
                    }

                    if (items[items.length - 1]?.collection !== collection) {
                        items.push({
                            id: item.id,
                            name: item.serviceGroupType?.name || 'Services',
                            imageName: item.imageName,
                            isCollection: true,
                            collection: item.serviceGroupType?.keyName,
                            path: Routes.CollectionsByVendor.replace(':id', item.serviceGroupType?.keyName || 'unknown').replace(':vendorType', category.keyName),
                            description: item.name
                        })
                    } else {
                        items[items.length - 1].description += ', ' + item.name;
                    }
                    return items;
                }, []);

                return {
                    title: category.name,
                    id: category.id,
                    description: category.description,
                    serviceGroup
                }
            }));

            resolve(response)
        })
    });
}


function topVendorsByCategory() {
    return new Promise<{
        id: string;
        name: string;
        keyName: string;
        vendor: {
            id: string;
            name: string;
            username: string;
            profileImageName: string | null;
            primaryColor: string;
        }[];
    }[]>(async function (resolve) {
        const r = await db.vendorType.findMany({
            take: 4,
            select: {
                id: true,
                name: true,
                keyName: true,
                vendor: {
                    where: {
                        isActive: true
                    },
                    select: {
                        id: true,
                        name: true,
                        profileImageName: true,
                        primaryColor: true,
                        username: true
                    },
                    take: 4
                }
            }
        });

        resolve(r)
    });

}


function getPopularServices() {
    return new Promise<Collection[]>(function (resolve) {
        db.serviceGroup.findMany({
            take: 8,
            select: {
                id: true,
                name: true,
                imageName: true,
                description: true,
                vendorType: {
                    select: {
                        keyName: true
                    }
                }
            },
            where: {
                groupTypeId: {
                    not: undefined
                }
            }
        }).then(r => {
            resolve(r.map(x => ({
                id: x.id,
                title: x.name,
                path: Routes.ServiceGroup.replace(':id', x.vendorType.keyName).replace(':subId', x.id),
                label: '',
                image: x.imageName ? PATH.RESOURCE_URL + x.imageName : '',
                cost: 0
            })))
        })
    });

}


function getCollections() {
    return new Promise<Collection[]>(function (resolve) {
        db.serviceGroupType.findMany({
            take: 4,
            select: {
                keyName: true,
                name: true,
                ServiceGroup: {
                    take: 10,
                    select: {
                        name: true,
                        imageName: true
                    }
                }
            }
        }).then(r => {

            resolve(r.map(x => ({
                id: x.keyName,
                image: PATH.RESOURCE_URL + x.ServiceGroup.find(i => i.imageName)?.imageName,
                title: x.name,
                label: x.ServiceGroup.map(g => g.name).join(', '),
                path: Routes.Collections.replace(':id', x.keyName),
                cost: 0
            })))
        })

    });
}

export {
    getJumbotronList,
    getCategoryCollection,
    topVendorsByCategory,
    getPopularServices,
    getCollections
}