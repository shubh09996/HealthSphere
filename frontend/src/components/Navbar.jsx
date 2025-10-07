import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center py-4 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-[#0096C7] via-[#2A9D8F] to-[#7E57C2] p-2 rounded-md">
              <span className="text-primary-foreground font-bold text-lg">H</span>
            </div>
            <span className="text-xl font-semibold bg-gradient-to-r from-hs-gradient-start via-hs-gradient-middle to-hs-gradient-end text-transparent bg-clip-text">
              HealthSphere
            </span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <motion.a href="#" className="text-black dark:text-foreground font-medium hover:text-primary transition-colors" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>Features</motion.a>
          <motion.a href="#" className="text-black dark:text-foreground font-medium hover:text-primary transition-colors" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>Roles</motion.a>
          <motion.a href="#" className="text-black dark:text-foreground font-medium hover:text-primary transition-colors" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>About</motion.a>
        </nav>
        <div className="flex items-center space-x-4">
          <motion.button onClick={toggleTheme} className="p-2 rounded-full text-foreground/70 hover:bg-muted hover:text-foreground transition-colors"
            whileHover={{ scale: 1.1, rotate: 15 }} transition={{ duration: 0.2 }}
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </motion.button>
          <motion.div
            whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}
          >
            <Link to="/login" className="text-black dark:text-foreground font-medium hover:text-primary transition-colors">Login</Link>
          </motion.div>
          <motion.button 
            className="bg-gradient-to-r from-[#0096C7] via-[#2A9D8F] to-[#7E57C2] text-primary-foreground px-4 py-2 rounded-md font-medium hover:opacity-90 transition-opacity"
            whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}
          >
            <Link to="/signup" className="text-primary-foreground">Get Started</Link>
          </motion.button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;