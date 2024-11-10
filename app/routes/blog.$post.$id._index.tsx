import {  Box, Center, Container,  Grid,  Group,  Space, Stack, Text, Title } from "@mantine/core";
import { LoaderArgs } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import ShareOptions from "~/components/ShareOptions";
import BlogService from "~/service/blog.service";
import classes from '../styles/blog.module.css';

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
        <Stack justify="center" align="center">
            <Group>
                <Link to={'/'}><Text>Home</Text></Link>
                <Text>/</Text>
                <Link to={'/blog'}><Text>Blog</Text></Link>
            </Group>
            <Title maw={{sm: '100%', md: '60%'}} order={1} ta={'center'}>{data.title}</Title>
            <Space h={"xs"}/>
            <ShareOptions fullWidth={false}/>
        </Stack>
        <Space h={"xl"}/>
        <Space h={"xl"}/>
        <Grid justify="center">
            <Grid.Col span={{base: 12, md: 7}}>
                <Box className={classes.blogContainer}>
                    <div dangerouslySetInnerHTML={{ __html: data.content }} />
                </Box>
            </Grid.Col>
        </Grid>
    </Container>
}