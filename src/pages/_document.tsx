import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css"
        integrity="sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc"
        crossOrigin="anonymous"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Muhammad Garebaldhie</title>
      <link rel="icon" href="/logo.png" type="image/x-icon" />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
