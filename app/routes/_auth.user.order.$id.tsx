import { EditOutlined, PhoneOutlined, SmileOutlined } from "@ant-design/icons";
import { BookingStatus } from "@prisma/client";
import { ActionArgs, LoaderArgs, TypedDeferredData, defer } from "@remix-run/node";
import { Await, Form, Link, useLoaderData } from "@remix-run/react";
import { Avatar, Button, Card, Col, Divider, Dropdown, List, MenuProps, Modal, Row, Space, Tag, Timeline, Tooltip, Typography } from "antd";
import { useState } from "react";
import { PATH } from "~/path.data";
import { USER_SESSION_KEY, getSession } from "~/session.server";
import { db } from "~/utils/database";
import { DateFormatter } from "~/utils/date.transform";
import { StatusMarker } from "~/utils/statusMarker.map";
const { Title, Text } = Typography;


type BookingService = {
    id: string,
    name: string,
    date: Date,
    timeHour: number,
    duration: number,
    status: BookingStatus,
    vendor: {
        name: string,
        username: string,
        profileImg: string,
        jobType: string
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
    services: BookingService[]
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
                        vendorServices: {
                            select: {
                                vendors: {
                                    select: {
                                        username: true,
                                        profileImageName: true,
                                        vendorType: {
                                            select: {
                                                name: true
                                            }
                                        }
                                    }
                                },
                                service: {
                                    select: {
                                        name: true,
                                    }
                                }
                            }
                        }
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
                        name: x.vendorServices.service.name,
                        vendor: {
                            username: x.vendorServices.vendors.username,
                            name: x.vendorServices.vendors.username,
                            jobType: x.vendorServices.vendors.vendorType.name,
                            profileImg: x.vendorServices.vendors.profileImageName ?? PATH.AVATAR_PLACEHOLDER,
                        }
                    }))
                })
            }
        })
    });

    return defer({
        data
    });
}

const bookingOptionsList: MenuProps['items'] = [
    {
        key: '1',
        label: 'Reschedule',
    },
    {
        key: 'cancel',
        label: <Text type="danger">Cancel</Text>,
    }];


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
        return <Row>
            <Col sm={24} xs={24} md={16}>
                <Title level={3}>Manage Booking</Title>
                <UserOrderHome.Order />
            </Col>
        </Row>
    },
    Order: () => {
        const data = useLoaderData<LoaderData>();
        const [showModal, setModal] = useState(false);

        const onOptionMenuClick = async ({ key }: { key: string }) => {
            switch (key) {
                case 'cancel':
                    setModal(true);
                    break;
            }

        };

        return <Row>
            <Col span={24}>
                <Await resolve={data.data}>
                    {orderData => <Card>
                        <Row justify={'space-between'} align={'middle'} gutter={[20, 20]}>
                            <Col>
                                <Space size={'middle'}>
                                    <Title level={5}>Order ID: {orderData.orderId}</Title>
                                    <Tag color={StatusMarker.get(orderData.status)}>{orderData.status}</Tag>
                                </Space>
                            </Col>
                            <Col>
                                {orderData.status !== BookingStatus.CANCELLED && orderData.status !== BookingStatus.REJECTED && <Dropdown menu={{ items: bookingOptionsList, onClick: onOptionMenuClick }} placement="bottomRight">
                                    <Button type="default" shape="round" icon={<EditOutlined />} size={'middle'}>
                                        Manage
                                    </Button>
                                </Dropdown>
                                }
                            </Col>
                        </Row>
                        <Divider />
                        <div>
                            <Timeline
                                pending={orderData.status !== BookingStatus.CANCELLED && orderData.status !== BookingStatus.REJECTED ? 'Waiting for updates...' : null}
                                items={[
                                    {
                                        children: <div>
                                            Order Placed
                                            <br />
                                            <Text type="secondary">{DateFormatter.short(orderData.date)}</Text>
                                        </div>,
                                    },
                                    ...orderStatusCheckList.filter(x => x.filter?.includes(orderData.status))
                                ]}
                            />
                        </div>
                        <Divider />
                        <Typography.Text strong underline>Services</Typography.Text>
                        <List
                            dataSource={orderData.services}
                            renderItem={(item) => (
                                <List.Item key={item.id} actions={[<Tooltip title={item.status === BookingStatus.PENDING ? 'Call button will enabled after the vendor confirmation' : ''}>
                                    <Button type="primary" shape="round" icon={<PhoneOutlined />} size={'middle'} disabled={item.status !== BookingStatus.ACCEPTED}>
                                        Call
                                    </Button>
                                </Tooltip>]}>
                                    <List.Item.Meta
                                        avatar={<Link to={'/profile/' + item.vendor.username}><Avatar src={item.vendor.profileImg} /></Link>}
                                        title={<Link to={'/profile/' + item.vendor.username}>{item.vendor.name}</Link>}
                                        description={item.vendor.jobType}
                                    />
                                    <div>
                                        <Space>
                                            <Typography.Title level={5}>{item.name}</Typography.Title>
                                            <Tag color={StatusMarker.get(item.status)}>{item.status}</Tag>
                                        </Space>
                                        <br />
                                        <div>
                                            Scheduled on {DateFormatter.short(item.date)}
                                            <br /> Time: {item.timeHour} ({item.duration} hours)
                                        </div>
                                    </div>
                                </List.Item>
                            )}
                        />
                        <Modal open={showModal} onCancel={() => setModal(false)} title="Confirm cancellation" footer={null}>
                            <Form method="post" action="#">
                                <Typography.Text>The amount deducted will be refunded to your original payment menthod in 3-10 days.</Typography.Text>
                                <input type="hidden" value={orderData.id} name="id" />
                                <Row justify={'end'} style={{ marginTop: '40px' }}>
                                    <Col><Button htmlType="submit" danger name="action" value={'cancel'} onClick={() => setModal(false)}>Confirm</Button></Col>
                                </Row>
                            </Form>
                        </Modal>
                    </Card>
                    }
                </Await>
            </Col>
        </Row>
    }
}

export default UserOrderHome.Index;