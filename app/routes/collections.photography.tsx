import { defer, TypedDeferredData, type LoaderArgs, type V2_MetaFunction } from "@remix-run/node";
import { Await, Outlet, useLoaderData, useLocation, useNavigate } from "@remix-run/react";
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Badge, Button, Checkbox, Col, Collapse, CollapseProps, Layout, Menu, Rate, Row, Select, Skeleton, Slider, Space, Tag, Typography, theme } from 'antd';
import { Banner, BannerVertical } from "~/components/Banner";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Suspense, useEffect, useState } from "react";
import { db } from "~/utils/database";
import InfiniteScroll from "react-infinite-scroll-component";
import { serviceGroup } from "@prisma/client";
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

type Vendor = {
    id: string,
    name: string,
    portfolio: string[],
    rating: number,
    tag?: string
};

type Filter = {
    category: serviceGroup[]
}

type loaderData = {
    total: number,
    loadMore: boolean,
    page: number,
    results: Vendor[],
    filters: Filter
};

export async function loader({ request }: LoaderArgs): Promise<TypedDeferredData<any>> {
    const url = new URL(request.url);
    const params = url.searchParams;
    const page = parseInt(params.get('page') || '') || 0;
    const limit = 20;
    const totalCount = await db.vendors.count();
    const loadMore = (page * limit) + limit <= totalCount;

    const result = new Promise<Vendor[]>(async function (resolve) {
        const data = await db.vendors.findMany({
            skip: page * limit,
            take: limit
        });


        const rating = 4;
        const tag = 'Popular';
        const portfolio = ['https://image.wedmegood.com/resized/1000X/uploads/member/435783/1696398061_279133354_1698789133795002_7258127304642091112_n.jpg?crop=12,206,1063,598',
            'https://image.wedmegood.com/resized/1000X/uploads/project/218134/1664817582_DSC_5042.JPG',
            'https://image.wedmegood.com/resized/1000X/uploads/member/2221128/1635168034_RAJ_3791_Edit.JPG',
            'https://image.wedmegood.com/resized/1000X/uploads/member/2221128/1635168215_RAJ_3980_Edit.JPG'
        ];

        resolve(data.map(x => ({
            id: x.username,
            name: x.username,
            portfolio,
            rating,
            tag
        })))
    });


    const filters = new Promise<Filter>(async function (resolve) {
        const category = await db.serviceGroup.findMany({
            orderBy: {
                name: 'asc'
            }
        })
        resolve({
            category
        });
    });



    return defer({
        total: totalCount,
        loadMore,
        results: result,
        filters,
        page
    });

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
    Index: () => {
        const data = useLoaderData<loaderData>();

        return <div className="container">
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
                            <Suspense fallback={<Skeleton active avatar paragraph={{ rows: 4 }} />}>
                                <Await resolve={data?.results}>
                                    {vendors => <Photography.Results vendors={vendors} />}
                                </Await>
                            </Suspense>
                        </Space>
                    </Col>
                </Row>
            </Space>
        </div>;
    },
    Filters: () => {
        const data = useLoaderData<loaderData>();
        const navigate = useNavigate();
        const location = useLocation();
        const [getCategory, setCategory] = useState<string[]>([]);

        useEffect(() => {
            const params = new URLSearchParams(location.search);
            setCategory(params.get('category')?.split(',').filter(x => !!x) || []);
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
            navigate(`${location.pathname}?${params.toString()}`, { preventScrollReset: true });
        }

        function filterItems(filters: Filter) {
            const filterOptionsList: CollapseProps['items'] = [
                {
                    key: '1',
                    label: <><Typography.Text strong>Occassion</Typography.Text> <Badge count={getCategory.length || 0} showZero={false} color='#faad14' /></>,
                    children: <Space direction="vertical">
                        {filters.category.map(item => <Checkbox value={item.id} checked={getCategory.includes(item.id)} onChange={(e) => toggleCategoryItem(e?.target?.checked, e?.target?.value)}>{item.name}</Checkbox>)}
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

            return filterOptionsList;
        }

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
                    <Suspense fallback={<Skeleton active />}>
                        <Await resolve={data.filters}>
                            {(filters: any) => <Collapse defaultActiveKey={['1']} ghost items={filterItems(filters)} />}
                        </Await>
                    </Suspense>
                </div>
            </Col></>;
    },
    Results: ({ vendors }: { vendors: Vendor[] }) => {
        const data = useLoaderData<loaderData>();
        const navigate = useNavigate();
        const location = useLocation();
        const [result, setResult] = useState<Vendor[]>([]);
        const [loadMore, setLoadMore] = useState<boolean>(true);

        useEffect(() => {
            if (!vendors) {
                return;
            }

            setResult(data.page === 0 ? vendors : result.concat(vendors));
            setLoadMore(data.loadMore);

        }, [vendors]);

        function loadNextPage() {
            const searchParams = new URLSearchParams();
            searchParams.set('page', '' + (data.page + 1));
            navigate(location.pathname + '?' + searchParams.toString(), { preventScrollReset: true });
        }


        return <Row gutter={[40, 40]}>
            <InfiniteScroll
                dataLength={result.length}
                next={loadNextPage}
                hasMore={loadMore}
                loader={<div style={{ padding: '40px' }}><Skeleton active avatar paragraph={{ rows: 4 }} /></div>}
                endMessage={
                    <div style={{ textAlign: 'center', padding: '40px' }}>
                        End of results.
                    </div>
                }
            >
                {result?.map(item => <Col span={24} key={'profile' + item.id}>
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
            </InfiniteScroll>
        </Row>
    }
}


export default Photography.Index;
