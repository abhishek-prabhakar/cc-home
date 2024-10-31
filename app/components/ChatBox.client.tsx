import { ActionIcon, Badge, Box, Card, Divider, Flex, Grid, Group, Loader, LoadingOverlay, ScrollArea, Space, Stack, Text, TextInput, Title } from "@mantine/core";
import { ChatThread_type } from "@prisma/client";
import { useFetcher } from "@remix-run/react";
import { IconSend2, IconX } from "@tabler/icons-react";
import { IconMicrophone, IconPlayerStopFilled } from "@tabler/icons-react";
import axios from "axios";
import { FormEvent, useEffect, useRef, useState } from "react";
import {  LiveAudioVisualizer } from "react-audio-visualize";
import {  useAudioRecorder } from "react-audio-voice-recorder";
import WaveSurfer from "wavesurfer.js";
import { PATH } from "~/path.data";
import { CHAT_DATA_TYPE, ChatOutput, ChatOutputThread } from "~/types";
const stringHash = require("string-hash");

type inputProps ={
    memberId: string;
    chatGroupId: string;
    disabled: boolean;
    title?: string
}

const CHAT_REFRESH_INTERVAL = 5000;
const VOICE_BLOB_TYPE = 'audio/ogg; codecs=opus';

export function ChatBox(input: inputProps){
    const fetcher = useFetcher<ChatOutput>();
    const [threads, setThreads] = useState<ChatOutputThread[]>([]);
    const [pendingThreads, setPendingThreads] = useState<{ type: ChatThread_type, data: string}[]>([]);
    const [refresh, setRefresh] = useState(false);
    const [pageReady, setPageReady] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const viewport = useRef<HTMLDivElement>(null);

    const CHAT_ENDPOINT = '/chat/'+input.chatGroupId;
    const title = input.title || 'Chat with your vendor';
   
    useEffect(() =>{
        if(refresh){
            dataPolling();
        }
    },[refresh]);

    useEffect(() =>{
        setRefresh(true);
        if(!fetcher.data){
            return;
        }

        setIncomingMsg(fetcher.data?.threads);
        if(!pageReady){
            setPageReady(true);
        }
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
            memberId: input.memberId,
            type: getRecent? CHAT_DATA_TYPE.RECENT: CHAT_DATA_TYPE.ALL_THREADS,
            timestamp: threads[threads.length-1]?.created_at.toString()
        },{
            method: 'get',
            action: CHAT_ENDPOINT
        });
    }

    function submitTextMsg(e: FormEvent){
        e?.preventDefault();
        if(!inputRef?.current){
            return;
        }
        const newMsg  =  inputRef.current.value;
        if(!newMsg) {return; }
        submitForm(ChatThread_type.TEXT,newMsg);
        inputRef.current.value = '';
        scrollToBottom();
    }

    function submitVoiceMsg(data: string){
        if(!data){
            return;
        }
        submitForm(ChatThread_type.VOICE,data);
        scrollToBottom();
    }

    function submitForm(type: ChatThread_type, message: string){
        if(!message || !type) {return; }
        setPendingThreads(pendingThreads.concat([{ data: message, type: type }]));
        fetcher.submit({
            message: message,
            type
        },{
            method: 'post',
            action: CHAT_ENDPOINT
        });
        scrollToBottom();
    }

    function setIncomingMsg(msgs:ChatOutputThread[] = []){
        if(!msgs.length){
            return;
        }
        setThreads(threads.concat(msgs || []));
        setPendingThreads([]);
        scrollToBottom();
    }

    function scrollToBottom(){
        setTimeout(() =>  viewport.current!.scrollTo({ top: viewport.current!.scrollHeight, behavior: 'smooth' }));
    }

    return <Box>
        <Card withBorder>
            <Title order={5}>{title}</Title>
            <Space h="md"/>
            <Divider/>
            <Space h="md"/>
            <Box pos={'relative'} mx={'-18px'}>
                <LoadingOverlay visible={!threads.length} zIndex={1} loaderProps={{ children: pageReady && !threads.length?'Start a conversation': <Loader color="blue" type="bars" /> }} />
                <ScrollArea scrollbars="y" h={400} viewportRef={viewport} offsetScrollbars  type="always" px={10}>
                            <Grid gutter={'sm'}  >
                                {threads.map(item =>  <Grid.Col span={12} key={item.created_at.toString()}>
                                    <Flex justify={item.memberId === input.memberId? 'flex-end': 'flex-start'}>
                                        <Box maw={'80%'}>
                                            <ChatThread type={item.type} message={item.message}/>
                                        </Box>
                                    </Flex>
                                </Grid.Col> )}
                                {pendingThreads.map((item,key) =>  <Grid.Col span={12} key={key}>
                                    <Flex justify={'flex-end'}>
                                        <Box maw={'80%'}>
                                            <ChatThread  type={item.type} message={item.data}/>
                                        </Box>
                                    </Flex>
                                </Grid.Col> )}
                            </Grid>
                </ScrollArea>
                </Box>
            <Space h="md"/>
           {!input.disabled? <form onSubmit={submitTextMsg}>
            <Grid pos={'relative'} gutter={'xs'} align="center">
                <Grid.Col span={'auto'}>
                    <TextInput radius={'xl'} ref={inputRef} name="ccmsginput" autoComplete="false" placeholder="Type your message here..."/>
                </Grid.Col>
                <Grid.Col span={'content'}>
                    <ActionIcon  radius={'xl'} size="lg" type="submit" variant="filled" color="green" aria-label="Send">
                        <IconSend2 style={{ width: '70%', height: '70%' }} stroke={1.5} />
                    </ActionIcon>
                </Grid.Col>
                <Grid.Col span={'content'}>
                    <VoiceNote onSubmit={submitVoiceMsg}/>
                </Grid.Col>
            </Grid>
            </form>: <Text c="dimmed">Messaging is disabled.</Text>}
        </Card>
    </Box>
}

