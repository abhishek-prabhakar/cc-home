import {
  TypedDeferredData,
  defer,
  type LoaderArgs,
  type V2_MetaFunction,
} from "@remix-run/node";
import {
  Await,
  Link,
  useLoaderData,
  useLocation,
  useNavigate,
} from "@remix-run/react";
import {
  Avatar,
  Badge,
  Checkbox,
  Col,
  Collapse,
  CollapseProps,
  Layout,
  Rate,
  Row,
  Select,
  Skeleton,
  Space,
  Tag,
  Typography,
} from "antd";
import React, { Suspense, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { forkJoin, of, switchMap } from "rxjs";
import { Banner } from "~/components/Banner";
import { PATH } from "~/path.data";
import { db } from "~/utils/database";
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
const itemDataItemStyles: React.CSSProperties = {
  height: "200px",
  overflow: "hidden",
};

const itemDataItemStyles1: React.CSSProperties = {
  height: "200px",
  overflow: "hidden",
};
const itemDataThumbSetStyles: React.CSSProperties = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  cursor: "pointer",
  borderRadius: "4px",
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
}: LoaderArgs): Promise<TypedDeferredData<any>> {
  const pageId = params.id;

  const url = new URL(request.url);
  const searchParams = url.searchParams;
  const page = parseInt(searchParams.get("page") || "") || 0;
  let categoryIds = searchParams
    .get("category")
    ?.toString()
    ?.split(",")
    .filter((x) => x);
  const limit = 20;

  if (!categoryIds?.length) {
    categoryIds = undefined;
  }
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
              id: {
                in: categoryIds,
              },
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
                  serviceGroupId: {
                    in: categoryIds ? serviceGrpIds : undefined,
                  },
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

  const filters = new Promise<Filter[]>(function (resolve) {
    of(true)
      .pipe(
        switchMap((_) =>
          db.vendorType.findFirstOrThrow({
            where: {
              keyName: pageId,
            },
          })
        ),
        switchMap((res) => {
          return forkJoin({
            sorted: db.serviceGroupType.findMany({
              select: {
                name: true,
                ServiceGroup: {
                  orderBy: {
                    name: "asc",
                  },
                  select: {
                    id: true,
                    name: true,
                  },
                  where: {
                    vendorTypeId: res.id,
                  },
                },
              },
              where: {
                ServiceGroup: {
                  some: {
                    vendorTypeId: res.id,
                  },
                },
              },
            }),
            unsorted: db.serviceGroup.findMany({
              orderBy: {
                name: "asc",
              },
              select: {
                id: true,
                name: true,
              },
              where: {
                vendorTypeId: res.id,
                groupTypeId: {
                  in: undefined || null,
                },
              },
            }),
          });
        })
      )
      .subscribe((res) => {
        resolve(
          res.sorted
            .map((r) => ({
              name: r.name,
              category: r.ServiceGroup,
            }))
            .concat([{ name: "Other services", category: res.unsorted }])
        );
      });
  });

  return defer({
    result,
    filters,
    page,
    meta: metaInfo,
  });
}

const budgetMarks = {
  10: {
    label: "10k",
    style: {
      color: " #8f8f8f",
      fontSize: "12px",
    },
  },
  20: {
    label: "25k",
    style: {
      color: " #8f8f8f",
      fontSize: "12px",
    },
  },
  50: {
    label: "50k",
    style: {
      color: " #8f8f8f",
      fontSize: "12px",
    },
  },
  80: {
    label: "80k",
    style: {
      color: " #8f8f8f",
      fontSize: "12px",
    },
  },
  100: {
    label: "upto 100k",
    style: {
      color: " #8f8f8f",
      fontSize: "12px",
    },
  },
};

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

