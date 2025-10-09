import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Calendar, Users, Pill, Settings, ChevronsLeft, ChevronsRight, LifeBuoy, X } from 'lucide-react';

const DoctorSidebar = ({ isCollapsed, toggleCollapse, onCloseMobileSidebar }) => {
    const navItems = [
        { icon: LayoutDashboard, text: 'Dashboard', path: '/doctor/dashboard' },
        { icon: Calendar, text: 'My Schedule', path: '/doctor/schedule' },
        { icon: Users, text: 'My Patients', path: '/doctor/patients' },
        { icon: Pill, text: 'Prescriptions', path: '/doctor/prescriptions' },
        { icon: Settings, text: 'Settings', path: '/doctor/settings' },
    ];

    return (
        <aside className="w-full h-full bg-card text-foreground flex flex-col p-4 border-r border-border relative">
            
            {/* Collapse button for desktop */}
            <button 
                onClick={toggleCollapse} 
                className="absolute -right-3 top-8 z-10 p-1 bg-card border border-border rounded-full text-muted-foreground hover:text-foreground hidden md:block"
            >
                {isCollapsed ? <ChevronsRight size={16} /> : <ChevronsLeft size={16} />}
            </button>

            {/* Logo and Mobile Close Button */}
            <div className={`flex items-center mb-0 transition-all duration-300 ${isCollapsed ? 'justify-center' : 'justify-between px-2'}`}>
                 {/* NEW: Close button for mobile */}
                 {!isCollapsed && (
                    <button onClick={onCloseMobileSidebar} className="p-1 rounded-full hover:bg-muted md:hidden">
                        <X size={20} />
                    </button>
                 )}
            </div>
            
            <nav className="flex-1 flex flex-col space-y-2">
                {navItems.map(item => (
                    <NavLink
                        key={item.text}
                        to={item.path}
                        onClick={onCloseMobileSidebar} // Close on tap
                        // UPDATED: Added gradient for active links
                        className={({ isActive }) => 
                            `flex items-center py-3 rounded-lg transition-all duration-200 ${
                                isCollapsed ? 'px-3 justify-center' : 'px-4 space-x-3'
                            } ${
                                isActive 
                                ? 'bg-gradient-to-r from-[#0096C7] to-[#2A9D8F] text-white shadow-md' 
                                : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                            }`
                        }
                    >
                        <item.icon size={22} className="flex-shrink-0" />
                        {!isCollapsed && <span className="font-semibold whitespace-nowrap">{item.text}</span>}
                    </NavLink>
                ))}
            </nav>

            {!isCollapsed && (
                <div className="mt-auto">
                    <div className="bg-muted rounded-lg p-4 text-center">
                        <LifeBuoy size={32} className="mx-auto text-muted-foreground mb-2" />
                        <h3 className="font-bold text-foreground">Need Help?</h3>
                        <p className="text-sm text-muted-foreground mt-1">Contact support 24/7</p>
                        <button className="mt-4 text-sm font-semibold bg-gradient-to-r from-hs-gradient-start via-hs-gradient-middle to-hs-gradient-end text-transparent bg-clip-text">
                            Get Support
                        </button>
                    </div>
                </div>
            )}
        </aside>
    );
};

export default DoctorSidebar;