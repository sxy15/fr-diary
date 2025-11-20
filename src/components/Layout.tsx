import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#F6F4F1] dark:bg-gray-950 text-gray-900 dark:text-gray-100 font-sans selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black transition-colors duration-300">
      <Header />
      <main className="pt-24 px-6 max-w-7xl mx-auto min-h-[calc(100vh-100px)]">
        {children}
      </main>
      <Footer />
    </div>
  );
};
