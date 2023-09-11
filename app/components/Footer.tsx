import { Col, Input, Row, Space, Tag, Typography } from "antd";

export function Footer() {
    const categoryList = [
        'travel',
        'kitchen',
        'cars',
        'garden',
        'home',
        'holiday',
        'software',
        'health',
        'appliences',
        'money',
        'pets',
        'office',
        'electronics',
        'hobby',
        'baby',
        'digital'
    ];
    return <Space className="container" direction="vertical" size={'large'}><Row gutter={40} style={{ background: '#EEF5FE', borderRadius: '10px', padding: '40px 0' }}>
        <Col span={24} md={8}>
            <Typography.Title level={5}>About</Typography.Title>
            <Typography.Text color="#3d5b7d">Consequat quis laboris excepteur sint. Culpa quis cillum qui sunt in ad sint eu est consectetur. Do cupidatat pariatur nulla ad ad proident qui culpa duis velit pariatur.</Typography.Text>
        </Col>
        <Col span={24} md={8}>
            <Typography.Title level={5}>Categories</Typography.Title>
            <Space wrap size={[0, 8]}>{categoryList.map((item, key) => <Tag key={'fc' + key}>{item}</Tag>)}</Space>
        </Col>
        <Col span={24} md={8}>
            <Typography.Title level={5}>Search</Typography.Title>
            <Typography.Text color="var(--ui-color-secondary)">A breakdown or a flat tire can happen</Typography.Text>
            <div style={{ paddingTop: '20px' }}>
                <Input.Search placeholder="Search" enterButton />
            </div>
        </Col>
    </Row>
        <Row justify={'space-between'}>
            <Col><Typography.Text type="secondary">© Celebria 2023. All Rights Reserved.</Typography.Text></Col>
            <Col><Typography.Text type="secondary">Privacy Policy | Terms And Conditions</Typography.Text></Col>
        </Row>
    </Space>;
}