import { PATH } from "~/path.data";
import { CollectionType, HomeCategoryItem, Jumbotron } from "~/types";
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
                            path: '/services/' + category.keyName + '?category=' + item.id
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
                            path: '/services/' + item.serviceGroupType?.keyName
                        })
                    }
                    return items;
                }, []);

                return {
                    title: category.name,
                    id: category.id,
                    serviceGroup
                }
            }));

            resolve(response)
        })
    });
}


export {
    getJumbotronList,
    getCategoryCollection
}