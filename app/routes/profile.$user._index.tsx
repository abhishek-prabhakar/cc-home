import { CameraOutlined, CommentOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Card, Divider, Flex, Grid, Group, Image, Loader, Modal, Overlay, ScrollArea, Space, Stack, Text, Title, px, rem } from "@mantine/core";
import { ActionArgs, LoaderArgs, TypedDeferredData, defer } from "@remix-run/node";
import { Await, useFetcher, useLoaderData, useNavigate, useOutletContext } from "@remix-run/react";
import { Suspense, useEffect, useState } from "react";
import Masonry from 'react-masonry-css'
import { PhotoProvider, PhotoSlider, PhotoView } from "react-photo-view";
import Skeleton from "~/components/Skeleton";
import { PATH } from "~/path.data";
import { PortfolioItem, Vendor, VendorPortfolio, VendorProfile, VendorService, VendorServicePublic } from "~/types";
import { db } from "~/utils/database";
import Stories from 'react-insta-stories';

import { CarouselProvider, Slide, Slider } from "pure-react-carousel";
import { VendorQuery } from "~/service/vendor.service";
import VideoPreviewItem from "~/components/VideoPreviewItem";
import { useMediaQuery } from "@mantine/hooks";

type ProfileService = { name: string, description: string };
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


type OutletContextData = {
    activeGroupData: VendorServicePublic,
    profileData:  VendorProfile
}

export async function action(args: ActionArgs) {
    const username = args.params.user;
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

export async function loader({ params, request }: LoaderArgs) {
    const username = params.user;
    if (!username) {
        throw new Response('Page not found',{
			status: 404,
		});
    };

    const searchParams = new URL(request.url).searchParams;
    const preselectedServiceGrpId = searchParams.get('service')?.toString();

    const portfolio = new Promise<PortfolioItem[]>(function (resolve, reject) {
        db.vendorPortfolio.findMany({
            orderBy: {
                createdAt: 'desc'
            },
            select: {
                fileName: true,
                fileType: true
            },
            where: {
                vendor: {
                    username
                },
                serviceGroupId: {
                    in: preselectedServiceGrpId ? [preselectedServiceGrpId] : undefined,
                },
            },
            take: 9
        }).then(r => {
            resolve(r.map(x => ({ type: x.fileType, value: x.fileName })))
        }).catch(e => {
            reject('Connection failed');
        });;

    });
    
      const  featuredPortfolio = new Promise<PortfolioItem[]>(function (resolve, reject) {
        db.vendorPortfolio.findMany({
            orderBy: {
                createdAt: 'desc'
            },
            select: {
                fileName: true,
                fileType: true
            },
            where: {
                vendor: {
                    username
                },
                serviceGroupId:{
                    notIn: preselectedServiceGrpId? [preselectedServiceGrpId]: []
                }
            },
            take: 10
        }).then(r => {
            resolve(r.map(x => ({ type: x.fileType, value: x.fileName })))
        }).catch(e => {
            reject('Connection failed');
        });;

    });

    const services = new Promise<ProfileService[]>(function (resolve, reject) {
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
        }).catch(e => {
            reject('Connection failed');
        });
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
        preselectedServiceGrpId,
        username: username,
        portfolio: portfolio,
        featuredPortfolio,
        services,
        stories
    });
}



const viewAllProjectsStyles: React.CSSProperties = { display: 'flex', justifyContent: 'center', overflow: "hidden", height: '50px', position: 'relative', boxShadow: '0px -40px 30px #fff' };
const quoteStyle: React.CSSProperties = { fontSize: '30px', color: '#009e66' };

const elementSize = 400;

