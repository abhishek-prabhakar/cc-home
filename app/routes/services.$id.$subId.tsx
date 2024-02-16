import {
    defer,
    TypedDeferredData,
    type LoaderArgs,
    type V2_MetaFunction,
} from "@remix-run/node";
import {
    Await,
    Link,
    Outlet,
    useLoaderData,
    useLocation,
    useNavigate,
} from "@remix-run/react";
import {
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from "@ant-design/icons";
import {
    Avatar,
    Badge,
    Button,
    Card,
    Checkbox,
    Col,
    Collapse,
    CollapseProps,
    Divider,
    Layout,
    Menu,
    Rate,
    Row,
    Select,
    Skeleton,
    Slider,
    Space,
    Tag,
    Typography,
    theme,
} from "antd";
import Banner from "~/components/Banner";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Suspense, useEffect, useState } from "react";
import { db } from "~/utils/database";
import InfiniteScroll from "react-infinite-scroll-component";
import { ServiceGroup } from "@prisma/client";
import { concat, forkJoin, of, switchMap } from "rxjs";
import { PATH } from "~/path.data";
import Routes from "~/routes.data";
const { Title } = Typography;
const { Header, Content, Footer, Sider } = Layout;

const sortPanelStyles: React.CSSProperties = {
    background: "var(--ui-color-accent)",
    padding: "10px 20px",
    borderRadius: "4px",
};

const itemStyles: React.CSSProperties = {};
const itemThumbStyles: React.CSSProperties = {
    padding: "0 40px",
    marginBottom: "-50px",
};
const itemDataStyles: React.CSSProperties = { padding: "15px" };
const itemDataItemStyles: React.CSSProperties = { padding: "5px" };
const itemDataThumbSetStyles: React.CSSProperties = {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    cursor: "pointer",
    borderRadius: "4px",
};
const itemDataWapperStyles: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    background: "#f3f3f3",
    borderRadius: "10px",
    padding: "20px",
};

export const meta: V2_MetaFunction = () => {
    return [
        { title: "Celebria Collective" },
        { name: "description", content: "Find your Pefect vendor" },
    ];
};

type Vendor = {
    id: string;
    name: string;
    portfolio: string[];
    rating: number;
    tag?: string;
    profileImg: string;
    services: string[];
};

type Filter = {
    name: string;
    category: { id: string; name: string }[];
};
type MetaData = {
    name: string;
    id: string;
    description: string;
};
type Result = {
    data: Vendor[];
    loadMore: boolean;
};
type loaderData = {
    page: number;
    result: Result;
    filters: Filter[];
    meta: MetaData;
};

