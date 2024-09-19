import { ActionArgs, redirect } from "@remix-run/node";
import EmailService from "~/service/email.service";
import Notification from "~/service/notification.service";
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
    const bookingPaymentId = form.get('bookingPaymentId')?.toString();
    const razorpayPaymentId = form.get('razorpayPaymentId')?.toString();
    const razorpaySignature = form.get('razorpaySignature')?.toString();
    const userId = session.get(USER_SESSION_KEY);

    if (!razorpayPaymentId || !bookingPaymentId || !razorpaySignature || !orderId || !userId) {
        return null;
    }

    const orderData = await db.booking.findFirstOrThrow({
        where: {
            orderId,
            userId
        },
        select: {
            orderId: true,
            total: true,
            user:{
                select:{
                    username: true
                }
            },
            packageId: true,
            Package:{
                select:{
                    name: true
                }
            },
            bookingService:{
                select:{
                    date: true,
                    timeHour: true,
                    vendorCost: true,
                    vendorServiceGroup:{
                        select:{
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
    const pendingPayment = await PaymentService.getPaymentByBookingPaymentId(bookingPaymentId);
    const checkFirstPaymentDone =  await PaymentService.checkFirstPaymentDone(orderId);

    if (!pendingPayment) {
        return null;
    }

    const success = await PaymentService.validatePayment(pendingPayment.id, razorpayPaymentId, razorpaySignature);
    
    let redirectUrl;
    const notification = new Notification();

    if (success) {
        await PaymentService.markPaymentDone({ bookingPaymentId });

        redirectUrl = '/order/success?id=' + orderData.orderId;
        if(!checkFirstPaymentDone){
            if(orderData.packageId){
                notification.email(EmailService.notifyVendorNewOrder({
                    email: orderData.bookingService[0].vendorServiceGroup.vendor?.email,
                    date:  'To be notified',
                    serviceName: orderData.Package?.name || '',
                    orderId: orderData.orderId
                }));
                notification.whatsapp(WhatsappService.notifyVendorNewOrder({
                    to: orderData.bookingService[0].vendorServiceGroup.vendor?.mobileNumber, 
                    orderId: orderData.orderId,
                    service: orderData.Package?.name || '',
                    date: 'To be notified',
                    cost: 0,
                    time:  'To be notified',
                }));
            } else{
                orderData.bookingService.forEach(item =>{
                    notification.email(EmailService.notifyVendorNewOrder({
                        email: item.vendorServiceGroup.vendor?.email,
                        date: item.date? DateFormatter.short(item.date): 'To be notified',
                        serviceName: item.vendorServiceGroup.group.name,
                        orderId: orderData.orderId
                    }));
                    notification.whatsapp(WhatsappService.notifyVendorNewOrder({
                        to: item.vendorServiceGroup.vendor?.mobileNumber, 
                        orderId: orderData.orderId,
                        service: item.vendorServiceGroup.group.name,
                        date: item.date? DateFormatter.short(item.date): 'To be notified',
                        cost: item.vendorCost,
                        time: DateFormatter.timeHourTo12Hrs(item.timeHour)
                    }));
                });
            }
            notification.whatsapp(
                WhatsappService.orderConfirmationUser({
                    to: orderData.user.username, 
                    orderId,
                    cost: orderData.total,
                    date: orderData.bookingService[0].date? DateFormatter.short(orderData.bookingService[0].date): 'To be notified',
                    time: DateFormatter.timeHourTo12Hrs(orderData.bookingService[0].timeHour),
                    serviceName: orderData.bookingService[0].vendorServiceGroup.group.name
                })
            );
        }
        notification.admin('Payment recieved for ' + orderId);
    } else {
        redirectUrl = '/order/failed?id=' + orderData.orderId;
    }

    await notification.publish();

    return  redirect(redirectUrl);
}

export function loader() {
    return null;
}

export default function () {
    return 'Please wait...'
}