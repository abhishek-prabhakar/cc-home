import { Affix, Avatar, Button, Card, Group, Space, Text, Title, Transition } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";

export function ChatWithVendorAffix(p:{
    avatar?: string
}){
    const [scroll, scrollTo] = useWindowScroll();

    return   <Affix position={{ bottom: 20, right: 20 }}>
          <Transition transition="slide-up" mounted={scroll.y > 0}>
            {(transitionStyles) => (
              <Card style={{...transitionStyles, overflow: 'unset'}} radius={'lg'} withBorder shadow='xl' pos="relative">
                    <Avatar pos="absolute" size={'lg'} src={p.avatar} right={20} top={'-20px'}/>
                    <Title order={5}>Got any queries?</Title>
                    <Space h="sm"/>
                    <Text>Get start with a service to chat with me.</Text>
                    <Space h="lg"/>
                    <Group justify="center">
                    <a href="#book-now-section">
                        <Button radius={'xl'}  variant="gradient"
      gradient={{ from: 'blue', to: 'violet', deg: 122 }}>View Services</Button>
                    </a></Group>
                </Card>
            )}
          </Transition>
        </Affix>
}