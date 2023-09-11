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
import styles from '~/root.css';
import { createCache, extractStyle, StyleProvider } from "@ant-design/cssinjs";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  { rel: "stylesheet", href: styles }
];

export default function App() {
  // const cache = createCache();
  // const html = renderToString(<StyleProvider cache={cache}><Outlet /></StyleProvider>);
  // const styleText = extractStyle(cache);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
        {/* {styleText} */}
      </head>
      <body>
        <StyleProvider ><Outlet /></StyleProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
