import { BookingStatus } from "@prisma/client";
import { db } from "~/utils/database";
import WhatsappService from "./whatsapp.service";
import { DateFormatter } from "~/utils/date.transform";
import ChatService from "./chat.service";

async function cancelOrder(id: string){
   const orderInfo =  await db.booking.update({
        where: {
            id
        },
        data: {
            status: BookingStatus.CANCELLED
        },
        select:{
            bookingService:{
                select:{
                    date: true,
                    timeHour: true,
                    vendorServiceGroup:{
                        select:{
                            vendor:{
                                select:{
                                    mobileNumber: true
                                }
                            },
                            group:{
                                select:{
                                    name: true
                                }
                            }
                        }
                    }
                }
            }
        }
    });

    await db.bookingService.updateMany({
        where: {
            bookingId: id
        },
        data: {
            status: BookingStatus.CANCELLED
        }
    });

    await ChatService.disableChatGroup(id);

    try{
        orderInfo.bookingService.forEach(async service =>{
            await WhatsappService.notifyVendorOrderCancel({
                to: service.vendorServiceGroup.vendor.mobileNumber,
                orderId: id,
                service: service.vendorServiceGroup.group.name,
                date: DateFormatter.short(service.date),
                time: DateFormatter.timeHourTo12Hrs(service.timeHour)
            });
        })
        
    } catch (e){}
}

async function vendorAcceptOrder(params: {
    id: string
}) {
   const data = await db.bookingService.update({
        data:{
            status: BookingStatus.ACCEPTED
        },
        where:{
            id: params.id
        }
    });

    await autoUpdateBookingStatus(data.bookingId);

}


async function vendorRejectOrder(params: {
    id: string
}) {
   const data = await db.bookingService.update({
        data:{
            status: BookingStatus.REJECTED
        },
        where:{
            id: params.id
        }
    });

    await autoUpdateBookingStatus(data.bookingId);

}

async function  autoUpdateBookingStatus(bookingId: string) {
    const allServices = await db.bookingService.findMany({
        where:{
            bookingId: bookingId
        },
        select:{
            status: true
        }
    });

    const statusList = allServices.map(x => x.status);

    const isOrderCancelled = statusList.filter((x:any) => [BookingStatus.CANCELLED, BookingStatus.REJECTED].includes(x)).length === statusList.length;
    const isOrderAccepted = statusList.filter((x:any) => [BookingStatus.ACCEPTED, BookingStatus.CANCELLED, BookingStatus.REJECTED].includes(x)).length === statusList.length;

    switch(true){
        case isOrderCancelled:
            await updateBookingStatue(bookingId, BookingStatus.REJECTED);
        break;
        case isOrderAccepted:
            await updateBookingStatue(bookingId, BookingStatus.ACCEPTED);
        break;
    }

}

async function updateBookingStatue(bookingId:string, status: BookingStatus) {
        await db.booking.update({
            data:{
                status
            },
            where:{
                id: bookingId
            }
        })
}

const OrderService = {
    cancelOrder,
    vendorAcceptOrder,
    vendorRejectOrder
}


export default OrderService;