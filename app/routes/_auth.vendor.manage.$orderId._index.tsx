import { Alert, Avatar, Badge, Button, Card, Container, Grid, Group, Space, Text, Title } from "@mantine/core";
import { LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { IconInfoCircle } from "@tabler/icons-react";
import { ChatBox } from "~/components/ChatBox";
import { PATH } from "~/path.data";
import ChatService from "~/service/chat.service";
import { USER_SESSION_KEY, getSession } from "~/session.server";
import { db } from "~/utils/database";
import { DateFormatter } from "~/utils/date.transform";



export async function loader(args: LoaderArgs){
    const session = await getSession(
        args.request.headers.get("Cookie")
    );
    const userId = session.get(USER_SESSION_KEY);
    const orderId = args.params.orderId;

    if (!userId || !orderId) {
        throw new Error('Page not found');
    }

    const user = await db.user.findFirstOrThrow({
        select:{
            username: true
        },
        where:{
            id: userId
        }
    });

    const vendor =  await db.vendor.findMany({
        where:{
            mobileNumber: user.username
        },
        select:{
            id: true
        }
    });

    const orderData =  await db.bookingService.findFirstOrThrow({
        where:{
            Booking:{
                orderId
            },
            vendorServiceGroup:{
                vendorId: {
                    in: vendor.map(x => x.id)
                }
            }
        },
        select:{
            id: true,
            date: true,
            timeHour: true,
            status: true,
            vendorServiceGroup:{
                select:{
                    vendorId: true,
                    group:{
                        select:{
                            name: true,
                            imageName: true
                        }
                    }
                }
            },
            Booking:{
                select:{
                    orderId: true,
                }
            }
        }
    });

   const chatGroup = await ChatService.getChatgroupByOrderId(orderId, orderData.vendorServiceGroup.vendorId);   

    return {orderData,chatGroup};
}

export default function(){
    const {orderData, chatGroup} = useLoaderData<typeof loader>();

    return <Container size={'xl'}>
        <Title order={5} c={'gray'}>Manage Booking</Title>
        <Title order={4}>Order Id: {orderData.Booking.orderId}</Title>
        <Space h="md"/>
        <Grid>
            <Grid.Col span={{base: 12, md: 8}}>
                <Card withBorder>
                    <Grid>
                        <Grid.Col span={'content'}>
                            <Avatar variant="filled" radius="md" size="lg" src={PATH.THUMB_URL+ orderData.vendorServiceGroup.group.imageName} />
                        </Grid.Col>
                        <Grid.Col span={'auto'}>
                            <Title order={5}>{orderData.vendorServiceGroup.group.name}</Title>
                            <Text>Date: {DateFormatter.short(orderData.date)}</Text>
                            <Text>Time: {DateFormatter.timeHourTo12Hrs(orderData.timeHour)}</Text>
                        </Grid.Col>
                        <Grid.Col span={'content'}>
                            <Badge>{orderData.status}</Badge>
                        </Grid.Col>
                    </Grid>
                </Card>
                <Space h="md"/>
                <Alert variant="outline" color="yellow" title="RSVP your availability" icon={<IconInfoCircle/>}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. At officiis, quae tempore necessitatibus placeat saepe.
                <Space h="md"/>
                <Group>
                    <Button variant="filled" color="green">Accept</Button>
                    <Button variant="outline" color="red">Decline</Button>
                </Group>
                </Alert>
            </Grid.Col>
            <Grid.Col span={{base: 12, md: 4}}>
                <ChatBox title="Chat with customer" chatGroupId={chatGroup?.id || ''} memberId={chatGroup?.ChatGroupMember[0]?.id || ''} disabled={chatGroup?.isDisabled || false}/>
            </Grid.Col>
        </Grid>
    </Container>
}
