import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Calendar, FileText, Pill, BarChart2, CreditCard, Settings, LifeBuoy } from 'lucide-react';

const SidebarNavLink = ({ to, icon: Icon, text }) => (
    <NavLink
        to={to}
        className={({ isActive }) =>
            `w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                isActive 
                ? 'bg-gradient-to-r from-[#0096C7] to-[#2A9D8F] text-white shadow-md' 
                : 'text-gray-400 hover:bg-gray-700 hover:text-white'
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

    return (
        <aside className="w-full h-full bg-[#111827] text-white flex flex-col p-4">
            <div className="flex items-center space-x-2 mb-10 px-2">
                <div className="bg-gradient-to-r from-hs-gradient-start via-hs-gradient-middle to-hs-gradient-end p-2 rounded-md">
                    <span className="text-white font-bold text-lg">H</span>
                </div>
                <span className="text-xl font-semibold">HealthSphere</span>
            </div>

            <nav className="flex-1 flex flex-col space-y-2">
                {navItems.map(item => (
                    <SidebarNavLink 
                        key={item.text}
                        to={item.path}
                        icon={item.icon}
                        text={item.text}
                    />
                ))}
            </nav>

            <div className="mt-auto bg-gray-800 rounded-lg p-4 text-center">
                <LifeBuoy size={32} className="mx-auto text-gray-400 mb-2" />
                <h3 className="font-bold text-white">Need Help?</h3>
                <p className="text-sm text-gray-400 mt-1">Contact support 24/7</p>
                <button className="mt-4 text-sm font-semibold bg-gradient-to-r from-hs-gradient-start via-hs-gradient-middle to-hs-gradient-end text-transparent bg-clip-text">
                    Get Support
                </button>
            </div>
        </aside>
    );
};

export default PatientSidebar;