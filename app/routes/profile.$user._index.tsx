import { CameraOutlined, CommentOutlined, UserOutlined } from "@ant-design/icons";
import { LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Avatar, Button, Card, Carousel, Col, Row, Space, Typography } from "antd";
const { Title, Text } = Typography;
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Profile } from "~/types";

export async function loader({ params }: LoaderArgs): Promise<Profile> {
    const id = params.user;
    return {
        id: 'fg', portfolio: [
            'https://ld-wp73.template-help.com/wordpress/prod_15696/v7//wp-content/uploads/2022/06/portfolio1-min.png',
            'https://ld-wp73.template-help.com/wordpress/prod_15696/v7//wp-content/uploads/2022/06/portfolio2-min.png',
            'https://ld-wp73.template-help.com/wordpress/prod_15696/v7//wp-content/uploads/2022/06/portfolio3-min.png',
            'https://ld-wp73.template-help.com/wordpress/prod_15696/v7//wp-content/uploads/2022/06/portfolio4-min.png',
            'https://ld-wp73.template-help.com/wordpress/prod_15696/v7//wp-content/uploads/2022/06/portfolio5-min.png',
            'https://ld-wp73.template-help.com/wordpress/prod_15696/v7//wp-content/uploads/2022/06/portfolio6-min.png',
            'https://ld-wp73.template-help.com/wordpress/prod_15696/v7//wp-content/uploads/2022/06/portfolio7-min.png'
        ]
    };
}



const viewAllProjectsStyles: React.CSSProperties = { display: 'flex', justifyContent: 'center', overflow: "hidden", height: '50px', position: 'relative', boxShadow: '0px -40px 30px #fff' };
const quoteStyle: React.CSSProperties = { fontSize: '24px', color: '#009e66' };

const ProfileHome = {
    Index: () => {
        return <div className="container">
            <Space direction="vertical" size={'large'}>
                <ProfileHome.Services />
                <ProfileHome.Gallery />
                <ProfileHome.Testimonials />
            </Space>
        </div>;
    },
    Services: () => {
        return <div>
            <Title level={2}>My Services</Title>
            <Row>
                <Col sm={12} xs={12} md={4} lg={4} xl={8} xxl={8}>
                    <Card bordered={false}>
                        <CameraOutlined size={30} />
                        <Title level={3}>Banding</Title>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </Card>
                </Col>
            </Row>
        </div>
    },
    Gallery: () => {
        const data = useLoaderData<Profile>();

        return <Space direction="vertical" size={'large'}>
            <Row justify={'space-between'} align={'middle'} gutter={[10, 20]}>
                <Col span={24}><Title level={2}>Our amazing work</Title></Col>
                <Col>We offer versatile templates that can be used by individuals and companies looking for a simple one page template.</Col>
                <Col>
                    <Button type="primary" size="large" shape="round" href={data.id + '/portfolio'} >
                        View all project
                    </Button>
                </Col>
            </Row>
            <div>
                <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 3 }}>
                    <Masonry gutter="20px" columnsCount={3}>
                        {data.portfolio?.map((image, key) => <img src={image} key={'thumb' + key} />)}
                    </Masonry>
                </ResponsiveMasonry>
                <div style={viewAllProjectsStyles}>
                    <Button size="large" shape="round" href={data.id + '/portfolio'} >
                        View all project
                    </Button>
                </div>
            </div>
        </Space>

            ;
    },
    Testimonials: () => {
        return <div className="container">
            <Title level={2}>Testimonials</Title>
            <Carousel>
                <div>
                    <Row justify={'center'}>
                        <Col md={8} sm={24} xs={24}>
                            <Card>
                                <Space direction="vertical" size={'middle'}>
                                    <Row gutter={20} align={'middle'}>
                                        <Col>
                                            <Avatar size={64} icon={<UserOutlined />} />
                                        </Col>
                                        <Col flex={'auto'}>
                                            <Text strong>Julia</Text>
                                            <br />
                                            <Text>Bangalore</Text>
                                        </Col>
                                        <Col>
                                            <CommentOutlined style={quoteStyle} />
                                        </Col>
                                    </Row>

                                    <Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </Text>
                                </Space>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Carousel>
        </div>
    }
}

export default ProfileHome.Index;