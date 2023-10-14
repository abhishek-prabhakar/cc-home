import { LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Button, Col, Row, Space, Typography } from "antd";
import Masonry from "react-masonry-css";
import { PhotoProvider, PhotoView } from "react-photo-view";

type loaderData = { portfolio: string[] };
export function loader({ params }: LoaderArgs): loaderData {
    const id = params.user;
    const data = {
        portfolio: [
            'https://ld-wp73.template-help.com/wordpress/prod_15696/v7//wp-content/uploads/2022/06/portfolio1-min.png',
            'https://ld-wp73.template-help.com/wordpress/prod_15696/v7//wp-content/uploads/2022/06/portfolio2-min.png',
            'https://ld-wp73.template-help.com/wordpress/prod_15696/v7//wp-content/uploads/2022/06/portfolio3-min.png',
            'https://ld-wp73.template-help.com/wordpress/prod_15696/v7//wp-content/uploads/2022/06/portfolio4-min.png',
            'https://ld-wp73.template-help.com/wordpress/prod_15696/v7//wp-content/uploads/2022/06/portfolio5-min.png',
            'https://ld-wp73.template-help.com/wordpress/prod_15696/v7//wp-content/uploads/2022/06/portfolio6-min.png',
            'https://ld-wp73.template-help.com/wordpress/prod_15696/v7//wp-content/uploads/2022/06/portfolio7-min.png']
    };

    return data;
}

export default function Portfolio() {
    const data = useLoaderData<loaderData>();

    return <div className="container">
        <Space direction="vertical" size={'large'}>
            <Row justify={'space-between'} align={'middle'} gutter={[10, 20]}>
                <Col span={24}><Typography.Title level={2}>Our amazing work</Typography.Title></Col>
                <Col>We offer versatile templates that can be used by individuals and companies looking for a simple one page template.</Col>
            </Row>
            <div>
                <PhotoProvider>
                    <Masonry className="masonry-grid" columnClassName="masonry-grid_column" breakpointCols={{ 350: 2, 750: 3, 900: 3 }}>
                        {data.portfolio?.map((image, key) => <PhotoView key={'thumb' + key} src={image}>
                            <img className="cursor-pointer" src={image} />
                        </PhotoView>)}
                    </Masonry>
                </PhotoProvider>
            </div>
        </Space>
    </div>
}