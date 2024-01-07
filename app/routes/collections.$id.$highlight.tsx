import { LoaderArgs, defer } from "@remix-run/node";
import { Await, Link, useLoaderData } from "@remix-run/react";
import { Avatar, Col, Grid, Image, Row, Skeleton, Space, Typography } from "antd";
import { Suspense } from "react";
import { PATH } from "~/path.data";
import Routes from "~/routes.data";
import CollectionService from "~/service/collections.service";
import { VendorQuery } from "~/service/vendor.service";
import { db } from "~/utils/database";


export function loader(args: LoaderArgs) {
    const collectionKey = args.params.id;
    const highlightId = args.params.highlight;
    if (!collectionKey || !highlightId) {
        return null;
    }
    const data = CollectionService.getCollectionByType(collectionKey, highlightId);
    const related = CollectionService.getRelatedCollectionByType(collectionKey, highlightId);
    const topRatedVendors = VendorQuery.topRatedVendorsByType(highlightId);

    return defer({
        data,
        related,
        topRatedVendors,
        highlightId,
        collectionKey
    });
}


const CollectionsHighlightPage = {
    Index: () => {
        return <div className="container">
            <CollectionsHighlightPage.Highlight />
            <div style={{ paddingBottom: '50px' }}></div>
            <Row gutter={[40, 40]}>
                <Col xs={24} sm={24} md={16}>
                    <CollectionsHighlightPage.RelatedServices />
                    <div style={{ paddingBottom: '60px' }}></div>
                    <CollectionsHighlightPage.TopVendors />
                </Col>
                <Col xs={24} sm={24} md={8}>
                    <CollectionsHighlightPage.OtherServices />
                </Col>
            </Row>
        </div>
    },
    Highlight: () => {
        const data = useLoaderData<typeof loader>();

        return <div>
            <Suspense fallback={<Skeleton />}>
                <Await resolve={data?.data}>
                    {response => <div>
                        <Typography.Title level={2}>Explore everything under {response?.name} </Typography.Title>
                        <div style={{ paddingBottom: '20px' }}></div>
                        <Typography.Title level={3}>Book {response?.vendorType}</Typography.Title>
                        <div style={{ paddingBottom: '20px' }}></div>
                        <Row gutter={[40, 40]}>
                            {response?.services.map(service => <Col key={service.id} sm={12} xs={12} md={6}>
                                <Link to={Routes.Services.replace(':id', data?.highlightId || '') + '?category=' + service.id}><Image preview={false} src={service.imageName} style={{ borderRadius: '12px', boxShadow: '0 20px 40px #d3d3d3' }} /></Link>
                                <div style={{ paddingBottom: '20px' }}></div>
                                <Link to={Routes.Services.replace(':id', data?.highlightId || '') + '?category=' + service.id}>
                                    <Typography.Title level={5}>{service.name}</Typography.Title>
                                </Link>
                            </Col>)
                            }
                        </Row>
                    </div>}
                </Await>
            </Suspense>
        </div>
    },
    RelatedServices: () => {
        const data = useLoaderData<typeof loader>();
        return <div>
            <Typography.Title level={3}>Frequently bought together</Typography.Title>
            <div style={{ paddingBottom: '30px' }}></div>
            <Suspense fallback={<Skeleton />}>
                <Await resolve={data?.related}>
                    {response => <Row gutter={[40, 40]}>
                        {response?.map(service => <Col key={service.id} sm={12} xs={12} md={6}>
                            <Link to={Routes.Services.replace(':id', data?.highlightId || '') + '?category=' + service.id}><Image preview={false} src={service.imageName} style={{ borderRadius: '5px' }} /></Link>
                            <div style={{ paddingBottom: '20px' }}></div>
                            <Link to={Routes.Services.replace(':id', data?.highlightId || '') + '?category=' + service.id}>
                                <Typography.Title level={5}>{service.name}</Typography.Title>
                            </Link>
                        </Col>)
                        }
                    </Row>}
                </Await>
            </Suspense>
        </div>
    },
    TopVendors: () => {
        const data = useLoaderData<typeof loader>();

        return <div>
            <Typography.Title level={4}>Top Rated</Typography.Title>
            <div style={{ paddingBottom: '20px' }}></div>
            <Suspense fallback={<Skeleton />}>
                <Await resolve={data?.topRatedVendors}>
                    {response => <Row gutter={[40, 40]}>
                        {response?.map(item => <Col xs={24} flex={'auto'} key={item.id}>
                            <Row gutter={[20, 20]} align={'middle'}>
                                <Col md={24}>
                                    <Link to={Routes.VendorProfile.replace(':id', item.id)}>
                                        <Avatar src={item.image} size={{ xs: 100, sm: 100, md: 100, lg: 120, xl: 120, xxl: 120 }} />
                                    </Link>
                                </Col>
                                <Col>
                                    <Link to={Routes.VendorProfile.replace(':id', item.id)}><Typography.Title level={5}>{item.name}</Typography.Title></Link>
                                </Col>
                            </Row>
                        </Col>)}
                    </Row>}
                </Await>
            </Suspense>
        </div>
    },
    OtherServices: () => {
        return <div>

            <Typography.Title level={4}>Also try</Typography.Title>
        </div>
    }
}


export default CollectionsHighlightPage.Index;