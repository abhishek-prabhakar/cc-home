import { ActionArgs, redirect } from "@remix-run/node";
import EmailService from "~/service/email.service";
import PaymentService from "~/service/payment.service";
import WhatsappService from "~/service/whatsapp.service";
import { USER_SESSION_KEY, getSession } from "~/session.server";
import { db } from "~/utils/database";
import { DateFormatter } from "~/utils/date.transform";

export async function action({
    request,
}: ActionArgs) {
    const cookieHeader = request.headers.get("Cookie");
    const session = await getSession(cookieHeader);

    const form = await request.formData();
    const orderId = form.get('orderId')?.toString();
    const razorpayPaymentId = form.get('razorpayPaymentId')?.toString();
    const razorpaySignature = form.get('razorpaySignature')?.toString();
    const userId = session.get(USER_SESSION_KEY);

    if (!razorpayPaymentId || !razorpaySignature || !orderId || !userId) {
        return;
    }

    const orderData = await db.booking.findFirstOrThrow({
        where: {
            orderId,
            userId
        },
        select: {
            orderId: true,
            paymentRef: true,
            bookingService:{
                select:{
                    date: true,
                    vendorServiceGroup:{
                        select:{
                            costByVendor: true,
                            group:{
                                select:{
                                    name: true,
                                }
                            },
                            vendor:{
                                select:{
                                    email: true,
                                    mobileNumber: true
                                }
                            }
                        }
                    }
                }
            }
        }
    });

    if (!orderData?.paymentRef) {
        return;
    }

    const success = await PaymentService.validatePayment(orderData.paymentRef, razorpayPaymentId, razorpaySignature);

    let redirectUrl;
    if (success) {
        redirectUrl = '/order/success?id=' + orderData.orderId;
    } else {
        redirectUrl = '/order/failed?id=' + orderData.orderId;
    }

    const notificationQueue:Promise<any>[] = [];

    orderData.bookingService.forEach(item =>{
        notificationQueue.push(EmailService.notifyVendorNewOrder({
            email: item.vendorServiceGroup.vendor?.email,
            date: DateFormatter.short(item.date),
            serviceName: item.vendorServiceGroup.group.name,
            orderId: orderData.orderId
        }));
        notificationQueue.push(WhatsappService.notifyVendorNewOrder({
            to: item.vendorServiceGroup.vendor?.mobileNumber, 
            orderId: orderData.orderId,
            service: item.vendorServiceGroup.group.name,
            date: DateFormatter.short(item.date),
            cost: item.vendorServiceGroup.costByVendor
        }));
    });

    try{
        await Promise.allSettled(notificationQueue);
    } catch(e){
        console.log('Notification failed')
    }

    return  redirect(redirectUrl);
}

export function loader() {
    return null;
}

export default function () {
    return 'Please wait...'
}