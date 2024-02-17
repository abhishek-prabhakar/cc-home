import { Accordion, Avatar, Badge, Box, Button, Checkbox, Container, Flex, Grid, Group, Image, Rating, Select, Space, Stack, Text, Title } from "@mantine/core";
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
import React, { Suspense, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { forkJoin, of, switchMap } from "rxjs";
import Banner from "~/components/Banner";
import Skeleton from "~/components/Skeleton";
import { PATH } from "~/path.data";
import { db } from "~/utils/database";

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
  background: '#808080'
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
      <Flex align={'center'} gap={'sm'}>
        <Text c="dimmed" size="sm">Sort By:</Text>
        <Select
          defaultValue="0"
          data={[
            { value: "0", label: "Price" },
            { value: "1", label: "Rating" },
          ]}
        />
      </Flex>
    </div>
  );
};

const Photography = {
  Index: () => {
    const data = useLoaderData<loaderData>();

    return (
      <Container size={'xl'} >
        <Stack gap={'lg'}>
          {/* <Banner.Default /> */}
          <Grid gutter={40}>
            <Photography.Filters />
            <Grid.Col span={{ base: 12, md: 8, lg: 9 }}>
              <Stack gap={'lg'}>
                <Stack>
                  <Title order={3}>{data.meta.name} in Banglore</Title>
                  <Text size="sm">{data.meta.description}</Text>
                </Stack>
                <SortResultsPanel />
                <Suspense
                  fallback={<Skeleton />}
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
              </Stack>
            </Grid.Col>
          </Grid>
        </Stack>
      </Container>
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
      const filterOptionsList = filters.map(
        (filter, index) => {
          const selectedCategoryCount = getSelectedCatgoryCount(
            filter.category
          );
          return <Accordion.Item value={filter.name}>
            <Accordion.Control>
              <Group justify="space-between" align="center">
                <Text fw={500}>{filter.name}</Text>{" "}
                {selectedCategoryCount !== 0 ? (
                  <Badge color="#faad14"
                  >{selectedCategoryCount}</Badge>
                ) : null}
              </Group>
            </Accordion.Control>
            <Accordion.Panel>
              <Stack>
                {filter.category.map((item) => (
                  <Checkbox
                    key={item.id}
                    label={item.name}
                    value={item.id}
                    checked={getCategory.includes(item.id)}
                    className=""
                    onChange={(e) =>
                      toggleCategoryItem(e?.target?.checked, e?.target?.value)
                    }
                  />
                ))}
                {!filter.category?.length && <div>Unavailable right now.</div>}
              </Stack>
            </Accordion.Panel>
          </Accordion.Item>
        });

      //     {
      //         key: '2',
      //         label: <Text strong>Budget</Text>,
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
        <Grid.Col span={{ base: 12 }} hiddenFrom="md">
          <div className="filters-section-wrapper">
            <div className="section-title">Filter:</div>
          </div>
        </Grid.Col>
        <Grid.Col span={{ md: 4, lg: 3 }} visibleFrom="md">
          <div className="filters-section-wrapper _sticky-top">
            <div className="section-title">Filter:</div>
            <Suspense fallback={<Skeleton />}>
              <Await resolve={data.filters}>
                {(filters) => (
                  <Accordion>
                    {filterItems(filters)}
                  </Accordion>
                )}
              </Await>
            </Suspense>
          </div>
        </Grid.Col>
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

    return (
      <InfiniteScroll
        dataLength={result.length}
        next={loadNextPage}
        hasMore={loadMore}
        loader={
          <div style={{ padding: "40px" }}>
            <Skeleton />
          </div>
        }
        endMessage={
          <div style={{ textAlign: "center", padding: "40px" }}>
            End of results.
          </div>
        }
      >
        <Stack gap={'xl'}>
          {result?.map((item, index) => (
            <Grid key={"profile" + item.id} gutter={0} align="end">
              <Grid.Col span={{ base: 12, md: 6 }}>
                <Grid gutter={'md'}>
                  <Grid.Col span={{ base: 'content' }}>
                    <Avatar
                      size={'xl'}
                      src={item.profileImg}
                      onClick={() => navigate("/profile/" + item.id)}
                      style={{ cursor: "pointer" }}
                    />
                  </Grid.Col>
                  <Grid.Col span={{ base: 'auto', md: 12 }}>
                    <Group gap={'sm'} align="center">
                      <Title order={4}>{item.name}</Title>
                      {item.tag && <Badge color="green" size="xs">{item.tag}</Badge>}
                    </Group>
                  </Grid.Col>
                </Grid>
                <Group gap={'sm'}>
                  <Rating defaultValue={item.rating} fractions={3} readOnly size="sm" />
                  <Text c="dimmed">
                    (23 Reviews)
                  </Text>
                </Group>
                <Space h={'sm'} />
                {item.services?.length > 0 && (
                  <Flex gap={'xs'} wrap={'wrap'} align={'center'}>
                    <Text>Services:</Text>
                    {item.services.map((x, index) => (
                      <Badge variant="outline" key={"tag" + index} size="xs">{x}</Badge>
                    ))}{" "}
                  </Flex>
                )}
                <Space h={'sm'} />
                <Link to={"/profile/" + item.id}>View Profile</Link>
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 'auto' }}>
                <Space h={'md'} />
                <PhotoProvider>
                  <Flex direction={'column'} gap={'xs'} wrap={'wrap'} mah={'240px'} justify={'end'} align={'end'} style={{ alignContent: 'end' }}>
                    {item.portfolio.map((imageItem, i) => <Box style={i === 0 || item.portfolio.length % 2 == 1 && i < 2 ? { width: '200px', height: '200px' } : { width: '95px', height: '95px' }}>
                      <PhotoView src={imageItem}>
                        <Image
                          style={itemDataThumbSetStyles}
                          src={imageItem}
                          alt={'reload to display image'}
                        />
                      </PhotoView>
                    </Box>)}
                    <Link to={"/profile/" + item.id}>
                      <Button w={'95px'} h={'95px'} variant="outline">
                        View<br />Profile
                      </Button>
                    </Link>
                  </Flex>
                </PhotoProvider>
              </Grid.Col>
            </Grid>
          ))}
        </Stack>
      </InfiniteScroll>
    );
  },
};

export default Photography.Index;
