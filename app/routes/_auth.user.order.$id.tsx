import { EditOutlined, PhoneOutlined } from "@ant-design/icons";
import { BookingStatus } from "@prisma/client";
import { LoaderArgs, TypedDeferredData, defer } from "@remix-run/node";
import { Await, Link, useLoaderData } from "@remix-run/react";
import { Avatar, Button, Card, Col, Divider, Dropdown, List, MenuProps, Row, Space, Tag, Timeline, Tooltip, Typography } from "antd";
import { PATH } from "~/path.data";
import { USER_SESSION_KEY, getSession } from "~/session.server";
import { db } from "~/utils/database";
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
        key: '2',
        label: <Text type="danger">Cancel</Text>,
    }]

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

        return <Row>
            <Col span={24}>
                <Await resolve={data.data}>
                    {orderData => <Card>
                        <Row justify={'space-between'} align={'middle'} gutter={[20, 20]}>
                            <Col>
                                <Space size={'middle'}>
                                    <Text type="secondary" strong>Order ID: {orderData.orderId}</Text>
                                    <Tag color={StatusMarker.get(orderData.status)}>{orderData.status}</Tag>
                                </Space>
                                <Title level={5}>{orderData.date}</Title>
                            </Col>
                            <Col>
                                <Dropdown menu={{ items: bookingOptionsList }} placement="bottomRight">
                                    <Button type="default" shape="round" icon={<EditOutlined />} size={'middle'}>
                                        Manage
                                    </Button>
                                </Dropdown>
                            </Col>
                        </Row>
                        <Divider />
                        <div>
                            <Timeline
                                pending="Waiting for confirmation..."
                                items={[
                                    {
                                        children: 'Order Placed',
                                    },
                                ]}
                            />
                        </div>
                        <Divider />
                        <List
                            dataSource={orderData.services}
                            renderItem={(item) => (
                                <List.Item key={item.id}>
                                    <List.Item.Meta
                                        avatar={<Link to={'/profile/' + item.vendor.username}><Avatar src={item.vendor.profileImg} /></Link>}
                                        title={<Link to={'/profile/' + item.vendor.username}>{item.vendor.name}</Link>}
                                        description={item.vendor.jobType}
                                    />
                                    <div>
                                        <Tooltip title={item.status === BookingStatus.PENDING ? 'Call button will enabled after the vendor confirms' : ''}>
                                            <Button type="primary" shape="round" icon={<PhoneOutlined />} size={'middle'} disabled={item.status !== BookingStatus.ACCEPTED}>
                                                Call
                                            </Button>
                                        </Tooltip>
                                    </div>
                                </List.Item>
                            )}
                        />
                    </Card>
                    }
                </Await>
            </Col>
        </Row>
    }
}

export default UserOrderHome.Index;