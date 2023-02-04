import { Items } from "@/interface/md";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const postsDirectory = join(process.cwd(), "posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string, fields: string[] = defaultFields) {
  const realSlug = slug.replace(".md", "");
  const fullPath = join(postsDirectory, realSlug + ".md");
  const fileContents = fs.readFileSync(fullPath, "utf-8");
  const { data, content } = matter(fileContents);

  const items: Items = {};
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }

    if (field === "content") {
      items[field] = content;
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });
  return items;
}

export function getAllPosts(fields: string[] = defaultFields) {
  const slugs = getPostSlugs();
  const posts = slugs.map((slug) => {
    const data = getPostBySlug(slug, fields);
    return data;
  });
  return posts;
}

export const defaultFields = [
  "slug",
  "title",
  "date",
  "description",
  "thumbnailUrl",
  "content",
];