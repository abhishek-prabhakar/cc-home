import { defer, TypedDeferredData, type LoaderArgs, type V2_MetaFunction } from "@remix-run/node";
import { Suspense, useEffect, useState } from "react";
import { Newsletter } from "~/components/Newsletter";
import { Await, Link, useFetcher, useLoaderData, useNavigate } from "@remix-run/react";
import { db } from "~/utils/database";
import { PATH } from "~/path.data";
import { BannerLocation } from "@prisma/client";
import { generateJumbotronUrl } from "~/utils/generateJumbotronUrl";
import { BannerItem, Collection, HomeCategoryItem, Jumbotron } from "~/types";
import { getCategoryCollection, getCollections, getJumbotronList, getPopularServices, topVendorsByCategory } from "~/service/homepage.service";
import Routes from "~/routes.data";
import { ButtonBack, ButtonNext, CarouselProvider, Slide, Slider } from "pure-react-carousel";
import { Typewriter } from "react-simple-typewriter";
import { Avatar, Box, Button, Container, Flex, Grid, Image, Input, Loader, Modal, Stack, Text, Title } from "@mantine/core";
import { IconArrowNarrowLeft, IconArrowNarrowRight, IconChevronRight, IconFlame, IconSearch } from "@tabler/icons-react";
import Skeleton from "~/components/Skeleton";

const collectionBg = [
  'linear-gradient(0deg, rgba(34,193,195,0.4) 0%, rgba(253,187,45,0.4) 100%)',
  'linear-gradient(90deg, rgba(238,174,202,0.4) 0%, rgba(148,187,233,0.4) 100%)',
];


const tilesColors = ["#F77963", "#F9B85E", "#EA3562", "#0D4045", "#24F0BB", "#6337FF"];



type Page = {
  id: string,
  title: string,
  description?: string,
  path: string,
  serviceGroup: {
    id: string;
    name: string;
    imageName?: string | null;
  }[]
}


type HomePage = {
  bannerAds: BannerItem[];
  jumbotron: Jumbotron[];
  popularServices: Collection[];
  collections: Collection[];
  morePages: Page[];
  categories: Page[];
};

// : Promise<TypedDeferredData<{
//   jumbotron: Promise<Jumbotron[]>;
//   collection: Promise<Grid.Collection[]>;
//   morePages: Promise<Page[]>;
//   categories: Promise<Page[]>
// }>>
export async function loader({ params }: LoaderArgs) {
  const id = params.user;
  const jumbotronList = getJumbotronList()

  const quickLinks = new Promise<Collection[]>(function (resolve) {
    db.serviceGroup.findMany({
      take: 4,
      select: {
        id: true,
        name: true,
        imageName: true,
        vendorType: {
          select: {
            name: true,
            keyName: true,
          }
        },
        serviceGroupItem: {
          take: 1,
          select: {
            service: {
              select: {
                vendorService: {
                  take: 1,
                  select: {
                    cost: true
                  },
                  orderBy: {
                    cost: 'asc'
                  }
                }
              }
            }
          }
        }
      }
    }).then(r => {
      resolve(r.map(x => ({ id: x.id, title: x.name, image: x.imageName ? PATH.RESOURCE_URL + x.imageName : '', label: x.vendorType.name, path: `/services/${x.vendorType.keyName}?category=${x.id}`, cost: x.serviceGroupItem[0]?.service?.vendorService[0]?.cost })));
    })
  });

  const morePages = new Promise<Page[]>(function (resolve) {
    db.vendorType.findMany({
      take: 3,
      orderBy: {
        name: 'asc'
      },
      select: {
        id: true,
        name: true,
        keyName: true,
        serviceGroup: {
          select: {
            id: true,
            name: true,
            imageName: true
          }
        }
      }
    }).then(r => {
      resolve(r.map(x => ({
        path: Routes.Services.replace(':id', x.keyName), title: x.name, id: x.id, serviceGroup: x.serviceGroup
      })))
    })
  });


  const bannerAds = new Promise(async function (resolve) {
    const bannerlist = await db.websiteBanner.findMany({
      where: {
        targetPage: {
          in: [BannerLocation.HOME_1, BannerLocation.HOME_2, BannerLocation.HOME_3]
        }
      },
      select: {
        targetPage: true,
        jumbotron: {
          select: {
            title: true,
            description: true,
            imageName: true,
            vendorId: true,
            vendorTypeId: true,
            serviceGroupId: true,
            serviceId: true,
            vendorType: {
              select: {
                keyName: true
              }
            },
            group: {
              select: {
                vendorType: {
                  select: {
                    keyName: true
                  }
                }
              }
            }
          }
        }
      }
    });

    const finalList = bannerlist.map<BannerItem>(item => {
      const x = item.jumbotron;
      const url = generateJumbotronUrl({
        vendorTypeId: x.vendorTypeId,
        serviceGroupId: x.serviceGroupId,
        serviceId: x.serviceId
      });

      return {
        title: x.title,
        description: x.description,
        img: x.imageName ? PATH.RESOURCE_URL + x.imageName : '',
        url: url.replace(':vendorType', x.vendorType?.keyName || '').replace(':serviceGroupId', x.serviceGroupId || '').replace(':serviceId', x.serviceId || ''),
        bannerLocation: item.targetPage
      }
    });

    resolve(finalList);
  });

  const categories = getCategoryCollection();
  const popularServices = getPopularServices();
  const topVendors = topVendorsByCategory();
  const collections = getCollections();

  return defer({ categories, quickLinks, popularServices: popularServices, collections, topVendors });
}

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Celebria Collective" },
    { name: "description", content: "Book a service with us!" },
  ];
};

