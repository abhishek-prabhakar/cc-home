import { Alert, Avatar, Badge, Box, Button, Card, Container, Divider, Grid, Group, LoadingOverlay, PinInput, Space, Stack, Text, Title } from "@mantine/core";
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
            mobileNumber: user.username,
            isActive: true
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
    const bookingServiceId = formData.get('bookingServiceId')?.toString();

    if(!bookingServiceId){
        return false;
    }

    switch(orderStatus){
        case BookingStatus.ACCEPTED: 
            await OrderService.vendorAcceptOrder({
                id: bookingServiceId
            });
        break;
        case BookingStatus.REJECTED: 
            await OrderService.vendorRejectOrder({
                id: bookingServiceId
            });
        break;
    }

    return true;
   
}

async function loaderResponse(userId: string, orderId:string){
   const vendorIds = await getAssociatedVendorIdByUser(userId);
   
   const orderData =  await db.bookingService.findMany({
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

  const chatGroup = await ChatService.getChatgroupByOrderId(orderId, orderData[0].vendorServiceGroup.vendorId);   

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

const Page = {
    Index: () =>{
        const {orderData, chatGroup} = useLoaderData<typeof loaderResponse>();
        const navigation = useNavigation();
    
        return <Container size={'xl'}>
            <Title order={5} c={'gray'}>Manage Booking</Title>
            {/* <Title order={4}>Order Id: {orderData.Booking.orderId}</Title> */}
            <Space h="md"/>
            <Grid>
                <Grid.Col span={{base: 12, md: 8}}>
                    {orderData.map(service => <Stack>
                        <Card withBorder>
                        <Grid align="center">
                            <Grid.Col span={'content'}>
                                <Avatar variant="filled" radius="md" size="lg" src={PATH.THUMB_URL+ service.vendorServiceGroup.group.imageName} />
                            </Grid.Col>
                            <Grid.Col span={'auto'}>
                                <Group>
                                    <Title order={5}>{service.vendorServiceGroup.group.name}</Title>
                                    <Badge>{service.status}</Badge>
                                </Group>
                                <Text>Date: {service.date? DateFormatter.short(service.date): 'To be notified'}</Text>
                                <Text>Time: {service.date? DateFormatter.timeHourTo12Hrs(service.timeHour): '-'}</Text>
                                <Text>Cost: <Currency value={service.cost}/></Text>
                            </Grid.Col>
                        </Grid>
                    </Card>
                    <Alert variant="outline" color="yellow" title="RSVP your availability" icon={<IconInfoCircle/>}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. At officiis, quae tempore necessitatibus placeat saepe.
                    <Space h="md"/>
                    <Box pos="relative">
                    <LoadingOverlay visible={navigation.state !== 'idle'} zIndex={1000} overlayProps={{ radius: "sm", blur: 2 }} />
                       {service.status === BookingStatus.PENDING? <Form action="" method="post">
                        <input type="hidden" name="bookingServiceId" value={service.id}/>
                        <Group>
                            <Button type="submit" name="orderStatus" value={BookingStatus.ACCEPTED} variant="filled" color="green">Accept</Button>
                            <Button type="submit" name="orderStatus" value={BookingStatus.REJECTED} variant="outline" color="red">Decline</Button>
                        </Group>
                        </Form>: 'Thank you for your update.'}
                    </Box>
                    </Alert>
                    <Space h={'lg'}/>
                    {service.status === BookingStatus.ACCEPTED? <Page.StartService/>: ''}
                    </Stack>)}
                </Grid.Col>
                <Grid.Col span={{base: 12, md: 4}}>
                    <Page.ChatSection chatGroupId={chatGroup?.id || ''} memberId={chatGroup?.ChatGroupMember[0]?.id || ''} isDisabled={chatGroup?.isDisabled || false} />
                </Grid.Col>
            </Grid>
        </Container>;
    },
    ChatSection:(props:{ chatGroupId: string, memberId: string, isDisabled: boolean}) =>{
        return  <ChatBox title="Chat with customer" chatGroupId={props.chatGroupId} memberId={props.memberId} disabled={props.isDisabled}/>
    },
    StartService: () =>{
        return <Card withBorder>
            <Title order={5}>Start Service</Title>
            <Space h={'sm'}/>
            <Text>Enter customer OTP to begin service.</Text>
            <Space h={'sm'}/>
            <PinInput/>
            <Space h={'lg'}/>
            <Group>
                <Button variant="outline" size="xs">Resend OTP</Button>
                <Button  size="xs">Verify & Start Service</Button>
            </Group>
        </Card>
    }
}

export default Page.Index;
