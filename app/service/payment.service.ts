import Razorpay from "razorpay"
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import COMMON_DATA from "~/data/common.data";


const KEY_ID = process.env.RPAY_KEY || '';
const KEY_SECRET = process.env.RPAY_SECRET || '';

const rpInstance = new Razorpay({ key_id: KEY_ID, key_secret: KEY_SECRET });

async function createOrder(props: {
    amount: number,
    orderId: string,
    partialPay: boolean
}) {
    const data = await rpInstance.orders.create({
        amount: props.amount,
        currency: "INR",
        receipt: props.orderId,
        notes: {
            key1: "value3",
            key2: "value2"
        },
        partial_payment: props.partialPay,
        first_payment_min_amount: props.amount*(COMMON_DATA.PAY_LATER_SLAB_PERCENTAGE/100)
    });
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


const PaymentService = {
    createOrder,
    getOrder,
    validatePayment
}

export default PaymentService;