const jumbotronWrapperStyle = { overflow: 'auto', };
const jumbotronListStyle = { display: 'flex', gap: '20px', alignItems: 'center' }
const jumbotronItemWrapperStyle: React.CSSProperties = { width: '60vw' }
const jumbotronItemStyle: React.CSSProperties = { padding: '50px 20px', width: '100%', borderRadius: '15px', }

const FALLBACK_IMG = 'https://static.miraheze.org/widdershinswiki/thumb/4/47/Placeholder.png/800px-Placeholder.png';

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: '400px',
};

type searchResult = {
  id: string,
  name: string,
  vendorType: {
    keyName: string,
    name: string
  },
  serviceGroupType: { name: string } | null,
  serviceGroupItem: {
    service: {
      name: string;
    };
  }[];
}

const Home = {
  Index: () => {
    const data = useLoaderData<HomePage>();

    return [
      <Home.Jumbotron />,
      <div className="container no-spacer">
        <Home.Services />
      </div>,
      <Container size={'xl'}>
        <Grid>
          <Grid.Col span={12}>
            <Home.PopularServices />
          </Grid.Col>
          <Grid.Col span={12}>
            <Home.Collections />
          </Grid.Col>
          <Grid.Col span={12}>
            <div className="card-style-3">
              <Grid gutter={40} align={'middle'} justify={'center'}>
                <Grid.Col span={{ base: 12, md: 7 }}>
                  <Stack align="center">
                    <Title className="_text-center" order={3}>We are here to help<br />you build your brand</Title>
                    <Flex align={'center'} gap={'md'}>
                      <Text fw={500}>Check out</Text>
                      <Link to="/collections/commercial"><Button variant="outline" radius="xl">Commercial Services</Button></Link>
                    </Flex>
                  </Stack>
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 4 }}>
                  <div className="card-style-item">
                    <Stack gap="md">
                      <Flex align="center" gap={'sm'} justify={'center'}>
                        <Title order={5}>50+</Title><Text c="dimmed">professionals</Text>
                      </Flex>
                      <Avatar.Group>
                        <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
                        <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
                        <Avatar style={{ backgroundColor: '#87d068' }} src={PATH.AVATAR_PLACEHOLDER} />
                        <Avatar style={{ backgroundColor: '#1677ff' }} >A</Avatar>
                        <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
                        <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
                        <Avatar style={{ backgroundColor: '#87d068' }} src={PATH.AVATAR_PLACEHOLDER} />
                        <Avatar style={{ backgroundColor: '#1677ff' }} >A</Avatar>
                      </Avatar.Group>
                    </Stack>
                  </div>
                </Grid.Col>
              </Grid>
            </div>
          </Grid.Col>
        </Grid>
      </Container>
    ]
  },
  Jumbotron: () => {
    const data = useLoaderData<HomePage>();
    const fetcher = useFetcher();
    const navigate = useNavigate();
    const [searchBusy, setSearchBusy] = useState(false);

    const typewriterWords = ['work done', 'photographers', 'videographer', 'makeup artists', 'stylist'];

    useEffect(() => {
      setSearchBusy(fetcher.state === 'loading');
    }, [fetcher.state]);


    function search(event: any) {
      const q = event.target.value || '';
      setSearchBusy(true);
      fetcher.submit({
        q
      }, {
        method: 'get',
        action: '/search'
      })
    }

    function gotoSearchItemPage(type: string, id: string) {
      navigate(Routes.ServiceGroup.replace(':id', type).replace(':subId', id))
    }

    return <div className=" homepage-hero-section">
      <Grid align={'stretch'} gutter={0}>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Box style={{ display: 'flex', justifyContent: 'end', height: '100%' }}>
            <div className="homepage-hero-search-wrapper">
              <div className="homepage-hero-search-container">
                <Grid gutter={20}>
                  <Grid.Col span={12}>
                    <Title className="title-wrapper" order={1}>Now it's easy<br />to get <Typewriter words={typewriterWords} loop={true} cursor={true} cursorColor="red" /></Title>
                  </Grid.Col>
                  <Grid.Col span={{ base: 12, md: 9 }}>
                    <Stack gap={'sm'}>
                      <Text fw={500} c="dimmed">Get Started</Text>
                      <Input placeholder="Search" leftSection={searchBusy ? <Loader size={'xs'} /> : <IconSearch size={20} />} onChange={search} />
                    </Stack>
                    <div className="hero-search-results-panel-wrapper">
                      <Suspense fallback={<Skeleton />}>
                        <Await resolve={fetcher.data}>
                          {response => response?.results && <div className="hero-search-results-panel">{response?.results?.map((item: searchResult) => <div className="result-row" onClick={_ => gotoSearchItemPage(item.vendorType.keyName, item.id)}>
                            {item.name} <Text c="dimmed" fs="italic">in {item.vendorType.name}</Text>
                          </div>)}{!response?.results?.length && <div className="result-row" > <Text c="dimmed" fs="italic">Sorry, we couldn't find any results on that. Kindly narrow the search term.</Text></div>}</div>}
                        </Await>
                      </Suspense>
                    </div>
                  </Grid.Col>
                </Grid>
              </div>
            </div>
          </Box>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }}>
          {/* style={{ padding: '5px' }} */}
          <img className="homepage-hero-img" src="/assets/homepage-hero.jpg" width={'100%'} style={{ maxWidth: '665px' }} />
        </Grid.Col>
      </Grid>
    </div>;
  },
  QuickPick: () => {
    const data = useLoaderData<HomePage>();

    // return <div className="category-list home-section-card-wrapper">
    //   <Title order={2}>Featured</Title>
    //   <Suspense fallback={<Skeleton active />}>
    //     <Await resolve={data.quickLinks}>
    //       {response => <Grid gutter={40} justify={'center'}>
    //         {response.map(item => <Grid.Col key={item.id} span={12} md={6}>
    //           <Stack>
    //             <div>
    //               <div className="category-badge">
    //                 {item.label}
    //               </div>
    //               <div className="category-thumb">
    //                 <div className="cover">
    //                   <Image  src={item.image || ''} fallback={FALLBACK_IMG} />
    //                 </div>
    //                 <div className="hover">
    //                   <Image  src={item.image || ''} fallback={FALLBACK_IMG} />
    //                 </div>
    //                 <div className="link">
    //                   <Link to={item.path}>
    //                     <RightCircleOutlined />
    //                   </Link>
    //                 </div>
    //               </div>
    //             </div>
    //             <div>
    //               <Link to={item.path}><Title order={5}>{item.title}</Title></Link>
    //               {item.cost && <div>Starting from {item.cost}</div>}
    //             </div>
    //           </Space>
    //         </Grid.Col>)}
    //       </Grid>}
    //     </Await>
    //   </Suspense>
    // </div>;
  },
  PopularServices: () => {
    const data = useLoaderData<HomePage>();
    const [isMobile, setMobile] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
      setMobile(window?.innerWidth < 600);
    }, []);

    function sliderCount() { return isMobile ? 2 : 4; }

    return <Grid justify={'space-between'} align={'middle'}>
      <Grid.Col span={{ base: 12, md: 2 }}>
        <div className="home-section-card-wrapper">
          <Title order={4}>Popular Services</Title>
          <Text c="dimmed">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</Text>
        </div>
      </Grid.Col>
      <Grid.Col span={{ base: 12, md: 10 }}>
        <Suspense fallback={<Skeleton />}>
          <Await resolve={data.popularServices}>
            {resolve => <CarouselProvider
              naturalSlideWidth={300}
              naturalSlideHeight={400}
              totalSlides={resolve.length}
              visibleSlides={sliderCount()}
              isIntrinsicHeight={true}
              step={sliderCount()} dragStep={sliderCount()}
              className="carousel-slider-wrapper"
            >
              <Slider className="slider-spacer">{resolve.map((item, i) => <Slide className="card-style-1" key={'s' + item.id} index={i}>
                <Link to={item.path}>
                  <Stack>
                    <Image className="thumbnail" src={item.image || ''} />
                    <div className="title-wrapper">
                      <Text size="sm">{item.title}</Text>
                    </div>
                  </Stack>
                  <IconChevronRight className="btn-wrapper" />
                </Link></Slide>)}
              </Slider>
              <ButtonBack className="btn _prev"><IconArrowNarrowLeft /></ButtonBack>
              <ButtonNext className="btn _next"><IconArrowNarrowRight /></ButtonNext>
            </CarouselProvider>}
          </Await>
        </Suspense>
      </Grid.Col>
    </Grid>
  },
  Collections: () => {
    const data = useLoaderData<HomePage>();
    const [isMobile, setMobile] = useState(false);

    useEffect(() => {
      setMobile(window?.innerWidth < 600);
    }, []);

    function sliderCount() { return isMobile ? 1 : 4; }

    return <Grid justify={'center'}>
      <Grid.Col span={12}>
        <div style={{ paddingTop: '45px' }}>
          <div className="home-section-card-wrapper">
            <Title order={3} className="_text-center">Hire the best professionals for any job</Title>
          </div>
        </div>
      </Grid.Col>
      <Grid.Col>
        <Suspense fallback={<Skeleton />}>
          <Await resolve={data.collections}>
            {response => <CarouselProvider
              naturalSlideWidth={300}
              naturalSlideHeight={400}
              totalSlides={response.length}
              visibleSlides={sliderCount()}
              isIntrinsicHeight={true}
              step={sliderCount()} dragStep={sliderCount()}
              className="carousel-slider-wrapper"
            >
              <Slider className="slider-spacer">{response.map((item, i) => <Slide className="card-style-2" index={i} key={item.id}>
                <div className="card-wrapper">
                  <div>
                    <div className="title-wrapper">
                      <Title order={5}>{item.title}</Title>
                    </div>
                    <div className="label-wrapper">
                      <Text size="sm">{item.label}</Text>
                    </div>
                    <div className="btn-wrapper">
                      <Link to={item.path}>
                        <Button radius="xl">
                          Explore
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="card-thumb-wrapper">
                  <div className="card-thumb-cover">
                    <Image src={item.image || ''} height={'100%'} width={'100%'} className="thumb" />
                  </div>
                </div>
              </Slide>)
              }</Slider>
              <ButtonBack className="btn _prev"><IconArrowNarrowLeft /></ButtonBack>
              <ButtonNext className="btn _next"><IconArrowNarrowRight /></ButtonNext>
            </CarouselProvider>
            }
          </Await>
        </Suspense>
      </Grid.Col>
    </Grid>
  },
  Services: () => {
    const loaderData = useLoaderData<typeof loader>();
    const [modalData, setIsModalOpen] = useState<HomeCategoryItem | null>(null);
    const [isMobile, setMobile] = useState(false);

    useEffect(() => {
      setMobile(window?.innerWidth < 600);
    }, [])

    const showModal = (data: HomeCategoryItem) => {
      setIsModalOpen(data);
    };

    const handleCancel = () => {
      setIsModalOpen(null);
    };

    function sliderCount() { return isMobile ? 2 : 5; }

    return [
      <Suspense fallback={<Skeleton />}>
        <Await resolve={loaderData.categories}>
          {data => <CarouselProvider
            naturalSlideWidth={300}
            naturalSlideHeight={400}
            totalSlides={data.length}
            visibleSlides={sliderCount()}
            isIntrinsicHeight={true}
            step={sliderCount()} dragStep={sliderCount()}
            className="carousel-slider-wrapper slider-homepage-focused slider-uplift"
          >
            <Slider className="carousel-slider">{data.map((item, i) => <Slide className="item-wrapper" key={'s' + item.id} index={i} onClick={() => showModal(item)}>
              <div className="item-spacer">
                <div className="item">
                  <Stack>
                    <IconFlame style={{ fontSize: '2em' }} />
                    <Title order={5} style={{ color: 'white' }}>{item.title}</Title>
                    <Text className="item-description" c="dimmed" style={{ fontSize: '0.8em', color: 'whitesmoke' }}>{item.description}</Text>
                  </Stack>
                </div>
              </div>
            </Slide>)}
            </Slider>
            <ButtonBack className="btn _prev"><IconArrowNarrowLeft /></ButtonBack>
            <ButtonNext className="btn _next"><IconArrowNarrowRight /></ButtonNext>
          </CarouselProvider>}
        </Await>
      </Suspense>,
      <Modal title={modalData?.title} opened={!!modalData} onClose={handleCancel}>
        <Grid gutter={20}>
          {modalData?.serviceGroup.map((item, index) => <>

            {!item.isCollection && (index - 1 < 0 || item.isCollection !== modalData.serviceGroup[index - 1].isCollection) ? <Grid.Col span={{ base: 12 }} key={item.id + 'col-' + index}><Title order={5}>Other services</Title></Grid.Col> : ''}
            {item.isCollection ? <Grid.Col span={12} key={item.id}>
              <Link to={item.path}>
                <div style={{ position: 'relative', borderRadius: '10px', boxShadow: '0 20px 40px #d3d3d3', overflow: 'hidden' }}>
                  <Image src={item.imageName ? PATH.RESOURCE_URL + item.imageName : FALLBACK_IMG} width={'100%'} height={150} style={{ borderRadius: '10px', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: collectionBg[index % 2], display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', color: 'white', flexDirection: 'column' }}>
                    <Title order={4} style={{ wordBreak: 'normal', color: 'white' }}>{item.name}</Title>
                    <div style={{ padding: '0 15%', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>{item.description}</div>
                  </div>
                </div>
              </Link>
            </Grid.Col> : <Grid.Col span={{ base: 6, md: 4 }} key={item.id}>
              <Link to={item.path}>
                <div style={{ position: 'relative', borderRadius: '10px', overflow: 'hidden' }}>
                  <Image src={item.imageName ? PATH.RESOURCE_URL + item.imageName : FALLBACK_IMG} style={{ borderRadius: '10px' }} />
                  <div style={{
                    background: 'linear-gradient(0deg, rgb(2, 0, 36, 0.3) 0%, rgb(9, 9, 121, 0.3) 35%, rgb(0, 212, 255, 0.3) 100%)', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '12px'
                  }}>
                    <Title order={5} style={{ color: 'white', wordBreak: 'normal' }}>{item.name}</Title>
                  </div>
                </div>
              </Link>
            </Grid.Col>}</>)}
          {!modalData?.serviceGroup.length && <Grid.Col span={12}>Sorry, no services found under this category.</Grid.Col>}
        </Grid>
      </Modal>]
  },
  TopVendorsList: () => {
    const data = useLoaderData<typeof loader>();
    return <Suspense fallback={<Skeleton />}>
      <Await resolve={data.topVendors}>
        {res => <Grid gutter={20}>
          <Grid.Col span={12}>
            <Title order={3}>Top service providers</Title></Grid.Col>
          {res.map((category) => <Grid.Col key={'ce' + category.id} span={{ base: 12, md: 3 }}>
            <div className="home-section-card-wrapper">
              <Stack>
                <Title order={5}>{category.name}</Title>
                {category.vendor.map((vendor, i) => <Grid key={vendor.username} gutter={20} align={'middle'}>
                  <Grid.Col>{i + 1}</Grid.Col>
                  <Grid.Col>
                    <Avatar
                      src={vendor.profileImageName ? PATH.RESOURCE_URL + vendor.profileImageName
                        : PATH.AVATAR_PLACEHOLDER}
                    /></Grid.Col>
                  <Grid.Col flex={'auto'}>
                    <div className="nowrap" style={{ maxWidth: '80px' }}><Link to={Routes.VendorProfile.replace(':id', vendor.username)}><Text fw={500}>{vendor.username}</Text></Link></div></Grid.Col>
                </Grid>)}
                {!category.vendor.length && 'Sorry, no data found.'}
                <Text><Link to={Routes.Services.replace(':id', category.keyName)}>View all</Link></Text>
              </Stack>
            </div>
          </Grid.Col>)}
        </Grid>}
      </Await>
    </Suspense>
  }
}


export default Home.Index;