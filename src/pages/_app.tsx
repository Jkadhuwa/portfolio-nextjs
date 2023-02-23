import "@styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import client from "@/apollo-client";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider attribute="class" enableSystem={true}>
        <Component {...pageProps} />
        <Analytics />
      </ThemeProvider>
    </ApolloProvider>
  );
}
