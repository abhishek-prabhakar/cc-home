import { FundOutlined } from "@ant-design/icons";
import { LoaderArgs, V2_MetaFunction } from "@remix-run/node"
import { Button, Col, Image, Row, Space, Typography } from "antd";

export async function loader({ params }: LoaderArgs) {

    return null;
}

export const meta: V2_MetaFunction = () => {
    return [
        { title: "Join as a service professional" },
        { name: "description", content: "Celebria Collective Partner" },
    ];
};


const jumbotronStyle: React.CSSProperties = {
    background: 'url(https://livedemo00.template-help.com/wt_62267_v8/62267-default/images/slider-slide-2-1920x980.jpg) no-repeat center', minHeight: '500px', padding: '100px 20px', borderRadius: '20px', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center'
}

const PartnerSignup = {
    Index: () => {
        return <div className="container">
            <Space direction="vertical" size={'large'}>
                <PartnerSignup.Jumbotron />
                <PartnerSignup.Counter />
                <PartnerSignup.Intro />
                <PartnerSignup.Features />
            </Space>
        </div>
    },
    Jumbotron: () => <div style={jumbotronStyle}>
        <Row justify={'center'}>
            <Col>
                <Space direction="vertical" align="center">
                    <Typography.Title level={1} style={{ color: 'white' }}>Earn upto 3 times your current income and change your life.</Typography.Title>
                    <Typography.Title level={3}>
                        Become a part of a community with more than 50,000 service professionals
                    </Typography.Title>
                    <br /><br />
                    <Button type="primary" size="large" color="white">Join Us</Button>
                </Space>
            </Col>
        </Row>
    </div>,
    Counter: () => {
        return <div style={{ padding: '50px 0' }}>
            <Row justify={'center'} gutter={[100, 40]}>
                <Col>
                    <Typography.Title>50+</Typography.Title>
                    <Typography.Title level={4}>Members</Typography.Title>
                </Col>
                <Col>
                    <Typography.Title>500+</Typography.Title>
                    <Typography.Title level={4}>Customers</Typography.Title>
                </Col>
                <Col>
                    <Typography.Title>500+</Typography.Title>
                    <Typography.Title level={4}>Services</Typography.Title>
                </Col>
            </Row>
        </div>
    },
    Intro: () => {
        return <Row justify={'center'}>
            <Col span={6}><div className="line"></div></Col>
            <Col span={24}></Col>
            <Col className="_text-center" xs={24} sm={24} md={20} lg={16}>
                <div style={{ padding: '50px 0' }}>
                    <Typography.Title level={2}> Lorem ipsum dolor sit amet</Typography.Title>
                    <Typography.Text type="secondary">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    </Typography.Text>
                </div>
            </Col>
        </Row>
    },
    Features: () => {
        return <div className="_rounded" style={{ background: '#f8f8f8', padding: '20px' }}>
            <Row justify={'center'} align={'middle'} gutter={[100, 40]}>
                <Col xs={24} sm={24} md={12}>
                    <Image src="https://www.christianfarmers.org/media/nwmnklrp/farmers-market.jpg" className="_rounded" width={'100%'} />
                </Col>
                <Col xs={24} sm={24} md={12}>
                    <Typography.Title level={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Typography.Title>
                    <Row>
                        <Col>
                            <Typography.Title style={{ color: 'var( --ui-color-primary)' }}>
                                <FundOutlined />
                            </Typography.Title>
                        </Col>
                        <Col flex={'auto'}>
                            <Typography.Title level={4}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit</Typography.Title>
                            <Typography.Text type="secondary">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </Typography.Text>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>;
    }
}

export default PartnerSignup.Index;