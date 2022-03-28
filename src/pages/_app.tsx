import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import { library, config } from "@fortawesome/fontawesome-svg-core";
import "@styles/styles.css";
import Layout from "@components/layout/Layout";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
/**
 *
 * @returns
 */

config.autoAddCss = false;
library.add(far, fas, fab);

const MainApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Musinda Kadhuwa</title>
      </Head>

      <Component {...pageProps} />
    </Layout>
  );
};

export default MainApp;
