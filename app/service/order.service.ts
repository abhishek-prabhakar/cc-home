import { BookingStatus } from "@prisma/client";
import { db } from "~/utils/database";
import WhatsappService from "./whatsapp.service";
import { DateFormatter } from "~/utils/date.transform";
import ChatService from "./chat.service";
import Notification from "./notification.service";

async function cancelOrder(bookingId: string){
   const orderInfo =  await db.booking.update({
        where: {
            id: bookingId
        },
        data: {
            status: BookingStatus.CANCELLED
        },
        select:{
            orderId: true,
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
            bookingId: bookingId
        },
        data: {
            status: BookingStatus.CANCELLED
        }
    });

    await ChatService.disableChatGroup(bookingId);

    const notification = new Notification();
    orderInfo.bookingService.forEach(async service =>{
        notification.whatsapp(WhatsappService.notifyVendorOrderCancel({
                to: service.vendorServiceGroup.vendor.mobileNumber,
                orderId: orderInfo.orderId,
                service: service.vendorServiceGroup.group.name,
                date:service.date? DateFormatter.short(service.date): '-',
                time: DateFormatter.timeHourTo12Hrs(service.timeHour)
            })
        );
    });

    await notification.publish();
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
        },
        select:{
            bookingId: true,
            date: true,
            timeHour: true,
            vendorServiceGroup:{
                select:{
                    vendorId: true,
                    vendor:{
                        select:{
                            username: true
                        }
                    },
                    group:{
                        select:{
                            name: true
                        }
                    }
                }
            },
            Booking:{
                select:{
                    orderId: true,
                    user:{
                        select:{
                            username: true
                        }
                    }
                }
            }
        }
    });

    await ChatService.disableChatForVendor(data.bookingId, data.vendorServiceGroup.vendorId);
    await autoUpdateBookingStatus(data.bookingId);

    const notification = new Notification();

    notification.whatsapp(WhatsappService.notifyUserOnOrderReject({
        to: data.Booking.user.username,
        orderId: data.Booking.orderId,
        vendorName: data.vendorServiceGroup.vendor.username,
        service: data.vendorServiceGroup.group.name,
        date: data.date? DateFormatter.short(data.date): '-',
        time: DateFormatter.timeHourTo12Hrs(data.timeHour)
    }));

    await notification.publish();
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
            await ChatService.disableChatGroup(bookingId);
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

async function orderSummary(orderId:string) {
    return db.booking.findFirstOrThrow({
        where:{
            orderId
        },
        select:{
            coupon: true,
            discount: true,
            tax: true,
            subTotal: true,
            total: true,
            paymentMode: true,
            BookingPayments:{
                select:{
                    amount: true,
                    paymentDone: true
                }
            },
            Package:{
                select:{
                    name: true
                }
            },
            bookingService: {
                select: {
                    cost: true,
                    vendorServiceGroup:{
                        select:{
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
    })
}

const OrderService = {
    cancelOrder,
    vendorAcceptOrder,
    vendorRejectOrder,
    orderSummary
}


export default OrderService;