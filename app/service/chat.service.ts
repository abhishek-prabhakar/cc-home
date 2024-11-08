import { db } from "~/utils/database";
import generateUuid from "~/utils/uuid.generator";

async function createChatGroup(name: string, orderId: string){
    return  await db.chatGroup.create({
        data:{
            id: generateUuid(),
            name,
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
    const exists = await db.chatGroupMember.findFirst({
        where:{
            chatGroupId: input.chatGroupId,
            vendorId: input.vendorId
        }
    });
    if(exists?.id){
        return null;
    }
    
   const vendorPhone = await db.vendor.findFirstOrThrow({
        where:{
            id: input.vendorId
        },
        select:{
            mobileNumber: true
        }
    });

    const user = await db.user.findFirstOrThrow({
        where:{
            username: vendorPhone.mobileNumber
        },
        select:{
            id: true
        }
    });


    return await db.chatGroupMember.create({
        data:{
            id: generateUuid(),
            chatGroupId: input.chatGroupId,
            vendorId:  input.vendorId,
            userId: user.id
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
                    userId
                }
            }
        }
    });
}

async function disableChatGroup(bookingId: string){
     await db.chatGroupMember.updateMany({
        where:{
            chatGroup:{
                bookingId: bookingId
            }
        },
        data:{
            isDisabled: true,
        }
    });
    await  await db.chatGroup.updateMany({
        where:{
            bookingId: bookingId
        },
        data:{
            isDisabled: true,
        }
    });
}


async function disableChatForVendor(bookingId: string, vendorId: string){
    await db.chatGroupMember.updateMany({
       where:{
            vendorId,
            chatGroup:{
               bookingId: bookingId
            }
       },
       data:{
           isDisabled: true,
       }
   });
}


function getAllChatGroupsByUser(userId: string){
    return db.chatGroup.findMany({
        select:{
            id: true,
            name: true,
            created_at: true
        },
        where:{
            ChatGroupMember:{
                some:{ 
                    userId
                }
            }
        }
    })
}

function getChatGroupByUserId(userId: string, chatGroupId: string){
    return  db.chatGroup.findFirst({
        where:{
            id: chatGroupId
        },
        select:{
            id: true,
            isDisabled: true,
            name: true,
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
    getChatgroupByBookingId,
    getChatgroupByOrderId,
    createChatGroup,
    addUserAsChatGroupMember,
    addVendorAsChatGroupMember,
    disableChatGroup,
    disableChatForVendor,
    getAllChatGroupsByUser,
    getChatGroupByUserId
}

export default ChatService;