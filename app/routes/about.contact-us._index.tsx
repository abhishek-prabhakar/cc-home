import { Container, Grid, List, Space, Text, ThemeIcon, Title, rem } from "@mantine/core";
import { IconBrandWhatsapp, IconMail, IconMapPin, IconMessage, IconPhone } from "@tabler/icons-react";
import { SUPPORT_CENTER } from "~/data/common.data";
import PageMetaFunction from "~/utils/page.meta";

export const meta = PageMetaFunction({
	title: 'Contact Us',
});

export default function () {

    return <Container>
        <Title order={3}>Get in touch</Title>
        <Text>Call or email us with your questions.</Text>
        <Space h="md" />
        <Grid>
            <Grid.Col span={{ base: 12, md: 4 }}>
                <List spacing="lg">
                    <List.Item icon={
                        <ThemeIcon color="gray" size={24} variant="white">
                            <IconPhone style={{ width: rem(16), height: rem(16) }} />
                        </ThemeIcon>
                    }>
                        {SUPPORT_CENTER.PHONE} <br/>MON-SUN: 10AM to 6PM
                        </List.Item>
                    <List.Item icon={
                        <ThemeIcon color="gray" size={24} variant="white">
                            <IconMail style={{ width: rem(16), height: rem(16) }} />
                        </ThemeIcon>
                    }>info@celebriacollective.com</List.Item>
                    <List.Item icon={
                        <ThemeIcon color="gray" size={24} variant="white">
                            <IconMapPin style={{ width: rem(16), height: rem(16) }} />
                        </ThemeIcon>
                    }>Celebria Collective Private Limited: 02,
                        VASANTHA TOWERS, COCONUT garden layout, Krishnarajapuram, Bangalore North, Bangalore, Karnataka - 560036</List.Item>
                    <List.Item icon={
                        <ThemeIcon color="gray" size={24} variant="white">
                            <IconBrandWhatsapp style={{ width: rem(16), height: rem(16) }} />
                        </ThemeIcon>
                    }><a href={SUPPORT_CENTER.WHATSAPP_CHAT}  target="_BLANK">chat on whatsapp</a></List.Item>
                     <List.Item icon={
                        <ThemeIcon color="gray" size={24} variant="white">
                            <IconMessage style={{ width: rem(16), height: rem(16) }} />
                        </ThemeIcon>
                    }><a href={SUPPORT_CENTER.ENQUIRY_FORM} target="_BLANK">Contact Us</a></List.Item>
                </List>
            </Grid.Col>
        </Grid>
    </Container>

}