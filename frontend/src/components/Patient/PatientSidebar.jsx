import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Calendar, FileText, Pill, BarChart2, CreditCard, Settings, LifeBuoy, ChevronsLeft, ChevronsRight } from 'lucide-react';

const SidebarNavLink = ({ to, icon: Icon, text, isCollapsed }) => (
    <NavLink
        to={to}
        className={({ isActive }) =>
            `w-full flex items-center py-3 rounded-lg transition-all duration-200 ${
                isCollapsed ? 'px-3 justify-center' : 'px-4 space-x-3'
            } ${
                isActive 
                ? 'bg-gradient-to-r from-[#0096C7] to-[#2A9D8F] text-white shadow-md' 
                : 'text-muted-foreground hover:bg-muted hover:text-foreground'
            }`
        }
    >
        <Icon size={22} className="flex-shrink-0" />
        {/* Text ko conditionally render kiya gaya hai */}
        {!isCollapsed && <span className="font-semibold whitespace-nowrap">{text}</span>}
    </NavLink>
);

const PatientSidebar = ({ isCollapsed, toggleCollapse }) => {
    const navItems = [
        { icon: Home, text: 'Dashboard', path: '/patient/dashboard' },
        { icon: Calendar, text: 'Appointments', path: '/patient/appointments' },
        { icon: FileText, text: 'Prescriptions', path: '/patient/prescriptions' },
        { icon: Pill, text: 'Medicine Finder', path: '/patient/medicine-finder' },
        { icon: BarChart2, text: 'Health Records', path: '/patient/health-records' },
        { icon: CreditCard, text: 'Billing', path: '/patient/billing' },
        { icon: Settings, text: 'Settings', path: '/patient/settings' }
    ];

    return (
        <aside className="w-full h-full bg-card text-foreground flex flex-col p-4 border-r border-border relative">
            
            {/* NEW: Collapse/Expand Button */}
            <button 
                onClick={toggleCollapse} 
                className="absolute -right-3 top-8 z-10 p-1 bg-card border border-border rounded-full text-muted-foreground hover:text-foreground hover:bg-muted"
            >
                {isCollapsed ? <ChevronsRight size={16} /> : <ChevronsLeft size={16} />}
            </button>
            
            <nav className="flex-1 flex flex-col space-y-2">
                {navItems.map(item => (
                    <SidebarNavLink 
                        key={item.text}
                        to={item.path}
                        icon={item.icon}
                        text={item.text}
                        isCollapsed={isCollapsed}
                    />
                ))}
            </nav>

            {/* "Need Help?" box ko conditionally render kiya gaya hai */}
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

export default PatientSidebar;