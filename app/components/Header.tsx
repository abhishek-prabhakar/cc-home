import { MenuOutlined, ShoppingCartOutlined, SmileOutlined } from "@ant-design/icons";
import { Button, Col, Row } from "antd";
import { AppNavigation } from "./navigation";

const logoStyle: React.CSSProperties = { fontSize: '20px', textTransform: 'uppercase' }

export function Header() {
    return <>
        <div style={{ borderBottom: '1px solid var(--ui-color-black)' }} >
            <Row gutter={50} align={'middle'} justify={'space-between'}>
                <Col>
                    <MenuOutlined />
                </Col>
                <Col>
                    <div style={logoStyle}>CELEBRIA COLLECTIONS</div>
                </Col>
                <Col>
                    <Button type="text" icon={<SmileOutlined />}>Login</Button>
                    <Button icon={<ShoppingCartOutlined />} href="/checkout" />
                </Col>
            </Row>
        </div>
        <div style={{ borderBottom: '1px solid var(--ui-color-black)' }} >
            <Row justify={'center'}>
                <Col>
                    <AppNavigation />
                </Col>
            </Row>
        </div>
    </>
}