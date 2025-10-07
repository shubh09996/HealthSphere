import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import PatientSidebar from './PatientSidebar.jsx';
import Header from './Header.jsx';
import { useTheme } from '../../context/ThemeContext.jsx';

const PatientDashboardLayout = () => {
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
    // Sidebar collapse state
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const { theme, toggleTheme } = useTheme();

    return (
        // Main container ab flex-col hai
        <div className="flex flex-col h-screen bg-background">
            {/* Header ab hamesha top par rahega */}
            <Header 
                isSidebarOpen={isMobileSidebarOpen} 
                setIsSidebarOpen={setIsMobileSidebarOpen}
                theme={theme}
                toggleTheme={toggleTheme}
            />

            {/* Header ke neeche wala section */}
            <div className="flex flex-1 overflow-hidden">
                {/* --- Desktop Sidebar --- */}
                {/* CHANGED: Width ko state ke hisab se dynamic banaya gaya */}
                <div className={`hidden md:block transition-all duration-300 ease-in-out ${isSidebarCollapsed ? 'w-20' : 'w-64'}`}>
                    <PatientSidebar 
                        isCollapsed={isSidebarCollapsed} 
                        toggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
                    />
                </div>

                {/* --- Mobile Sidebar (Overlay) - Isme koi change nahi hai --- */}
                <div 
                    className={`md:hidden fixed inset-0 bg-black bg-opacity-60 z-50 transition-opacity duration-300 ${isMobileSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} 
                    onClick={() => setIsMobileSidebarOpen(false)}
                >
                    <div 
                        className="fixed top-0 left-0 h-full w-64 bg-card transition-transform duration-300"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <PatientSidebar isCollapsed={false} />
                    </div>
                </div>

                {/* --- Main Content --- */}
                {/* CHANGED: Main content ab flex-1 se automatically space lega. Margin ki zarurat nahi. */}
                <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default PatientDashboardLayout;