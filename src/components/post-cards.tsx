import { ubuntuMono } from '@/fonts/fonts';
import { PostMetadata } from '@/pages/blog';
import styles from '@/styles/postCards.module.scss';
import { formatDate } from '@/utils/date';
import Link from 'next/link';

export default function PostCard(props: PostMetadata) {
  const { category, description, slug, published, title, text } = props;
  const publishedDate = formatDate(published);
  const formattedSlug = `/blog/${slug}`;
  return (
    <Link
      className={`${styles.cards} ${ubuntuMono.className}`}
      href={formattedSlug}
    >
      <div className={styles.full}>
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
          <p>Category: {category}</p>
        </div>
        <div className={styles.edge}>
          <p>{text}</p>
          <p>{publishedDate}</p>
        </div>
      </div>
    </Link>
  );
}
