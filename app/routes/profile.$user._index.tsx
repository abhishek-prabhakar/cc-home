import { Box, Button, Card, Center, Divider,  Grid, Group, Image,   List,   Overlay, Popover, Rating,   Space, Stack, Text, Title } from "@mantine/core";
import { ActionArgs, LoaderArgs,  defer } from "@remix-run/node";
import { Await, Link, useFetcher, useLoaderData, useNavigate, useOutletContext } from "@remix-run/react";
import { Suspense, useEffect, useState } from "react";
import Masonry from 'react-masonry-css'
import { PhotoProvider,  PhotoView } from "react-photo-view";
import Skeleton from "~/components/Skeleton";
import { PATH } from "~/path.data";
import { PortfolioItem, VendorProfile, VendorServicePublic } from "~/types";
import { db } from "~/utils/database";
import { VendorQuery } from "~/service/vendor.service";
import VideoPreviewItem from "~/components/VideoPreviewItem";
import Routes from "~/routes.data";
import StoriesStrip, { Story } from "~/components/StoriesStrip";
import { DiscountType } from "@prisma/client";
import Currency from "~/utils/currency.transformer";
import { IconArrowNarrowLeft, IconArrowNarrowRight, IconDiscount2 } from "@tabler/icons-react";
import { ButtonBack, ButtonNext, CarouselProvider, Slide, Slider } from "pure-react-carousel";
import { useMediaQuery } from "@mantine/hooks";

type ProfileService = { id: string,name: string, description: string };
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
                        id: true,
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
            resolve(r.map(x => ({ id: x.group.id, name: x.group.name, description: 'Starts from: ₹' + x.cost })));
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


   const reviews = await db.bookingService.count({
        where:{
            vendorServiceGroup:{
                vendor:{
                    username
                }
            },
            rating:{
                gt: 0
            }
        }
    });

    const packageDeals = VendorQuery.packageDeals(username);

    return defer({
        preselectedServiceGrpId,
        username: username,
        portfolio: portfolio,
        featuredPortfolio,
        services,
        stories,
        reviews,
        packageDeals
    });
}



const viewAllProjectsStyles: React.CSSProperties = { display: 'flex', justifyContent: 'center', overflow: "hidden", height: '50px', position: 'relative', boxShadow: '0px -40px 30px #fff' };

const ProfileHome = {
    Index: () => {
        const outletContext = useOutletContext<OutletContextData>();
        const data = useLoaderData<typeof loader>();

        return <>
            <ProfileHome.Stories />
            <Space h="xl" />
            <Suspense fallback={<Skeleton/>}>
                <Await resolve={data.reviews}>
                    {
                    (reviews) => <Card shadow="sm" padding="lg" radius="md" withBorder>
                        <Grid align="center" gutter="lg">
                            <Grid.Col span={'content'}>
                                <Stack gap={0}>
                                    <Text fw={700}>50+</Text>
                                    <Text c="dimmed">Happy clients</Text>
                                </Stack>
                            </Grid.Col>
                            <Grid.Col span={'content'}>
                                <Divider h={50} orientation="vertical"/>
                            </Grid.Col>
                            <Grid.Col span={'auto'}>
                                {outletContext?.profileData?.rating? <><Box pos="relative">
                                    <Rating value={outletContext?.profileData?.rating} fractions={3} readOnly={true} size="sm" />
                                    <Overlay color="#fff" backgroundOpacity={0} />
                                </Box>
                                <Text c="dimmed">{reviews} reviews</Text>
                                </>: <Text c="dimmed">Not rated yet.</Text>}
                            </Grid.Col>
                        </Grid>
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
                    }
                </Await>
            </Suspense>
            <Space h="xl" />
            <ProfileHome.Packages/>
            <Space h="xl" />
            <ProfileHome.Gallery />
            {/* <ProfileHome.Testimonials /> */}
        </>;
    },
    Stories: () => {
        const data = useLoaderData<typeof loader>();
        const fetcher = useFetcher<typeof action>();
        const [stories, setStories] = useState<Story[]>([]);

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

        return <>
            <Suspense fallback={<Skeleton />}>
                <Await resolve={data.stories}>
                    {
                        album => album?.length ? <>
                            <Text fw={500}>Stories</Text>
                            <Space h="sm" />
                            <StoriesStrip album={album} stories={stories} onLoadStories={loadStories} />
                        </> : ''}
                </Await>
            </Suspense>
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
                            {services.map((x, i) => <Group gap="xs" key={x.id}>
                                <Link to={Routes.get('VendorProfileWithService',{id: data.username, sGrpId: x.id })+'#book-now-section'}><Text>{x.name}</Text></Link>
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
    Packages: () =>{
        const data = useLoaderData<typeof loader>();
        const isWideScreen = useMediaQuery('(min-width: 56.25em)');

        function sliderCount() { return isWideScreen ? 4 : 2; }

        return <Suspense fallback={<Skeleton/>}>
            <Await resolve={data.packageDeals}>
                {response => response.length? <Box>
                    <Group align="start">
                        <IconDiscount2/>
                        <Box>
                            <Title order={4}>Deals & Offers</Title>
                            <Text>Save big with combo packs.</Text>
                        </Box>
                    </Group>
                    <Space h={'md'}/>
                    <CarouselProvider
                        naturalSlideWidth={300}
                        naturalSlideHeight={400}
                        totalSlides={response.length}
                        visibleSlides={sliderCount()}
                        isIntrinsicHeight={true}
                        step={sliderCount()} dragStep={sliderCount()}
                        className="carousel-slider-wrapper"
                    >

                        <Slider>
                        {response.map((item,i) => <Slide key={'s' + item.id} index={i}>
                            <Card key={item.id} variant="coupon" radius={'lg'} h={'100%'} color={i%2? 'green':''}>
                            <Card.Section p={'lg'} style={{flex: 1}}>
                                <Stack align="center" justify="center" gap={0} h={'100%'}>
                                    <Title order={5} ta={'center'} tt={'capitalize'}>{item.name}</Title>
                                    <Popover width={200} position="bottom" withArrow shadow="md">
                                        <Popover.Target>
                                            <Text style={{cursor: 'pointer'}} ta={'center'} size="md">{item.PackageItem.length} services</Text>
                                        </Popover.Target>
                                        <Popover.Dropdown style={{ pointerEvents: 'none' }}>
                                            <List>
                                            {item.PackageItem.map((x,i) => <List.Item key={i}>{x.ServiceGroup.name}</List.Item>)}
                                            </List>
                                        </Popover.Dropdown>
                                    </Popover>
                                    <Space h={'md'}/>
                                    <Group>
                                        <Title order={3}>{item.discountType === DiscountType.FLAT? <Currency value={item.discountValue}/>: item.discountValue+'%'}</Title>
                                        <Title order={5}>OFF</Title>
                                    </Group>
                                </Stack>
                            </Card.Section>
                            <Center>
                                <Link to={Routes.get('VendorPackage',{ username: data.username, id: item.keyName})}><Button size="sm" color="black" radius="xl">Book Now</Button></Link>
                            </Center>
                        </Card>
                        </Slide>) }
                    </Slider>
                    <ButtonBack className="btn _prev"><IconArrowNarrowLeft /></ButtonBack>
                    <ButtonNext className="btn _next"><IconArrowNarrowRight /></ButtonNext>
                    </CarouselProvider>
                    </Box>: <></>}
            </Await>
        </Suspense>
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