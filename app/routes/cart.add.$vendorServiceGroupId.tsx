import { Accordion, ActionIcon, Alert, Avatar, Badge, Box, Button, Card, Checkbox, Container, Divider, Flex, Grid, Group, Image, Input, Loader, SimpleGrid, Skeleton, Space, Stack, Stepper, Text, Textarea, Title, rem } from "@mantine/core";
import { Calendar, TimeInput } from "@mantine/dates";
import { ActionArgs, LoaderArgs, defer } from "@remix-run/node";
import { Await, Form, useFetcher, useLoaderData, useLocation, useSubmit } from "@remix-run/react";
import { IconArrowNarrowLeft, IconArrowNarrowRight, IconNumber1, IconNumber2 } from "@tabler/icons-react";
import { IconInfoCircle } from "@tabler/icons-react";
import { IconNumber3 } from "@tabler/icons-react";
import { IconNumber4 } from "@tabler/icons-react";
import { IconCircleArrowLeft } from "@tabler/icons-react";
import dayjs from "dayjs";
import { ButtonBack, ButtonNext, CarouselProvider, Slide, Slider } from "pure-react-carousel";
import { Suspense, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import UserLogin from "~/components/UserLogin";
import COMMON_DATA from "~/data/common.data";
import { PATH } from "~/path.data";
import { CartService } from "~/service/cart.service";
import { VendorQuery } from "~/service/vendor.service";
import { getUser } from "~/store/user.store";
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
    venue?: string;
    services?: {
        vendorServiceGroupId: string,
        addonsIds: string[];
        date?: string;
        timeHour?: number;
        duration?: number;
        venue?: string;
    }[]
}

async function cartSummary(input: CartInput[]) {
    const cartSummary = await CartService.summary(input);
    return {
        cartSummary
    }
}

function getTimeSlots(): SlotData[] {
    const midnight = [{
        label: '12 AM',
        value: 0
    }, {
        label: '1 AM',
        value: 1
    }, {
        label: '2 AM',
        value: 2
    }, {
        label: '3 AM',
        value: 3
    }, {
        label: '4 AM',
        value: 4
    }, {
        label: '5 AM',
        value: 5
    }];

    const morning = [{
        label: '6 AM',
        value: 6
    }, {
        label: '7 AM',
        value: 7
    }, {
        label: '8 AM',
        value: 8
    }, {
        label: '9 AM',
        value: 9
    }, {
        label: '10 AM',
        value: 10
    }, {
        label: '11 AM',
        value: 11
    }];

    const noon = [
        {
            label: '12 PM',
            value: 12
        },
        {
            label: '1 PM',
            value: 13
        },
        {
            label: '2 PM',
            value: 14
        },
        {
            label: '3 PM',
            value: 15,
        },
        {
            label: '4 PM',
            value: 16
        },
        {
            label: '5 PM',
            value: 17
        }];

    const evening = [
        {
            label: '6 PM',
            value: 18
        },
        {
            label: '7 PM',
            value: 19
        },
        {
            label: '8 PM',
            value: 20
        },
        {
            label: '9 PM',
            value: 21
        },
        {
            label: '10 PM',
            value: 22
        },
        {
            label: '11 PM',
            value: 23
        }];



    return [
        {
            name: 'Night',
            slots: midnight
        },
        {
            name: 'Morning',
            slots: morning,
        },
        {
            name: 'Afternoon',
            slots: noon,
        },
        {
            name: 'Evening',
            slots: evening
        }
    ];
}

type SlotData = {
    name: string,
    slots: {
        label: string,
        value: number
    }[]
};

type TimeSlotData = {
    slots: SlotData[]
};

function arrayRange(start: number, stop: number, step = 1) {
    return Array.from({ length: (stop - start) / step + 1 }, (_, index) => start + index * step);
}

const BUFFER_TIME_IN_HRS = 2;

