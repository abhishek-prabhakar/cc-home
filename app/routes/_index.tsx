import { MenuOutlined, RightCircleOutlined, RightOutlined } from "@ant-design/icons";
import type { LoaderArgs, V2_MetaFunction } from "@remix-run/node";
import { Badge, Card, Carousel, Col, Layout, Row, Space, Tag } from "antd";
import { Typography } from 'antd';
import { useState } from "react";
import { Banner, BannerVertical } from "~/components/Banner";
import { Newsletter } from "~/components/Newsletter";
const { Title } = Typography;
const { Meta } = Card;
import { Link, useLoaderData } from "@remix-run/react";
import { HomePage, Jumbotron } from "~/types";

export async function loader({ params }: LoaderArgs): Promise<HomePage> {
  const id = params.user;

  const jumbotronList: Jumbotron[] = [{
    label: 'Photography',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    img: 'https://demo.craftdzine.com/html/xberg/assets/img/hero-bg1.png'
  }, {
    label: 'Photography',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    img: 'https://demo.craftdzine.com/html/xberg/assets/img/hero-bg1.png'
  }, {
    label: 'Photography',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    img: 'https://demo.craftdzine.com/html/xberg/assets/img/hero-bg1.png'
  }, {
    label: 'Photography',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    img: 'https://demo.craftdzine.com/html/xberg/assets/img/hero-bg1.png'
  }];

  return { jumbotron: jumbotronList };
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
const jumbotronItemStyle: React.CSSProperties = { width: '100%', borderRadius: '15px', background: 'url(https://demo.craftdzine.com/html/xberg/assets/img/hero-bg1.png) center no-repeat #c0c0c0' }
const jumbotronItemContentStyle = { padding: '40px' };

const JumbotronItem = () => <div style={jumbotronItemWrapperStyle}><Row style={jumbotronItemStyle} justify={'end'}>
  <Col span={24} md={12}>
    <Row gutter={[40, 40]} align={'bottom'} style={jumbotronItemContentStyle}>
      <Col span={24}>
        <Title style={{ color: 'white' }} level={2}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </Title>
      </Col>
      <Col span={24}>
        <Card bordered={false}>
          <p><Tag color="cyan">Photography</Tag></p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </Card>
      </Col>
    </Row>
  </Col>
</Row></div>;

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

    return <div style={{ height: '520px', overflow: 'hidden' }}><div style={jumbotronWrapperStyle} >
      <div style={{ ...jumbotronListStyle, width: `calc(80vw * ${data.jumbotron.length})`, transform: `translate3d(-40vw, 0px, 0px)` }} >
        {
          data.jumbotron.map((item, key) => <div key={'slider-' + key} style={{ transform: active === key ? 'none' : 'scale(0.8)' }}><JumbotronItem key={key} /></div>)
        }
      </div>
    </div></div>;
  },
  QuickPick: () => {
    const list = new Array(3).fill({
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      category: 'Phography',
      image: 'https://ld-wp.template-help.com/wordpress_63661/wp-content/uploads/2017/05/shutterstock_483145915-Converted-710x530.jpg',
      hoverImage: 'https://ld-wp.template-help.com/wordpress_63661/wp-content/uploads/2017/05/shutterstock_358321670-Converted-710x530.jpg',
    });

    return <div className="category-list">
      <Title level={2}>Featured</Title>
      <Row gutter={40}>
        {list.map((item, key) => <Col key={'cat-' + key} span={12} md={8}>
          <div className="category-badge">
            {item.category}
          </div>
          <div className="category-thumb">
            <div className="cover">
              <img src={item.image} />
            </div>
            <div className="hover">
              <img src={item.hoverImage} />
            </div>
            <div className="link">
              <Link to={'/collections/photography'}>
                <RightCircleOutlined />
              </Link>
            </div>
          </div>
          <Title level={5}>{item.title}</Title>
        </Col>)}
      </Row>
    </div>;
  },
  Collections: () => {
    const listA = new Array(3).fill({
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      category: 'Phography',
      thumb: 'https://demo.craftdzine.com/html/xberg/assets/img/recent-post/thumb6.png'
    });

    const listB = new Array(2).fill({
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      category: 'Phography',
      thumb: 'https://demo.craftdzine.com/html/xberg/assets/img/recent-post/thumb3.png'
    });

    const moreCollections = [{
      name: 'Wedding',
      thumb: 'https://demo.craftdzine.com/html/xberg/assets/img/blog/cat-4.png'
    },
    {
      name: 'Party',
      thumb: 'https://demo.craftdzine.com/html/xberg/assets/img/blog/cat-1.png'
    },
    {
      name: 'Wedding',
      thumb: 'https://demo.craftdzine.com/html/xberg/assets/img/blog/cat-3.png'
    }]

    return <Row gutter={60}>
      <Col span={24}>
        <Title level={2}>Collections</Title>
      </Col>
      <Col span={24} md={6}>
        <Space direction="vertical" size={'large'}>
          {listA.map((item, key) => <div key={'cb' + key} >
            <Space direction="vertical" size={'small'}>
              <img style={{ borderRadius: '10px', width: '100%' }} src={item.thumb} />
              <div><Badge color='lime' text='Some text' /></div>
              <Typography.Text strong>{item.title}</Typography.Text>
            </Space>
          </div>)
          }
        </Space>
      </Col>
      <Col span={24} md={10}>
        <Space direction="vertical" size={'middle'}>
          {listB.map((item, key) => <Badge.Ribbon key={'cb' + key} text="Top Rated"><Card
            hoverable
            cover={<img alt="example" src={item.thumb} />}
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card></Badge.Ribbon>)}
        </Space>
      </Col>
      <Col span={24} md={8}>
        <Space direction="vertical" size={'middle'} style={{ width: '100%' }}>
          <Title level={3}>More...</Title>
          {moreCollections.map((item, key) => <div style={{ borderRadius: '10px', overflow: 'hidden', border: '1px solid #e1e1e1' }} key={'mc' + key}>
            <Row gutter={[24, 0]} align="middle">
              <Col>
                <img src={item.thumb} height="100%" />
              </Col>
              <Col flex={'auto'}>
                <Typography.Text strong>{item.name}</Typography.Text>
              </Col>
              <Col style={{ padding: '0 40px' }}>
                <RightOutlined />
              </Col>
            </Row>
          </div>)}
          <BannerVertical />
          <Newsletter />
        </Space>
      </Col>
    </Row>
  }

}


export default Home.Index;