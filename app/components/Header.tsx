import { MenuOutlined, SearchOutlined, ShoppingCartOutlined, SmileOutlined } from "@ant-design/icons";
import { Button, Col, Input, Row } from "antd";
import { AppNavigation } from "./navigation";
import { Link } from "@remix-run/react";

const logoStyle: React.CSSProperties = { fontSize: '20px', textTransform: 'uppercase', color: 'black' }

export function Header() {
    return <>
        <div style={{ borderBottom: '1px solid var(--ui-color-black)', padding: '20px 0' }} >
            <div className="container">
                <Row >
                    <Col span={0} md={8} lg={4}>
                        <Input placeholder="Search" bordered={false} prefix={<SearchOutlined />} />
                    </Col>
                    <Col flex={'auto'} className="header-brand">
                        <Link to="/" style={logoStyle}>CELEBRIA COLLECTIONS</Link>
                    </Col>
                    <Col span={0} md={8} lg={4}>
                        <Row gutter={[0, 10]} justify={'end'}>
                            <Col>
                                <Button type="text" icon={<SmileOutlined />}>Login</Button>
                            </Col>
                            <Col>
                                <Button icon={<ShoppingCartOutlined />} href="/checkout" />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
        <Row>
            <Col span={0} md={24} style={{ borderBottom: '1px solid var(--ui-color-black)', padding: '0px 40px' }} >
                <Row justify={'center'}>
                    <Col>
                        <AppNavigation />
                    </Col>
                </Row>
            </Col>
        </Row>
    </>
}