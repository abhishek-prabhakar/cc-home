import { RightOutlined } from "@ant-design/icons";
import { Link } from "@remix-run/react";
import { Button, Col, Row, Tag, Tooltip } from "antd";
import { Typography } from 'antd';
import { BannerItem } from "~/types";
const { Title } = Typography;

const bannerStyle: React.CSSProperties = {
    padding: '40px 40px',
    backgroundColor: '#e1e1e1',
    borderRadius: '10px',
    overflow: "hidden",
    backgroundSize: "cover"
};

export function Banner({ data }: { data?: BannerItem }) {
    return data?.title ? <div style={{ ...bannerStyle, backgroundImage: 'url(' + data.img + ')' }} >
        <Row gutter={40} align="middle" justify={'center'}>
            <Col md={8} span={24}>
                {/* <Tag color="cyan">20% OFF</Tag> */}
                <Title level={2}>{data.title}</Title>
            </Col>
            <Col md={8} span={20}>
                <Title level={5}>{data.description}</Title>
            </Col>
            <Col span={4}>
                <Tooltip title="Avail this offer">
                    <Link to={data.url}>
                        <Button size="large" type="primary" shape="circle" icon={<RightOutlined />} />
                    </Link>
                </Tooltip>
            </Col>
        </Row>
    </div> : <div></div>;
}

export function BannerVertical({ data }: { data?: BannerItem }) {
    return data?.title ? <div style={{ ...bannerStyle, backgroundImage: 'url(' + data.img + ')' }}>
        <Row >
            <Col span={24}>
                {/* <Tag color="cyan">20% OFF</Tag> */}
                <Title level={2}>{data.title}</Title>
            </Col>
            <Col span={20}>
                <Title level={5}>{data.description}</Title>
            </Col>
            <Col span={24} style={{ paddingTop: '40px' }}>
                <Tooltip title="Avail this offer">
                    <Link to={data.url}>
                        <Button size="large" type="primary" shape="circle" icon={<RightOutlined />} />
                    </Link>
                </Tooltip>
            </Col>
        </Row>
    </div> : <div></div>
}