import { Card } from "@mantine/core";
import { LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useEffect, useState } from "react";
import { ChatBox } from "~/components/ChatBox.client";
import ChatService from "~/service/chat.service";
import { USER_SESSION_KEY, getSession } from "~/session.server";

export async function loader({request, params}: LoaderArgs){
    const session = await getSession(request.headers.get('Cookie'));
    const userId = session.get(USER_SESSION_KEY);
    const chatGroupId = params.chatGroupId;

    if(!chatGroupId || !userId){
        return null;
    }

    const group = await ChatService.getChatGroupByUserId(userId, chatGroupId);
    return {
        chatGroupId,
        group
    }
}

export default function(){
    const [pageReady, setPageReady] = useState(false);
    const data = useLoaderData<typeof loader>();

        useEffect(() =>{
            setPageReady(false);
            setTimeout(() => setPageReady(true),500);// important. This will destroy ChatBox and repaint.
        },[data?.group?.id]);

    return pageReady && data?.group?.id? <ChatBox title={data?.group.name} chatGroupId={data?.group?.id} memberId={data.group?.ChatGroupMember[0]?.id || ''} disabled={data.group.isDisabled || false}/>: <Card withBorder title="Chat is disabled">
        Contact support to enable chat for this order.
</Card>;
}