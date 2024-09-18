import Razorpay from "razorpay"
import { Orders } from "razorpay/dist/types/orders";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import COMMON_DATA from "~/data/common.data";
import { db } from "~/utils/database";
import generateUuid from "~/utils/uuid.generator";


const KEY_ID = process.env.RPAY_KEY || '';
const KEY_SECRET = process.env.RPAY_SECRET || '';

const rpInstance = new Razorpay({ key_id: KEY_ID, key_secret: KEY_SECRET });

type PendingPayment = { bookingPaymentId: string, data: Orders.RazorpayOrder }

async function createOrder(props: {
    amount: number,
    orderId: string,
    bookingId: string,
    partialPay: boolean
}) {
    const entryId = generateUuid();
    const data = await rpInstance.orders.create({
        amount: props.amount,
        currency: "INR",
        receipt: props.orderId,
        notes: {
            bookingId: props.bookingId,
            bookingPaymentId: entryId
        },
        partial_payment: props.partialPay,
        first_payment_min_amount: props.amount*(COMMON_DATA.PAY_LATER_SLAB_PERCENTAGE/100)
    });
    await db.bookingPayments.create({
        data:{
            id: entryId,
            paymentRef: data.id,
            bookingId: props.bookingId
        }
    })
    return data;
}

async function getOrder(paymentRef: string) {
    const data = await rpInstance.orders.fetch(paymentRef);
    return data;
}

async function validatePayment(orderId: string, paymentId: string, signature: string) {
    return validatePaymentVerification({
        order_id: orderId, 
        payment_id: paymentId
    }, signature, process.env.RPAY_SECRET || '');
}

async function getPaymentByBookingPaymentId(bookingPaymentId:string) {
    const paymentRef = await db.bookingPayments.findFirstOrThrow({
        where:{
            id: bookingPaymentId
        },
        orderBy:{
            created_at: 'asc'
        }
    });
    return  await getOrder(paymentRef.paymentRef);
}

async function getPendingPayment(orderId:string): Promise<PendingPayment | null> {
    const paymentRefList = await db.bookingPayments.findMany({
        where:{
            Booking:{
                orderId
            }
        },
        orderBy:{
            created_at: 'asc'
        }
    });
    
    const rpData:PendingPayment[] = [];
    for(let i=0;i<paymentRefList.length;i++){
        const item =paymentRefList[i];
        const d= await getOrder(item.paymentRef);
        if(!d.amount_paid){ rpData.push({data: d, bookingPaymentId: item.id }); }
    }
    
    if(!rpData.length){ return null;}

    return rpData[0];
}

const PaymentService = {
    createOrder,
    getOrder,
    validatePayment,
    getPendingPayment,
    getPaymentByBookingPaymentId
}

export default PaymentService;