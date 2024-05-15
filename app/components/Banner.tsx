import { RightOutlined } from "@ant-design/icons";
import { Button, Grid, Title, Tooltip } from "@mantine/core";
import { Link } from "@remix-run/react";
import { BannerItem } from "~/types";

const bannerStyle: React.CSSProperties = {
    padding: '40px 40px',
    backgroundColor: '#e1e1e1',
    borderRadius: '10px',
    overflow: "hidden",
    backgroundSize: "cover"
};

function DefaultBanner({ data }: { data?: BannerItem }) {
    return data?.title ? <div style={{ ...bannerStyle, backgroundImage: 'url(' + data.img + ')' }} >
        <Grid gutter={{ base: 20,  md: 40}} align="middle" justify={'center'}>
            <Grid.Col span={{ base: 12, md: 4 }}>
                {/* <Tag color="cyan">20% OFF</Tag> */}
                <Title order={2}>{data.title}</Title>
            </Grid.Col>
            <Grid.Col span={{ base: 10, md: 4 }}>
                <Title order={5}>{data.description}</Title>
            </Grid.Col>
            <Grid.Col span={4}>
                <Tooltip label="Avail this offer">
                    <Link to={data.url}>
                        <Button size="lg" radius={'xl'} rightSection={<RightOutlined />} />
                    </Link>
                </Tooltip>
            </Grid.Col>
        </Grid>
    </div> : <></>;
}

function BannerVertical({ data }: { data?: BannerItem }) {
    return data?.title ? <div style={{ ...bannerStyle, backgroundImage: 'url(' + data.img + ')' }}>
        <Grid >
            <Grid.Col span={24}>
                {/* <Tag color="cyan">20% OFF</Tag> */}
                <Title order={2}>{data.title}</Title>
            </Grid.Col>
            <Grid.Col span={20}>
                <Title order={5}>{data.description}</Title>
            </Grid.Col>
            <Grid.Col span={24} style={{ paddingTop: '40px' }}>
                <Tooltip label="Avail this offer">
                    <Link to={data.url}>
                        <Button size="lg" radius={'xl'} rightSection={<RightOutlined />} />
                    </Link>
                </Tooltip>
            </Grid.Col>
        </Grid>
    </div> : <></>;
}

function BrandInfo() {
    return <div>
        <Title order={3}>We are here to help you build your brand</Title>

    </div>
}

const Banner = {
    Default: DefaultBanner,
    Vertical: BannerVertical
}


export default Banner;