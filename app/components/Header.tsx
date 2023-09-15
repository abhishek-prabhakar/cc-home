import { MenuOutlined, SearchOutlined, ShoppingCartOutlined, SmileOutlined } from "@ant-design/icons";
import { Badge, Button, Col, Input, Row } from "antd";
import { AppNavigation } from "./navigation";
import { Link } from "@remix-run/react";

const logoStyle: React.CSSProperties = { fontSize: '18px', textTransform: 'uppercase', color: 'black' }

export function Header() {
    return <>
        <div style={{ borderBottom: '1px solid var(--ui-color-black)', padding: '20px 0' }} >
            <div className="container">
                <Row justify={'space-between'}>
                    <Col span={0} md={6} lg={4}>
                        <Input placeholder="Search" bordered={false} prefix={<SearchOutlined />} />
                    </Col>
                    <Col sm={4} xs={4} md={0} lg={0} xl={0} xxl={0} span={0} >
                        <MenuOutlined />
                    </Col>
                    <Col span={12}>
                        <div className="header-brand">
                            <Link to="/" style={logoStyle}>CELEBRIA COLLECTIONS</Link>
                        </div>
                    </Col>
                    <Col span={4} md={6} lg={4}>
                        <Row gutter={[10, 0]} justify={'end'} align="middle">
                            <Col xs={0} sm={0} md={20}>
                                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                    <Button type="text" icon={<SmileOutlined />}>Login</Button>
                                </div>
                            </Col>
                            <Col md={4}>
                                <Badge count={5}>
                                    <Button icon={<ShoppingCartOutlined />} href="/checkout" />
                                </Badge>
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