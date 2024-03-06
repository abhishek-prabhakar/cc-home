async function sendSMS(input: {
    to: number,
    message: string
}) {
    const urlencoded = new URLSearchParams();
    urlencoded.append("module", "TRANS_SMS");
    urlencoded.append("apikey", "0472a73f-da12-11ee-8cbb-0200cd936042");
    urlencoded.append("to", '' + input.to);
    urlencoded.append("from", "CELEBR");
    urlencoded.append("msg", input.message);

    const requestOptions = {
        method: 'POST',
        body: urlencoded,
        // redirect: 'follow'
    };

    await fetch("https://2factor.in/API/R1/", requestOptions);
}

const SmsService = {
    sendSMS: sendSMS
}

export default SmsService;