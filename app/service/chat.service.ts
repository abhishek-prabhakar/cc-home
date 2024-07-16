import { db } from "~/utils/database";
import generateUuid from "~/utils/uuid.generator";

async function createChatGroup(orderId: string){
    return  await db.chatGroup.create({
        data:{
            id: generateUuid(),
            bookingId: orderId
        }
    });
}


async function addUserAsChatGroupMember(input: {
    userId: string,
    chatGroupId: string
}){
    return await db.chatGroupMember.create({
        data:{
            id: generateUuid(),
            chatGroupId: input.chatGroupId,
            userId:  input.userId,
        }
    });
}


async function addVendorAsChatGroupMember(input: {
    vendorId: string,
    chatGroupId: string
}){
    return await db.chatGroupMember.create({
        data:{
            id: generateUuid(),
            chatGroupId: input.chatGroupId,
            vendorId:  input.vendorId,
        }
    });
}

async function getChatgroupByOrderId(orderId: string, userId: string){
    return await db.chatGroup.findFirst({
        where:{
            booking:{
                orderId
            }
        },
        select:{
            id: true,
            isDisabled: true,
            ChatGroupMember:{
                select:{
                    id: true
                },
                take: 1,
                where:{
                    OR:[
                        {
                            userId
                        },
                        {
                            vendorId: userId
                        }
                    ]
                }
            }
        }
    });
}


async function getChatgroupByBookingId(bookingId: string, userId: string){
    return await db.chatGroup.findFirst({
        where:{
            bookingId,
        },
        select:{
            id: true,
            isDisabled: true,
            ChatGroupMember:{
                select:{
                    id: true
                },
                take: 1,
                where:{
                    OR:[
                        {
                            userId
                        },
                        {
                            vendorId: userId
                        }
                    ]
                }
            }
        }
    });
}

async function disableChatGroup(orderId: string){
     await db.chatGroupMember.updateMany({
        where:{
            chatGroup:{
                bookingId: orderId
            }
        },
        data:{
            isDisabled: true,
        }
    });
    await  await db.chatGroup.updateMany({
        where:{
            bookingId: orderId
        },
        data:{
            isDisabled: true,
        }
    });
}

const ChatService = {
    getChatgroupByBookingId,
    getChatgroupByOrderId,
    createChatGroup,
    addUserAsChatGroupMember,
    addVendorAsChatGroupMember,
    disableChatGroup
}

export default ChatService;