import React from "react";
import { AppProps } from "next/app";
import "../styles/styles.scss";
/**
 *
 * @returns
 */

const MainApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MainApp;
