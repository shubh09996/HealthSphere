import React from 'react';
import * as LucideIcons from 'lucide-react';
import { motion } from 'framer-motion';

const Step2SelectDepartment = ({ onNext, details, onBack }) => {
    // Dynamic icon rendering
    const renderIcon = (iconName) => {
        const Icon = LucideIcons[iconName] || LucideIcons['Stethoscope'];
        return <Icon className="text-primary mb-2" size={32} />;
    };
    return (
        <div className="bg-card p-6 rounded-xl shadow-md">
            <LucideIcons.ArrowLeft size={18} onClick={onBack} className="cursor-pointer text-muted-foreground mb-4"/>
            <h2 className="text-2xl font-bold text-foreground">Select a Department</h2>
            <p className="text-muted-foreground mb-6">At <span className="font-semibold text-primary">{details.hospital.name}</span></p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {details.hospital.departments.map(dept => (
                    <motion.div key={dept.id} onClick={() => onNext({ department: dept })}
                        className="flex flex-col items-center justify-center p-6 border border-border rounded-lg cursor-pointer hover:bg-muted text-center"
                        whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}>
                        {renderIcon(dept.icon)}
                        <h3 className="font-semibold text-foreground">{dept.name}</h3>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
export default Step2SelectDepartment;