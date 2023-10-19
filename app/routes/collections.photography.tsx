import type { LoaderArgs, V2_MetaFunction } from "@remix-run/node";
import { Outlet, useLoaderData, useLocation, useNavigate } from "@remix-run/react";
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Badge, Button, Checkbox, Col, Collapse, CollapseProps, Layout, Menu, Rate, Row, Select, Slider, Space, Tag, Typography, theme } from 'antd';
import { Banner, BannerVertical } from "~/components/Banner";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useEffect, useState } from "react";
const { Title } = Typography;
const { Header, Content, Footer, Sider } = Layout;

const sortPanelStyles: React.CSSProperties = { background: 'var(--ui-color-accent)', padding: '10px 20px', borderRadius: '4px' }

const itemStyles: React.CSSProperties = {};
const itemThumbStyles: React.CSSProperties = { padding: '0 40px', marginBottom: '-50px' }
const itemDataStyles: React.CSSProperties = { padding: '15px' };
const itemDataItemStyles: React.CSSProperties = { padding: '5px', };
const itemDataThumbSetStyles: React.CSSProperties = { width: '100%', height: '150px', objectFit: 'cover', cursor: 'pointer', borderRadius: '4px' };
const itemDataWapperStyles: React.CSSProperties = { display: "flex", flexDirection: 'column', justifyContent: 'space-between', height: '100%', background: '#f3f3f3', borderRadius: '10px', padding: '20px' };


export const meta: V2_MetaFunction = () => {
    return [
        { title: "New Remix App" },
        { name: "description", content: "Welcome to Remix!" },
    ];
};

type loaderData = {
    results: {
        id: string,
        name: string,
        portfolio: string[],
        rating: number,
        tag?: string
    }[]
};

export function loader({ params }: LoaderArgs): loaderData {

    return {
        results: [{
            id: '123',
            name: 'mahesh3113',
            portfolio: ['https://image.wedmegood.com/resized/1000X/uploads/member/435783/1696398061_279133354_1698789133795002_7258127304642091112_n.jpg?crop=12,206,1063,598',
                'https://image.wedmegood.com/resized/1000X/uploads/project/218134/1664817582_DSC_5042.JPG',
                'https://image.wedmegood.com/resized/1000X/uploads/member/2221128/1635168034_RAJ_3791_Edit.JPG',
                'https://image.wedmegood.com/resized/1000X/uploads/member/2221128/1635168215_RAJ_3980_Edit.JPG'
            ],
            rating: 4.2,
            tag: 'Value for money'
        }]
    }

}

const budgetMarks = {
    10: {
        label: '10k', style: {
            color: ' #8f8f8f',
            fontSize: '12px'
        }
    },
    20: {
        label: '25k', style: {
            color: ' #8f8f8f',
            fontSize: '12px'
        }
    },
    50: {
        label: '50k', style: {
            color: ' #8f8f8f',
            fontSize: '12px'
        }
    },
    80: {
        label: '80k',
        style: {
            color: ' #8f8f8f',
            fontSize: '12px'
        }
    },
    100: {
        label: 'upto 100k',
        style: {
            color: ' #8f8f8f',
            fontSize: '12px'
        }
    },
};

const SortResultsPanel = () => {

    return <div style={sortPanelStyles}>
        <Row align={'middle'}>
            <Col>Sort By: </Col>
            <Col>
                <Select
                    defaultValue="0"
                    bordered={false}
                    options={[
                        { value: '0', label: 'Price' },
                        { value: '1', label: 'Rating' },
                    ]}
                />
            </Col>
        </Row>
    </div>
}