function ChatThread(props: {
    type: ChatThread_type;
    message: string;
}){
    return props.type === ChatThread_type.VOICE? <LoadAudioFile  url={PATH.RESOURCE_URL_VOICE+props.message}/> : <Badge tt="none" color="gray" size="lg">{props.message}</Badge>
}

function LoadAudioFile({ url}:{ url: string}){
    const [fileBlob, setFileBlob] = useState<Blob>();
    useEffect(() =>{
        fetch(url)
        .then(res => res.blob())
        .then(blob => {
            setFileBlob(blob);
        });
    },[]);


    return fileBlob? <Card p={5}  radius={'lg'} withBorder>
        <AudioPreview id={url} media={fileBlob} />
        </Card>:  <Loader color="gray" size="xs" />;
};

function AudioPreview({media, id}:{id: string, media: Blob}){
    const [wavesurfer, setWavePlayer] = useState<WaveSurfer>();
    const [getId, setId] = useState<string>();

    useEffect(() =>{
        const domId = stringHash(id);
        setId(domId);
    },[]);

    useEffect(() =>{
        genPlayer();
    },[getId]);
    

    function genPlayer(){
        if(!getId){
            return;
        };

        const elRef = document.getElementById(getId);
        wavesurfer?.destroy();
        if(elRef && !wavesurfer){
            const wavesurferRef = WaveSurfer.create({
                container: elRef,
                waveColor: '#184BFF',
                progressColor: 'violet',
                url: URL.createObjectURL(media),
                barWidth: 2,
                barGap: 2,
                height: 20,
            });
            setWavePlayer(wavesurferRef);
        }
    }

    const onPlayPause = () => {
      wavesurfer && wavesurfer.playPause()
    }

   

    return  <>
        <Box style={{cursor:'pointer'}}   onClick={onPlayPause} w={200}>
            <Box style={{pointerEvents: 'none'}} id={getId}></Box>
        </Box>
    </>;
}

 function VoiceNote(props:{
    onSubmit: (v:string) => void
}){
    const {
        startRecording,
        stopRecording,
        mediaRecorder,
        isRecording,
        recordingBlob
    } = useAudioRecorder();
    const [audioOutput, setAudioOutput] = useState<Blob | null>();

    useEffect(() => {
        if (!recordingBlob) return;
        setAudioOutput(recordingBlob);
    }, [recordingBlob])
    
      async function submitAudio(){
        if(!audioOutput) return;
        axios({
            method: 'post', url: PATH.VOICE_FILE_UPLOAD, data: {
                file: audioOutput
            },
            headers: { "Content-Type": "multipart/form-data" }
        }).then( data =>{
            props.onSubmit(data.data.names);
            setAudioOutput(null);
        });
      }
      
    return <Box>
            <Card display={mediaRecorder || audioOutput? 'block': 'none'} withBorder radius={'xl'} p={'8'} pos={'absolute'} top={0} left={0} w={'calc(100% - 38px)'} bg={'white'}>
                {
                    mediaRecorder?  
                        <LiveAudioVisualizer
                        mediaRecorder={mediaRecorder}
                        width={200}
                        height={20}
                        barWidth={3}
                        gap={2}
                        barColor={'#184BFF'}
                        />  : ''
                }
                {
                    audioOutput? <Group>
                        <Box flex={1}>
                            <AudioPreview id="new-voice-note" media={audioOutput}/>
                        </Box>
                    <ActionIcon radius="xl" onClick={() => setAudioOutput(null)} variant="light" color="gray" size="md"  aria-label="Settings">
                        <IconX style={{ width: '70%', height: '70%' }} />
                    </ActionIcon>
                </Group>: ''
                }
            </Card>
                {isRecording? <ActionIcon onClick={stopRecording} variant="filled" color="red" size="md" radius="xl" aria-label="Stop">
                        <IconPlayerStopFilled style={{ width: '70%', height: '70%' }} stroke={1.5} />
                    </ActionIcon> : ''
                }
                {
                  !isRecording && !audioOutput?   <ActionIcon onClick={startRecording} variant="outline" size="xl" radius="xl" aria-label="Start">
                     <IconMicrophone style={{ width: '70%', height: '70%' }} stroke={1.5} />
                 </ActionIcon>: ''
                }
                
                {
                    audioOutput?  <ActionIcon  radius={'xl'}  onClick={submitAudio}  size="lg" type="submit" variant="filled" color="green" aria-label="Send">
                    <IconSend2 style={{ width: '70%', height: '70%' }} stroke={1.5} />
                </ActionIcon> : ''
                }
  </Box>
}