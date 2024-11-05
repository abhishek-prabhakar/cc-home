import { Accordion, Box, Card, Grid, Space, Title } from "@mantine/core";
import { UserSource } from "@prisma/client";
import { LoaderArgs } from "@remix-run/node";
import { Await, Outlet, useLoaderData, useNavigate } from "@remix-run/react";
import { Suspense } from "react";
import Skeleton from "~/components/Skeleton";
import ChatService from "~/service/chat.service";
import { USER_SESSION_KEY, getSession } from "~/session.server";
import classes from '../styles/accordionInbox.module.css';
import { DateFormatter } from "~/utils/date.transform";
import Routes from "~/routes.data";

export async function loader({ params, request }: LoaderArgs) {
    const session = await getSession(request.headers.get('Cookie'));
    const userId = session.get(USER_SESSION_KEY);

    if(!userId){
        throw new Response('',{
            status: 404,
        });
    }

    const groups = await ChatService.getAllChatGroupsByUser(userId);
    return {groups};

}

const Inbox = {
    Home: () => {
        return <Box>
                <Title order={3}>Inbox</Title>
                <Space h={'lg'}/>
                    <Grid>
                        <Grid.Col span={{ base: 12, md: 4 }}>
                            <Card withBorder p={2}>
                                <Inbox.Groups />
                            </Card>
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, md: 8 }}>
                            <Outlet/>
                        </Grid.Col>
                    </Grid>
     </Box>;
    },
    Groups:() =>{
        const data = useLoaderData<typeof loader>();
        const navigate = useNavigate(); 

        function navigateToChat(id: string){
            navigate(Routes.get('UserInboxGroup',{ id }));
        }

        return <Box>
            <Suspense fallback={<Skeleton />}>
                <Await resolve={data.groups}>
                    {_response =>  <Accordion  defaultValue="0" classNames={classes}>
                        {_response?.map(item => <Accordion.Item key={item.id} value={item.id}>
                                <Accordion.Control onClick={v => navigateToChat(item.id)}>{item.name || DateFormatter.short(item.created_at)}</Accordion.Control>
                            </Accordion.Item>) }
                    </Accordion>}
                </Await>
            </Suspense>
        </Box>
    }
}


export default  Inbox.Home;