import { CameraOutlined, CommentOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Card, Divider, Flex, Grid, Group, Image, Loader, Space, Stack, Text, Title, rem } from "@mantine/core";
import { ActionArgs, LoaderArgs, TypedDeferredData, defer } from "@remix-run/node";
import { Await, useFetcher, useLoaderData, useNavigate } from "@remix-run/react";
import { Suspense, useEffect, useState } from "react";
import Masonry from 'react-masonry-css'
import { PhotoProvider, PhotoView } from "react-photo-view";
import Skeleton from "~/components/Skeleton";
import { PATH } from "~/path.data";
import { Vendor, VendorPortfolio, VendorProfile, VendorService } from "~/types";
import { db } from "~/utils/database";
import Stories from 'react-insta-stories';

import { CarouselProvider, Slide, Slider } from "pure-react-carousel";
import { VendorQuery } from "~/service/vendor.service";

type ProfileService = { name: string, description: string };
type loaderData = VendorProfile & VendorPortfolio & { services: ProfileService[] };
type Story = {
    url?: string;
    seeMore?: Function;
    type?: string;
    duration?: number;
    styles?: object;
    preloadResource?: boolean;
}
enum ActionType {
    STORIES = 'STORIES'
};

export async function action(args: ActionArgs) {
    const username = args.params.user;
    console.log(username, ' ------')
    if (!username) {
        return;
    }
    const form = await args.request.formData();
    const actionType = form.get('actionType')?.valueOf();
    switch (actionType) {
        case ActionType.STORIES:
            const albumId = form.get('albumId')?.toString() || null;
            return await VendorQuery.portfolioByAlbumId({
                username,
                albumId
            });
            break;
    }
    return;
}

export async function loader({ params }: LoaderArgs) {
    const username = params.user;
    if (!username) {
        new Error("404");
    };

    const portfolio = new Promise<string[]>(function (resolve) {
        db.vendorPortfolio.findMany({
            select: {
                fileName: true,
                fileType: true
            },
            where: {
                vendor: {
                    username
                }
            },
            take: 8
        }).then(r => {
            resolve(r.map(x => x.fileName ? PATH.RESOURCE_URL + x.fileName : ''))
        });

    });

    const services = new Promise<ProfileService[]>(function (resolve) {
        db.vendorServiceGroup.findMany({
            take: 3,
            select: {
                group: {
                    select: {
                        name: true,
                        description: true
                    }
                },
                cost: true
            },
            where: {
                vendor: {
                    username
                }
            }
        }).then(r => {
            resolve(r.map(x => ({ name: x.group.name, description: 'Starts from: ₹' + x.cost })));
        })
    });

    const stories = new Promise<{
        fileName: string;
        serviceGroupId: string | null;
        serviceGroup: {
            name: string;
            vendorType: {
                name: string;
            };
        } | null;
    }[]>(function (resolve) {
        VendorQuery.Stories(username).then(r => resolve(r));
    });

    return defer({
        username: username,
        portfolio: portfolio,
        services,
        stories
    });
}



const viewAllProjectsStyles: React.CSSProperties = { display: 'flex', justifyContent: 'center', overflow: "hidden", height: '50px', position: 'relative', boxShadow: '0px -40px 30px #fff' };
const quoteStyle: React.CSSProperties = { fontSize: '30px', color: '#009e66' };

const elementSize = 400;

