import { Accordion, ActionIcon, Badge, Box, Button, Card, Center, Container, Divider, Flex, Grid, Group, Image, List, Mark, Modal, NumberFormatter, SegmentedControl, Select, Skeleton, Space, Stack, Text, Title, rem } from "@mantine/core";
import { LoaderArgs, TypedDeferredData, TypedResponse, defer, redirect } from "@remix-run/node";
import { Await, Form, Link, Outlet, useLoaderData, useLocation, useNavigate, useNavigation } from "@remix-run/react";
import { IconArrowDown, IconArrowLeft, IconAsterisk, IconCheck, IconCircle, IconPlus } from "@tabler/icons-react";
import { IconCircleCheck } from "@tabler/icons-react";
import { Suspense, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import ConfigureBooking from "~/components/ConfigureBooking";
import COMMON_DATA from "~/data/common.data";
import Routes from "~/routes.data";
import { VendorQuery } from "~/service/vendor.service";
import { VendorProfile, VendorServicePublic } from "~/types";
type RequiredMark = boolean | 'optional' | 'customize';
import classes from '../styles/accordian.module.css';
import { IconDiscountCheckFilled } from "@tabler/icons-react";
import { IconMapPin } from "@tabler/icons-react";
import { IconHeart } from "@tabler/icons-react";
import Currency from "~/utils/currency.transformer";
import { IconPoint } from "@tabler/icons-react";
import { IconCircleArrowDownFilled } from "@tabler/icons-react";

const coverStyles: React.CSSProperties = { backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', padding: '40px 0', marginTop: '-40px', borderRadius: '12px' }

const pageWrapperStyles: React.CSSProperties = { padding: '40px 0' };
const locationStyles: React.CSSProperties = { borderLeft: '1px solid var(--ui-color-black)', padding: '0 20px' };

type ServiceGroup = { name: string, services: VendorServicePublic[] };

export async function loader({ params, request }: LoaderArgs) {
    const id = params.user || '';

    const searchParams = new URL(request.url).searchParams;
    const preselectedServiceGrpId = searchParams.get('service')?.toString();

    const vendorDetails = VendorQuery.getVendorByUsername(id);
    const serviceList = VendorQuery.getServices(id);
    const getLinkedProfiles = VendorQuery.getLinkedProfiles(id);

    return defer({
        username: id,
        profile: vendorDetails,
        services: serviceList,
        serviceGroupId: preselectedServiceGrpId,
        otherProfiles: getLinkedProfiles
    });
}


const ProfileLayout = {
    Index: () => {
        const [activeGroupData, setActiveGroupData] = useState<VendorServicePublic | null>()
        const data = useLoaderData<typeof loader>();
        const navigate = useNavigate();
        const [profileData, setProfileData] = useState<VendorProfile | null>();

        function setPreselectedGrpData(d?: VendorServicePublic | null) {
            if (d) {
                setActiveGroupData(d)
            } else {
                setActiveGroupData(null)
            }
        }

        function switchProfile(value: string) {
            navigate(Routes.get('VendorProfile', { id: value }));
        }

        return <Container size={'xl'} >
            <Grid gutter={'xl'}>
                <Grid.Col span={{ base: 12, md: 3 }}>
                    <Suspense fallback={<Skeleton />}>
                        <Await resolve={data.profile}>
                            {profile => <ProfileLayout.Cover profile={profile} activeGroupData={activeGroupData} onLoad={setProfileData} />}
                        </Await>
                    </Suspense>
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 9 }}>
                    <Stack justify="center" align="center">
                        <Title order={4} c={'gray'}>Services I'm offering,</Title>
                        <Suspense fallback={<Skeleton />}>
                            <Await resolve={data.otherProfiles}>
                                {profiles => <SegmentedControl value={data.username} size="md" radius="xl" style={{ zIndex: 0 }} color="pink" data={profiles.map(item => ({
                                    value: item.username, label: <Center style={{ gap: 10 }}>{item.username === data.username ? <IconArrowDown style={{ width: rem(16), height: rem(16) }} /> : <IconPoint />} <span>{item.vendorType?.vendorIdentifier}</span></Center>
                                }))} onChange={switchProfile} />}
                            </Await>
                        </Suspense>
                    </Stack>
                    <Space h={'md'} />
                    <Outlet context={profileData} />
                </Grid.Col>
            </Grid>
            <Divider my="xl" />
            <Suspense fallback={<div className="container"><Skeleton /></div>}>
                <Await resolve={data.services}>
                    {services => <ProfileLayout.Pricing services={services} preSelectedGroupId={data.serviceGroupId} preSelectedGroup={setPreselectedGrpData} />}
                </Await>
            </Suspense>
            <ProfileLayout.CartSuggestion />
        </Container>
    },
    Cover: ({ profile, activeGroupData, onLoad }: { profile: VendorProfile | null, activeGroupData?: VendorServicePublic | null, onLoad: (d: VendorProfile | null) => void }) => {

        useEffect(() => {
            onLoad(profile)
        }, [])

        return <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
                <Grid align={'center'}>
                    <Grid.Col span={{ base: 4, md: 12 }}>
                        <Image src={profile?.avatar} width={'100%'} mah={'300px'} />
                    </Grid.Col>
                    <Grid.Col span={{ base: 8, md: 12 }}>
                        <Box p="md">
                            <Stack gap={'xs'} justify="center">
                                <Flex gap={'sm'} align={'center'}>
                                    <Title order={4}>{profile?.fullName}</Title>
                                    <IconDiscountCheckFilled size={'20px'} style={{ color: 'var(--ui-color-success)' }} />
                                </Flex>
                                <Flex align={'center'} gap={'xs'}>
                                    <IconMapPin style={{ color: 'gray' }} size={'18px'} />
                                    <Text fw={500}>{profile?.location} Bangalore</Text>
                                </Flex>
                            </Stack>
                            <Space h="md" />
                            <Flex justify={'center'} gap={'xs'}>
                                <Box flex={'auto'}>
                                    <a href="#book-now-section">
                                        <Button variant="filled" radius={'sm'} fullWidth>Book a service</Button>
                                    </a>
                                </Box>
                                <ActionIcon size="lg" variant="light" color="pink" aria-label="Favourite">
                                    <IconHeart style={{ width: '70%', height: '70%' }} stroke={1.5} />
                                </ActionIcon>
                            </Flex>
                            <Space h="md" />
                            <Divider />
                            <Space h="md" />
                            {activeGroupData ?
                                <>
                                    <Text c="dimmed">{activeGroupData.title} starting from <Currency value={activeGroupData?.cost} /></Text>
                                    <Space h="md" />
                                    <Divider />
                                    <Space h="md" />
                                    <Text c="dimmed">Other services starting from <Currency value={profile?.baseCharge} /></Text>
                                </>
                                : <Text c="dimmed">Starting from <Currency value={profile?.baseCharge} /></Text>}
                        </Box>
                    </Grid.Col>
                </Grid>
            </Card.Section>
        </Card>;
    },
    Pricing: ({ services, preSelectedGroupId, preSelectedGroup }: { services: ServiceGroup[], preSelectedGroupId: string | null, preSelectedGroup: (d?: VendorServicePublic | null) => void }) => {
        const [activeService, setActive] = useState<VendorServicePublic>();
        const [flatList, setFlatList] = useState<VendorServicePublic[]>([]);

        useEffect(() => {
            const list = services.reduce<VendorServicePublic[]>((acc, x) => acc.concat(x.services), []);
            setFlatList(list);
            if (preSelectedGroupId) {
                const grpData = list.find(x => x.groupId === preSelectedGroupId);
                setActive(grpData);
                preSelectedGroup(grpData);
            } else {
                setActive(list[0]);
            }
        }, []);

        function setActiveService(id: string | null) {
            const item = flatList.find(x => x.vendorServiceGroupId === id);
            if (item) {
                setActive(item);
            }
        }

        return <Grid gutter={'xl'} id="book-now-section">
            <Grid.Col span={{ base: 12, md: 3 }}>
                <Card withBorder style={{ borderColor: '#1D4ED7' }} p="10px">
                    <Title order={3} mb={rem(20)}>Save your money now.</Title>
                    <Stack>
                        <Text>
                            Secure creative professionals instantly with our 'Book Now, Pay Later' option. Pay 50% within 3 days of booking, and the rest after the completion of service.
                        </Text>
                        <Text>
                            Choose easy EMI
                        </Text>
                        <Text>
                            Pay 100% upfront for a 5% discount. Flexible, hassle-free, and tailored to your financial preferences.
                        </Text>
                        <Image src="/assets/savings.png" width={'50%'} />
                    </Stack>
                </Card>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 9 }}>
                <Group align="end" justify="space-between" py={rem(40)}>
                    <Title order={3}>Book now<br />and <Mark color="lime">Pay later</Mark>.</Title>
                    <Box ta={'right'}>
                        <Text fw={500}>Having trouble?</Text>
                        <Text><a href="mailto:support@celebriacollective.com" target="_BLANK">Contact us</a></Text>
                    </Box>
                </Group>
                <Grid gutter={'xl'}>
                    <Grid.Col hiddenFrom="md">
                        <Select label="Select a service"
                            placeholder="Select"
                            clearable={false}
                            allowDeselect={false}
                            value={activeService?.vendorServiceGroupId}
                            onChange={x => setActiveService(x)}
                            data={services.map(group => ({ group: group.name, items: group.services.map(x => ({ value: x.vendorServiceGroupId, label: x.title })) }))} />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6 }}>
                        <Card bg={'#F2F5FB'}>
                            <Stack>
                                <Group justify="space-between" align="center">
                                    <Title order={5}>{activeService?.title}</Title>
                                    <Badge variant="light" color="teal">Most Booked</Badge>
                                </Group>
                                <Divider size="md" w={'10%'} />
                                <Box>
                                    <Text c="dimmed">Starts from:</Text>
                                    <Title order={3}><NumberFormatter prefix={COMMON_DATA.currency} value={activeService?.cost} thousandSeparator /></Title>
                                </Box>
                                <Text fw={500}>Services Included:</Text>

                                <List
                                    spacing="xs"
                                    size="sm"
                                    center
                                    icon={
                                        <IconCircleCheck size={16} />
                                    }
                                >
                                    {activeService?.included.map(item => <List.Item key={item.id}>
                                        {item.title}
                                    </List.Item>)}
                                </List>

                                {activeService?.addons.length ? <Stack gap="xs">
                                    <Text fw={500}>Additional</Text>
                                    <List>
                                        {activeService?.addons.map(item => <List.Item key={item.id}>{item.title}</List.Item>)}
                                    </List>
                                </Stack> : ''}

                                {activeService?.vendorServiceGroupId && <Link to={Routes.get('CartItem', { id: activeService?.vendorServiceGroupId })} >
                                    <Button variant="filled" w={'100%'}>Book Now</Button>
                                </Link>
                                }
                            </Stack>
                        </Card>
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6 }} visibleFrom={'md'}>
                        <Card>
                            <Stack>
                                <Title order={5}>Browse Services</Title>
                                <Divider size="md" w={'10%'} />
                                <Accordion unstyled defaultValue={String(services.findIndex(x => x.services.find(i => i.groupId === preSelectedGroupId)) || 0)}>
                                    {services.map((group, index) => <Accordion.Item value={'' + index} key={'' + index}>
                                        <Accordion.Control style={{
                                            width: '100%',
                                            background: 'none',
                                            border: '0',
                                            textAlign: 'left',
                                            padding: '10px 20px',
                                            cursor: 'pointer',
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            direction: 'rtl',
                                        }}><Text c="blue">{group.name}</Text></Accordion.Control>
                                        <Accordion.Panel>
                                            <Accordion classNames={classes} value={activeService?.vendorServiceGroupId} disableChevronRotation chevron={null} onChange={x => setActiveService(x)}>
                                                {group.services.map(item => <Accordion.Item key={item.vendorServiceGroupId} value={item.vendorServiceGroupId}>
                                                    <Accordion.Control icon={activeService?.vendorServiceGroupId === item.vendorServiceGroupId ? <IconArrowLeft /> : <IconCircle size={12} />} color="inherit">{item.title}</Accordion.Control>
                                                </Accordion.Item>)}
                                            </Accordion>
                                        </Accordion.Panel>
                                    </Accordion.Item>)}

                                </Accordion>
                            </Stack>
                        </Card>
                    </Grid.Col>
                </Grid>
            </Grid.Col>
        </Grid>
    },
    CartSuggestion: () => {
        const location = useLocation();
        const navigate = useNavigate();
        const [showModal, setModal] = useState(false);

        useEffect(() => {
            const url = new URLSearchParams(location.search);
            if (url.get('cartStatus')) {
                setModal(true);
            }
        }, [location.pathname]);

        function gotoCart() {
            navigate(Routes.get('Cart'));
        }

        return <Modal title="Your cart has been updated." opened={showModal} onClose={() => setModal(false)} >
            <Title order={5}>Forgot to add something?</Title>
        </Modal>;
    }
}

export function ErrorBoundary() {
    return <div>
        Oops, Something went wrong! Please reload the page.
    </div>
}

export default ProfileLayout.Index;