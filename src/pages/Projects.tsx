import React from 'react';
import { motion } from 'framer-motion';
import { Layout } from '../components/Layout';
import { ProjectCard } from '../components/ProjectCard';
import { projects } from '../content/projects';
import { SEO } from '../components/SEO';

export const Projects: React.FC = () => {
  return (
    <Layout>
      <SEO title="Projects" />
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Projects</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">A collection of my work and experiments.</p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="h-full"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Layout>
  );
};
