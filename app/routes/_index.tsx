import { ArrowLeftOutlined, ArrowRightOutlined, FireOutlined, LoadingOutlined, MenuOutlined, RightCircleOutlined, RightOutlined, SearchOutlined } from "@ant-design/icons";
import { defer, TypedDeferredData, type LoaderArgs, type V2_MetaFunction } from "@remix-run/node";
import { Avatar, Badge, Button, Card, Carousel, Col, Divider, Image, Input, Layout, Modal, Row, Skeleton, Space, Tag } from "antd";
import { Typography } from 'antd';
import { Suspense, useEffect, useState } from "react";
import { Banner, BannerVertical } from "~/components/Banner";
import { Newsletter } from "~/components/Newsletter";
const { Title } = Typography;
const { Meta } = Card;
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
//   collection: Promise<Collection[]>;
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

    return [
      // <Home.Jumbotron />,
      <div className="container no-spacer">
        {/* <Home.Services /> */}
      </div>,
      <div className="container no-spacer">
        <Row>
          <Col span={24}>
            {/* <Home.PopularServices /> */}
          </Col>
          <Col span={24}>
            {/* <Home.Collections /> */}
          </Col>
        </Row>
      </div>
    ]
  },
  Jumbotron: () => {
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
      <Row align={'stretch'}>
        <Col sm={24} xs={24} md={12} style={{ display: 'flex', justifyContent: 'end' }}>
          <div className="homepage-hero-search-wrapper">
            <div className="homepage-hero-search-container">
              <Row gutter={[20, 20]}>
                <Col span={24}>
                  <Typography.Title className="title-wrapper" level={1}>Now it's easy<br />to get <Typewriter words={typewriterWords} loop={true} cursor={true} cursorColor="red" /></Typography.Title>
                </Col>
                <Col xs={24} sm={24} md={18}>
                  <Typography.Title level={5}>Get Started</Typography.Title>
                  <Input placeholder="Search" prefix={searchBusy ? <LoadingOutlined /> : <SearchOutlined />} onChange={search} />
                  <div className="hero-search-results-panel-wrapper">
                    <Suspense fallback={<Skeleton active />}>
                      <Await resolve={fetcher.data}>
                        {response => response?.results && <div className="hero-search-results-panel">{response?.results?.map((item: searchResult) => <div className="result-row" onClick={_ => gotoSearchItemPage(item.vendorType.keyName, item.id)}>
                          {item.name} <Typography.Text type="secondary" italic>in {item.vendorType.name}</Typography.Text>
                        </div>)}{!response?.results?.length && <div className="result-row" > <Typography.Text type="secondary" italic>Sorry, we couldn't find any results on that. Kindly narrow the search term.</Typography.Text></div>}</div>}
                      </Await>
                    </Suspense>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
        <Col sm={24} xs={24} md={12} style={{ padding: '5px' }}>
          <img className="homepage-hero-img" src="/assets/homepage-hero.jpg" width={'100%'} style={{ maxWidth: '665px' }} />
        </Col>
      </Row>
    </div>;
  },
  QuickPick: () => {
    const data = useLoaderData<HomePage>();

    // return <div className="category-list home-section-card-wrapper">
    //   <Title level={2}>Featured</Title>
    //   <Suspense fallback={<Skeleton active />}>
    //     <Await resolve={data.quickLinks}>
    //       {response => <Row gutter={40} justify={'center'}>
    //         {response.map(item => <Col key={item.id} span={12} md={6}>
    //           <Space direction="vertical">
    //             <div>
    //               <div className="category-badge">
    //                 {item.label}
    //               </div>
    //               <div className="category-thumb">
    //                 <div className="cover">
    //                   <Image preview={false} src={item.image || ''} fallback={FALLBACK_IMG} />
    //                 </div>
    //                 <div className="hover">
    //                   <Image preview={false} src={item.image || ''} fallback={FALLBACK_IMG} />
    //                 </div>
    //                 <div className="link">
    //                   <Link to={item.path}>
    //                     <RightCircleOutlined />
    //                   </Link>
    //                 </div>
    //               </div>
    //             </div>
    //             <div>
    //               <Link to={item.path}><Title level={5}>{item.title}</Title></Link>
    //               {item.cost && <div>Starting from {item.cost}</div>}
    //             </div>
    //           </Space>
    //         </Col>)}
    //       </Row>}
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

    return <Row justify={'space-between'} align={'middle'}>
      <Col sm={24} xs={24} md={5}>
        <div className="home-section-card-wrapper">
          <Title level={4}>Popular Services</Title>
          <Typography.Text type="secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</Typography.Text>
        </div>
      </Col>
      <Col sm={24} xs={24} md={19}>
        <Suspense fallback={<Skeleton active />}>
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
                  <Space direction="vertical">
                    <Image className="thumbnail" preview={false} src={item.image || ''} fallback={FALLBACK_IMG} />
                    <div className="title-wrapper">
                      <Typography.Text strong>{item.title}</Typography.Text>
                    </div>
                  </Space>
                  <RightOutlined className="btn-wrapper" />
                </Link></Slide>)}
              </Slider>
              <ButtonBack className="btn _prev"><ArrowLeftOutlined /></ButtonBack>
              <ButtonNext className="btn _next"><ArrowRightOutlined /></ButtonNext>
            </CarouselProvider>}
          </Await>
        </Suspense>
      </Col>
    </Row>
  },
  Collections: () => {
    const data = useLoaderData<HomePage>();
    const [isMobile, setMobile] = useState(false);

    useEffect(() => {
      setMobile(window?.innerWidth < 600);
    }, []);

    function sliderCount() { return isMobile ? 1 : 4; }

    return <Row justify={'center'}>
      <Col span={24}>
        <div style={{ paddingTop: '45px' }}>
          <div className="home-section-card-wrapper">
            <Title level={3} className="_text-center">Hire the best professionals for any job</Title>
          </div>
        </div>
      </Col>
      <Col>
        <Suspense fallback={<Skeleton active />}>
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
                      <Typography.Title level={5}>{item.title}</Typography.Title>
                    </div>
                    <div className="label-wrapper">
                      <Typography.Text>{item.label}</Typography.Text>
                    </div>
                    <div className="btn-wrapper">
                      <Link to={item.path}>
                        <Button shape="round">
                          Explore
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="card-thumb-wrapper">
                  <div className="card-thumb-cover">
                    <Image src={item.image || ''} preview={false} height={'100%'} width={'100%'} fallback={FALLBACK_IMG} className="thumb" />
                  </div>
                </div>
              </Slide>)
              }</Slider>
              <ButtonBack className="btn _prev"><ArrowLeftOutlined /></ButtonBack>
              <ButtonNext className="btn _next"><ArrowRightOutlined /></ButtonNext>
            </CarouselProvider>
            }
          </Await>
        </Suspense>
      </Col>
    </Row>
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
      <Suspense fallback={<Skeleton active />}>
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
                  <Space direction="vertical">
                    <FireOutlined style={{ fontSize: '2em' }} />
                    <Typography.Title level={5} style={{ color: 'white' }}>{item.title}</Typography.Title>
                    <Typography.Text className="item-description" type="secondary" style={{ fontSize: '0.8em', color: 'whitesmoke' }}>{item.description}</Typography.Text>
                  </Space>
                </div>
              </div>
            </Slide>)}
            </Slider>
            <ButtonBack className="btn _prev"><ArrowLeftOutlined /></ButtonBack>
            <ButtonNext className="btn _next"><ArrowRightOutlined /></ButtonNext>
          </CarouselProvider>}
        </Await>
      </Suspense>,
      <Modal title={modalData?.title} destroyOnClose={true} open={!!modalData} footer="" onCancel={handleCancel}>
        <Row gutter={[20, 20]}>
          {modalData?.serviceGroup.map((item, index) => <>

            {!item.isCollection && (index - 1 < 0 || item.isCollection !== modalData.serviceGroup[index - 1].isCollection) ? <Col xs={24} sm={24} key={item.id + 'col-' + index}><Title level={5}>Other services</Title></Col> : ''}
            {item.isCollection ? <Col xs={24} key={item.id}>
              <Link to={item.path}>
                <div style={{ position: 'relative', borderRadius: '10px', boxShadow: '0 20px 40px #d3d3d3', overflow: 'hidden' }}>
                  <Image preview={false} src={item.imageName ? PATH.RESOURCE_URL + item.imageName : FALLBACK_IMG} width={'100%'} height={150} style={{ borderRadius: '10px', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: collectionBg[index % 2], display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', color: 'white', flexDirection: 'column' }}>
                    <Title level={4} style={{ wordBreak: 'normal', color: 'white' }}>{item.name}</Title>
                    <div style={{ padding: '0 15%', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>{item.description}</div>
                  </div>
                </div>
              </Link>
            </Col> : <Col xs={12} sm={12} md={8} key={item.id}>
              <Link to={item.path}>
                <div style={{ position: 'relative', borderRadius: '10px', overflow: 'hidden' }}>
                  <Image preview={false} src={item.imageName ? PATH.RESOURCE_URL + item.imageName : FALLBACK_IMG} style={{ borderRadius: '10px' }} />
                  <div style={{
                    background: 'linear-gradient(0deg, rgb(2, 0, 36, 0.3) 0%, rgb(9, 9, 121, 0.3) 35%, rgb(0, 212, 255, 0.3) 100%)', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '12px'
                  }}>
                    <Title level={5} style={{ color: 'white', wordBreak: 'normal' }}>{item.name}</Title>
                  </div>
                </div>
              </Link>
            </Col>}</>)}
          {!modalData?.serviceGroup.length && <Col span={24}>Sorry, no services found under this category.</Col>}
        </Row>
      </Modal>]
  },
  TopVendorsList: () => {
    const data = useLoaderData<typeof loader>();
    return <Suspense fallback={<Skeleton active />}>
      <Await resolve={data.topVendors}>
        {res => <Row gutter={[20, 20]}>
          <Col span={24}><Typography.Title level={3}>Top service providers</Typography.Title></Col>
          {res.map((category) => <Col key={'ce' + category.id} xs={24} sm={24} md={6}>
            <div className="home-section-card-wrapper">
              <Space direction="vertical" size={'middle'}>
                <Typography.Title level={5}>{category.name}</Typography.Title>
                {category.vendor.map((vendor, i) => <Row key={vendor.username} gutter={[20, 20]} align={'middle'}>
                  <Col>{i + 1}</Col>
                  <Col>
                    <Avatar
                      size={{
                        xs: 50,
                        sm: 50,
                        md: 50,
                        lg: 50,
                        xl: 50,
                        xxl: 50,
                      }}
                      src={vendor.profileImageName ? PATH.RESOURCE_URL + vendor.profileImageName
                        : PATH.AVATAR_PLACEHOLDER}
                    /></Col>
                  <Col flex={'auto'}><div className="nowrap" style={{ maxWidth: '80px' }}><Link to={Routes.VendorProfile.replace(':id', vendor.username)}><strong>{vendor.username}</strong></Link></div></Col>
                </Row>)}
                {!category.vendor.length && 'Sorry, no data found.'}
                <Typography.Text><Link to={Routes.Services.replace(':id', category.keyName)}>View all</Link></Typography.Text>
              </Space>
            </div>
          </Col>)}
        </Row>}
      </Await>
    </Suspense>
  }
}


export default Home.Index;