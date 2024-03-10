import { Alert, Badge, Button, Card, Checkbox, Container, Grid, Group, Stack, Text, Title, Space, Divider, Flex, Input } from "@mantine/core";
import { ActionArgs, redirect } from "@remix-run/node";
import { Form, useLoaderData, useNavigation } from "@remix-run/react";
import { useState } from "react";
import { CartService } from "~/service/cart.service";
import { cartCheckoutCookie } from "~/session.server";
import { CartInput } from "~/types";
import Currency from "~/utils/currency.transformer";


const PaymentMethodList = [
    {
        id: 'LATER',
        title: 'Pay later',
        description: 'lorem ipsum',
    },
    {
        id: 'FULL',
        title: 'Pay in full',
        offer: '10% Off',
        description: 'lorem ipsum',
        disabled: true,
    },
    {
        id: 'EMI',
        title: 'Pay in EMI',
        description: 'lorem ipsum',
        disabled: true,
    }
]

async function cartSummary(input: CartInput[]) {
    const cartSummary = await CartService.summary(input);
    const estimation = await CartService.calculate(cartSummary);

    return estimation;
}


export async function loader({
    request,
}: ActionArgs) {
    const cookieHeader = request.headers.get("Cookie");
    const currentCart: CartInput[] = await cartCheckoutCookie.parse(cookieHeader);

    if (!currentCart?.length) {
        redirect('/404');
    }


    return cartSummary(currentCart);
};

export default function () {
    const [paymentMethod, setPayMethod] = useState<string | null>();
    const data = useLoaderData<typeof cartSummary>();
    const [getCoupon, setCoupon] = useState('');
    const navigation = useNavigation();

    function updatePayMethod(id: string) {
        const item = PaymentMethodList.find(x => x.id === id);
        if (item?.disabled) {
            return;
        }
        setPayMethod(id);
    }


    function applyCoupon() {
        // getEstimation(getCoupon);
    }


    const CouponSection = <Group gap={'md'} align="end">
        <Input.Wrapper flex={1} label="Coupon">
            <Input value={getCoupon} onChange={v => setCoupon(v.target.value)} />
        </Input.Wrapper>
        <Button variant="outline" size="xs" onClick={applyCoupon}>Apply</Button>
    </Group>;

    const Disablebadge = <Badge variant="outline" color="gray" size="xs">DISABLED</Badge>;

    return <Container>
        <Title order={4}>Choose payment method</Title>
        <Space h="md" />
        <Grid justify="space-between">
            <Grid.Col span={{ base: 12, md: 6 }}>
                <Stack>
                    {PaymentMethodList.map(item => <Alert variant={item.disabled || item.id === paymentMethod ? 'light' : 'outline'} color={item.disabled ? 'gray' : item.id === paymentMethod ? 'green' : 'gray'} title={<Group>{item.title}{item.disabled ? Disablebadge : ''}</Group>} icon={<Checkbox disabled={item.disabled} checked={item.id === paymentMethod} color="green" />} className={item.disabled ? '' : 'cursor-pointer'} onClick={() => updatePayMethod(item.id)}>
                        {item.description}
                    </Alert>)}
                </Stack>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 4 }}>
                <Card shadow="sm" withBorder>
                    <Form method="post" action="/order/submit">
                        <Stack>
                            {CouponSection}
                            <Divider />
                            <Flex justify={'space-between'}>
                                <Text size="sm" fw={500}>Subtotal</Text>
                                <Text size="sm" fw={500}><Currency value={data?.total} /></Text>
                            </Flex>
                            <Flex justify={'space-between'}>
                                <Text c="dimmed">GST ({data?.gst}%)</Text>
                                <Text><Currency value={data?.tax} /></Text>
                            </Flex>
                            <Flex justify={'space-between'}>
                                <Text size="sm" fw={500}>Discount</Text>
                                <Text size="sm" fw={500}><Currency value={data?.discount} /></Text>
                            </Flex>
                            <Flex justify={'space-between'}>
                                <Text size="sm" fw={500}>Total</Text>
                                <Text size="sm" fw={500}><Currency value={data?.final} /></Text>
                            </Flex>
                            <Divider />
                            <Button type="submit" variant="filled" fullWidth disabled={!paymentMethod} loading={['loading', 'submitting'].includes(navigation.state)}>Place Order</Button>
                        </Stack>
                    </Form>
                </Card>
            </Grid.Col>
        </Grid>
    </Container>
}