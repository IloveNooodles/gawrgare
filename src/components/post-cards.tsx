import { PostMetadata } from "@/pages/blog";
import { formatDate } from "@/utils/formatter";
import Image from "next/image";
import Link from "next/link";

export default function PostCard(props: PostMetadata) {
  const { category, description, slug, published, title, image } = props;
  const publishedDate = formatDate(published);
  const formattedSlug = `/blog/${slug}`;
  return (
    <div>
      <Link href={formattedSlug}>
        <Image src={image!} alt="test" width={100} height={100} />
        <h1>{title}</h1>
        <p>{category}</p>
        <p>{description}</p>
        <p>{description}</p>
        <p>{publishedDate}</p>
      </Link>
    </div>
  );
}
