import { Accordion, ActionIcon, Alert, Avatar, Badge, Box, Button, Card, Checkbox, ComboboxData, Container, Divider, Flex, Grid, Group, Image, Input, Loader, Select, SimpleGrid, Skeleton, Space, Stack, Stepper, Text, Textarea, ThemeIcon, Title, rem } from "@mantine/core";
import { Calendar } from "@mantine/dates";
import { ActionArgs, LoaderArgs } from "@remix-run/node";
import { Await, Form, Link, useFetcher, useLoaderData, useLocation, useSubmit } from "@remix-run/react";
import {  IconCheck, IconNumber1, IconNumber2 } from "@tabler/icons-react";
import { IconInfoCircle } from "@tabler/icons-react";
import { IconNumber3 } from "@tabler/icons-react";
import { IconNumber4 } from "@tabler/icons-react";
import dayjs from "dayjs";
import { Suspense, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import UserLogin from "~/components/UserLogin";
import TIME_SLOTS from "~/data/time-slots.data";
import { PATH } from "~/path.data";
import Routes from "~/routes.data";
import { CartService } from "~/service/cart.service";
import { VendorQuery } from "~/service/vendor.service";
import { cartCheckoutCookie, userCartCookie } from "~/session.server";
import { getUser } from "~/store/user.store";
import { AddonGroupItem, CartInput } from "~/types";
import Currency from "~/utils/currency.transformer";
import { db } from "~/utils/database";
import { Carousel } from '@mantine/carousel';
import LocationPicker from "~/components/LocationPicker";

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
    let total = 0;
    cartSummary.forEach(x => {
        total += x.services.reduce((sum, x) => sum + x.cost, 0);
    })
    return {
        cartSummary,
        total
    }
}

type TimeSlotData = {
    slots: typeof TIME_SLOTS
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
            let slots = TIME_SLOTS;
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
    const cookieHeader = args.request.headers.get("Cookie");
    const searchParams = new URL(args.request.url).searchParams;
    const source = searchParams.get('source');

    const currentCart: CartInput[] = source === 'cart' ? await userCartCookie.parse(cookieHeader) : await cartCheckoutCookie.parse(cookieHeader);

    const savedData = currentCart?.find(x => x.vendorServiceGroupId === id);

    if (!id) {
        throw new Response('Invalid service',{
			status: 500,
		});
    }

    const service = await VendorQuery.getVendorServiceGroupBasicInfo(id);
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
        vendorServiceGroupId: id,
        savedData,
        source
    })
}

function SelectableList({data, onChange}:{data:AddonGroupItem[], onChange: (x:string[] )=> void}){
    const [selectedIds, setSelectedIds] = useState<{id: string, parentId: string }[]>([]);

    function toggleId(parentId:string, id:string | null){
        const filtered = selectedIds.filter(x => x.parentId !== parentId);
        if(id){
            filtered.push({parentId, id})
        }

        setSelectedIds(filtered);
        onChange(filtered.map(x => x.id));
    }

    return <Stack>
        {data.map(item => <Select placeholder="Select..." key={item.id} label={'Select '+item.title} required data={item.services.map(x =>({ value: x.id, label: x.title}))} allowDeselect={false} onChange={v=> toggleId(item.id, v)}/>)}
        </Stack>
}

