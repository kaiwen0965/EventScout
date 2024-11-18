import Head from "next/head";
import Layout from "../components/layout/layout";
import "../styles/globals.css";
import { NotificationContextProvider } from "../store/notification-context";

function MyApp({ Component, pageProps }) {
  return (
    <NotificationContextProvider>
    <Layout>
      <Head>
        <title>Event Scout</title>
        <meta name="description" content="EventScout events." />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </Layout>
    </NotificationContextProvider>
  );
}

export default MyApp;
