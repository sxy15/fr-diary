import { create } from 'zustand';
import type{ Post, Category, Tag } from '../types';
import { getAllPosts } from '@/lib/posts';

// Load posts from markdown files
const loadedPosts = getAllPosts();

// Extract unique categories and tags
const uniqueCategories = Array.from(new Set(loadedPosts.map(p => p.category))).map((c, i) => ({
  id: String(i),
  name: c,
  slug: c.toLowerCase().replace(/\s+/g, '-')
}));

const uniqueTags = Array.from(new Set(loadedPosts.flatMap(p => p.tags))).map((t, i) => ({
  id: String(i),
  name: t,
  slug: t.toLowerCase().replace(/\s+/g, '-')
}));

interface BlogState {
  posts: Post[];
  categories: Category[];
  tags: Tag[];
  searchQuery: string;
  selectedCategory: string | null;
  selectedTag: string | null;
  currentPage: number;
  itemsPerPage: number;
  
  setSearchQuery: (query: string) => void;
  setCategory: (category: string | null) => void;
  setTag: (tag: string | null) => void;
  setPage: (page: number) => void;
}

export const useBlogStore = create<BlogState>((set) => ({
  posts: loadedPosts,
  categories: uniqueCategories,
  tags: uniqueTags,
  searchQuery: '',
  selectedCategory: null,
  selectedTag: null,
  currentPage: 1,
  itemsPerPage: 5,

  setSearchQuery: (query) => set({ searchQuery: query, currentPage: 1 }),
  setCategory: (category) => set({ selectedCategory: category, selectedTag: null, currentPage: 1 }),
  setTag: (tag) => set({ selectedTag: tag, selectedCategory: null, currentPage: 1 }),
  setPage: (page) => set({ currentPage: page }),
}));
