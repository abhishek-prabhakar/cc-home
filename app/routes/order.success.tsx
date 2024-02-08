import { CheckCircleOutlined, FrownOutlined, MehOutlined, SmileOutlined } from "@ant-design/icons";
import { Button, Container, Grid, Rating, Stack, Text, Title, rem } from "@mantine/core";
import { LoaderArgs, redirect } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { Card } from "antd";

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

const getIconStyle = (color?: string) => ({
    width: rem(24),
    height: rem(24),
    color: color ? `var(--mantine-color-${color}-7)` : undefined,
});
const iconStyle = getIconStyle();

const customIcons: Record<number, React.ReactNode> = {
    1: <FrownOutlined style={iconStyle} />,
    2: <FrownOutlined style={iconStyle} />,
    3: <MehOutlined style={iconStyle} />,
    4: <SmileOutlined style={iconStyle} />,
    5: <SmileOutlined style={iconStyle} />,
};


const getEmptyIcon = (value: number) => {
    return customIcons[value + 1];
};

const OrderSuccess = {
    Index: () => {
        const data = useLoaderData<LoaderData>();

        return <Container>
            <Grid justify={'center'} align={'middle'}>
                <Grid.Col span={{ base: 12, md: 4, lg: 5 }}>
                    <Stack gap={'md'}>
                        <Card bordered>
                            <Stack>
                                <Text size="sm" c="dimmed">
                                    <CheckCircleOutlined style={{ fontSize: '50px' }} />
                                </Text>
                                <div style={{ textAlign: 'center' }}>
                                    <Title order={2}>Your Order is Confirmed!</Title>
                                    <Text>We'll send you a confirmation email<br /> as soon as the vendor confirms the availability.</Text>
                                </div>
                                <br />
                                <Link to={'/user/order/' + data?.id}>
                                    <Button variant="filled" radius={'xl'}>CHECK STATUS</Button>
                                </Link>
                            </Stack>
                        </Card>
                        <Card>
                            <Title order={5}>How was your experience?</Title>
                            <Rating defaultValue={3} emptySymbol={({ index }: any) => customIcons[index + 1]} />
                        </Card>
                    </Stack>
                </Grid.Col>
            </Grid>
        </Container>;
    }
}
export default OrderSuccess.Index;