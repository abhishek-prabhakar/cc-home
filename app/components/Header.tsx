import { MenuOutlined, SearchOutlined, ShoppingCartOutlined, SmileOutlined } from "@ant-design/icons";
import { Button, Col, Input, Row } from "antd";
import { AppNavigation } from "./navigation";
import { Link } from "@remix-run/react";

const logoStyle: React.CSSProperties = { fontSize: '20px', textTransform: 'uppercase', color: 'black' }

export function Header() {
    return <>
        <div style={{ borderBottom: '1px solid var(--ui-color-black)', padding: '20px 40px' }} >
            <div className="container header-top-menu">
                <div className="header-search">
                    <Input placeholder="Search" bordered={false} prefix={<SearchOutlined />} />
                </div>
                <div>
                    <Link to="/" style={logoStyle}>CELEBRIA COLLECTIONS</Link>
                </div>
                <div className="header-actions">
                    <Button type="text" icon={<SmileOutlined />}>Login</Button>
                    <Button icon={<ShoppingCartOutlined />} href="/checkout" />
                </div>
            </div>
        </div>
        <div style={{ borderBottom: '1px solid var(--ui-color-black)', padding: '0px 40px' }} >
            <Row justify={'center'}>
                <Col>
                    <AppNavigation />
                </Col>
            </Row>
        </div>
    </>
}