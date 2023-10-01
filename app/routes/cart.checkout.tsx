import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { LoaderArgs, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Avatar, Button, Card, Col, Divider, Row, Typography } from "antd";
import { VendorQuery } from "~/service/vendor.service";
import { userCartCookie } from "~/session.server";
import { CartInput, CartItem, VendorProfile, VendorService, VendorServiceOption } from "~/types";

type loaderData = CartItem[];
export async function loader({ request }: LoaderArgs): Promise<loaderData> {
    const cookieHeader = request.headers.get("Cookie");
    const cookie = await userCartCookie.parse(cookieHeader);
    const data: CartInput = JSON.parse(cookie)

    const vendor: VendorProfile = VendorQuery.getVendorById(data.serviceId)
    const service: VendorService = VendorQuery.getServiceById(data.serviceId);

    const selectedList = data.service.map(x => ({ id: 'sdf', title: 'Wedding', duration: 3, date: new Date(), time: '12 PM' }));

    return [{ vendor, service, selected: selectedList }];
}



const Cart = {
    Index: () => {
        return <div className="container">
            <Typography.Title level={3}>Checkout</Typography.Title>
            <Divider />
            <Row gutter={[30, 30]}>
                <Col xs={24} md={8} lg={20}>
                    <Cart.Preview />
                </Col>
                <Col xs={24} md={8} lg={4}>
                    <Button type="primary">Proceed to Payment</Button>
                </Col>
            </Row>
        </div>
    },
    Preview: () => {
        const data = useLoaderData<loaderData>();

        return <Row gutter={[30, 30]}>
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
                        <EditOutlined key="edit" />,
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
    }
}


export default Cart.Index;