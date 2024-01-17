import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { FareMode } from "@prisma/client";
import { ActionArgs, LoaderArgs } from "@remix-run/node";
import { Form, Link, useFetcher, useLoaderData, useLocation, useSubmit } from "@remix-run/react";
import { Button, Card, Checkbox, Col, Collapse, Divider, Input, Modal, Row, Select, Space, Spin, Switch, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import FileUploader from "~/components/FileUploader";
import { ServiceQuery } from "~/service/services.service";
import { db } from "~/utils/database";
import { FareModeLabel } from "~/utils/statusMarker.map";
import generateUuid from "~/utils/uuid.generator";

type ServiceGroup = {
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
            description?: string | null;
        };
    }[];
};

type VendorServiceGroup = {
    id: string;
    cost: number;
    vendorService: {
        serviceId: string;
        duration: number;
        cost: number;
    }[];
    group: ServiceGroup;
}
type LoaderData = {
    profile: {
        id: string;
        name: string;
        mobileNumber: string;
        email: string;
        usernameSuggestion?: string | null,
        username: string,
        vendorType?: {
            id: string;
            name: string;
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
        serviceGroups: ServiceGroup[];
    }[],
    files: {
        id: string;
        fileType: string;
        fileName: string;
    }[]
}

enum STEPS {
    PROFILE = "PROFILE",
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
        case STEPS.PROFILE:
            {
                const categoryId = formData.get('categoryId')?.toString();
                const username = formData.get('username')?.toString();

                try {
                    await db.vendorService.deleteMany({
                        where: {
                            vendorId,
                            vendor: {
                                categoryId: {
                                    not: categoryId
                                }
                            },
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
                            username,
                            categoryId
                        }
                    });
                } catch (e) { };
            }
            return true;
            break;
        case STEPS.SERVICE:
            const groupId = formData.get('serviceGroupId');
            const groupCost = formData.get('groupCost');
            const categoryId = formData.get('categoryId')?.toString();
            if (!categoryId) { return false; }

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

            if (groupId && groupCost) {
                const serviceIds = formData.getAll('serviceId');
                const durations = formData.getAll('duration');
                const costs = formData.getAll('cost');
                const fareModes = formData.getAll('fareMode');

                const vendorGroupId = generateUuid();
                await db.vendorServiceGroup.create({
                    data: {
                        id: vendorGroupId,
                        groupId: groupId?.toString(),
                        vendorId,
                        cost: parseInt(groupCost?.toString() || '0')
                    },
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

                return true
            }
            break;
        case STEPS.COST:
            {
                const vendorGroupId = formData.get('vendorGroupId')?.toString();
                const serviceIds = formData.getAll('serviceId');
                const durations = formData.getAll('duration');
                const costs = formData.getAll('cost');
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
            }
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

    const data = await db.vendor.findFirstOrThrow({
        where: {
            id: applicationId
        },
        select: {
            id: true,
            name: true,
            email: true,
            mobileNumber: true,
            usernameSuggestion: true,
            username: true,
            vendorType: {
                select: {
                    name: true,
                    id: true
                }
            },
            VendorServiceGroup: {
                select: {
                    id: true,
                    cost: true,
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
                                            description: true
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
        const selectedServiceGroups = data.VendorServiceGroup.map(x => x.group.id);
        return { profile: data, categories: vendorTypes.map(x => ({ id: x.id, name: x.name, serviceGroups: x.serviceGroup.filter(y => !selectedServiceGroups.includes(y.id)).map(y => ({ id: y.id, name: y.name, serviceGroupItem: y.serviceGroupItem })) })), files }
    }

    return null;
}

type ServiceListItem = { id: string; name: string; };


const OnBoardPage = {
    Index: () => {
        const data = useLoaderData<LoaderData>();
        const fetcher = useFetcher();
        const [activeType, setJobType] = useState<string>('');
        const [showProfileDialog, setProfileDialog] = useState<boolean>(false);
        const [serviceList, setServiceList] = useState<ServiceGroup[]>([]);

        useEffect(() => {
            if (fetcher.data) {
                alert('Thank you for updating your profile')
            }
        }, [fetcher.data]);

        useEffect(() => {
            const list = data.categories.find(x => x.id === activeType);
            setServiceList(list?.serviceGroups || []);
        }, [data.categories])

        useEffect(() => {
            setActiveGroup(data.profile.vendorType?.id || '')
        }, [])

        function setActiveGroup(id: string) {
            setJobType(id);
            const list = data.categories.find(x => x.id === id);
            setServiceList(list?.serviceGroups || []);
        }

        function showEditProfileDialog() {
            setProfileDialog(true)
        }
        function hideEditProfileDialog() {
            setProfileDialog(false)
        }

        return <div className="container">
            <Row gutter={[40, 40]}>
                <Col span={24}>
                    <Typography.Title>Welcome</Typography.Title>
                    <Typography.Title level={4}>Hello {data?.profile.name}, Please fill up the following details.</Typography.Title>
                </Col>
                <Col span={24}>
                    <Divider />
                </Col>
                <Col xs={24} sm={24} md={12}>
                    <Card size="small" title="Update Profile">
                        {data?.profile?.vendorType && data.profile?.username ?
                            <Row>
                                <Col xs={24} sm={24} md={12}>
                                    <div><Typography.Text strong>Profile Type: </Typography.Text></div>
                                    <Space>
                                        <Typography.Text strong>{data.profile?.vendorType?.name}</Typography.Text>
                                        <Typography.Text strong onClick={showEditProfileDialog}><a>Update</a></Typography.Text></Space>
                                </Col>
                                <Col xs={24} sm={24} md={12}>
                                    <Typography.Text strong>Public name:</Typography.Text>
                                    <div><Typography.Text type="secondary">User will see this instead of your real name</Typography.Text></div>
                                    <Space><Typography.Text strong>{data.profile?.username}</Typography.Text><Typography.Text strong onClick={showEditProfileDialog}><a>Update</a></Typography.Text></Space>
                                </Col>
                            </Row> : <OnBoardPage.EditProfileForm onSuccess={hideEditProfileDialog} />}
                    </Card>
                </Col>
                <Col xs={24}></Col>
                <Col xs={24} sm={24} md={12}>
                    <OnBoardPage.SelectCategory serviceList={serviceList} activeType={activeType} />
                </Col>
                <Col xs={24} sm={24} md={12}>
                    <fetcher.Form method="post" action="">
                        <Card size="small" title="Confirm your identity">
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
            <Modal title='Modify Profile' open={showProfileDialog} footer={null} onCancel={() => setProfileDialog(false)} >
                <OnBoardPage.EditProfileForm onSuccess={hideEditProfileDialog} />
            </Modal>
        </div>;
    },
    SelectCategory: ({ serviceList, activeType }: { activeType: string, serviceList: ServiceGroup[] }) => {
        const [getServiceDialogData, setServiceDialogData] = useState<VendorServiceGroup | null | undefined>(null);

        function setService(data: string) {
            const group = serviceList.find(x => x.id === data);
            if (group) {
                setServiceDialogData({
                    id: 'NEW',
                    vendorService: [],
                    group,
                    cost: 0
                });
            } else {
                setServiceDialogData(null);
            }
        }

        return [
            <Card size="small" title="Choose your services">
                <Space direction="vertical" style={{ width: '100%' }}>
                    <div><Typography.Text strong>Add new service</Typography.Text></div>
                    <Select value={getServiceDialogData?.group?.id} style={{ width: '100%' }} size="large" placeholder="Choose..." onChange={(v) => setService(v)} >
                        {serviceList.map(service => <Select.Option key={service.id} value={service.id}>{service.name}</Select.Option>)}
                        {!serviceList.length && <Select.Option disabled>Sorry, no services found under this category</Select.Option>}
                    </Select>
                    <div><Typography.Text strong>Selected Services</Typography.Text></div>
                    <OnBoardPage.CostSection />
                </Space>
            </Card>,
            <Modal title={getServiceDialogData?.group.name + ' - Services & Cost'} open={!!getServiceDialogData?.id} footer={null} onCancel={() => setServiceDialogData(null)} >
                {getServiceDialogData && <OnBoardPage.UpdateGroupServiceCost activeType={activeType} addService={true} item={getServiceDialogData} onClose={() => setServiceDialogData(null)} />}
            </Modal>
        ]
    },
    CostSection: () => {
        const data = useLoaderData<LoaderData>();

        return data.profile.VendorServiceGroup?.length ? <Collapse accordion>
            {data.profile.VendorServiceGroup.map((item, index) => <Collapse.Panel key={index} header={item.group.name}>
                <OnBoardPage.UpdateGroupServiceCost item={item} />
            </Collapse.Panel>)}
        </Collapse> : 'Please add services from above list to get started.'
    },
    UpdateGroupServiceCost: ({ item, addService, activeType, onClose }: { item: VendorServiceGroup, addService?: boolean, activeType?: string, onClose?: Function }) => {
        const fetcher = useFetcher();
        const [enabledIds, setIds] = useState<string[]>([]);

        useEffect(() => {
            const addonIds = item.group.serviceGroupItem.filter(x => x.isOptional).map(x => x.service.id)
            setIds(item.vendorService.filter(x => addonIds.includes(x.serviceId)).map(x => x.serviceId));
        }, [])

        useEffect(() => {
            if (fetcher.data) {
                alert('Thank you for updating your profile');
                if (onClose) { onClose(); }
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
            <div>
                <div><Typography.Title level={5}>Base Charge</Typography.Title></div>
                <Input width={'100px'} addonBefore="₹" required name="groupCost" type="number" min="1" defaultValue={item.cost} />
                <input type="hidden" name="categoryId" value={activeType} />
                <input type="hidden" name="serviceGroupId" value={item.group.id} />
            </div>
            <br />
            {item.group.serviceGroupItem.map((service, i) => <Row key={service.service.id} gutter={[20, 20]}>
                {item.group.serviceGroupItem[i - 1]?.isOptional !== service.isOptional && <Col span={24}>
                    {service.isOptional ? [<Typography.Title level={5}>Optional Services</Typography.Title>, <div>(Check all relevant services)</div>] : <Typography.Title level={5}>Services included in this category</Typography.Title>}</Col>
                }
                <Col span={2}>
                    {service.isOptional ? <Checkbox
                        defaultChecked={!!item.vendorService.find(x => x.serviceId === service.service.id)} name="serviceId"
                        value={service.service.id}
                        onChange={v => setEnabledList(service.service.id, v.target.checked)}
                    /> : <input type="hidden" name="serviceId"
                        value={service.service.id} />}
                </Col>
                <Col span={22}>
                    <b>{service.addonGroup?.name ? service.addonGroup?.name + ' - ' : ''}{service.service.name}</b>
                    <div>
                        <Typography.Text type="secondary">{service.service.description}</Typography.Text>
                    </div>
                    <Row gutter={[10, 10]} align={'middle'}>
                        <Col span={8}><input type="hidden" value={service.service.fareMode} name="fareMode" />
                            {enabledIds.includes(service.service.id) && [<div><Typography.Text>Charged by:</Typography.Text> {FareModeLabel.get(service.service.fareMode)}</div>
                            ]}
                        </Col>
                        <Col md={8} sm={12} xs={12}>
                            {enabledIds.includes(service.service.id) && service.service.fareMode === FareMode.HOURLY ? [<div><Typography.Text>Duration</Typography.Text></div>,
                            <Input addonAfter="hours" defaultValue={item.vendorService.find(x => x.serviceId === service.service.id)?.duration || service.service.minHour} name="duration" required min={service.service.minHour} />] : <input type="hidden" name="duration" value={1} />}
                        </Col>
                        <Col md={8} sm={12} xs={12}>
                            {enabledIds.includes(service.service.id) ? [<div><Typography.Text>Cost</Typography.Text></div>,
                            <Input addonBefore="₹" defaultValue={item.vendorService.find(x => x.serviceId === service.service.id)?.cost} name="cost" required />] : <input type="hidden" name="cost" value={0} />}
                        </Col>
                    </Row>
                </Col>
                <Col span={24}><Divider style={{ padding: 0, margin: '0 0 10px' }} /></Col>
            </Row>)}
            <Row gutter={[20, 20]}>
                <Col>
                    <input type="hidden" name="vendorGroupId" value={item.id} />
                    <Button loading={fetcher.state === 'submitting'} type="primary" htmlType="submit" name="action" value={addService ? STEPS.SERVICE : STEPS.COST}>Save & Continue</Button>
                </Col>
                {!addService && <Col>
                    <Button danger htmlType="submit" name="action" value={STEPS.REMOVE_SERVICE}>Remove</Button>
                </Col>}
            </Row>
        </fetcher.Form>];
    },
    EditProfileForm: ({ onSuccess }: { onSuccess: Function }) => {
        const data = useLoaderData<typeof loader>();
        const submit = useSubmit();
        const [profileData, setData] = useState<{ jobType?: string, username?: string }>({ jobType: data?.profile.vendorType?.id, username: data?.profile.username });

        function updateData(newData: { [key in ('jobType' | 'username')]?: string }) {
            if (newData) {
                setData({ ...profileData, ...newData });
            }
        }

        function saveForm() {
            if (!profileData?.jobType || !profileData.username) {
                return
            }
            submit(
                {
                    action: STEPS.PROFILE,
                    username: profileData?.username || '',
                    categoryId: profileData?.jobType || ''
                }, {
                method: 'post',
            });

        }

        return <Row gutter={[20, 20]}>
            <Col>
                <Space direction="vertical" style={{ width: '100%' }}><Typography.Text strong>Category:</Typography.Text>
                    <Select defaultValue={data?.profile?.vendorType?.id} onChange={value => updateData({ jobType: value })} placeholder="Select a category">
                        {data?.categories.map(item => <Select.Option key={item.id} value={item.id}>{item.name}</Select.Option>)}
                    </Select>
                </Space>
            </Col>
            <Col>
                <Space direction="vertical" style={{ width: '100%' }}>
                    <Typography.Text strong>Public name:</Typography.Text>
                    <Select style={{ width: '100%' }} defaultValue={data?.profile?.username} onChange={value => updateData({ username: value })} placeholder="Select a username">
                        {data?.profile.usernameSuggestion?.split(',').map((item) => <Select.Option key={item} value={item}>{item}</Select.Option>)}
                    </Select>
                    <div><Typography.Text type="secondary">User will see this instead of your real name</Typography.Text></div>
                </Space>
            </Col>
            <Col span={24}>
                <Button type="primary" onClick={saveForm}>Save Changes</Button>
            </Col>
        </Row>
    }
}


export default OnBoardPage.Index;