import { BookingStatus } from "@prisma/client";
import { db } from "~/utils/database";

async function cancelOrder(id: string){
    await db.booking.update({
        where: {
            id
        },
        data: {
            status: BookingStatus.CANCELLED
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
}

const OrderService = {
    cancelOrder
}


export default OrderService;