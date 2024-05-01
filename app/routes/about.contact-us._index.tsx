import { Container, List, Space, Text, ThemeIcon, Title, rem } from "@mantine/core";
import { IconBrandWhatsapp, IconMail, IconMapPin, IconPhone } from "@tabler/icons-react";

export default function () {

    return <Container>
        <Title order={3}>Get in touch</Title>
        <Text>Call or email us with your questions.</Text>
        <Space h="md" />
        <List>
            <List.Item icon={
                <ThemeIcon color="blue" size={24} radius="xl">
                    <IconPhone style={{ width: rem(16), height: rem(16) }} />
                </ThemeIcon>
            }>+91-6363369715</List.Item>
            <List.Item icon={
                <ThemeIcon color="blue" size={24} radius="xl">
                    <IconMail style={{ width: rem(16), height: rem(16) }} />
                </ThemeIcon>
            }>info@celebriacollective.com</List.Item>
            <List.Item icon={
                <ThemeIcon color="blue" size={24} radius="xl">
                    <IconMapPin style={{ width: rem(16), height: rem(16) }} />
                </ThemeIcon>
            }>Celebria Collective Private Limited: 02,
                VASANTHA TOWERS, COCONUT garden layout, Krishnarajapuram, Bangalore North, Bangalore, Karnataka - 560036</List.Item>
            <List.Item icon={
                <ThemeIcon color="blue" size={24} radius="xl">
                    <IconBrandWhatsapp style={{ width: rem(16), height: rem(16) }} />
                </ThemeIcon>
            }>chat on whatsapp</List.Item>
        </List>
    </Container>

}