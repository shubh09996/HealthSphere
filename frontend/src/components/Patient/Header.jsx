import React from 'react';
import { Search, Bell, Menu } from 'lucide-react';

const Header = ({ isSidebarOpen, setIsSidebarOpen }) => {
    return (
        <header className="flex items-center justify-between p-4 bg-card border-b border-border sticky top-0 z-40">
            <div className="flex items-center space-x-4">
                <button 
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className="md:hidden p-2 rounded-md hover:bg-muted"
                >
                    <Menu size={24} className="text-foreground" />
                </button>
                <div className="hidden md:flex items-center space-x-2">
                    <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
                </div>
            </div>

            <div className="relative w-full max-w-md hidden sm:block">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                <input
                    type="text"
                    placeholder="Search hospitals, medicines..."
                    className="w-full bg-background border border-border rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-hs-gradient-middle"
                />
            </div>

            <div className="flex items-center space-x-4">
                <div className="relative cursor-pointer">
                    <Bell size={22} className="text-foreground" />
                    <span className="absolute -top-1 -right-1 flex h-4 w-4">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 items-center justify-center text-white text-xs">4</span>
                    </span>
                </div>
                <div className="w-9 h-9 rounded-full bg-gradient-to-r from-hs-gradient-start via-hs-gradient-middle to-hs-gradient-end flex items-center justify-center text-white font-bold cursor-pointer">
                    R
                </div>
            </div>
        </header>
    );
};

export default Header;