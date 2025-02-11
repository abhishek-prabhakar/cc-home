import { BannerLocation } from "@prisma/client";
import { PATH } from "~/path.data";
import Routes from "~/routes.data";
import { BannerItem, Collection, CollectionType, HomeCategoryItem, Jumbotron } from "~/types";
import { db } from "~/utils/database";
import { generateJumbotronUrl } from "~/utils/generateJumbotronUrl";

function getJumbotronList() {
    return new Promise<Jumbotron[]>(function (resolve, reject) {
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
                    img: x.imageName ? PATH.THUMB_URL + x.imageName : '',
                    url: url.replace(':vendorType', x.vendorType?.keyName || x.group?.vendorType.keyName || '').replace(':serviceGroupId', x.serviceGroupId || '').replace(':serviceId', x.serviceId || ''),
                    cost: null
                }
            })
            );
        }).catch(e => {
            reject('Connection failed');
        });;

    });

}

function getCategoryCollection() {
    return new Promise<HomeCategoryItem[]>(function (resolve, reject) {

        db.vendorType.findMany({
            orderBy: {
                name: 'asc'
            },
            where: {
                isActive: true
            },
            select: {
                id: true,
                name: true,
                description: true,
                keyName: true,
                serviceGroup: {
                    where:{
                        isActive: true,
                    },
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
                            path: Routes.get('ServiceGroup', { id: category.keyName, subId: item.id })
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
                            path: Routes.get('CollectionsByVendor', { id: item.serviceGroupType?.keyName || '', vendorType: category.keyName }),
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
        }).catch(e => {
            reject('Connection failed');
        });
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
            where: {
                isActive: true
            },
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
    return new Promise<Collection[]>(function (resolve, reject) {
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
                isActive: true,
                groupTypeId: {
                    not: undefined
                }
            }
        }).then(r => {
            resolve(r.map(x => ({
                id: x.id,
                title: x.name,
                path: Routes.get('ServiceGroup', { id: x.vendorType.keyName, subId: x.id }),
                label: '',
                image: x.imageName ? PATH.THUMB_URL + x.imageName : '',
                cost: 0
            })))
        }).catch(e => {
            reject('Connection failed');
        });
    });

}


function getCollections() {
    return new Promise<Collection[]>(function (resolve, reject) {
        db.serviceGroupType.findMany({
            take: 4,
            select: {
                keyName: true,
                name: true,
                ServiceGroup: {
                    take: 10,
                    where:{
                        isActive: true,
                    },
                    select: {
                        name: true,
                        imageName: true
                    }
                }
            }
        }).then(r => {

            resolve(r.map(x => ({
                id: x.keyName,
                image: PATH.THUMB_URL + x.ServiceGroup.find(i => i.imageName)?.imageName,
                title: x.name,
                label: x.ServiceGroup.map(g => g.name).join(', '),
                path: Routes.get('Collections', { id: x.keyName }),
                cost: 0
            })))
        }).catch(e => {
            reject('Connection failed');
        });

    });
}

function getRandom8Vendors():Promise<{profileImageName: string}[]>{
    return db.$queryRaw`SELECT profileImageName from vendors where isActive=true  ORDER BY RAND() LIMIT 8 `;
}

function BannerSet(){
    return new Promise<BannerItem[]>(async function (resolve) {
        const bannerlist = await db.websiteBanner.findMany({
          where: {
            targetPage: {
              in: [BannerLocation.HOME_1, BannerLocation.HOME_2, BannerLocation.HOME_3]
            }
          },
          select: {
            targetPage: true,
            jumbotron: {
              select: {
                title: true,
                description: true,
                vendorId: true,
                vendorTypeId: true,
                serviceGroupId: true,
                serviceId: true,
                imageName: true,
                vendorType: {
                  select: {
                    keyName: true
                  }
                },
                group: {
                  select: {
                    id: true,
                    name: true,
                    imageName: true,
                    vendorType: {
                      select: {
                        keyName: true
                      }
                    },
                    VendorServiceGroup:{
                      take:1,
                      orderBy:{
                        cost: 'asc'
                      },
                      select:{
                        cost: true
                      },
                      where:{
                        isActive: true,
                        vendor:{
                            isActive: true
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        });

        const finalList = bannerlist.map<BannerItem>(item => {
            const x = item.jumbotron;
            const url = generateJumbotronUrl({
              vendorTypeId: x.vendorType?.keyName || x.group?.vendorType.keyName,
              serviceGroupId: x.serviceGroupId,
              serviceId: x.serviceId
            });
      
            return {
              title: x.title,
              description: x.description,
              img: PATH.THUMB_URL + (x.imageName || x.group?.imageName),
              url,
              bannerLocation: item.targetPage,
              cost: item.jumbotron.group?.VendorServiceGroup[0]?.cost
            }
          });
      
          resolve(finalList);
    });
}

export {
    getJumbotronList,
    getCategoryCollection,
    topVendorsByCategory,
    getPopularServices,
    getCollections,
    getRandom8Vendors,
    BannerSet
}