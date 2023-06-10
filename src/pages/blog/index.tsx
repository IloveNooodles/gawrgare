import PostCard from '@/components/post-cards';
import Seo from '@/components/seo';
import { ubuntuMono } from '@/fonts/fonts';
import { getDocBySlug } from '@/lib/docs';
import styles from '@/styles/blogs.module.scss';
import { sortDate } from '@/utils/date';
import fs from 'fs';
import { join } from 'path';

export interface PostMetadata {
  title: string;
  description: string;
  slug: string;
  published: string;
  category: string;
  image?: string;
  text?: string;
  minutes?: number;
  time?: number;
  words?: number;
}

interface BlogProps {
  posts: PostMetadata[];
}

export function getStaticProps() {
  const path = join(process.cwd(), 'posts');
  const slugs = fs.readdirSync(path);

  const postsMetadata: PostMetadata[] = [];

  for (let slug of slugs) {
    let formattedSlug = slug.replace(/\.md$/, '');
    let markdownData = getDocBySlug(formattedSlug);
    let { meta, readingTime } = markdownData;

    meta = {
      ...meta,
      ...readingTime,
    };

    postsMetadata.push(meta);
  }

  postsMetadata.sort(sortDate);

  return {
    props: {
      posts: postsMetadata,
    },
  };
}

export default function Blog(props: BlogProps) {
  const { posts } = props;
  return (
    <>
      <Seo title="Muhammad Garebaldhie - Blog" />
      <main className={`${ubuntuMono.className} ${styles.blogs}`}>
        <h1>
          {' '}
          me@gawrgare:~$ <span>echo $BLOGS</span>
        </h1>
        <div>
          <h2 className={styles.vertical}>2023</h2>
          <div className={styles['blogs-container']}>
            {posts.map((postProps, index) => {
              return <PostCard key={index} {...postProps} />;
            })}
          </div>
        </div>
      </main>
    </>
  );
}
