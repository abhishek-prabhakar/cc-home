import { LoaderArgs, defer } from "@remix-run/node";
import { db } from "~/utils/database";

export function loader(args: LoaderArgs) {
    const url = new URL(args.request.url);
    const query = url.searchParams.get('q')?.toLowerCase()?.trim();
    if (!query?.length) {
        return defer({ results: [] });
    }

    const groups = new Promise(function (resolve) {
        db.serviceGroup.findMany({
            take: 15,
            where: {
                OR: [
                    {
                        name: {
                            contains: query,
                        }
                    },
                    {
                        serviceGroupItem: {
                            some: {
                                service: {
                                    name: {
                                        contains: query
                                    }
                                }
                            }
                        }
                    },
                    {
                        serviceGroupType: {
                            name: {
                                contains: query
                            }
                        }
                    }
                ]
            },
            select: {
                id: true,
                name: true,
                vendorType: {
                    select: {
                        name: true,
                        keyName: true
                    }
                },
                serviceGroupType: {
                    select: {
                        name: true
                    }
                },
                serviceGroupItem: {
                    where: {
                        service: {
                            name: {
                                contains: query
                            }
                        }
                    },
                    select: {
                        service: {
                            select: {
                                name: true
                            }
                        }
                    }
                }
            }
        }).then(r => resolve(r));
    });


    return defer({
        results: groups
    })

}