import { MenuOutlined, RightCircleOutlined, RightOutlined } from "@ant-design/icons";
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
import { BannerItem, Jumbotron } from "~/types";
import { getCategoryCollection, getJumbotronList } from "~/service/homepage.service";


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
      take: 3,
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
      resolve(r.map(x => ({ id: x.id, title: x.name, image: x.imageName ? PATH.RESOURCE_URL + x.imageName : '', label: x.vendorType.name, path: `/collections/${x.vendorType.keyName}?category=${x.id}`, cost: x.serviceGroupItem[0]?.service?.vendorService[0]?.cost })));
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
        path: '/collections/' + x.keyName, title: x.name, id: x.id, serviceGroup: x.serviceGroup
      })))
    })
  });

  const categories = getCategoryCollection();

  const collections = new Promise<Collection[]>(function (resolve) {
    db.service.findMany({
      take: 5,
      select: {
        id: true,
        name: true,
        imageName: true,
        serviceGroupItem: {
          take: 1,
          select: {
            group: {
              select: {
                vendorType: {
                  select: {
                    name: true,
                    keyName: true
                  }
                }
              }
            }
          }
        }
      },
      where: {
        serviceGroupItem: {
          some: {
            id: {
              not: undefined
            }
          }
        }
      }
    }).then(r => {
      resolve(r.map(x => ({
        id: x.id,
        title: x.name,
        path: `/${x.serviceGroupItem[0]?.group.vendorType.keyName}/${x.id}`,
        label: x.serviceGroupItem[0]?.group.vendorType.name,
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
              <Home.Collections />
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

    return <div className="category-list">
      <Title level={2}>Featured</Title>
      <Suspense fallback={<Skeleton active />}>
        <Await resolve={data.quickLinks}>
          {response => <Row gutter={40} justify={'center'}>
            {response.map(item => <Col key={item.id} span={12} md={8}>
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
                  <Link to={item.path}><Title level={4}>{item.title}</Title></Link>
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

    return <div>
      <Title level={2}>Collections</Title>
      <Row gutter={[60, 60]}>
        <Col span={24} md={6}>
          <Suspense fallback={<Skeleton active />}>
            <Await resolve={data.collection}>
              {resolve => <Space direction="vertical" size={'large'}>
                {resolve.slice(2).map(item => <div key={item.id} >
                  <Space direction="vertical" size={'small'}>
                    <Image style={{ borderRadius: '10px', width: '100%' }} preview={false} src={item.image || ''} fallback={FALLBACK_IMG} />
                    <div>{item.label && <Tag color="success">{item.label}</Tag>}</div>
                    <Typography.Text strong>{item.title}</Typography.Text>
                  </Space>
                </div>)
                }
              </Space>}
            </Await>
          </Suspense>
        </Col>
        <Col span={24} md={10}>
          <Suspense fallback={<Skeleton active />}>
            <Await resolve={data.collection}>
              {resolve => <Space direction="vertical" size={'middle'}>
                {resolve.slice(0, 2).map(item => <Badge.Ribbon key={item.id} text="Top Rated"><Link to={item.path}><Card
                  hoverable
                  cover={<Image preview={false} alt={item.title} fallback={FALLBACK_IMG} src={item.image || ''} />}
                >
                  <Meta title={item.title} description={'Starting from ' + item.cost} />
                </Card></Link></Badge.Ribbon>)}
              </Space>
              }
            </Await>
          </Suspense>
        </Col>
        <Col span={24} md={8}>
          <Space direction="vertical" size={'middle'} style={{ width: '100%' }}>
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
        </Col>
      </Row>
    </div>
  },
  Services: () => {
    const loaderData = useLoaderData<typeof loader>();
    const [modalData, setIsModalOpen] = useState<{
      id: string,
      title: string,
      path: string,
      serviceGroup: {
        id: string;
        name: string;
        imageName?: string | null;
        collection?: string;
      }[]
    } | null>(null);

    const showModal = (data: Page) => {
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
                {data.map(item => <Col key={item.id} xs={12} sm={12} md={8} lg={8} xl={8}>
                  <div style={{ cursor: 'pointer' }} onClick={() => showModal(item)}>
                    <Space direction="vertical" size={'small'}>
                      <Image width={'100%'} preview={false} src={FALLBACK_IMG} />
                      <Typography.Text strong>{item.title}</Typography.Text>
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
              {index - 1 < 0 || item.collection !== modalData.serviceGroup[index - 1]?.collection ? <Col xs={24} key={item.id}><Title level={5}>{item.collection || 'Other services'}</Title></Col> : ''}
              <Col xs={12} sm={12} md={8} key={item.id}>
                <Link to={modalData.path + '?category=' + item.id}>
                  <Image preview={false} src={item.imageName ? PATH.RESOURCE_URL + item.imageName : FALLBACK_IMG} />
                  <div>{item.name}</div>
                </Link>
              </Col></>)}
          </Row>
        </Modal>
      </Col>
    </Row>
  }
}


export default Home.Index;