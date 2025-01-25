import { Container, Grid, List, Space, Text, ThemeIcon, Title, rem } from "@mantine/core";
import { IconBrandWhatsapp, IconMail, IconMapPin, IconPhone } from "@tabler/icons-react";
import { SUPPORT_CENTER } from "~/data/common.data";
import PageMetaFunction from "~/utils/page.meta";

export const meta = PageMetaFunction({
	title: 'Contact Us',
});

export default function () {

    return <Container>
        <Title order={3}>About Us</Title>
        <Text>Celebria Collective is a technology platform offering a variety of creative photography, videography and makeup services. Customers use our platform to book services such as wedding photography, corporate shoots, bridal makeup, product shoots, and event coverage. These services are delivered at the location of their choice, tailored to their preferences, and with an unmatched level of professionalism.</Text>
        <Space h="md" />
        <Text>We promise our customers a premium, joyful, and seamless creative experience. To fulfill this promise, we work closely with our carefully curated network of talented photographers, videographers, and artists, empowering them with technology, training, high-quality tools, resources, financial support, and branding, enabling them to succeed and consistently deliver outstanding results.</Text>
        <Space h="xl" />
        <Title order={3}>Our Vision</Title>
        <Text>To deliver photography, videography, and makeup solutions like never experienced before.</Text>
    </Container>

}