import { Container, Grid } from "@mantine/core";
import { LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import UserLogin from "~/components/UserLogin";

export function loader(args: LoaderArgs){
    const url = new URL(args.request.url);
    return url.searchParams.get('redirectUrl');
}

export default function(){
    const data = useLoaderData();
    return <Container>
            <Grid justify="center">
                <Grid.Col span={{base: 12, md: 4}}>
                <UserLogin redirectUrl={data}/>
                </Grid.Col>
            </Grid>
        </Container>
}