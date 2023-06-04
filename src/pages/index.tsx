import { getDocBySlug } from "@/lib/docs";
import markdownToHtml from "@/lib/markdown";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export async function getStaticProps() {
  let markdownData = getDocBySlug("test.md");
  // markdownToHtml(markdownData);
  let { content, meta, slug } = markdownData;

  let markdownProcessed = await markdownToHtml(content);

  return {
    props: {
      markdownData,
      markdownProcessed,
    },
  };
}

export default function Home(props: any) {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div dangerouslySetInnerHTML={{ __html: props.markdownProcessed }}></div>
    </main>
  );
}
