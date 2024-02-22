import { Button, Card, Checkbox, Container, Grid, Group, Stack, Text, Title } from "@mantine/core";
import { ActionArgs, LoaderArgs, redirect } from "@remix-run/node";
import { Form, Link, useLoaderData } from "@remix-run/react";
import { IconCircleCheck } from "@tabler/icons-react";
import Routes from "~/routes.data";
import { VendorQuery } from "~/service/vendor.service";
import { vendorSignupCookie } from "~/session.server";
import { db } from "~/utils/database";
import usernameTransformer from "~/utils/username.transformer";

type LoaderData = {
    categoryChecklist: (string | null)[],
    categoryList: { id: string, name: string }[]
}

export async function action(args: ActionArgs) {
    const id = args.params.id;
    const form = await args.request.formData();
    const catId = form.get('create')?.toString();

    if (!catId) {
        return false;
    };

    const vendor = await db.vendor.findFirst({
        where: {
            id
        },
        select: {
            name: true,
            email: true,
            mobileNumber: true,
            socialUrl: true
        }
    });


    if (vendor) {
        let usernameAccepted = true;
        const username = usernameTransformer(vendor.name);
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
            fullName: vendor?.name,
            mobileNumber: vendor?.mobileNumber,
            email: vendor?.email,
            username: newUsername,
            socialUrl: vendor.socialUrl,
            categoryId: catId
        });
        return redirect(Routes.VendorSignupForm.replace(':id', data.id), {
            headers: {
                "Set-Cookie": await vendorSignupCookie.serialize(data.id),
            },
        });
    }

    return false;
}

export async function loader(args: LoaderArgs) {
    const cookieHeader = args.request.headers.get("Cookie");
    const currentVendor: string = await vendorSignupCookie.parse(cookieHeader);
    const vendorId = args.params.id;

    if (currentVendor) {
        return redirect('/partner/signup/onboard/' + currentVendor + '/success', {
            headers: {
                "Set-Cookie": await vendorSignupCookie.serialize(null),
            },
        });
    }

    const vendorEmail = await db.vendor.findFirst({
        where: {
            id: vendorId
        },
        select: {
            email: true
        }
    })
    let categoryChecklist: (string | null)[] = [];

    if (vendorEmail) {
        const list = await db.vendor.findMany({
            where: {
                email: vendorEmail.email
            },
            select: {
                categoryId: true
            }
        });
        categoryChecklist = list.map(x => x.categoryId);
    }

    const categoryList = await db.vendorType.findMany({
        orderBy: {
            name: 'asc'
        },
        select: {
            name: true,
            id: true
        }
    });


    categoryList.sort((x, y) => {
        const ix = categoryChecklist.indexOf(x.id);
        const iy = categoryChecklist.indexOf(y.id);

        // Compare the indexes, or push the missing ones to the end
        return ix === -1 ? 1 : iy === -1 ? -1 : ix - iy;
    });

    const data: LoaderData = { categoryChecklist, categoryList };
    return data;
}


const SignupSuccess = {
    Index: () => {
        const data = useLoaderData<LoaderData>();

        return <Container size={'xl'} >
            <Grid justify={'center'} align={'center'}>
                <Grid.Col span={{ base: 12, md: 4, lg: 5 }}>
                    <Stack gap={'lg'}>
                        <Title order={5}>Do you want to signup for other services?</Title>
                        <Form method="post">
                            <Stack gap={'sm'}>
                                {data.categoryList.map(item => <Card withBorder>
                                    <Group justify="space-between" align="center">
                                        <Text td={data.categoryChecklist.includes(item.id) ? 'line-through' : ''}>{item.name}</Text>

                                        {data.categoryChecklist.includes(item.id) ? <Checkbox color="green" checked={data.categoryChecklist.includes(item.id)} labelPosition="left" label="Completed" /> : <Button type="submit" name="create" value={item.id} variant="outline" radius="xl" size="xs">Signup</Button>}
                                    </Group>
                                </Card>)}
                            </Stack>
                        </Form>

                        <Card withBorder>

                            <Stack justify="center" align="center" p={'lg'}>
                                <IconCircleCheck style={{ width: '50px', height: '50px' }} color="var(--ui-color-success)" />
                                <Stack style={{ textAlign: 'center' }}>
                                    <Title order={2}>Thank you for your interest!</Title>
                                    <Text>You'll recieve a confirmation email in 2-3 business days.</Text>
                                </Stack>
                            </Stack>
                        </Card>
                    </Stack>
                </Grid.Col>
            </Grid>
        </Container>;
    }
}
export default SignupSuccess.Index;