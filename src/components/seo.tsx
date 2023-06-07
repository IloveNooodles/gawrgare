import { SeoMetadata } from '@/types/seo';
import Head from 'next/head';

export default function Seo(props: SeoMetadata) {
  const url = 'https://gawrgare.tech';

  const imageUrl = `${url}/${props.imagePath || 'logo.png'}`;

  const meta = {
    title: 'Muhammad Garebaldhie',
    description: 'Muhammad Garebaldhie personal website',
    ...props,
    image: imageUrl,
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
