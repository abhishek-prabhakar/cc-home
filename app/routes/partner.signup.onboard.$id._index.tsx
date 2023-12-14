import { FareMode } from "@prisma/client";
import { ActionArgs, LoaderArgs } from "@remix-run/node";
import { Form, useFetcher, useLoaderData } from "@remix-run/react";
import { Button, Card, Checkbox, Col, Divider, Input, Row, Select, Space, Spin, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import FileUploader from "~/components/FileUploader";
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
            fareMode: FareMode;
            service: {
                name: string;
                minHour: number;
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
    }[],
    files: {
        id: string;
        fileType: string;
        fileName: string;
    }[]
}

enum STEPS {
    SERVICE = 'SERVICE',
    COST = "COST",
    DOCUMENTS = "DOCUMENTS"
}

const fileTypes = [{
    name: 'Aadhar'
}, {
    name: 'PAN'
},
{
    name: 'Passport'
}, {
    name: 'Voters ID'
}, {
    name: 'Driving Licence'
}]

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
            const categoryId = formData.get('categoryId')?.toString();
            await db.vendorService.deleteMany({
                where: {
                    vendorId
                }
            });
            await db.vendor.update({
                where: {
                    id: vendorId
                },
                data: {
                    categoryId
                }
            });
            items.forEach(async serviceId => {
                await db.vendorService.create({
                    data: {
                        id: generateUuid(),
                        serviceId: serviceId.toString(),
                        vendorId,
                        duration: 1,
                        cost: 0,
                        fareMode: FareMode.HOURLY
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

            vendorServiceId.forEach(async (id, key) => {
                const udata = {
                    duration: parseInt(duration[key].toString()),
                    cost: parseInt(cost[key].toString()),
                    fareMode: fareMode[key].toString() as FareMode
                }

                await db.vendorService.update({
                    data: udata,
                    where: {
                        id: id.toString()
                    }
                });
            })
            return true;
            break;
        case STEPS.DOCUMENTS:
            const fileName = formData.get('fileId')?.toString();
            const fileType = formData.get('fileType')?.toString();
            if (fileName && fileType) {
                await db.vendorFiles.create({
                    data: {
                        id: generateUuid(),
                        vendorId: vendorId,
                        fileName: fileName,
                        fileType: fileType
                    }
                });
            }
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
                            name: true,
                            minHour: true
                        }
                    }
                }
            }
        }
    });

    const services = await ServiceQuery.getServicesByJob();

    const files = await db.vendorFiles.findMany({
        where: {
            vendorId: applicationId
        },
        select: {
            id: true,
            fileName: true,
            fileType: true
        }
    });

    if (data) {
        return { profile: data, services: services.map(x => ({ id: x.id, name: x.name, service: x.serviceGroup.map(i => i.serviceGroupItem).reduce((acc, i) => acc.concat(i), []).map(i => i.service) })), files }
    }

    return null;
}



export default function () {
    const data = useLoaderData<LoaderData>();
    const fetcher = useFetcher();
    const [activeType, setJobType] = useState<string>('');
    const [serviceList, setServiceList] = useState<{ id: string; name: string; }[]>([]);

    useEffect(() => {
        if (fetcher.data) {
            alert('Thank you for updating your profile')
        }
    }, [fetcher.data]);

    useEffect(() => {
        setActiveGroup(data.profile.vendorType?.id || '')
    }, [])

    function setActiveGroup(id: string) {
        setJobType(id);
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
                        <input type="hidden" name="categoryId" value={activeType} />
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
            <Col xs={24}></Col>
            <Col xs={24} sm={24} md={12}>
                <fetcher.Form method="post" action="">
                    <Card size="small" title="2. Charges & Cost structure">
                        {data.profile.services.map((item, index) => <div>
                            <Row key={item.id} gutter={[20, 20]}>
                                <Col span={24}>
                                    <div><Typography.Title level={5}>{item.service.name}</Typography.Title></div>
                                    <input type="hidden" value={item.id} name="id" />
                                </Col>
                                <Col span={8}>
                                    <div><Typography.Text>Charged By</Typography.Text></div>
                                    <select name="fareMode" defaultValue={item.fareMode}>
                                        <option value="">Select...</option>
                                        <option value={FareMode.FLAT}>Flat Fee</option>
                                        <option value={FareMode.HOURLY}>Hourly</option>
                                    </select>
                                </Col>
                                <Col span={8}>
                                    <div><Typography.Text>Duration</Typography.Text></div>
                                    <Input defaultValue={item.duration} name="duration" type="number" required min={item.service.minHour} />
                                </Col>
                                <Col span={8}>
                                    <div><Typography.Text>Cost</Typography.Text></div>
                                    <Input defaultValue={item.cost} name="cost" type="number" required />
                                </Col>
                            </Row>
                            <Divider />
                        </div>)}
                        <Button type="primary" htmlType="submit" name="action" value={STEPS.COST}>Save & Continue</Button>
                    </Card>
                </fetcher.Form>
            </Col>
            <Col xs={24}></Col>
            <Col xs={24} sm={24} md={12}>
                <fetcher.Form method="post" action="">
                    <Card size="small" title="3. Confirm your identity">
                        <Row gutter={[40, 40]}>
                            <Col>
                                <select name="fileType">
                                    {fileTypes.map(x => <option key={x.name} value={x.name}>{x.name}</option>)}
                                </select>
                            </Col>
                            <Col>
                                <FileUploader id={data.profile.id} label="Choose file" />
                            </Col>
                            <Col>
                                {fetcher.state === 'submitting' && <Spin />}
                            </Col>
                        </Row>
                    </Card>
                </fetcher.Form>

                <Table dataSource={data.files}
                    columns={[
                        {
                            title: 'File Type',
                            dataIndex: 'fileType',
                            key: 'fileType',
                        },
                        {
                            title: 'File Name',
                            dataIndex: 'fileName',
                            key: 'fileName',
                        },
                    ]} />

                {/* <Table dataSource={data.files}
                    columns={[
                        {
                            title: 'FIle Type',
                            key: 'fileType',
                        },
                        {
                            title: 'FIle Type',
                            key: 'fileName',
                        },
                    ]}>
                    {data.files.map(col => <Table.ColumnGroup>
                        <Table.Column><div>{col.fileType}</div></Table.Column>
                        <Table.Column>{col.fileName}</Table.Column>
                        </Table.ColumnGroup>)}
                        </Table> */}
            </Col>
        </Row>
    </div>;

}