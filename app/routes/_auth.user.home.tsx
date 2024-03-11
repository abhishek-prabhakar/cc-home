import { EditOutlined, PhoneOutlined } from "@ant-design/icons";
import { Badge, Button, Card, Grid, Group, Skeleton, Space, Text, Title } from "@mantine/core";
import { BookingStatus, User } from "@prisma/client";
import { LoaderArgs, TypedDeferredData, defer } from "@remix-run/node";
import { Await, Link, useLoaderData } from "@remix-run/react";
import { Suspense } from "react";
import { USER_SESSION_KEY, getSession } from "~/session.server";
import { UserBooking, UserData } from "~/types";
import { db } from "~/utils/database";
import { DateFormatter } from "~/utils/date.transform";
import { StatusMarker } from "~/utils/statusMarker.map";

type OrderItem = { id: string, status: BookingStatus, date: Date, services: string[] }

export async function loader({ params, request }: LoaderArgs) {
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
                        vendorServiceGroup: {
                            select: {
                                group: {
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
                services: x.bookingService.map(i => i.vendorServiceGroup.group.name || 'Deleted service')
            }));

            resolve(p);
        });

    });


    return defer({ orders });
}



const UserHome = {
    Index: () => {
        return <Grid>
            <Grid.Col span={{ base: 12, md: 8 }}>
                <Title order={3}>Manage Bookings</Title>
                <UserHome.AllBookings />
            </Grid.Col>
        </Grid>
    },
    AllBookings: () => {
        const data = useLoaderData<typeof loader>();

        return <div>
            <Suspense fallback={<Skeleton />}>
                <Await resolve={data.orders}>
                    {response => <Grid >
                        {response.map(booking => <Grid.Col span={12} key={booking.id}> <Card withBorder>
                            <Grid justify={'space-between'} align={'middle'} gutter={20}>
                                <Grid.Col span="auto">
                                    <Group>
                                        <Text c="dimmed" fw={500}>Order ID: {booking.id}</Text>
                                        <Badge color={StatusMarker.get(booking.status) || 'gray'}>{booking.status}</Badge>
                                    </Group>
                                    <Space h="sm" />
                                    Placed on: <b>{DateFormatter.short(booking.date)}</b>
                                </Grid.Col>
                                <Grid.Col span="content">
                                    <Link to={'/user/order/' + booking.id}>
                                        <Button radius={'xl'} size={'middle'}>
                                            View
                                        </Button>
                                    </Link>
                                </Grid.Col>
                            </Grid>
                        </Card>
                        </Grid.Col>
                        )}
                        {!response.length && <Grid.Col span={12}>Sorry, You haven't scheduled any orders</Grid.Col>}
                    </Grid>}
                </Await>
            </Suspense>
        </div >
    }
}

export default UserHome.Index;