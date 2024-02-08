import { Avatar, Container, Grid, Image, Skeleton, Stack, Text, Title } from "@mantine/core";
import { LoaderArgs, defer } from "@remix-run/node";
import { Await, Link, useLoaderData } from "@remix-run/react";
import { Suspense } from "react";
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
        return <Container>
            <CollectionsHighlightPage.Highlight />
            <div style={{ paddingBottom: '50px' }}></div>
            <Grid gutter={40}>
                <Grid.Col span={{ base: 12, md: 8 }}>
                    <CollectionsHighlightPage.RelatedServices />
                    <div style={{ paddingBottom: '60px' }}></div>
                    <CollectionsHighlightPage.TopVendors />
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 8 }} >
                    <CollectionsHighlightPage.OtherServices />
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
                        <Title order={2}>Explore everything under {response?.name} </Title>
                        <div style={{ paddingBottom: '20px' }}></div>
                        <Title order={3}>Book {response?.vendorType}</Title>
                        <div style={{ paddingBottom: '20px' }}></div>
                        <Grid gutter={40}>
                            {response?.services.map(service => <Grid.Col key={service.id} span={{ base: 6, md: 3 }}>
                                <Link to={Routes.ServiceGroup.replace(':id', data?.highlightId || '').replace(':subId', service.id)}><Image src={service.imageName} style={{ borderRadius: '12px', boxShadow: '0 20px 40px #d3d3d3' }} /></Link>
                                <div style={{ paddingBottom: '20px' }}></div>
                                <Link to={Routes.ServiceGroup.replace(':id', data?.highlightId || '').replace(':subId', service.id)}>
                                    <Title order={5}>{service.name}</Title>
                                </Link>
                                <ul style={{ paddingLeft: '14px' }}>
                                    {service.description.map((description, key) => <li key={'d-' + key}>
                                        <Text>Includes {description}.</Text>
                                    </li>)}
                                </ul>
                            </Grid.Col>)
                            }
                        </Grid>
                    </div>}
                </Await>
            </Suspense>
        </div>
    },
    RelatedServices: () => {
        const data = useLoaderData<typeof loader>();
        return <div>
            <Title order={3}>Frequently bought together</Title>
            <div style={{ paddingBottom: '30px' }}></div>
            <Suspense fallback={<Skeleton />}>
                <Await resolve={data?.related}>
                    {response => <Grid gutter={40}>
                        {response?.map(service => <Grid.Col key={service.id} span={{ base: 6, md: 3 }}>
                            <Link to={Routes.ServiceGroup.replace(':id', service.vendorType.keyName || '').replace(':subId', service.id)}><Image src={service.imageName} style={{ borderRadius: '5px' }} /></Link>
                            <div style={{ paddingBottom: '14px' }}></div>
                            <Text c="dimmed">{service.vendorType.name}</Text>
                            <Link to={Routes.ServiceGroup.replace(':id', service.vendorType.keyName || '').replace(':subId', service.id)}>
                                <Title order={5}>{service.name}</Title>
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
            <Title order={4}>Top Rated</Title>
            <div style={{ paddingBottom: '20px' }}></div>
            <Suspense fallback={<Skeleton />}>
                <Await resolve={data?.topRatedVendors}>
                    {response => <Stack gap={'lg'}>
                        {response?.map(item => <Grid gutter={20} align={'middle'} key={item.id}>
                            <Grid.Col span={{ md: 12 }}>
                                <Link to={Routes.VendorProfile.replace(':id', item.id)}>
                                    <Avatar src={item.image} size={'lg'} />
                                </Link>
                            </Grid.Col>
                            <Grid.Col>
                                <Link to={Routes.VendorProfile.replace(':id', item.id)}><Title order={5}>{item.name}</Title></Link>
                            </Grid.Col>
                        </Grid>)}
                        {!response?.length && <Text>Sorry, we couldn't find any vendors under this category.</Text>}
                    </Stack>}
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