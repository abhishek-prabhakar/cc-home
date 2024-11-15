import { Card, Container, Grid, Image, Space, Stack, Text, Title } from "@mantine/core";
import { Link, useLoaderData } from "@remix-run/react";
import { useEffect } from "react";
import BlogService from "~/service/blog.service";
import { DateFormatter } from "~/utils/date.transform";


export async function loader(){
    return await BlogService.getLatestPosts();
}

export default function(){
    const data = useLoaderData<typeof loader>();


    return  <Container size={'xl'} >
        <Title order={3}>Blog</Title>
        <Space h={"xl"}/>
        <Grid gutter={'xl'}>
            {data.map(item => <Grid.Col span={{base: 12, md: 4}}>
                <Card  title={item.title}>
                    <Card.Section>
                        <Link to={item.name+'/'+item.id}>
                            <Image
                                fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                                src={item.thumbnail.link}
                                height={200}
                                alt="thumb"
                            />
                        </Link>
                    </Card.Section>
                    <Space h={'xl'}/>
                    <Stack justify="center" align="center">
                    <Title ta={'center'} order={3} fw={'normal'}>{item.title}</Title>
                    <Text c="dimmed"  size="sm">{DateFormatter.short(item.date)}</Text>
                    <Link to={item.name+'/'+item.id}>Read More</Link>
                    </Stack>
                </Card>
            </Grid.Col>)}
        </Grid>
    </Container>
}