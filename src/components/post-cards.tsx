import { inter } from "@/fonts/fonts";
import { PostMetadata } from "@/pages/blog";
import styles from "@/styles/postCards.module.scss";
import { formatDate } from "@/utils/formatter";
import Image from "next/image";
import Link from "next/link";

export default function PostCard(props: PostMetadata) {
  const { category, description, slug, published, title, image } = props;
  const publishedDate = formatDate(published);
  const formattedSlug = `/blog/${slug}`;
  return (
    <div className={`${styles.cards} ${inter.className}`}>
      <Link href={formattedSlug}>
        <div>
          <Image
            src={image!}
            alt="test"
            width={100}
            height={100}
            className={styles["image-container"]}
          />
        </div>
        <div className={styles.content}>
          <h1>{title}</h1>
          <div className={styles["content-meta"]}>
            <p>{publishedDate}</p>
            <p>{category}</p>
          </div>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
}
