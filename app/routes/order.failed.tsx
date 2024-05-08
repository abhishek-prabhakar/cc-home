import { CheckCircleOutlined, FrownOutlined, MehOutlined, SmileOutlined } from "@ant-design/icons";
import { Button, Card, Container, Grid, Rating, Space, Stack, Text, Title, rem } from "@mantine/core";
import { LoaderArgs, redirect } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { IconCircleXFilled } from "@tabler/icons-react";

type LoaderData = {
    id: string
}

export async function loader({
    params, request
}: LoaderArgs): Promise<LoaderData | null> {
    const url = new URL(request.url)
    const orderId = url.searchParams.get('id');

    if (!orderId) {
        redirect('/404');
        return null;
    }

    return { id: orderId };
}

const OrderSuccess = {
    Index: () => {
        const data = useLoaderData<LoaderData>();

        return <Container size={'xl'} >
            <Grid justify={'center'} align={'center'}>
                <Grid.Col span={{ base: 12, md: 4, lg: 5 }}>
                    <Stack gap={'md'}>
                        <Card withBorder>
                            <Stack justify="center" align="center">
                                <Text size="sm" c="dimmed">
                                    <IconCircleXFilled style={{ fontSize: '50px' }} />
                                </Text>
                                <div style={{ textAlign: 'center' }}>
                                    <Title order={2}>Payment unsuccessfull</Title>
                                    <Text>If any amount debited from your account will be refunded back in 3-5 days.</Text>
                                </div>
                                <Space h="sm" />
                                <Link to={'/order/payment?id=' + data?.id}>
                                    <Button variant="filled" radius={'xl'}>Retry Payment</Button>
                                </Link>
                            </Stack>
                        </Card>
                    </Stack>
                </Grid.Col>
            </Grid>
        </Container>;
    }
}
export default OrderSuccess.Index;