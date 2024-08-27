import { Affix, Avatar, Button, Card, CloseButton, Group, Space, Text, Title, Transition } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import { IconPhoneCall } from "@tabler/icons-react";
import { useState } from "react";
import adminData from "~/data/admin.data";

export function SupportCenterAffix(){
    const [scroll] = useWindowScroll();
    const [showCard, setShowCard] = useState(true);

    return   <Affix position={{ bottom: 30, right: 30 }}>
          <Transition transition="slide-up" mounted={showCard && scroll.y > 0}>
            {(transitionStyles) => (
              <Card style={{...transitionStyles, overflow: 'unset'}} bg={'#fffbed'} radius={'lg'} withBorder shadow='xl' pos="relative">
                    <CloseButton  size="sm" onClick={()=>setShowCard(false)} pos="absolute" right={'12px'} top={'12px'} bg="#e1e1e1"/>
                    {/* <Avatar bg={'white'} pos="absolute" size={'lg'} src={p.avatar} right={'-8px'} bottom={'-8px'}/> */}
                    <Title order={5}>Need any assistance?</Title>
                    {/* <Space h="5"/>
                    <Text>Get start with a service to chat with me.</Text> */}
                    <Space h="lg"/>
                    <Group justify="center">
                    <a href={'tel:'+adminData.PHONE_DATA.PHONE_PREFIX+adminData.PHONE_DATA.ADMIN_PHONE}>
                        <Button radius={'xl'} leftSection={<IconPhoneCall/>}  variant="gradient"
      gradient={{ from: 'blue', to: 'violet', deg: 122 }}>Call us at {adminData.PHONE_DATA.PHONE_PREFIX} {adminData.PHONE_DATA.ADMIN_PHONE}</Button>
                    </a></Group>
                </Card>
            )}
          </Transition>
        </Affix>
}