export async function loader({
    request,
    params,
}: LoaderArgs) {
    const pageId = params.id;
    const categoryId = params.subId;

    const url = new URL(request.url);
    const searchParams = url.searchParams;
    const page = parseInt(searchParams.get("page") || "") || 0;
    const limit = 20;

    const metaInfo = await db.vendorType.findFirstOrThrow({
        where: {
            keyName: pageId,
        },
        select: {
            id: true,
            name: true,
            description: true,
        },
    });

    const result = new Promise<Result>(function (resolve) {
        db.vendorType
            .findFirstOrThrow({
                where: {
                    keyName: pageId,
                },
                select: {
                    id: true,
                    serviceGroup: {
                        where: {
                            id: categoryId,
                        },
                        select: {
                            id: true,
                        },
                    },
                },
            })
            .then((res) => {
                const serviceGrpIds = res.serviceGroup.map((x) => x.id);
                forkJoin({
                    count: db.vendor.count({
                        where: {
                            isActive: true,
                            categoryId: res.id,
                            VendorServiceGroup: {
                                some: {
                                    groupId: {
                                        in: serviceGrpIds,
                                    },
                                },
                            },
                        },
                    }),
                    data: db.vendor.findMany({
                        skip: page * limit,
                        take: limit,
                        select: {
                            id: true,
                            username: true,
                            profileImageName: true,
                            services: {
                                select: {
                                    service: {
                                        select: {
                                            name: true,
                                        },
                                    },
                                },
                                where: {
                                    serviceGroup: {
                                        groupId: {
                                            in: serviceGrpIds,
                                        },
                                    },
                                },
                                take: 5,
                            },
                            vendorPortfolio: {
                                select: {
                                    fileName: true,
                                    fileType: true,
                                },
                                where: {
                                    serviceGroupId: categoryId,
                                },
                                take: 4
                            },
                        },
                        where: {
                            categoryId: res.id,
                            isActive: true,
                            VendorServiceGroup: {
                                some: {
                                    groupId: {
                                        in: serviceGrpIds,
                                    },
                                },
                            },
                        },
                    }),
                }).subscribe((r) => {
                    const rating = 4;
                    const tag = "Popular";

                    const loadMore = page * limit + limit <= r.count;
                    resolve({
                        data: r.data.map((x) => ({
                            id: x.username,
                            name: x.username,
                            portfolio: x.vendorPortfolio.map((x) =>
                                x.fileName ? PATH.RESOURCE_URL + x.fileName : ""
                            ),
                            rating,
                            tag,
                            profileImg: x.profileImageName
                                ? PATH.RESOURCE_URL + x.profileImageName
                                : PATH.AVATAR_PLACEHOLDER,
                            services: x.services.map((x) => x.service.name),
                        })),
                        loadMore,
                    });
                });
            });
    });

    const data = new Promise<{
        name: string;
    } | null
    >(function (resolve) {
        db.serviceGroup.findFirst({
            where: {
                id: categoryId
            },
            select: {
                name: true
            }
        }).then(r => resolve(r));
    });

    return defer({
        data,
        result,
        page,
        meta: { ...metaInfo, categoryId },
    });
}

const SortResultsPanel = () => {
    return (
        <div style={sortPanelStyles}>
            <Row align={"middle"}>
                <Col>Sort By: </Col>
                <Col>
                    <Select
                        defaultValue="0"
                        bordered={false}
                        options={[
                            { value: "0", label: "Price" },
                            { value: "1", label: "Rating" },
                        ]}
                    />
                </Col>
            </Row>
        </div>
    );
};

