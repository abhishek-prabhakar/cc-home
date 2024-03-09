import { Badge, Container, Flex, Grid, Stack, Text, Title, Group, Space, Divider } from "@mantine/core";
import { Await, Link, useLoaderData } from "@remix-run/react";
import { Suspense } from "react";
import Routes from "~/routes.data";
import { RootLoaderData } from "~/types";
import Skeleton from "./Skeleton";

export function Footer() {
    const data = useLoaderData<RootLoaderData>();

    return <div style={{ background: '#fbfbfb', marginTop: '100px' }}>
        <Container size={'lg'} pt={'xl'}>
            <Space h="xl" />
            <Link to="/" ><img src="/assets/brand-logo-1.png" width={'124px'} /></Link>
            <Space h="lg" />
            <Suspense fallback={<Skeleton />}>
                <Await resolve={data.pages}>
                    {navList =>
                        <Grid gutter={'xl'}>
                            {navList.map(item => <Grid.Col span="content">
                                <Text fw={500} pb={'sm'}>{item.name}</Text>
                                <Stack>
                                    {item.children[0]?.list.map((child, i) => <Link to={child.path}><Text size="sm">{child.name}</Text></Link>)}
                                </Stack>
                            </Grid.Col>)}
                        </Grid>
                    }
                </Await>
            </Suspense>
            <Space h="xl" />
            <Divider />
            <Space h="xl" />
            <Text ta="center">© Celebria Collective 2024. All Rights Reserved.</Text>
            <Space h="md" />
            <Group justify="center" gap="lg">
                <Text c="dimmed" ta="center">Privacy Policy</Text>
                <Text c="dimmed" ta="center">Terms And Conditions</Text>
            </Group>
            <Space h="xl" />
        </Container>
    </div>;
}