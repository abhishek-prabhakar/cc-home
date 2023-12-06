import { EditOutlined, PhoneOutlined } from "@ant-design/icons";
import { BookingStatus, User } from "@prisma/client";
import { LoaderArgs, TypedDeferredData, defer } from "@remix-run/node";
import { Await, Link, useLoaderData } from "@remix-run/react";
import { Avatar, Button, Card, Col, Divider, Dropdown, List, MenuProps, Row, Skeleton, Space, Tag, Timeline, Typography } from "antd";
import { Suspense } from "react";
import { USER_SESSION_KEY, getSession } from "~/session.server";
import { UserBooking, UserData } from "~/types";
import { db } from "~/utils/database";
import { DateFormatter } from "~/utils/date.transform";
import { StatusMarker } from "~/utils/statusMarker.map";
const { Title, Text } = Typography;

type OrderItem = { id: string, status: BookingStatus, date: Date, services: string[] }
type LoaderData = {
    orders: OrderItem[]
}

export async function loader({ params, request }: LoaderArgs): Promise<any> {
    const session = await getSession(request.headers.get('Cookie'));
    const userId = session.get(USER_SESSION_KEY);

    const orders = new Promise<OrderItem[]>(function (resolve, reject) {
        if (!userId) {
            reject();
            return;
        }
        db.booking.findMany({
            orderBy: {
                created_at: 'desc'
            },
            where: {
                userId: userId
            },
            select: {
                id: true,
                orderId: true,
                status: true,
                created_at: true,
                bookingService: {
                    select: {
                        vendorService: {
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
            const p = r.map(x => ({
                id: x.orderId,
                status: x.status,
                date: x.created_at,
                services: x.bookingService.map(i => i.vendorService.service.name)
            }));

            resolve(p);
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
                                        <Tag color={StatusMarker.get(booking.status)}>{booking.status}</Tag>
                                    </Space>
                                    <Title level={5}>Placed on: {DateFormatter.short(booking.date)}</Title>
                                    <Text><strong>Services:</strong> {booking.services.join(', ')}</Text>
                                </Col>
                                <Col>
                                    <Link to={'/user/order/' + booking.id}>
                                        <Button type="default" shape="round" size={'middle'}>
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
        </div >
    }
}

export default UserHome.Index;