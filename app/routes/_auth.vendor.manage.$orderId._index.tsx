import { Alert, Avatar, Badge, Box, Button, Card, Container, Grid, Group, LoadingOverlay, Space, Text, Title } from "@mantine/core";
import { BookingStatus } from "@prisma/client";
import { ActionArgs, LoaderArgs, redirect } from "@remix-run/node";
import { Form, useLoaderData, useNavigation } from "@remix-run/react";
import { IconInfoCircle } from "@tabler/icons-react";
import { ChatBox } from "~/components/ChatBox";
import { PATH } from "~/path.data";
import ChatService from "~/service/chat.service";
import OrderService from "~/service/order.service";
import { USER_SESSION_KEY, getSession } from "~/session.server";
import Currency from "~/utils/currency.transformer";
import { db } from "~/utils/database";
import { DateFormatter } from "~/utils/date.transform";

async function getAssociatedVendorIdByUser(userId: string){
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

    return vendor.map(x => x.id);
}

export async function action(args:ActionArgs) {
    const session = await getSession(
        args.request.headers.get("Cookie")
    );
    const userId = session.get(USER_SESSION_KEY);
    const orderId = args.params.orderId;

    if (!userId || !orderId) {
        throw new Response('Page not found',{
			status: 404,
		});
    }

    const formData = await args.request.formData();
    const orderStatus = formData.get('orderStatus');


    const vendorIds = await getAssociatedVendorIdByUser(userId);
    const booking = await db.bookingService.findFirstOrThrow({
        where:{
            Booking:{
                orderId
            },
            vendorServiceGroup:{
                vendorId: {
                    in: vendorIds
                }
            }
        },
        select:{
            id: true
        }
    });

    switch(orderStatus){
        case BookingStatus.ACCEPTED: 
            await OrderService.vendorAcceptOrder({
                id: booking.id
            });
        break;
        case BookingStatus.REJECTED: 
            await OrderService.vendorRejectOrder({
                id: booking.id
            });
        break;
    }

    return true;
   
}

async function loaderResponse(userId: string, orderId:string){
   const vendorIds = await getAssociatedVendorIdByUser(userId);
   
   const orderData =  await db.bookingService.findFirstOrThrow({
       where:{
           Booking:{
               orderId
           },
           vendorServiceGroup:{
               vendorId: {
                   in: vendorIds
               }
           }
       },
       select:{
           id: true,
           date: true,
           timeHour: true,
           status: true,
           originalCost: true,
           cost: true,
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

export async function loader(args: LoaderArgs){
    const session = await getSession(
        args.request.headers.get("Cookie")
    );
    const userId = session.get(USER_SESSION_KEY);
    const orderId = args.params.orderId;

    if(!userId){
        return null;
    }

    if (!orderId) {
        throw new Response('Page not found',{
			status: 404,
		});
    }

    return await loaderResponse(userId, orderId);
}

export default function(){
    const {orderData, chatGroup} = useLoaderData<typeof loaderResponse>();
    const navigation = useNavigation();

    return <Container size={'xl'}>
        <Title order={5} c={'gray'}>Manage Booking</Title>
        <Title order={4}>Order Id: {orderData.Booking.orderId}</Title>
        <Space h="md"/>
        <Grid>
            <Grid.Col span={{base: 12, md: 8}}>
                <Card withBorder>
                    <Grid align="center">
                        <Grid.Col span={'content'}>
                            <Avatar variant="filled" radius="md" size="lg" src={PATH.THUMB_URL+ orderData.vendorServiceGroup.group.imageName} />
                        </Grid.Col>
                        <Grid.Col span={'auto'}>
                            <Group>
                                <Title order={5}>{orderData.vendorServiceGroup.group.name}</Title>
                                <Badge>{orderData.status}</Badge>
                            </Group>
                            <Text>Date: {DateFormatter.short(orderData.date)}</Text>
                            <Text>Time: {DateFormatter.timeHourTo12Hrs(orderData.timeHour)}</Text>
                            <Text>Cost: <Currency value={orderData.cost}/></Text>
                        </Grid.Col>
                    </Grid>
                </Card>
                <Space h="md"/>
                <Alert variant="outline" color="yellow" title="RSVP your availability" icon={<IconInfoCircle/>}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. At officiis, quae tempore necessitatibus placeat saepe.
                <Space h="md"/>
                <Box pos="relative">
                <LoadingOverlay visible={navigation.state !== 'idle'} zIndex={1000} overlayProps={{ radius: "sm", blur: 2 }} />
                    <Form action="" method="post">
                    <Group>
                        <Button type="submit" name="orderStatus" value={BookingStatus.ACCEPTED} variant="filled" color="green">Accept</Button>
                        <Button type="submit" name="orderStatus" value={BookingStatus.REJECTED} variant="outline" color="red">Decline</Button>
                    </Group>
                    </Form>
                </Box>
                </Alert>
            </Grid.Col>
            <Grid.Col span={{base: 12, md: 4}}>
                <ChatBox title="Chat with customer" chatGroupId={chatGroup?.id || ''} memberId={chatGroup?.ChatGroupMember[0]?.id || ''} disabled={chatGroup?.isDisabled || false}/>
            </Grid.Col>
        </Grid>
    </Container>
}
