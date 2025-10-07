import React from 'react';
import PremiumBanner from '../../components/Patient/PremiumBanner.jsx';
import DashboardStats from '../../components/Patient/DashboardStats.jsx';
import UpcomingAppointments from '../../components/Patient/UpcomingAppointments.jsx';
import EPrescriptions from '../../components/Patient/EPrescriptions.jsx';
import { MessageSquare } from 'lucide-react';

const PatientDashboardPage = () => {
    return (
        <div className="flex flex-col gap-6">
            <PremiumBanner />

            <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Welcome back, Ravi! 👋</h1>
                <p className="text-sm sm:text-base text-muted-foreground mt-1">Here's your health overview for today</p>
            </div>

            <DashboardStats />

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                <UpcomingAppointments />
                <EPrescriptions />
            </div>

            <div className="fixed bottom-5 right-5 z-30">
                <button className="bg-gradient-to-r from-hs-gradient-start via-hs-gradient-middle to-hs-gradient-end text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform">
                    <MessageSquare size={24} />
                </button>
            </div>
        </div>
    );
};

export default PatientDashboardPage;