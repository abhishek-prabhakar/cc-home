import { InfoCircleOutlined } from "@ant-design/icons";
import { LoaderArgs, redirect } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import { Button, Col, Form, Input, Row, Typography } from "antd";
import { useEffect, useState } from "react";
import { VendorProfile } from "~/types";
const { Title } = Typography;
type RequiredMark = boolean | 'optional' | 'customize';

const coverStyles: React.CSSProperties = { backgroundImage: 'url(https://demo.themerec.com/item/wordpress/thepro-light/wp-content/uploads/sites/9/2022/06/header-bg-white.jpg)', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', minHeight: '500px', padding: '40px 0', marginTop: '-40px' }

const pageWrapperStyles: React.CSSProperties = { padding: '40px 0' };
const locationStyles: React.CSSProperties = { borderLeft: '1px solid var(--ui-color-black)', padding: '0 20px' };

export async function loader({ params }: LoaderArgs): Promise<VendorProfile> {
    const id = params.user;

    // return redirect(`/404`);

    return { id: 'jessica', fullName: 'Jessica', location: 'Bangalore' };
}

const ProfileLayout = {
    Index: () => {
        const data = useLoaderData<VendorProfile>();

        return <div>
            <ProfileLayout.Cover />
            <div style={pageWrapperStyles}>
                <Outlet />
            </div>
            <ProfileLayout.Contact />
        </div>

    },
    Cover: () => {
        const data = useLoaderData<VendorProfile>();

        return <div style={coverStyles}>
            <div className="container">
                <Row gutter={[0, 40]} align={'middle'}>
                    <Col sm={24} xs={24} span={12}>
                        <Title level={3}>Hi There!</Title>
                        <Title level={1}>I am {data.fullName}</Title>
                    </Col>
                    <Col span={24}>
                        <Button type="primary">Contact Me</Button>
                    </Col>
                    <Col span={24}>
                        <div style={locationStyles}>
                            <Title level={4}>Location</Title>
                            <Title color="" level={5}>{data.location}</Title>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    },
    Contact: () => {
        const [form] = Form.useForm();
        const [requiredMark, setRequiredMarkType] = useState<RequiredMark>('optional');

        const onRequiredTypeChange = ({ requiredMarkValue }: { requiredMarkValue: RequiredMark }) => {
            setRequiredMarkType(requiredMarkValue);
        };

        return <div className="container">
            <Row>
                <Col span={24}>
                    <Title level={2}>Get in Touch</Title>
                </Col>
                <Col span={24} md={12} lg={12} xl={8}>
                    <Title level={5}>Message me!</Title>
                    <Form
                        form={form}
                        layout="vertical"
                        initialValues={{ requiredMarkValue: requiredMark }}
                        onValuesChange={onRequiredTypeChange}
                    >
                        <Form.Item label="Field A" required tooltip="This is a required field">
                            <Input placeholder="input placeholder" />
                        </Form.Item>
                        <Form.Item
                            label="Field B"
                            tooltip={{ title: 'Tooltip with customize icon', icon: <InfoCircleOutlined /> }}
                        >
                            <Input placeholder="input placeholder" />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary">Submit</Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </div>
    }
}

export default ProfileLayout.Index;