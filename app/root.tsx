import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction, LoaderArgs } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import cssTransitions from '~/transitions.css';
import styles from '~/root.css';
import antdStyles from '~/antd.css';
import carouselStyles from 'react-photo-view/dist/react-photo-view.css';
import { Col, Layout, Row, Spin } from "antd";
import { Footer } from "~/components/Footer";
import { Ticker } from "~/components/Ticker";
import { Header } from "./components/Header";
import { User } from "./types";
import { getSessionUserId } from "./session.server";
import { db } from "./utils/database";
const { Content } = Layout;
import { Provider } from 'react-redux';
import store from './store/store';
import { useEffect, useState } from "react";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  { rel: "stylesheet", href: styles }, { rel: "stylesheet", href: cssTransitions }, { rel: "stylesheet", href: antdStyles },
  { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/antd/4.4.3/antd.css" },
  { rel: 'stylesheet', href: carouselStyles }
];


const headerStyle: React.CSSProperties = {
  height: 'auto',
  padding: '0',
  backgroundColor: '#fff',
};

export async function loader({ request }: LoaderArgs): Promise<any | User | null> {
  const userId = await getSessionUserId(request);
  if (!userId) {
    return null;
  }

  const loggedInUser = await db.user.findFirst({
    where: {
      username: userId
    }
  });

  if (loggedInUser) {
    return {
      id: loggedInUser.id,
      phone: +loggedInUser.username,
      name: ''
    }
  }

  return null;
}

export default function App() {
  const [pageReady, setPageReady] = useState(false);

  useEffect(() => {
    setPageReady(true);
  }, []);


  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Provider store={store}>
          <Layout>
            <Ticker />
            <Layout.Header style={headerStyle}>
              <Header />
            </Layout.Header>
            <Content style={{ paddingTop: '40px' }}>
              {pageReady ? <Outlet /> : <Row justify={'center'}>
                <Col>
                  <Spin />
                </Col>
              </Row>}
            </Content>
            <Layout.Footer style={{ background: 'none', padding: '24px 20px' }}>
              <Footer />
            </Layout.Footer>
          </Layout>
        </Provider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
