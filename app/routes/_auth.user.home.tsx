import { EditOutlined, PhoneOutlined } from "@ant-design/icons";
import { LoaderArgs } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { Avatar, Button, Card, Col, Divider, List, Row, Space, Tag, Timeline, Typography } from "antd";
import { UserBooking, UserData } from "~/types";
const { Title, Text } = Typography;


export async function loader({ params }: LoaderArgs): Promise<UserData> {

    return {
        bookings: [{
            id: '1',
            name: 'booking 1',
            date: new Date(),
            vendors: [{
                id: 'jessica', fullName: 'Jessica', location: 'Bangalore', gender: 'Female', email: '3ewwer',
                type: 'Photographer',
                avatar: {
                    large: 'https://tenpo.balcomsoft.com/wp-content/uploads/2023/07/Frame-1000001329.webp',
                    thumbnail: 'https://tenpo.balcomsoft.com/wp-content/uploads/2023/07/Frame-1000001329.webp'
                }
            }]
        }],
    }

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
        const data = useLoaderData<UserData>();

        return <Row >
            {data.bookings.map(booking => <Col span={24} key={booking.id}> <Card>
                <Row justify={'space-between'} align={'middle'}>
                    <Col>
                        <Space size={'middle'}>
                            <Text type="secondary" strong>Order ID: 123</Text>
                            <Tag color="#87d068">Confirmed</Tag>
                        </Space>
                    </Col>
                    <Col>
                        <Button type="default" shape="round" icon={<EditOutlined />} size={'middle'}>
                            Manage
                        </Button>
                    </Col>
                </Row>
                <Title level={5}>Wednesday Sept 30, 2023</Title>
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
                    dataSource={booking.vendors}
                    renderItem={(item) => (
                        <List.Item key={item.email}>
                            <List.Item.Meta
                                avatar={<Avatar src={item.avatar?.large} />}
                                title={<Link to={'/profile/' + item.id}>{item.fullName}</Link>}
                                description={item.type}
                            />
                            <div>
                                <Button type="primary" shape="round" icon={<PhoneOutlined />} size={'middle'}>
                                    Call
                                </Button>
                            </div>
                        </List.Item>
                    )}
                />
            </Card>
            </Col>
            )}
        </Row>
    }
}

export default UserHome.Index;