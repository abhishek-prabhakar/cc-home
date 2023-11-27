import { EditOutlined, PhoneOutlined } from "@ant-design/icons";
import { BookingStatus, User } from "@prisma/client";
import { LoaderArgs, TypedDeferredData, defer } from "@remix-run/node";
import { Await, Link, useLoaderData } from "@remix-run/react";
import { Avatar, Button, Card, Col, Divider, Dropdown, List, MenuProps, Row, Skeleton, Space, Tag, Timeline, Typography } from "antd";
import { Suspense } from "react";
// import { getSessionUser, getSessionUserId } from "~/session.server";
import { UserBooking, UserData } from "~/types";
import { db } from "~/utils/database";
const { Title, Text } = Typography;

type OrderItem = { id: string, status: BookingStatus, date: Date, services: string[] }
type LoaderData = {
    orders: OrderItem[]
}

export function loader({ params, request }: LoaderArgs): any {
    return true;
    // const user = await getSessionUser(request);

    // const orders = new Promise<OrderItem[]>(function (resolve, reject) {
    //     if (!user) {
    //         reject();
    //         return;
    //     }
    //     db.booking.findMany({
    //         where: {
    //             userId: (user as User).id
    //         },
    //         select: {
    //             id: true,
    //             orderId: true,
    //             status: true,
    //             created_at: true,
    //             bookingService: {
    //                 select: {
    //                     vendorServices: {
    //                         select: {
    //                             service: {
    //                                 select: {
    //                                     name: true
    //                                 }
    //                             }
    //                         }
    //                     }
    //                 }
    //             }
    //         }
    //     }).then(r => {
    //         const p = r.map(x => ({
    //             id: x.orderId,
    //             status: x.status,
    //             date: x.created_at,
    //             services: x.bookingService.map(i => i.vendorServices.service.name)
    //         }));
    //         console.log(p)
    //         resolve(p)
    //     })
    // });


    // return defer({ orders });
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
            kl
        </div>
    }
}

export default UserHome.Index;