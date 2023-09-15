import type { V2_MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Col, Collapse, CollapseProps, Layout, Menu, Rate, Row, Space, Typography, theme } from 'antd';
import { Banner } from "~/components/Banner";
const { Title } = Typography;
const { Header, Content, Footer, Sider } = Layout;

const sortPanelStyles: React.CSSProperties = { background: 'var(--ui-color-accent)', padding: '10px 20px' }

const itemStyles: React.CSSProperties = { border: '1px solid var(--ui-color-black)' };
const itemThumbStyles: React.CSSProperties = { background: 'beige', borderRight: '1px solid var(--ui-color-black)', padding: '5px' }
const itemDataStyles: React.CSSProperties = { padding: '15px' };
const itemDataThumbSetStyles: React.CSSProperties = { borderTop: '1px solid var(--ui-color-black)', padding: '5px', borderRight: '1px solid var(--ui-color-black)', };
const itemDataWapperStyles: React.CSSProperties = { display: "flex", flexDirection: 'column', justifyContent: 'space-between', height: '100%' };


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

const Results = () => {
    const list: { name: string, imgSet: string[] }[] = new Array(3).fill({ name: 'Jessica', imgSet: [1, 2, 3, 4] });

    return <Row gutter={40}>
        {list.map((item, key) => <Col span={24} key={'profile' + key}>
            <div style={itemStyles}>
                <Row>
                    <Col span={8}>
                        <div style={itemThumbStyles}>
                            <img width={'100%'} src="https://tenpo.balcomsoft.com/wp-content/uploads/2023/07/Frame-1000001329.webp" />
                        </div>
                    </Col>
                    <Col span={16}>
                        <div style={itemDataWapperStyles}>
                            <div style={itemDataStyles}>
                                <Title level={3}>Jessica</Title>
                                <Rate allowHalf defaultValue={2.5} />
                            </div>
                            <Row >
                                {item.imgSet.map((imgThumb, kj) => <Col span={6} key={'thumb' + kj}>
                                    <div style={itemDataThumbSetStyles}>
                                        <img width={'100%'} src="https://homely-themes.myshopify.com/cdn/shop/files/13-02.jpg?v=1691401206&width=533" alt={imgThumb} />
                                    </div>
                                </Col>)}
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div >
        </Col >)}
    </Row >
}

export default function PhotographyPage() {
    return (
        <div className="container">
            <Space direction="vertical" size={'large'}>
                <Banner />
                <Row gutter={40}>
                    <Col sm={24} xs={24} md={0} lg={0} xl={0} xxl={0}>
                        <div className="filters-section-wrapper"
                        >
                            <div className="section-title">Filter:</div>
                        </div>
                    </Col>
                    <Col sm={0} xs={0} md={8} lg={6}>
                        <div className="filters-section-wrapper"
                        >
                            <div className="section-title">Filter:</div>
                            <Collapse defaultActiveKey={['1']} ghost items={items} />
                        </div>
                    </Col>
                    <Col sm={24} xs={24} md={16} lg={18}>
                        <Space direction="vertical" size={'large'}>
                            <Content>
                                <Title>PRODUCTS</Title>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </Content>
                            <SortResultsPanel />
                            <Results />
                        </Space>
                    </Col>
                </Row>
            </Space>
        </div>
    );
}
