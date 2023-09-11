import { Button, Input, Space, Typography } from "antd";

export function Newsletter() {
    return <Space direction="vertical" size={'middle'} style={{ width: '100%' }}>
        <div>
            <Typography.Text style={{ fontSize: '20px' }}>Newsletter</Typography.Text>
            <br />
            <Typography.Text type="secondary">Want to be always informed?</Typography.Text>
        </div>
        <Input placeholder="Your email" />
        <Button block size="large" type="primary">Subscribe</Button>
    </Space>
}