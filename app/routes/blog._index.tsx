import { Card, Container, Grid, Space, Title } from "@mantine/core";
import { Link, useLoaderData } from "@remix-run/react";
import { useEffect } from "react";
import BlogService from "~/service/blog.service";


export async function loader(){
    return await BlogService.getLatestPosts();
}

export default function(){
    const data = useLoaderData<typeof loader>();


    return  <Container size={'xl'} >
        <Title order={3}>Blog</Title>
        <Space h={"md"}/>
        <Grid>
            {data.map(item => <Grid.Col span={{base: 12, md: 4}}>
                <Card withBorder title={item.title}>
                    <Title order={5}>{item.title}</Title>
                    <Link to={item.name+'/'+item.id}>Read More</Link>
                </Card>
            </Grid.Col>)}
        </Grid>
    </Container>
}