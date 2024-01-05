import { CheckCircleFilled, InfoCircleOutlined, PlusCircleFilled, PlusOutlined, WarningFilled } from "@ant-design/icons";
import { LoaderArgs, TypedDeferredData, TypedResponse, defer, redirect } from "@remix-run/node";
import { Await, Form, Outlet, useLoaderData } from "@remix-run/react";
import { Alert, Button, Calendar, Col, Input, Radio, Row, Select, SelectProps, Space, Tabs, Tag, Typography, Form as FormAnt, Divider, Card, Skeleton, Avatar } from "antd";
import { Suspense, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import ConfigureBooking from "~/components/ConfigureBooking";
import { VendorQuery } from "~/service/vendor.service";
import { VendorProfile, VendorService, VendorServiceOption } from "~/types";
const { Title } = Typography;
type RequiredMark = boolean | 'optional' | 'customize';

const coverStyles: React.CSSProperties = { backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', padding: '40px 0', marginTop: '-40px', borderRadius: '12px' }

const pageWrapperStyles: React.CSSProperties = { padding: '40px 0' };
const locationStyles: React.CSSProperties = { borderLeft: '1px solid var(--ui-color-black)', padding: '0 20px' };

type loaderData = { profile: VendorProfile | null, services: VendorService[] };
type VendorAddonOption = VendorServiceOption & { hide?: boolean }

export async function loader({ params }: LoaderArgs): Promise<TypedDeferredData<any> | TypedResponse<never>> {
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
        const data: loaderData = useLoaderData();

        return <div>
            <div className="container" style={{ paddingTop: '20px' }}>
                <Suspense fallback={<Skeleton active />}>
                    <Await resolve={data.profile}>
                        {profile => <ProfileLayout.Cover profile={profile} />}
                    </Await>
                </Suspense>
            </div>
            <div style={pageWrapperStyles}>
                <Outlet />
            </div>
            <Suspense fallback={<div className="container"><Skeleton active /></div>}>
                <Await resolve={data.services}>
                    {services => <ProfileLayout.Contact services={services} />}
                </Await>
            </Suspense>
        </div >

    },
    Cover: ({ profile }: { profile: VendorProfile | null }) => {

        return <div style={{ ...coverStyles, backgroundImage: profile?.coverImageName ? `url(${profile?.coverImageName})` : '', backgroundColor: profile?.primaryColor }}>
            <div className="container">
                <Row wrap={false}>
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
                </Row>
            </div>
        </div>
    },
    Contact: ({ services }: { services: VendorService[] }) => {
        const [requiredMark, setRequiredMarkType] = useState<RequiredMark>('optional');
        const [serviceId, setServiceId] = useState<string>();
        const [showConfigPanel, setShowConfigPanel] = useState(false);
        const [addonsList, setAddonsList] = useState<VendorAddonOption[]>([]);
        const [serviceList, setServiceList] = useState<VendorServiceOption[]>([]);
        const [selectedAddons, setSelectedAddons] = useState<VendorAddonOption[]>([]);

        const onRequiredTypeChange = ({ requiredMarkValue }: { requiredMarkValue: RequiredMark }) => {
            setRequiredMarkType(requiredMarkValue);
        };


        function setServiceOptions(id: string) {
            const selected = services?.find(x => x.vendorServiceGroupId === id);
            setServiceId(id);
            if (selected) {
                setServiceList(selected.included);
                setAddonsList(selected.addons);
            } else {
                setServiceList([]);
                setAddonsList([]);
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
            <Divider />
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
                                <div>
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
                                </div>
                            }
                            showIcon
                            type="success"
                        />,
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
                                {!showConfigPanel && serviceId && <Button onClick={() => setShowConfigPanel(true)} type="primary">Continue</Button>}
                            </Col>
                        </Row>
                    </Space>
                </Col>
                <Col span={24} md={12} lg={12} xl={16}>
                    {showConfigPanel && serviceId && <ConfigureBooking vendorServiceGroupId={serviceId} options={serviceList.concat(selectedAddons)} />}
                </Col>
            </Row>
        </div>
    }
}

export default ProfileLayout.Index;