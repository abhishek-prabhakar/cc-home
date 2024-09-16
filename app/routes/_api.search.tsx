import { LoaderArgs, defer } from "@remix-run/node";
import { db } from "~/utils/database";
import Fuse, { FuseResult } from 'fuse.js'
import { SearchResultItem } from "~/types";

const fuseOptions = {
     useExtendedSearch: true,
    keys: [
        "name",
        "vendorType.name",
        "serviceGroupType.name",
        "serviceGroupItem.service.name"
    ]
}

export function loader(args: LoaderArgs) {
    const url = new URL(args.request.url);
    const query = url.searchParams.get('q')?.toLowerCase()?.trim();
    if (!query?.length) {
        return defer({ results: [] });
    }

    const groups = new Promise<FuseResult<SearchResultItem>[]>(function (resolve, reject) {
        db.serviceGroup.findMany({
            where: {
                isActive: true,
                vendorType: {
                    isActive: true
                }
            },
            select: {
                id: true,
                name: true,
                vendorType: {
                    select: {
                        name: true,
                        keyName: true
                    },
                },
                serviceGroupType: {
                    select: {
                        name: true,
                    }
                },
                serviceGroupItem: {
                    select: {
                        service: {
                            select: {
                                name: true
                            }
                        }
                    }
                }
            }
        }).then(r => {
            const fuse = new Fuse(r, fuseOptions);
            resolve(fuse.search(query));
        }, e => {
            reject('Invalid search')
        });
    });

    const vendors = new Promise<{item: SearchResultItem}[]>(function (resolve, reject) {
        db.vendor.findMany({
            where: {
                isActive: true,
                vendorType: {
                    isActive: true
                },
                username: {
                    startsWith: query
                }
            },
            select: {
                username: true,
                vendorType: {
                    select: {
                        name: true,
                        keyName: true
                    },
                }
            }
        }).then(r => {
            const fuse = r.map(x => ({ item: { id: x.username, name: x.username,vendorType: x.vendorType, serviceGroupItem: [], serviceGroupType: null } }));
            resolve(fuse);
        }, e => {
            reject('Invalid search')
        });
    });


    return defer({
        results: groups,
        vendors: vendors
    })

}