import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '@/content/projects';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <a 
      href={project.url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="group block h-full"
    >
      <div className="relative h-full bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-white/20 dark:border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <div className="aspect-video w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        
        <div className="p-4">
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
              {project.title}
            </h3>
            <ArrowUpRight className="h-4 w-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
            {project.description}
          </p>
          {project.tags && (
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span key={tag} className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </a>
  );
};
