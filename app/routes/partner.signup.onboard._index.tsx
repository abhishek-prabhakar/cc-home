import { Box, Button, Container, Flex, Grid, Image, Input, Stack, Text, Title } from "@mantine/core";
import { UserSource } from "@prisma/client";
import { ActionArgs, LoaderArgs, redirect } from "@remix-run/node";
import { Form, useLocation } from "@remix-run/react";
import { useState } from "react";
import FileUploader from "~/components/FileUploader";
import { PATH } from "~/path.data";
import { VendorQuery } from "~/service/vendor.service";
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

                    const data = await VendorQuery.Signup({
                        fullName: fullName,
                        mobileNumber,
                        email,
                        username: newUsername,
                        socialUrl
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

        return <Container size={'xl'} >
            <Form method="post">
                <Grid gutter={0}>
                    <Grid.Col span={{ base: 12, md: 6 }} >
                        <Stack>
                            <Title order={3}>Sign up as vendor</Title>
                            <Input.Wrapper label="Full Name*">
                                <Input name="fullName" placeholder="Enter your full name." required />
                            </Input.Wrapper>
                            <Input.Wrapper label="Email*">
                                <Input name="email" placeholder="Enter your email for communication purpose." required type="email" />
                            </Input.Wrapper>
                            <Input.Wrapper label="Phone*">
                                <Input name="phone" leftSection="+91" placeholder="Enter your contact number for communication purpose." required maxLength={10} minLength={10} />
                            </Input.Wrapper>
                            <Box>
                                <Text fw={500}>Portfolio (optional)</Text>
                                <Text c="dimmed">Add few of your best works.</Text>
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
                                <Text fw={500}>Social media url</Text>
                                <Input name="socialUrl" type="url" required />
                            </Box>
                            <Box>
                                <Button variant="filled" radius="xl" loading={location.state === 'submitting'} type="submit" name="actionType" value="signup">Sign up as vendor</Button>
                            </Box>
                        </Stack>
                    </Grid.Col>
                </Grid>
            </Form>
        </Container>
    }
}


export default Onboard.Index;