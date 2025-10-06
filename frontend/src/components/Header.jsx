import React from 'react';
import { Sun, Moon, History } from 'lucide-react';

const Header = ({ theme, toggleTheme }) => {
  return (
    <header className="container flex justify-between items-center py-4 border-b border-border">
      <div className="flex items-center space-x-2">
        <div className="bg-gradient-to-r from-[#0096C7] via-[#2A9D8F] to-[#7E57C2] p-2 rounded-md">
          <span className="text-primary-foreground font-bold text-lg">H</span>
        </div>
        <span className="text-xl font-semibold bg-gradient-to-r from-[#0096C7] via-[#2A9D8F] to-[#7E57C2] text-transparent bg-clip-text">
          HealthSphere
        </span>
      </div>
      <nav className="hidden md:flex items-center space-x-8">
        <a href="#" className="text-black dark:text-foreground font-medium hover:text-primary transition-colors">Features</a>
        <a href="#" className="text-black dark:text-foreground font-medium hover:text-primary transition-colors">Roles</a>
        <a href="#" className="text-black dark:text-foreground font-medium hover:text-primary transition-colors">About</a>
      </nav>
      <div className="flex items-center space-x-4">
        {/* THEME TOGGLE ADDED BACK */}
        <button onClick={toggleTheme} className="p-2 rounded-full text-foreground/70 hover:bg-muted hover:text-foreground transition-colors">
          {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
        </button>
        <a href="#" className="text-black dark:text-foreground font-medium hover:text-primary transition-colors">Login</a>
        {/* GRADIENT ADDED TO BUTTON */}
        <button className="bg-gradient-to-r from-[#0096C7] via-[#2A9D8F] to-[#7E57C2] text-primary-foreground px-4 py-2 rounded-md font-medium hover:opacity-90 transition-opacity">
          Get Started
        </button>
      </div>
    </header>
  );
};

export default Header;