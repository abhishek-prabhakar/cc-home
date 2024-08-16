import { Avatar, Badge, Box, Button, Card, Center, Container, Divider, Grid, Image, List, ListItem, Overlay, Pill, Popover, SimpleGrid, Space, Text, Title } from "@mantine/core";
import { DiscountType } from "@prisma/client";
import { ActionArgs, LoaderArgs, defer } from "@remix-run/node";
import { Await, Form, useLoaderData, useNavigation, useSubmit } from "@remix-run/react";
import { Suspense, useEffect, useState } from "react";
import Skeleton from "~/components/Skeleton";
import { PATH } from "~/path.data";
import { VendorQuery } from "~/service/vendor.service";
import { CartInput } from "~/types";
import Currency from "~/utils/currency.transformer";

type Service = {
    id: string;
    groupId: string;
    cost: number;
    costExtraHour: number;
    group: {
        name: string;
        imageName: string | null;
        minHour: number;
        commitFullDay: boolean;
    };
    vendorService: {
        service: {
            name: string;
        };
    }[];
};

export function loader(args:LoaderArgs){
    const vendorUsername = args.params.username;
    const packageId = args.params.packageKey;
    if(!packageId || !vendorUsername){
        throw new Response('Page not found',{
			status: 404,
		});
    }

    const data = VendorQuery.packageById(vendorUsername, packageId);
    const vendorDetails = VendorQuery.getVendorBasicInfo(vendorUsername);
    return defer({ packageId, vendorDetails, package: data });
}

const Page = {
    Index: function(){
        const data = useLoaderData<typeof loader>();

        return <Container size={'xl'}>
            <Suspense fallback={<Skeleton/>}>
                <Await resolve={data.package}>
                    {response => <Box>
                        <Title order={3}>{response.packageData.name}</Title>
                        <Space h="xl"/>
                        <Title order={5}>Services included in this package</Title>
                        <Space h="md"/>
                        <Grid gutter={{base: 'md', md: 'xl'}}>
                        {response?.services.map(item => <Grid.Col key={item.groupId} span={{base: 12, md: 3}}>
                            <Card radius={'md'} withBorder>
                            <Card.Section pos={'relative'}>
                                <Image height={100} src={PATH.RESOURCE_URL+item.group.imageName}/>
                                <Overlay
                                    gradient="linear-gradient(145deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0) 100%)"
                                    opacity={0.85}
                                    zIndex={0}
                                />
                            </Card.Section>
                            <Space h="md"/>
                            <Title order={5}>{item.group.name}</Title>
                            <Space h="md"/>
                            <Title order={4}><Currency discountType={response.packageData.discountType} discountValue={response.packageData.discountValue} value={item.cost}/></Title>
                            <Space h="md"/>
                            {item.vendorService.length? <Popover width={200} position="bottom" withArrow shadow="md">
                                <Popover.Target>
                                    <Pill styles={{label:{ margin: 'auto'}}} ta={'center'} style={{cursor:'pointer'}}>{item.vendorService[0]?.service.name} & {item.vendorService.length-1} features</Pill>
                                </Popover.Target>
                                <Popover.Dropdown>
                                    <Text fw="bold">Included:</Text>
                                    <List>
                                        {item.vendorService.map(s => <ListItem key={s.service.name}><Text size="sm">{s.service.name}</Text></ListItem>)}
                                    </List>
                                </Popover.Dropdown>
                            </Popover>: <Space h={22}/>}
                        </Card></Grid.Col>
                        )}
                        </Grid>
                        <Space h={'xl'}/>
                        <Page.SummaryBar packageId={data.packageId} name={response.packageData.name} discountType={response.packageData.discountType} discountValue={response.packageData.discountValue} services={response.services}/>
                    </Box>}
                </Await>
            </Suspense>
        </Container>
    },
    SummaryBar:function({packageId, name, services, discountType, discountValue}: {packageId: string, name: string, discountType: DiscountType, discountValue:number, services : Service[]}){
        const [totalCost, setCost] = useState(0);
        const submit = useSubmit();
        const navigation = useNavigation();

        useEffect(() =>{
            const sum = services.reduce((s,x) => s + x.cost, 0);
            setCost(sum);
        },[]);

        function getInputParams() {
            const params: CartInput[] = services?.map(x => ({
                vendorServiceGroupId: x.id,
                date: '',
                timeHour: 0,
                duration: 1,
                services: [],
                location: '',
                locationLat: 0,
                locationLon: 0
            })) || [];

            return params;
        }

        function expresCheckout() {
            const input = getInputParams();
            submit({ cart: JSON.stringify(input), packageId }, {
                action: '/order/checkout',
                method: 'post',
            });
        }

        return <Box pos={'sticky'} bottom={20}>
            <Card withBorder shadow="md" bg={'yellow.0'}>
                <Grid align="center">
                    <Grid.Col span={'content'}>
                    <Avatar.Group>
                       {services.map(item=> <Avatar key={item.groupId} src={PATH.RESOURCE_URL+item.group.imageName}/>)}
                    </Avatar.Group>
                    </Grid.Col>
                    <Grid.Col span={'auto'}>
                        <Title  order={4}>{name}</Title>
                        <Text>{services[0].group.name} + {services.length-1} services</Text>
                    </Grid.Col>
                    <Grid.Col span={12} hiddenFrom="md">
                    </Grid.Col>
                    <Grid.Col span={{base: 'auto', md: 'content' }}>
                        <Title  order={3}><Currency value={totalCost} discountType={discountType} discountValue={discountValue}/></Title>
                    </Grid.Col>
                    <Grid.Col span={'content'}>
                        <Divider orientation="vertical" h={40}/>
                    </Grid.Col>
                    <Grid.Col span={'content'}>
                        <Button loading={  ['loading','submitting'].includes(navigation.state)} type="submit" onClick={expresCheckout}>Proceed to payment</Button>
                    </Grid.Col>
                </Grid>
            </Card>
        </Box>
    }
}

export default Page.Index;