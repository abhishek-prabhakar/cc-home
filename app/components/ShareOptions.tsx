import { Button, CopyButton, Group } from "@mantine/core";
import { useLocation, useNavigation } from "@remix-run/react";
import { useEffect, useState } from "react";
import {
    EmailShareButton,
    FacebookShareButton,
    FacebookMessengerShareButton,
    InstapaperShareButton,
    LinkedinShareButton,
    TelegramShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    WhatsappIcon,
    EmailIcon,
    FacebookIcon,
    FacebookMessengerIcon,
    TelegramIcon,
    TwitterIcon,
  } from "react-share";

function ShareOptions(){
    const [url, setUrl] = useState('');
    const location = useLocation();
    useEffect(() =>{
       if(window){ setUrl(window?.location?.href); }
    },[location.pathname]);

    const size = '24px';
    return <Group gap={'sm'} justify="center">
        <CopyButton value={url}>
            {({ copied, copy }) => (
            <Button h={size} size="xs" variant="outline" color={copied ? 'teal' : 'violet'} onClick={copy}>
                {copied ? 'Copied url' : 'Copy url'}
            </Button>
        )}
        </CopyButton>
        <WhatsappShareButton style={{height: size}}  url={url}>
            <WhatsappIcon size={size}/>
        </WhatsappShareButton>
        {/* <FacebookMessengerShareButton  url={"http://cc.com"}>
            <FacebookMessengerIcon size={style}/>
        </FacebookMessengerShareButton> */}
        <FacebookShareButton  style={{height: size}}  url={url}>
            <FacebookIcon size={size}/>
        </FacebookShareButton>
        <EmailShareButton  style={{height: size}}  url={url}>
            <EmailIcon size={size}/>
        </EmailShareButton>
        <TelegramShareButton  style={{height: size}}  url={url}>
            <TelegramIcon size={size}/>
        </TelegramShareButton>
        <TwitterShareButton  style={{height: size}}  url={url}>
            <TwitterIcon size={size}/>
        </TwitterShareButton>
    </Group>
}

export default ShareOptions;