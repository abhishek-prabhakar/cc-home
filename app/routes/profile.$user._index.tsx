import { CameraOutlined, CommentOutlined, UserOutlined } from "@ant-design/icons";
import { LoaderArgs, TypedDeferredData, defer } from "@remix-run/node";
import { Await, useLoaderData, useNavigate } from "@remix-run/react";
import { Avatar, Button, Card, Carousel, Col, Row, Skeleton, Space, Typography } from "antd";
import { Suspense } from "react";
const { Title, Text } = Typography;
import Masonry from 'react-masonry-css'
import { PhotoProvider, PhotoView } from "react-photo-view";
import { PATH } from "~/path.data";
import { Vendor, VendorPortfolio, VendorProfile, VendorService } from "~/types";
import { db } from "~/utils/database";

type ProfileService = { name: string, description: string };
type loaderData = VendorProfile & VendorPortfolio & { services: ProfileService[] };


export async function loader({ params }: LoaderArgs): Promise<TypedDeferredData<any>> {
    const username = params.user;
    const portfolio = new Promise<string[]>(function (resolve) {
        db.vendorPortfolio.findMany({
            select: {
                fileName: true,
                fileType: true
            },
            where: {
                vendors: {
                    username
                }
            },
            take: 8
        }).then(r => {
            resolve(r.map(x => x.fileName ? PATH.RESOURCE_URL + x.fileName : ''))
        });

    });

    const services = new Promise<ProfileService[]>(function (resolve) {
        db.service.findMany({
            take: 3,
            select: {
                name: true
            },
            where: {
                vendorServices: {
                    some: {
                        vendors: {
                            username
                        }
                    }
                }
            }
        }).then(r => {
            resolve(r.map(x => ({ name: x.name, description: '' })));
        })
    })


    return defer({
        id: username,
        fullName: 'Jessica',
        location: 'Bangalore',
        gender: 'Male',
        type: 'Photo',
        username: username,
        portfolio: portfolio,
        services
    });
}



const viewAllProjectsStyles: React.CSSProperties = { display: 'flex', justifyContent: 'center', overflow: "hidden", height: '50px', position: 'relative', boxShadow: '0px -40px 30px #fff' };
const quoteStyle: React.CSSProperties = { fontSize: '30px', color: '#009e66' };

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
        const data = useLoaderData<loaderData>();

        return <div>
            <Title level={2}>My Services</Title>
            <Suspense fallback={<Skeleton active avatar paragraph={{ rows: 4 }} />}>
                <Await resolve={data.services}>
                    {services =>
                        <Row gutter={[40, 40]}>
                            {services.map(x => <Col sm={12} xs={12} md={4} lg={4} xl={8} xxl={8}>
                                <Card bordered={false}>
                                    <CameraOutlined style={quoteStyle} />
                                    <Title level={3}>{x.name}</Title>
                                    {x.description}
                                </Card>
                            </Col>
                            )}
                        </Row>
                    }
                </Await>
            </Suspense>
        </div>
    },
    Gallery: () => {
        const data = useLoaderData<loaderData>();
        const navigate = useNavigate();

        return <Space direction="vertical" size={'large'}>
            <Row justify={'space-between'} align={'middle'} gutter={[10, 20]}>
                <Col span={24}><Title level={2}>Our amazing work</Title></Col>
                <Col>We offer versatile templates that can be used by individuals and companies looking for a simple one page template.</Col>
                <Col>
                    <Button type="primary" size="large" shape="round" onClick={() => navigate('portfolio')} >
                        View all project
                    </Button>
                </Col>
            </Row>
            <div>
                <PhotoProvider>
                    <Suspense fallback={<Skeleton active avatar paragraph={{ rows: 4 }} />}>
                        <Await resolve={data.portfolio}>
                            {portfolio => <>
                                <Masonry className="masonry-grid" columnClassName="masonry-grid_column" breakpointCols={{ 350: 2, 750: 3, 900: 3 }}>{portfolio?.map((image, key) => <PhotoView key={'thumb' + key} src={image}>
                                    <img src={image} className="cursor-pointer" />
                                </PhotoView>)}
                                </Masonry>
                                {!portfolio.length ? 'Sorry, This profile doesnt contains any works to display' : ''}
                            </>
                            }
                        </Await>
                    </Suspense>
                </PhotoProvider>
                <div style={viewAllProjectsStyles}>
                    <Button size="large" shape="round" onClick={() => navigate('portfolio')} >
                        View all project
                    </Button>
                </div>
            </div>
        </Space>;
    },
    Testimonials: () => {
        return <div className="container">
            <Title level={2} style={{ textAlign: 'center' }}>Testimonials</Title>
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