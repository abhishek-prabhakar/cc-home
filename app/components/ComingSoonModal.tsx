import { Grid, Image, Text, Title } from "@mantine/core";

function ComingSoonModal() {
    return <Grid>
        <Grid.Col span={{ base: 12, md: 6 }}>
            <Image src="/assets/area-coming-soon.png" />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }}>
            <Title order={5}>Coming soon</Title>
            <Text>Sorry, we are currently not serviceable in this area</Text>
        </Grid.Col>
    </Grid>
}

export default ComingSoonModal;