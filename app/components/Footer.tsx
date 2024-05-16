import { Badge, Container, Flex, Grid, Stack, Text, Title, Group, Space, Divider, ThemeIcon } from "@mantine/core";
import { Await, Link, useLoaderData } from "@remix-run/react";
import { Suspense } from "react";
import { RootLoaderData } from "~/types";
import Skeleton from "./Skeleton";
import { IconBrandInstagram } from "@tabler/icons-react";
import { IconBrandYoutube } from "@tabler/icons-react";

export function Footer() {
    const data = useLoaderData<RootLoaderData>();

    return <div style={{ background: '#fbfbfb', marginTop: '100px' }}>
        <Container size={'lg'} pt={'xl'}>
            <Space h="xl" />
            <Link to="/" ><img src="/assets/brand-logo.png" width={'124px'} /></Link>
            <Space h="lg" />
            <Suspense fallback={<Skeleton />}>
                <Await resolve={data.pages}>
                    {navList =>
                        <Grid gutter={'xl'}>
                            {navList.map(item => <Grid.Col key={item.id} span={{ base: 6, md: 2 }}>
                                <Text fw={500} pb={'sm'}>{item.name}</Text>
                                <Stack>
                                    {item.children[0]?.list.map((child, i) => <Link key={child.id} to={child.path}><Text size="sm">{child.name}</Text></Link>)}
                                </Stack>
                            </Grid.Col>)}
                        </Grid>
                    }
                </Await>
            </Suspense>
            <Space h="xl" />
            <Divider />
            <Space h="md" />
            <Text c="dimmed">Follow us on social media</Text>
            <Group gap="xl" pt="sm">
                <Link to={'https://www.instagram.com/celebriacollective/'} target="_BLANK">
                    <ThemeIcon variant="light" radius="xl" size="lg" color="gray">
                        <IconBrandInstagram />
                    </ThemeIcon>
                </Link>
                <Link to={'https://www.youtube.com/@celebria_collective'} target="_BLANK">
                    <ThemeIcon variant="light" radius="xl" size="lg" color="gray">
                        <IconBrandYoutube />
                    </ThemeIcon>
                </Link>
            </Group>
            <Space h="md" />
            <Divider />
            <Space h="xl" />
            <Text ta="center">© Celebria Collective {new Date()?.getFullYear()}. All Rights Reserved.</Text>
            <Space h="md" />
            <Group justify="center" gap="lg">
                <Link to="about/contact-us"><Text c="dimmed" ta="center">Contact Us</Text></Link>
                <Link to="about/privacy-policy"><Text c="dimmed" ta="center">Privacy Policy</Text></Link>
                <Link to="about/terms"><Text c="dimmed" ta="center">Terms And Conditions</Text></Link>
                <Link to="about/refund-policy"><Text c="dimmed" ta="center">Cancellation & Refund Policy</Text></Link>
            </Group>
            <Space h="md" />
            <Text c="dimmed" ta="center">Celebria Collective Private Limited,<br />02 -
                VASANTHA TOWERS, COCONUT garden layout,<br />Krishnarajapuram, Bangalore North, Bangalore, Karnataka - 560036</Text>
            <Space h="xl" />
        </Container>
    </div>;
}