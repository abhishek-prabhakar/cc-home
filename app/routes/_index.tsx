import { MenuOutlined, RightCircleOutlined, RightOutlined } from "@ant-design/icons";
import { defer, TypedDeferredData, type LoaderArgs, type V2_MetaFunction } from "@remix-run/node";
import { Badge, Card, Carousel, Col, Image, Layout, Row, Skeleton, Space, Tag } from "antd";
import { Typography } from 'antd';
import { Suspense, useState } from "react";
import { Banner, BannerVertical } from "~/components/Banner";
import { Newsletter } from "~/components/Newsletter";
const { Title } = Typography;
const { Meta } = Card;
import { Await, Link, useLoaderData } from "@remix-run/react";
import { db } from "~/utils/database";
import { PATH } from "~/path.data";


type Jumbotron = {
  title: string,
  description: string,
  label: string,
  img: string
}

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
}


type HomePage = {
  jumbotron: Jumbotron[];
  collection: Collection[];
  quickLinks: Collection[];
  morePages: Page[];
};

export async function loader({ params }: LoaderArgs): Promise<TypedDeferredData<{
  jumbotron: Jumbotron[];
  collection: Promise<Collection[]>;
  morePages: Promise<Page[]>;
}>> {
  const id = params.user;

  const jumbotronList: Jumbotron[] = [{
    label: 'Photography',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    img: 'https://www.bollywoodshaadis.com/img-scale/640/article-2015822113182847908000.jpg'
  }, {
    label: 'Photography',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    img: 'https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/k-53-teddy-3307_0.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=e92a96a06ad219e23a637e8a2e784b78'
  }];

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
        keyName: true
      }
    }).then(r => {
      resolve(r.map(x => ({ path: '/collections/' + x.keyName, title: x.name, id: x.id })))
    })
  });

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
  })

  return defer({ jumbotron: jumbotronList, quickLinks, collection: collections, morePages });
}

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
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
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const Home = {
  Index: () => {
    return (
      <div >
        <Home.Jumbotron />
        <div className="container">
          <Space direction="vertical" size={'large'}>
            <Home.QuickPick />
            <Banner />
            <Home.Collections />
            <Banner />
          </Space>
        </div>
      </div>
    );
  },
  Jumbotron: () => {
    const data = useLoaderData<HomePage>();
    const [active, setActive] = useState(1);

    return <div className="home-slider-jumbotron"><Carousel>
      {data.jumbotron.map((item, key) => <div key={'slider-' + key}>
        <div style={{ padding: '0 20px' }}>
          <Row justify={'center'}>
            <Col xs={24} sm={24} md={20} lg={18}>
              <div style={{ ...jumbotronItemStyle, background: `url(${item.img}) center no-repeat #c0c0c0` }}>
                <Row gutter={[40, 40]} align={'bottom'} justify={'end'}>
                  <Col xs={24} sm={24} md={14} >
                    <Title style={{ color: 'white' }} level={2}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </Title>
                  </Col>
                  <Col xs={24} sm={24} md={14} >
                    <Card bordered={false}>
                      <p><Tag color="cyan">Photography</Tag></p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </Card>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </div>)}
    </Carousel></div>;
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

    return <Row gutter={[60, 60]}>
      <Col span={24}>
        <Title level={2}>Collections</Title>
      </Col>
      <Col span={24} md={6}>
        <Await resolve={data.collection}>
          {resolve => <Space direction="vertical" size={'large'}>
            {resolve.slice(2).map(item => <div key={item.id} >
              <Space direction="vertical" size={'small'}>
                <Image style={{ borderRadius: '10px', width: '100%' }} preview={false} src={item.image || ''} fallback={FALLBACK_IMG} />
                <div><Badge color='lime' text={item.label} /></div>
                <Typography.Text strong>{item.title}</Typography.Text>
              </Space>
            </div>)
            }
          </Space>}
        </Await>
      </Col>
      <Col span={24} md={10}>
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
      </Col>
      <Col span={24} md={8}>
        <Space direction="vertical" size={'middle'} style={{ width: '100%' }}>
          <Title level={3}>More...</Title>
          <Await resolve={data.morePages}>
            {response => <Space direction="vertical">
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
          <BannerVertical />
          <Newsletter />
        </Space>
      </Col>
    </Row>
  }
}


export default Home.Index;