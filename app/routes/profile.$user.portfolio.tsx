import { Grid, Space, Stack, Title } from "@mantine/core";
import { LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Masonry from "react-masonry-css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { PATH } from "~/path.data";
import { VendorQuery } from "~/service/vendor.service";

export async function loader({ params }: LoaderArgs) {
    const id = params.user;
    const portfolio = await VendorQuery.portfolioByUsername(id);

    return portfolio;
}

export default function Portfolio() {
    const data = useLoaderData<typeof loader>();

    return <div className="container">
        <Title order={4}>Best works</Title>
        <Space h="md" />
        <PhotoProvider>
            <Masonry className="masonry-grid" columnClassName="masonry-grid_column" breakpointCols={3}>
                {data?.map((image, key) => <PhotoView key={'thumb' + key} src={PATH.RESOURCE_URL + image.fileName}>
                    <img className="cursor-pointer" src={PATH.RESOURCE_URL + image.fileName} />
                </PhotoView>)}
            </Masonry>
        </PhotoProvider>
    </div>
}