export async function action(args: ActionArgs) {
    const form = await args.request.formData();
    const actionType: ActionType = form.get('action')?.toString() as any;
    const vendorServiceGrpId = args.params.vendorServiceGroupId;

    switch (actionType) {
        case ActionType.ESTIMATION:
            const input: CartInput[] = JSON.parse(form.get('input')?.toString() || '') as any;
            return await cartSummary(input);
            break;
        case ActionType.TIME_SLOTS:
            const date = form.get('date')?.toString();
            const minHour = parseInt(form.get('minHour')?.toString() || '') + BUFFER_TIME_IN_HRS;
            if (!vendorServiceGrpId || !date) {
                return null;
            }
            let slots = getTimeSlots();
            const bookings = await CartService.getVendorServiceBookingsByDate(vendorServiceGrpId, date);

            const used = bookings.reduce<number[]>((acc, item) => {
                const startHr = item.vendorServiceGroup.group.commitFullDay ? 0 : item.timeHour - minHour;
                const endHr = item.vendorServiceGroup.group.commitFullDay ? 24 : item.endTime + BUFFER_TIME_IN_HRS;
                return acc.concat(arrayRange(startHr, endHr));
            }, []);

            slots = slots.map(x => ({ name: x.name, slots: x.slots.filter(i => !used.includes(i.value)) })).filter(x => x.slots.length);

            return {
                slots
            };
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
            success: formData?.services?.length ? true : false,
            child: <Page.Addons onChange={updateFormData} />
        }, {
            title: 'Select slot',
            icon: IconNumber2,
            success: formData?.date && formData.timeHour ? true : false,
            child: <Page.SelectDate onChange={updateFormData} />
        }, {
            title: 'Choose venue',
            icon: IconNumber3,
            success: formData?.venue ? true : false,
            child: <Page.ChooseVenue onChange={updateFormData} />
        }, {
            title: 'Confirm',
            icon: IconNumber4,
            success: false,
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
                        <ActionIcon variant={step.success ? 'filled' : 'light'} color={step.success ? 'green' : 'blue'} size="xl" radius="xl" aria-label="Settings">
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
                        <Image src={data.serviceGroup.image} h={120} w={120} fit="cover" radius={'md'} />
                        <Text>{data.serviceGroup.title}</Text>
                    </Stack>
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 'auto' }}>

                    {data.serviceGroup.addons.length ? <Stack gap="xs">
                        <Text fw={500}>Recommended Addons</Text>
                        <SimpleGrid cols={{ base: 2, md: 3, lg: 3, xl: 3 }}
                            spacing={{ base: 'sm', sm: 'xl' }}>
                            {data.serviceGroup.addons.map(item => <Card withBorder key={item.id} onClick={() => toggleAddon(item.id)} style={{ cursor: 'pointer' }}>
                                <Stack gap={'xs'}>
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
        const [selectedTime, setTime] = useState<number | null>();
        const data = useLoaderData<typeof loader>();
        const fetcher = useFetcher<TimeSlotData>();

        const handleDaySelect = (date: Date) => {
            setSelectedDate(date);
            setTime(null);
            onChange({
                date: undefined,
                timeHour: undefined
            });

            fetcher.submit({
                date: date.toISOString(),
                action: ActionType.TIME_SLOTS,
                minHour: data.serviceGroup.minHour
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
                            {response && fetcher.state === 'idle' && <CarouselProvider
                                naturalSlideWidth={300}
                                naturalSlideHeight={400}
                                totalSlides={response?.slots.length || 0}
                                visibleSlides={1}
                                isIntrinsicHeight={true}
                                step={1} dragStep={1} currentSlide={response?.slots.length - 1 ? 1 : 0}
                                className="carousel-slider-wrapper"
                            >
                                <Slider className="carousel-slider">
                                    {response?.slots.map((slot, i) => <Slide className="item-wrapper" key={'s' + i} index={i}>
                                        <Text ta={'center'}>{slot?.name}</Text>
                                        <Space h="sm" />
                                        <div style={{ margin: 'auto', maxWidth: '400px' }}>
                                            <Grid justify="center" >
                                                {slot?.slots.map(time => <Grid.Col span={{ base: 5, md: 4 }}>
                                                    <Card withBorder p="sm" key={'st' + time.value}>
                                                        <Checkbox checked={selectedTime === time.value} label={time.label} onChange={() => setTimeHour(time.value)} />
                                                    </Card>
                                                </Grid.Col>)}
                                            </Grid>
                                        </div>
                                    </Slide>)}
                                    {
                                        !response.slots.length && <Text c={'dimmed'}>Sorry, No free slots available on this day. Pls choose a different day.</Text>
                                    }
                                </Slider>
                                <ButtonBack className="btn _prev"><IconArrowNarrowLeft /></ButtonBack>
                                <ButtonNext className="btn _next"><IconArrowNarrowRight /></ButtonNext>
                            </CarouselProvider>}
                            <Space h="md" />
                            {['loading', 'submitting'].includes(fetcher.state) && <Text c="dimmed">Please wait...</Text>}
                            {response?.slots.length ? <Alert variant="light" color="green" icon={<IconInfoCircle />}>
                                <Text>The estimated duration of this job is {data.serviceGroup.minHour} hours.</Text>
                                {data.serviceGroup.costExtraHour ? <>
                                    An additional amount of <Currency value={data.serviceGroup.costExtraHour} /> per extra hour will be charged if applicable.</> : ''}
                            </Alert> : <Alert variant="light" color="yellow" icon={<IconInfoCircle />}>Please select a date first.</Alert>}

                        </>}
                    </Await>
                </Suspense>
            </Grid.Col>
        </Grid>
    },
    ChooseVenue: ({ onChange }: { onChange: (p: FormParams) => void }) => {
        const [address, setAddress] = useState({ address: '', pincode: '' });

        function updateForm(data: { [key in ('address' | 'pincode')]?: string }) {
            setAddress({ ...address, ...data });

            if (address.address && address.pincode) {
                onChange({
                    venue: address.address + ', ' + address.pincode
                });
            }
        }

        return <Stack maw={'400px'}>
            <Textarea
                label="Address"
                placeholder="Enter complete address"
                value={address.address}
                onChange={(e => updateForm({ address: e.target.value }))}
            />
            <Input.Wrapper label="Pincode">
                <Input minLength={6} maxLength={6} value={address.pincode}
                    onChange={(e => updateForm({ pincode: e.target.value }))} />
            </Input.Wrapper>
        </Stack>;

    },
    Summary: ({ data }: { data?: FormParams | null }) => {
        const submit = useSubmit();
        const fetcher = useFetcher<typeof cartSummary>();
        const [isStepsReady, setStepsReady] = useState(false);
        const user = useSelector(getUser);
        const location = useLocation();

        useEffect(() => {
            if (data?.services?.length && data?.date && typeof data.timeHour === 'number' && data?.venue) {
                setStepsReady(true);
                getEstimation();
            }
            else {
                setStepsReady(false);
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

        function expresCheckout() {
            const input = getInputParams();
            submit({ cart: JSON.stringify(input) }, {
                action: '/order/checkout',
                method: 'post',
            });
        }

        function getInputParams() {
            const params: CartInput[] = data?.services?.map(x => ({
                vendorServiceGroupId: x.vendorServiceGroupId,
                date: x.date || data.date || '',
                timeHour: x.timeHour || data.timeHour || 0,
                duration: 1,
                services: x.addonsIds.map(i => ({ id: i })),
                location: x.venue || data.venue || '',
                locationLat: 0,
                locationLon: 0
            })) || [];

            return params;
        }

        return isStepsReady ? <Suspense fallback={<Skeleton />}>
            <Await resolve={fetcher.data}>
                {response => ['loading', 'submitting'].includes(fetcher.state) ? <Loader color="gray" /> : <Grid gutter={'xl'}>
                    <Grid.Col span={{ base: 12, md: 4 }}>
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
                        <Card shadow="sm" withBorder title="Continue">
                            {user ? <Button variant="filled" onClick={expresCheckout}>Proceed to payment</Button> : <UserLogin redirectUrl={location.pathname} title="Login to continue" />}
                        </Card>
                        <Space h="md" />
                        <Stack>
                            <Text>Forgot something?</Text>
                            <Button variant="outline" onClick={addToCart}>Checkout Later</Button>
                        </Stack>
                    </Grid.Col>
                </Grid>
                }
            </Await>
        </Suspense> : <Group gap="sm"><Loader color="gray" type="dots" /><Text>Complete the above steps to estimate the cost.</Text></Group>
    }
}

export default Page.Index;