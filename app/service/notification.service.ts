import axios, { AxiosResponse } from "axios";
import EmailService from "./email.service";
import WhatsappService from "./whatsapp.service";

const END_POINT = "https://graph.facebook.com/v19.0/335976452932928/messages";

class Notification {
    private  emailQueue:Promise<AxiosResponse<any, any> | void>[] = [];
    private  whatsappQueue:any[] = [];

    constructor(){
        this.emailQueue = [];
        this.whatsappQueue = [];
    }

    public email(type: Promise<void>){
        this.emailQueue.push(type);
    }

    public whatsapp(type: Object){
        this.whatsappQueue.push(type);
    }

    public admin(message: string){
        this.whatsappQueue.push(WhatsappService.notifyAdmin(message));
    }

    public async publish(){
        try{
            await Promise.allSettled(this.emailQueue);
            for(let i =0; i< this.whatsappQueue.length;i++){
                const params = await this.whatsappQueue[i];
                await axios(params);
            }
        } catch(e){
            console.log('Notification failed')
        }
    }

}

export default Notification;