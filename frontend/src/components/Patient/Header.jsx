import React, { useState, useRef, useEffect } from 'react';
import { Search, Bell, Menu, Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext.jsx';

const Header = ({ isSidebarOpen, setIsSidebarOpen }) => {
    const { theme, toggleTheme } = useTheme();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef]);

    return (
        <header className="flex items-center justify-between p-4 bg-card border-b border-border sticky top-0 z-40">
            <div className="flex items-center space-x-4">
                {/* Mobile Menu Button */}
                <button 
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className="md:hidden p-2 rounded-md hover:bg-muted"
                >
                    <Menu size={24} className="text-foreground" />
                </button>
                
                {/* Logo and Brand Name */}
                <div className="hidden md:flex items-center space-x-2">
                    <Link to="/patient/dashboard" className="flex items-center space-x-2">
                        <div className="bg-gradient-to-r from-[#0096C7] via-[#2A9D8F] to-[#7E57C2] p-2 rounded-md">
                            <span className="text-primary-foreground font-bold text-lg">H</span>
                        </div>
                        <span className="text-xl font-semibold bg-gradient-to-r from-hs-gradient-start via-hs-gradient-middle to-hs-gradient-end text-transparent bg-clip-text">
                            HealthSphere
                        </span>
                    </Link>
                </div>
            </div>

            {/* Search Bar */}
            <div className="relative w-full max-w-md hidden sm:block">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                <input
                    type="text"
                    placeholder="Search hospitals, medicines..."
                    className="w-full bg-background border border-border rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-hs-gradient-middle"
                />
            </div>

            {/* Right Side Icons */}
            <div className="flex items-center space-x-4">
                {/* Theme Toggle Button */}
                <motion.button 
                    onClick={toggleTheme} 
                    className="p-2 rounded-full text-foreground/70 hover:bg-muted hover:text-foreground transition-colors"
                    whileHover={{ scale: 1.1, rotate: 15 }} 
                    transition={{ duration: 0.2 }}
                >
                    {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                </motion.button>

                {/* UPDATED: Notification Icon is now a Link */}
                <Link to="/patient/notifications" className="relative cursor-pointer">
                    <Bell size={22} className="text-foreground" />
                    <span className="absolute -top-1 -right-1 flex h-4 w-4">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 items-center justify-center text-white text-xs">2</span>
                    </span>
                </Link>

                {/* Profile Icon */}
                <div className="relative" ref={dropdownRef}>
                    <button 
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="w-9 h-9 rounded-full bg-gradient-to-r from-hs-gradient-start via-hs-gradient-middle to-hs-gradient-end flex items-center justify-center text-white font-bold cursor-pointer ring-2 ring-offset-2 ring-offset-card ring-transparent hover:ring-primary transition-all"
                    >
                        R
                    </button>
                    
                    {isDropdownOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute right-0 mt-2 w-48 bg-card rounded-md shadow-lg py-1 z-50 border border-border"
                        >
                            <Link 
                                to="/patient/profile" 
                                className="block px-4 py-2 text-sm text-foreground hover:bg-muted"
                                onClick={() => setIsDropdownOpen(false)}
                            >
                                View Profile
                            </Link>
                            <button 
                                onClick={() => { 
                                    // Implement logout logic here
                                    navigate('/login'); // Redirect to login page after logout
                                    setIsDropdownOpen(false);
                                }}
                                className="block w-full text-left px-4 py-2 text-sm text-foreground hover:bg-muted"
                            >
                                Logout
                            </button>
                        </motion.div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;