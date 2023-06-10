import { PostMetadata } from '@/pages/blog';
import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';
import getReadingTime from "reading-time"

const docsDirectory = join(process.cwd(), 'posts');

export function getDocBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(docsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const readingTime = getReadingTime(content);

  return { slug: realSlug, meta: data as PostMetadata, content, readingTime };
}