const ProfileHome = {
    Index: () => {
        const data = useLoaderData<typeof loader>();
        const outletContext = useOutletContext<OutletContextData>();

        return <>
            <ProfileHome.Stories />
            <Space h="xl" />
            <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Stack gap={0}>
                    <Text fw={700}>50+</Text>
                    <Text c="dimmed">Happy clients</Text>
                </Stack>
                <Space h="md" />
                <Divider />
                <Space h="md" />
                <Grid gutter={'xl'}>
                    <Grid.Col span={{ base: 12, md: 8 }}>
                        <Title order={4} c={'var(--ui-color-primary)'}>About me</Title>
                        <Space h="sm" />
                        <Divider size="lg" w="50px" style={{
                            borderColor: '#2a2a2a'
                        }} />
                        <Space h="md" />
                        <Text>{outletContext?.profileData?.bio}</Text>
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
        const isWideScreen = useMediaQuery('(min-width: 56.25em)');
        const [stories, setStories] = useState<Story[]>([]);

        useEffect(() => {
            const list = fetcher.data?.map<Story>(x => ({ url: PATH.THUMB_URL + x.fileName })) || [];
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

        function sliderCount() { return isWideScreen ? 6 : 3; }

        return <>
            <Suspense fallback={<Skeleton />}>
                <Await resolve={data.stories}>
                    {
                        album => album?.length ? <>
                            <Text fw={500}>Stories</Text>
                            <Space h="sm" />
                            <CarouselProvider
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
                                        <div style={{ borderRadius: '3px', overflow: 'hidden' }}>
                                            <div className="story-block" onClick={() => loadStories(item.serviceGroupId)}>
                                                <div style={{ position: 'relative', cursor: 'pointer' }}>
                                                    <Image visibleFrom="md" w={'100%'} h={px('12rem')} radius={'xs'} src={PATH.THUMB_URL + item.fileName} fit="cover" />
                                                    <Image hiddenFrom="md" w={'100%'} h={px('10rem')} radius={'xs'} src={PATH.THUMB_URL + item.fileName} fit="cover" />
                                                    <Overlay
                                                        gradient="linear-gradient(45deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0) 100%)"
                                                        opacity={0.85}
                                                        p={{base: 'xs', md:  'md'}}
                                                    >
                                                        <Flex align={'end'} h="100%">
                                                            <Text fw={500} c="white">{item.serviceGroup?.name || 'Highlights'}</Text>
                                                        </Flex>
                                                    </Overlay>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>)}
                                </Slider>
                            </CarouselProvider>
                        </> : ''}
                </Await>
            </Suspense>
            <Modal.Root opened={!!stories.length} onClose={() => setStories([])} p={0} centered>
                <Modal.Overlay />
                <Modal.Content p={0}>
                    <Modal.Body p={0}>
                        {stories.length ? <Stories
                            stories={stories}
                            defaultInterval={1500}
                            width={'inherit'}
                            height={'80vh'}
                        /> : 'Nothing to display'}
                    </Modal.Body>
                </Modal.Content>
            </Modal.Root>
        </>;
    },
    Services: () => {
        const data = useLoaderData<typeof loader>();

        return <Stack>

            <Text fw={700}>Popular Services</Text>
            <Suspense fallback={<Skeleton />}>
                <Await resolve={data.services}>
                    {services =>
                        <Stack>
                            {services.map((x, i) => <Group gap="xs">
                                <Text>{x.name}</Text>
                                <Text c="dimmed" size="sm">{x.description}</Text>
                            </Group>
                            )}
                        </Stack>
                    }
                </Await>
            </Suspense>
        </Stack>
    },
    Gallery: () => {
        const data = useLoaderData<typeof loader>();
        const navigate = useNavigate();
        const outletContext = useOutletContext<OutletContextData>();

        const sectionTitle = data?.preselectedServiceGrpId? 'in '+ outletContext?.activeGroupData?.title:'';

        return <Stack>
            <Grid justify={'space-between'} align={'middle'} gutter={'sm'}>
                <Grid.Col span="content"><Title order={4}>Best works {sectionTitle}</Title></Grid.Col>
                <Grid.Col span="content">
                    <Button variant="subtle" radius={'xl'} onClick={() => navigate('portfolio')} >
                        See all
                    </Button>
                </Grid.Col>
            </Grid>
            <div>
                <PhotoProvider>
                    <Suspense fallback={<Skeleton />}>
                        <Await resolve={data.portfolio}>
                            {portfolio => <>
                                <Masonry className="masonry-grid" columnClassName="masonry-grid_column" breakpointCols={3}>{portfolio?.map((image, key) =>
                                    image.type === 'youtube' ?
                                        <div key={'thumb' + key} style={{ height: '240px', marginBottom: '30px' }}>
                                            <VideoPreviewItem ytId={image.value} />
                                        </div> :
                                        <PhotoView key={'thumb' + key} src={PATH.RESOURCE_URL + image.value}>
                                            <Image radius={'md'} src={PATH.THUMB_URL + image.value} className="cursor-pointer" />
                                        </PhotoView>)}
                                </Masonry>
                                {!portfolio.length ? 'Sorry, This profile doesnt contains any works to display' : ''}
                            </>
                            }
                        </Await>
                    </Suspense>
                </PhotoProvider>
                <Space h={'xl'}/>
               {data.preselectedServiceGrpId? <PhotoProvider>
                    <Suspense fallback={<Skeleton />}>
                        <Await resolve={data.featuredPortfolio}>
                            {portfolio => <>
                            <Title order={5}>Other works</Title>
                            <Space h={'sm'}/>
                                <Masonry className="masonry-grid" columnClassName="masonry-grid_column" breakpointCols={{default: 5, '800': 3 }}>{portfolio?.map((image, key) =>
                                    image.type === 'youtube' ?
                                        <div key={'thumb' + key} style={{ height: '240px', marginBottom: '30px' }}>
                                            <VideoPreviewItem ytId={image.value} />
                                        </div> :
                                        <PhotoView key={'thumb' + key} src={PATH.RESOURCE_URL + image.value}>
                                            <Image radius={'md'} src={PATH.THUMB_URL + image.value} className="cursor-pointer" />
                                        </PhotoView>)}
                                </Masonry>
                            </>
                            }
                        </Await>
                    </Suspense>
                </PhotoProvider> : ''}
                <div style={viewAllProjectsStyles}>
                    <Button variant="outline" size="xs" radius={'xl'} onClick={() => navigate('portfolio')} >
                        See all works
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