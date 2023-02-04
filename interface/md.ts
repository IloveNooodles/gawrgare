export interface Items {
  [key: string]: string;
}

export interface Post {
  title: string;
  content: string;
  date: string;
  description: string;
  thumbnailUrl: string;
  tags?: string[];
}

export type Slug = string;
export interface Slugs {
  slug: Slug;
}