const Page = {
    Index: () => {
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
            child: <Page.Summary data={formData} source={data.source} />
        }];

        function updateFormData(params: FormParams) {
            setFormData(d => ({ ...d, ...params }));
        }

        return <Container size={'md'} >
            <Grid gutter={'md'} justify="space-between">
                <Grid.Col span={'auto'}>
                    <Title order={5}>Book you session</Title>
                    <Text>Complete these steps to proceed</Text>
                </Grid.Col>
                <Grid.Col span={{ sm: 12, md: 'content' }}>
                    <Flex align={'center'} gap={'md'}>
                        <Link to={Routes.get('VendorProfile', { id: data.vendor.vendor.username })}>
                            <Title order={5}>{data.vendor.vendor.username}</Title>
                        </Link>
                        <Link to={Routes.get('VendorProfile', { id: data.vendor.vendor.username })}>
                            <Avatar size="xl" src={data.vendor.vendor.profileImageName ? PATH.THUMB_URL + data.vendor.vendor.profileImageName : PATH.AVATAR_PLACEHOLDER} />
                        </Link>
                    </Flex>
                </Grid.Col>
            </Grid>
            <Space h="xl" />

            {steps.map((step, i) =>
                <Grid  key={'step-' + i}>
                    <Grid.Col  span={{base:  'content'}}>
                        <Group>
                            <ActionIcon variant={step.success ? 'filled' : 'light'} color={step.success ? 'green' : 'blue'} size="xl" radius="xl" aria-label="Settings">
                                <step.icon />
                            </ActionIcon>
                        </Group>
                    </Grid.Col>
                    <Grid.Col span={{base: 8,md: 11}}>
                        <Title mt={'10px'} order={5}>{step.title}</Title>
                    </Grid.Col>
                    <Grid.Col visibleFrom="md" span={'content'}>
                        <Box h={'100%'} w={'40px'}>
                            {i < steps.length - 1 ? <Divider  orientation="vertical" h="100%" ml={'22px'} /> : ''}
                        </Box>
                    </Grid.Col>
                    <Grid.Col span={{base: 12, md: 'auto'}}>
                        {i===0 || steps[i-1].success? <Flex>
                            <Box flex={1}>
                                {step.child}
                            </Box>
                        </Flex>: <Text c={'gray'}>Previous step is incomplete</Text>}
                        <Space h={'xl'}/>
                    </Grid.Col>
                </Grid>)}
            <Space h="lg" />
        </Container>
    },
    Addons: ({ onChange }: { onChange: (p: FormParams) => void }) => {
        const data = useLoaderData<typeof loader>();
        const [selectedAddons, setAddons] = useState<string[]>([]);
        const [mandatoryAddons, setMandatoryAddons] = useState<string[]>([]);

        useEffect(() => {
            const preselectedAddons = data.savedData?.services.map(x => x.id) || [];
            setAddons(preselectedAddons);
            propogateData(preselectedAddons);
        }, []);

        function toggleAddon(id: string) {
            let newIds:string[];
            if (selectedAddons.includes(id)) {
                newIds = selectedAddons.filter(x => x !== id);
            } else {
                newIds = [...selectedAddons, id];
            }
            setAddons(x=> newIds);
            propogateData(mandatoryAddons.concat(newIds));
        }

        function updateMandatoryAddons(ids: string[]){
            setMandatoryAddons(x => ids);
            propogateData(selectedAddons.concat(ids));
        }

        /*
            emit the data only after the required addons are fulfilled
        */
        function propogateData(addonsIds:string[]){
            if(addonsIds.length < data.serviceGroup.selectableList.length){
                onChange({ services: [] });
                return;
            }
           onChange({
                services: [{
                    vendorServiceGroupId: data.vendorServiceGroupId,
                    addonsIds: addonsIds
                }]
            });
        }

        return <Card>
            <Grid>
                <Grid.Col span={{ base: 12, md: 'auto' }}>
                    <Stack align="center" justify="center">
                        <Card radius={'md'} p={2} pos={'relative'} withBorder>
                            <div style={{ position: 'absolute', right: '2px', top: '2px' }}>
                                <ThemeIcon color="green" size="sm"><IconCheck /></ThemeIcon>
                            </div>
                            <Image src={data.serviceGroup.image} h={120} w={120} fit="cover" radius={'md'} />
                        </Card>
                        <Text>{data.serviceGroup.title}</Text>
                    </Stack>
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 'auto' }}>
                    {data.serviceGroup.selectableList.length? <>
                    <SelectableList  onChange={(v) => updateMandatoryAddons(v)} data={data.serviceGroup.selectableList}/>
                    <Space h="md"/>
                    </>: ''}

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
        const [selectedTime, setSelectedTime] = useState<number>();
        const data = useLoaderData<typeof loader>();
        const fetcher = useFetcher<TimeSlotData>();

        useEffect(() => {
            const d = data.savedData?.date;
            const t = data.savedData?.timeHour;
            if (!d) {
                return;
            }
            if (new Date(d) >= new Date()) {
                handleDaySelect(new Date(d));
                setSelectedTime(data.savedData?.timeHour);
            }
        }, []);

        const handleDaySelect = (date: Date) => {
            setSelectedDate(date);
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
            setSelectedTime(time);
            onChange({
                date: selectedDate?.toISOString(),
                timeHour: time
            });
        }

        return <Grid gutter={'md'} justify="center" pt={'sm'}>
            <Grid.Col span={{ base:  'content' }}>
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
                            {response && fetcher.state === 'idle' && <Page.TimePicker slots={response.slots} selected={selectedTime} onChange={setTimeHour} />}
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
    TimePicker: ({ slots, onChange, selected }: { slots: typeof TIME_SLOTS, selected?: number, onChange: (d: number) => void }) => {
        const [selectedTime, setTime] = useState<number | null>();

        useEffect(() => {
            const validTime = slots.find(x => x.slots.find(y => y.value === selected));
            if (validTime) {
                setTimeHour(selected || 0);
            }
        }, [])

        function setTimeHour(v: number) {
            setTime(v);
            onChange(v);
        }

        return <Carousel slideGap="md" initialSlide={1} p={0}>
                {slots.map((slot, i) => <Carousel.Slide key={'s' + i} p={0}>
                    <Text ta={'center'}>{slot?.name}</Text>
                    <Space h="sm" />
                    <Grid justify="center" >
                        {slot?.slots.map(time => <Grid.Col key={'t-' + time.value} span={{ base: 5, md: 5 }}>
                            <Card withBorder p="sm" >
                                <Checkbox checked={selectedTime === time.value} label={time.label} onChange={() => setTimeHour(time.value)} />
                            </Card>
                        </Grid.Col>)}
                    </Grid>
                </Carousel.Slide>)}
                {
                    !slots.length && <Text c={'dimmed'}>Sorry, No free slots available on this day. Pls choose a different day.</Text>
                }
                </Carousel>
    },
    ChooseVenue: ({ onChange }: { onChange: (p: FormParams) => void }) => {
        const data = useLoaderData<typeof loader>();
        const [address, setAddress] = useState({ address: '', pincode: '' });

        useEffect(() => {
            if (data.savedData?.location) {
                const x = extractAddressAndZip(data.savedData?.location);
                updateForm({
                    address: x.address,
                    pincode: x.zip
                });
            }
        }, []);

        function updateForm(data: { [key in ('address' | 'pincode')]?: string }) {
            const d = { ...address, ...data };
            setAddress(d);

            if (d?.address && d?.pincode) {
                onChange({
                    venue: d.address + ', ' + d.pincode
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
    Summary: ({ data, source }: { data?: FormParams | null, source?: string | null }) => {
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

        function getEstimation() {
            const params = getInputParams();
            fetcher.submit({
                action: ActionType.ESTIMATION,
                input: JSON.stringify(params)
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
                                <Flex justify={'space-between'}>
                                    <Text size="sm" fw={500}>Total: </Text>
                                    <Text size="sm" fw={500}><Currency value={response?.total} /></Text>
                                </Flex>
                            </Stack>
                        </Card>
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 4 }}>
                        {source === 'cart' ? <Stack>
                            <Text fw={500}>Proceed to checkout</Text>
                            <Button variant="outline" onClick={addToCart}>Update & Continue</Button>
                        </Stack> :
                            <><Card shadow="sm" withBorder title="Continue">
                                {user ? <Button variant="filled" onClick={expresCheckout}>Proceed to payment</Button> : <UserLogin redirectUrl={location.pathname} title="Login to continue" />}
                            </Card>
                                <Space h="md" />
                                <Stack>
                                    <Text>Forgot something?</Text>
                                    <Button variant="outline" onClick={addToCart}>Checkout Later</Button>
                                </Stack>
                            </>}
                    </Grid.Col>
                </Grid>
                }
            </Await>
        </Suspense> : <Group gap="sm"><Loader color="gray" type="dots" /><Text>Complete the above steps to estimate the cost.</Text></Group>
    }
}


function extractAddressAndZip(inputString: string) {
    const pieces = inputString.split(/[,\s]+/);
    // Get the last element (characters after the last comma)
    const lastPart = pieces[pieces.length - 1];
    // Join the remaining elements (characters before the last comma)
    const firstPart = pieces.slice(0, pieces.length - 1).join(", ");

    return {
        address: firstPart,
        zip: lastPart
    }
}

export default Page.Index;