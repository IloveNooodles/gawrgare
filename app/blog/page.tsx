// export async function generateStaticParams() {
//   const posts = await getAllPosts(["slug"]);
//   console.log(posts);
//   const listSlug = posts.map((post: any) => {
//     return { slug: post.slug };
//   });
//   return listSlug;
// }

// export async function getAvailablePosts(params) {
//   console.log(params);
//   const post = getPostBySlug(params.slug);
//   return post;
// }

export default async function Blog({ params }) {
  const { slug } = params;
  return (
    <div>
      {/* {posts.map((post: any, index: number) => {
        return <Link href={`/blog/${post.slug}`} key={index} />;
      })} */}
    </div>
  );
}
