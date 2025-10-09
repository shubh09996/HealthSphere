import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import PrescriptionWriter from '../../components/doctor/prescriptions/PrescriptionWriter';
import PrescriptionHistory from '../../components/doctor/prescriptions/PrescriptionHistory';

const DoctorPrescriptionsPage = () => {
    const [isWriterOpen, setIsWriterOpen] = useState(false);

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-foreground">Prescriptions</h1>
                    <p className="text-muted-foreground mt-1">Create and manage patient prescriptions.</p>
                </div>
                <button 
                    onClick={() => setIsWriterOpen(true)}
                    className="flex items-center justify-center gap-2 font-semibold py-2 px-4 rounded-lg bg-primary text-primary-foreground"
                >
                    <Plus size={18}/> Create New Prescription
                </button>
            </div>

            {/* Prescription Writer will open as a full-screen modal */}
            <PrescriptionWriter isOpen={isWriterOpen} onClose={() => setIsWriterOpen(false)} />

            {/* Prescription History */}
            <PrescriptionHistory />
        </div>
    );
};

export default DoctorPrescriptionsPage;