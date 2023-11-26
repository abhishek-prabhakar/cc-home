import { cssBundleHref } from "@remix-run/css-bundle";
import { defer, TypedDeferredData, type LinksFunction, type LoaderArgs } from "@remix-run/node";
import {
  Await,
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
import { RootLoaderData, User } from "./types";
import { getSessionUserId } from "./session.server";
import { db } from "./utils/database";
const { Content } = Layout;
import { Provider } from 'react-redux';
import store from './store/store';
import { useEffect, useState } from "react";
import UserService from "./service/user.service";

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

type LoaderData = RootLoaderData;

export async function loader({ request }: LoaderArgs): Promise<TypedDeferredData<any>> {

  const user = new Promise<User | null>(async function (resolve) {
    const userId = await getSessionUserId(request);
    if (!userId) {
      resolve(null);
      return;
    }

    const loggedInUser = await UserService.getUser(userId);

    if (loggedInUser) {
      resolve({
        id: loggedInUser.id,
        phone: +loggedInUser.username,
        name: ''
      });
    }
  });

  const pages = new Promise<{ keyName: string, name: string }[]>(async function (resolve) {
    const list = await db.vendorType.findMany({
      orderBy: {
        name: 'asc'
      },
      select: {
        keyName: true,
        name: true
      }
    });

    resolve(list);
  });


  return defer({
    user,
    pages
  });
}

export default function App() {
  const [pageReady, setPageReady] = useState(false);
  const data: LoaderData = useLoaderData();

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
              <Await resolve={data.user}>
                {response => <Header user={response} />}
              </Await>
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
