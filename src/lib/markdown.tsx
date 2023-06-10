import rehypeCodeTitles from "rehype-code-titles";
import rehypeKatex from "rehype-katex";
import rehypePrism from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkHeading from "rehype-autolink-headings"
import remarkMath from "remark-math";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import remarkToc from "remark-toc";

export default async function markdownToHtml(markdown: string) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkMath)
    .use(remarkGfm)
    .use(remarkToc)
    .use(remarkRehype)
    .use(rehypeKatex)
    .use(rehypeCodeTitles)
    .use(rehypePrism, {
      showLineNumbers: true,
    })
    .use(rehypeSlug)
    .use(remarkHeading)
    .use(rehypeStringify)
    .process(markdown);
  return result.toString();
}
