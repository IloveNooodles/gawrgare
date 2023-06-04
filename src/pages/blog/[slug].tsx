import { getDocBySlug } from "@/lib/docs";
import Katex from "@/lib/katek";
import markdownToHtml from "@/lib/markdown";
import fs from "fs";
import { Inter } from "next/font/google";
import { join } from "path";

const inter = Inter({ subsets: ["latin"] });

export async function getStaticPaths() {
  const path = join(process.cwd(), "docs");
  const posts = fs.readdirSync(path);
  const postPaths = posts.map((post) => post);
  const paths = postPaths.map((path) => ({
    params: { slug: path.replace(/\.md$/, "") },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(props: any) {
  const { slug } = props.params;

  let markdownData = getDocBySlug(slug);
  let { content, meta } = markdownData;

  console.log(meta);

  let markdownProcessed = await markdownToHtml(content);

  return {
    props: {
      markdownData,
      markdownProcessed,
    },
  };
}

export default function Home(props: any) {
  // console.log(props);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Katex />
      <div dangerouslySetInnerHTML={{ __html: props.markdownProcessed }}></div>
    </main>
  );
}
