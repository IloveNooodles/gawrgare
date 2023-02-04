import { getAllPosts, getPostBySlug } from "@/lib/posts";
import Markdown from "markdown-to-jsx";
export async function generateStaticParams() {
  const posts = getAllPosts(["slug"]);
  return posts.map((post) => ({
    slug: post!.slug,
  }));
}

export async function getAvailablePosts(slug: string) {
  const post = await getPostBySlug(slug);
  return { post };
}

export default async function Blog({ params }: { params: any }) {
  const { slug } = params;
  const { post } = await getAvailablePosts(slug);
  const { title, description, date, thumbnailUrl, tags } = post;

  return (
    <div>
      <h1>{title}</h1>
      <Markdown>{post.content}</Markdown>
    </div>
  );
}
