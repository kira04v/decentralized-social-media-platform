
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Home, Search, PenSquare, User, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-card border-b shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold">DS</span>
              </div>
              <span className="ml-3 font-medium text-xl hidden sm:block">DecentSocial</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-1 p-2 text-muted-foreground hover:text-foreground transition-colors">
              <Home size={20} />
              <span>Home</span>
            </Link>
            <Link to="/explore" className="flex items-center space-x-1 p-2 text-muted-foreground hover:text-foreground transition-colors">
              <Search size={20} />
              <span>Explore</span>
            </Link>
            <Link to="/create" className="flex items-center space-x-1 p-2 text-muted-foreground hover:text-foreground transition-colors">
              <PenSquare size={20} />
              <span>Create</span>
            </Link>
            <Link to="/profile" className="flex items-center space-x-1 p-2 text-muted-foreground hover:text-foreground transition-colors">
              <User size={20} />
              <span>Profile</span>
            </Link>
          </nav>
          
          <div className="hidden md:block">
            <Button>Connect Wallet</Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden animate-slide-down">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-b">
            <Link to="/" className="flex items-center space-x-3 px-3 py-2 rounded-md text-base font-medium hover:bg-muted">
              <Home size={20} />
              <span>Home</span>
            </Link>
            <Link to="/explore" className="flex items-center space-x-3 px-3 py-2 rounded-md text-base font-medium hover:bg-muted">
              <Search size={20} />
              <span>Explore</span>
            </Link>
            <Link to="/create" className="flex items-center space-x-3 px-3 py-2 rounded-md text-base font-medium hover:bg-muted">
              <PenSquare size={20} />
              <span>Create</span>
            </Link>
            <Link to="/profile" className="flex items-center space-x-3 px-3 py-2 rounded-md text-base font-medium hover:bg-muted">
              <User size={20} />
              <span>Profile</span>
            </Link>
            <div className="px-3 py-2">
              <Button className="w-full">Connect Wallet</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
