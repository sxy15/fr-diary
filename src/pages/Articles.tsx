import React from 'react';
import { motion } from 'framer-motion';
import { Layout } from '../components/Layout';
import { BlogListItem } from '../features/blog/components/BlogListItem';
import { SearchBar } from '../features/blog/components/SearchBar';
import { Pagination } from '../features/blog/components/Pagination';
import { useFilteredPosts } from '../features/blog/hooks/useFilteredPosts';
import { useBlogStore } from '../features/blog/store/useBlogStore';
import { SEO } from '../components/SEO';

export const Articles: React.FC = () => {
  const { posts, totalPages } = useFilteredPosts();
  const { 
    searchQuery, 
    setSearchQuery, 
    currentPage, 
    setPage 
  } = useBlogStore();

  return (
    <Layout>
      <SEO title="Articles" />
      <div className="max-w-4xl mx-auto relative">
        <div className="mb-6 pt-2">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white transition-colors">Blog</h1>
        </div>

        {/* Sticky Search Bar */}
        <div className="sticky top-[73px] z-30 bg-[#F6F4F1]/95 dark:bg-gray-950/95 backdrop-blur-sm py-4 mb-6 -mx-4 px-4 transition-colors duration-300">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>

        {/* Scrollable Content */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-2 mb-12"
        >
          {posts.length > 0 ? (
            posts.map((post) => (
              <BlogListItem key={post.id} post={post} />
            ))
          ) : (
            <div className="text-center py-20 text-gray-500 dark:text-gray-400">
              No articles found.
            </div>
          )}
        </motion.div>

        <Pagination 
          currentPage={currentPage} 
          totalPages={totalPages} 
          onPageChange={(page) => {
            setPage(page);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }} 
        />
      </div>
    </Layout>
  );
};
