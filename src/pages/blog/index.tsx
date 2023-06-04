import PostCard from "@/components/post-cards";
import { getDocBySlug } from "@/lib/docs";
import fs from "fs";
import { join } from "path";

export interface PostMetadata {
  title: string;
  description: string;
  slug: string;
  published: string;
  category: string;
  image?: string;
}

interface BlogProps {
  posts: PostMetadata[];
}

export function getStaticProps() {
  const path = join(process.cwd(), "posts");
  const slugs = fs.readdirSync(path);

  const postsMetadata: PostMetadata[] = [];

  for (let slug of slugs) {
    let formattedSlug = slug.replace(/\.md$/, "");
    let markdownData = getDocBySlug(formattedSlug);
    let { meta } = markdownData;

    postsMetadata.push(meta);
  }

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
      Test ini blog page
      <p>test</p>
      <p>2</p>
      Ini links nya broh
      {posts.map((postProps, index) => {
        return <PostCard key={index} {...postProps} />;
      })}
    </>
  );
}
