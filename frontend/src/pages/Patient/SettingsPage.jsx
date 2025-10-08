import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { User, Shield, Bell } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const settingsNav = [
    { name: 'Profile', href: '/patient/settings/profile', icon: User },
    { name: 'Security', href: '/patient/settings/security', icon: Shield },
    { name: 'Notifications', href: '/patient/settings/notifications', icon: Bell },
];

const SettingsPage = () => {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-foreground">Settings</h1>
                <p className="text-muted-foreground mt-1">Manage your account, profile, and notification preferences.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Left Column: Navigation */}
                <aside className="md:col-span-1">
                    <nav className="flex flex-col space-y-2">
                        {settingsNav.map((item) => (
                            <NavLink
                                key={item.name}
                                to={item.href}
                                className={({ isActive }) =>
                                    `flex items-center gap-3 px-4 py-2 rounded-md font-semibold transition-colors ${
                                        isActive
                                            ? 'bg-primary/10 text-primary'
                                            : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                                    }`
                                }
                            >
                                <item.icon size={18} />
                                <span>{item.name}</span>
                            </NavLink>
                        ))}
                    </nav>
                </aside>

                {/* Right Column: Content */}
                <main className="md:col-span-3">
                    <AnimatePresence mode="wait">
                         <motion.div
                            key={location.pathname} // Re-animate on route change
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Outlet /> 
                        </motion.div>
                    </AnimatePresence>
                </main>
            </div>
        </div>
    );
};

export default SettingsPage;