const Photography = {
    Index: () => {
        const data = useLoaderData<typeof loader>();

        return (
            <div className="container">
                <Space direction="vertical" size={"large"} style={{ width: "100%" }}>
                    <Row gutter={[40, 40]}>
                        <Col sm={24} xs={24} md={16} lg={18}>
                            <Space
                                direction="vertical"
                                size={"large"}
                                style={{ width: "100%" }}
                            >
                                <Content>
                                    <Typography.Text type="secondary"><Tag color="magenta">{data.meta.name}</Tag> in Banglore</Typography.Text>
                                    <Suspense>
                                        <Await resolve={data.data}>
                                            {response => <Title style={{ marginTop: '12px' }} level={3}>{response?.name}</Title>}
                                        </Await>
                                    </Suspense>
                                    <p>{data.meta.description}</p>
                                </Content>
                                <SortResultsPanel />
                                <Suspense
                                    fallback={<Skeleton active avatar paragraph={{ rows: 4 }} />}
                                >
                                    <Await resolve={data?.result}>
                                        {(response) => (
                                            <Photography.Results
                                                categoryId={data.meta.categoryId}
                                                vendors={response.data}
                                                loadMore={response.loadMore}
                                            />
                                        )}
                                    </Await>
                                </Suspense>
                            </Space>
                        </Col>
                        <Col sm={24} xs={24} md={8} lg={6}>
                            <Card style={{ borderColor: '#c6c3c3', borderRadius: '20px' }}>
                                <Typography.Title className="_underline" level={3}>Hiring<br />Without the<br />Headache</Typography.Title>

                                <img style={{ maxWidth: '100%' }} src="/assets/web-thumb1.jpg" />
                            </Card>
                        </Col>
                    </Row>
                </Space>
            </div>
        );
    },
    Results: ({
        vendors,
        loadMore,
        categoryId
    }: {
        categoryId?: string;
        vendors: Vendor[];
        loadMore: boolean;
    }) => {
        const data = useLoaderData<loaderData>();
        const navigate = useNavigate();
        const location = useLocation();
        const [result, setResult] = useState<Vendor[]>([]);

        useEffect(() => {
            if (!vendors) {
                return;
            }

            setResult(data.page === 0 ? vendors : result.concat(vendors));
        }, [vendors]);

        function loadNextPage() {
            const searchParams = new URLSearchParams();
            searchParams.set("page", "" + (data.page + 1));
            navigate(location.pathname + "?" + searchParams.toString(), {
                preventScrollReset: true,
            });
        }

        return (
            <InfiniteScroll
                dataLength={result.length}
                next={loadNextPage}
                hasMore={loadMore}
                loader={
                    <div style={{ padding: "40px" }}>
                        <Skeleton active avatar paragraph={{ rows: 4 }} />
                    </div>
                }
                endMessage={
                    <div style={{ textAlign: "center", padding: "40px" }}>
                        End of results.
                    </div>
                }
            >
                {" "}
                <Row gutter={[0, 40]}>
                    {result?.map((item) => (
                        <Col span={24} key={"profile" + item.id}>
                            <div style={itemStyles}>
                                <div style={itemThumbStyles}>
                                    <Row justify={"end"}>
                                        <Col xs={6} sm={6} md={3} lg={3}>
                                            <Avatar
                                                size={{
                                                    xs: 100,
                                                    sm: 100,
                                                    md: 100,
                                                    lg: 120,
                                                    xl: 120,
                                                    xxl: 120,
                                                }}
                                                src={item.profileImg}
                                            />
                                        </Col>
                                    </Row>
                                </div>
                                <div style={itemDataWapperStyles}>
                                    <div style={itemDataStyles}>
                                        <Space size={'middle'}>
                                            <Title level={3}>@{item.name}</Title>
                                            {item.tag && <Tag color="green">{item.tag}</Tag>}
                                        </Space>
                                        <Row justify={"space-between"} gutter={[20, 20]}>
                                            <Col>
                                                <Rate allowHalf disabled defaultValue={item.rating} />{" "}
                                                {item.rating}{" "}
                                                <Typography.Text type="secondary">
                                                    (23 Reviews)
                                                </Typography.Text>
                                            </Col>
                                            <Col>
                                                <Button
                                                    type="primary"
                                                    shape="round"
                                                    onClick={() => navigate(Routes.VendorProfileWithService.replace(':id', item.id).replace(':sGrpId', categoryId || ''))}
                                                >
                                                    View Profile
                                                </Button>
                                            </Col>
                                        </Row>
                                    </div>
                                    <PhotoProvider>
                                        <Row>
                                            {item.portfolio.map((imgThumb, kj) => (
                                                <Col span={6} key={"thumb" + kj}>
                                                    <PhotoView src={imgThumb}>
                                                        <div style={itemDataItemStyles}>
                                                            <img
                                                                style={itemDataThumbSetStyles}
                                                                src={imgThumb}
                                                                alt={imgThumb}
                                                            />
                                                        </div>
                                                    </PhotoView>
                                                </Col>
                                            ))}
                                        </Row>
                                    </PhotoProvider>
                                    <div style={{ padding: "20px 5px" }}>
                                        <Typography.Text strong>Services:</Typography.Text>{" "}
                                        {item.services.map((x, index) => (
                                            <Tag key={"tag" + index}>{x}</Tag>
                                        ))}{" "}
                                        <Link to={Routes.VendorProfileWithService.replace(':id', item.id).replace(':sGrpId', categoryId || '')}>View all</Link>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </InfiniteScroll>
        );
    },
};

export default Photography.Index;
