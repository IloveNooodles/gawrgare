import { remark } from "remark";
import html from "remark-html";
import remarkPrism from "remark-prism";

export default async function markdownToHtml(markdown: string) {
  // const result = await remark()
  //   .use(html, { sanitize: false })
  //   .use(remarkTwoslash, {theme: "dark-plus"})
  //   .process(markdown);
  // return result.toString();
  const result = await remark()
    .use(html, { sanitize: false })
    .use(remarkPrism, {
      plugins: ["line-numbers", "autolinker", "inline-color", "treeview"],
      transformInlineCode: true,
    })
    .process(markdown);
  return result.toString();
}
