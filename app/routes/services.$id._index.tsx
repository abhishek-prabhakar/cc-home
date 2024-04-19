import { Accordion, Badge, Checkbox, Container, Flex, Grid, Group, Select, Stack, Text, Title } from "@mantine/core";
import {
  TypedDeferredData,
  defer,
  type LoaderArgs,
  type V2_MetaFunction,
} from "@remix-run/node";
import {
  Await,
  useLoaderData,
  useLocation,
  useNavigate,
} from "@remix-run/react";
import React, { Suspense, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { forkJoin, of, switchMap } from "rxjs";
import Banner from "~/components/Banner";
import ListSortBar, { SORT_BY } from "~/components/ListSortBar";
import ProfileQuickCard from "~/components/ProfileQuickCard";
import Skeleton from "~/components/Skeleton";
import { PATH } from "~/path.data";
import { VendorQuery } from "~/service/vendor.service";
import { PortfolioItem, VendorResultListItem } from "~/types";
import { db } from "~/utils/database";
import sortFieldMapper from "~/utils/sortField.map";



export const meta: V2_MetaFunction = () => {
  return [
    { title: "Celebria Collective" },
    { name: "description", content: "Find your Pefect vendor" },
  ];
};


type Filter = {
  name: string;
  category: { id: string; name: string }[];
};

export async function loader({
  request,
  params,
}: LoaderArgs): Promise<TypedDeferredData<any>> {
  const pageId = params.id;

  const url = new URL(request.url);
  const searchParams = url.searchParams;
  const page = parseInt(searchParams.get("page") || "") || 0;
  const sortField = searchParams.get('sort') as SORT_BY;

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
      isActive: true
    },
    select: {
      id: true,
      name: true,
      description: true,
    },
  });

  const sortBy = sortFieldMapper(sortField);

  const result = VendorQuery.getFilteredVendors({
    page,
    limit,
    serviceGroupIds: categoryIds || [],
    vendorType: pageId || '',
    sortBy
  });

  const filters = new Promise<Filter[]>(function (resolve, reject) {
    of(true)
      .pipe(
        switchMap((_) =>
          db.vendorType.findFirstOrThrow({
            where: {
              keyName: pageId,
              isActive: true
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
      }, e => {
        reject('error');
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



const Photography = {
  Index: () => {
    const data = useLoaderData<typeof loader>();
    const navigate = useNavigate();
    const location = useLocation();

    function sortItems(x: string | null) {
      const searchParams = new URLSearchParams(location.search);
      searchParams.set('sort', x || '');

      navigate(`${location.pathname}?${searchParams.toString()}`);
    }
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
                <ListSortBar onSort={sortItems} />
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
    const data = useLoaderData<typeof loader>();
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
      navigate(`${location.pathname}?${params.toString()}`);
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
    vendors: VendorResultListItem[];
    loadMore: boolean;
  }) => {
    const data = useLoaderData<typeof loader>();
    const navigate = useNavigate();
    const location = useLocation();
    const [result, setResult] = useState<VendorResultListItem[]>([]);

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
          {result?.map(item => <ProfileQuickCard key={item.id} id={item.id} name={item.name} portfolio={item.portfolio} profileImg={item.profileImg} services={item.services} tag={item.tag} rating={item.rating} startsFrom={item.startsFrom} />)}
        </Stack>
      </InfiniteScroll>
    );
  },
};

export default Photography.Index;
