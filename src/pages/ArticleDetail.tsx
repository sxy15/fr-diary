import React from 'react';
import { useParams, Navigate } from 'react-router';
import ReactMarkdown from 'react-markdown';
import { Layout } from '../components/Layout';
import { useBlogStore } from '../features/blog/store/useBlogStore';
import { SEO } from '../components/SEO';
import { Badge } from '../features/blog/components/Badge';

export const ArticleDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { posts } = useBlogStore();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/articles" replace />;
  }

  return (
    <Layout>
      <SEO title={post.title} description={post.description} image={post.coverImage} />
      
      <article className="max-w-3xl mx-auto bg-white dark:bg-gray-900 rounded-3xl p-8 md:p-12 shadow-sm dark:shadow-none border border-transparent dark:border-gray-800 transition-colors duration-300">
        <header className="mb-10 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Badge>{post.category}</Badge>
            <span className="text-gray-400">•</span>
            <time className="text-gray-500 dark:text-gray-400">{post.date}</time>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            {post.title}
          </h1>

          {post.coverImage && (
            <div className="rounded-2xl overflow-hidden aspect-video mb-8">
              <img 
                src={post.coverImage} 
                alt={post.title} 
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </header>

        <div className="prose prose-lg prose-gray dark:prose-invert max-w-none">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>

        <footer className="mt-12 pt-8 border-t border-gray-100 dark:border-gray-800">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="outline">#{tag}</Badge>
            ))}
          </div>
        </footer>
      </article>
    </Layout>
  );
};
