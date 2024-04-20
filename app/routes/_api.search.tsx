import { LoaderArgs, defer } from "@remix-run/node";
import { db } from "~/utils/database";
import Fuse, { FuseResult } from 'fuse.js'
import { SearchResultItem } from "~/types";

const fuseOptions = {
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
            take: 15,
            where: {
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


    return defer({
        results: groups
    })

}