import { Accordion, ActionIcon, Alert, Avatar, Badge, Box, Button, Card, Checkbox, Container, Divider, Flex, Grid, Group, Image, Input, SimpleGrid, Skeleton, Space, Stack, Stepper, Text, Title, rem } from "@mantine/core";
import { Calendar, TimeInput } from "@mantine/dates";
import { ActionArgs, LoaderArgs, defer } from "@remix-run/node";
import { Await, Form, useFetcher, useLoaderData, useSubmit } from "@remix-run/react";
import { IconNumber1, IconNumber2 } from "@tabler/icons-react";
import { IconInfoCircle } from "@tabler/icons-react";
import { IconNumber3 } from "@tabler/icons-react";
import { IconNumber4 } from "@tabler/icons-react";
import { IconCircleArrowLeft } from "@tabler/icons-react";
import dayjs from "dayjs";
import { Suspense, useEffect, useRef, useState } from "react";
import COMMON_DATA from "~/data/common.data";
import { PATH } from "~/path.data";
import { CartService } from "~/service/cart.service";
import { VendorQuery } from "~/service/vendor.service";
import { CartInput, CartItem } from "~/types";
import Currency from "~/utils/currency.transformer";
import { db } from "~/utils/database";

enum ActionType {
    ESTIMATION = 'ESTIMATION',
    ADD_TO_CART = 'ADD_TO_CART',
    TIME_SLOTS = 'TIME_SLOTS'
}

type FormParams = {
    date?: string;
    timeHour?: number;
    services?: {
        vendorServiceGroupId: string,
        addonsIds: string[];
        date?: string;
        timeHour?: number;
        duration?: number
    }[]
}

async function cartSummary(input: CartInput[]) {
    const cartSummary = await CartService.summary(input);
    const estimation = await CartService.calculate(cartSummary);
    return {
        cartSummary,
        estimation
    }
}

async function getTimeSlots() {

    const timeSlot = [{
        label: '9 AM',
        value: 9,
        available: true
    }, {
        label: '10 AM',
        value: 10,
        available: true
    }, {
        label: '11 AM',
        value: 11,
        available: true
    },
    {
        label: '12 PM',
        value: 12,
        available: false
    }];

    return timeSlot;
}

export async function action(args: ActionArgs) {
    const form = await args.request.formData();
    const actionType: ActionType = form.get('action')?.toString() as any;
    switch (actionType) {
        case ActionType.ESTIMATION:
            const input: CartInput[] = JSON.parse(form.get('input')?.toString() || '') as any;
            return await cartSummary(input);
            break;
        case ActionType.TIME_SLOTS:
            return await getTimeSlots();
            break;
    }

    return null;
}

export async function loader(args: LoaderArgs) {
    const id = args.params.vendorServiceGroupId || '';

    const service = await VendorQuery.getVendorServiceGroup(id);
    const vendor = await db.vendorServiceGroup.findFirstOrThrow({
        where: {
            id
        },
        select: {
            vendor: {
                select: {
                    username: true,
                    profileImageName: true,
                    vendorType: {
                        select: {
                            name: true
                        }
                    }
                }
            }
        }
    });


    return ({
        serviceGroup: service,
        vendor,
        vendorServiceGroupId: id
    })
}

