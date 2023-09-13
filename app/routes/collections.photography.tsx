import type { V2_MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Collapse, CollapseProps, Layout, Menu, Typography, theme } from 'antd';
const { Title } = Typography;
const { Header, Content, Footer, Sider } = Layout;



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
        label: 'This is panel header 3',
        children: <p>My filters</p>,
    },
];

export default function PhotographyPage() {
    return (
        <div className="container">
            <Layout>
                <Sider className="filters-section-wrapper"
                    breakpoint="lg"
                    collapsedWidth="0"
                >
                    <div className="section-title">Filter:</div>
                    <Collapse defaultActiveKey={['1']} ghost items={items} />
                </Sider>
                <Layout>
                    <Content>
                        <div>content</div>
                        <Title>PRODUCTS</Title>
                    </Content>
                </Layout>
            </Layout>
        </div>
    );
}
