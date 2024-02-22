import { Alert, Avatar, Box, Button, Card, Checkbox, Container, Divider, Flex, Grid, Group, NumberFormatter, SimpleGrid, Skeleton, Space, Stack, Text, Title, rem } from "@mantine/core";
import { Calendar, TimeInput } from "@mantine/dates";
import { LoaderArgs, defer } from "@remix-run/node";
import { Await, Form, useLoaderData, useSubmit } from "@remix-run/react";
import { IconInfoCircle } from "@tabler/icons-react";
import { IconCircleArrowLeft } from "@tabler/icons-react";
import dayjs from "dayjs";
import { Suspense, useState } from "react";
import COMMON_DATA from "~/data/common.data";
import { PATH } from "~/path.data";
import { VendorQuery } from "~/service/vendor.service";
import { CartInput } from "~/types";
import { db } from "~/utils/database";

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
                    profileImageName: true
                }
            }
        }
    });

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
    }]


    return ({
        serviceGroup: service,
        vendor,
        vendorServiceGroupId: id,
        timeSlot
    })
}


const Page = {
    Index: () => {
        const [selectedAddons, setAddons] = useState<string[]>([]);
        const submit = useSubmit();
        const data = useLoaderData<typeof loader>();
        const [formData, setFormData] = useState<{ date: Date | null, timeHour: number | null }>({ date: null, timeHour: null });


        function toggleAddon(id: string) {
            if (selectedAddons.includes(id)) {
                setAddons(selectedAddons.filter(x => x !== id))
            } else {
                setAddons([...selectedAddons, id]);
            }
        }

        function setTimeHour(time: number) {
            setFormData({ ...formData, timeHour: time });
        }

        function setDate(date: Date) {
            setFormData({ ...formData, date });
        }


        function addToCart() {
            if (formData?.date && formData.timeHour) {
                const input: CartInput = {
                    vendorServiceGroupId: data.vendorServiceGroupId,
                    date: formData?.date.toDateString(),
                    timeHour: formData?.timeHour,
                    duration: data.serviceGroup.minHour,
                    services: selectedAddons.map(x => ({ id: x }))
                }

                submit({ cart: JSON.stringify(input) }, {
                    action: '/cart/add',
                    method: 'post',
                });
            }
        }

        return <Container size={'md'} >
            <Grid gutter={'md'}>
                <Grid.Col span={'content'}>
                    <IconCircleArrowLeft size={24} />
                </Grid.Col>
                <Grid.Col span={'auto'}>
                    <Title order={5}>{data.serviceGroup.title}</Title>
                    <Title order={3}>Customize Booking</Title>
                </Grid.Col>
                <Grid.Col span={{ sm: 12, md: 'content' }}>
                    <Flex align={'center'} gap={'md'}>
                        {/* <Title order={5}>{vendor.vendor.username}</Title>
                                    <Avatar size="xl" src={vendor.vendor.profileImageName ? PATH.RESOURCE_URL + vendor.vendor.profileImageName : PATH.AVATAR_PLACEHOLDER} /> */}
                    </Flex>
                </Grid.Col>
            </Grid>
            <Space h="xl" />
            <Grid gutter={'xl'}>
                <Grid.Col span={{ base: 12, md: 8 }}>
                    <Card withBorder>
                        <SimpleGrid cols={{ base: 1, md: 2, lg: 2 }}>
                            <Page.SelectDate onChange={setDate} />
                            <Stack>
                                <Title order={5}>Select a preferred time</Title>
                                <Group gap={'sm'}>
                                    {data.timeSlot.map(time => <Box><Card withBorder>
                                        <Checkbox checked={formData?.timeHour === time.value} label={time.label} onChange={() => setTimeHour(time.value)} disabled={!time.available} />
                                    </Card></Box>)}
                                </Group>

                                <Alert variant="outline" color="gray" icon={<IconInfoCircle />}>
                                    The estimated duration of this job is {data.serviceGroup.minHour} hours.{data.serviceGroup.costExtraHour ? 'An additional amount of ' + <NumberFormatter prefix={COMMON_DATA.currency} value={data.serviceGroup.costExtraHour} thousandSeparator /> + ' will be charged if applicable.' : ''}
                                </Alert>
                            </Stack>
                        </SimpleGrid>
                    </Card>
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 4 }}>
                    <Alert variant="light" color="blue">
                        <Stack>
                            <Title order={5}>Summary</Title>
                            <Divider />
                            <Button variant="filled" onClick={addToCart}>Proceed to payment</Button>
                        </Stack>
                    </Alert>
                    <Space h="md" />
                    <Stack>
                        <Text>Forgot something?</Text>
                        <Button variant="outline">Add to cart</Button>
                    </Stack>
                </Grid.Col>
            </Grid>
            <Space h="lg" />
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
                            <Text fw={500}><NumberFormatter prefix={COMMON_DATA.currency} value={item.cost} thousandSeparator /></Text>
                        </Stack>
                    </Card>)}
                </SimpleGrid>
            </Stack> : ''}
        </Container>
    },
    SelectDate: ({ onChange }: { onChange: (d: Date) => void }) => {
        const [selected, setSelected] = useState<Date[]>([]);
        const handleSelect = (date: Date) => {
            setSelected([date]);
            onChange(date);
        };

        return <Stack>
            <Title order={4}>When you are looking for?</Title>
            <Calendar
                getDayProps={(date) => ({
                    selected: selected.some((s) => dayjs(date).isSame(s, 'date')),
                    onClick: () => handleSelect(date),
                    disabled: dayjs(date).isBefore(new Date())
                })}
            />
        </Stack>
    }
}

export default Page.Index;