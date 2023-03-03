import "@styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import { ApolloProvider } from "@apollo/client";
import client from "@/apollo-client";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        strategy="worker"
      />
      <Script id="google-analytics" strategy="worker">
        {`
             window.dataLayer = window.dataLayer || [];
             function gtag(){dataLayer.push(arguments);}
             gtag('js', new Date());
             gtag('config', ${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS});
          `}
      </Script>
      <ThemeProvider attribute="class" enableSystem={true}>
        <Component {...pageProps} />
        <Analytics />
      </ThemeProvider>
    </ApolloProvider>
  );
}