const Page = {
    Index: () => {
        const [activeStep, setActiveStep] = useState(1);
        const data = useLoaderData<typeof loader>();
        const [formData, setFormData] = useState<FormParams>();

        const steps = [{
            title: 'Select service',
            icon: IconNumber1,
            child: <Page.Addons onChange={updateFormData} />
        }, {
            title: 'Select slot',
            icon: IconNumber2,
            child: <Page.SelectDate onChange={updateFormData} />
        }, {
            title: 'Choose venue',
            icon: IconNumber3,
            child: <Page.ChooseVenue />
        }, {
            title: 'Confirm',
            icon: IconNumber4,
            child: <Page.Summary data={formData} />
        }];

        function updateFormData(params: FormParams) {
            setFormData({ ...formData, ...params })
        }

        return <Container size={'md'} >
            <Grid gutter={'md'} justify="space-between">
                <Grid.Col span={'auto'}>
                    <Title order={5}>Book you session</Title>
                    <Text>Complete these steps to proceed</Text>
                </Grid.Col>
                <Grid.Col span={{ sm: 12, md: 'content' }}>
                    <Flex align={'center'} gap={'md'}>
                        <Title order={5}>{data.vendor.vendor.username}</Title>
                        <Avatar size="xl" src={data.vendor.vendor.profileImageName ? PATH.RESOURCE_URL + data.vendor.vendor.profileImageName : PATH.AVATAR_PLACEHOLDER} />
                    </Flex>
                </Grid.Col>
            </Grid>
            <Space h="xl" />

            {steps.map((step, i) =>
                <Box key={'step-' + i}>
                    <Group>
                        <ActionIcon variant="light" size="xl" radius="xl" aria-label="Settings">
                            {/* <IconAdjustments style={{ width: '70%', height: '70%' }} stroke={1.5} /> */}
                            <step.icon />
                        </ActionIcon>
                        <Title order={5}>{step.title}</Title>
                    </Group>
                    <Grid>
                        <Grid.Col span={'content'} p={'0 30px 0 30px'}>
                            {i < steps.length - 1 ? <Divider orientation="vertical" h="100%" /> : ''}
                        </Grid.Col>
                        <Grid.Col span="auto" pt="sm" pb="md">
                            {step.child}
                        </Grid.Col>
                    </Grid>
                </Box>)}
            <Space h="lg" />
        </Container>
    },
    Addons: ({ onChange }: { onChange: (p: FormParams) => void }) => {
        const data = useLoaderData<typeof loader>();
        const [selectedAddons, setAddons] = useState<string[]>([]);

        useEffect(() => {
            onChange({
                services: [{
                    vendorServiceGroupId: data.vendorServiceGroupId,
                    addonsIds: []
                }]
            });
        }, []);

        function toggleAddon(id: string) {
            let newIds;
            if (selectedAddons.includes(id)) {
                newIds = selectedAddons.filter(x => x !== id);
            } else {
                newIds = [...selectedAddons, id];
            }
            setAddons(newIds);

            onChange({
                services: [{
                    vendorServiceGroupId: data.vendorServiceGroupId,
                    addonsIds: newIds
                }]
            });
        }

        return <Card>
            <Grid>
                <Grid.Col span={{ base: 12, md: 'auto' }}>
                    <Stack align="center" justify="center">
                        <Image src={data.serviceGroup.image} h={150} w={150} fit="cover" radius={'md'} />
                        <Text fw={700}>{data.serviceGroup.title}</Text>
                    </Stack>
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 'auto' }}>

                    {data.serviceGroup.addons.length ? <Stack>
                        <Title order={4}>Recommended Addons</Title>
                        <SimpleGrid cols={{ base: 1, sm: 2, md: 4, lg: 5 }}
                            spacing={{ base: 'sm', sm: 'xl' }}>
                            {data.serviceGroup.addons.map(item => <Card withBorder key={item.id} onClick={() => toggleAddon(item.id)} style={{ cursor: 'pointer' }}>
                                <Stack gap={'sm'}>
                                    <Checkbox
                                        checked={selectedAddons.includes(item.id)}
                                        color="green"
                                        style={{ userSelect: 'none' }}
                                    />
                                    <Text>{item.title}</Text>
                                    <Text fw={500}><Currency value={item.cost} /></Text>
                                </Stack>
                            </Card>)}
                        </SimpleGrid>
                    </Stack> : ''}
                </Grid.Col>
            </Grid>
        </Card>
    },
    SelectDate: ({ onChange }: { onChange: (p: FormParams) => void }) => {
        const [selectedDate, setSelectedDate] = useState<Date>();
        const [selectedTime, setTime] = useState<number>();
        const data = useLoaderData<typeof loader>();
        const fetcher = useFetcher<typeof getTimeSlots>();

        const handleDaySelect = (date: Date) => {
            setSelectedDate(date);
            onChange({
                date: undefined,
                timeHour: undefined
            });

            fetcher.submit({
                date: date.toISOString(),
                action: ActionType.TIME_SLOTS
            }, {
                method: 'post',
            });
        };

        function setTimeHour(time: number) {
            setTime(time);
            onChange({
                date: selectedDate?.toISOString(),
                timeHour: time
            });
        }

        return <Grid gutter={'md'}>
            <Grid.Col span={{ base: 12, md: 'content' }}>
                <Text fw={500}>When you are looking for?</Text>
                <Space h="sm" />
                <Calendar
                    getDayProps={(date) => ({
                        selected: dayjs(date).isSame(selectedDate, 'date'),
                        onClick: () => handleDaySelect(date),
                        disabled: dayjs(date).isBefore(new Date())
                    })}
                />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 'auto' }}>
                <Text fw={500}>Select a preferred time</Text>
                <Space h="sm" />
                <Suspense fallback={<Skeleton />}>
                    <Await resolve={fetcher.data}>
                        {response => <>
                            <Group gap={'sm'}>
                                {response?.map(time => <Box><Card withBorder>
                                    <Checkbox checked={selectedTime === time.value} label={time.label} onChange={() => setTimeHour(time.value)} disabled={!time.available} />
                                </Card></Box>)}
                                <Space h="md" />
                                {response?.length ? <Alert variant="light" color="green" icon={<IconInfoCircle />}>
                                    <Text>The estimated duration of this job is {data.serviceGroup.minHour} hours.</Text>
                                    {data.serviceGroup.costExtraHour ? <>
                                        An additional amount of <Currency value={data.serviceGroup.costExtraHour} /> per extra hour will be charged if applicable.</> : ''}
                                </Alert> : <Alert variant="light" color="yellow" icon={<IconInfoCircle />}>Please select a date first.</Alert>}
                            </Group>


                        </>}
                    </Await>
                </Suspense>
            </Grid.Col>
        </Grid>
    },
    ChooseVenue: () => {
        const mapRef = useRef(null)
        const [mapReady, setMapReady] = useState(false)


        return '...';

    },
    Summary: ({ data }: { data?: FormParams | null }) => {
        const submit = useSubmit();
        const fetcher = useFetcher<typeof cartSummary>();
        const [getCoupon, setCoupon] = useState('');

        useEffect(() => {
            if (data?.services?.length && data?.date && data.timeHour) {
                getEstimation();
            }
            else {
                fetcher.submit({
                    action: ''
                }, {
                    method: 'post'
                });
            }
        }, [data]);

        function getEstimation(coupon?: string | null) {
            const params = getInputParams();
            fetcher.submit({
                action: ActionType.ESTIMATION,
                input: JSON.stringify(params),
                coupon: coupon || ''
            }, {
                method: 'post'
            });
        }

        function addToCart() {
            const input = getInputParams();
            submit({ cart: JSON.stringify(input) }, {
                action: '/cart/add',
                method: 'post',
            });
        }

        function applyCoupon() {
            getEstimation(getCoupon);
        }

        function getInputParams() {
            const params: CartInput[] = data?.services?.map(x => ({
                vendorServiceGroupId: x.vendorServiceGroupId,
                date: x.date || data.date || '',
                timeHour: x.timeHour || data.timeHour || 0,
                duration: 1,
                services: x.addonsIds.map(i => ({ id: i }))
            })) || [];

            return params;
        }

        const CouponSection = <Group gap={'md'} align="end">
            <Input.Wrapper flex={1} label="Coupon">
                <Input value={getCoupon} onChange={v => setCoupon(v.target.value)} />
            </Input.Wrapper>
            <Button variant="outline" size="xs" onClick={applyCoupon}>Apply</Button>
        </Group>;

        return <Suspense fallback={<Skeleton />}>
            <Await resolve={fetcher.data}>
                {response => response ? <Grid gutter={'xl'}>
                    <Grid.Col span={{ base: 12, md: 4 }}>
                        <Text fw={700}>Order</Text>
                        <Space h="sm" />
                        <Card shadow="sm" withBorder>
                            <Stack>
                                {
                                    response?.cartSummary.map(group => <div key={group.vendorServiceGroupId}>
                                        <b>{group.name}</b>
                                        {group.services.map(service => <Flex key={service.id} justify={'space-between'}>
                                            <Text size="sm" fw={500}>{service.name}</Text>
                                            <Text size="sm"><Currency value={service.cost} /></Text>
                                        </Flex>
                                        )}
                                    </div>)}
                            </Stack>
                        </Card>
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 4 }}>
                        <Text fw={700}>Payment Summary</Text>
                        <Space h="sm" />
                        <Card shadow="sm" withBorder>
                            <Stack>
                                {CouponSection}
                                <Divider />
                                <Flex justify={'space-between'}>
                                    <Text size="sm" fw={500}>Subtotal</Text>
                                    <Text size="sm" fw={500}><Currency value={response?.estimation?.total} /></Text>
                                </Flex>
                                <Flex justify={'space-between'}>
                                    <Text c="dimmed">GST ({response?.estimation?.gst}%)</Text>
                                    <Text><Currency value={response?.estimation?.tax} /></Text>
                                </Flex>
                                <Flex justify={'space-between'}>
                                    <Text size="sm" fw={500}>Discount</Text>
                                    <Text size="sm" fw={500}><Currency value={response?.estimation?.discount} /></Text>
                                </Flex>
                                <Flex justify={'space-between'}>
                                    <Text size="sm" fw={500}>Total</Text>
                                    <Text size="sm" fw={500}><Currency value={response?.estimation?.final} /></Text>
                                </Flex>
                                <Divider />
                                <Button variant="filled" onClick={addToCart}>Proceed to payment</Button>
                            </Stack>
                        </Card>
                        <Space h="md" />
                        <Stack>
                            <Text>Forgot something?</Text>
                            <Button variant="outline" onClick={addToCart}>Checkout Later</Button>
                        </Stack>
                    </Grid.Col>
                </Grid> : <Text>Complete the above steps to estimate the cost.</Text>
                }
            </Await>
        </Suspense>
    }
}

export default Page.Index;