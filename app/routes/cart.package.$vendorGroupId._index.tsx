import { Avatar, Badge, Box, Button, Card, Center, Checkbox, Container, Divider, Grid, Image, List, ListItem, Overlay, Pill, Popover, SimpleGrid, Space, Text, Title } from "@mantine/core";
import { DiscountType } from "@prisma/client";
import { ActionArgs, LoaderArgs, defer } from "@remix-run/node";
import { Await, Form, useLoaderData, useLocation, useNavigation, useSubmit } from "@remix-run/react";
import { Suspense, useEffect, useState } from "react";
import Skeleton from "~/components/Skeleton";
import COMMON_DATA from "~/data/common.data";
import { PATH } from "~/path.data";
import { VendorQuery } from "~/service/vendor.service";
import { CartInput, PackageService } from "~/types";
import Currency from "~/utils/currency.transformer";

const PACKAGE_MIN_SERVICE_COUNT = COMMON_DATA.MAKE_YOUR_PACKAGE_MIN_SERVICE_COUNT;

export function loader(args:LoaderArgs){
    const vendorGroupId = args.params.vendorGroupId;
    if( !vendorGroupId){
        throw new Response('Page not found',{
			status: 404,
		});
    }

    const data = VendorQuery.getServicesByGroupType(vendorGroupId);
    // const vendorDetails = VendorQuery.getVendorBasicInfo(vendorUsername);
    return defer({  services: data, preSelectedServices: [vendorGroupId] });
}

const Page = {
    Index: function(){
        const data = useLoaderData<typeof loader>();
        const [selectedServices, setSelectedService] = useState<PackageService[]>([]);

        function updateSelection(service: PackageService){
            const filtered = [...selectedServices];
            const foundIndex = filtered.findIndex(x => x.id === service.id);
            
            if(foundIndex > -1){
                filtered.splice(foundIndex, 1)
            } else{
                filtered.push(service);
            }

            setSelectedService(filtered);
        }

        return <Container size={'xl'}>
            <Suspense fallback={<Skeleton/>}>
                <Await resolve={data.services}>
                    {response => <Box>
                        <Title order={3}>Make your own package</Title>
                        <Space h="xl"/>
                        <Title order={5}>Choose atleast 3 services to continue.</Title>
                        <Space h="md"/>
                        <Grid gutter={{base: 'md', md: 'xl'}}>
                        {response?.map(item => <Grid.Col key={item.groupId} span={{base: 12, md: 3}}>
                            <Card style={{cursor:'pointer'}}  onClick={() => updateSelection(item) } radius={'md'} withBorder>
                                <Card.Section pos={'relative'}>
                                    <Box pos={'absolute'} right={20} top={20}>
                                        <Checkbox color="green" size="lg" checked={!!selectedServices.find(x => x.id === item.id)}/>
                                    </Box>
                                    <Image height={100} src={item.group.imageName}/>
                                    <Overlay
                                        gradient="linear-gradient(145deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0) 100%)"
                                        opacity={0.85}
                                        zIndex={0}
                                    />
                                </Card.Section>
                                <Space h="md"/>
                                <Title order={5}>{item.group.name}</Title>
                                <Space h="md"/>
                                <Title order={4}><Currency discountType={DiscountType.PERCENTAGE} discountValue={15} value={item.cost}/></Title>
                                <Space h="md"/>
                                {item.vendorService.length? <Popover disabled width={200} position="bottom" withArrow shadow="md">
                                    <Popover.Target>
                                        <Pill styles={{label:{ margin: 'auto'}}} ta={'center'} style={{cursor:'pointer'}}>{item.vendorService[0]?.service.name} & {item.vendorService.length-1} features</Pill>
                                    </Popover.Target>
                                    <Popover.Dropdown>
                                        <Text fw="bold">Available Services:</Text>
                                        <List>
                                            {item.vendorService.map(s => <ListItem key={s.service.name}><Text size="sm">{s.service.name}</Text></ListItem>)}
                                        </List>
                                    </Popover.Dropdown>
                                </Popover>: <Space h={22}/>}
                            </Card>
                        </Grid.Col>
                        )}
                        </Grid>
                        <Space h={'xl'}/>
                        <Page.SummaryBar packageId={'CUSTOM'} discountType={DiscountType.PERCENTAGE} discountValue={COMMON_DATA.MAKE_YOUR_PACKAGE_MAX_DISCOUNT_VALUE} services={selectedServices}/>
                    </Box>}
                </Await>
            </Suspense>
        </Container>
    },
    SummaryBar:function({packageId, services, discountType, discountValue}: {packageId: string, discountType: DiscountType, discountValue:number, services : PackageService[]}){
        const [totalCost, setCost] = useState(0);
        const submit = useSubmit();
        const navigation = useNavigation();
        const location = useLocation();

        useEffect(() =>{
            const sum = services.reduce((s,x) => s + x.cost, 0);
            setCost(sum);
        },[services]);

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
            submit({ cart: JSON.stringify(input), packageId,  redirectUrl: location.pathname }, {
                action: '/order/checkout',
                method: 'post',
            });
        }

        return <Box pos={'sticky'} bottom={20}>
            <Card withBorder shadow="md" bg={'yellow.0'}>
                <Grid align="center">
                    <Grid.Col span={'content'} visibleFrom="md">
                        <Avatar.Group>
                        {services.map(item=> <Avatar key={item.groupId} src={item.group.imageName}/>)}
                        </Avatar.Group>
                    </Grid.Col>
                    <Grid.Col span={'auto'}>
                        <Title  order={4}>{services.length < 3? 'Choose atleast '+PACKAGE_MIN_SERVICE_COUNT+' service': 'You have selected:'}</Title>
                        <Text>{services[0]?.group.name} {services.length > 1? '+ '+(services.length-1) +' services': ''}</Text>
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
                        <Button disabled={services.length < PACKAGE_MIN_SERVICE_COUNT} loading={  ['loading','submitting'].includes(navigation.state)} type="submit" onClick={expresCheckout}>Proceed to payment</Button>
                    </Grid.Col>
                </Grid>
            </Card>
        </Box>
    }
}

export default Page.Index;