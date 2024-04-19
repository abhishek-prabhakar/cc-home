import { Avatar, Badge, Button, Container, Grid, Group, Image, SimpleGrid, Stack, Space, Text, Title, Divider } from "@mantine/core";
import { LoaderArgs, defer } from "@remix-run/node";
import { Await, Link, useLoaderData } from "@remix-run/react";
import { Suspense } from "react";
import ServiceQuickCard from "~/components/ServiceQuickCard";
import Skeleton from "~/components/Skeleton";
import Routes from "~/routes.data";
import CollectionService from "~/service/collections.service";
import { VendorQuery } from "~/service/vendor.service";


export function loader(args: LoaderArgs) {
    const collectionKey = args.params.id;
    const highlightId = args.params.highlight;
    if (!collectionKey || !highlightId) {
        return null;
    }
    const data = CollectionService.getCollectionByType(collectionKey, highlightId);
    const related = CollectionService.getRelatedCollectionByType(collectionKey, highlightId);
    const topRatedVendors = VendorQuery.topRatedVendorsByType(highlightId);

    return defer({
        data,
        related,
        topRatedVendors,
        highlightId,
        collectionKey
    });
}


const CollectionsHighlightPage = {
    Index: () => {
        return <Container size={'xl'} >
            <CollectionsHighlightPage.Highlight />
            <Space h="xl" />
            <Space h="xl" />
            <Divider />
            <Space h="xl" />
            <Grid gutter={'xl'} justify="space-between">
                <Grid.Col span={{ base: 12, md: 8 }}>
                    <CollectionsHighlightPage.RelatedServices />
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 3 }}>
                    <CollectionsHighlightPage.TopVendors />
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 8 }} >
                    {/* <CollectionsHighlightPage.OtherServices /> */}
                </Grid.Col>
            </Grid>
        </Container>
    },
    Highlight: () => {
        const data = useLoaderData<typeof loader>();

        return <div>
            <Suspense fallback={<Skeleton />}>
                <Await resolve={data?.data}>
                    {response => <div>
                        <Title order={3}>Explore everything under <span className="_color-primary">{response?.name}</span></Title>
                        <div style={{ paddingBottom: '10px' }}></div>
                        <Title order={5}>Book {response?.vendorType}</Title>
                        <div style={{ paddingBottom: '40px' }}></div>
                        <Grid gutter={40}>
                            {response?.services.map(service => <Grid.Col key={service.id} span={{ base: 6, md: 3 }}>
                                <ServiceQuickCard url={Routes.get('ServiceGroup', { id: data?.highlightId || '', subId: service.id })} title={service.name} img={service.imageName} services={service.description} />
                            </Grid.Col>)
                            }
                        </Grid>
                    </div>}
                </Await>
            </Suspense>
        </div >
    },
    RelatedServices: () => {
        const data = useLoaderData<typeof loader>();
        return <div>
            <Title order={5}>Frequently bought together</Title>
            <div style={{ paddingBottom: '30px' }}></div>
            <Suspense fallback={<Skeleton />}>
                <Await resolve={data?.related}>
                    {response => <Grid gutter={40} justify="start">
                        {response?.map(service => <Grid.Col key={service.id} span={{ base: 6, md: 3 }}>
                            <Link to={Routes.get('ServiceGroup', { id: service.vendorType.keyName, subId: service.id })}><Image src={service.imageName} style={{ borderRadius: '5px' }} /></Link>
                            <div style={{ paddingBottom: '14px' }}></div>
                            <Text c="dimmed" size="sm">{service.vendorType.name}</Text>
                            <Link to={Routes.get('ServiceGroup', { id: service.vendorType.keyName, subId: service.id })}>
                                <Text fw={500}>{service.name}</Text>
                            </Link>
                        </Grid.Col>)
                        }
                    </Grid>}
                </Await>
            </Suspense>
        </div>
    },
    TopVendors: () => {
        const data = useLoaderData<typeof loader>();

        return <div>
            <Title order={5}>Top Rated</Title>
            <Space h="xl" />
            <Suspense fallback={<Skeleton />}>
                <Await resolve={data?.topRatedVendors}>
                    {response => response?.length ? <Grid gutter="md">
                        {response?.map(item => <Grid.Col span={3}>
                            <Stack key={item.id} justify="center" align="center">
                                <Link to={Routes.get('VendorProfile', { id: item.id })}>
                                    <Avatar src={item.image} size={'lg'} />
                                </Link>
                                <Link to={Routes.get('VendorProfile', { id: item.id })}><Text fw={500}>{item.name}</Text></Link>
                            </Stack></Grid.Col>)}
                    </Grid> : <Text c="dimmed">Sorry, we couldn't find any vendors under this category</Text>
                    }
                </Await>
            </Suspense>
        </div>
    },
    OtherServices: () => {
        return <div>

            <Title order={4}>Also try</Title>
        </div>
    }
}


export default CollectionsHighlightPage.Index;