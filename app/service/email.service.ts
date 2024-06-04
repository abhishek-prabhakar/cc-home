import EMAIL_DATA from "~/data/email.data";
import { db } from "~/utils/database";

const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
    host: 'smtpout.secureserver.net',
    port: 465,
    secure: true,
    auth: {
        user: 'team@celebriacollective.com',
        pass: 'notyourdaddy69'
    },
});
type SendEmailInput = {
    to: string,
    subject: string
    text: string,
    html: string
};

async function sendEmail(input: SendEmailInput) {
    await transporter.sendMail({
        from: '"Celebria Collective" <team@celebriacollective.com>',
        to: input.to,
        subject: input.subject,
        text: input.subject,
        html: input.html
    });
}


async function notifyVendorNewOrder(input: {
    email?: string,
    date: string,
    serviceName: string,
    orderId: string
}) {
    if(!input.email){
        return;
    }
    const subject = 'You have a new booking';
    const html = `Hello, You have a new booking <br/><br/> Service:<b>${input.serviceName}</b>
    <br/>
    Date: <b>${input.date}</b>
    <br/><br/>
    Order ID:${input.orderId}
    <br/><br/>
    Please login to your account for more information. 
    <a href="http://www.celebriacollective.com">celebriacollective.com</a>
    `;
    const text = 'Hello, You have a new booking on ' + input.date;

    await sendEmail({
        to: input.email,
        subject,
        html,
        text
    });

    await sendEmail({
        to: EMAIL_DATA.ADMIN_EMAIL,
        subject,
        html,
        text
    });
}

const EmailService = {
    notifyVendorNewOrder
};

export default EmailService;