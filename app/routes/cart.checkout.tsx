import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { LoaderArgs, json } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import { Avatar, Button, Card, Col, Divider, Modal, Row, Space, Typography } from "antd";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ConfigureBooking from "~/components/ConfigureBooking";
import UserLogin from "~/components/UserLogin";
import { VendorQuery } from "~/service/vendor.service";
import { userCartCookie } from "~/session.server";
import { getUser } from "~/store/user.store";
import { CartActiveService, CartInput, CartItem, VendorProfile, VendorService, VendorServiceOption } from "~/types";

type loaderData = CartItem[];
export async function loader({ request }: LoaderArgs): Promise<loaderData> {
    const cookieHeader = request.headers.get("Cookie");
    const cookie = await userCartCookie.parse(cookieHeader);
    const data: CartInput = JSON.parse(cookie)

    const vendor: VendorProfile = VendorQuery.getVendorById(data.serviceId)
    const service: VendorService = VendorQuery.getServiceById(data.serviceId);

    const selectedList = data.service.map(x => ({ id: 'sdf', title: 'Wedding', duration: 3, date: new Date().toDateString(), time: '12 PM' }));

    return [{ vendor, service, selected: selectedList }];
}



const Cart = {
    Index: () => {
        const user = useSelector(getUser);
        useEffect(() => {

        }, [])
        return <div className="container">
            <Typography.Title level={3}>Checkout</Typography.Title>
            <Divider />
            <Row gutter={[30, 30]}>
                <Col xs={24} md={8} lg={18}>
                    <Cart.Preview />
                </Col>
                <Col xs={24} md={8} lg={6}>
                    <Space direction="vertical" size={'middle'} style={{ width: '100%' }}>
                        <Cart.Summary />
                        {user ? <Form method="post" action="/order/submit"><Button type="primary" htmlType="submit" block>Proceed to Payment</Button></Form> : <UserLogin title="Login to continue" redirectUrl="/cart/checkout" />}
                    </Space>
                </Col>
            </Row>
        </div>
    },
    Preview: () => {
        const data = useLoaderData<loaderData>();
        const [editService, setEditService] = useState<{ id: string, services: CartActiveService[] }>();

        function openEdtServiceDialog(id: string, services: CartActiveService[]) {
            setEditService({ id, services });
        }

        return <>
            <Row gutter={[30, 30]}>
                <Col sm={24} xs={24} md={8}>
                    {data?.map(item => <Card
                        key={item.vendor.id}
                        cover={
                            <img
                                alt="example"
                                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                            />
                        }
                        actions={[
                            <DeleteOutlined key="remove" />,
                            <EditOutlined key="edit" onClick={() => openEdtServiceDialog(item.service.id, item.selected)} />,
                        ]}
                    >
                        <Card.Meta
                            avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
                            title={item.service.title}
                            description="This is the description"
                        />
                    </Card>)}
                </Col>
            </Row>
            {editService?.id && <Cart.Edit serviceId={editService.id} services={editService.services} onClose={() => setEditService(undefined)} />}
        </>
    },
    Edit: (params: { serviceId: string, services: CartActiveService[], onClose: Function }) => {
        return <Modal open={true} width={'1000px'} footer={null} afterClose={() => params.onClose()}>
            <ConfigureBooking id={params.serviceId} options={params.services} />
        </Modal>
    },
    Summary: () => {
        const data = useLoaderData<loaderData>();

        return <div style={{ border: '1px solid #e1e1e1', padding: '10px' }}>
            <Typography.Title level={4}>Order Summary</Typography.Title>
            {data?.map(item => <Row key={item.service.id} gutter={[20, 20]} justify={'space-between'}>
                <Col><Typography.Text strong>{item.service.title}</Typography.Text></Col>
                <Col><Typography.Text>100 INR</Typography.Text></Col>
            </Row>)}
            <Divider />
            <Row gutter={[20, 20]} justify={'space-between'}>
                <Col><Typography.Text type="secondary">GST(2%)</Typography.Text></Col>
                <Col><Typography.Text >100 INR</Typography.Text></Col>
            </Row>
            <Divider />
            <Row gutter={[20, 20]} justify={'space-between'}>
                <Col><Typography.Text strong>Total</Typography.Text></Col>
                <Col><Typography.Text strong>100 INR</Typography.Text></Col>
            </Row>
        </div>
    }
}


export default Cart.Index;