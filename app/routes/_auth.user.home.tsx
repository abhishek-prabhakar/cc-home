import { LoaderArgs } from "@remix-run/node";
import { Col, Row, Typography } from "antd";
import { UserBooking } from "~/types";
const { Title } = Typography;


export async function loader({ params }: LoaderArgs): Promise<{
    bookings: UserBooking[]
}> {

    return {
        bookings: [{
            id: '1',
            name: 'booking 1',
            date: new Date()
        }]
    }

}

export default function UserHome() {

    return <Row>
        <Col>
            <Title level={3}>Manage Bookings</Title>
        </Col>
    </Row>
}