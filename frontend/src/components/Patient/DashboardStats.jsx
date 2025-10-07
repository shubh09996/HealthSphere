import React from 'react';
import { Ticket, Calendar, FileText, Award } from 'lucide-react';

const StatCard = ({ icon: Icon, title, value, detail, link, progress, colorClass }) => (
    <div className="bg-card p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
        <div className="flex justify-between items-start">
            <h3 className="font-semibold text-muted-foreground">{title}</h3>
            <Icon className="text-muted-foreground" />
        </div>
        <div className="mt-4">
            {progress !== undefined ? (
                <div>
                    <div className="flex justify-between items-end mb-1">
                        <span className="font-bold text-3xl text-foreground">{value}</span>
                        <span className="text-sm text-muted-foreground">{detail}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                        <div className={`${colorClass} h-2 rounded-full`} style={{ width: `${progress}%` }}></div>
                    </div>
                </div>
            ) : (
                <p className="font-bold text-4xl text-foreground">{value}</p>
            )}
        </div>
        <div className="mt-4">
            <a href="#" className="text-sm font-semibold bg-gradient-to-r from-hs-gradient-start via-hs-gradient-middle to-hs-gradient-end text-transparent bg-clip-text">
                {link}
            </a>
        </div>
    </div>
);

const DashboardStats = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard 
                icon={Ticket} 
                title="Current Token" 
                value="Next: Oct 7, 10:30 AM" 
                detail="+18 min"
                link="We'll notify you 10 mins before"
                progress={40}
                colorClass="bg-blue-500"
            />
            <StatCard 
                icon={Calendar} 
                title="Appointments" 
                value="2" 
                link="View all →"
            />
            <StatCard 
                icon={FileText} 
                title="Prescriptions" 
                value="2" 
                link="View prescriptions →"
            />
            <StatCard 
                icon={Award} 
                title="Reward Points" 
                value="245" 
                link="Redeem rewards →"
            />
        </div>
    );
};

export default DashboardStats;