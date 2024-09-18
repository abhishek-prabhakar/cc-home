import { Center, Loader, Stack, Text } from "@mantine/core";
import { BookingStatus } from "@prisma/client";
import {  LoaderArgs } from "@remix-run/node";
import { useActionData, useLoaderData, useNavigate, useNavigation, useSubmit } from "@remix-run/react";
import { Orders } from "razorpay/dist/types/orders";
import { useEffect } from "react";
import useRazorpay, { RazorpayOptions } from "react-razorpay";
import Routes from "~/routes.data";
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
            total: true,
            user: {
                select: {
                    username: true,
                    email: true
                }
            }
        }
    });

   

    if (!orderId || orderData.status !== BookingStatus.PENDING) {
        throw new Response('Invalid data',{
			status: 500,
		});
    }
    const pendingPayment = await PaymentService.getPendingPayment(orderId);

    if (!pendingPayment) {
        throw new Response('No pending order found',{
			status: 500,
		});
    }

    return { orderData, rpData: pendingPayment.data, bookingPaymentId: pendingPayment.bookingPaymentId, key: process.env.RPAY_KEY || '' };
}

export default () => {
    const loaderData = useLoaderData<typeof loader>();
    const [Razorpay, isLoaded] = useRazorpay();
    const submit = useSubmit();
    const navigation = useNavigation();
    const navigate = useNavigate();

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
            modal: {
                ondismiss: redirectToOrderInfo
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


    function redirectToOrderInfo(){
        navigate(Routes.get('UserManageOrder',{ id: loaderData.orderData.orderId}));
    }


    function submitPaymentResponse(data: { razorpay_order_id: string, razorpay_payment_id: string, razorpay_signature: string }) {
        if (!loaderData?.orderData.orderId) {
            return;
        }
        submit({
            orderId: loaderData?.orderData.orderId,
            razorpayPaymentId: data.razorpay_payment_id,
            razorpaySignature: data.razorpay_signature,
            bookingPaymentId: loaderData.bookingPaymentId
        }, {
            method: 'post',
            action: '/order/verify'
        });
    }


    return <Center h={200}>
        <Stack justify="center" align="center">
        <Loader  size={'lg'}/> 
         <Text>{navigation.state === 'idle'? 'Kindly reload this page if you are not redirected.': 'Processing your order. Please wait...' }</Text>
         </Stack>
         </Center>
}


export function ErrorBoundary() {
    return <div>
        No pending payment found against this order
    </div>
}