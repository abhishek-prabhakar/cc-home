import { Grid, Space, Stack, Title } from "@mantine/core";
import { LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Masonry from "react-masonry-css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import VideoPreviewItem from "~/components/VideoPreviewItem";
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
                {data?.map((image, key) =>
                    image.fileType === 'youtube' ?
                        <div key={'thumb' + key} style={{ height: '240px', marginBottom: '30px' }}><VideoPreviewItem ytId={image.fileName} /></div> : <PhotoView key={'thumb' + key} src={PATH.RESOURCE_URL + image.fileName}>
                            <img className="cursor-pointer" src={PATH.RESOURCE_URL + image.fileName} />
                        </PhotoView>)}
            </Masonry>
        </PhotoProvider>
    </div>
}