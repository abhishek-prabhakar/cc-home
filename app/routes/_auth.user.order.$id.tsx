import { EditOutlined, PhoneOutlined, SmileOutlined } from "@ant-design/icons";
import { Alert, Avatar, Badge, Button, Card, Divider, Grid, Group, List, Menu, Modal, Space, Stack, Text, ThemeIcon, Timeline, Title, Tooltip } from "@mantine/core";
import { BookingStatus } from "@prisma/client";
import { ActionArgs, LoaderArgs, TypedDeferredData, V2_MetaFunction, defer } from "@remix-run/node";
import { Await, Form, Link, useLoaderData } from "@remix-run/react";
import { IconChecks, IconInfoCircle, IconProgress } from "@tabler/icons-react";
import { IconCreditCardRefund } from "@tabler/icons-react";
import { IconAlertCircleFilled, IconCheck, IconCircleX } from "@tabler/icons-react";
import { Orders } from "razorpay/dist/types/orders";
import { Suspense, useState } from "react";
import { ChatBox } from "~/components/ChatBox";
import Skeleton from "~/components/Skeleton";
import { PATH } from "~/path.data";
import Routes from "~/routes.data";
import OrderService from "~/service/order.service";
import PaymentService from "~/service/payment.service";
import { USER_SESSION_KEY, getSession } from "~/session.server";
import { db } from "~/utils/database";
import { DateFormatter } from "~/utils/date.transform";
import { StatusMarker } from "~/utils/statusMarker.map";

type UserBooking = {
    id: string,
    orderId: string,
    status: BookingStatus,
    date: Date,
    coupon: string | null,
    tax: number,
    discount: number,
    total: number,
    services: {
        id: string,
        date: Date,
        status: BookingStatus,
        timeHour: number,
        duration: number,
        location: string,
        name: string,
        vendor: {
            vendorType: {
                vendorIdentifier: string | null;
            } | null;
            username: string;
            profileImageName: string | null;
        },
        addons:{
            serviceName: string,
            cost: number
        }[]
    }[]
}

async function razerPayPaymentStatus(userId:string,orderId:string){
    const rpPaymentRef = await db.booking.findFirstOrThrow({
        where: {
            userId,
            orderId
        },
        select:{
            status: true,
            paymentRef: true
        }
    });
    if(!rpPaymentRef?.paymentRef || rpPaymentRef.status!== BookingStatus.PENDING){
        return null;
    }

    return await PaymentService.getOrder(rpPaymentRef.paymentRef);
}

export async function action(args: ActionArgs) {
    const formData = args.request.formData();
    const _action = (await formData).get('action')?.toString();
    const id = (await formData).get('id')?.toString();

    if (!id) {
        return false;
    }

    switch (_action) {
        case 'cancel':
            await OrderService.cancelOrder(id);
        break;
    }

    return true;
}

export async function loader({ request, params }: LoaderArgs) {
    const orderId = params.id;
    const session = await getSession(request.headers.get("Cookie"));
    const userId = session.get(USER_SESSION_KEY);
    if(!orderId || !userId){
        throw new Error('invalid order');
        return;
    }

    const data = new Promise<UserBooking>(function (resolve, reject) {
        db.booking.findFirstOrThrow({
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
                        location: true,
                        vendorServiceGroup: {
                            select: {
                                group: {
                                    select: {
                                        name: true,
                                        imageName: true
                                    }
                                },
                                vendor: {
                                    select: {
                                        username: true,
                                        profileImageName: true,
                                        vendorType: {
                                            select: {
                                                vendorIdentifier:true
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        BookingAddons:{
                            select:{
                                serviceName: true,
                                cost: true
                            }
                        }
                    }
                }
            }
        }).then(r => {
            if (!r) {
                throw new Error("invalid order");

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
                        location: x.location,
                        name: x.vendorServiceGroup.group.name,
                        vendor: x.vendorServiceGroup.vendor,
                        addons: x.BookingAddons
                    }))
                })
            }
        }, e => {
            reject('Connection failed');
        })
    });

   const chatGroup = await db.chatGroup.findFirst({
        where:{
            bookingId:orderId,
        },
        select:{
            id: true,
            ChatGroupMember:{
                select:{
                    id: true
                },
                take: 1,
                where:{
                    userId
                }
            }
        }
    });

  
    let paymentStatus:Orders.RazorpayOrder | null = null;
    try{
       paymentStatus = await razerPayPaymentStatus(userId, orderId);
    } catch (e){
        paymentStatus = null;
    }

    return defer({
        orderId,
        data,
        chatGroup,
        paymentStatus
    });
}


const orderStatusCheckList: {
    color?: string,
    children: string,
    dot: JSX.Element,
    filter: BookingStatus[]
}[] = [
        {
            color: 'red',
            children: 'Order Cancelled',
            dot: <IconCircleX />,
            filter: [BookingStatus.CANCELLED]
        },
        {
            color: 'red',
            dot: <IconCircleX />,
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
            dot: <IconChecks />,
            children: 'Order Confirmed',
            filter: [BookingStatus.ACCEPTED, BookingStatus.IN_PROGRESS, BookingStatus.COMPLETED]
        },
        {
            color: 'yellow',
            dot: <IconProgress />,
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
            color: 'green',
            dot: <IconCreditCardRefund />,
            children: 'Refund processed',
            filter: [BookingStatus.REJECTED, BookingStatus.CANCELLED]
        },
    ]


