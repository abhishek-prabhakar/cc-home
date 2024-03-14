import { Alert, Badge, Button, Card, Checkbox, Container, Grid, Group, Stack, Text, Title, Space, Divider, Flex, Input, Skeleton } from "@mantine/core";
import { BookingPaymentMode } from "@prisma/client";
import { ActionArgs, redirect } from "@remix-run/node";
import { Await, Form, useFetcher, useLoaderData, useLocation, useNavigation } from "@remix-run/react";
import { Suspense, useEffect, useState } from "react";
import { CartService } from "~/service/cart.service";
import { cartCheckoutCookie } from "~/session.server";
import { CartInput } from "~/types";
import Currency from "~/utils/currency.transformer";

type PaymentType = {
    id: BookingPaymentMode,
    title: string,
    description: string,
    disabled: boolean,
    offer?: string,
};

const PaymentMethodList: PaymentType[] = [
    {
        id: BookingPaymentMode.PAY_LATER,
        title: 'Pay later',
        description: 'Pay 50% within 3 days of booking, and the rest after the completion of service.',
        disabled: false
    },
    {
        id: BookingPaymentMode.FULL,
        title: 'Pay in full',
        offer: '5% Off',
        description: 'Pay upfront for a 5% discount',
        disabled: false,
    },
    {
        id: BookingPaymentMode.EMI,
        title: 'Pay in EMI',
        description: 'Easy EMI option',
        disabled: false,
    }
];

const ACTIVE_PAYMENT_MODES: BookingPaymentMode[] = [BookingPaymentMode.PAY_LATER];
const ESTIMATED_SERVICE_PAYMENT_MODES: BookingPaymentMode[] = [BookingPaymentMode.PAY_LATER];

async function cartSummary(input: CartInput[], coupon?: string) {
    const cartSummary = await CartService.summary(input);
    const estimation = await CartService.calculate(cartSummary, coupon);
    return {
        estimation
    };
}

export async function action({ request }: ActionArgs) {
    const form = await request.formData();
    const coupon = form.get('coupon')?.toString();

    const cookieHeader = request.headers.get("Cookie");
    const currentCart: CartInput[] = await cartCheckoutCookie.parse(cookieHeader);

    return cartSummary(currentCart, coupon);
}


export async function loader({
    request,
}: ActionArgs) {
    const cookieHeader = request.headers.get("Cookie");
    const currentCart: CartInput[] = await cartCheckoutCookie.parse(cookieHeader);

    let paymentModes: PaymentType[] = [...PaymentMethodList];
    let estimatedPaymentModes: BookingPaymentMode[] = ACTIVE_PAYMENT_MODES;

    const cartSummary = await CartService.summary(currentCart);
    const containsEstimated = cartSummary.filter(item => item.isEstimated).length;
    if (containsEstimated) {
        estimatedPaymentModes = ESTIMATED_SERVICE_PAYMENT_MODES;
    }

    paymentModes.forEach(x => {
        x.disabled = !ACTIVE_PAYMENT_MODES.includes(x.id) || !estimatedPaymentModes.includes(x.id);
    });


    return {
        paymentModes
    };
};

export default function () {
    const [paymentMethod, setPayMethod] = useState<BookingPaymentMode | null>();
    const data = useLoaderData<typeof loader>();
    const [getCoupon, setCoupon] = useState('');
    const navigation = useNavigation();
    const location = useLocation();
    const fetcher = useFetcher<typeof cartSummary>();

    useEffect(() => {
        fetchEstimation();
    }, []);

    function updatePayMethod(id: BookingPaymentMode) {
        const item = data.paymentModes.find(x => x.id === id);
        if (item?.disabled) {
            return;
        }
        setPayMethod(id);
        fetchEstimation();
    }


    function applyCoupon() {
        fetchEstimation(getCoupon);
    }

    function fetchEstimation(coupon = '') {
        fetcher.submit({
            coupon
        }, {
            method: 'POST'
        });
    }


    function CouponSection({ invalid }: { invalid: boolean }) {
        return <Group gap={'md'} align="end">
            <Input.Wrapper flex={1} label="Coupon" error={invalid ? 'Coupon expired' : ''} >
                <Input value={getCoupon} error={invalid} onChange={v => setCoupon(v.target.value)} />
            </Input.Wrapper>
            <Button variant="outline" size="xs" onClick={applyCoupon}>Apply</Button>
        </Group>;
    };

    const Disablebadge = <Badge variant="outline" color="gray" size="xs">DISABLED</Badge>;

    return <Container>
        <Title order={4}>Choose payment method</Title>
        <Space h="md" />
        <Grid justify="space-between">
            <Grid.Col span={{ base: 12, md: 6 }}>
                <Stack>
                    {data.paymentModes.map(item => <Alert variant={item.disabled || item.id === paymentMethod ? 'light' : 'outline'} color={item.disabled ? 'gray' : item.id === paymentMethod ? 'green' : 'gray'} title={<Group>{item.title}{item.disabled ? Disablebadge : ''}</Group>} icon={<Checkbox disabled={item.disabled} checked={item.id === paymentMethod} color="green" />} className={item.disabled ? '' : 'cursor-pointer'} onClick={() => updatePayMethod(item.id)}>
                        {item.description}
                    </Alert>)}
                </Stack>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 4 }}>
                <Card shadow="sm" withBorder>
                    <Suspense fallback={<Skeleton />}>
                        <Await resolve={fetcher.data}>
                            {response => <>
                                <CouponSection invalid={!!response?.estimation.coupon && response?.estimation.coupon !== getCoupon} />
                                <Space h="md" />
                                <Divider />
                                <Space h="md" />
                                <Form method="post" action="/order/submit">
                                    <input type="hidden" name="source" value={new URLSearchParams(location.search).get('source') || ''} />
                                    <input type="hidden" name="paymentMode" value={paymentMethod || ''} />
                                    <Stack>
                                        <Flex justify={'space-between'}>
                                            <Text size="sm" fw={500}>Subtotal</Text>
                                            <Text size="sm" fw={500}><Currency value={response?.estimation.total} /></Text>
                                        </Flex>
                                        <Flex justify={'space-between'}>
                                            <Text c="dimmed">GST ({response?.estimation.gst}%)</Text>
                                            <Text><Currency value={response?.estimation.tax} /></Text>
                                        </Flex>
                                        <Flex justify={'space-between'}>
                                            <Text size="sm" fw={500}>Discount</Text>
                                            <Text size="sm" fw={500}><Currency value={response?.estimation.discount} /></Text>
                                        </Flex>
                                        <Flex justify={'space-between'}>
                                            <Text size="sm" fw={500}>Total</Text>
                                            <Text size="sm" fw={500}><Currency value={response?.estimation.final} /></Text>
                                        </Flex>
                                        <Divider />
                                        <Button type="submit" variant="filled" fullWidth disabled={!paymentMethod} loading={['loading', 'submitting'].includes(navigation.state)}>Place Order</Button>
                                    </Stack>
                                </Form>
                            </>
                            }
                        </Await>
                    </Suspense>
                </Card>
            </Grid.Col>
        </Grid>
    </Container>
}