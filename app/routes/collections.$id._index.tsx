import { LoaderArgs, defer } from "@remix-run/node";
import { Await, Link, Outlet, useLoaderData } from "@remix-run/react";
import { Col, Divider, Image, Row, Skeleton, Typography } from "antd";
import { Suspense } from "react";
import { PATH } from "~/path.data";
import Routes from "~/routes.data";
import CollectionService from "~/service/collections.service";
import { db } from "~/utils/database";


export function loader(args: LoaderArgs) {
    const id = args.params.id;

    // db.serviceGroupType

    const results = CollectionService.getServicesGroupsByCollection(id);

    return defer({
        results
    });
}

const CollectionsPage = {
    Index: () => {
        return <div className="container">
            <CollectionsPage.Section />
        </div>
    },
    Section: () => {
        const data = useLoaderData<typeof loader>();

        return <div>
            <Suspense fallback={<Skeleton active />}>
                <Await resolve={data.results}>
                    {result => result.map(item => <Row key={item.keyName} gutter={[40, 40]}>
                        <Col span={24}>
                            <Typography.Title level={4}>{item.name}</Typography.Title>
                        </Col>
                        {item.serviceGroup.map(service => <Col key={service.id} sm={12} xs={12} md={6}>
                            <Link to={Routes.Services.replace(':id', item.keyName || '') + '?category=' + service.id}><Image preview={false} src={service.imageName ? PATH.RESOURCE_URL + service.imageName : ''} style={{ borderRadius: '12px', boxShadow: '0 20px 40px #d3d3d3' }} /></Link>
                            <div style={{ paddingBottom: '20px' }}></div>
                            <Link to={Routes.Services.replace(':id', item.keyName || '') + '?category=' + service.id}>
                                <Typography.Title level={5}>{service.name}</Typography.Title>
                            </Link>
                            <ul style={{ paddingLeft: '14px' }}>
                                {service.serviceGroupItem.map((description, key) => <li key={'d-' + key}>
                                    <Typography.Text>Includes {description.service.name}.</Typography.Text>
                                </li>)}
                            </ul>
                        </Col>)}
                        <Col>
                            <Divider />
                        </Col>
                    </Row>)
                    }</Await>
            </Suspense>
        </div>
    }
}


export default CollectionsPage.Index;