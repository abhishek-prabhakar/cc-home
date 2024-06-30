import { ActionIcon, Badge, Box, Card, Divider, Grid, LoadingOverlay, ScrollArea, Space, Stack, TextInput, Title } from "@mantine/core";
import { ChatThread_type } from "@prisma/client";
import { useFetcher } from "@remix-run/react";
import { IconSend } from "@tabler/icons-react";
import { FormEvent, useEffect, useRef, useState } from "react";
import { Subscription, interval } from "rxjs";
import { CHAT_DATA_TYPE, ChatOutput, ChatOutputThread } from "~/types";

type inputProps ={
    memberId: string;
    chatGroupId: string;
}

const CHAT_REFRESH_INTERVAL = 5000;

export function ChatBox(input: inputProps){
    const fetcher = useFetcher<ChatOutput>();
    const [threads, setThreads] = useState<ChatOutputThread[]>([]);
    const [pendingThreads, setPendingThreads] = useState<string[]>([]);
    const [refresh, setRefresh] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const viewport = useRef<HTMLDivElement>(null);

    const CHAT_ENDPOINT = '/chat/'+input.chatGroupId;
   
    useEffect(() =>{
        if(refresh){
            dataPolling();
        }
    },[refresh]);

    useEffect(() =>{
        setIncomingMsg(fetcher.data?.threads);
        setRefresh(true);
    },[fetcher.data]);

    function dataPolling(){
        setRefresh(false);
        setTimeout(() => {
            fetchMessages(!!threads.length);
        }, CHAT_REFRESH_INTERVAL);
    }
    

    function fetchMessages(getRecent = true){
        if(document.hidden){
            setRefresh(true);
            return;
        }
        fetcher.submit({
            type: getRecent? CHAT_DATA_TYPE.RECENT: CHAT_DATA_TYPE.ALL_THREADS,
            timestamp: threads[threads.length-1]?.created_at.toString()
        },{
            method: 'get',
            action: CHAT_ENDPOINT
        });
    }

    function submitForm(e: FormEvent){
        e?.preventDefault();

        if(!inputRef?.current){
            return;
        }
        const newMsg =  inputRef.current.value;
        if(!newMsg) {return; }
        
       const msgType =  ChatThread_type.TEXT;
        setPendingThreads(pendingThreads.concat([newMsg]));
        fetcher.submit({
            message: newMsg,
            type:msgType
        },{
            method: 'post',
            action: CHAT_ENDPOINT
        });

        inputRef.current.value = '';
        scrollToBottom();
    }

    function setIncomingMsg(msgs:ChatOutputThread[] = []){
        if(!msgs.length){
            return;
        }
        setThreads(threads.concat(msgs || []));
        setPendingThreads([]);
        setTimeout(() => scrollToBottom());
    }

    function scrollToBottom(){
        viewport.current!.scrollTo({ top: viewport.current!.scrollHeight, behavior: 'smooth' });
    }

    return <Box>
        <Card withBorder>
            <Title order={5}>Chat with your vendor</Title>
            <Space h="md"/>
            <Divider/>
            <Space h="md"/>
            <Box pos={'relative'} mx={'-18px'}>
                <LoadingOverlay visible={!threads.length} zIndex={1} />
                <ScrollArea scrollbars="y" h={400} viewportRef={viewport} offsetScrollbars  type="always" px={10}>
                            <Stack gap={'xs'}>
                                {threads.map(item => <Grid gutter={0}  key={item.created_at.toString()} justify={item.memberId === input.memberId? 'end': 'start'}>
                                    <Grid.Col span={'content'}><Badge tt="none" color="gray" size="lg">{item.message}</Badge></Grid.Col>
                                </Grid> )}
                                {pendingThreads.map((item,key) => <Grid gutter={0}  key={key} justify="end">
                                    <Grid.Col span={'content'}><Badge tt="none" color="gray" size="lg">{item}</Badge></Grid.Col>
                                </Grid> )}
                            </Stack>
                </ScrollArea>
                </Box>
            <Space h="md"/>
            <fetcher.Form onSubmit={submitForm}>
            <Grid gutter={'xs'}>
                <Grid.Col span={'auto'}>
                    <TextInput ref={inputRef} name="ccmsginput" autoComplete="false" placeholder="Type your message here..."/>
                </Grid.Col>
                <Grid.Col span={'content'}>
                    <ActionIcon  size="lg" type="submit" variant="filled" color="green" aria-label="Settings">
                        <IconSend style={{ width: '70%', height: '70%' }} stroke={1.5} />
                    </ActionIcon>
                </Grid.Col>
            </Grid>
            </fetcher.Form>
        </Card>
    </Box>
}