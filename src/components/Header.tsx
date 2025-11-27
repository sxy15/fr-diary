import React from 'react';
import { NavLink } from 'react-router';
import { Sun, Moon } from 'lucide-react';
import { cn } from '../lib/utils';
import { useTheme } from '../hooks/useTheme';

export const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const avatarUrl = 'https://raw.githubusercontent.com/sxy15/bbb/main/assets/c514e7ae-9689-bb98-61e8-ba21c34b4292.png';

  const handleAvatarClick = () => {
    window.open('https://github.com/sxy15', '_blank');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full bg-black dark:bg-white flex items-center justify-center text-white dark:text-black overflow-hidden cursor-pointer">
           <img src={avatarUrl} alt="Logo" className="w-full h-full object-cover" onClick={handleAvatarClick}/>
        </div>
      </div>

      <nav className="absolute left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full px-2 py-1 shadow-sm flex items-center space-x-1 transition-colors duration-300">
        {[
          { name: 'Articles', path: '/articles' },
          { name: 'Projects', path: '/projects' },
        ].map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => cn(
              "px-4 py-1.5 rounded-full text-sm font-medium transition-all",
              isActive 
                ? "bg-black dark:bg-white text-white dark:text-black shadow-md" 
                : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            )}
          >
            {item.name}
          </NavLink>
        ))}
      </nav>

      <button 
        onClick={(e) => toggleTheme(e)}
        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-300"
      >
        {theme === 'light' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      </button>
    </header>
  );
};
