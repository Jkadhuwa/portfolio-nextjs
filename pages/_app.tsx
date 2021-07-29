import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import "../styles/styles.scss";
/**
 *
 * @returns
 */

const MainApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <link rel="icon" href="favicon.ico" />
        <title>Musinda Kadhuwa</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MainApp;
