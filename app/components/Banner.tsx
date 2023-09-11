import { RightOutlined } from "@ant-design/icons";
import { Button, Col, Row, Tag, Tooltip } from "antd";
import { Typography } from 'antd';
const { Title } = Typography;

const bannerStyle: React.CSSProperties = {
    padding: '40px 40px',
    backgroundColor: '#e1e1e1',
    borderRadius: '10px'
};

export function Banner() {
    return <div style={bannerStyle}>
        <Row gutter={40} align="middle" justify={'center'}>
            <Col md={8} span={24}>
                <Tag color="cyan">20% OFF</Tag>
                <Title level={2}>Street Photography</Title>
            </Col>
            <Col md={8} span={20}>
                <Title level={5}>BEST QUALITY EVER!</Title>
                <Title type="secondary" level={5}>Magna incididunt commodo aute cupidatat duis eiusmo magna elit aliqua nulla incididunt ex</Title>
            </Col>
            <Col span={4}>
                <Tooltip title="Avail this offer">
                    <Button size="large" type="primary" shape="circle" icon={<RightOutlined />} />
                </Tooltip>
            </Col>
        </Row>
    </div>
}

export function BannerVertical() {
    return <div style={bannerStyle}>
        <Row >
            <Col span={24}>
                <Tag color="cyan">20% OFF</Tag>
                <Title level={2}>Street Photography</Title>
            </Col>
            <Col span={20}>
                <Title level={5}>BEST QUALITY EVER!</Title>
                <Title type="secondary" level={5}>Magna incididunt commodo aute cupidatat duis eiusmo magna elit aliqua nulla incididunt ex</Title>
            </Col>
            <Col span={24} style={{ paddingTop: '40px' }}>
                <Tooltip title="Avail this offer">
                    <Button size="large" type="primary" shape="circle" icon={<RightOutlined />} />
                </Tooltip>
            </Col>
        </Row>
    </div>
}