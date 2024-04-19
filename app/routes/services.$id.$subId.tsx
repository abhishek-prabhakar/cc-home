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
import { PortfolioItem, VendorResultListItem } from "~/types";
import ListSortBar, { SORT_BY } from "~/components/ListSortBar";
import { VendorQuery } from "~/service/vendor.service";
import sortFieldMapper from "~/utils/sortField.map";

export const meta: V2_MetaFunction = () => {
    return [
        { title: "Celebria Collective" },
        { name: "description", content: "Find your Pefect vendor" },
    ];
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
    const sortField: SORT_BY = searchParams.get("sort")?.toString() as SORT_BY;
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

    const sortBy = sortFieldMapper(sortField);

    const result = VendorQuery.getFilteredVendors({
        page,
        limit,
        serviceGroupIds: categoryId ? [categoryId] : [],
        vendorType: pageId || '',
        sortBy
    });

    const data = await db.serviceGroup.findFirst({
        where: {
            id: categoryId
        },
        select: {
            name: true
        }
    });

    return defer({
        data,
        result,
        page,
        meta: { ...metaInfo, categoryId },
    });
}


const Photography = {
    Index: () => {
        const data = useLoaderData<typeof loader>();
        const navigate = useNavigate();

        function sortItems(x: string | null) {
            const searchParams = new URLSearchParams(location.search);
            searchParams.set('sort', x || '');

            navigate(`${location.pathname}?${searchParams.toString()}`);
        }

        return (
            <Container size={'xl'}>
                <Stack gap={'lg'}>
                    <Grid gutter={40}>
                        <Grid.Col span={{ base: 12, md: 8, lg: 9 }}>
                            <Stack gap={'lg'}>
                                <Text c="dimmed"><Badge color="magenta">{data.meta.name}</Badge> in Banglore</Text>
                                <Suspense>
                                    <Title order={3}>{data.data?.name}</Title>
                                </Suspense>
                                <p>{data.meta.description}</p>

                                <ListSortBar onSort={sortItems} />
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
        vendors: VendorResultListItem[];
        loadMore: boolean;
    }) => {
        const data = useLoaderData<typeof loader>();
        const navigate = useNavigate();
        const location = useLocation();
        const [result, setResult] = useState<VendorResultListItem[]>([]);

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
                {result?.map(item => <ProfileQuickCard key={item.id} id={item.id} name={item.name} portfolio={item.portfolio} profileImg={item.profileImg} services={item.services} tag={item.tag} rating={item.rating} categoryId={categoryId} startsFrom={item.startsFrom} />)}
            </Stack>
        </InfiniteScroll>;
    },
};

export default Photography.Index;
