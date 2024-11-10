import {  Container,  Grid,  Space, Title } from "@mantine/core";
import { LoaderArgs } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import BlogService from "~/service/blog.service";


export async function loader({params}:LoaderArgs){
    const postId = params.id;
    if(!postId){
        throw new Response('Page not found',{
			status: 404,
		});
    }
    return await BlogService.getPost(postId);
}

export default function(){
    const data = useLoaderData<typeof loader>();


    return  <Container size={'xl'} >
        <Link to={'/blog'}><Title order={5}>Blog</Title></Link>
        <Space h={"sm"}/>
        <Title order={1}>{data.title}</Title>
        <Space h={"md"}/>
        <Grid>
            <Grid.Col span={{base: 12, md: 7}}>
                <div dangerouslySetInnerHTML={{ __html: data.content }} />
            </Grid.Col>
        </Grid>
    </Container>
}