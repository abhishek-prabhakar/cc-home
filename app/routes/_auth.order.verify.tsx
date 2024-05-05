import { ActionArgs, redirect } from "@remix-run/node";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import { USER_SESSION_KEY, getSession } from "~/session.server";
import { db } from "~/utils/database";

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
            paymentRef: true
        }
    });

    if (!orderData?.paymentRef) {
        return;
    }

    const success = validatePaymentVerification({
        order_id: orderData.paymentRef, payment_id: razorpayPaymentId
    }, razorpaySignature, process.env.RPAY_SECRET || '');

    if (success) {
        return redirect('/order/success?id=' + orderData.orderId);
    } else {
        return false;
    }
}

export function loader() {
    return null;
}

export default function () {
    return 'Please wait...'
}