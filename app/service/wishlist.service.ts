import axios from "axios";
import { db } from "~/utils/database";
import generateUuid from "~/utils/uuid.generator";

async function addToWishlist(data: {
    vendorUsername: string,
    userId: string
}){
    const vendor = await db.vendor.findFirstOrThrow({
        where:{
            username: data.vendorUsername
        }
    });
    await db.wishlist.create({
        data:{
            id: generateUuid(),
            vendorId: vendor.id,
            userId: data.userId
        }
    })
}


async function removeFromWishlist(data: {
    vendorUsername: string,
    userId: string
}){
    const vendor = await db.vendor.findFirstOrThrow({
        where:{
            username: data.vendorUsername
        }
    });
    await db.wishlist.deleteMany({
        where:{
            vendorId: vendor.id,
            userId: data.userId
        }
    })
}

async function getAllItems(data: {
    userId: string
}){
    return await db.wishlist.findMany({
        select:{
            id: true,
            vendorId: true,
            Vendor:{
                select:{
                    username: true,
                    profileImageName: true,
                    vendorType:{
                        select:{
                            name: true
                        }
                    }
                }
            }
        },
        where:{
            userId: data.userId
        },
        orderBy:{
            created_at: 'desc'
        }
    })
}


async function checkItemExists(data: {
    vendorUsername: string,
    userId?: string
}){
    if(!data.userId){
        return -1;
    }

    return await db.wishlist.count({
        where:{
            userId: data.userId,
            Vendor:{
                username: data.vendorUsername
            }
        }
    })
}

const WishlistService = {
    add: addToWishlist,
    remove: removeFromWishlist,
    getAllItems,
    checkItemExists
}

export default WishlistService;