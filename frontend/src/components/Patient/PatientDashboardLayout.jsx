import React from 'react';
import { Outlet } from 'react-router-dom';
import PatientSidebar from '../Patient/PatientSidebar.jsx';
import Header from '../Patient/Header.jsx'; // Dashboard Header

const PatientDashboardLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

    return (
        <div className="flex min-h-screen bg-background">
            {/* Desktop Sidebar */}
            <div className="hidden md:block fixed top-0 left-0 h-full w-64">
                <PatientSidebar />
            </div>

            {/* Mobile Sidebar */}
            <div 
                className={`md:hidden fixed inset-0 bg-black bg-opacity-60 z-50 transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} 
                onClick={() => setIsSidebarOpen(false)}
            >
                <div 
                    className={`fixed top-0 left-0 h-full w-64 bg-card transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <PatientSidebar />
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col md:ml-64">
                <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
                
                <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
                    <Outlet /> {/* Yahan dashboard ke pages render honge */}
                </main>
            </div>
        </div>
    );
};

export default PatientDashboardLayout;