import { UserSource } from "@prisma/client";
import { ActionArgs, redirect } from "@remix-run/node";
import { Form, useLocation } from "@remix-run/react";
import { Button, Col, Image, Input, Row, Space, Typography } from "antd";
import { useState } from "react";
import FileUploader from "~/components/FileUploader";
import { PATH } from "~/path.data";
import { db } from "~/utils/database";
import generateUuid from "~/utils/uuid.generator";

export async function action(args: ActionArgs) {
    const form = await args.request.formData();
    const fullName = form.get('fullName')?.toString();
    const email = form.get('email')?.toString();
    const mobileNumber = form.get('phone')?.toString();
    const actionType = form.get('actionType')?.toString();
    const portfolio = form.getAll('portfolio');
    const socialUrl = form.get('socialUrl')?.toString();
    console.log(actionType)
    try {
        switch (actionType) {
            case 'signup':
                if (fullName && email && mobileNumber) {
                    const data = await db.vendor.create({
                        data: {
                            id: generateUuid(),
                            name: fullName,
                            mobileNumber,
                            email,
                            username: 'profile' + Date.now(),
                            source: UserSource.MANUAL,
                            isActive: false,
                            socialUrl
                        }
                    });

                    db.vendorPortfolio.createMany({
                        data: portfolio?.map(x => ({
                            id: generateUuid(),
                            vendorId: data.id,
                            fileName: x.toString(),
                            fileType: 'img',
                        }))
                    })

                    return redirect('/partner/signup/onboard/' + data.id)
                }
                break;
        }
    } catch (e) { }

    return false
}


const Onboard = {
    Index: () => {
        const location = useLocation();
        const [files, setFiles] = useState<string[]>([]);

        function previewFile(file: string) {
            setFiles(files.concat(file));
        }

        return <div className="container">
            <Form method="post">
                <Typography.Title level={3}>Sign up as vendor</Typography.Title>
                <Row>
                    <Col xs={24} sm={24} md={10}>
                        <Row gutter={[20, 20]}>
                            <Col span={24}>
                                <Typography.Title level={5}>Full Name*</Typography.Title>
                                <Input name="fullName" placeholder="Enter your full name." required />
                            </Col>
                            <Col span={24}>
                                <Typography.Title level={5}>Email*</Typography.Title>
                                <Input name="email" placeholder="Enter your email for communication purpose." required type="email" />
                            </Col>
                            <Col span={24}>
                                <Typography.Title level={5}>Phone*</Typography.Title>
                                <Input name="phone" placeholder="Enter your contact number for communication purpose." required />
                            </Col>
                            <Col span={24}>
                                <Typography.Title level={5}>Portfolio</Typography.Title>
                                <FileUploader id={'GUEST'} label="Choose file" path={PATH.GUEST_FILE_UPLOAD} onUpload={v => previewFile(v)} />
                                <br />
                                <Space style={{ marginTop: '10px' }}>
                                    {
                                        files.map(img => <div key={img}>
                                            <Image src={PATH.RESOURCE_URL + img} width={100} />
                                            <input type="hidden" name="portfolio" value={img} />
                                        </div>)
                                    }
                                </Space>
                            </Col>
                            <Col span={24}>
                                <Typography.Title level={5}>Social media url</Typography.Title>
                                <Input name="socialUrl" type="url" required />
                            </Col>
                            <Col span={24}>
                                <Button type="primary" loading={location.state === 'submitting'} htmlType="submit" name="actionType" value="signup">Sign up as vendor</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Form>
        </div>
    }
}


export default Onboard.Index;