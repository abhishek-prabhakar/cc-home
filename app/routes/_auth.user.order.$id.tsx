import { EditOutlined, PhoneOutlined, SmileOutlined } from "@ant-design/icons";
import { Avatar, Badge, Button, Card, Divider, Grid, Group, List, Menu, Modal, Skeleton, Space, Text, ThemeIcon, Timeline, Title, Tooltip } from "@mantine/core";
import { BookingStatus } from "@prisma/client";
import { ActionArgs, LoaderArgs, TypedDeferredData, defer } from "@remix-run/node";
import { Await, Form, Link, useLoaderData } from "@remix-run/react";
import { IconAlertCircleFilled, IconCheck } from "@tabler/icons-react";
import { Suspense, useState } from "react";
import { PATH } from "~/path.data";
import { USER_SESSION_KEY, getSession } from "~/session.server";
import { db } from "~/utils/database";
import { DateFormatter } from "~/utils/date.transform";
import { StatusMarker } from "~/utils/statusMarker.map";


type BookingService = {
    id: string,
    name: string,
    date: Date,
    timeHour: number,
    duration: number,
    status: BookingStatus,
    vendor: {
        username: string,
        vendorType: {
            name: string;
        } | null;
        profileImageName: string | null;
    }
}
type UserBooking = {
    id: string,
    orderId: string,
    discount: number,
    coupon: string | null,
    total: number,
    tax: number,
    status: BookingStatus,
    date: Date,
    services: BookingService[],
}


type LoaderData = {
    data: UserBooking
}

export async function action(args: ActionArgs) {
    const formData = args.request.formData();
    const _action = (await formData).get('action')?.toString();
    const id = (await formData).get('id')?.toString();

    if (!id) {
        return false;
    }

    console.log(_action, id)

    switch (_action) {
        case 'cancel':
            await db.booking.update({
                where: {
                    id
                },
                data: {
                    status: BookingStatus.CANCELLED
                }
            });

            await db.bookingService.updateMany({
                where: {
                    bookingId: id
                },
                data: {
                    status: BookingStatus.CANCELLED
                }
            });
            break;
    }

    return true;
}

