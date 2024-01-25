import { CheckCircleOutlined, FrownOutlined, MehOutlined, SmileOutlined } from "@ant-design/icons";
import { LoaderArgs, redirect } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { Button, Card, Col, Rate, Row, Space, Typography } from "antd";

export async function loader({
    params, request
}: LoaderArgs) {

    return null;
}


const SignupSuccess = {
    Index: () => {

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
                                    <Typography.Title level={2}>Thank you for your interest!</Typography.Title>
                                    <Typography.Text>You'll recieve a confirmation email in 2-3 business days.</Typography.Text>
                                </div>
                            </Space>
                        </Card>
                    </Space>
                </Col>
            </Row>
        </div>;
    }
}
export default SignupSuccess.Index;