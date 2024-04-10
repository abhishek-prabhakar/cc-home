import {
    defer,
    TypedDeferredData,
    type LoaderArgs,
    type V2_MetaFunction,
} from "@remix-run/node";
import {
    Await,
    Link,
    Outlet,
    useLoaderData,
    useLocation,
    useNavigate,
} from "@remix-run/react";
import Banner from "~/components/Banner";
import { Suspense, useEffect, useState } from "react";
import { db } from "~/utils/database";
import InfiniteScroll from "react-infinite-scroll-component";
import { forkJoin } from "rxjs";
import { PATH } from "~/path.data";
import { Badge, Card, Container, Grid, Group, Select, Stack, Text, Title } from "@mantine/core";
import ProfileQuickCard from "~/components/ProfileQuickCard";
import Skeleton from "~/components/Skeleton";

const sortPanelStyles: React.CSSProperties = {
    background: "var(--ui-color-accent)",
    padding: "10px 20px",
    borderRadius: "4px",
};

export const meta: V2_MetaFunction = () => {
    return [
        { title: "Celebria Collective" },
        { name: "description", content: "Find your Pefect vendor" },
    ];
};

type Vendor = {
    id: string;
    name: string;
    portfolio: string[];
    rating: number;
    tag?: string;
    profileImg: string;
    services: string[];
};

type Filter = {
    name: string;
    category: { id: string; name: string }[];
};
type MetaData = {
    name: string;
    id: string;
    description: string;
};
type Result = {
    data: Vendor[];
    loadMore: boolean;
};
type loaderData = {
    page: number;
    result: Result;
    filters: Filter[];
    meta: MetaData;
};

export async function loader({
    request,
    params,
}: LoaderArgs) {
    const pageId = params.id;
    const categoryId = params.subId;

    const url = new URL(request.url);
    const searchParams = url.searchParams;
    const page = parseInt(searchParams.get("page") || "") || 0;
    const limit = 20;

    const metaInfo = await db.vendorType.findFirstOrThrow({
        where: {
            keyName: pageId,
            isActive: true
        },
        select: {
            id: true,
            name: true,
            description: true,
        },
    });

    const result = new Promise<Result>(function (resolve) {
        db.vendorType
            .findFirstOrThrow({
                where: {
                    keyName: pageId,
                },
                select: {
                    id: true,
                    serviceGroup: {
                        where: {
                            id: categoryId,
                        },
                        select: {
                            id: true,
                        },
                    },
                },
            })
            .then((res) => {
                const serviceGrpIds = res.serviceGroup.map((x) => x.id);
                forkJoin({
                    count: db.vendor.count({
                        where: {
                            isActive: true,
                            categoryId: res.id,
                            VendorServiceGroup: {
                                some: {
                                    groupId: {
                                        in: serviceGrpIds,
                                    },
                                },
                            },
                        },
                    }),
                    data: db.vendor.findMany({
                        skip: page * limit,
                        take: limit,
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
                                        groupId: {
                                            in: serviceGrpIds,
                                        },
                                    },
                                },
                                take: 5,
                            },
                            vendorPortfolio: {
                                select: {
                                    fileName: true,
                                    fileType: true,
                                },
                                where: {
                                    serviceGroupId: categoryId,
                                },
                                take: 4
                            },
                        },
                        where: {
                            categoryId: res.id,
                            isActive: true,
                            VendorServiceGroup: {
                                some: {
                                    groupId: {
                                        in: serviceGrpIds,
                                    },
                                },
                            },
                        },
                    }),
                }).subscribe((r) => {
                    const rating = 4;
                    const tag = "Popular";

                    const loadMore = page * limit + limit <= r.count;
                    resolve({
                        data: r.data.map((x) => ({
                            id: x.username,
                            name: x.username,
                            portfolio: x.vendorPortfolio.map((x) =>
                                x.fileName ? PATH.RESOURCE_URL + x.fileName : ""
                            ),
                            rating,
                            tag,
                            profileImg: x.profileImageName
                                ? PATH.RESOURCE_URL + x.profileImageName
                                : PATH.AVATAR_PLACEHOLDER,
                            services: x.services.map((x) => x.service.name),
                        })),
                        loadMore,
                    });
                });
            });
    });

    const data = new Promise<{
        name: string;
    } | null
    >(function (resolve) {
        db.serviceGroup.findFirst({
            where: {
                id: categoryId
            },
            select: {
                name: true
            }
        }).then(r => resolve(r));
    });

    return defer({
        data,
        result,
        page,
        meta: { ...metaInfo, categoryId },
    });
}

