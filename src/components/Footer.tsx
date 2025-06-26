import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-theme-secondary/50 to-theme-primary/30 py-8 border-t border-theme-primary/20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-700 mb-2 font-semibold">
            © 2024 Alifa Hanania Ardha. All rights reserved.
          </p>
          <p className="text-gray-600 flex items-center justify-center gap-2">
            Made with 
            <span className="text-theme-primary animate-pulse">♥</span>
            using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;