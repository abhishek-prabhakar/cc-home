import { ArrowLeftOutlined, ArrowRightOutlined, MenuOutlined, RightCircleOutlined, RightOutlined } from "@ant-design/icons";
import { defer, TypedDeferredData, type LoaderArgs, type V2_MetaFunction } from "@remix-run/node";
import { Badge, Button, Card, Carousel, Col, Image, Layout, Modal, Row, Skeleton, Space, Tag } from "antd";
import { Typography } from 'antd';
import { Suspense, useState } from "react";
import { Banner, BannerVertical } from "~/components/Banner";
import { Newsletter } from "~/components/Newsletter";
const { Title } = Typography;
const { Meta } = Card;
import { Await, Link, useLoaderData } from "@remix-run/react";
import { db } from "~/utils/database";
import { PATH } from "~/path.data";
import { BannerLocation } from "@prisma/client";
import { generateJumbotronUrl } from "~/utils/generateJumbotronUrl";
import { BannerItem, HomeCategoryItem, Jumbotron } from "~/types";
import { getCategoryCollection, getJumbotronList } from "~/service/homepage.service";
import Routes from "~/routes.data";
import { ButtonBack, ButtonNext, CarouselProvider, Slide, Slider } from "pure-react-carousel";

const collectionBg = [
  'linear-gradient(0deg, rgba(34,193,195,0.4) 0%, rgba(253,187,45,0.4) 100%)',
  'linear-gradient(90deg, rgba(238,174,202,0.4) 0%, rgba(148,187,233,0.4) 100%)',
];


const tilesColors = ["#476A8A", "#A69984", "#A24C34", "#0D4045", "#A67894", "#5547A5"];

type Collection = {
  id: string,
  title: string,
  label: string,
  image: string | null,
  path: string,
  cost: number,
}

