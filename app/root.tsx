import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import cssTransitions from '~/transitions.css';
import styles from '~/root.css';
import antdStyles from '~/antd.css';
import { MenuOutlined, RightOutlined } from "@ant-design/icons";
import { Badge, Card, Col, Layout, Row, Space, Tag } from "antd";
import { Footer } from "~/components/Footer";
import { AppNavigation } from "~/components/navigation";
import { Ticker } from "~/components/Ticker";
const { Header, Content } = Layout;

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  { rel: "stylesheet", href: styles }, { rel: "stylesheet", href: cssTransitions }, { rel: "stylesheet", href: antdStyles },
  { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/antd/4.4.3/antd.css" }
];


const layoutStyle = { background: 'none' };

const headerStyle: React.CSSProperties = {
  height: 'auto',
  padding: '20px 40px',
  backgroundColor: '#fff',
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Layout style={layoutStyle}>
          <Ticker />
          <Header style={headerStyle}>
            <Row gutter={50}>
              <Col>
                <MenuOutlined />
              </Col>
              <Col>
                CELEBRIA
              </Col>
              <Col>
                <AppNavigation />
              </Col>
            </Row>
          </Header>
          <Content>
            <Outlet />
          </Content>
          <Layout.Footer style={{ background: 'none' }}>
            <Footer />
          </Layout.Footer>
        </Layout>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
