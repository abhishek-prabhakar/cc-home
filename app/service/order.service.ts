import { BookingStatus } from "@prisma/client";
import { db } from "~/utils/database";
import WhatsappService from "./whatsapp.service";
import { DateFormatter } from "~/utils/date.transform";

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

const OrderService = {
    cancelOrder
}


export default OrderService;