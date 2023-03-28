import "@styles/globals.css";
import React, { useEffect } from "react";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import client from "@/apollo-client";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";
import { useRouter } from "next/router";
import { initGA, logPageView } from "../analytics";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    initGA();
    logPageView();
    router.events.on("routeChangeComplete", logPageView);
    return () => {
      router.events.off("routeChangeComplete", logPageView);
    };
  }, [ ]);

  return (
    <ApolloProvider client={client}>
      <ThemeProvider attribute="class" enableSystem={true}>
        <Component {...pageProps} />
        <Analytics />
      </ThemeProvider>
    </ApolloProvider>
  );
}
