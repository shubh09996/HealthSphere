import React from 'react';
import { User, Calendar } from 'lucide-react';

const UpcomingAppointments = () => {
    return (
        <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-foreground">Upcoming Appointments</h2>
                <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors text-sm flex items-center gap-2">
                    <Calendar size={16} /> Book New
                </button>
            </div>
            <p className="text-muted-foreground mb-4">Manage your scheduled consultations</p>
            
            <div className="space-y-4">
                <div className="bg-background p-4 rounded-lg border border-border">
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                        <div className="flex items-center gap-4">
                            <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-full">
                                <User className="text-blue-600 dark:text-blue-400" />
                            </div>
                            <div>
                                <h4 className="font-bold text-foreground">Dr. Anjali Sharma</h4>
                                <p className="text-sm text-muted-foreground">Cardiology • City Hospital</p>
                                <p className="text-sm text-muted-foreground mt-1">Oct 7, 2025  •  10:30 AM</p>
                            </div>
                        </div>
                        <div className="mt-4 sm:mt-0 flex flex-col items-start sm:items-end">
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full dark:bg-blue-900/50 dark:text-blue-300">waiting</span>
                            <p className="text-sm text-muted-foreground mt-2">Token: #42</p>
                        </div>
                    </div>
                    <div className="border-t border-border mt-4 pt-4 flex flex-col sm:flex-row justify-between items-center gap-2">
                        <div className="flex gap-4">
                            <button className="text-sm text-muted-foreground font-semibold hover:text-foreground">Reschedule</button>
                            <button className="text-sm text-red-500 font-semibold hover:text-red-700">Cancel</button>
                        </div>
                        <a href="#" className="text-sm font-semibold bg-gradient-to-r from-hs-gradient-start via-hs-gradient-middle to-hs-gradient-end text-transparent bg-clip-text">
                            View Queue →
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpcomingAppointments;