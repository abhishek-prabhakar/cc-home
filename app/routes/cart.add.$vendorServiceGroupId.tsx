import { Alert, Avatar, Button, Card, Checkbox, Container, Divider, Flex, Grid, NumberFormatter, SimpleGrid, Skeleton, Space, Stack, Text, Title, rem } from "@mantine/core";
import { Calendar, TimeInput } from "@mantine/dates";
import { LoaderArgs, defer } from "@remix-run/node";
import { Await, Form, useLoaderData } from "@remix-run/react";
import { IconInfoCircle } from "@tabler/icons-react";
import { IconCircleArrowLeft } from "@tabler/icons-react";
import dayjs from "dayjs";
import { Suspense, useState } from "react";
import COMMON_DATA from "~/data/common.data";
import { PATH } from "~/path.data";
import { VendorQuery } from "~/service/vendor.service";
import { db } from "~/utils/database";

export async function loader(args: LoaderArgs) {
    const id = args.params.vendorServiceGroupId || '';

    const service = VendorQuery.getVendorServiceGroup(id);
    const vendor = db.vendorServiceGroup.findFirstOrThrow({
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
    })
    return defer({
        service,
        vendor
    })
}


const Page = {
    Index: () => {
        const [selectedAddons, setAddons] = useState<string[]>([]);

        const data = useLoaderData<typeof loader>();

        function toggleAddon(id: string) {
            if (selectedAddons.includes(id)) {
                setAddons(selectedAddons.filter(x => x !== id))
            } else {
                setAddons([...selectedAddons, id]);
            }
        }

        return <Container>
            <Suspense fallback={<Skeleton />}>
                <Await resolve={Promise.all([data.service, data.vendor])}>
                    {([serviceGroup, vendor]) => <Form>
                        <Grid gutter={'md'}>
                            <Grid.Col span={'content'}>
                                <IconCircleArrowLeft size={24} />
                            </Grid.Col>
                            <Grid.Col span={'auto'}>
                                <Title order={5}>{serviceGroup.title}</Title>
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
                                        <Page.SelectDate />
                                        <Stack>
                                            <TimeInput
                                                size="md"
                                                label="Start Time:"
                                            />
                                            <Alert variant="outline" color="gray" icon={<IconInfoCircle />}>
                                                The estimated duration of this job is {serviceGroup.minHour} hours.{serviceGroup.costExtraHour ? 'An additional amount of ' + <NumberFormatter prefix={COMMON_DATA.currency} value={serviceGroup.costExtraHour} thousandSeparator /> + ' will be charged if applicable.' : ''}
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
                                        <Button variant="filled">Proceed to payment</Button>
                                    </Stack>
                                </Alert>
                                <Space h="md" />
                                <Stack>
                                    <Text>Forgot something?</Text>
                                    <Button variant="outline">Add another service</Button>
                                </Stack>
                            </Grid.Col>
                        </Grid>
                        <Space h="lg" />
                        {serviceGroup.addons.length ? <Stack>
                            <Title order={4}>Recommended Addons</Title>
                            <SimpleGrid cols={{ base: 1, sm: 2, md: 4, lg: 5 }}
                                spacing={{ base: 'sm', sm: 'xl' }}>
                                {serviceGroup.addons.map(item => <Card withBorder key={item.id} onClick={() => toggleAddon(item.id)} style={{ cursor: 'pointer' }}>
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
                    </Form>}
                </Await>
            </Suspense>
        </Container>
    },
    SelectDate: () => {
        const [selected, setSelected] = useState<Date[]>([]);
        const handleSelect = (date: Date) => {
            setSelected([date]);
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