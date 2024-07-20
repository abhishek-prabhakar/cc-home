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
  useRouteError,
} from "@remix-run/react";
import cssTransitions from '~/transitions.css';
import styles from '~/root.css';
import carouselStyles from 'react-photo-view/dist/react-photo-view.css';
import { Footer } from "~/components/Footer";
import { OfferTicker } from "~/components/OfferTicker";
import { Header } from "./components/Header";
import { HeaderNavListItem, RootLoaderData, User } from "./types";
import { USER_SESSION_KEY, getSession, userCartCookie } from "./session.server";
import { db } from "./utils/database";
import { Provider } from 'react-redux';
import store from './store/store';
import { Suspense, useEffect, useState } from "react";
import Routes from "./routes.data";
import CarouselSliderStyles from 'pure-react-carousel/dist/react-carousel.cjs.css';
import { ColorSchemeScript, Box, Grid, MantineProvider, Container, LoadingOverlay, Space, Alert } from "@mantine/core";
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import theme from "./mantine.theme";
import Skeleton from "./components/Skeleton";
import { OPENREPLY_KEY, startTracker } from "./tracker";
import '@mantine/carousel/styles.css';
import {SpeedInsights} from "@vercel/speed-insights/remix";
import Analytics from "./components/Analytics";

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
  padding: '0',
  backgroundColor: '#fff',
  position: 'sticky',
  top: 0,
  boxShadow: '0 0 5px #c0c0c0',
  zIndex: 1
};

export async function loader({ request }: LoaderArgs) {
  const cookie = request.headers.get("Cookie");
  const session = await getSession(cookie);
  const userId = session.get(USER_SESSION_KEY);
  const userCart = await userCartCookie.parse(cookie);

  const user = new Promise<User | null>(async function (resolve, reject) {
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
      } else{
        resolve(null);
      }
    } catch (e) {
      resolve(null);
    }
  });



  const pages = new Promise<HeaderNavListItem[]>(async function (resolve, reject) {
    const list = await db.vendorType.findMany({
      orderBy: {
        name: 'asc'
      },
      where: {
        isActive: true
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
            isActive: true,
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
              path: Routes.get('CollectionsByVendor', { vendorType: x.keyName, id: item.serviceGroupType.keyName }),
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
    pages,
    cartCount: userCart?.length || 0,
    ENV: {
      openReplyprojectKey: process.env.NODE_ENV === "production" ? OPENREPLY_KEY : null,
      FB_PIXEL_ID: process.env.NODE_ENV === "production" ? '350261611458429' : null
    }
  });
}

export default function App() {
  const data = useLoaderData<typeof loader>();
  const navigation = useNavigation();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
        <meta name="msapplication-TileImage" content="https://celebriacollective.com/assets/og-img.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.celebriacollective.com/" />
        <meta property="og:title" content="Celebria Collective" />
        <meta property="og:description" content="Book a service with us! Find photographers, videographers and makeup artists" />
        <meta property="og:image" content="https://celebriacollective.com/assets/og-img.jpg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.celebriacollective.com/" />
        <meta property="twitter:title" content="Celebria Collective" />
        <meta property="twitter:description" content="Book a service with us! Find photographers, videographers and makeup artists" />
        <meta property="twitter:image" content="https://celebriacollective.com/assets/og-img.jpg" />

        <ColorSchemeScript />
        {/* <script type='text/javascript' src='https://www.bing.com/api/maps/mapcontrol?callback=GetMap&key=AlcwgxRanFuM02eYSYz58UqTHHXqq6OzzfT8Wd8E9gSEN8nooeI9zpfJIOHYOY1k' async defer></script> */}
      </head>
      <body>
        <MantineProvider theme={theme}>
          <Provider store={store}>
            <OfferTicker />
            <Box style={headerStyle}>
              <Suspense fallback={<Skeleton />}>
                <Await resolve={data.user}>
                  {response => <Header user={response} cartCount={data.cartCount} />}
                </Await>
              </Suspense>
            </Box>
            <div style={{ paddingTop: '40px', position: 'relative' }}>
              <Outlet />
              <LoadingOverlay visible={navigation.state === 'loading'} overlayProps={{ radius: "sm", blur: 2 }} />
            </div>
            <Footer />
          </Provider>
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
          <SpeedInsights/>
          <Analytics.Pixel pixelId={data.ENV.FB_PIXEL_ID}/>
          <Analytics.OpenReply projectkey={ data.ENV.openReplyprojectKey}/>
        </MantineProvider>
      </body>
    </html>
  );
}

export function HydrateFallback() {
  return <p>Loading...</p>;
}

export function ErrorBoundary() {
  const error: any = useRouteError();

  return <div style={{textAlign: 'center'}}>
         {error?.data || 'Oops, Something went wrong!'}
    </div>
}