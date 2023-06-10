import Seo from '@/components/seo';
import { ubuntuMono } from '@/fonts/fonts';
import { getDocBySlug } from '@/lib/docs';
import markdownToHtml from '@/lib/markdown';
import styles from '@/styles/blog.module.scss';
import fs from 'fs';
import { join } from 'path';
import { PostMetadata } from '.';

export async function getStaticPaths() {
  const path = join(process.cwd(), 'posts');
  const posts = fs.readdirSync(path);
  const postPaths = posts.map((post) => post);
  const paths = postPaths.map((path) => ({
    params: { slug: path.replace(/\.md$/, '') },
  }));
  return {
    paths,
    fallback: false,
  };
}

interface PostProps {
  params: {
    slug: string;
  };
}

export async function getStaticProps(props: PostProps) {
  const { slug } = props.params;

  let markdownData = getDocBySlug(slug);
  let { content } = markdownData;

  let markdownProcessed = await markdownToHtml(content);

  return {
    props: {
      markdownData,
      markdownProcessed,
    },
  };
}

export interface BlogPostProps {
  markdownData: {
    slug: string;
    content: string;
    meta: PostMetadata;
  };
  markdownProcessed: string;
}

export default function BlogPost(props: BlogPostProps) {
  const { meta } = props.markdownData;
  return (
    <>
      <Seo {...meta} />
      <main className={`${ubuntuMono.className} ${styles.main}`}>
        {/* {meta.image && (
          <div className={styles['container-relative']}>
            <Image
              src={meta.image}
              alt={meta.description}
              quality={100}
              loading="lazy"
              fill
            />
          </div>
        )} */}
        <div
          className={styles.container}
          dangerouslySetInnerHTML={{ __html: props.markdownProcessed }}
        ></div>
      </main>
    </>
  );
}
