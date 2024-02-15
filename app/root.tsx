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
import carouselStyles from 'react-photo-view/dist/react-photo-view.css';
import { Footer } from "~/components/Footer";
import { Ticker } from "~/components/Ticker";
import { Header } from "./components/Header";
import { HeaderNavListItem, RootLoaderData, User } from "./types";
import { USER_SESSION_KEY, getSession } from "./session.server";
import { db } from "./utils/database";
import { Provider } from 'react-redux';
import store from './store/store';
import { Suspense, useEffect, useState } from "react";
import UserService from "./service/user.service";
import Routes from "./routes.data";
import CarouselSliderStyles from 'pure-react-carousel/dist/react-carousel.cjs.css';
import { ColorSchemeScript, Box, Grid, MantineProvider, Container } from "@mantine/core";
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import theme from "./mantine.theme";
import Skeleton from "./components/Skeleton";
import Tracker from '@openreplay/tracker/cjs';
import { startTracker } from "./tracker";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  { rel: "stylesheet", href: styles },
  { rel: "stylesheet", href: cssTransitions },
  { rel: 'stylesheet', href: carouselStyles },
  { rel: 'stylesheet', href: CarouselSliderStyles },
  {
    rel: 'preconnect', href: 'https://fonts.googleapis.com'
  },
  {
    rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous'
  },
  {
    rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap'
  }
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



  const pages = new Promise<HeaderNavListItem[]>(async function (resolve) {
    const list = await db.vendorType.findMany({
      orderBy: {
        name: 'asc'
      },
      select: {
        keyName: true,
        name: true,
        serviceGroup: {
          select: {
            serviceGroupType: {
              select: {
                keyName: true,
                name: true
              },
            },
          },
          where: {
            groupTypeId: {
              not: null
            }
          },
          distinct: ['groupTypeId'],
          orderBy: {
            serviceGroupType: {
              name: 'asc'
            }
          }
        }
      }
    });

    resolve(list.map(x => ({
      id: x.keyName,
      name: x.name,
      children: [{
        name: 'Collections',
        list: x.serviceGroup.reduce<{ path: string, id: string, name: string }[]>((arr, item) => {
          if (item.serviceGroupType?.keyName) {
            arr.push({
              path: Routes.CollectionsByVendor.replace(':vendorType', x.keyName).replace(':id', item.serviceGroupType.keyName),
              id: item.serviceGroupType.keyName,
              name: item.serviceGroupType.name
            });
          }
          return arr;
        }, [])
      }]
    })));
  });


  return defer({
    user,
    pages
  });
}

export default function App() {
  const data: LoaderData = useLoaderData();
  const navigation = useNavigation();


  useEffect(() => {
    startTracker({
      projectKey: 'rTOIL6yXtT3QWBpBcTSB'
    })
  }, [])

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <Provider store={store}>
            <Ticker />
            <Box style={headerStyle}>
              <Suspense fallback={<Skeleton />}>
                <Await resolve={data.user}>
                  {response => <Header user={response} />}
                </Await>
              </Suspense>
            </Box>
            <Box style={{ paddingTop: '40px' }}>
              {navigation.state === 'idle' || navigation.state === 'submitting' ? <Outlet /> : <Container mih={500}>
                <Grid gutter={80}>
                  <Grid.Col span={{ base: 12, md: 8 }}>
                    <Skeleton />
                  </Grid.Col>
                  <Grid.Col span={{ base: 12, md: 4 }}>
                    <Skeleton />
                  </Grid.Col>
                </Grid></Container>}
            </Box>
            <Footer />
          </Provider>
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </MantineProvider>
      </body>
    </html>
  );
}
