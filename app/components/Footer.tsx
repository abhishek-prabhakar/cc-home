import { Badge, Container, Flex, Grid, Skeleton, Stack, Text, Title } from "@mantine/core";
import { Await, Link, useLoaderData } from "@remix-run/react";
import { Suspense } from "react";
import Routes from "~/routes.data";
import { RootLoaderData } from "~/types";

export function Footer() {
    const data = useLoaderData<RootLoaderData>();

    return <Container>
        <Stack gap="lg">
            <Grid gutter={40} style={{ background: '#EEF5FE', borderRadius: '10px', padding: '40px' }}>
                <Grid.Col span={{ base: 12, md: 4 }}>
                    <Title order={5}>About</Title>
                    <Text color="#3d5b7d">Our commitment to excellence is the cornerstone of our vision, empowering both clients and artisans to revel in an unparalleded creative odyssey.</Text>
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 4 }}>
                    <Title order={5}>Categories</Title>
                    <Suspense fallback={<Skeleton />}>
                        <Await resolve={data.pages}>
                            {navList => <Flex wrap="wrap" gap="sm">{navList.map(item => <Link to={Routes.Services.replace(':id', item.id)}> <Badge variant="outline" color="gray" key={item.id}>{item.name}</Badge></Link>)}</Flex>}
                        </Await>
                    </Suspense>
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 4 }}>
                    <Title order={5}>Support</Title>
                    <Text>support@celebriacollective.com</Text>
                </Grid.Col>
            </Grid>
            <Grid justify={'space-between'}>
                <Grid.Col>
                    <Text c="dimmed">© Celebria Collective {new Date().getFullYear()}. All Rights Reserved.</Text>
                </Grid.Col>
                <Grid.Col>
                    <Text c="dimmed">Privacy Policy | Terms And Conditions</Text>
                </Grid.Col>
            </Grid>
        </Stack>
    </Container>;
}