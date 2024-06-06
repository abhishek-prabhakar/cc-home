import axios from "axios";

const API_KEY = process.env.WHATSAPP_KEY;
const END_POINT = " https://graph.facebook.com/v19.0/335976452932928/messages";

enum TEMPLATES {
    order_confirmation = "order_confirmation",
    vendor_new_order = "vendor_new_order",
    vendor_order_confirmation_regular  = "vendor_order_confirmation_regular "
}

type Param = {
    type: "text",
    text: string
}

type Interaction = {
    "type": "button",
    "sub_type" : "url",
    "index": "0",
    "parameters": [
        {
            "type": "text",
            "text": string
        }
    ]
}

const Request = {
    post: ({template,to,params,lang ='en_US', interaction}: {template: TEMPLATES, to: string, params: Param[], interaction?: Interaction[], lang?: "en_US" | "en_UK"}) => {

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
                }
            ].concat(interaction || []),
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

async function orderConfirmation(to: string, orderId: string, cost: number){
        const params:Param[] = [ 
            {
                "type": "text",
                "text": 'Customer'
            },
            {
            "type": "text",
            "text": orderId
            },
            {
                "type": "text",
                "text": '₹'+cost
            },
            {
                "type": "text",
                "text": "Celebria Collective"
            }]

    await Request.post({ template: TEMPLATES.order_confirmation, to, params });
}


async function notifyVendorNewOrder(input: { to?: string, orderId: string, service: string, date: string, cost: number }){
    if(!input.to){
        return;
    }
    // {
    //     "type": "text",
    //     "text": 'Customer'
    // },
  
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
                "text": '₹'+input.cost
            },
            {
                "type": "text",
                "text": "http://celebriacollective.com/partner/order/"+input.orderId+"/manage"
            }];

    const interaction:Interaction[]= [{
                "type": "button",
                "sub_type": "url",
                "index": "0",
                "parameters": [
                    {
                        "type": "text",
                        "text":input.orderId
                    }
                ]
            }];   

    await Request.post({template: TEMPLATES.vendor_order_confirmation_regular, to: input.to, params, lang:  'en_US' });
}

const WhatsappService = {
    orderConfirmation,
    notifyVendorNewOrder
}

export default WhatsappService;