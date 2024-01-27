import { Await, Link, useLoaderData } from "@remix-run/react";
import { Col, Input, Row, Skeleton, Space, Tag, Typography } from "antd";
import { Suspense } from "react";
import Routes from "~/routes.data";
import { RootLoaderData } from "~/types";

export function Footer() {
    const data = useLoaderData<RootLoaderData>();

    return <div className="container"><Space direction="vertical" size={'large'}><Row gutter={40} style={{ background: '#EEF5FE', borderRadius: '10px', padding: '40px 0' }}>
        <Col span={24} md={8}>
            <Typography.Title level={5}>About</Typography.Title>
            <Typography.Text color="#3d5b7d">Our commitment to excellence is the cornerstone of our vision, empowering both clients and artisans to revel in an unparalleded creative odyssey.</Typography.Text>
        </Col>
        <Col span={24} md={8}>
            <Typography.Title level={5}>Categories</Typography.Title>
            <Suspense fallback={<Skeleton />}>
                <Await resolve={data.pages}>
                    {navList => <Space wrap size={[0, 8]}>{navList.map(item => <Link to={Routes.Services.replace(':id', item.id)}><Tag className="cursor-pointer" key={item.id}>{item.name}</Tag></Link>)}</Space>}
                </Await>
            </Suspense>
        </Col>
        <Col span={24} md={8}>
            <Typography.Title level={5}>Support</Typography.Title>
            <Typography.Text>support@celebriacollective.com</Typography.Text>
        </Col>
    </Row>
        <Row justify={'space-between'}>
            <Col><Typography.Text type="secondary">© Celebria 2023. All Rights Reserved.</Typography.Text></Col>
            <Col><Typography.Text type="secondary">Privacy Policy | Terms And Conditions</Typography.Text></Col>
        </Row>
    </Space></div>;
}