import { LoaderArgs, defer } from "@remix-run/node";
import { Await, Link, Outlet, useLoaderData } from "@remix-run/react";
import { Button, Col, Divider, Image, Row, Skeleton, Space, Tabs, Typography } from "antd";
import { Suspense } from "react";
import { PATH } from "~/path.data";
import Routes from "~/routes.data";
import CollectionService from "~/service/collections.service";
import { db } from "~/utils/database";


export function loader(args: LoaderArgs) {
    const id = args.params.id;

    // db.serviceGroupType
    if (!id) {
        throw ('error');
    }

    const results = CollectionService.getServicesGroupsByCollection(id);

    return defer({
        data: CollectionService.getCollectionInfo(id),
        results
    });
}

const CollectionsPage = {
    Index: () => {

        return [
            <CollectionsPage.Header />,
            <CollectionsPage.Section />
        ]
    },
    Header: () => {
        const data = useLoaderData<typeof loader>();

        return <div className="container no-spacer" style={{ paddingBottom: '40px' }}>
            <div className="section-bg-pattern _pattern-1">
                <Row align={"middle"} justify={'center'}>
                    <Col span={19}>
                        <Suspense fallback={<Skeleton active />}>
                            <Await resolve={data.data}>
                                {result => [
                                    <Typography.Title level={5}>The easiest way to find</Typography.Title>,
                                    <Typography.Title level={3} style={{ margin: '0 0 14px 0' }}>Services in <span className="_color-primary">{result.name}</span></Typography.Title>,
                                    <Typography.Text>By bringing together ambitious and talented professionals with AI, we are making your work easier.</Typography.Text>, <br />,
                                    <Space align={'center'} style={{ paddingTop: '30px' }}>
                                        <Typography.Text strong type="secondary">See how it works</Typography.Text>
                                        <Button shape='round' type="default">Watch Video</Button>
                                    </Space>
                                ]}
                            </Await>
                        </Suspense>
                    </Col>
                    <Col span={5} style={{ overflow: 'hidden', marginBottom: '-40px' }}>
                        <img src="/assets/art-1.png" />
                    </Col>
                </Row>
            </div>
        </div>
    },
    Section: () => {
        const data = useLoaderData<typeof loader>();

        return <div className="container">
            <Suspense fallback={<Skeleton active />}>
                <Await resolve={data.results}>
                    {result => <Tabs
                        defaultActiveKey="1"
                        items={result.map(item => ({
                            key: item.keyName,
                            label: <Typography.Title level={4}>{item.name}</Typography.Title>,
                            children: <Row key={item.keyName} gutter={[40, 40]} style={{ padding: '40px 0' }}>
                                {item.serviceGroup.map(service => <Col key={service.id} sm={24} xs={24} md={6} style={{ padding: '20px 0' }}><Link to={Routes.ServiceGroup.replace(':id', item.keyName || '').replace(':subId', service.id)}>
                                    <div style={{ borderRadius: '10px', background: '#F5F5F7', padding: '12px', boxShadow: '0 2px 4px #d3d3d3' }}>
                                        <Image preview={false} src={service.imageName ? PATH.RESOURCE_URL + service.imageName : ''} style={{ borderRadius: '6px', maxHeight: '140px', objectFit: 'cover' }} width={'100%'} fallback={PATH.FALLBACK_IMG} />
                                        <div style={{ paddingBottom: '20px' }}></div>
                                        <Link to={Routes.ServiceGroup.replace(':id', item.keyName || '').replace(':subId', service.id)}>
                                            <Typography.Title level={5}>{service.name}</Typography.Title>
                                        </Link>
                                        <Typography.Text strong type="secondary">Includes</Typography.Text>
                                        <div>
                                            {service.serviceGroupItem.map((description, key) => <div key={'d-' + key}>
                                                <Typography.Text type="secondary">{description.service.name}.</Typography.Text>
                                            </div>)}
                                        </div>
                                    </div>
                                </Link>
                                </Col>)}
                                <Col span={24}>
                                    <Divider />
                                </Col>
                            </Row>
                        })
                        )} />
                    }</Await>
            </Suspense>
        </div>
    }
}


export default CollectionsPage.Index;