export const meta: V2_MetaFunction = () => {
    return [
        { title: "My Account | Order Status" },
        { name: "description", content: "Celebria Collective, Find your Pefect vendor" },
    ];
};

const UserOrderHome = {
    Index: () => {
        return <>
        <Title order={3}>Manage Booking</Title>
                <Space h="md" />
                <Grid>
            <Grid.Col span={{ base: 12, md: 8 }}>
                <UserOrderHome.PaymentAlert/>
                <UserOrderHome.Order />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 4 }}>
                <UserOrderHome.ChatBox />
            </Grid.Col>
        </Grid>
        </>
    },
    Order: () => {
        const data = useLoaderData<typeof loader>();
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
                            {orderStatusCheckList.filter(x => x.filter?.includes(orderData.status)).map((item,i) => <Timeline.Item key={i} title={item.children} bullet={<ThemeIcon
                                c={item.color}
                                radius="xl"
                                size={24}
                            >
                                {item.dot}
                            </ThemeIcon>}></Timeline.Item>)}
                            {![BookingStatus.CANCELLED, BookingStatus.REJECTED, BookingStatus.COMPLETED].some(x => x === orderData.status) ? <Timeline.Item title="Waiting for updates..."></Timeline.Item> : <></>}
                        </Timeline>
                    </div>
                    <Space h="md" />
                    <Divider />
                    <Space h="md" />
                    {orderData.services.map(service => <Grid align="center" key={service.id}>
                        <Grid.Col span={'content'}>
                            <Link to={'/profile/' + service.vendor.username}><Avatar src={PATH.THUMB_URL + service.vendor.profileImageName} /></Link>
                        </Grid.Col>
                        <Grid.Col span={'auto'}>
                            <Stack>
                               <Group>
                                <Link to={'/profile/' + service.vendor.username}><Text fw={500}>{service.vendor.username}</Text></Link>
                                <Badge size="xs">{service.vendor.vendorType?.vendorIdentifier}</Badge>
                                </Group>
                                <Title order={5}>{service.name}</Title>
                                <Text>
                                    Date: {DateFormatter.short(service.date)}, at {service.timeHour} ({service.duration} hours)
                                </Text>
                                <Text>
                                    Venue: {service.location}
                                </Text>
                            </Stack>
                            <Space h="md" />
                           {
                           service.addons.length? <Stack>
                            <Text fw={500} td="underline">Addon Services</Text>
                            <List>
                                {service.addons.map(item => <List.Item key={item.serviceName}>{item.serviceName}</List.Item>)}
                            </List>
                            </Stack>: ''
                            }
                        </Grid.Col>
                        <Grid.Col span={'content'}>
                            <Tooltip hidden={service.status !== BookingStatus.PENDING} label={service.status === BookingStatus.PENDING ? 'Call button will enabled after the vendor confirmation' : ''}>
                                {service.status !== BookingStatus.ACCEPTED ? <Button radius={'xl'} leftSection={<PhoneOutlined />} size={'middle'} disabled={true}>
                                    Call
                                </Button> : <a href="tel:+916363369715"><Button radius={'xl'} leftSection={<PhoneOutlined />} size={'middle'}>
                                    Call
                                </Button></a>}
                            </Tooltip>
                        </Grid.Col>
                    </Grid>)}
                    <Space h="md" />
                    <Divider />
                    <Space h="md" />
                    <Modal opened={showModal} onClose={() => setModal(false)} title="Confirm cancellation" >
                        <Form method="post">
                            <Text>The amount deducted will be refunded to your original payment menthod in 3-10 days.</Text>
                            <input type="hidden" value={orderData.id} name="id" />
                            <Grid justify={'end'} style={{ marginTop: '40px' }}>
                                <Grid.Col><Button type="submit" color="red" name="action" value={'cancel'} onClick={() => setModal(false)}>Confirm</Button></Grid.Col>
                            </Grid>
                        </Form>
                    </Modal>
                </Card>
                }
            </Await>
        </Suspense>;
    },
    ChatBox: () =>{
        const data = useLoaderData<typeof loader>();
        return  <Suspense fallback={<Skeleton/>}>
            <Await resolve={data.chatGroup}>
            {
                response => response?.id && response?.ChatGroupMember?.length ?  <ChatBox chatGroupId={response?.id} memberId={response?.ChatGroupMember[0]?.id} disabled={false}/> : <Card withBorder title="Chat is disabled">
                        Contact support to enable chat for this order.
                </Card>
            }
            {/* {
                response => <Testt d={response}/>
            } */}
        </Await>
        </Suspense>
    },
    PaymentAlert: () =>{
        const data= useLoaderData<typeof loader>();

        if(data.paymentStatus?.amount_paid === data.paymentStatus?.amount){
            return <></>;
        }

        const icon = <IconInfoCircle />;

        return  <Alert variant="light" color="red" title="Payment was unsuccessfull" icon={icon} mb={'md'}>
            <Text>We couldn't confirm the payment for this order. Kindly complete the payment immediately to avoid cancellation.</Text>
            <Space h="md"/>
            <Link to={Routes.get('PaymentGateway', {
                id: data.orderId
            })}>
                <Button>Pay Now</Button>
            </Link>
        </Alert>
    }
}

export default UserOrderHome.Index;


function Testt(p:{d: any}){
    console.log(p.d)
    return <div>sdf</div>
}

export function ErrorBoundary() {
    return <div>
        Invalid data
    </div>
}
