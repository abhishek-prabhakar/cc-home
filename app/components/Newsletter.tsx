import { Button, Input, Stack, Text } from "@mantine/core";

export function Newsletter() {
    return <Stack gap={'md'}>
        <div>
            <Text>Newsletter</Text>
            <br />
            <Text c="dimmed">Want to be always informed?</Text>
        </div>
        <Input placeholder="Your email" />
        <Button size="lg" >Subscribe</Button>
    </Stack>
}