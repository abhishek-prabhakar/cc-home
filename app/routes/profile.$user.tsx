import { CheckCircleFilled, InfoCircleOutlined, PlusCircleFilled, PlusOutlined, WarningFilled } from "@ant-design/icons";
import { Accordion, Badge, Box, Button, Card, Container, Divider, Grid, Group, Image, List, Mark, Modal, NumberFormatter, Skeleton, Stack, Text, Title, rem } from "@mantine/core";
import { LoaderArgs, TypedDeferredData, TypedResponse, defer, redirect } from "@remix-run/node";
import { Await, Form, Outlet, useLoaderData, useLocation, useNavigate, useNavigation } from "@remix-run/react";
import { IconCheck, IconPlus } from "@tabler/icons-react";
import { IconCircleCheck } from "@tabler/icons-react";
import { Suspense, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import ConfigureBooking from "~/components/ConfigureBooking";
import COMMON_DATA from "~/data/common.data";
import Routes from "~/routes.data";
import { VendorQuery } from "~/service/vendor.service";
import { AddonGroupItem, VendorProfile, VendorService, VendorServiceOption } from "~/types";
type RequiredMark = boolean | 'optional' | 'customize';
import classes from '../styles/accordian.module.css';

const coverStyles: React.CSSProperties = { backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', padding: '40px 0', marginTop: '-40px', borderRadius: '12px' }

const pageWrapperStyles: React.CSSProperties = { padding: '40px 0' };
const locationStyles: React.CSSProperties = { borderLeft: '1px solid var(--ui-color-black)', padding: '0 20px' };

type ServiceGroup = { name: string, services: VendorService[] };
type loaderData = { profile: VendorProfile | null, services: ServiceGroup[] };
type VendorAddonOption = VendorServiceOption & { hide?: boolean }

export async function loader({ params }: LoaderArgs) {
    const id = params.user;

    if (!id) {
        return redirect(`/404`);
    }

    const vendorDetails = VendorQuery.getVendorByUsername(id);

    const serviceList = VendorQuery.getServices(id);

    return defer({
        profile: vendorDetails,
        services: serviceList
    });
}

const ProfileLayout = {
    Index: () => {
        const data = useLoaderData<loaderData>();

        return <Container>
            <Suspense fallback={<Skeleton />}>
                <Await resolve={data.profile}>
                    {profile => <ProfileLayout.Cover profile={profile} />}
                </Await>
            </Suspense>
            <div style={pageWrapperStyles}>
                <Outlet />
            </div>
            <Suspense fallback={<div className="container"><Skeleton /></div>}>
                <Await resolve={data.services}>
                    {services => <ProfileLayout.Pricing services={services} />}
                </Await>
            </Suspense>
            <ProfileLayout.CartSuggestion />
        </Container>
    },
    Cover: ({ profile }: { profile: VendorProfile | null }) => {

        return <div style={{ ...coverStyles, backgroundImage: profile?.coverImageName ? `url(${profile?.coverImageName})` : '', backgroundColor: profile?.primaryColor }}>
            <div className="container">
                {/* <Row wrap={false}>
                    <Col sm={24} xs={24} flex={'none'}>
                        <Card style={{ borderRadius: '14px' }}>
                            <Row gutter={[0, 40]} align={'middle'}>
                                <Col span={24}>
                                    <Title level={3}>Hi There!</Title>
                                    <Title level={2} style={{ marginTop: 0 }}>I am {profile?.fullName}</Title>
                                    <Avatar size={{ xs: 100, sm: 100, md: 100, lg: 100, xl: 100, xxl: 100 }}
                                        src={profile?.avatar} />
                                    <div style={{ paddingTop: '20px' }}>
                                        <a href="#book-now-section">
                                            <Button type="primary">Book Now</Button>
                                        </a>
                                    </div>
                                </Col>
                                <Col span={24}>
                                    <div style={locationStyles}>
                                        <Title level={4}>Location</Title>
                                        <Title color="" level={5}>{profile?.location}</Title>
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row> */}
            </div>
        </div>
    },
    Pricing: ({ services }: { services: ServiceGroup[] }) => {
        const [activeService, setActive] = useState<VendorService>();
        const [flatList, setFlatList] = useState<VendorService[]>([]);

        useEffect(() => {
            const list = services.reduce<VendorService[]>((acc, x) => acc.concat(x.services), []);
            setFlatList(list);
            setActive(list[0]);
        }, []);

        function setActiveService(id: string | null) {
            const item = flatList.find(x => x.vendorServiceGroupId === id);
            if (item) {
                setActive(item);
            }
        }

        return <Grid gutter={'xl'}>
            <Grid.Col span={{ base: 12, md: 4 }}>
                <Card withBorder style={{ borderColor: '#1D4ED7' }} p="30px">
                    <Title order={3} mb={rem(20)}>Save your money now.</Title>
                    <Stack>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </Text>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </Text>
                        <Image src="/assets/savings.png" width={'70%'} />
                    </Stack>
                </Card>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 8 }}>
                <Group align="end" justify="space-between" py={rem(40)}>
                    <Title order={3}>Book now<br />and <Mark color="lime">Pay later</Mark>.</Title>
                    <Box ta={'right'}>
                        <Text fw={500}>Having trouble?</Text>
                        <Text><a href="mailto:support@celebriacollective.com" target="_BLANK">Contact us</a></Text>
                    </Box>
                </Group>
                <Grid gutter={'xl'}>
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

                                <Button variant="filled">Book Now</Button>
                            </Stack>
                        </Card>
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6 }}>
                        <Card bg={'linear-gradient(#358BD6, #0F73C9)'} c={'white'} h={'100%'}>
                            <Stack>
                                <Title order={5}>Browse Services</Title>
                                <Divider size="md" w={'10%'} />
                                <Accordion unstyled chevron={null} defaultValue={'0'}>
                                    {services.map((group, index) => <Accordion.Item value={'' + index} key={'' + index}>
                                        <Accordion.Control style={{
                                            width: '100%',
                                            background: 'none',
                                            border: '0',
                                            textAlign: 'left',
                                            padding: '10px 20px'
                                        }}><Text c="white">{group.name}</Text></Accordion.Control>
                                        <Accordion.Panel>
                                            <Accordion classNames={classes} value={activeService?.vendorServiceGroupId} disableChevronRotation chevron={null} onChange={x => setActiveService(x)}>
                                                {group.services.map(item => <Accordion.Item key={item.vendorServiceGroupId} value={item.vendorServiceGroupId}>
                                                    <Accordion.Control icon={activeService?.vendorServiceGroupId === item.vendorServiceGroupId ? <IconCheck /> : <IconPlus size={12} />} color="inherit">{item.title}</Accordion.Control>
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
    Contact: ({ services }: { services: VendorService[] }) => {
        const [requiredMark, setRequiredMarkType] = useState<RequiredMark>('optional');
        const [service, setService] = useState<{ id: string, minHour: number } | null>();
        const [showConfigPanel, setShowConfigPanel] = useState(false);
        const [selectableList, setSelectList] = useState<AddonGroupItem[]>([]);
        const [addonsList, setAddonsList] = useState<VendorAddonOption[]>([]);
        const [serviceList, setServiceList] = useState<VendorServiceOption[]>([]);
        const [selectedAddons, setSelectedAddons] = useState<VendorAddonOption[]>([]);

        const onRequiredTypeChange = ({ requiredMarkValue }: { requiredMarkValue: RequiredMark }) => {
            setRequiredMarkType(requiredMarkValue);
        };


        function setServiceOptions(id: string) {
            const selected = services?.find(x => x.vendorServiceGroupId === id);
            if (selected) {
                setService({ id, minHour: selected?.minHour });
                setServiceList(selected.included);
                setAddonsList(selected.addons);
                setSelectList(selected.selectableList || []);
            } else {
                setServiceList([]);
                setAddonsList([]);
                setSelectList([]);
                setService(null);
            }

            setShowConfigPanel(false);
            setSelectedAddons([]);
        }

        function setAddon(id: string) {
            const addonItem = addonsList.find(x => x.id === id);
            if (addonItem) {
                setSelectedAddons(selectedAddons.concat([addonItem]));
                addonItem.hide = true;
            }
        }

        function removeAddon(id: string) {
            const addonItem = selectedAddons.find(x => x.id === id);
            const filtered = selectedAddons.filter(x => x.id !== id);
            // setAddonsList([...addonsList, ]);
            setSelectedAddons(filtered);
            if (addonItem) {
                addonItem.hide = false;
            }
        }

        return <div className="container" id="book-now-section">
            {/* <Divider />
            <Title level={2}>Book Now, Pay later</Title>
            <Row gutter={[40, 40]}>
                <Col span={24} md={12} lg={12} xl={8}>
                    <Space style={{ width: '100%' }} direction="vertical" size={'large'}>
                        <Select
                            style={{ width: '100%' }}
                            showSearch
                            placeholder="Search a service"
                            options={services.map(x => ({ value: x.vendorServiceGroupId, label: x.title }))}
                            onChange={setServiceOptions}
                        />

                        {serviceList?.length ? [<Alert
                            message="Services Included"
                            description={
                                <Space wrap={true} size={'small'}>
                                    {
                                        serviceList.map((item) => <Tag
                                            key={item.id} color="#108ee9"
                                        >{item.title}</Tag>
                                        )}
                                    {
                                        selectedAddons.map((item) => <Tag
                                            key={item.id}
                                            closable={true}
                                            color="#108ee9"
                                            onClose={() => removeAddon(item.id)}
                                        >{item.title}</Tag>)
                                    }
                                </Space >
                            }
                            showIcon
                            type="success"
                        />,
                        <div>
                            {
                                selectableList.map(item => <div>
                                    <Title level={5}>{item.title}</Title>
                                    <select>
                                        {item.services.map(service => <option value={service.id}>{service.title}</option>)}
                                    </select>
                                </div>)
                            }
                        </div>,
                        <div>
                            <Title level={5}>Available addons</Title>
                            {
                                addonsList.filter(x => !x.hide).map((item) => <Tag
                                    key={item.id}
                                    color="blue"
                                    closable={true}
                                    closeIcon={<PlusOutlined color="primary" />}
                                    onClose={() => setAddon(item.id)}
                                >{item.title}</Tag>)
                            }
                            {!addonsList.filter(x => !x.hide)?.length && <div>No addons</div>}
                        </div>]
                            : ''}
                        <Row justify={'end'}>
                            <Col>
                                {!showConfigPanel && service?.id && <Button onClick={() => setShowConfigPanel(true)} type="primary">Continue</Button>}
                            </Col>
                        </Row>
                    </Space>
                </Col>
                <Col span={24} md={12} lg={12} xl={16}>
                    {showConfigPanel && service?.id && <ConfigureBooking vendorServiceGroupId={service?.id} minHour={service?.minHour || 1} options={serviceList.concat(selectedAddons)} />}
                </Col>
            </Row> */}
        </div>
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
            navigate(Routes.Cart);
        }

        return <Modal title="Your cart has been updated." opened={showModal} onClose={() => setModal(false)} >
            <Title order={5}>Forgot to add something?</Title>
        </Modal>;
    }
}

export default ProfileLayout.Index;