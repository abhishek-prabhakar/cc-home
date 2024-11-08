import { Accordion, Box, Card, Grid, Space, ThemeIcon, Title, em } from "@mantine/core";
import { LoaderArgs } from "@remix-run/node";
import { Await, Outlet, useLoaderData, useLocation, useNavigate } from "@remix-run/react";
import { Suspense, useEffect, useState } from "react";
import Skeleton from "~/components/Skeleton";
import ChatService from "~/service/chat.service";
import { USER_SESSION_KEY, getSession } from "~/session.server";
import classes from '../styles/accordionInbox.module.css';
import { DateFormatter } from "~/utils/date.transform";
import Routes from "~/routes.data";
import { useMediaQuery } from "@mantine/hooks";
import { IconAlertSmall } from "@tabler/icons-react";

export async function loader({ params, request }: LoaderArgs) {
    const session = await getSession(request.headers.get('Cookie'));
    const userId = session.get(USER_SESSION_KEY);

    if(!userId){
        return null;
    }

    const groups = await ChatService.getAllChatGroupsByUser(userId);
    return {groups};

}

const Inbox = {
    Home: () => {
        const location = useLocation();
        const isMobile = useMediaQuery(`(max-width: ${em(992)})`);
        const [showChatGroupsList, setChatGroupsListVisible] = useState(false);

        useEffect(() =>{
            if(isMobile){
                setChatGroupsListVisible(location.pathname === Routes.get('UserInbox'));
            } else{
                setChatGroupsListVisible(true);
            }
        },[location.pathname, isMobile]);

        return <Box>
                <Title order={3}>Inbox</Title>
                <Space h={'lg'}/>
                    <Grid gutter={'xl'}>
                        <Grid.Col hidden={!showChatGroupsList} span={{ base: 12, md: 4 }}>
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
                <Await resolve={data?.groups}>
                    {_response =>  <Accordion  defaultValue="0" classNames={classes}>
                        {_response?.map(item => <Accordion.Item key={item.id} value={item.id}>
                                <Accordion.Control icon={item.ChatThread.length && item.ChatGroupMember[0].lastSeen < item.ChatThread[0].created_at? <ThemeIcon size="sm" radius="lg"  color="yellow"><IconAlertSmall/></ThemeIcon>:''} onClick={v => navigateToChat(item.id)}>{item.name || DateFormatter.short(item.created_at)}</Accordion.Control>
                            </Accordion.Item>) }
                    </Accordion>}
                </Await>
            </Suspense>
        </Box>
    }
}


export default  Inbox.Home;