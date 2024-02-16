import { Card, Container, Grid, Stack, Text, Title } from "@mantine/core";
import { LoaderArgs, redirect } from "@remix-run/node";
import { IconCircleCheck } from "@tabler/icons-react";
import { vendorSignupCookie } from "~/session.server";

export async function loader(args: LoaderArgs) {
    const cookieHeader = args.request.headers.get("Cookie");
    const currentVendor: string = await vendorSignupCookie.parse(cookieHeader);

    if (currentVendor) {
        return redirect('/partner/signup/onboard/' + currentVendor + '/success', {
            headers: {
                "Set-Cookie": await vendorSignupCookie.serialize(null),
            },
        });
    }

    return null;
}


const SignupSuccess = {
    Index: () => {

        return <Container>
            <Grid justify={'center'} align={'center'}>
                <Grid.Col span={{ base: 12, md: 4, lg: 5 }}>
                    <Stack gap={'lg'}>
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