const TwoImageView = ({
  list,
  profileId,
}: {
  list: string[];
  profileId: string;
}) => {
  return (
    <>
      <Col
        style={{ height: "inherit", overflow: "hidden" }}
        span={12}
        key={"thumb" + 1}
      >
        <PhotoView src={list[0]}>
          <img style={itemDataThumbSetStyles} src={list[0]} alt={list[0]} />
        </PhotoView>
      </Col>
      <Col style={{ height: "inherit" }} span={6} key={"thumb" + 2}>
        <Row
          style={{
            gap: "5px",
            flexDirection: "column",
            height: "inherit",
          }}
        >
          <Col
            style={{
              overflow: "hidden",
              flex: 1,
            }}
          >
            <PhotoView src={list[1]}>
              <img style={itemDataThumbSetStyles} src={list[1]} alt={list[1]} />
            </PhotoView>
          </Col>
          <Col
            style={{
              overflow: "hidden",
              flex: 1,
            }}
          >
            <div
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                background: "#80808080",
                cursor: "pointer",
              }}
              onClick={() => navigate("/profile/" + profileId)}
            >
              View Profile
            </div>
            {list.length > 2 && (
              <PhotoView src={list[2]}>
                <img
                  style={itemDataThumbSetStyles}
                  src={list[2]}
                  alt={list[2]}
                />
              </PhotoView>
            )}
          </Col>
        </Row>
      </Col>
    </>
  );
};

const ThreeImageView = ({
  list,
  profileId,
}: {
  list: string[];
  profileId: string;
}) => {
  const navigate = useNavigate();
  return (
    <>
      <Col
        span={9}
        style={{ height: "inherit", overflow: "hidden" }}
        key={"thumb" + 1}
      >
        <PhotoView src={list[0]}>
          <img style={itemDataThumbSetStyles} src={list[0]} alt={list[0]} />
        </PhotoView>
      </Col>
      <Col
        span={9}
        style={{ height: "inherit", overflow: "hidden" }}
        key={"thumb" + 2}
      >
        <PhotoView src={list[1]}>
          <img style={itemDataThumbSetStyles} src={list[1]} alt={list[1]} />
        </PhotoView>
      </Col>
      <Col style={{ height: "inherit" }} span={6} key={"thumb" + 3}>
        <Row
          style={{
            gap: "5px",
            flexDirection: "column",
            height: "inherit",
          }}
        >
          <Col
            style={{
              overflow: "hidden",
              flex: 1,
            }}
          >
            <PhotoView src={list[2]}>
              <img style={itemDataThumbSetStyles} src={list[2]} alt={list[2]} />
            </PhotoView>
          </Col>
          <Col
            style={{
              overflow: "hidden",
              flex: 1,
            }}
          >
            <div
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                background: "#80808080",
                cursor: "pointer",
              }}
              onClick={() => navigate("/profile/" + profileId)}
            >
              View Profile
            </div>
            {/* Removed photo */}
            {list.length > 3 && (
              <PhotoView src={list[3]}>
                <img
                  style={itemDataThumbSetStyles}
                  src={list[3]}
                  alt={list[3]}
                />
              </PhotoView>
            )}
          </Col>
        </Row>
      </Col>
    </>
  );
};

const FourImageView = ({
  list,
  profileId,
}: {
  list: string[];
  profileId: string;
}) => {
  const navigate = useNavigate();
  return (
    <>
      <Col
        span={12}
        style={{ height: "inherit", overflow: "hidden" }}
        key={"thumb" + 1}
      >
        <PhotoView src={list[0]}>
          <img style={itemDataThumbSetStyles} src={list[0]} alt={list[0]} />
        </PhotoView>
      </Col>
      <Col style={{ height: "inherit" }} span={6} key={"thumb" + 2}>
        <Row
          style={{
            gap: "5px",
            flexDirection: "column",
            height: "inherit",
          }}
        >
          <Col
            style={{
              overflow: "hidden",
              flex: 1,
            }}
          >
            <PhotoView src={list[1]}>
              <img style={itemDataThumbSetStyles} src={list[1]} alt={list[1]} />
            </PhotoView>
          </Col>
          <Col
            style={{
              overflow: "hidden",
              flex: 1,
            }}
          >
            <PhotoView src={list[2]}>
              <img style={itemDataThumbSetStyles} src={list[2]} alt={list[2]} />
            </PhotoView>
          </Col>
        </Row>
      </Col>
      <Col style={{ height: "inherit" }} span={6} key={"thumb" + 3}>
        <Row
          style={{
            gap: "5px",
            flexDirection: "column",
            height: "inherit",
          }}
        >
          <Col
            style={{
              overflow: "hidden",
              flex: 1,
            }}
          >
            <PhotoView src={list[3]}>
              <img style={itemDataThumbSetStyles} src={list[3]} alt={list[3]} />
            </PhotoView>
          </Col>
          <Col
            style={{
              overflow: "hidden",
              position: "relative",
              flex: 1,
            }}
          >
            <div
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                background: "#80808080",
                cursor: "pointer",
              }}
              onClick={() => navigate("/profile/" + profileId)}
            >
              View Profile
            </div>
            {/* Removed photo */}
            {list.length > 4 && (
              <PhotoView src={list[4]}>
                <img
                  style={itemDataThumbSetStyles}
                  src={list[4]}
                  alt={list[4]}
                />
              </PhotoView>
            )}
          </Col>
        </Row>
      </Col>
    </>
  );
};

