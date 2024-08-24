import { Alert, Badge, Button, Card, Checkbox, Container, Grid, Group, Stack, Text, Title, Space, Divider, Flex, Input, Skeleton } from "@mantine/core";
import { BookingPaymentMode } from "@prisma/client";
import { ActionArgs, redirect } from "@remix-run/node";
import { Await, Form, useActionData, useFetcher, useLoaderData, useLocation, useNavigation } from "@remix-run/react";
import { Suspense, useEffect, useState } from "react";
import COMMON_DATA from "~/data/common.data";
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
        description: 'Pay '+COMMON_DATA.PAY_LATER_SLAB_PERCENTAGE+'% within 3 days of booking, and the rest after the completion of service.',
        disabled: false
    },
    {
        id: BookingPaymentMode.FULL,
        title: 'Pay in full',
        offer: COMMON_DATA.FULL_PAYMENT_DISCOUNT+'% Off',
        description: 'Pay upfront for a '+COMMON_DATA.FULL_PAYMENT_DISCOUNT+'% discount. (maximum discount '+COMMON_DATA.currency+COMMON_DATA.FULL_PAYMENT_DISCOUNT_MAX_VALUE+')',
        disabled: false,
    },
    {
        id: BookingPaymentMode.EMI,
        title: 'Pay in EMI',
        description: 'Easy EMI option',
        disabled: false,
    }
];

const ACTIVE_PAYMENT_MODES: BookingPaymentMode[] = [BookingPaymentMode.PAY_LATER, BookingPaymentMode.FULL];

// Few services may not have fixed price. The total cost will be calculated during the field day.
const ESTIMATED_SERVICE_PAYMENT_MODES: BookingPaymentMode[] = [BookingPaymentMode.PAY_LATER, BookingPaymentMode.FULL];

async function cartSummary(input: CartInput[], coupon?: string, paymentMode?: BookingPaymentMode, packageId?: string | null) {
    const cartSummary = await CartService.summary(input);
    const groupCost = cartSummary.map<number>(x => x.cost);
    const addonCost = cartSummary.reduce<number[]>((acc,i) => { return acc.concat(i.services.filter(x=>!!x.id).map(x => x.cost)); }, []);
    const estimation = await CartService.calculate(groupCost,addonCost, coupon, paymentMode, packageId);
    return {
        estimation
    };
}

export async function action({ request }: ActionArgs) {
    const form = await request.formData();
    const coupon = form.get('coupon')?.toString();
    const paymentMode = form.get('paymentMode')?.toString() as BookingPaymentMode;

    const cookieHeader = request.headers.get("Cookie");
    const currentCart = await cartCheckoutCookie.parse(cookieHeader);

    if (!currentCart?.cart?.length) {
        return redirect('/');
    }

    const packageId = currentCart.packageId;
    return cartSummary(currentCart.cart, coupon, paymentMode, packageId);
}


export async function loader({
    request,
}: ActionArgs) {
    const cookieHeader = request.headers.get("Cookie");
    const currentCart = await cartCheckoutCookie.parse(cookieHeader);

    let paymentModes: PaymentType[] = [...PaymentMethodList];
    let estimatedPaymentModes: BookingPaymentMode[] = ACTIVE_PAYMENT_MODES;

    const cartSummary = await CartService.summary(currentCart?.cart);
    
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


function CouponSection({ invalid, applyCoupon }: { invalid: boolean, applyCoupon: Function }) {
    const [getCoupon, setCoupon] = useState('');

    return  <Input.Wrapper  label="Coupon" error={invalid ? 'Coupon expired or not eligible' : ''} >
            <Group gap={'md'} align="start">
                <Input size="xs"  flex={1}  error={invalid} onChange={v => setCoupon(v.target.value)} />
            <Button variant="outline" size="xs" onClick={() => applyCoupon(getCoupon)}>Apply</Button>
            </Group>
        </Input.Wrapper>
        ;
};

export default function () {
    const [paymentMethod, setPayMethod] = useState<BookingPaymentMode | null>();
    const data = useLoaderData<typeof loader>();
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
        fetchEstimation('', id);
    }


    function fetchEstimation(coupon = '', paymentMode = paymentMethod || '') {
        fetcher.submit({
            coupon,
            paymentMode
        }, {
            method: 'POST'
        });
    }


    const Disablebadge = <Badge variant="outline" color="gray" size="xs">NOT AVAILABLE</Badge>;

    return <Container>
        <Title order={4}>Choose payment method</Title>
        <Space h="md" />
        <Grid justify="space-between">
            <Grid.Col span={{ base: 12, md: 6 }}>
                <Stack>
                    {data.paymentModes.map(item => <Alert variant={item.disabled || item.id === paymentMethod ? 'light' : 'outline'} color={item.disabled ? 'gray' : item.id === paymentMethod ? 'green' : 'gray'} title={<Group>{item.title}{item.disabled ? Disablebadge : ''}</Group>} icon={<Checkbox disabled={item.disabled} checked={item.id === paymentMethod} color="green" />} className={item.disabled ? '' : 'cursor-pointer'} onClick={() => updatePayMethod(item.id)} key={item.id}>
                        {item.description}
                    </Alert>)}
                </Stack>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 4 }}>
                <Card shadow="sm" withBorder>
                    <Suspense fallback={<Skeleton />}>
                        <Await resolve={fetcher.data}>
                            {response => <>
                                <CouponSection invalid={response?.estimation.invalidCoupon || false} applyCoupon={fetchEstimation} />
                                <Space h="md" />
                                <Divider />
                                <Space h="md" />
                                <Form method="post" action="/order/submit">
                                    <input type="hidden" name="source" value={new URLSearchParams(location.search).get('source') || ''} />
                                    <input type="hidden" name="paymentMode" value={paymentMethod || ''} />
                                    <input type="hidden" name="coupon" value={response?.estimation.coupon || ''} />
                                    <Stack>
                                        <Flex justify={'space-between'}>
                                            <Text size="sm" fw={500}>Subtotal</Text>
                                            <Text size="sm" fw={500}><Currency value={response?.estimation.total} /></Text>
                                        </Flex>
                                        {response?.estimation.discount ? <Flex justify={'space-between'}>
                                            <Text size="sm" fw={500}>Discount ({response.estimation.coupon})</Text>
                                            <Text size="sm" fw={500}>-<Currency value={response?.estimation.discount} /></Text>
                                        </Flex> : <Flex justify={'space-between'}>
                                            <Text size="sm" fw={500}>Discount</Text>
                                            <Text size="sm" fw={500}><Currency value={0} /></Text>
                                        </Flex>}
                                        {response?.estimation.additionalPromo ? <Flex justify={'space-between'}>
                                            <Text size="sm" fw={500}>Additional Promo</Text>
                                            <Text size="sm" fw={500}>-<Currency value={response?.estimation.additionalPromo} /></Text>
                                        </Flex> : ''}
                                        <Flex justify={'space-between'}>
                                            <Text size="sm" c="dimmed">GST ({response?.estimation.gst}%)</Text>
                                            <Text size="sm" ><Currency value={response?.estimation.tax} /></Text>
                                        </Flex>
                                        <Flex justify={'space-between'}>
                                            <Text size="sm" fw={500}>Total</Text>
                                            <Text size="sm" fw={500}><Currency value={response?.estimation.final} /></Text>
                                        </Flex>
                                        <Divider />
                                        <Button type="submit" variant="filled" fullWidth disabled={!paymentMethod} loading={['loading', 'submitting'].includes(fetcher.state || navigation.state)}>Place Order</Button>
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