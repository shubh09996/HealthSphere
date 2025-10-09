import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, Droplets, ShieldAlert, FileText, Pill, CheckCircle } from 'lucide-react';
import PrescriptionWriter from './prescriptions/PrescriptionWriter';
import { useNavigate } from 'react-router-dom';

const NowServingCard = ({ nowServingPatient, onConsultationDone }) => {
    const [timer, setTimer] = useState(0);
    const [isPrescriptionWriterOpen, setIsPrescriptionWriterOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Reset timer when the patient changes
        setTimer(0);

        if (nowServingPatient) {
            const interval = setInterval(() => {
                setTimer(prev => prev + 1);
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [nowServingPatient]);

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
        const secs = (seconds % 60).toString().padStart(2, '0');
        return `${mins}:${secs}`;
    };

    if (!nowServingPatient) {
        return (
            <div className="bg-card p-6 rounded-xl border-2 border-dashed border-gray-200 dark:border-gray-700 text-center">
                <p className="text-muted-foreground">No patient is currently being served.</p>
                <p className="text-sm text-muted-foreground mt-2">Click "Next Patient" in the queue to begin.</p>
            </div>
        );
    }

    return (
        <motion.div 
            className="bg-card p-6 rounded-xl border-2 border-primary/40 shadow-lg"
            key={nowServingPatient.id} // Add key to re-animate on patient change
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }}
        >
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                <h3 className="font-bold text-lg text-foreground">Now Serving: <span className="text-primary">{nowServingPatient.patient.name}</span></h3>
                <div className="flex items-center gap-4">
                    <div className="font-mono text-sm px-3 py-1 bg-primary/20 text-primary rounded-full">{formatTime(timer)}</div>
                    {/* NEW: Consultation Done button */}
                    <button 
                        onClick={onConsultationDone} 
                        className="flex items-center gap-2 text-sm font-semibold py-2 px-3 rounded-lg bg-green-500 text-white hover:bg-green-600"
                    >
                        <CheckCircle size={16}/> Mark as Done
                    </button>
                </div>
            </div>
            {/* ... (rest of the component is the same) ... */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4 border-t border-border pt-4">
                <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Quick Vitals</h4>
                    <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2"><Heart size={14} className="text-red-500"/> BP: <span className="font-semibold">{nowServingPatient.patient.vitals.bloodPressure}</span></div>
                        <div className="flex items-center gap-2"><Droplets size={14} className="text-blue-500"/> Sugar: <span className="font-semibold">{nowServingPatient.patient.vitals.bloodSugar}</span></div>
                    </div>
                </div>
                 <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Allergies</h4>
                     <div className="flex flex-wrap gap-2">
                        {nowServingPatient.patient.allergies.map(allergy => <span key={allergy} className="text-xs px-2 py-1 bg-red-100 text-red-800 rounded-full font-medium">{allergy}</span>)}
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end gap-2">
                     <button 
                        onClick={() => navigate(`/doctor/patients?patientId=${nowServingPatient.patient.id}`)}
                        className="flex items-center justify-center gap-2 text-sm font-semibold py-2 px-3 rounded-lg border border-border hover:bg-muted"
                    >
                        <FileText size={14}/> Full History
                    </button>
                     <button 
                        onClick={() => setIsPrescriptionWriterOpen(true)}
                        className="flex items-center justify-center gap-2 text-sm font-semibold py-2 px-3 rounded-lg border border-primary bg-primary/10 text-primary hover:bg-primary/20"
                    >
                        <Pill size={14}/> Prescribe
                    </button>
                </div>
            </div>

            <PrescriptionWriter 
                isOpen={isPrescriptionWriterOpen}
                onClose={() => setIsPrescriptionWriterOpen(false)}
                preselectedPatient={nowServingPatient.patient}
            />
            
            {/* NEW: Patient Detail Drawer */}
        </motion.div>
    );
};

export default NowServingCard;