const Photography = {
    Index: () => <div className="container">
        <Space direction="vertical" size={'large'}>
            <Banner />
            <Row gutter={[40, 40]}>
                <Photography.Filters />
                <Col sm={24} xs={24} md={16} lg={18}>
                    <Space direction="vertical" size={'large'}>
                        <Content>
                            <Title>Photographers in Banglore</Title>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </Content>
                        <SortResultsPanel />
                        <Photography.Results />
                    </Space>
                </Col>
            </Row>
        </Space>
    </div>,
    Filters: () => {
        const navigate = useNavigate();
        const location = useLocation();
        const [getCategory, setCategory] = useState<string[]>([]);

        useEffect(() => {
            const params = new URLSearchParams(location.search);
            setCategory(params.get('category')?.split(',') || []);
        }, []);

        function toggleCategoryItem(checked: boolean, value: string) {
            let list;
            if (checked) {
                list = [...getCategory, value];
            } else {
                list = [...getCategory.filter(x => x !== value)];
            }

            setCategory(list);

            const params = new URLSearchParams(location.search);
            params.set('category', list.join(','));
            navigate(`${location.pathname}?${params.toString()}`);
        }

        const filterOptionsList: CollapseProps['items'] = [
            {
                key: '1',
                label: <><Typography.Text strong>Occassion</Typography.Text> <Badge count={getCategory.length || 0} color='#faad14' /></>,
                children: <Space direction="vertical">
                    <Checkbox value={'w'} checked={getCategory.includes('w')} onChange={(e) => toggleCategoryItem(e?.target?.checked, e?.target?.value)}>Wedding</Checkbox>
                </Space>,
            },
            {
                key: '2',
                label: <Typography.Text strong>Budget</Typography.Text>,
                children: <Slider marks={budgetMarks} defaultValue={100} min={10} max={100} tooltip={{ formatter: null }} />,
            },
            {
                key: '3',
                label: 'Filter 3',
                children: <p>My filters</p>,
            },
        ];

        return <><Col sm={24} xs={24} md={0} lg={0} xl={0} xxl={0}>
            <div className="filters-section-wrapper"
            >
                <div className="section-title">Filter:</div>
            </div>
        </Col>
            <Col sm={0} xs={0} md={8} lg={6}>
                <div className="filters-section-wrapper _sticky-top"
                >
                    <div className="section-title">Filter:</div>
                    <Collapse defaultActiveKey={['1']} ghost items={filterOptionsList} />
                </div>
            </Col></>;
    },
    Results: () => {
        const data = useLoaderData<loaderData>();
        const navigate = useNavigate();

        return <Row gutter={[40, 40]}>
            {data.results?.map(item => <Col span={24} key={'profile' + item.id}>
                <div style={itemStyles}>
                    <div style={itemThumbStyles}>
                        <Row justify={'end'}>
                            <Col xs={6} sm={6} md={3} lg={3}>
                                <img width={'100%'} style={{ borderRadius: '50%' }} src="/assets/user-avatar.jpg" />
                            </Col>
                        </Row>
                    </div>
                    <div style={itemDataWapperStyles}>
                        <div style={itemDataStyles}>
                            <Space size={'middle'}>
                                <Title level={3}>@{item.name}</Title>
                                {item.tag && <Tag color="green">{item.tag}</Tag>}
                            </Space>
                            <Row justify={'space-between'} gutter={[20, 20]}>
                                <Col>
                                    <Rate allowHalf disabled defaultValue={item.rating} /> {item.rating} <Typography.Text type="secondary">(23 Reviews)</Typography.Text>
                                </Col>
                                <Col>
                                    <Button type="primary" shape="round" onClick={() => navigate('/profile/' + item.id)} >
                                        View Profile
                                    </Button>
                                </Col>
                            </Row>
                        </div>
                        <PhotoProvider>
                            <Row >
                                {item.portfolio.map((imgThumb, kj) => <Col span={6} key={'thumb' + kj}>
                                    <PhotoView src={imgThumb}><div style={itemDataItemStyles}>
                                        <img style={itemDataThumbSetStyles} src={imgThumb} alt={imgThumb} />
                                    </div>
                                    </PhotoView>
                                </Col>)}
                            </Row>
                        </PhotoProvider>
                    </div>
                </div >
            </Col >)}
        </Row >
    }
}


export default Photography.Index;
