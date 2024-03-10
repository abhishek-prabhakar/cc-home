import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Avatar, Badge, Button, Card, Container, Divider, Flex, Grid, Group, Image, Modal, Space, Stack, Text, Textarea, Title } from "@mantine/core";
import { LoaderArgs, TypedDeferredData, defer, json } from "@remix-run/node";
import { Await, Form, Link, useLoaderData } from "@remix-run/react";
import { Suspense, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ConfigureBooking from "~/components/ConfigureBooking";
import Skeleton from "~/components/Skeleton";
import UserLogin from "~/components/UserLogin";
import { PATH } from "~/path.data";
import { CartService } from "~/service/cart.service";
import { ServiceQuery } from "~/service/services.service";
import { VendorQuery } from "~/service/vendor.service";
import { userCartCookie } from "~/session.server";
import { getUser } from "~/store/user.store";
import { CartActiveService, CartInput, CartItem, CartItemService, VendorProfile, VendorService, VendorServiceOption } from "~/types";
import { DateFormatter } from "~/utils/date.transform";

export async function loader({ request }: LoaderArgs) {
    const cookieHeader = request.headers.get("Cookie");
    const cookie = await userCartCookie.parse(cookieHeader);

    return defer({
        data: CartService.summary(cookie)
    });
}



const Cart = {
    Index: () => {
        const user = useSelector(getUser);
        const data = useLoaderData<typeof loader>();

        return <Container size={'xl'} >
            <Title order={3}>Checkout</Title>
            <Space h={'md'} />
            <Grid gutter={30}>
                <Grid.Col span={{ base: 12, md: 4, lg: 8 }}>
                    <Suspense fallback={<Skeleton />}>
                        <Await resolve={data.data}>
                            {response => <Cart.Preview cart={response} />}
                        </Await>
                    </Suspense>
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                    <Suspense fallback={<Skeleton />}>
                        <Await resolve={data.data}>
                            {response => response?.length &&
                                <Stack gap={'md'}>
                                    <Cart.Summary data={response} />
                                    {user ? <Form method="post" action="/order/submit"><Button variant="filled" type="submit" radius={'xl'}>Place order</Button></Form> : <UserLogin title="Login to continue" redirectUrl="/cart/checkout" />}
                                </Stack>
                            }
                        </Await>
                    </Suspense>
                </Grid.Col>
            </Grid>
        </Container>
    },
    Preview: ({ cart }: { cart: CartItem[] }) => {
        const [editService, setEditService] = useState<{ id: string, services: CartActiveService[] }>();

        function openEdtServiceDialog(id: string, services: CartActiveService[]) {
            setEditService({ id, services });
        }

        return <Stack>
            {cart.map((data, i) => <Grid gutter={20} key={data.vendorServiceGroupId + i}>
                <Grid.Col span={{ base: 12, md: 5 }}>
                    <Card withBorder>
                        <Card.Section>
                            <Image
                                style={{ width: '100%', height: '100px', objectFit: 'cover' }}
                                src={data.coverImg || ''}
                            />
                        </Card.Section>
                        <Flex justify={'center'} gap={'lg'}>
                            <DeleteOutlined key="remove" />,
                            <EditOutlined key="edit" onClick={() => openEdtServiceDialog('', [])} />,
                        </Flex>
                        <Group justify="space-between">
                            <Flex>
                                <Avatar src={data.vendorImg} />
                                <Text size="sm">{data.name}</Text>
                            </Flex>
                            <Badge>{data.vendorType}</Badge>
                        </Group>
                        <Stack>
                            <Link to={`/profile/${data.vendorId}`}>{data.vendorName}</Link>
                            <br />
                            <Text size="sm" fw={500}>{DateFormatter.short(data.date)}</Text> -
                            <Text size="sm" fw={500}>From {data.timeHour} to {data.timeHour + data.duration} ({data.duration} hours)</Text>
                        </Stack>
                    </Card>
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 7 }}>
                    <Stack>
                        <Text size="sm" fw={500}>Personal Note:</Text>
                        <Textarea
                            placeholder="Write down your requirements here..."
                            autosize
                            minRows={4}
                            maxRows={6}
                        />
                    </Stack>
                </Grid.Col>
            </Grid>)}
            {!cart?.length && <div>Sorry, Your cart is empty.</div>}

            {editService?.id && <Cart.Edit serviceId={editService.id} services={editService.services} onClose={() => setEditService(undefined)} />}
        </Stack>
    },
    Edit: (params: { serviceId: string, services: CartActiveService[], onClose: Function }) => {
        return <Modal opened={true} w={'1000px'} onClose={() => params.onClose()}>
            <ConfigureBooking minHour={1} vendorServiceGroupId={params.serviceId} options={params.services} />
        </Modal>
    },
    Summary: ({ data }: { data: CartItem[] }) => {
        const [orderSummary, setOrderSummary] = useState<{ total: number, gst: number, tax: number, final: number }>();
        useEffect(() => {
            const gst = 3;
            const total = data.reduce<CartItemService[]>((arr, i) => arr.concat(i.services), []).reduce((sum, item) => sum + item.cost, 0);
            const tax = (gst * total) / 100;

            setOrderSummary({
                total,
                tax,
                gst,
                final: total + tax
            })
        }, []);

        return <div style={{ border: '1px solid #e1e1e1', padding: '10px' }}>
            <Title order={4}>Order Summary</Title>
            {data.map(group => <div key={group.vendorServiceGroupId}>
                <b>{group.name}</b>
                {group.services.map(service => <Grid key={service.id} gutter={20} justify={'space-between'}>
                    <Grid.Col><Text size="sm" fw={500}>{service.name}</Text></Grid.Col>
                    <Grid.Col><Text size="sm">{service.cost} INR</Text></Grid.Col>
                </Grid>
                )}
            </div>)}
            <Divider />
            <Grid gutter={20} justify={'space-between'}>
                <Grid.Col><Text size="sm" fw={500}>Subtotal</Text></Grid.Col>
                <Grid.Col><Text size="sm" fw={500}>{orderSummary?.total} INR</Text></Grid.Col>
            </Grid>
            <Grid gutter={20} justify={'space-between'}>
                <Grid.Col><Text c="dimmed">GST({orderSummary?.gst}%)</Text></Grid.Col>
                <Grid.Col><Text >{orderSummary?.tax} INR</Text></Grid.Col>
            </Grid>
            <Divider />
            <Grid gutter={20} justify={'space-between'}>
                <Grid.Col><Text size="sm" fw={500}>Total</Text></Grid.Col>
                <Grid.Col><Text size="sm" fw={500}>{orderSummary?.final} INR</Text></Grid.Col>
            </Grid>
        </div>
    }
}


export default Cart.Index;