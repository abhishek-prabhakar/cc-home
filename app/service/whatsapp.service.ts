import axios from "axios";
import adminData from "~/data/admin.data";
import COMMON_DATA from "~/data/common.data";
import Routes from "~/routes.data";

const API_KEY = process.env.WHATSAPP_KEY;
const END_POINT = " https://graph.facebook.com/v19.0/335976452932928/messages";

enum TEMPLATES {
    booking_confirmation_user = "booking_confirmation_user",
    booking_payment_reminder_user = "booking_payment_reminder_user",
    vendor_order_confirmation_regular  = "vendor_order_confirmation_regular ",
    user_cancellation_vendor = "user_cancellation_vendor",
    booking_rejection_user = "booking_rejection_user",
    vendor_cancellation_user = "vendor_cancellation_user",
    admin_notify = "admin_notify",
    new_chat_msg= "new_chat_msg"
}

type Param = {
    type: "text",
    text: string
}

type Interaction = {
    "type": "button",
    "sub_type" : "url" | "quick_reply",
    "index": "0",
    "parameters": [
        {
            "type": "payload",
            "payload": string
        }
    ]
}

const Request = {
    post: ({template,to,params,lang ='en_US', interaction = []}: {template: TEMPLATES, to: string, params: Param[], interaction?: Interaction[], lang?: "en_US" | "en_UK" | 'en'}) => {

    const MESSAGE_BODY = {
        "messaging_product": "whatsapp",
        "recipient_type": "individual",
        "to": '+91'+ to,
        "type": "template", 
        "template":{
            "name": template,
            "language": { "code": lang },
            "components": [
                {
                    "type": "body",
                    "parameters": params
                },
                ...interaction
            ],
        },
        };

        return axios({
            method: 'post',
            url: END_POINT, 
            data: JSON.stringify(MESSAGE_BODY),
            headers: {
                "Authorization": "Bearer "+API_KEY,
                 "Content-Type": "application/json"
                 }
        });
    }
}


async function orderConfirmationUser(input: {
    to: string, 
    orderId: string, 
    cost: number,
    date: string,
    time: string,
    serviceName: string
}){
    const params:Param[] = [ 
        {
            "type": "text",
            "text": 'Customer'
        },
        {
            "type": "text",
            "text": input.serviceName
        },
        {
            "type": "text",
            "text": input.orderId
            },
        {
            "type": "text",
            "text": input.date
        },
        {
            "type": "text",
            "text": input.time
        },
        {
            "type": "text",
            "text": ''+input.cost
        }];

        const interaction:Interaction[]= [{
            "type": "button",
            "sub_type": "url",
            "index": "0",
            "parameters": [
                {
                    "type": "payload",
                    "payload": Routes.get('UserManageOrder',{ id: input.orderId })
                }
            ]
        }];   

await Request.post({ template: TEMPLATES.booking_confirmation_user, to: input.to, params, interaction, lang:'en' });
}


async function notifyVendorNewOrder(input: { to?: string, orderId: string, service: string, date: string, time: string, cost: number }){
        if(!input.to){
            return;
        }
  
        const params:Param[] = [ 
            {
                "type": "text",
                "text": input.orderId
            },
            {
                "type": "text",
                "text": input.service
            },
            {
                "type": "text",
                "text": input.date + ' at '+ input.time
            },
            {
                "type": "text",
                "text": '₹'+input.cost
            }];

            const interaction:Interaction[]= [{
                "type": "button",
                "sub_type": "url",
                "index": "0",
                "parameters": [
                    {
                        "type": "payload",
                        "payload": Routes.get('VendorManageOrder',{ id: input.orderId })
                    }
                ]
            }];    

    await Request.post({template: TEMPLATES.vendor_order_confirmation_regular, to: input.to, params,interaction, lang:  'en_US' });
}

async function notifyVendorOrderCancel(input: { to: string, orderId: string, service: string, date: string, time: string }){
    const params:Param[] = [ 
        {
            "type": "text",
            "text": input.orderId
        },
        {
            "type": "text",
            "text": input.service
        },
        {
            "type": "text",
            "text": input.date
        },
        {
            "type": "text",
            "text": input.time
        }];

    await Request.post({template: TEMPLATES.user_cancellation_vendor, to: input.to, params, lang:  'en_US' });
}

async function notifyUserOnOrderReject(input:{
    to: string,
    orderId: string,
    vendorName: string,
    service: string,
    date: string,
    time: string
}){
    
    if(!input.to){
        return;
    }

    const params:Param[] = [ 
        {
            "type": "text",
            "text": " "
        },
        {
            "type": "text",
            "text": input.vendorName
        },
        {
            "type": "text",
            "text": input.service
        },
        {
            "type": "text",
            "text": input.date
        },
        {
            "type": "text",
            "text": input.time
        }];

        const interaction:Interaction[]= [{
            "type": "button",
            "sub_type": "url",
            "index": "0",
            "parameters": [
                {
                    "type": "payload",
                    "payload": Routes.get('UserManageOrder',{ id: input.orderId })
                }
            ]
        }];    

 await Request.post({template: TEMPLATES.booking_rejection_user, to: input.to, params,interaction, lang:  'en' });
}


async function remindUserOrderPayment(input:{
    to: string,
    orderId: string,
    vendorName: string,
    service: string,
    date: string,
    time: string
}){
    
    if(!input.to){
        return;
    }

    const params:Param[] = [ 
        {
            "type": "text",
            "text": input.vendorName
        },
        {
            "type": "text",
            "text": input.service
        },
        {
            "type": "text",
            "text": input.date
        },
        {
            "type": "text",
            "text": input.time
        },
    ];

        const interaction:Interaction[]= [{
            "type": "button",
            "sub_type": "url",
            "index": "0",
            "parameters": [
                {
                    "type": "payload",
                    "payload": Routes.get('PaymentGateway',{ id: input.orderId })
                }
            ]
        }];    

 await Request.post({template: TEMPLATES.booking_payment_reminder_user, to: input.to, params,interaction, lang:  'en' });
}

async function  notifyOnNewChat(to: string, fromName: string, message:string, url: string) {
    const params:Param[] = [ 
        {
            "type": "text",
            "text": fromName
        },
        {
            "type": "text",
            "text": message
        }];

        const interaction:Interaction[]= [{
            "type": "button",
            "sub_type": "url",
            "index": "0",
            "parameters": [
                {
                    "type": "payload",
                    "payload": url
                }
            ]
        }];   

 await Request.post({template: TEMPLATES.new_chat_msg, to: to, params,interaction, lang:  'en_US' });
}

async function  notifyAdmin(message:string) {
    
    const to =  adminData.PHONE_DATA.ADMIN_PHONE;
    
    const params:Param[] = [ 
        {
            "type": "text",
            "text": message
        }];

 await Request.post({template: TEMPLATES.admin_notify, to: to, params, lang:  'en_US' });
}

const WhatsappService = {
    orderConfirmationUser,
    notifyVendorNewOrder,
    notifyVendorOrderCancel,
    notifyUserOnOrderReject,
    notifyAdmin,
    notifyOnNewChat,
    remindUserOrderPayment
}



export default WhatsappService;