import Layout from "@/components/layout";
import "@/styles/globals.scss";
// import "@/styles/prism.scss";
import "@/styles/overrides.scss";


import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
