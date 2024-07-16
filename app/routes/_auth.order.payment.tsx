import { Center, Loader, Stack, Text } from "@mantine/core";
import { BookingStatus } from "@prisma/client";
import {  LoaderArgs } from "@remix-run/node";
import { useActionData, useLoaderData, useNavigation, useSubmit } from "@remix-run/react";
import { useEffect } from "react";
import useRazorpay, { RazorpayOptions } from "react-razorpay";
import PaymentService from "~/service/payment.service";
import { USER_SESSION_KEY, getSession } from "~/session.server";
import { db } from "~/utils/database";

export async function loader({ request }: LoaderArgs) {
    const cookieHeader = request.headers.get("Cookie");
    const session = await getSession(cookieHeader);
    const searchParams = new URL(request.url).searchParams;
    const orderId = searchParams.get('id') || undefined;
    const userId = session.get(USER_SESSION_KEY);

    const orderData = await db.booking.findFirstOrThrow({
        where: {
            orderId,
            userId: userId
        },
        select: {
            status: true,
            orderId: true,
            paymentRef: true,
            total: true,
            user: {
                select: {
                    username: true,
                    email: true
                }
            }
        }
    });

    if (!orderData.paymentRef || orderData.status !== BookingStatus.PENDING) {
        throw new Error('error');
    }

    const data = await PaymentService.getOrder(orderData.paymentRef);
    if (data.amount_paid === orderData.total * 100) {
        throw new Error('error');
    }
    return { orderData, rpData: data, key: process.env.RPAY_KEY || '' };
}

export default () => {
    const loaderData = useLoaderData<typeof loader>();
    const [Razorpay, isLoaded] = useRazorpay();
    const submit = useSubmit();
    const actionData = useActionData();
    const navigation = useNavigation();

    useEffect(() => {
        if (!isLoaded || !loaderData) {
            return;
        }
        const options: RazorpayOptions = {
            key: loaderData.key,
            amount: '' + loaderData?.rpData.amount,
            currency: "INR",
            name: "Celebria Collective",
            description: loaderData.orderData.orderId,
            image: "https://example.com/your_logo",
            order_id: loaderData?.rpData.id,
            handler: (res) => {
                submitPaymentResponse(res);
            },
            prefill: {
                email: loaderData.orderData.user.email || '',
                contact: loaderData.orderData.user.username,
            },
            notes: {
                address: "Razorpay Corporate Office",
            },
            theme: {
                color: "#15bf39",
            },
        };

        const rzpay = new Razorpay(options);
        rzpay.open();
    }, [isLoaded]);




    function submitPaymentResponse(data: { razorpay_order_id: string, razorpay_payment_id: string, razorpay_signature: string }) {
        if (!loaderData?.orderData.orderId) {
            return;
        }
        submit({
            orderId: loaderData?.orderData.orderId,
            razorpayPaymentId: data.razorpay_payment_id,
            razorpaySignature: data.razorpay_signature
        }, {
            method: 'post',
            action: '/order/verify'
        });
    }


    return <Center h={200}>
        <Stack justify="center" align="center">
        <Loader  size={'lg'}/> 
         <Text>{navigation.state === 'idle'? '': 'Processing your order. Please wait...' }</Text>
         </Stack>
         </Center>
}


export function ErrorBoundary() {
    return <div>
        No pending payment found against this order
    </div>
}