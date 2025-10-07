import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import PatientSidebar from './PatientSidebar.jsx';
import PatientHeader from './Header.jsx'; // Dashboard Header

const PatientDashboardLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const headerHeight = '64px'; // Approximate height of the fixed header

    return (
        <div className="flex flex-col min-h-screen bg-background">
            <PatientHeader isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

            <div className="flex flex-1">
                {/* Desktop Sidebar */}
                <div className="hidden md:block fixed left-0 w-64 border-r border-border bg-card" style={{ top: headerHeight, height: `calc(100vh - ${headerHeight})` }}>
                    <PatientSidebar />
                </div>

                {/* Mobile Sidebar */}
                {isSidebarOpen && (
                    <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsSidebarOpen(false)}>
                        <div 
                            className={`fixed left-0 w-64 bg-card transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
                            style={{ top: headerHeight, height: `calc(100vh - ${headerHeight})` }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <PatientSidebar />
                        </div>
                    </div>
                )}

                {/* Main Content */}
                <div className="flex-1 flex flex-col md:ml-64">
                    <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto pt-16">
                        <Outlet /> {/* Yahan dashboard ke pages render honge */}
                    </main>
                </div>
            </div>
        </div>
    );
};

export default PatientDashboardLayout;