export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  url: string;
  tags?: string[];
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Plane Window',
    description: 'A CSS-only recreation of a plane window view with animated clouds.',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80',
    url: 'https://codepen.io',
    tags: ['CSS', 'Animation']
  },
  {
    id: '2',
    title: 'Code Cover',
    description: 'A tool to generate beautiful code snippets for social media.',
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&q=80',
    url: 'https://github.com',
    tags: ['React', 'Tool']
  },
  {
    id: '3',
    title: 'Wave Drag',
    description: 'Interactive wave simulation with drag physics.',
    image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=800&q=80',
    url: 'https://github.com',
    tags: ['Canvas', 'Physics']
  },
  {
    id: '4',
    title: 'Stroke Text',
    description: 'Experimental typography effects using SVG strokes.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
    url: 'https://codepen.io',
    tags: ['SVG', 'Typography']
  }
];
