import { EditOutlined, PhoneOutlined } from "@ant-design/icons";
import { Avatar, Badge, Button, Card, Grid, Group, SimpleGrid, Skeleton, Space, Stack, Text, Title } from "@mantine/core";
import { BookingStatus, User } from "@prisma/client";
import { LoaderArgs, TypedDeferredData, V2_MetaFunction, defer } from "@remix-run/node";
import { Await, Link, useLoaderData } from "@remix-run/react";
import { Suspense } from "react";
import { PATH } from "~/path.data";
import Routes from "~/routes.data";
import WishlistService from "~/service/wishlist.service";
import { USER_SESSION_KEY, getSession } from "~/session.server";
import { UserBooking, UserData } from "~/types";
import { db } from "~/utils/database";
import { DateFormatter } from "~/utils/date.transform";
import { StatusMarker } from "~/utils/statusMarker.map";

type OrderItem = { id: string, status: BookingStatus, date: Date }


export const meta: V2_MetaFunction = () => {
    return [
        { title: "My Account | Wishlist" },
        { name: "description", content: "Celebria Collective, Find your Pefect vendor" },
    ];
};

export async function loader({ request }: LoaderArgs) {
    const session = await getSession(request.headers.get('Cookie'));
    const userId = session.get(USER_SESSION_KEY);

    if(!userId){
        throw new Response('Page not found',{
			status: 404,
		});
    }
   // await db.wishlist.deleteMany();
    const items = WishlistService.getAllItems({
        userId
    })


    return defer({ items });
}



const WishlistHome = {
    Index: () => {
        return <Grid>
            <Grid.Col span={12}>
                <Title order={3}>My Favorites</Title>
                <Space h={'lg'}/>
                <WishlistHome.AllItems />
            </Grid.Col>
        </Grid>
    },
    AllItems: () => {
        const data = useLoaderData<typeof loader>();

        return <div>
            <Suspense fallback={<Skeleton />}>
                <Await resolve={data.items}>
                    {response =>  <SimpleGrid
                            cols={{ base: 1,  lg: 3 }}
                            spacing={{ base: 10, sm: 'xl' }}
                            verticalSpacing={{ base: 'md', sm: 'xl' }}
                        >
                        {
                        response.map(item => <Card radius={'md'} withBorder key={item.id}>
                            <Group>
                                <Link to={Routes.get('VendorProfile', { id: item.Vendor.username})}>
                                    <Avatar size="xl" src={PATH.RESOURCE_URL + item.Vendor.profileImageName} alt="vendor" />
                                </Link>
                                <Stack>
                                    <Title order={5}><Link to={Routes.get('VendorProfile', { id: item.Vendor.username})}>{item.Vendor.username}</Link></Title>
                                    <Badge variant="outline" color="gray">{item.Vendor.vendorType?.name}</Badge>
                                </Stack>
                            </Group>
                        </Card>
                        )}
                        {!response.length && <Grid.Col span={12}>Sorry, You haven't wishlisted anything.</Grid.Col>}
                    </SimpleGrid>
                    }
                </Await>
            </Suspense>
        </div >
    }
}

export default WishlistHome.Index;