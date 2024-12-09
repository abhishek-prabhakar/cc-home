import { defer, TypedDeferredData, type LoaderArgs, type V2_MetaFunction } from "@remix-run/node";
import { Suspense, useEffect, useState } from "react";
import { Newsletter } from "~/components/Newsletter";
import { Await, Link, useFetcher, useLoaderData, useNavigate } from "@remix-run/react";
import { db } from "~/utils/database";
import { PATH } from "~/path.data";
import { BannerLocation } from "@prisma/client";
import { generateJumbotronUrl } from "~/utils/generateJumbotronUrl";
import { BannerItem, Collection, HomeCategoryItem, Jumbotron, SearchResultItem } from "~/types";
import { BannerSet, getCategoryCollection, getCollections, getPopularServices, getRandom8Vendors, topVendorsByCategory } from "~/service/homepage.service";
import Routes from "~/routes.data";
import { ButtonBack, ButtonNext, CarouselProvider, Slide, Slider } from "pure-react-carousel";
import { Typewriter } from "react-simple-typewriter";
import { Avatar, Box, Button, Card, Center, Container, Divider, Flex, Grid, Group, Image, Input, Loader, Modal, SimpleGrid, Space, Stack, Text, ThemeIcon, Title } from "@mantine/core";
import { IconArrowNarrowLeft, IconArrowNarrowRight, IconBrush, IconCamera, IconChevronRight, IconFlame, IconSearch, IconStarFilled, IconVideo } from "@tabler/icons-react";
import Skeleton from "~/components/Skeleton";
import { IconHanger } from "@tabler/icons-react";
import { FuseResult } from "fuse.js";
import classNames from "classnames";
import { useDebouncedValue, useMediaQuery } from "@mantine/hooks";
import { SupportCenterAffix } from "~/components/SupportCenterAffix";
import SearchInput from "~/components/SearchInput";
import Currency from "~/utils/currency.transformer";

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
  categories: Page[];
};
 
export async function loader({ params }: LoaderArgs) {
  const id = params.user;

  const quickLinks = new Promise<Collection[]>(function (resolve, reject) {
    db.serviceGroup.findMany({
      take: 4,
      where:{
        isActive: true,
      },
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
      resolve(r.map(x => ({ id: x.id, title: x.name, image: x.imageName ? PATH.THUMB_URL + x.imageName : '', label: x.vendorType.name, path: `/services/${x.vendorType.keyName}?category=${x.id}`, cost: x.serviceGroupItem[0]?.service?.vendorService[0]?.cost })));
    }, e => {
      reject('Connection failed');
    })
  });


  const bannerAds = BannerSet();
  const categories = getCategoryCollection();
  const popularServices = getPopularServices();
  const topVendors = topVendorsByCategory();
  const collections = getCollections();
  const random8Vendors = await getRandom8Vendors();

  return defer({ categories, quickLinks, popularServices: popularServices, collections, topVendors, random8Vendors, bannerAds });
}

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Celebria Collective" },
    { name: "description", content: "Book a service with us!" },
  ];
};

const FALLBACK_IMG = 'https://static.miraheze.org/widdershinswiki/thumb/4/47/Placeholder.png/800px-Placeholder.png';

