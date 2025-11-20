import React from 'react';
import { cn } from '../../../lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  active?: boolean;
  variant?: 'default' | 'outline';
}

export const Badge: React.FC<BadgeProps> = ({ 
  className, 
  active, 
  variant = 'default', 
  children, 
  ...props 
}) => {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium transition-colors cursor-pointer",
        variant === 'default' && (active 
          ? "bg-black dark:bg-white text-white dark:text-black" 
          : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700"),
        variant === 'outline' && "border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:border-gray-400 dark:hover:border-gray-500",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
