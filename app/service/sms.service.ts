const API_KEY = "0472a73f-da12-11ee-8cbb-0200cd936042";
const SENDER_ID = 'CELEBR';
const END_POINT = "https://2factor.in/API/R1/";

async function sendSMS(input: {
    to: number,
    message: string
}) {
    const urlencoded = new URLSearchParams();
    urlencoded.append("module", "TRANS_SMS");
    urlencoded.append("apikey", API_KEY);
    urlencoded.append("to", '' + input.to);
    urlencoded.append("from", SENDER_ID);
    urlencoded.append("msg", input.message);

    const requestOptions = {
        method: 'POST',
        body: urlencoded,
        // redirect: 'follow'
    };

    await fetch(END_POINT, requestOptions);
}

const SmsService = {
    sendSMS: sendSMS
}

export default SmsService;