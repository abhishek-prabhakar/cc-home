import { Badge, Button, Container, Divider, Flex, Grid, Image, Stack, Tabs, Text, Title } from "@mantine/core";
import { LoaderArgs, defer } from "@remix-run/node";
import { Await, Link, Outlet, useLoaderData } from "@remix-run/react";
import { Suspense } from "react";
import Skeleton from "~/components/Skeleton";
import { PATH } from "~/path.data";
import Routes from "~/routes.data";
import CollectionService from "~/service/collections.service";
import { db } from "~/utils/database";


export function loader(args: LoaderArgs) {
    const id = args.params.id;

    // db.serviceGroupType
    if (!id) {
        throw ('error');
    }

    const results = CollectionService.getServicesGroupsByCollection(id);

    return defer({
        data: CollectionService.getCollectionInfo(id),
        results
    });
}

const CollectionsPage = {
    Index: () => {

        return [
            <CollectionsPage.Header />,
            <CollectionsPage.Section />
        ]
    },
    Header: () => {
        const data = useLoaderData<typeof loader>();

        return <Container style={{ paddingBottom: '40px' }}>
            <div className="section-bg-pattern _pattern-1">
                <Grid align={"middle"} justify={'center'}>
                    <Grid.Col span={8} style={{ padding: '20px 0' }}>
                        <Suspense fallback={<Skeleton />}>
                            <Await resolve={data.data}>
                                {result => <Stack>
                                    <Title order={5}>The easiest way to find</Title>
                                    <Title order={3}>Services in <span className="_color-primary">{result.name}</span></Title>
                                    <Text size="sm">By bringing together ambitious and talented professionals with AI, we are making your work easier.</Text>
                                    <Flex gap={'md'} align={'center'} style={{ paddingTop: '30px' }}>
                                        <Text c="dimmed">See how it works</Text>
                                        <Button radius="xl" variant="outline">Watch Video</Button>
                                    </Flex>
                                </Stack>}
                            </Await>
                        </Suspense>
                    </Grid.Col>
                    <Grid.Col span={3} style={{ overflow: 'hidden', marginBottom: '-40px' }}>
                        <img src="/assets/art-1.png" />
                    </Grid.Col>
                </Grid>
            </div>
        </Container>
    },
    Section: () => {
        const data = useLoaderData<typeof loader>();

        return <Container>
            <Suspense fallback={<Skeleton />}>
                <Await resolve={data.results}>
                    {result => <Tabs defaultValue="0">
                        <Tabs.List>
                            {result.map((item, i) => <Tabs.Tab value={'' + i}><Title order={5}>{item.name}</Title></Tabs.Tab>)}
                        </Tabs.List>
                        {result.map((item, i) => <Tabs.Panel value={'' + i}>
                            <Grid key={item.keyName} gutter={40} style={{ padding: '40px 0' }}>
                                {item.serviceGroup.map(service => <Grid.Col key={service.id} span={{ base: 12, md: 3 }}><Link to={Routes.ServiceGroup.replace(':id', item.keyName || '').replace(':subId', service.id)}>
                                    <div style={{ borderRadius: '10px', background: '#F5F5F7', padding: '12px', boxShadow: '0 2px 4px #d3d3d3' }}>
                                        <Image src={service.imageName ? PATH.RESOURCE_URL + service.imageName : ''} style={{ borderRadius: '6px', maxHeight: '140px', objectFit: 'cover' }} width={'100%'} />
                                        <div style={{ paddingBottom: '20px' }}></div>
                                        <Link to={Routes.ServiceGroup.replace(':id', item.keyName || '').replace(':subId', service.id)}>
                                            <Title order={5}>{service.name}</Title>
                                        </Link>
                                        <Text fw={500} c="dimmed" >Includes</Text>
                                        <div>
                                            {service.serviceGroupItem.map((description, key) => <div key={'d-' + key}>
                                                <Text fw={500} c="dimmed">{description.service.name}.</Text>
                                            </div>)}
                                        </div>
                                        <div style={{ marginTop: '10px', height: '26px' }}>
                                            {service.VendorServiceGroup.length ? <div style={{ borderTop: '1px solid #ddd', paddingTop: '4px' }}><Flex gap={'sm'} align={'center'}><Text size="sm">Starts from</Text><Badge color="yellow">₹{service.VendorServiceGroup[0].cost}</Badge></Flex></div>
                                                : ''}
                                        </div>
                                    </div>
                                </Link>
                                </Grid.Col>)}
                                <Grid.Col span={12}>
                                    <Divider />
                                </Grid.Col>
                            </Grid>
                        </Tabs.Panel>
                        )}
                    </Tabs>
                    }</Await>
            </Suspense>
        </Container>
    }
}


export default CollectionsPage.Index;