import { FundOutlined } from "@ant-design/icons";
import { ActionArgs, LoaderArgs, V2_MetaFunction } from "@remix-run/node"
import { Form, useActionData } from "@remix-run/react";
import { Button, Card, Col, Image, Input, Modal, Radio, Result, Row, Space, Typography } from "antd";
import { useState } from "react";
import { db } from "~/utils/database";


export async function action(args: ActionArgs) {
    const formData = await args.request.formData();
    const fullName = formData.get('fullName')?.toString();
    const socialUrl = formData.get('socialUrl')?.toString();
    const mobileNumber = formData.get('phone')?.toString();
    const email = formData.get('email')?.toString();
    const category = formData.get('category')?.toString();

    if (!fullName || !mobileNumber || !email || !socialUrl || !category) {
        return false;
    }

    try {
        await db.memberRequest.create({
            data: {
                fullName,
                email,
                mobileNumber,
                socialUrl,
                category
            }
        })
    } catch (e) {
        return false;
    }

    return true;
}

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

const VendorList = [{
    background: 'linear-gradient(180deg, #03DBCB, #047DA6)',
    id: 'photographer',
    name: 'Photographer',
    title: 'Photographer?',
    description: 'Counting objects: 5, done. Delta compression using up to 4 threads.',
    img: '/assets/vendor-card-1.svg'
},
{
    background: 'linear-gradient(180deg, #681ACB, #4549E5)',
    id: 'video',
    name: 'Videographer',
    title: 'Videographer?',
    description: 'Counting objects: 5, done. Delta compression using up to 4 threads.',
    img: '/assets/vendor-card-2.svg'
},
{
    background: 'linear-gradient(185deg, #AF6316,#C27B15)',
    id: 'makep',
    name: 'Makeup Artist',
    title: 'Makeup?',
    description: 'Counting objects: 5, done. Delta compression using up to 4 threads.',
    img: '/assets/vendor-card-3.svg'
}];

const PartnerSignup = {
    Index: () => {
        return <div className="container">
            <Space direction="vertical" size={'large'}>
                <PartnerSignup.Jumbotron />
                <PartnerSignup.Counter />
                <PartnerSignup.Intro />
                <PartnerSignup.Features />
                <PartnerSignup.Form />
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
                    <Image src="https://www.christianfarmers.org/media/nwmnklrp/farmers-market.jpg" className="_rounded" width={'100%'} preview={false} />
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
    },
    Form: () => {
        const [activeCard, setActiveCard] = useState<string | null>(null);

        return <Row gutter={[40, 40]}>
            <Col span={24}>
                <div style={{ paddingTop: '50px', textAlign: 'center' }}>
                    <Typography.Title level={1}>Join us in the following categories</Typography.Title>
                </div>
            </Col>
            {VendorList.map(vendor => <Col key={vendor.id} sm={24} md={8} lg={8}>
                <Card style={{
                    background: vendor.background,
                    color: '#fff',
                    width: '100%',
                    borderRadius: '8px'
                }}
                    cover={<img src={vendor.img} style={{ padding: '50px', height: '300px' }} />}
                >
                    <div style={{ marginTop: '-10px' }}>
                        <Space direction="vertical" size={'large'}>
                            <Typography.Title style={{ color: 'white' }} level={2}>{vendor.title}</Typography.Title>
                            <Typography.Title style={{ color: 'white' }} level={4}>{vendor.description}</Typography.Title>
                            <Button shape="round" type="primary" size="large" onClick={() => setActiveCard(vendor.id)}>Signup</Button>
                        </Space>
                    </div>
                </Card>
            </Col>)}
            <PartnerSignup.SignupForm type={activeCard} onClose={() => setActiveCard(null)} />
        </Row>
    },
    SignupForm: ({ type, onClose }: { type: string | null, onClose: () => void }) => {
        const actionData = useActionData();

        const SuccessMessage = () => {
            return <Result
                status="success"
                title="Thank you for your interest"
                subTitle="Our representative will contact you soon."
                extra={[
                    <Button key="buy" onClick={onClose}>Close</Button>,
                ]}
            />
        }

        const RequestForm = () => {
            return !!type && <Form method="post" action="">
                <Row gutter={[20, 20]}>
                    <Col>
                        <Typography.Title level={5}>I'm a</Typography.Title>
                        <Radio.Group defaultValue={type} name="type">
                            {VendorList.map(item => <Radio.Button value={item.id}>{item.name}</Radio.Button>)}
                        </Radio.Group>
                    </Col>
                    <Col span={24}>
                        <Typography.Title level={5}>Full Name</Typography.Title>
                        <Input name="fullName" placeholder="Enter your full name" required />
                    </Col>
                    <Col span={24}>
                        <Typography.Title level={5}>Contact Number</Typography.Title>
                        <Input name="phone" addonBefore="+91" maxLength={10} required />
                    </Col>
                    <Col span={24}>
                        <Typography.Title level={5}>Email</Typography.Title>
                        <Input name="email" type="email" required />
                    </Col>
                    <Col span={24}>
                        <Typography.Title level={5}>Social media url</Typography.Title>
                        <Input name="socialUrl" type="url" required />
                    </Col>
                    <Col span={24}>
                        <input type="hidden" name="category" value={type} />
                        <Button type="primary" shape="round" htmlType="submit">Submit</Button>
                    </Col>
                </Row>
            </Form>;
        }

        return <Modal open={!!type} onCancel={onClose} title="Register as a professional" footer={null}>
            {actionData ? <SuccessMessage /> : <RequestForm />}
        </Modal>;
    }
}

export default PartnerSignup.Index;