const Photography = {
  Index: () => {
    const data = useLoaderData<loaderData>();

    return (
      <div className="container">
        <Space direction="vertical" size={"large"} style={{ width: "100%" }}>
          <Banner />
          <Row gutter={[40, 40]}>
            <Photography.Filters />
            <Col sm={24} xs={24} md={16} lg={18}>
              <Space
                direction="vertical"
                size={"large"}
                style={{ width: "100%" }}
              >
                <Content>
                  <Title level={3}>{data.meta.name} in Banglore</Title>
                  <p>{data.meta.description}</p>
                </Content>
                <SortResultsPanel />
                <Suspense
                  fallback={<Skeleton active avatar paragraph={{ rows: 4 }} />}
                >
                  <Await resolve={data?.result}>
                    {(response) => (
                      <Photography.Results
                        vendors={response.data}
                        loadMore={response.loadMore}
                      />
                    )}
                  </Await>
                </Suspense>
              </Space>
            </Col>
          </Row>
        </Space>
      </div>
    );
  },
  Filters: () => {
    const data = useLoaderData<loaderData>();
    const navigate = useNavigate();
    const location = useLocation();
    const [getCategory, setCategory] = useState<string[]>([]);

    useEffect(() => {
      const params = new URLSearchParams(location.search);
      setCategory(
        params
          .get("category")
          ?.split(",")
          .filter((x) => !!x) || []
      );
    }, []);

    function toggleCategoryItem(checked: boolean, value: string) {
      let list;
      if (checked) {
        list = [...getCategory, value];
      } else {
        list = [...getCategory.filter((x) => x !== value)];
      }

      setCategory(list);

      const params = new URLSearchParams(location.search);
      params.set("category", list.join(","));
      params.set("page", "0");
      navigate(`${location.pathname}?${params.toString()}`, {
        preventScrollReset: true,
      });
    }

    function getSelectedCatgoryCount(
      categoryList: {
        id: string;
        name: string;
      }[]
    ) {
      const categoryIdList = categoryList.map((value) => value.id);
      const filteredArray = getCategory.filter((value) =>
        categoryIdList.includes(value)
      );
      return filteredArray.length;
    }

    function filterItems(filters: Filter[]) {
      const filterOptionsList: CollapseProps["items"] = filters.map(
        (filter, index) => {
          const selectedCategoryCount = getSelectedCatgoryCount(
            filter.category
          );
          return {
            key: index,
            label: (
              <>
                <Typography.Text strong>{filter.name}</Typography.Text>{" "}
                {selectedCategoryCount !== 0 ? (
                  <Badge
                    count={selectedCategoryCount}
                    showZero={false}
                    color="#faad14"
                  />
                ) : null}
              </>
            ),
            children: (
              <Space direction="vertical">
                {filter.category.map((item) => (
                  <Checkbox
                    key={item.id}
                    value={item.id}
                    checked={getCategory.includes(item.id)}
                    className=""
                    onChange={(e) =>
                      toggleCategoryItem(e?.target?.checked, e?.target?.value)
                    }
                    //style={{ display: "flex" }}
                  >
                    {item.name}
                  </Checkbox>
                ))}
                {!filter.category?.length && <div>Unavailable right now.</div>}
              </Space>
            ),
          };
        }
      );

      //     {
      //         key: '2',
      //         label: <Typography.Text strong>Budget</Typography.Text>,
      //         children: <Slider marks={budgetMarks} defaultValue={100} min={10} max={100} tooltip={{ formatter: null }} />,
      //     },
      //     {
      //         key: '3',
      //         label: 'Filter 3',
      //         children: <p>My filters</p>,
      //     },
      // ];

      return filterOptionsList;
    }

    return (
      <>
        <Col sm={24} xs={24} md={0} lg={0} xl={0} xxl={0}>
          <div className="filters-section-wrapper">
            <div className="section-title">Filter:</div>
          </div>
        </Col>
        <Col sm={0} xs={0} md={8} lg={6}>
          <div className="filters-section-wrapper _sticky-top">
            <div className="section-title">Filter:</div>
            <Suspense fallback={<Skeleton active />}>
              <Await resolve={data.filters}>
                {(filters) => (
                  <Collapse
                    defaultActiveKey={["x"]}
                    ghost
                    items={filterItems(filters)}
                  />
                )}
              </Await>
            </Suspense>
          </div>
        </Col>
      </>
    );
  },
  Results: ({
    vendors,
    loadMore,
  }: {
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

    function getImageView(list: string[], profileId: string, rowIndex: number) {
      let count = list.length;
      if (count === 1) {
        return (
          <>
            <Col style={{ height: "inherit" }} span={12} key={"thumb" + 1}>
              <PhotoView src={list[0]}>
                <img
                  style={itemDataThumbSetStyles}
                  src={list[0]}
                  alt={list[0]}
                />
              </PhotoView>
            </Col>
            <Col style={{ height: "inherit" }} span={6} key={"thumb" + 2}>
              <div
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  background: "#80808080",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/profile/" + profileId)}
              >
                View Profile
              </div>
              {/* Removed photo */}
            </Col>
          </>
        );
      }
      if (count === 2) {
        return <TwoImageView list={list} profileId={profileId} />;
      }

      if (count === 3) {
        return <ThreeImageView list={list} profileId={profileId} />;
      }
      if (count === 4) {
        return <FourImageView list={list} profileId={profileId} />;
      }

      if (count >= 5) {
        // use remainder to decide the view to be shown
        const remainder = rowIndex % 3;
        if (remainder === 0) {
          return <TwoImageView list={list} profileId={profileId} />;
        }
        if (remainder === 1) {
          return <ThreeImageView list={list} profileId={profileId} />;
        }
        if (remainder === 2) {
          return <FourImageView list={list} profileId={profileId} />;
        }
      }
      return (
        <Col
          style={{
            height: "inherit",
          }}
          key={"no-image"}
        >
          <div
            style={{
              width: "100px",
              height: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              background: "#80808080",
              cursor: "pointer",
            }}
            onClick={() => navigate("/profile/" + profileId)}
          >
            View Profile
          </div>
        </Col>
      );
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
        {result?.map((item, index) => (
          <Row style={{ marginBottom: "30px" }} key={"profile" + item.id}>
            <Col span={12}>
              <Row>
                <Avatar
                  size={{
                    xs: 40,
                    sm: 40,
                    md: 40,
                    lg: 60,
                    xl: 60,
                    xxl: 60,
                  }}
                  src={item.profileImg}
                  onClick={() => navigate("/profile/" + item.id)}
                  style={{ cursor: "pointer" }}
                />
              </Row>
              <Space size={"middle"}>
                <Title level={4}>{item.name}</Title>
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
              </Row>
              {item.services?.length !== 0 && (
                <div style={{ padding: "1px 5px" }}>
                  <Typography.Text strong>Services:</Typography.Text>{" "}
                  {item.services.map((x, index) => (
                    <Tag key={"tag" + index}>{x}</Tag>
                  ))}{" "}
                  <Link to={"/profile/" + item.id}>View Profile</Link>
                </div>
              )}
            </Col>
            <Col span={12}>
              <PhotoProvider>
                <Row gutter={5} style={{ height: "160px" }} justify={"end"}>
                  {getImageView(item.portfolio, item.id, index)}
                </Row>
              </PhotoProvider>
            </Col>
          </Row>
        ))}
      </InfiniteScroll>
    );
  },
};

export default Photography.Index;
