import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-8 text-center text-sm text-gray-500">
      <p>© {new Date().getFullYear()} My Blog. All rights reserved.</p>
    </footer>
  );
};
