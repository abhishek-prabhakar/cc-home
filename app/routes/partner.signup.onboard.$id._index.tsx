import { vendorServices_fareMode } from "@prisma/client";
import { ActionArgs, LoaderArgs } from "@remix-run/node";
import { Form, useFetcher, useLoaderData } from "@remix-run/react";
import { Button, Card, Checkbox, Col, Divider, Input, Row, Select, Space, Typography } from "antd";
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
        services: {
            id: string;
            serviceId: string;
            duration: number;
            cost: number;
            fareMode: vendorServices_fareMode;
            service: {
                name: string;
            };
        }[];
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
                        cost: 0,
                        fareMode: vendorServices_fareMode.HOURLY
                    },
                });
            });

            return true
            break;
        case STEPS.COST:
            const serviceId = formData.getAll('serviceId');
            const duration = formData.getAll('duration');
            const cost = formData.getAll('cost');
            const vendorServiceId = formData.getAll('id');
            const fareMode = formData.getAll('fareMode');

            const serviceItems = vendorServiceId.map((id, key) => ({
                id: id.toString(),
                duration: duration[key].toString(),
                cost: parseInt(cost[key].toString()),
                fareMode: fareMode[key].toString()
            }))

            await db.vendorService.updateMany({
                data: serviceItems,
                where: {
                    vendorId
                }
            });
            return true;
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
            },
            services: {
                select: {
                    id: true,
                    duration: true,
                    cost: true,
                    serviceId: true,
                    fareMode: true,
                    service: {
                        select: {
                            name: true
                        }
                    }
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
                        {data.profile.services.map((item, index) => <div>
                            <Row key={item.id} gutter={[20, 20]}>
                                <Col>
                                    <div><Typography.Text>Service</Typography.Text></div>
                                    <Select defaultValue={item.serviceId} disabled placeholder="Select a category">
                                        <Select.Option value={item.serviceId}>{item.service.name}</Select.Option>
                                    </Select>
                                </Col>
                                <Col>
                                    <div><Typography.Text>Charged By</Typography.Text></div>
                                    <select name="fareMode" defaultValue={item.fareMode}>
                                        <option value="">Select...</option>
                                        <option value={vendorServices_fareMode.FLAT}>Flat Fee</option>
                                        <option value={vendorServices_fareMode.HOURLY}>Hourly</option>
                                    </select>
                                </Col>
                                <Col>
                                    <div><Typography.Text>Duration</Typography.Text></div>
                                    <Input defaultValue={item.duration} name="duration" type="number" required />
                                </Col>
                                <Col>
                                    <div><Typography.Text>Cost</Typography.Text></div>
                                    <Input defaultValue={item.cost} name="cost" type="number" required />
                                </Col>
                                <Col>
                                    <input type="hidden" value={item.id} name="id" />
                                </Col>
                            </Row>
                            <Divider />
                        </div>)}
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