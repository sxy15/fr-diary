import fm from 'front-matter';
import type{ Post } from '@/features/blog/types';

interface MarkdownAttributes {
  title: string;
  description: string;
  date: string;
  category: string;
  tags: string[];
  coverImage?: string;
}

export function getAllPosts(): Post[] {
  const modules = import.meta.glob('/src/content/posts/*.md', { eager: true, query: '?raw' });
  
  const posts = Object.entries(modules).map(([path, mod]) => {
    // @ts-expect-error: mod.default is not guaranteed to be a string
    const content = mod.default as string;
    const parsed = fm<MarkdownAttributes>(content);
    
    const slug = path.split('/').pop()?.replace('.md', '') || '';
    
    return {
      id: slug,
      slug,
      content: parsed.body,
      ...parsed.attributes,
    };
  });

  // Sort by date desc
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
