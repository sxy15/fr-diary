export interface Post {
  id: string;
  title: string;
  description: string;
  content: string; // Markdown content
  date: string;
  tags: string[];
  category: string;
  coverImage?: string;
  slug: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
}

export interface Tag {
  id: string;
  name: string;
  slug: string;
}
