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

async function getChatgroup(orderId: string, userId: string){
    return await db.chatGroup.findFirst({
        where:{
            bookingId:orderId,
        },
        select:{
            id: true,
            ChatGroupMember:{
                select:{
                    id: true
                },
                take: 1,
                where:{
                    userId
                }
            }
        }
    });
}

const ChatService = {
    getChatgroup,
    createChatGroup,
    addUserAsChatGroupMember,
    addVendorAsChatGroupMember
}

export default ChatService;