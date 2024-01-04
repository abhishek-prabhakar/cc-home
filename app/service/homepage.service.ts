import { PATH } from "~/path.data";
import { Jumbotron } from "~/types";
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

type Page = {
    id: string,
    title: string,
    path: string,
    serviceGroup: {
        id: string;
        name: string;
        imageName?: string | null;
        collection?: string;
    }[]
}

function getCategoryCollection() {
    return new Promise<Page[]>(function (resolve) {

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
            resolve(r.map<Page>(x => ({
                path: '/collections/' + x.keyName, title: x.name, id: x.id, serviceGroup: x.serviceGroup.map(y => ({
                    id: y.id,
                    imageName: y.imageName,
                    collection: y.serviceGroupType?.name,
                    name: y.name
                })),
            })))
        })
    });
}


export {
    getJumbotronList,
    getCategoryCollection
}