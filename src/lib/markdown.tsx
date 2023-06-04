import rehypeKatex from "rehype-katex";
import rehypePrism from "rehype-prism-plus";
import rehypeStringify from "rehype-stringify/lib";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype/lib";
import { unified } from "unified";

export default async function markdownToHtml(markdown: string) {
  // const result = await remark()
  //   .use(html, { sanitize: false })
  //   .use(remarkTwoslash, {theme: "dark-plus"})
  //   .process(markdown);
  // return result.toString();
  // const result = await remark()
  //   .use(html, { sanitize: false })
  //   .use(remarkMath)
  //   .use(remarkPrism, {
  //     plugins: ["line-numbers", "autolinker", "inline-color", "treeview"],
  //     transformInlineCode: true,
  //   })
  //   .process(markdown);
  // return result.toString();
  const result = await unified()
    .use(remarkParse)
    .use(remarkMath)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypePrism)
    .use(rehypeKatex)
    .use(rehypeStringify)
    .process(markdown);
  return result.toString();
}
