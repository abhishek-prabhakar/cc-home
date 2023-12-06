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
  useFetcher,
  useLoaderData,
  useNavigation,
} from "@remix-run/react";
import cssTransitions from '~/transitions.css';
import styles from '~/root.css';
import antdStyles from '~/antd.css';
import carouselStyles from 'react-photo-view/dist/react-photo-view.css';
import { Col, Layout, Row, Skeleton, Spin } from "antd";
import { Footer } from "~/components/Footer";
import { Ticker } from "~/components/Ticker";
import { Header } from "./components/Header";
import { RootLoaderData, User } from "./types";
import { USER_SESSION_KEY, getSession } from "./session.server";
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
  const session = await getSession(request.headers.get("Cookie"));
  const userId = session.get(USER_SESSION_KEY);

  const user = new Promise<User | null>(async function (resolve) {
    if (!userId) {
      resolve(null);
      return;
    }

    try {
      const loggedInUser = await db.user.findFirst({
        where: {
          id: userId
        }
      });

      if (loggedInUser) {
        resolve({
          id: loggedInUser.id,
          phone: +loggedInUser.username,
          name: ''
        });
      }
    } catch (e) {
      resolve(null);
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
  const data: LoaderData = useLoaderData();
  const navigation = useNavigation();

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
              {navigation.state !== 'loading' ? <Outlet /> : <Row gutter={[80, 80]}>
                <Col xs={12} md={8}>
                  <Skeleton />
                  <Skeleton />
                  <Skeleton />
                </Col>
                <Col xs={12} md={4}>
                  <Skeleton />
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
