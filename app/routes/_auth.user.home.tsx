import { EditOutlined, PhoneOutlined } from "@ant-design/icons";
import { BookingStatus } from "@prisma/client";
import { LoaderArgs, TypedDeferredData, defer } from "@remix-run/node";
import { Await, Link, useLoaderData } from "@remix-run/react";
import { Avatar, Button, Card, Col, Divider, Dropdown, List, MenuProps, Row, Skeleton, Space, Tag, Timeline, Typography } from "antd";
import { Suspense } from "react";
import { getSessionUser, getSessionUserId } from "~/session.server";
import { UserBooking, UserData } from "~/types";
import { db } from "~/utils/database";
const { Title, Text } = Typography;

type OrderItem = { id: string, status: BookingStatus, date: Date, services: string[] }
type LoaderData = {
    orders: OrderItem[]
}

export async function loader({ params, request }: LoaderArgs): Promise<TypedDeferredData<any>> {
    const user = await getSessionUser(request);

    const orders = new Promise<OrderItem[]>(function (resolve, reject) {
        console.log(user);
        console.log('----')
        if (!user) {
            reject();
            return;
        }
        db.booking.findMany({
            where: {
                userId: user.id
            },
            select: {
                id: true,
                orderId: true,
                status: true,
                created_at: true,
                bookingService: {
                    select: {
                        vendorServices: {
                            select: {
                                service: {
                                    select: {
                                        name: true
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }).then(r => {
            resolve(r.map(x => ({
                id: x.orderId,
                status: x.status,
                date: x.created_at,
                services: x.bookingService.map(i => i.vendorServices.service.name)
            })))
        })
    });


    return defer({ orders });
}


const UserHome = {
    Index: () => {
        return <Row>
            <Col sm={24} xs={24} md={16}>
                <Title level={3}>Manage Bookings</Title>
                <UserHome.AllBookings />
            </Col>
        </Row>
    },
    AllBookings: () => {
        const data = useLoaderData<LoaderData>();

        return <div>
            <Suspense fallback={<Skeleton />}>
                <Await resolve={data.orders}>
                    {response => <Row >
                        {response.map(booking => <Col span={24} key={booking.id}> <Card>
                            <Row justify={'space-between'} align={'middle'} gutter={[20, 20]}>
                                <Col>
                                    <Space size={'middle'}>
                                        <Text type="secondary" strong>Order ID: {booking.id}</Text>
                                        <Tag color="#87d068">{booking.status}</Tag>
                                    </Space>
                                    <Title level={5}>Placed on: {booking.date}</Title>
                                    <Text>{booking.services.join(', ')}</Text>
                                </Col>
                                <Col>
                                    <Link to={'order/' + booking.id}>
                                        <Button type="default" shape="round" icon={<EditOutlined />} size={'middle'}>
                                            View
                                        </Button>
                                    </Link>
                                </Col>
                            </Row>
                        </Card>
                        </Col>
                        )}
                        {!response.length && <Col span={12}>Sorry, You haven't scheduled any orders</Col>}
                    </Row>}
                </Await>
            </Suspense>
        </div>
    }
}

export default UserHome.Index;