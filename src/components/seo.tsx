import Head from "next/head";

export default function Seo({ ...metadata }) {
  const url = "http://gawrgare.tech";

  const meta = {
    title: "Muhammad Garebaldhie",
    description: "Muhammad Garebaldhie personal website",
    image: `${url}/logo.png`,
    ...metadata,
  };

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta content={meta.description} name="description" />

      <meta content={meta.title} property="og:title" />
      <meta content={meta.image} property="og:image" />
      <meta content={meta.description} property="og:description" />

      <meta content="summary_large_image" name="twitter:card" />
      <meta content={meta.title} name="twitter:title" />
      <meta content={meta.description} name="twitter:description" />
      <meta content={meta.image} name="twitter:image" />
    </Head>
  );
}
