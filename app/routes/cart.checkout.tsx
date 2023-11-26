import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { LoaderArgs, TypedDeferredData, defer, json } from "@remix-run/node";
import { Await, Form, Link, useLoaderData } from "@remix-run/react";
import { Avatar, Badge, Button, Card, Col, Divider, Image, Modal, Row, Skeleton, Space, Typography } from "antd";
import { Suspense, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ConfigureBooking from "~/components/ConfigureBooking";
import UserLogin from "~/components/UserLogin";
import { PATH } from "~/path.data";
import { CartService } from "~/service/cart.service";
import { ServiceQuery } from "~/service/services.service";
import { VendorQuery } from "~/service/vendor.service";
import { userCartCookie } from "~/session.server";
import { getUser } from "~/store/user.store";
import { CartActiveService, CartInput, CartItem, VendorProfile, VendorService, VendorServiceOption } from "~/types";

type LoaderData = { data: CartItem };
export async function loader({ request }: LoaderArgs): Promise<TypedDeferredData<any>> {
    const cookieHeader = request.headers.get("Cookie");
    const cookie = await userCartCookie.parse(cookieHeader);
    const data: CartInput = JSON.parse(cookie)

    return defer({
        data: CartService.summary(data)
    });
}



const Cart = {
    Index: () => {
        const user = useSelector(getUser);
        const data = useLoaderData<LoaderData>();

        return <div className="container">
            <Typography.Title level={3}>Checkout</Typography.Title>
            <Divider />
            <Row gutter={[30, 30]}>
                <Col xs={24} md={8} lg={18}>
                    <Suspense fallback={<Skeleton />}>
                        <Await resolve={data.data}>
                            {response => <Cart.Preview data={response} />}
                        </Await>
                    </Suspense>
                </Col>
                <Col xs={24} md={8} lg={6}>
                    <Space direction="vertical" size={'middle'} style={{ width: '100%' }}>
                        <Suspense fallback={<Skeleton />}>
                            <Await resolve={data.data}>
                                {response => response?.services?.length && <Cart.Summary data={response} />}
                            </Await>
                        </Suspense>
                        {user ? <Form method="post" action="/order/submit"><Button type="primary" htmlType="submit" block>Proceed to Payment</Button></Form> : <UserLogin title="Login to continue" redirectUrl="/cart/checkout" />}
                    </Space>
                </Col>
            </Row>
        </div>
    },
    Preview: ({ data }: { data: CartItem }) => {
        const [editService, setEditService] = useState<{ id: string, services: CartActiveService[] }>();

        function openEdtServiceDialog(id: string, services: CartActiveService[]) {
            setEditService({ id, services });
        }

        return <>
            <Row gutter={[30, 30]}>
                {data?.services?.map(service => <Col sm={24} xs={24} md={8}>
                    <Badge.Ribbon text={service.vendorType}>
                        <Card
                            key={service.id}
                            cover={
                                <Image
                                    style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                                    alt={service.name} preview={false}
                                    src={service.image || ''}
                                    fallback={PATH.FALLBACK_IMG}
                                />
                            }
                            actions={[
                                service.isOptional ? <DeleteOutlined key="remove" /> : <></>,
                                <EditOutlined key="edit" onClick={() => openEdtServiceDialog('', [])} />,
                            ]}
                        >
                            <Card.Meta
                                avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
                                title={service.name}
                                description={<div>
                                    <Link to={`/profile/${service.vendorName}`}>{service.vendorName}</Link>
                                    <br />
                                    <Typography.Text strong>{service.date.toString()}</Typography.Text>
                                </div>}
                            />
                        </Card>
                    </Badge.Ribbon>
                </Col>)}
                {!data?.services.length && <Col>Sorry, Your cart is empty.</Col>}
            </Row>
            {editService?.id && <Cart.Edit serviceId={editService.id} services={editService.services} onClose={() => setEditService(undefined)} />}
        </>
    },
    Edit: (params: { serviceId: string, services: CartActiveService[], onClose: Function }) => {
        return <Modal open={true} width={'1000px'} footer={null} afterClose={() => params.onClose()}>
            <ConfigureBooking serviceGroupId={params.serviceId} options={params.services} />
        </Modal>
    },
    Summary: ({ data }: { data: CartItem }) => {
        const [orderSummary, setOrderSummary] = useState<{ total: number, gst: number, tax: number, final: number }>();
        useEffect(() => {
            const gst = 3;
            const total = data.services.reduce((sum, item) => sum + item.cost, 0);
            const tax = (gst * total) / 100;

            setOrderSummary({
                total,
                tax,
                gst,
                final: total + tax
            })
        }, []);

        return <div style={{ border: '1px solid #e1e1e1', padding: '10px' }}>
            <Typography.Title level={4}>Order Summary</Typography.Title>
            {data.services.map(service => <Row key={service.id} gutter={[20, 20]} justify={'space-between'}>
                <Col><Typography.Text strong>{service.name}</Typography.Text></Col>
                <Col><Typography.Text>{service.cost} INR</Typography.Text></Col>
            </Row>
            )}
            <Divider />
            <Row gutter={[20, 20]} justify={'space-between'}>
                <Col><Typography.Text strong>Subtotal</Typography.Text></Col>
                <Col><Typography.Text strong>{orderSummary?.total} INR</Typography.Text></Col>
            </Row>
            <Row gutter={[20, 20]} justify={'space-between'}>
                <Col><Typography.Text type="secondary">GST({orderSummary?.gst}%)</Typography.Text></Col>
                <Col><Typography.Text >{orderSummary?.tax} INR</Typography.Text></Col>
            </Row>
            <Divider />
            <Row gutter={[20, 20]} justify={'space-between'}>
                <Col><Typography.Text strong>Total</Typography.Text></Col>
                <Col><Typography.Text strong>{orderSummary?.final} INR</Typography.Text></Col>
            </Row>
        </div>
    }
}


export default Cart.Index;