export async function loader({ request, params }: LoaderArgs): Promise<TypedDeferredData<any>> {
    const orderId = params.id;
    const session = await getSession(request.headers.get("Cookie"));
    const userId = session.get(USER_SESSION_KEY);

    const data = new Promise<UserBooking | null>(function (resolve) {
        db.booking.findFirst({
            where: {
                userId,
                orderId
            },
            select: {
                id: true,
                orderId: true,
                created_at: true,
                discount: true,
                coupon: true,
                total: true,
                tax: true,
                status: true,
                bookingService: {
                    select: {
                        id: true,
                        cost: true,
                        duration: true,
                        date: true,
                        timeHour: true,
                        status: true,
                        vendorServiceGroup: {
                            select: {
                                group: {
                                    select: {
                                        name: true
                                    }
                                },
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
                        },
                    }
                }
            }
        }).then(r => {
            if (!r) {
                resolve(null);
            }
            else {
                resolve({
                    id: r?.id,
                    orderId: r.orderId,
                    status: r.status,
                    date: r.created_at,
                    coupon: r.coupon,
                    tax: r.tax,
                    discount: r.discount,
                    total: r.total,
                    services: r.bookingService.map(x => ({
                        id: x.id,
                        date: x.date,
                        status: x.status,
                        timeHour: x.timeHour,
                        duration: x.duration,
                        name: x.vendorServiceGroup.group.name,
                        vendor: x.vendorServiceGroup.vendor
                    }))
                })
            }
        })
    });

    return defer({
        data
    });
}


const orderStatusCheckList: {
    color?: string,
    children: string,
    dot?: JSX.Element,
    filter: BookingStatus[]
}[] = [
        {
            color: 'red',
            children: 'Order Cancelled',
            filter: [BookingStatus.CANCELLED]
        },
        {
            color: 'red',
            children: 'Sorry, Your order couldn\'t confirm due to unservicable.',
            filter: [BookingStatus.REJECTED]
        },
        {
            color: 'gold',
            dot: <IconAlertCircleFilled />,
            children: 'Vendors has been notified.',
            filter: [BookingStatus.PENDING]
        },
        {
            color: 'green',
            children: 'Order Confirmed',
            filter: [BookingStatus.ACCEPTED, BookingStatus.IN_PROGRESS, BookingStatus.COMPLETED]
        },
        {
            color: 'yellow',
            children: 'Service is in progress',
            filter: [BookingStatus.IN_PROGRESS]
        },
        {
            color: '#00CCFF',
            dot: <SmileOutlined />,
            children: 'Finished',
            filter: [BookingStatus.COMPLETED]
        },
        {
            color: 'gray',
            children: 'Refund processed',
            filter: [BookingStatus.REJECTED, BookingStatus.CANCELLED]
        },
    ]

const UserOrderHome = {
    Index: () => {
        return <Grid>
            <Grid.Col span={{ base: 12, md: 8 }}>
                <Title order={3}>Manage Booking</Title>
                <Space h="md" />
                <UserOrderHome.Order />
            </Grid.Col>
        </Grid>
    },
    Order: () => {
        const data = useLoaderData<LoaderData>();
        const [showModal, setModal] = useState(false);

        return <Suspense fallback={<Skeleton />}>
            <Await resolve={data.data}>
                {orderData => <Card withBorder>
                    <Grid align={'middle'} gutter={20}>
                        <Grid.Col span="auto">
                            <Group>
                                <div>
                                    <Title order={5}>Order ID: {orderData.orderId}</Title>
                                </div>
                                <Badge color={StatusMarker.get(orderData.status)}>{orderData.status}</Badge>
                            </Group>
                        </Grid.Col>
                        <Grid.Col span="content">
                            {orderData.status !== BookingStatus.CANCELLED && orderData.status !== BookingStatus.REJECTED && <Menu trigger="hover" position="bottom-end">
                                <Menu.Target>
                                    <Button variant="outline" radius={'xl'} leftSection={<EditOutlined />} size={'middle'}>
                                        Manage
                                    </Button>
                                </Menu.Target>
                                <Menu.Dropdown>
                                    <Menu.Item>Reschedule</Menu.Item>
                                    <Menu.Item color="red" onClick={() => setModal(true)}>Cancel</Menu.Item>
                                </Menu.Dropdown>
                            </Menu>
                            }
                        </Grid.Col>
                    </Grid>
                    <Space h="md" />
                    <Divider />
                    <Space h="md" />
                    <div>
                        <Timeline bulletSize={24} lineWidth={2}>
                            <Timeline.Item bullet={<IconCheck size={12} />} title="Order Placed">
                                <Text c="dimmed" size="sm">Your order has been recieved.</Text>
                                <Text size="xs" mt={4}>{DateFormatter.short(orderData.date)}</Text>
                            </Timeline.Item>
                            {orderStatusCheckList.filter(x => x.filter?.includes(orderData.status)).map(item => <Timeline.Item title={item.children} bullet={<ThemeIcon
                                c={item.color}
                                radius="xl"
                                size={24}
                            >
                                {item.dot}
                            </ThemeIcon>}></Timeline.Item>)}
                            {![BookingStatus.CANCELLED, BookingStatus.REJECTED, BookingStatus.COMPLETED].some(x => x === orderData.status) ? <Timeline.Item title="Waiting for updates..."></Timeline.Item> : ''}
                        </Timeline>
                    </div>
                    <Space h="md" />
                    <Divider />
                    <Space h="md" />
                    {orderData.services.map(service => <Grid align="center">
                        <Grid.Col span={'content'}>
                            <Link to={'/profile/' + service.vendor.username}><Avatar src={service.vendor.profileImageName} /></Link>
                        </Grid.Col>
                        <Grid.Col span={'auto'}>
                            <Link to={'/profile/' + service.vendor.username}><Text fw={500}>{service.vendor.username}</Text></Link>
                            <Text size="sm">{service.vendor.vendorType?.name}</Text>
                            <Badge>{service.name}</Badge>
                        </Grid.Col>
                        <Grid.Col span={'content'}>
                            <Tooltip label={service.status === BookingStatus.PENDING ? 'Call button will enabled after the vendor confirmation' : ''}>
                                <Button radius={'xl'} leftSection={<PhoneOutlined />} size={'middle'} disabled={service.status !== BookingStatus.ACCEPTED}>
                                    Call
                                </Button>
                            </Tooltip>
                        </Grid.Col>
                    </Grid>)}
                    <Space h="md" />
                    <Divider />
                    <Space h="md" />
                    <Text fw={500} td="underline">Addon Services</Text>
                    <List>
                        {orderData.services.map(item => <List.Item c={StatusMarker.get(item.status)}>{item.name}</List.Item>)}
                    </List>

                    <Modal opened={showModal} onClose={() => setModal(false)} title="Confirm cancellation" >
                        <Form method="post" action="#">
                            <Text>The amount deducted will be refunded to your original payment menthod in 3-10 days.</Text>
                            <input type="hidden" value={orderData.id} name="id" />
                            <Grid justify={'end'} style={{ marginTop: '40px' }}>
                                <Grid.Col><Button color="red" name="action" value={'cancel'} onClick={() => setModal(false)}>Confirm</Button></Grid.Col>
                            </Grid>
                        </Form>
                    </Modal>
                </Card>
                }
            </Await>
        </Suspense>;
    }
}

export default UserOrderHome.Index;