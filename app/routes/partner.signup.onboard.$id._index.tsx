import { ActionArgs, LoaderArgs } from "@remix-run/node";
import { Form, useFetcher, useLoaderData } from "@remix-run/react";
import { Button, Card, Checkbox, Col, Divider, Row, Select, Space, Typography } from "antd";
import { useEffect, useState } from "react";
import { ServiceQuery } from "~/service/services.service";
import { db } from "~/utils/database";
import generateUuid from "~/utils/uuid.generator";

type LoaderData = {
    profile: {
        id: string;
        name: string;
        mobileNumber: string;
        email: string;
        vendorType?: {
            id: string;
        } | null;
    },
    services: {
        id: string;
        name: string;
        service: {
            id: string;
            name: string;
        }[];
    }[]
}

enum STEPS {
    SERVICE = 'SERVICE',
    COST = "COST",
    DOCUMENTS = "DOCUMENTS"
}

export async function action(args: ActionArgs) {
    const vendorId = args.params.id;
    const formData = await args.request.formData();
    const type: unknown = formData.get('action')?.toString();
    if (!type || !vendorId) {
        return false;
    }

    switch (type) {
        case STEPS.SERVICE:
            const items = formData.getAll('services');
            items.forEach(async serviceId => {
                await db.vendorService.create({
                    data: {
                        id: generateUuid(),
                        serviceId: serviceId.toString(),
                        vendorId,
                        duration: 1,
                        cost: 0
                    },
                });
            });

            return true
            break;
    }

    return false;

}

export async function loader(args: LoaderArgs): Promise<LoaderData | null> {
    const applicationId = args.params.id;

    const data = await db.vendor.findFirst({
        where: {
            id: applicationId
        },
        select: {
            id: true,
            name: true,
            email: true,
            mobileNumber: true,
            vendorType: {
                select: {
                    id: true
                }
            }
        }
    });

    const services = await ServiceQuery.getServicesByJob();

    if (data) {
        return { profile: data, services: services.map(x => ({ id: x.id, name: x.name, service: x.serviceGroup.map(i => i.serviceGroupItem).reduce((acc, i) => acc.concat(i), []).map(i => i.service) })) }
    }

    return null;
}



export default function () {
    const data = useLoaderData<LoaderData>();
    const fetcher = useFetcher();
    const [serviceList, setServiceList] = useState<{ id: string; name: string; }[]>([]);

    useEffect(() => {
        console.log(fetcher.data)
    }, [fetcher.data])

    function setActiveGroup(id: string) {
        const list = data.services.find(x => x.id === id);
        setServiceList(list?.service || []);
    }

    return <div className="container">
        <Row gutter={[40, 40]}>
            <Col span={24}>
                <Typography.Title>Welcome</Typography.Title>
                <Typography.Title level={4}>Hello {data.profile.name}, Please fill up the following details.</Typography.Title>
            </Col>
            <Col span={24}>
                <Divider />
            </Col>
            <Col span={24}>
                <Typography.Title level={5}>Select a category</Typography.Title>
                <Select defaultValue={data.profile?.vendorType?.id} onChange={value => setActiveGroup(value)} placeholder="Select a category">
                    {data.services.map(item => <Select.Option key={item.id} value={item.id}>{item.name}</Select.Option>)}
                </Select>
            </Col>
            <Col xs={24} sm={24} md={12}>
                <fetcher.Form method="post" action="">
                    <Card size="small" title="1. Choose your services">
                        <Space direction="vertical">
                            <Checkbox.Group name="services">
                                {serviceList.map(service => <Checkbox value={service.id} key={service.id}>{service.name}</Checkbox>)}
                            </Checkbox.Group>
                            {!serviceList.length && 'Sorry, no services found'}
                            <br />
                            <Button type="primary" htmlType="submit" name="action" value={STEPS.SERVICE}>Save & Continue</Button>
                        </Space>
                    </Card>
                </fetcher.Form>
            </Col>
            <Col xs={24} sm={24} md={12}>
                <fetcher.Form method="post" action="">
                    <Card size="small" title="2. Charges & Cost structure">

                        <Button type="primary" htmlType="submit" name="action" value={STEPS.COST}>Save & Continue</Button>
                    </Card>
                </fetcher.Form>
            </Col>
            <Col xs={24} sm={24} md={12}>
                <fetcher.Form method="post" action="">
                    <Card size="small" title="3. Confirm your identity">

                    </Card>
                </fetcher.Form>
            </Col>
        </Row>
    </div>;

}