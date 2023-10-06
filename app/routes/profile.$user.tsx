import { CheckCircleFilled, InfoCircleOutlined, WarningFilled } from "@ant-design/icons";
import { LoaderArgs, TypedResponse, redirect } from "@remix-run/node";
import { Form, Outlet, useLoaderData } from "@remix-run/react";
import { Alert, Button, Calendar, Col, Input, Radio, Row, Select, SelectProps, Space, Tabs, Tag, Typography, Form as FormAnt, Divider, Card } from "antd";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import ConfigureBooking from "~/components/ConfigureBooking";
import { VendorQuery } from "~/service/vendor.service";
import { VendorProfile, VendorService, VendorServiceOption } from "~/types";
const { Title } = Typography;
type RequiredMark = boolean | 'optional' | 'customize';

const coverStyles: React.CSSProperties = { backgroundImage: 'url(https://demo.themerec.com/item/wordpress/thepro-light/wp-content/uploads/sites/9/2022/06/header-bg-white.jpg)', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', minHeight: '500px', padding: '40px 0', marginTop: '-40px' }

const pageWrapperStyles: React.CSSProperties = { padding: '40px 0' };
const locationStyles: React.CSSProperties = { borderLeft: '1px solid var(--ui-color-black)', padding: '0 20px' };

type loaderData = VendorProfile & { services: VendorService[] };

export async function loader({ params }: LoaderArgs): Promise<loaderData | TypedResponse<never>
> {
    const id = params.user;

    if (!id) {
        return redirect(`/404`);
    }


    const vendorDetails = VendorQuery.getVendorById(id);
    const serviceList: VendorService[] = VendorQuery.getServices(id);

    return {
        ...vendorDetails,
        services: serviceList
    };
}

const ProfileLayout = {
    Index: () => {
        const data = useLoaderData<loaderData>();

        return <div>
            <ProfileLayout.Cover />
            <div style={pageWrapperStyles}>
                <Outlet />
            </div>
            <ProfileLayout.Contact />
        </div>

    },
    Cover: () => {
        const data = useLoaderData<VendorProfile>();

        return <div style={coverStyles}>
            <div className="container">
                <Row gutter={[0, 40]} align={'middle'}>
                    <Col sm={24} xs={24} span={12}>
                        <Title level={3}>Hi There!</Title>
                        <Title level={1}>I am {data.fullName}</Title>
                    </Col>
                    <Col span={24}>
                        <Button type="primary">Contact Me</Button>
                    </Col>
                    <Col span={24}>
                        <div style={locationStyles}>
                            <Title level={4}>Location</Title>
                            <Title color="" level={5}>{data.location}</Title>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    },
    Contact: () => {
        const data = useLoaderData<loaderData>();
        const [requiredMark, setRequiredMarkType] = useState<RequiredMark>('optional');
        const [serviceId, setServiceId] = useState<string>();
        const [showConfigPanel, setShowConfigPanel] = useState(false);
        const [addonsList, setAddonsList] = useState<VendorServiceOption[]>([]);
        const [serviceList, setServiceList] = useState<VendorServiceOption[]>([]);
        const [selectedAddons, setSelectedAddons] = useState<VendorServiceOption[]>([]);

        const onRequiredTypeChange = ({ requiredMarkValue }: { requiredMarkValue: RequiredMark }) => {
            setRequiredMarkType(requiredMarkValue);
        };


        function setServiceOptions(id: string) {
            const selected = data?.services.find(x => x.id === id);
            setServiceId(id);
            if (selected) {
                setServiceList(selected.included);
                setAddonsList(selected.addons);
            } else {
                setServiceList([]);
                setAddonsList([]);
            }

            setShowConfigPanel(false);
        }

        function removeAddon(id: string) {
            const filtered = selectedAddons.filter(x => x.id !== id);
            setSelectedAddons(filtered);
        }

        return <div className="container">
            <Title level={2}>Check Availability</Title>
            <Row gutter={[40, 40]}>
                <Col span={24} md={12} lg={12} xl={8}>
                    <Space style={{ width: '100%' }} direction="vertical" size={'large'}>
                        <Select
                            style={{ width: '100%' }}
                            showSearch
                            placeholder="Search a service"
                            options={data.services.map(x => ({ value: x.id, label: x.title }))}
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
                                addonsList.map((item) => <Tag
                                    key={item.id}
                                    color="blue"
                                >{item.title}</Tag>)
                            }
                            {!addonsList?.length ?? <div>No addons</div>}
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
                    {showConfigPanel && serviceId && <ConfigureBooking id={serviceId} options={serviceList.concat(selectedAddons)} />}
                </Col>
            </Row>
        </div>
    }
}

export default ProfileLayout.Index;