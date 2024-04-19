import { Badge, Button, Flex, Group, Image, Stack, Text, Title } from "@mantine/core";
import { Link } from "@remix-run/react";
import Routes from "~/routes.data";

function ServiceQuickCard({ url, title, img, services }: { url: string, title: string, img?: string | null, services: string[] }) {
    return <Stack justify={'space-between'} h={'100%'}>
        <Stack>
            <Link to={url}>
                <Image src={img} style={{ borderRadius: '12px', boxShadow: '0 20px 40px #d3d3d3' }} />
            </Link>

            <Link to={url}>
                <Title order={5}>{title}</Title>
            </Link>
            <Group gap={'xs'}>
                <Text size="sm" fw="500" c="dimmed">Includes:</Text>
                {services.map((description, key) => <Badge variant="light" color="gray" size="xs" key={'d-' + key}>
                    {description}
                </Badge>)}
            </Group>
        </Stack>
        <Link to={url}>
            <Button fullWidth variant="outline" size="xs" radius="md">Browse</Button>
        </Link>
    </Stack>
}

export default ServiceQuickCard;