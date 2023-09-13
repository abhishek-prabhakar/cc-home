import type { V2_MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Col, Collapse, CollapseProps, Layout, Menu, Row, Space, Typography, theme } from 'antd';
import { Banner } from "~/components/Banner";
const { Title } = Typography;
const { Header, Content, Footer, Sider } = Layout;

const sortPanelStyles: React.CSSProperties = { background: 'var(--ui-color-accent)', padding: '10px 20px' }

export const meta: V2_MetaFunction = () => {
    return [
        { title: "New Remix App" },
        { name: "description", content: "Welcome to Remix!" },
    ];
};

const items: CollapseProps['items'] = [
    {
        key: '1',
        label: 'Occassion',
        children: <p>My filters</p>,
    },
    {
        key: '2',
        label: 'Budget',
        children: <p>My filters</p>,
    },
    {
        key: '3',
        label: 'Filter 3',
        children: <p>My filters</p>,
    },
];



const SortResultsPanel = () => {

    return <div style={sortPanelStyles}>
        <Row justify={'space-between'}>
            <Col>Sort By: </Col>
        </Row>
    </div>
}

export default function PhotographyPage() {
    return (
        <div className="container">
            <Space direction="vertical" size={'large'}>
                <Banner />
                <Layout>
                    <Sider className="filters-section-wrapper"
                        breakpoint="lg"
                        collapsedWidth="0"
                    >
                        <div className="section-title">Filter:</div>
                        <Collapse defaultActiveKey={['1']} ghost items={items} />
                    </Sider>
                    <Layout style={{ padding: '0 20px' }}>
                        <Space direction="vertical" size={'large'}>
                            <Content>
                                <Title>PRODUCTS</Title>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </Content>
                            <SortResultsPanel />
                        </Space>
                    </Layout>
                </Layout>
            </Space>
        </div>
    );
}