type Page = {
  id: string,
  title: string,
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
  collection: Collection[];
  quickLinks: Collection[];
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
        path: '/services/' + x.keyName, title: x.name, id: x.id, serviceGroup: x.serviceGroup
      })))
    })
  });

  const categories = getCategoryCollection();

  const collections = new Promise<Collection[]>(function (resolve) {
    db.serviceGroup.findMany({
      take: 8,
      select: {
        id: true,
        name: true,
        imageName: true,
        description: true,
        vendorType: {
          select: {
            keyName: true
          }
        }
      },
      where: {
        groupTypeId: {
          not: undefined
        }
      }
    }).then(r => {
      resolve(r.map(x => ({
        id: x.id,
        title: x.name,
        path: Routes.Services.replace(':id', x.vendorType.keyName) + '?category=' + x.id,
        label: '',
        image: x.imageName ? PATH.RESOURCE_URL + x.imageName : '',
        cost: 0
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

  return defer({ categories, bannerAds, jumbotron: jumbotronList, quickLinks, collection: collections, morePages });
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

const Home = {
  Index: () => {
    const data = useLoaderData<HomePage>();

    return (
      <div >
        <Home.Jumbotron />
        <div className="container">
          <Row gutter={[0, 50]}>
            <Col span={24}>
              <Home.Services />
            </Col>
            <Col span={24}>
              <Home.QuickPick />
            </Col>
            <Col span={24}>
              <Suspense fallback={<Skeleton active />}>
                <Await resolve={data.bannerAds}>
                  {bannerData => <Banner data={bannerData.find(x => x.bannerLocation === BannerLocation.HOME_1)} />}
                </Await>
              </Suspense>
            </Col>
            <Col span={24}>
              <Row gutter={[60, 60]}>
                <Col span={24} md={16}>
                  <Home.Highlight />
                  <div className="spacer-md" />
                  <Home.Collections />
                </Col>
                <Col span={24} md={8}>

                  <Home.MoreFeatures />
                </Col>
              </Row>
            </Col>
            <Col span={24}>
              <Suspense fallback={<Skeleton active />}>
                <Await resolve={data.bannerAds}>
                  {bannerData => <Banner data={bannerData.find(x => x.bannerLocation === BannerLocation.HOME_3)} />}
                </Await>
              </Suspense>
            </Col>
          </Row>
        </div>
      </div>
    );
  },
  Jumbotron: () => {
    const data = useLoaderData<HomePage>();
    const [active, setActive] = useState(1);

    return <div className="home-slider-jumbotron">
      <Suspense fallback={<div className="container"><Skeleton active /></div>}>
        <Await resolve={data.jumbotron}>
          {jumbotron => <Carousel autoplay>
            {jumbotron.map((item, key) => <div key={'slider-' + key}>
              <div style={{ padding: '0 20px' }}>
                <Row justify={'center'}>
                  <Col xs={24} sm={24} md={20} lg={18}>
                    <div style={{ ...jumbotronItemStyle, background: `url(${item.img}) center no-repeat #c0c0c0`, backgroundSize: 'cover', minHeight: '400px' }}>
                      <Row gutter={[40, 40]} style={{ height: '100%' }} align={'bottom'}>
                        <Col xs={24} sm={24} md={14} >
                          <Title style={{ color: 'white' }} level={1}>
                            {item.title}
                          </Title>
                        </Col>
                        <Col xs={24} sm={24} md={14} >
                          <Card bordered={false}>
                            <Space direction="vertical" size={'middle'}>
                              <Title level={3}>{item.description}</Title>
                              <Link to={item.url}>
                                <Button size="large" type="primary">Visit</Button>
                              </Link>
                            </Space>
                          </Card>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>)}
          </Carousel>}
        </Await>
      </Suspense>
    </div>;
  },
  QuickPick: () => {
    const data = useLoaderData<HomePage>();

    return <div className="category-list home-section-card-wrapper">
      <Title level={2}>Featured</Title>
      <Suspense fallback={<Skeleton active />}>
        <Await resolve={data.quickLinks}>
          {response => <Row gutter={40} justify={'center'}>
            {response.map(item => <Col key={item.id} span={12} md={6}>
              <Space direction="vertical">
                <div>
                  <div className="category-badge">
                    {item.label}
                  </div>
                  <div className="category-thumb">
                    <div className="cover">
                      <Image preview={false} src={item.image || ''} fallback={FALLBACK_IMG} />
                    </div>
                    <div className="hover">
                      <Image preview={false} src={item.image || ''} fallback={FALLBACK_IMG} />
                    </div>
                    <div className="link">
                      <Link to={item.path}>
                        <RightCircleOutlined />
                      </Link>
                    </div>
                  </div>
                </div>
                <div>
                  <Link to={item.path}><Title level={5}>{item.title}</Title></Link>
                  {item.cost && <div>Starting from {item.cost}</div>}
                </div>
              </Space>
            </Col>)}
          </Row>}
        </Await>
      </Suspense>
    </div>;
  },
  Collections: () => {
    const data = useLoaderData<HomePage>();

    return <div className="home-section-card-wrapper">
      <Row justify={'space-between'} align={'middle'}>
        <Col><Title level={3}>Popular Services</Title></Col>
        <Col>View all</Col>
      </Row>
      <Suspense fallback={<Skeleton active />}>
        <Await resolve={data.collection}>
          {resolve => <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={125}
            totalSlides={resolve.length}
            visibleSlides={4}
            step={4} dragStep={4}
            className="carousel-slider-wrapper"
          >
            <Slider>{resolve.map((item, i) => <Slide className="slider-item" index={i}>
              <Space direction="vertical">
                <Link to={item.path}><Image style={{ borderRadius: '10px', width: '100%' }} preview={false} src={item.image || ''} fallback={FALLBACK_IMG} />
                </Link>
                <div>{item.label && <Tag color="success">{item.label}</Tag>}</div>
                <Link to={item.path}><Typography.Text strong>{item.title}</Typography.Text></Link>
              </Space>
            </Slide>)}
            </Slider>
            <ButtonBack className="btn _prev"><ArrowLeftOutlined /></ButtonBack>
            <ButtonNext className="btn _next"><ArrowRightOutlined /></ButtonNext>
          </CarouselProvider>}
        </Await>
      </Suspense>
      {/* <Row gutter={[20, 30]}>
        
        <Suspense fallback={<Skeleton active />}>
          <Await resolve={data.collection}>
            {resolve => resolve.map(item => <Col key={item.id} span={12} md={6}>
              <Space direction="vertical">
                <Link to={item.path}><Image style={{ borderRadius: '10px', width: '100%' }} preview={false} src={item.image || ''} fallback={FALLBACK_IMG} />
                </Link>
                <div>{item.label && <Tag color="success">{item.label}</Tag>}</div>
                <Link to={item.path}><Typography.Text strong>{item.title}</Typography.Text></Link>
              </Space>
            </Col>)}
          </Await>
        </Suspense>
      </Row> */}
    </div>
  },
  MoreFeatures: () => {
    const data = useLoaderData<HomePage>();

    return <Space direction="vertical" size={'middle'} style={{ width: '100%' }}>
      <Title level={3}>More...</Title>
      <Suspense fallback={<Skeleton active />}>
        <Await resolve={data.morePages}>
          {response => <Space direction="vertical" size={'middle'}>
            {response.map(item => <div style={{ borderRadius: '10px', overflow: 'hidden', border: '1px solid #e1e1e1', width: '100%' }} key={item.id}>
              <Row gutter={[24, 0]} align="middle">
                <Col>
                  <Link to={item.path}>
                    <Image src="" preview={false} width={100} height={100} fallback={FALLBACK_IMG} />
                  </Link>
                </Col>
                <Col flex={'auto'}>
                  <Link to={item.path}>
                    <Typography.Text strong>{item.title}</Typography.Text>
                  </Link>
                </Col>
                <Col style={{ padding: '0 40px' }}>
                  <RightOutlined />
                </Col>
              </Row>
            </div>)
            }
          </Space>}
        </Await>
      </Suspense>
      <Suspense fallback={<Skeleton active />}>
        <Await resolve={data.bannerAds}>
          {bannerData => <BannerVertical data={bannerData.find(x => x.bannerLocation === BannerLocation.HOME_2)} />}
        </Await>
      </Suspense>
      <Newsletter />
    </Space>
  },
  Services: () => {
    const loaderData = useLoaderData<typeof loader>();
    const [modalData, setIsModalOpen] = useState<HomeCategoryItem | null>(null);

    const showModal = (data: HomeCategoryItem) => {
      setIsModalOpen(data);
    };

    const handleCancel = () => {
      setIsModalOpen(null);
    };

    return <Row>
      <Col sm={24} xs={24} md={12} lg={10}>
        <Card>
          <Typography.Title level={3}>What are you looking for?</Typography.Title>
          <Suspense fallback={<Skeleton active />}>
            <Await resolve={loaderData.categories}>
              {data => <Row gutter={[20, 20]}>
                {data.map((item, index) => <Col key={item.id} flex="auto">
                  <div style={{ cursor: 'pointer', borderRadius: '5px', background: tilesColors[index], padding: '40px 20px', textAlign: 'center' }} onClick={() => showModal(item)}>
                    <Space direction="vertical" size={'small'}>
                      <Typography.Text strong style={{ color: 'white' }}>{item.title}</Typography.Text>
                    </Space>
                  </div>
                </Col>)}
              </Row>}
            </Await>
          </Suspense>
        </Card>
        <Modal title={modalData?.title} open={!!modalData} footer="" onCancel={handleCancel}>
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
        </Modal>
      </Col>
    </Row>
  },
  Highlight: () => {

    return <div className="home-section-card-wrapper _bg-pastel">
      <Row align={'middle'} gutter={[100, 30]}>
        <Col sm={4} md={6}>
          <Image preview={false} width={'100%'} height={150} style={{ borderRadius: '10px', objectFit: 'cover' }} />
        </Col>
        <Col sm={20} md={18}>
          <Typography.Title level={3}>BEST IN WEDDING</Typography.Title>
          <Typography.Title level={5}>explore all services.</Typography.Title>
          <Link to="/collections/wedding"><Button type="primary" shape="round">Explore</Button></Link>
        </Col>
      </Row>
    </div>
  }
}


export default Home.Index;