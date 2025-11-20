import React from 'react';
import { Link } from 'react-router-dom';
import type{ Post } from '../types';

interface BlogListItemProps {
  post: Post;
}

export const BlogListItem: React.FC<BlogListItemProps> = ({ post }) => {
  return (
    <Link to={`/article/${post.slug}`} className="block group">
      <article className="py-6 border-b border-gray-100 dark:border-gray-800 last:border-0">
        <h3 className="text-xl font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {post.title}
        </h3>
        <div className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-4">
          <span>{post.category}</span>
          <span>•</span>
          <time dateTime={post.date}>{post.date}</time>
        </div>
        <p className="mt-3 text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-2">
          {post.description}
        </p>
      </article>
    </Link>
  );
};
