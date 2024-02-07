import { Box, Button, Flex, Grid, Image, Input, Stack, Text, Title } from "@mantine/core";
import { UserSource } from "@prisma/client";
import { ActionArgs, LoaderArgs, redirect } from "@remix-run/node";
import { Form, useLocation } from "@remix-run/react";
import { useState } from "react";
import FileUploader from "~/components/FileUploader";
import { PATH } from "~/path.data";
import { vendorSignupCookie } from "~/session.server";
import { db } from "~/utils/database";
import usernameTransformer from "~/utils/username.transformer";
import generateUuid from "~/utils/uuid.generator";

export async function action(args: ActionArgs) {
    const form = await args.request.formData();
    const fullName = form.get('fullName')?.toString();
    const email = form.get('email')?.toString();
    const mobileNumber = form.get('phone')?.toString();
    const actionType = form.get('actionType')?.toString();
    const portfolio = form.getAll('portfolio');
    const socialUrl = form.get('socialUrl')?.toString();

    try {
        switch (actionType) {
            case 'signup':
                if (fullName && email && mobileNumber) {
                    let usernameAccepted = true;
                    const username = usernameTransformer(fullName);
                    let newUsername = username;
                    let usernameSeq = 0;
                    do {
                        const count = await db.vendor.count({
                            where: {
                                username: newUsername
                            }
                        });
                        if (count > 0) {
                            usernameAccepted = false;
                            usernameSeq++;
                            newUsername = username + usernameSeq;
                        } else {
                            usernameAccepted = true;
                        }
                    }
                    while (!usernameAccepted);

                    const data = await db.vendor.create({
                        data: {
                            id: generateUuid(),
                            name: fullName,
                            mobileNumber,
                            email,
                            username: newUsername,
                            source: UserSource.MANUAL,
                            isActive: false,
                            socialUrl
                        }
                    });

                    await db.vendorPortfolio.createMany({
                        data: portfolio?.map(x => ({
                            id: generateUuid(),
                            vendorId: data.id,
                            fileName: x.toString(),
                            fileType: 'img',
                        }))
                    });

                    const currentVendor: string = data.id;
                    return redirect('/partner/signup/onboard/' + data.id, {
                        headers: {
                            "Set-Cookie": await vendorSignupCookie.serialize(currentVendor),
                        },
                    });
                }
                break;
        }
    } catch (e) { }

    return false
}

export async function loader(args: LoaderArgs) {
    const cookieHeader = args.request.headers.get("Cookie");
    const currentVendor: string = await vendorSignupCookie.parse(cookieHeader);
    if (currentVendor) {
        return redirect('/partner/signup/onboard/' + currentVendor);
    }
    return null;
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
                <Title order={3}>Sign up as vendor</Title>
                <Grid gutter={0}>
                    <Grid.Col span={{ base: 12, md: 6 }} >
                        <Stack>
                            <Box>
                                <Title order={5}>Full Name*</Title>
                                <Input name="fullName" placeholder="Enter your full name." required />
                            </Box>
                            <Box>
                                <Title order={5}>Email*</Title>
                                <Input name="email" placeholder="Enter your email for communication purpose." required type="email" />
                            </Box>
                            <Box>
                                <Title order={5}>Phone*</Title>
                                <Input name="phone" placeholder="Enter your contact number for communication purpose." required />
                            </Box>
                            <Box>
                                <Title order={5}>Portfolio*</Title>
                                <Text c="dimmed">Add atleast ten of your best works.</Text>
                                <FileUploader buttonType="default" id={'GUEST'} label="Choose file" path={PATH.GUEST_FILE_UPLOAD} onUpload={v => previewFile(v)} />
                                <br />
                                <Flex style={{ marginTop: '10px' }}>
                                    {
                                        files.map(img => <div key={img}>
                                            <Image src={PATH.RESOURCE_URL + img} width={100} />
                                            <input type="hidden" name="portfolio" value={img} />
                                        </div>)
                                    }
                                </Flex>
                            </Box>
                            <Box>
                                <Title order={5}>Social media url</Title>
                                <Input name="socialUrl" type="url" required />
                            </Box>
                            <Box>
                                <Button variant="filled" radius="xl" loading={location.state === 'submitting'} type="submit" name="actionType" value="signup">Sign up as vendor</Button>
                            </Box>
                        </Stack>
                    </Grid.Col>
                </Grid>
            </Form>
        </div>
    }
}


export default Onboard.Index;