const Home = {
  Index: () => {
    const data = useLoaderData<typeof loader>();

    return <>
      <Container size={'xl'} p={0}>
        <Home.Jumbotron />
        <div className="container no-spacer">
          <Home.Services />
        </div>
      </Container>
      <Container size={'xl'}>
        <Grid>
          <Grid.Col span={12}>
            <Home.KeyFeatures/>
          </Grid.Col>
          <Grid.Col span={12}>
            <Image src={'/assets/overlay-divider.png'} width={'100%'} h={90} opacity={0.3}/>
          </Grid.Col>
          <Grid.Col span={12}>
            <Home.MainBannerAds/>
          </Grid.Col>
          <Grid.Col span={12}>
            <Image src={'/assets/overlay-divider.png'} width={'100%'} h={90} opacity={0.3}/>
          </Grid.Col>
          <Grid.Col span={12}>
            <Home.PopularServices />
          </Grid.Col>
          <Grid.Col span={12}>
            <Home.Collections />
          </Grid.Col>
          <Grid.Col span={12}>
            <Card radius={'md'} withBorder className="card-style-3">
              <Grid gutter={{ base: 20,  md: 40}} align={'center'} justify={'center'}>
                <Grid.Col span={{ base: 12, md: 6 }}>
                  <Stack align="center">
                    <Title className="_text-center" order={3}>We are here to help<br />you build your brand</Title>
                    <Flex align={'center'} gap={'md'}>
                      <Text fw={500}>Check out</Text>
                      <Link to="/collections/commercial"><Button variant="outline" radius="xl">Commercial Services</Button></Link>
                    </Flex>
                  </Stack>
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 'content' }}>
                  <div className="card-style-item">
                    <Stack gap="md">
                      <Flex align="center" gap={'sm'} justify={'center'}>
                        <Title order={5}>100+</Title><Text fw={'bold'} c="dimmed">professionals</Text>
                      </Flex>
                      <Suspense>
                        <Await resolve={data.random8Vendors}>
                        {response => <Center>
                            <Avatar.Group>
                              {response?.map(v => <Avatar size="lg" key={v?.profileImageName} src={PATH.THUMB_URL+v?.profileImageName} />)}
                            </Avatar.Group>
                          </Center>
                          }
                        </Await>
                        </Suspense>
                    </Stack>
                  </div>
                </Grid.Col>
              </Grid>
            </Card>
          </Grid.Col>
        </Grid>
      </Container>
      <SupportCenterAffix/>
    </>
  },
  Jumbotron: () => {
    const typewriterWords = ['events done', 'photographers', 'videographers', 'makeup artists', 'stylists'];
    return <div className=" homepage-hero-section">
      <Grid align={'stretch'} gutter={0}>
        <Grid.Col visibleFrom="md" span={{ base: 12, md: 6 }}>
            <Box className="homepage-hero-search-wrapper" p={'xl'}>
                <Space h={'xl'}/>
                <Center>
                <Grid gutter={20} w={'70%'}>
                  <Grid.Col span={12}>
                    <Title className="title-wrapper" order={1}>Now it's easy<br />to get <Typewriter typeSpeed={100}  delaySpeed={400} words={typewriterWords} loop={true} cursor={true} cursorColor="red" /></Title>
                  </Grid.Col>
                  <Grid.Col span={{ base: 12, md: 9 }}>
                    <SearchInput/>
                  </Grid.Col>
                </Grid>
                </Center>
            </Box>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }}>
          {/* style={{ padding: '5px' }} */}
          <img className="homepage-hero-img" src="/assets/homepage-hero-2.png"  width={'100%'} style={{ maxHeight: '400px',objectFit:'contain' }} />
        </Grid.Col>
      </Grid>
    </div>;
  },
  PopularServices: () => {
    const data = useLoaderData<HomePage>();
    const isWideScreen = useMediaQuery('(min-width: 56.25em)');
    const navigate = useNavigate();

    function sliderCount() { return isWideScreen ? 4 : 2; }

    return <Grid justify={'space-between'} align={'center'}>
      <Grid.Col span={{ base: 12, md: 2 }}>
        <div className="home-section-card-wrapper">
          <Title order={4}>Popular Services</Title>
          <Text c="dimmed">Explore our in-demand services, loved by many.</Text>
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
    const isWideScreen = useMediaQuery('(min-width: 56.25em)');

    function sliderCount() { return isWideScreen ? 4 : 1; }

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
                          Book now
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
    const isWideScreen = useMediaQuery('(min-width: 56.25em)');
    const [activeItemIndex, setActiveItem] = useState(0);

    const showModal = (data: HomeCategoryItem) => {
      setIsModalOpen(data);
    };

    const handleCancel = () => {
      setIsModalOpen(null);
    };

    function sliderCount() { return isWideScreen ? 5 : 2; }

    const CatIconList = [{
      name: 'video',
      icon: <IconVideo size={30} />
    },
    {
      name: 'photo',
      icon: <IconCamera size={30} />
    },
    {
      name: 'makeup',
      icon: <IconBrush size={30} />
    },
    {
      name: 'design',
      icon: <IconHanger size={30} />
    }];

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
            className="carousel-slider-wrapper slider-homepage-focused slider-justify-center slider-uplift"
          >
            <Slider className="carousel-slider">{data.map((item, i) => <Slide className={classNames('item-wrapper', { _active: activeItemIndex === i })} key={'s' + item.id} index={i} onClick={() => showModal(item)} onMouseOver={() => setActiveItem(i)}>
              <div className="item-spacer">
                <div className="item">
                  <Stack>
                    {CatIconList.find(x => item.title.toLowerCase().includes(x.name))?.icon}
                    <Title order={5} style={{ color: 'white' }}>{item.title}</Title>
                    <Group className="hover-active" align="center">
                      <Text fw={500} c={'white'}>Book now</Text>
                      <IconArrowNarrowRight />
                    </Group>
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
      <Modal title={'Browse ' + modalData?.title} opened={!!modalData} onClose={handleCancel} centered>
        <Grid gutter={20}>
          {modalData?.serviceGroup.map((item, index) => <>
            {!item.isCollection && (index - 1 < 0 || item.isCollection !== modalData.serviceGroup[index - 1].isCollection) ? <Grid.Col span={{ base: 12 }} key={item.id + 'col-' + index}><Title order={5}>Other services</Title></Grid.Col> : ''}
            {item.isCollection && false ? <Grid.Col span={12} key={item.id}>
              <Link to={item.path}>
                <div style={{ position: 'relative', borderRadius: '10px', boxShadow: '0 20px 40px #d3d3d3', overflow: 'hidden' }}>
                  <Image src={item.imageName ? PATH.THUMB_URL + item.imageName : FALLBACK_IMG} width={'100%'} height={150} style={{ borderRadius: '10px', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: collectionBg[index % 2], display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', color: 'white', flexDirection: 'column' }}>
                    <Title order={4} style={{ wordBreak: 'normal', color: 'white' }}>{item.name}</Title>
                    <div style={{ padding: '0 15%', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>{item.description}</div>
                  </div>
                </div>
              </Link>
            </Grid.Col> : <Grid.Col span={{ base: 6, md: 4 }} key={item.id}>
              <Link to={item.path}>
                <div style={{ position: 'relative', borderRadius: '10px', overflow: 'hidden' }}>
                  <Image src={item.imageName ? PATH.THUMB_URL + item.imageName : FALLBACK_IMG} style={{ borderRadius: '10px' }} />
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
                {category.vendor.map((vendor, i) => <Grid key={vendor.username} gutter={20} align={'center'}>
                  <Grid.Col>{i + 1}</Grid.Col>
                  <Grid.Col>
                    <Avatar
                      src={vendor.profileImageName ? PATH.THUMB_URL + vendor.profileImageName
                        : PATH.AVATAR_PLACEHOLDER}
                    /></Grid.Col>
                  <Grid.Col flex={'auto'}>
                    <div className="nowrap" style={{ maxWidth: '80px' }}><Link to={Routes.get('VendorProfile', { id: vendor.username })}><Text fw={500}>{vendor.username}</Text></Link></div></Grid.Col>
                </Grid>)}
                {!category.vendor.length && 'Sorry, no data found.'}
                <Text><Link to={Routes.get('Services', { id: category.keyName })}>View all</Link></Text>
              </Stack>
            </div>
          </Grid.Col>)}
        </Grid>}
      </Await>
    </Suspense>
  },
  MainBannerAds(){
    const data = useLoaderData<typeof loader>();
    const isWideScreen = useMediaQuery('(min-width: 56.25em)');
    function sliderCount(length: number) { 
      // const minWidth = length > 3? 3: length
      return isWideScreen ? 3 : 1;
     }

    return <Suspense>
      <Await resolve={data.bannerAds}>
        {response => <CarouselProvider
              naturalSlideWidth={300}
              naturalSlideHeight={400}
              totalSlides={response.length}
              visibleSlides={sliderCount(response.length)}
              isIntrinsicHeight={true}
              step={sliderCount(response.length)} dragStep={sliderCount(response.length)}
              className="carousel-slider-wrapper slider-justify-center"
            >
              <Slider className="slider-spacer">
            {response.map((item,i) => <Slide  key={'s' + item.bannerLocation} index={i}>
              <Link to={item.url}>
                <Card withBorder p={3}>
                <Card mih={200} className="animate-banner-ad"  style={{backgroundImage: 'url(/assets/card-gradient-overlay.png), url('+item.img+')'}}>
                  <Space h={"xl"}/>
                  <Stack gap={0} justify="center" align="center">
                  <Title ta={'center'} c={'white'} order={3}>{item.title}</Title>
                  <Box h={45}><Text ta={'center'}  c={'white'}>{item.description}</Text></Box>
                  <Space h={"lg"}/>
                  {item.cost && <Group fw={'bold'} c={'white'}><Text>Starts from</Text><Currency value={item.cost}/></Group>}
                  <Space h={"md"}/>
                  <Box>
                    <Button variant="white" radius="lg">Book now</Button>
                  </Box>
                  </Stack>
                </Card>
                </Card>
              </Link>
            </Slide>)}
          </Slider>
          </CarouselProvider>
          }
      </Await>
    </Suspense>
  },
  KeyFeatures(){
    return <Grid pt={'xl'} gutter={'lg'} align="center" justify="center">
        <Grid.Col span={{md: 'content', base: 12}}>
          <Group justify="center">
            <Image w={60} h={60} src={'/assets/icons/quality-assurance.png'}/>
            <Title order={4}>CC Promise</Title>
          </Group>
        </Grid.Col>
        <Grid.Col visibleFrom="md" span={'content'}>
          <Divider  orientation="vertical" h={40} size="sm"/>
        </Grid.Col>
        <Grid.Col span={{md: 'content', base: 'content'}}>
        <Group justify="center">
            <ThemeIcon variant="white" color="yellow"><IconStarFilled/></ThemeIcon>
            <Title order={4}>Verified Professionals</Title>
          </Group>
        </Grid.Col>
        <Grid.Col span={{md: 'content', base: 'content'}}>
        <Group justify="center">
            <ThemeIcon variant="white" color="yellow"><IconStarFilled/></ThemeIcon>
            <Title order={4}>Hassle Free Booking</Title>
          </Group>
        </Grid.Col>
        <Grid.Col span={{md: 'content', base: 'content'}}>
        <Group justify="center">
            <ThemeIcon variant="white" color="yellow"><IconStarFilled/></ThemeIcon>
            <Title order={4}>Transparent Pricing</Title>
          </Group>
        </Grid.Col>
    </Grid>
  }
}


export default Home.Index;