import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { Accordion, Alert, Button, Card, Checkbox, Divider, Flex, Grid, Input, Loader, Modal, Select, Stack, Text, Title, Table, Container, Box } from "@mantine/core";
import { FareMode } from "@prisma/client";
import { ActionArgs, LoaderArgs } from "@remix-run/node";
import { Form, Link, useFetcher, useLoaderData, useLocation, useSubmit } from "@remix-run/react";
import { IconInfoCircle } from "@tabler/icons-react";
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
    minHour: number;
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
    costExtraHour: number;
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
            const grpExtraHourCost = formData.get('extraHourCost')?.toString();
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
                        cost: parseInt(groupCost?.toString() || '0'),
                        costExtraHour: parseInt(grpExtraHourCost || '0')
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
                const groupCost = formData.get('groupCost')?.toString();
                const grpExtraHourCost = formData.get('extraHourCost')?.toString();
                const fareModes = formData.getAll('fareMode');

                if (!vendorGroupId) {
                    return;
                }
                await db.vendorServiceGroup.update({
                    data: {
                        cost: parseInt(groupCost || '0'),
                        costExtraHour: parseInt(grpExtraHourCost || '0')
                    },
                    where: {
                        id: vendorGroupId
                    }
                });

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
            const fileName = formData.get('fileName')?.toString();
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
            isActive: false,
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
                orderBy: {
                    group: {
                        name: 'asc'
                    }
                },
                select: {
                    id: true,
                    cost: true,
                    costExtraHour: true,
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
                            minHour: true,
                            serviceGroupItem: {
                                orderBy: [{
                                    isOptional: 'asc'
                                }, {
                                    position: 'asc'
                                }, {
                                    addonGroup: { name: 'asc' }
                                }],
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
        const availableServiceGroups = vendorTypes.map(x => ({ id: x.id, name: x.name, serviceGroups: x.serviceGroup.filter(y => !selectedServiceGroups.includes(y.id)).map(y => ({ id: y.id, name: y.name, minHour: y.minHour, serviceGroupItem: y.serviceGroupItem })) }));

        return { profile: data, categories: availableServiceGroups, files }
    }

    return null;
}

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
            setActiveGroup(data.profile.vendorType?.id || '')
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

        return <Container size={'xl'} >
            <Grid gutter={40}>
                <Grid.Col span={12}>
                    <Title>Welcome</Title>
                    <Title order={5}>Hello {data?.profile.name}, Please fill up the following details.</Title>
                </Grid.Col >
                <Grid.Col span={12}>
                    <Divider />
                </Grid.Col >
                <Grid.Col span={{ base: 12, md: 6 }}>
                    <Card withBorder shadow="xs" title="Update Profile">
                        {data?.profile?.vendorType && data.profile?.username ?
                            <Grid gutter={20}>
                                <Grid.Col span={{ base: 12, md: 6 }}>
                                    <div><Text fw={500}>Profile Type: </Text></div>
                                    <Flex gap={'md'}>
                                        <Text fw={500}>{data.profile?.vendorType?.name}</Text>
                                        <Text fw={500} onClick={showEditProfileDialog}><Button variant="outline" size="xs" radius="xl">Update</Button></Text></Flex>
                                </Grid.Col >
                                <Grid.Col span={{ base: 12, md: 6 }}>
                                    <Text fw={500}>Public name:</Text>
                                    <div><Text c="dimmed">User will see this instead of your real name</Text></div>
                                    <Flex gap={'md'}><Text fw={500}>{data.profile?.username}</Text><Text fw={500} onClick={showEditProfileDialog}><Button variant="outline" size="xs" radius="xl">Update</Button></Text></Flex>
                                </Grid.Col >
                            </Grid> : <OnBoardPage.EditProfileForm onSuccess={hideEditProfileDialog} />}
                    </Card>
                </Grid.Col >
                <Grid.Col span={12}></Grid.Col >
                <Grid.Col span={{ base: 12, md: 6 }}>
                    {serviceList.length ? <OnBoardPage.SelectCategory serviceList={serviceList} activeType={activeType} /> : ''}
                </Grid.Col >
                <Grid.Col span={{ base: 12, md: 6 }}>
                    {data.profile.VendorServiceGroup?.length ? <OnBoardPage.Documents data={data} /> : ''}
                </Grid.Col >
            </Grid>
            <Modal title='Modify Profile' opened={showProfileDialog} onClose={() => hideEditProfileDialog()} >
                <OnBoardPage.EditProfileForm onSuccess={hideEditProfileDialog} />
            </Modal>
        </Container>;
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
                    cost: 0,
                    costExtraHour: 0
                });
            } else {
                setServiceDialogData(null);
            }
        }

        return <>
            <Card withBorder shadow="xs" title="Choose your services">
                <Stack>
                    <div><Text fw={500}>Add one or more services from below</Text></div>
                    <Select value={getServiceDialogData?.group?.id} style={{ width: '100%' }} size="large" placeholder="Choose..." onChange={(v) => setService(v || '')} data={serviceList.map(service => ({ value: service.id, label: service.name }))} />
                    {/* {!serviceList.length && <Select.Option disabled>Sorry, no services found under this category</Select.Option>} */}
                    <div><Text fw={500}>Selected Services</Text></div>
                    <OnBoardPage.CostSection />
                </Stack>
            </Card>
            <Modal title={getServiceDialogData?.group.name + ' - Services & Cost'} opened={!!getServiceDialogData?.id} onClose={() => setServiceDialogData(null)} >
                {getServiceDialogData && <OnBoardPage.UpdateGroupServiceCost activeType={activeType} addService={true} item={getServiceDialogData} onClose={() => setServiceDialogData(null)} />}
            </Modal>
        </>
    },
    CostSection: () => {
        const data = useLoaderData<LoaderData>();

        return data.profile.VendorServiceGroup?.length ? <Accordion>
            {data.profile.VendorServiceGroup.map((item, index) => <Accordion.Item value={item.id} key={item.id} >
                <Accordion.Control>{item.group.name}</Accordion.Control>
                <Accordion.Panel>
                    <OnBoardPage.UpdateGroupServiceCost item={item} />
                </Accordion.Panel>
            </Accordion.Item>)}
        </Accordion> : 'Please add services from above list to get started.'
    },
    Documents: ({ data }: { data: LoaderData }) => {
        const fetcher = useFetcher();
        const [fileType, setFileType] = useState<string | null>();

        function uploadDocs(file: string) {
            const form = new FormData();
            form.set('action', STEPS.DOCUMENTS);
            form.set('fileType', fileType || '');
            form.set('fileName', file);

            fetcher.submit(form, { method: "POST" });
            setFileType(null);
        }

        return <Card withBorder shadow="xs" title="Confirm your identity">
            <fetcher.Form method="post" action="">

                <Grid gutter={40}>
                    <Grid.Col span={{ base: 12, md: 5 }}>
                        <Select placeholder="Select document type" style={{ width: '100%' }} onChange={v => setFileType(v)} data={fileTypes.map(x => ({ label: x.name, value: x.name }))} />
                        <Text c="dimmed">Upload any valid document to prove your identity.</Text>
                    </Grid.Col >
                    <Grid.Col span={{ base: 12, md: 7 }}>
                        <FileUploader id={fileType || ''} label="Choose file" onUpload={v => uploadDocs(v)} />
                        {!fileType && <Text c="dimmed">Please select a document type</Text>}
                    </Grid.Col >
                    <Grid.Col >
                        {fetcher.state === 'submitting' && <Loader />}
                    </Grid.Col >
                </Grid>
            </fetcher.Form>

            <Table>
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th>Document Type</Table.Th>
                        <Table.Th>File Name</Table.Th>
                        <Table.Th></Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                    {data.files.map(element => <Table.Tr key={element.id}>
                        <Table.Td>{element.fileType}</Table.Td>
                        <Table.Td>{element.fileName}</Table.Td>
                        <Table.Td></Table.Td>
                    </Table.Tr>)}
                </Table.Tbody>
            </Table>
            <Divider />
            <Flex justify={'end'} pt={24}>
                <Link to="success"><Button variant="filled" radius="xl" disabled={!data.files.length}>Contiue</Button></Link>
            </Flex>
        </Card>
    },
    UpdateGroupServiceCost: ({ item, addService, activeType, onClose }: { item: VendorServiceGroup, addService?: boolean, activeType?: string, onClose?: Function }) => {
        const fetcher = useFetcher();
        const [enabledIds, setIds] = useState<string[]>([]);

        useEffect(() => {
            const includedIds = item.group.serviceGroupItem.filter(x => !x.isOptional).map(x => x.service.id)
            const addonIds = item.group.serviceGroupItem.filter(x => x.isOptional).map(x => x.service.id)
            setIds(item.vendorService.filter(x => addonIds.includes(x.serviceId)).map(x => x.serviceId).concat(includedIds));
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


        return <fetcher.Form method="post" action="">
            <Alert title="Kindly read all the inclusive services and set your base charge accordingly." variant="light" color="blue" icon={<IconInfoCircle />} /><br />
            <Grid gutter={20}>
                <Grid.Col span={{ base: 12, md: 6 }}>
                    <div><Title order={5}>Base Charge</Title></div>
                    <Input width={'100%'} leftSection="₹" required name="groupCost" type="number" min="1" defaultValue={item.cost} />
                    <input type="hidden" name="categoryId" value={activeType} />
                    <input type="hidden" name="serviceGroupId" value={item.group.id} />
                </Grid.Col >
                <Grid.Col span={{ base: 12, md: 6 }}>
                    <div><Title order={5}>Extra hour charges</Title></div>
                    <Input width={'100%'} leftSection="₹" name="extraHourCost" type="number" min="0" defaultValue={item.costExtraHour} />
                </Grid.Col >
            </Grid>
            <div style={{ padding: '10px 0 20px' }}>Approximate hour required for this job is {item.group.minHour} hours.</div>

            {item.group.serviceGroupItem.map((service, i) => <Grid key={service.service.id} gutter={20}>
                {item.group.serviceGroupItem[i - 1]?.isOptional !== service.isOptional && <Grid.Col span={12}>
                    {service.isOptional ? [<Title style={{ color: '#1890ff' }} order={5}>Additional Services</Title>, <div style={{ paddingBottom: '10px' }}>(Choose only applicable services)</div>, <Alert variant="light" color="blue" title="Do not add base charge to additional service." icon={<IconInfoCircle />} />] : <Title style={{ color: '#1890ff' }} order={5}>Services included in this category</Title>}</Grid.Col >
                }
                <Grid.Col span={2}>
                    {service.isOptional ? <Checkbox
                        defaultChecked={!!item.vendorService.find(x => x.serviceId === service.service.id)} name="serviceId"
                        value={service.service.id}
                        onChange={v => setEnabledList(service.service.id, v.target.checked)}
                    /> : [<input type="hidden" name="serviceId"
                        value={service.service.id} />, <input type="hidden" name="cost" value={0} />, <input type="hidden" name="duration" value={1} />, <input type="hidden" value={service.service.fareMode} name="fareMode" />]}
                </Grid.Col >
                <Grid.Col span={10}>
                    <Text fw={500}>{service.service.name} {service.addonGroup?.name ? '(' + service.addonGroup?.name + ')' : ''}</Text>
                    <div>
                        <Text c="dimmed">{service.service.description}</Text>
                    </div>
                    {enabledIds.includes(service.service.id) && service.isOptional && <Grid gutter={20} style={{ paddingTop: '10px' }}>
                        <Grid.Col span={{ base: 12, md: 5 }}>
                            <input type="hidden" value={service.service.fareMode} name="fareMode" />
                            <div><Text>Charged by:</Text> {FareModeLabel.get(service.service.fareMode)}</div>
                            {service.service.fareMode === FareMode.HOURLY ? [<div><Text>Duration</Text></div>,
                            <Input rightSection="hours" defaultValue={item.vendorService.find(x => x.serviceId === service.service.id)?.duration || item.group.minHour} name="duration" type="number" required min={item.group.minHour} />] : <input type="hidden" name="duration" value={1} />}
                        </Grid.Col >
                        <Grid.Col span={{ base: 12, md: 7 }}>
                            <div><Text>Cost</Text></div>
                            <Input leftSection="₹" defaultValue={item.vendorService.find(x => x.serviceId === service.service.id)?.cost || 0} name="cost" type="number" required min={0} />
                            <Text c="dimmed">Enter zero, if you don't charge additional for these services.</Text>
                        </Grid.Col >
                    </Grid>}
                </Grid.Col >
                <Grid.Col span={12}><Divider style={{ padding: 0, margin: '0 0 10px' }} /></Grid.Col >
            </Grid>)}
            <Flex gap={20}>
                <Box>
                    <input type="hidden" name="vendorGroupId" value={item.id} />
                    <Button loading={fetcher.state === 'submitting'} variant="filled" radius="xl" type="submit" name="action" value={addService ? STEPS.SERVICE : STEPS.COST}>Save & Continue</Button>
                </Box>
                {!addService && <Box>
                    <Button variant="filled" color="red" radius="xl" type="submit" name="action" value={STEPS.REMOVE_SERVICE}>Remove</Button>
                </Box>}
            </Flex>
        </fetcher.Form>;
    },
    EditProfileForm: ({ onSuccess }: { onSuccess: Function }) => {
        const data = useLoaderData<typeof loader>();
        const submit = useSubmit();
        const [profileData, setData] = useState<{ jobType?: string, username?: string }>({ jobType: data?.profile.vendorType?.id, username: data?.profile.username });
        const [showWarnMsg, setWarnMsg] = useState(false);

        function updateData(newData: { [key in ('jobType' | 'username')]?: string }) {
            const currentType = data?.profile?.vendorType?.id;
            if (newData) {
                setData({ ...profileData, ...newData });
            }

            if (currentType && newData.jobType && currentType !== newData.jobType) {
                setWarnMsg(true)
            } else {
                setWarnMsg(false)
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
            onSuccess();
        }

        return <Grid gutter={20}>
            <Grid.Col span={{ base: 12, md: 6 }}>
                <Stack style={{ width: '100%' }}>
                    <Text fw={500}>Profile Category:</Text>
                    <Select value={profileData.jobType} defaultValue={data?.profile?.vendorType?.id} onChange={value => updateData({ jobType: value || '' })} placeholder="Select a category" style={{ width: '100%' }} data={data?.categories.map(item => ({ value: item.id, label: item.name }))} />
                </Stack>
            </Grid.Col >
            <Grid.Col span={{ base: 12, md: 6 }}>
                <Stack>
                    <Text fw={500}>Public name:</Text>
                    <Select allowDeselect={false} defaultValue={data?.profile?.username} onChange={value => updateData({ username: value || '' })} placeholder="Select a username" data={data?.profile.usernameSuggestion?.split(',').map((item) => ({ value: item, label: item })) || [{ value: data?.profile?.username || '', label: data?.profile?.username || '' }]} />
                    <div><Text size="sm" c="dimmed">User will see this instead of your real name</Text></div>
                </Stack>
            </Grid.Col >
            <Grid.Col span={12}>
                {showWarnMsg && <Alert variant="light" color="red" mb={'md'} title="Are you sure?" icon={<IconInfoCircle />}>
                    Updating your profile type will reset your saved changes. If you are trying to signup for multiple categories, kindly signup after successfully submitting this one.
                    <Flex gap={'sm'} pt={10}>
                        <Button color="red" size="xs" variant="filled" radius="xl" onClick={v => updateData({ jobType: data?.profile?.vendorType?.id })}>
                            Decline
                        </Button>
                        <Button color="red" size="xs" variant="outline" radius="xl" onClick={() => setWarnMsg(false)}>
                            Proceed
                        </Button>
                    </Flex>
                </Alert>}
                {!showWarnMsg && <Button variant="filled" radius="xl" onClick={saveForm}>Save and Continue</Button>}
            </Grid.Col >
        </Grid>
    }
}


export default OnBoardPage.Index;