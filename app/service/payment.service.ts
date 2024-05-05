import Razorpay from "razorpay"


const KEY_ID = process.env.RPAY_KEY || '';
const KEY_SECRET = process.env.RPAY_SECRET || '';

const rpInstance = new Razorpay({ key_id: KEY_ID, key_secret: KEY_SECRET });

async function createOrder(props: {
    amount: number,
    orderId: string
}) {
    const data = await rpInstance.orders.create({
        amount: props.amount,
        currency: "INR",
        receipt: props.orderId,
        notes: {
            key1: "value3",
            key2: "value2"
        }
    });
    return data;
}

async function getOrder(orderId: string) {
    const data = await rpInstance.orders.fetch(orderId);
    return data;
}

const PaymentService = {
    createOrder,
    getOrder
}

export default PaymentService;