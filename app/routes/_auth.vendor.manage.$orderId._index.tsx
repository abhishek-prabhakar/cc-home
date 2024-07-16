import { Container } from "@mantine/core";
import { LoaderArgs } from "@remix-run/node";
import { USER_SESSION_KEY, getSession } from "~/session.server";
import { db } from "~/utils/database";



export async function loader(args: LoaderArgs){
    const session = await getSession(
        args.request.headers.get("Cookie")
    );
    const userId = session.get(USER_SESSION_KEY);
    const orderId = args.params.orderId;

    if (!userId) {
        throw new Error('Page not found');
    }

    const user = await db.user.findFirstOrThrow({
        select:{
            username: true
        },
        where:{
            id: userId
        }
    });

    const vendor =  await db.vendor.findFirstOrThrow({
        where:{
            mobileNumber: user.username
        },
        select:{
            id: true
        }
    });

    console.log(orderId)

    const orderData =  await db.bookingService.findFirstOrThrow({
        where:{
            Booking:{
                orderId
            },
            vendorServiceGroup:{
                vendorId: vendor.id
            }
        },
        select:{
            id: true
        }
    });

    return orderData;
}

export default function(){

    return <Container size={'xl'}>
        sdfs
    </Container>
}
