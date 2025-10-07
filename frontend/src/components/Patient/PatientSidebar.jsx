import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Calendar, FileText, Pill, BarChart2, CreditCard, Settings, LifeBuoy } from 'lucide-react';
// import { motion } from 'framer-motion'; // Remove motion import
// import { useTheme } from '../../context/ThemeContext'; // Remove useTheme import

const SidebarNavLink = ({ to, icon: Icon, text }) => (
    <NavLink
        to={to}
        className={({ isActive }) =>
            `w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                isActive 
                ? 'bg-gradient-to-r from-[#0096C7] to-[#2A9D8F] text-white shadow-md' 
                // FIX: Light mode me hover effect ke liye text change
                : 'text-muted-foreground hover:bg-muted hover:text-foreground'
            }`
        }
    >
        <Icon size={22} />
        <span className="font-semibold">{text}</span>
    </NavLink>
);

const PatientSidebar = () => {
    const navItems = [
        { icon: Home, text: 'Dashboard', path: '/patient/dashboard' },
        { icon: Calendar, text: 'Appointments', path: '/patient/appointments' },
        { icon: FileText, text: 'Prescriptions', path: '/patient/prescriptions' },
        { icon: Pill, text: 'Medicine Finder', path: '/patient/medicine-finder' },
        { icon: BarChart2, text: 'Health Records', path: '/patient/health-records' },
        { icon: CreditCard, text: 'Billing', path: '/patient/billing' },
        { icon: Settings, text: 'Settings', path: '/patient/settings' }
    ];
    // const { theme, toggleTheme } = useTheme(); // Remove theme and toggleTheme

    return (
        // FIX 1: Hardcoded background ko 'bg-card' se replace kiya, jo theme ke hisab se badlega.
        <aside className="w-full h-full bg-card text-foreground flex flex-col p-4 border-r border-border">
            {/* Logo yahan se hata diya gaya hai, jo sahi hai kyunki woh Header me hai */}
            
            <nav className="flex-1 flex flex-col space-y-2 mt-8">
                {navItems.map(item => (
                    <SidebarNavLink 
                        key={item.text}
                        to={item.path}
                        icon={item.icon}
                        text={item.text}
                    />
                ))}
            </nav>

            <div className="mt-auto">
                {/* Theme Toggle Button - Removed from here */}
                
                {/* FIX 3: Is box ka background bhi 'bg-muted' kar diya hai */}
                <div className="bg-muted rounded-lg p-4 text-center">
                    <LifeBuoy size={32} className="mx-auto text-muted-foreground mb-2" />
                    <h3 className="font-bold text-foreground">Need Help?</h3>
                    <p className="text-sm text-muted-foreground mt-1">Contact support 24/7</p>
                    <button className="mt-4 text-sm font-semibold bg-gradient-to-r from-hs-gradient-start via-hs-gradient-middle to-hs-gradient-end text-transparent bg-clip-text">
                        Get Support
                    </button>
                </div>
            </div>
        </aside>
    );
};

export default PatientSidebar;