const ProfileHome = {
    Index: () => {
        return <>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Text fw={500}>Stories</Text>
                <Space h="sm" />
                <ProfileHome.Stories />
                <Space h="lg" />
                <Stack>
                    <Text fw={700}>50+</Text>
                    <Text c="dimmed">Happy clients</Text>
                </Stack>
                <Space h="md" />
                <Divider />
                <Space h="md" />
                <Grid gutter={'lg'}>
                    <Grid.Col span={{ base: 12, md: 8 }}>
                        <Text> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 4 }}>
                        <ProfileHome.Services />
                    </Grid.Col>
                </Grid>
            </Card>
            <Space h="md" />

            <Space h="md" />
            <ProfileHome.Gallery />
            {/* <ProfileHome.Testimonials /> */}
        </>;
    },
    Stories: () => {
        const data = useLoaderData<typeof loader>();
        const fetcher = useFetcher<typeof action>();
        const [isMobile, setMobile] = useState(false);
        const [stories, setStories] = useState<Story[]>([]);

        useEffect(() => {
            setMobile(window?.innerWidth < 600);
        }, []);

        useEffect(() => {
            const list = fetcher.data?.map<Story>(x => ({ url: PATH.RESOURCE_URL + x.fileName })) || [];
            setStories(list);
        }, [fetcher?.data])

        function loadStories(id: string | null) {
            fetcher.submit({
                actionType: ActionType.STORIES,
                albumId: id || ''
            }, {
                method: 'post'
            });
        }

        function sliderCount() { return isMobile ? 1 : 4; }

        return <Suspense fallback={<Skeleton />}>
            <Await resolve={data.stories}>
                {
                    album => <CarouselProvider
                        naturalSlideWidth={300}
                        naturalSlideHeight={400}
                        totalSlides={album.length}
                        visibleSlides={sliderCount()}
                        isIntrinsicHeight={true}
                        step={sliderCount()} dragStep={sliderCount()}
                        className="carousel-slider-wrapper"
                    >

                        <Slider>
                            {album?.map((item, i) => <Slide key={'s' + item.serviceGroupId} index={i}>
                                <PhotoProvider>  <PhotoView width={500} height={500} render={({ scale, attrs }) => {
                                    const width: any = attrs.style?.width || 0;
                                    const offset = (width - elementSize) / elementSize;
                                    const childScale = scale === 1 ? scale + offset : 1 + offset;

                                    return <div {...attrs}><div style={{ transform: `scale(${childScale})`, width: elementSize, transformOrigin: '0 0' }}>{
                                        stories?.length ? <Stories
                                            stories={stories}
                                            defaultInterval={1500}
                                            width={'inherit'}
                                            height={'inherit'}
                                        /> : <Loader />}</div></div>
                                }}>
                                    <Image w={rem(180)} h={rem(260)} radius={'sm'} src={PATH.RESOURCE_URL + item.fileName} onClick={() => loadStories(item.serviceGroupId)} fit="cover" />
                                </PhotoView>
                                </PhotoProvider>
                            </Slide>)}
                        </Slider>
                    </CarouselProvider>}
            </Await>
        </Suspense>;
    },
    Services: () => {
        const data = useLoaderData<loaderData>();

        return <Stack>

            <Text fw={700}>Popular Services</Text>
            <Suspense fallback={<Skeleton />}>
                <Await resolve={data.services}>
                    {services =>
                        <Stack>
                            {services.map((x, i) => <Group>
                                <Text>{x.name}</Text>
                                <Text c="dimmed">{x.description}</Text>
                            </Group>
                            )}
                        </Stack>
                    }
                </Await>
            </Suspense>
        </Stack>
    },
    Gallery: () => {
        const data = useLoaderData<loaderData>();
        const navigate = useNavigate();

        return <Stack>
            <Grid justify={'space-between'} align={'middle'} gutter={'sm'}>
                <Grid.Col span={12}><Title order={2}>Our amazing work</Title></Grid.Col>
                <Grid.Col span={'auto'}>We offer versatile templates that can be used by individuals and companies looking for a simple one page template.</Grid.Col>
                <Grid.Col span={{ base: 12, md: 'content' }}>
                    <Button variant="outline" radius={'xl'} onClick={() => navigate('portfolio')} >
                        View all project
                    </Button>
                </Grid.Col>
            </Grid>
            <div>
                <PhotoProvider>
                    <Suspense fallback={<Skeleton />}>
                        <Await resolve={data.portfolio}>
                            {portfolio => <>
                                <Masonry className="masonry-grid" columnClassName="masonry-grid_column" breakpointCols={3}>{portfolio?.map((image, key) => <PhotoView key={'thumb' + key} src={image}>
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
                    <Button variant="outline" size="xs" radius={'xl'} onClick={() => navigate('portfolio')} >
                        View all project
                    </Button>
                </div>
            </div>
        </Stack>;
    },
    Testimonials: () => {
        return <div className="container">
            <Title order={2} style={{ textAlign: 'center' }}>Testimonials</Title>
            {/* <Carousel>
                <div>
                    <Grid justify={'center'}>
                        <Grid.Col md={8} sm={24} xs={24}>
                            <Card>
                                <Space direction="vertical" size={'middle'}>
                                    <Grid gutter={20} align={'middle'}>
                                        <Grid.Col>
                                            <Avatar size={64} icon={<UserOutlined />} />
                                        </Grid.Col>
                                        <Grid.Col flex={'auto'}>
                                            <Text strong>Julia</Text>
                                            <br />
                                            <Text>Bangalore</Text>
                                        </Grid.Col>
                                        <Grid.Col>
                                            <CommentOutlined style={quoteStyle} />
                                        </Grid.Col>
                                    </Grid>

                                    <Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </Text>
                                </Space>
                            </Card>
                        </Grid.Col>
                    </Grid>
                </div>
            </Carousel> */}
        </div>
    }
}

export default ProfileHome.Index;