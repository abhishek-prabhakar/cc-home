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
            total: true,
            user:{
                select:{
                    username: true
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

    if (!orderData?.paymentRef) {
        return;
    }

    const success = await PaymentService.validatePayment(orderData.paymentRef, razorpayPaymentId, razorpaySignature);

    let redirectUrl;
    const notification = new Notification();

    if (success) {
        redirectUrl = '/order/success?id=' + orderData.orderId;
        orderData.bookingService.forEach(item =>{
            notification.email(EmailService.notifyVendorNewOrder({
                email: item.vendorServiceGroup.vendor?.email,
                date: DateFormatter.short(item.date),
                serviceName: item.vendorServiceGroup.group.name,
                orderId: orderData.orderId
            }));
            notification.whatsapp(WhatsappService.notifyVendorNewOrder({
                to: item.vendorServiceGroup.vendor?.mobileNumber, 
                orderId: orderData.orderId,
                service: item.vendorServiceGroup.group.name,
                date: DateFormatter.short(item.date),
                cost: item.vendorCost,
                time: DateFormatter.timeHourTo12Hrs(item.timeHour)
            }));
        });
        notification.whatsapp(
            WhatsappService.orderConfirmationUser({
                to: orderData.user.username, 
                orderId,
                cost: orderData.total,
                date: DateFormatter.short(orderData.bookingService[0].date),
                time: DateFormatter.timeHourTo12Hrs(orderData.bookingService[0].timeHour),
                serviceName: orderData.bookingService[0].vendorServiceGroup.group.name
            })
        );
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