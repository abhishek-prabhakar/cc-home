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

const ChatService = {
    createChatGroup,
    addUserAsChatGroupMember,
    addVendorAsChatGroupMember
}

export default ChatService;