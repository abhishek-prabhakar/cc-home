import { Accordion, Badge, Checkbox, Container, Drawer, Flex, Grid, Group, Select, Stack, Text, Title } from "@mantine/core";
import {
  TypedDeferredData,
  defer,
  type LoaderArgs,
  type V2_MetaFunction,
} from "@remix-run/node";
import {
  Await,
  useFetcher,
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

const ITEMS_PER_PAGE = 20;

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

type Result = {
  data: VendorResultListItem[];
  loadMore: boolean;
}

export async function loader({
  request,
  params,
}: LoaderArgs) {
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
                    isActive: true,
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
                isActive: true,
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
    filters,
    page,
    pageId,
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

function BadgeCounter({category, activeFilters}:{category: {
  id: string;
  name: string;
}[], activeFilters: string[]}){
  function getSelectedCatgoryCount(
    categoryList: {
      id: string;
      name: string;
    }[]
  ) {
    const categoryIdList = categoryList.map((value) => value.id);
    const filteredArray = activeFilters.filter((value) =>
      categoryIdList.includes(value)
    );
    return filteredArray.length;
  }

  const selectedCategoryCount = getSelectedCatgoryCount(
    category
  );


    return  selectedCategoryCount > 0? (
      <Badge color="#faad14"
      >{selectedCategoryCount}</Badge>
    ) : null
  }

const Page = {
  Index: () => {
    const data = useLoaderData<typeof loader>();
    const fetcher = useFetcher<Result>();
    const navigate = useNavigate();
    const location = useLocation();


    useEffect(() =>{
      loadPreviousResults();
    },[]);

    function sortItems(x: string | null) {
      const searchParams = new URLSearchParams(location.search);
      searchParams.set('sort', x || '');

      navigate(`${location.pathname}?${searchParams.toString()}`);
    }

    function loadPreviousResults(){
      const searchParams = new URLSearchParams(location.search);
        fetcher.submit({
          ...Object.fromEntries(searchParams),
          page: data.page,
          fromBegining: true
        },{
          method: 'get',
          action: '/results/vendor/' + data.pageId
      });
    }

    return (
      <Container size={'xl'} >
        <Stack gap={'lg'}>
          {/* <Banner.Default /> */}
          <Grid gutter={{ base: 20,  md: 40}}>
            <Grid.Col span={{base: 12, md: 4, lg: 3 }}>
              <Page.Filters />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 8, lg: 9 }}>
              <Stack gap={'lg'}>
                <Stack>
                  <Title order={3}>{data.meta.name} in Bangalore</Title>
                  <Text size="sm">{data.meta.description}</Text>
                </Stack>
                <ListSortBar onSort={sortItems} />
                <Suspense
                  fallback={<Skeleton />}
                >
                  <Await resolve={fetcher.data}>
                    {(response) => (
                      <Page.Results
                        vendors={response?.data || []}
                        loadMore={response?.loadMore || true}
                      />
                    )}
                  </Await>
                </Suspense>
                {/* <Page.Results /> */}
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
    const [getCategoryFitlers, setCategoryFilters] = useState<string[]>([]);
    const [openFilterDrawer, setFilterDrawer] = useState(false);

    useEffect(() => {
      const params = new URLSearchParams(location.search);
      setCategoryFilters(
        params
          .get("category")
          ?.split(",")
          .filter((x) => !!x) || []
      );
    }, []);

    function toggleCategoryFilterItem(value: string) {
      let list = getCategoryFitlers;
      if (list.includes(value)) {
        list =  list.filter(x => x!== value);
      } else {
        list.push(value)
      }

      setCategoryFilters(list);
      const params = new URLSearchParams(location.search);
      params.set("category", list.join(","));
      params.set("page", "0");
      navigate(`${location.pathname}?${params.toString()}`);
    }

    function clearFilter(){
      setCategoryFilters([]);
      const params = new URLSearchParams(location.search);
      params.set("page", "0");
      params.delete('category');
      navigate(`${location.pathname}?${params.toString()}`);
    }

    function toggleFilterDrawer(){
      setFilterDrawer(!openFilterDrawer);
    }

    const filterList =  <Suspense fallback={<Skeleton />}>
    <Await resolve={data.filters}>
      {(filters) => (
        <Accordion>
        <Page.FilterAccordianItem  activeFilters={getCategoryFitlers} filters={filters} onChange={toggleCategoryFilterItem}/>
        </Accordion>
      )}
    </Await>
  </Suspense>;

    return <>
        <Grid gutter={0}>
          <Grid.Col span={12} hiddenFrom="md">
            <div className="filters-section-wrapper" onClick={toggleFilterDrawer}>
              <div className="section-title">
                <Group>
                  <Text fw={500}>Filter:</Text>
                  {getCategoryFitlers?.length? <Badge variant="outline" color="yellow">{getCategoryFitlers.length} applied</Badge>  : <></>}
                  <Text c="dimmed">Click here to modify</Text>
                  </Group>
                </div>
            </div>
          </Grid.Col>
          <Grid.Col span={12} visibleFrom="md">
            <div className="filters-section-wrapper _sticky-top">
              <div className="section-title">
              <Group justify="space-between">
                <Text size="lg" fw={500}>Filter:</Text>
                {getCategoryFitlers?.length? <Badge style={{cursor: "pointer"}}  onClick={clearFilter} variant="outline" color="red" size="xs">Clear all</Badge> : <></>}
              </Group>
              </div>
              {filterList}
            </div>
          </Grid.Col>
        </Grid>
        <Drawer opened={openFilterDrawer} onClose={toggleFilterDrawer} title="Apply Filters">
          {filterList}
        </Drawer>
      </>;
  },
  Results: ({
    vendors,
    loadMore,
  }: {
    vendors: VendorResultListItem[];
    loadMore: boolean;
  }) => {
    const data = useLoaderData<typeof loader>();
    const fetcher = useFetcher<Result>();
    const navigate = useNavigate();
    const location = useLocation();
    const [result, setResult] = useState<VendorResultListItem[]>([]);


    useEffect(() => {
      console.log(loadMore)
      if (!vendors) {
        return;
      }

      setResult(data.page === 0 ? vendors : result.concat(vendors));
    }, [vendors]);

    useEffect(() =>{
      if(!fetcher.data){return;}
      setResult(data.page === 0 ? fetcher.data.data : result.concat(fetcher.data.data));
    },[fetcher.data])


    function loadNextPage() {
      const searchParams = new URLSearchParams(location.search);
      searchParams.set("page", "" + data.page + 1);
      navigate(location.pathname + "?" + searchParams.toString(), {
        preventScrollReset: true,
      });

      fetcher.submit({
        ...Object.fromEntries(searchParams),
        fromBegining: false,
        
      },{
        method: 'get',
        action: '/results/vendor/' + data.pageId
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
        <Stack>
          {result?.map(item => <ProfileQuickCard key={item.id} id={item.id} name={item.name} portfolio={item.portfolio} profileImg={item.profileImg} services={item.services} tag={item.tag} rating={item.rating} startsFrom={item.startsFrom} />)}
        </Stack>
      </InfiniteScroll>
    );
  },
  FilterAccordianItem: ({filters, activeFilters, onChange}:{filters: Filter[], activeFilters: string[], onChange: (r:string) => void})=> {
      const filterOptionsList = filters.map(
        (filter, index) => {

          return <Accordion.Item key={index} value={filter.name}>
            <Accordion.Control>
              <Group justify="space-between" align="center">
                <Text fw={500}>{filter.name}</Text>
                <BadgeCounter category={filter.category} activeFilters={activeFilters}/>
              </Group>
            </Accordion.Control>
            <Accordion.Panel>
              <Stack>
                {filter.category.map((item) => (
                  <Checkbox
                    key={item.id}
                    label={item.name}
                    value={item.id}
                    checked={activeFilters.includes(item.id)}
                    onChange={(e) =>
                      onChange(item.id)
                    }
                  />
                ))}
                {!filter.category?.length && <div>Unavailable right now.</div>}
              </Stack>
            </Accordion.Panel>
          </Accordion.Item>
        });

      return filterOptionsList;
  }
};

export default Page.Index;
