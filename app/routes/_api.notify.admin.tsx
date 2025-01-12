import {  json, redirect } from "@remix-run/node"
import WhatsappService from "~/service/whatsapp.service";;

export async function action({
    request,
}: any) {
    const body = await request.formData();
    const profileId = body.get('profileId');

    try {
        const message = `Someone has requested a call from profile ${profileId}`;
        await WhatsappService.notifyAdmin(message)
    } catch (r) {

    }
    
    return json({ success: true });
}