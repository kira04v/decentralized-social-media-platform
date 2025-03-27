
import React from 'react';
import { Navbar } from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 animate-fade-in px-4 py-6 md:px-8 lg:px-16 max-w-7xl mx-auto w-full">
        {children}
      </main>
      <footer className="py-6 px-4 md:px-8 text-center text-muted-foreground text-sm">
        <div className="max-w-7xl mx-auto">
          <p>© 2023 Decentralized Social. All rights reserved.</p>
          <p className="mt-2">Powered by Blockchain Technology</p>
        </div>
      </footer>
    </div>
  );
};
