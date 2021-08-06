import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import "@styles/styles.scss";
import Layout from "@components/layout/Layout";
/**
 *
 * @returns
 */

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