const SortResultsPanel = () => {
    return (
        <div style={sortPanelStyles}>
            <Group align="center">
                <Text>Sort By: </Text>
                <Select
                    defaultValue="0"
                    data={[
                        { value: "0", label: "Price" },
                        { value: "1", label: "Rating" },
                    ]}
                />
            </Group>
        </div>
    );
};

const Photography = {
    Index: () => {
        const data = useLoaderData<typeof loader>();

        return (
            <Container size={'xl'}>
                <Stack gap={'lg'}>
                    <Grid gutter={40}>
                        <Grid.Col span={{ base: 12, md: 8, lg: 9 }}>
                            <Stack gap={'lg'}>
                                <Text c="dimmed"><Badge color="magenta">{data.meta.name}</Badge> in Banglore</Text>
                                <Suspense>
                                    <Await resolve={data.data}>
                                        {response => <Title order={3}>{response?.name}</Title>}
                                    </Await>
                                </Suspense>
                                <p>{data.meta.description}</p>

                                <SortResultsPanel />
                                <Suspense
                                    fallback={<Skeleton />}
                                >
                                    <Await resolve={data?.result}>
                                        {(response) => (
                                            <Photography.Results
                                                categoryId={data.meta.categoryId}
                                                vendors={response.data}
                                                loadMore={response.loadMore}
                                            />
                                        )}
                                    </Await>
                                </Suspense>
                            </Stack>
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, md: 4, lg: 3 }}>
                            <Card style={{ borderColor: '#c6c3c3', borderRadius: '20px' }}>
                                <Title order={3}>Hiring<br />Without the<br />Headache</Title>

                                <img style={{ maxWidth: '100%' }} src="/assets/web-thumb1.jpg" />
                            </Card>
                        </Grid.Col>
                    </Grid>
                </Stack>
            </Container>
        );
    },
    Results: ({
        vendors,
        loadMore,
        categoryId
    }: {
        categoryId?: string;
        vendors: Vendor[];
        loadMore: boolean;
    }) => {
        const data = useLoaderData<typeof loader>();
        const navigate = useNavigate();
        const location = useLocation();
        const [result, setResult] = useState<Vendor[]>([]);

        useEffect(() => {
            if (!vendors) {
                return;
            }

            setResult(data.page === 0 ? vendors : result.concat(vendors));
        }, [vendors]);

        function loadNextPage() {
            const searchParams = new URLSearchParams();
            searchParams.set("page", "" + (data.page + 1));
            navigate(location.pathname + "?" + searchParams.toString(), {
                preventScrollReset: true,
            });
        }

        return <InfiniteScroll
            dataLength={result.length}
            next={loadNextPage}
            hasMore={loadMore}
            loader={
                <div style={{ padding: "40px" }}>
                    <Skeleton />
                </div>
            }
            endMessage={
                <div style={{ textAlign: "center", padding: "40px" }}>
                    End of results.
                </div>
            }
        >
            <Stack gap={'xl'}>
                {result?.map(item => <ProfileQuickCard key={item.id} id={item.id} name={item.name} portfolio={item.portfolio} profileImg={item.profileImg} services={item.services} tag={item.tag} rating={item.rating} categoryId={categoryId} />)}
            </Stack>
        </InfiniteScroll>;
    },
};

export default Photography.Index;
