import { Box, Button, CopyButton, Group, Popover, Space, Text, Title, rem } from "@mantine/core";
import { useLocation } from "@remix-run/react";
import { IconShare, IconShare3 } from "@tabler/icons-react";
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
    return  <Popover width={204} position="bottom" withArrow shadow="md">
    <Popover.Target>
        <Button fullWidth variant="light"  color="violet" rightSection={<IconShare3 style={{ width: rem(20), height: rem(20) }}/>}>Share</Button>
    </Popover.Target>
    <Popover.Dropdown>
        <Box>
            <Text fw={'bold'}>Share on:</Text>
            <Space h={'sm'}/>
            <Group gap={'sm'}>
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
            <Space h={'md'}/>
            <CopyButton value={url}>
                {({ copied, copy }) => (
                    <Button size="sm" fullWidth variant="light" color={copied ? 'teal' : 'indigo'} onClick={copy}>
                        {copied ? 'Copied url' : 'Copy url'}
                    </Button>
                )}
            </CopyButton>
        </Box>
    </Popover.Dropdown>
  </Popover>;
}

export default ShareOptions;