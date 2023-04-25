import "@/styles/globals.css";
import "@/styles/prism.css";
import "@/styles/overrides.css";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
