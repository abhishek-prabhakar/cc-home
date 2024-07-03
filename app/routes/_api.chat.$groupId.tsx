import { BookingStatus, ChatThread_type } from "@prisma/client";
import { ActionArgs, LoaderArgs } from "@remix-run/node";
import { USER_SESSION_KEY, getSession } from "~/session.server";
import { CHAT_DATA_TYPE, ChatOutput, ChatOutputThread } from "~/types";
import { db } from "~/utils/database";
import generateUuid from "~/utils/uuid.generator";


export async function action(args: ActionArgs){
    const formData = await args.request.formData();
    const chatGroupId = args.params.groupId;

    const cookieHeader = args.request.headers.get("Cookie");
    const session = await getSession(cookieHeader);
    const currentUserId = session.get(USER_SESSION_KEY);
    
    const message = formData.get('message')?.toString();
    const msgType = formData.get('type')?.toString() as ChatThread_type;

    const member =  await db.chatGroupMember.findFirstOrThrow({
        where:{
            chatGroupId,
            OR:[{
                userId: currentUserId
            },{
                vendorId: currentUserId
            }]
        },
        select:{
            id: true,
            chatGroup:{
                select:{
                    booking:{
                        select:{
                            status: true
                        }
                    }
                }
            }
        }
    });
    
    const invalidOrder = [BookingStatus.COMPLETED, BookingStatus.REJECTED, BookingStatus.CANCELLED].includes(member.chatGroup.booking.status as any);
    if(!message || !chatGroupId || invalidOrder ){
        return false;
    }

    await db.chatThread.create({
        data:{
            id: generateUuid(),
            chatGroupId,
            memberId: member.id,
            message,
            type: msgType
        }
    });

    return true;
}



export async function loader(args: LoaderArgs):Promise<ChatOutput>{
    const chatGroupId = args.params.groupId;
    const url = new URL(args.request.url);
    const requestType =  url.searchParams.get('type')?.toString() as unknown as CHAT_DATA_TYPE;
    const lastTimestamp = url.searchParams.get('timestamp')?.toString() || 0;
    const memberId =  url.searchParams.get('memberId')?.toString() || '';
    let threads:ChatOutputThread[], members: { user: { name: string | null; } | null; vendor: { username: string; profileImageName: string | null; } | null; }[] = [];

    switch(requestType){
        case CHAT_DATA_TYPE.RECENT:
            threads = await db.chatThread.findMany({
                where:{
                    chatGroupId,
                    created_at: {
                        gt: new Date(lastTimestamp)
                    }
                },
                select:{
                    message: true,
                    type: true,
                    created_at: true,
                    memberId: true,
                },
                orderBy: {
                    created_at: 'desc'
                }
            });
        break;
        default:
             members = await db.chatGroupMember.findMany({
                where:{
                    chatGroupId
                },
                select:{
                    user:{
                        select:{
                            name: true
                        }
                    },
                    vendor:{
                        select:{
                            username: true,
                            profileImageName: true
                        }
                    }
                }
            });
        
            threads = await db.chatThread.findMany({
                where:{
                    chatGroupId
                },
                select:{
                    message: true,
                    type: true,
                    created_at: true,
                    memberId: true,
                },
                orderBy: {
                    created_at: 'asc'
                }
            });
        break;
    }

    await db.chatGroupMember.update({
        where:{
            id:memberId,
            chatGroupId
        },
        data:{
            lastSeen: new Date()
        }
    });

   return {
    threads,
    members
   }
}