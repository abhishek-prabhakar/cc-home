import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { FareMode } from "@prisma/client";
import { ActionArgs, LoaderArgs } from "@remix-run/node";
import { Form, useFetcher, useLoaderData } from "@remix-run/react";
import { Button, Card, Checkbox, Col, Collapse, Divider, Input, Row, Select, Space, Spin, Switch, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import FileUploader from "~/components/FileUploader";
import { ServiceQuery } from "~/service/services.service";
import { db } from "~/utils/database";
import { FareModeLabel } from "~/utils/statusMarker.map";
import generateUuid from "~/utils/uuid.generator";

type VendorServiceGroup = {
    id: string;
    vendorService: {
        serviceId: string;
        duration: number;
        cost: number;
    }[];
    group: {
        id: string;
        name: string;
        serviceGroupItem: {
            addonGroup: {
                name: string;
            } | null;
            isOptional: boolean;
            service: {
                id: string;
                name: string;
                fareMode: FareMode;
                minHour: number;
            };
        }[];
    };
}
type LoaderData = {
    profile: {
        id: string;
        name: string;
        mobileNumber: string;
        email: string;
        vendorType?: {
            id: string;
        } | null;
        VendorServiceGroup: VendorServiceGroup[],
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
    categories: {
        id: string;
        name: string;
        serviceGroups: {
            id: string;
            name: string;
            service: {
                id: string;
                name: string;
                fareMode: FareMode;
            }[]
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
    DOCUMENTS = "DOCUMENTS",
    REMOVE_SERVICE = 'REMOVE_SERVICE'
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
            const groupId = formData.get('serviceGroupId');
            const groupCost = formData.get('cost');
            const categoryId = formData.get('categoryId')?.toString();
            if (!categoryId) { return; }

            await db.vendorService.deleteMany({
                where: {
                    vendorId,
                    vendor: {
                        categoryId: {
                            not: categoryId
                        }
                    }
                }
            });
            await db.vendorServiceGroup.deleteMany({
                where: {
                    vendorId,
                    vendor: {
                        categoryId: {
                            not: categoryId
                        }
                    }
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
            if (groupId && groupCost) {
                await db.vendorServiceGroup.create({
                    data: {
                        id: generateUuid(),
                        groupId: groupId?.toString(),
                        vendorId,
                        cost: parseInt(groupCost?.toString() || '0')
                    },
                });

                return true
            }
            break;
        case STEPS.COST:
            const serviceIds = formData.getAll('serviceId');
            const durations = formData.getAll('duration');
            const costs = formData.getAll('cost');
            const vendorGroupId = formData.get('vendorGroupId')?.toString();
            const fareModes = formData.getAll('fareMode');

            if (!vendorGroupId) {
                return;
            }

            await db.vendorService.deleteMany({
                where: {
                    vendorId,
                    vendorServiceGroupId: vendorGroupId
                }
            });

            serviceIds.forEach(async (data, index) => {
                await db.vendorService.create({
                    data: {
                        id: generateUuid(),
                        vendorId,
                        vendorServiceGroupId: vendorGroupId,
                        serviceId: data.toString(),
                        cost: parseInt(costs[index]?.toString()),
                        duration: parseInt(durations[index]?.toString()),
                        fareMode: fareModes[index]?.toString() as FareMode
                    }
                })
            });
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
        case STEPS.REMOVE_SERVICE:
            const remDelId = formData.get('vendorGroupId')?.toString();
            if (!remDelId) { return; }
            await db.vendorServiceGroup.delete({
                where: {
                    id: remDelId
                }
            });
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
            VendorServiceGroup: {
                select: {
                    id: true,
                    vendorService: {
                        select: {
                            serviceId: true,
                            duration: true,
                            cost: true
                        }
                    },
                    group: {
                        select: {
                            id: true,
                            name: true,
                            serviceGroupItem: {
                                orderBy: {
                                    isOptional: 'asc'
                                },
                                select: {
                                    addonGroup: {
                                        select: {
                                            name: true
                                        }
                                    },
                                    isOptional: true,
                                    service: {
                                        select: {
                                            id: true,
                                            name: true,
                                            fareMode: true,
                                            minHour: true,
                                        }
                                    }

                                }
                            }
                        }
                    },
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

    const vendorTypes = await ServiceQuery.getServicesByJob();

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
        return { profile: data, categories: vendorTypes.map(x => ({ id: x.id, name: x.name, serviceGroups: x.serviceGroup.map(y => ({ id: y.id, name: y.name, service: y.serviceGroupItem.map(z => z.service) })) })), files }
    }

    return null;
}

type ServiceListItem = { id: string; name: string; };


const OnBoardPage = {
    Index: () => {
        const data = useLoaderData<LoaderData>();
        const fetcher = useFetcher();
        const [activeType, setJobType] = useState<string>('');
        const [serviceList, setServiceList] = useState<ServiceListItem[]>([]);

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
            const list = data.categories.find(x => x.id === id);
            setServiceList(list?.serviceGroups || []);
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
                        {data.categories.map(item => <Select.Option key={item.id} value={item.id}>{item.name}</Select.Option>)}
                    </Select>
                </Col>
                <Col xs={24} sm={24} md={12}>
                    <OnBoardPage.SelectCategory serviceList={serviceList} activeType={activeType} />
                </Col>
                <Col xs={24}></Col>
                <Col xs={24} sm={24} md={12}>
                    <OnBoardPage.CostSection />
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
    },
    SelectCategory: ({ serviceList, activeType }: { activeType: string, serviceList: ServiceListItem[] }) => {
        const fetcher = useFetcher();

        return <Form method="post" action="">
            <Card size="small" title="1. Choose your services">
                <input type="hidden" name="categoryId" value={activeType} />
                <Space direction="vertical">
                    <Row gutter={[20, 20]}>
                        <Col>
                            <div><Typography.Text>Service</Typography.Text></div>
                            <select name="serviceGroupId">
                                {serviceList.map(service => <option key={service.id} value={service.id}>{service.name}</option>)}
                                {!serviceList.length && <option>Sorry, no services found under this category</option>}
                            </select>
                        </Col>
                        <Col>
                            <div><Typography.Text>Cost</Typography.Text></div>
                            <Input name="cost" />
                        </Col>
                    </Row>
                    <br />
                    <Button type="primary" htmlType="submit" name="action" value={STEPS.SERVICE}>Add</Button>
                </Space>
            </Card>
        </Form>
    },
    CostSection: () => {
        const data = useLoaderData<LoaderData>();

        return <Card size="small" title="2. Charges & Cost structure">
            <Collapse accordion>
                {data.profile.VendorServiceGroup.map((item, index) => <Collapse.Panel key={index} header={item.group.name}>
                    <OnBoardPage.UpdateGroupServiceCost item={item} />
                </Collapse.Panel>)}
            </Collapse>
        </Card>
    },
    UpdateGroupServiceCost: ({ item }: { item: VendorServiceGroup }) => {
        const fetcher = useFetcher();
        const [enabledIds, setIds] = useState<string[]>([]);

        useEffect(() => {
            const addonIds = item.group.serviceGroupItem.filter(x => x.isOptional).map(x => x.service.id)
            setIds(item.vendorService.filter(x => addonIds.includes(x.serviceId)).map(x => x.serviceId));
        }, [])

        useEffect(() => {
            if (fetcher.data) {
                alert('Thank you for updating your profile')
            }
        }, [fetcher.data])

        function setEnabledList(id: string, enabled: boolean) {
            const ids = enabledIds.filter(x => x != id);
            if (enabled) {
                ids.push(id)
            }

            setIds(ids);
        }


        return [<fetcher.Form method="post" action="">
            {item.group.serviceGroupItem.map(service => <Row key={service.service.id} gutter={[20, 20]}>
                <Col>
                    {service.isOptional ? <Checkbox
                        defaultChecked={!!item.vendorService.find(x => x.serviceId === service.service.id)} name="serviceId"
                        value={service.service.id}
                        onChange={v => setEnabledList(service.service.id, v.target.checked)}
                    /> : <input type="hidden" name="serviceId"
                        value={service.service.id} />}
                </Col>
                <Col span={8}>
                    <b>{service.service.name}</b>
                    <div>{service.isOptional ? 'Add-On' + (service.addonGroup?.name ? ' (' + service.addonGroup?.name + ')' : '') : '(inclusive)'}</div>
                </Col>
                <Col span={6}><input type="hidden" value={service.service.fareMode} name="fareMode" />
                    {enabledIds.includes(service.service.id) && [<div><Typography.Text>Charged By:</Typography.Text></div>,
                    FareModeLabel.get(service.service.fareMode)]}
                </Col>
                <Col md={4} sm={12} xs={12}>
                    {enabledIds.includes(service.service.id) ? [<div><Typography.Text>Duration</Typography.Text></div>,
                    <Input defaultValue={item.vendorService.find(x => x.serviceId === service.service.id)?.duration} name="duration" type="number" required min={service.service.minHour} />] : <input type="hidden" name="duration" value={1} />}
                </Col>
                <Col md={4} sm={12} xs={12}>
                    {enabledIds.includes(service.service.id) ? [<div><Typography.Text>Cost</Typography.Text></div>,
                    <Input defaultValue={item.vendorService.find(x => x.serviceId === service.service.id)?.cost} name="cost" type="number" required />] : <input type="hidden" name="cost" value={0} />}
                </Col>
                <Col span={24}><Divider style={{ padding: 0, margin: '0 0 10px' }} /></Col>
            </Row>)}
            <Row gutter={[20, 20]}>
                <Col>
                    <input type="hidden" name="vendorGroupId" value={item.id} />
                    <Button loading={fetcher.state === 'submitting'} type="primary" htmlType="submit" name="action" value={STEPS.COST}>Save & Continue</Button>
                </Col>
                <Col>
                    <Button danger htmlType="submit" name="action" value={STEPS.REMOVE_SERVICE}>Remove</Button>
                </Col>
            </Row>
        </fetcher.Form>];
    }
}


export default OnBoardPage.Index;