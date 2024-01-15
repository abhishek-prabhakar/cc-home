import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { LoaderArgs, TypedDeferredData, defer, json } from "@remix-run/node";
import { Await, Form, Link, useLoaderData } from "@remix-run/react";
import { Avatar, Badge, Button, Card, Col, Divider, Image, Input, Modal, Row, Skeleton, Space, Typography } from "antd";
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
import { CartActiveService, CartInput, CartItem, CartItemService, VendorProfile, VendorService, VendorServiceOption } from "~/types";
import { DateFormatter } from "~/utils/date.transform";

export async function loader({ request }: LoaderArgs) {
    const cookieHeader = request.headers.get("Cookie");
    const cookie = await userCartCookie.parse(cookieHeader);

    return defer({
        data: CartService.summary(cookie)
    });
}



const Cart = {
    Index: () => {
        const user = useSelector(getUser);
        const data = useLoaderData<typeof loader>();

        return <div className="container">
            <Typography.Title level={3}>Checkout</Typography.Title>
            <Divider />
            <Row gutter={[60, 30]}>
                <Col xs={24} md={8} lg={16}>
                    <Suspense fallback={<Skeleton />}>
                        <Await resolve={data.data}>
                            {response => <Cart.Preview cart={response} />}
                        </Await>
                    </Suspense>
                </Col>
                <Col xs={24} md={8} lg={8}>
                    <Suspense fallback={<Skeleton />}>
                        <Await resolve={data.data}>
                            {response => response?.length &&
                                <Space direction="vertical" size={'middle'} style={{ width: '100%' }}>
                                    <Cart.Summary data={response} />
                                    {user ? <Form method="post" action="/order/submit"><Button type="primary" htmlType="submit" block>Place order</Button></Form> : <UserLogin title="Login to continue" redirectUrl="/cart/checkout" />}
                                </Space>
                            }
                        </Await>
                    </Suspense>
                </Col>
            </Row>
        </div>
    },
    Preview: ({ cart }: { cart: CartItem[] }) => {
        const [editService, setEditService] = useState<{ id: string, services: CartActiveService[] }>();

        function openEdtServiceDialog(id: string, services: CartActiveService[]) {
            setEditService({ id, services });
        }

        return <>
            {cart.map((data, i) =>
                [<Row gutter={[60, 20]} key={data.vendorServiceGroupId + i}>
                    <Col sm={24} xs={24} md={10} >
                        <Badge.Ribbon text={data.vendorType}>
                            <Card
                                cover={
                                    <Image
                                        style={{ width: '100%', height: '100px', objectFit: 'cover' }}
                                        preview={false}
                                        src={data.coverImg || ''}
                                        fallback={PATH.FALLBACK_IMG}
                                    />
                                }
                                actions={[
                                    <DeleteOutlined key="remove" />,
                                    <EditOutlined key="edit" onClick={() => openEdtServiceDialog('', [])} />,
                                ]}
                            >
                                <Card.Meta
                                    avatar={<Avatar src={data.vendorImg} />}
                                    title={data.name}
                                    description={<div>
                                        <Link to={`/profile/${data.vendorId}`}>{data.vendorName}</Link>
                                        <br />
                                        <Typography.Text strong>{DateFormatter.short(data.date)}</Typography.Text> -
                                        <Typography.Text strong>From {data.timeHour} to {data.timeHour + data.duration} ({data.duration} hours)</Typography.Text>
                                    </div>}
                                />
                            </Card>
                        </Badge.Ribbon>
                    </Col>
                    <Col sm={24} xs={24} md={14}>
                        <Space direction="vertical" style={{ width: '100%' }} >
                            <Typography.Text strong>Personal Note:</Typography.Text>
                            <Input.TextArea
                                placeholder="Write down your requirements here..."
                                autoSize={{ minRows: 4, maxRows: 6 }}
                            />
                        </Space>
                    </Col>
                </Row>, <Divider />])}
            {!cart?.length && <div>Sorry, Your cart is empty.</div>}

            {editService?.id && <Cart.Edit serviceId={editService.id} services={editService.services} onClose={() => setEditService(undefined)} />}
        </>
    },
    Edit: (params: { serviceId: string, services: CartActiveService[], onClose: Function }) => {
        return <Modal open={true} width={'1000px'} footer={null} afterClose={() => params.onClose()}>
            <ConfigureBooking vendorServiceGroupId={params.serviceId} options={params.services} />
        </Modal>
    },
    Summary: ({ data }: { data: CartItem[] }) => {
        const [orderSummary, setOrderSummary] = useState<{ total: number, gst: number, tax: number, final: number }>();
        useEffect(() => {
            const gst = 3;
            const total = data.reduce<CartItemService[]>((arr, i) => arr.concat(i.services), []).reduce((sum, item) => sum + item.cost, 0);
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
            {data.map(group => <div key={group.vendorServiceGroupId}>
                <b>{group.name}</b>
                {group.services.map(service => <Row key={service.id} gutter={[20, 20]} justify={'space-between'}>
                    <Col><Typography.Text strong>{service.name}</Typography.Text></Col>
                    <Col><Typography.Text>{service.cost} INR</Typography.Text></Col>
                </Row>
                )}
            </div>)}
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