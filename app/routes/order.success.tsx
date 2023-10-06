import { CheckCircleOutlined, FrownOutlined, MehOutlined, SmileOutlined } from "@ant-design/icons";
import { LoaderArgs, redirect } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { Button, Card, Col, Rate, Row, Space, Typography } from "antd";

type LoaderData = {
    id: string
}

export async function loader({
    params, request
}: LoaderArgs): Promise<LoaderData | null> {
    const url = new URL(request.url)
    const orderId = url.searchParams.get('id');

    if (!orderId) {
        redirect('/404');
        return null;
    }

    return { id: orderId };
}

const customIcons: Record<number, React.ReactNode> = {
    1: <FrownOutlined />,
    2: <FrownOutlined />,
    3: <MehOutlined />,
    4: <SmileOutlined />,
    5: <SmileOutlined />,
};

const OrderSuccess = {
    Index: () => {
        const data = useLoaderData<LoaderData>();

        return <div className="container">
            <Row justify={'center'} align={'middle'}>
                <Col xs={24} sm={24} md={8} lg={10}>
                    <Space direction="vertical" size={'middle'} style={{ width: '100%' }}>
                        <Card>
                            <Space direction="vertical" align="center" style={{ width: '100%' }}>
                                <Typography.Text type="success">
                                    <CheckCircleOutlined style={{ fontSize: '50px' }} />
                                </Typography.Text>
                                <div style={{ textAlign: 'center' }}>
                                    <Typography.Title level={2}>Your Order is Confirmed!</Typography.Title>
                                    <Typography.Text>We'll send you a confirmation email<br /> as soon as the vendor confirms the availability.</Typography.Text>
                                </div>
                                <br />
                                <Link to={'/user/order/' + data?.id}>
                                    <Button type="primary">CHECK STATUS</Button>
                                </Link>
                            </Space>
                        </Card>
                        <Card>
                            <Typography.Title level={5}>How was your experience?</Typography.Title>
                            <Rate defaultValue={3} character={({ index }: any) => customIcons[index + 1]} />
                        </Card>
                    </Space>
                </Col>
            </Row>
        </div>;
    }
}
export default OrderSuccess.Index;