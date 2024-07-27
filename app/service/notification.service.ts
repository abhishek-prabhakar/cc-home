import EmailService from "./email.service";
import WhatsappService from "./whatsapp.service";

class Notification {
    private  notificationQueue:Promise<void>[] = [];

    constructor(){
        this.notificationQueue = [];
    }

    public email(type: Promise<void>){
        this.notificationQueue.push(type);
    }

    public whatsapp(type: Promise<void>){
        this.notificationQueue.push(type);
    }

    public admin(message: string){
        this.notificationQueue.push(WhatsappService.notifyAdmin(message));
    }

    public async publish(){
        try{
            await Promise.allSettled(this.notificationQueue);
        } catch(e){
            console.log('Notification failed')
        }
    }

}

export default Notification;