import React from 'react';
import { Calendar, Stethoscope, Pill, Heart, Shield } from 'lucide-react';

const RoleCard = ({ icon, title, description, borderColor }) => (
  <div className={`bg-card rounded-xl shadow-lg border-t-4 ${borderColor} p-6 flex flex-col items-start space-y-4 min-h-[200px] justify-between`}>
    <div className="flex flex-col items-start space-y-2">
      <div className="text-primary mb-2">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-foreground">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
    <button className="text-primary hover:underline flex items-center space-x-1 text-sm font-medium">
      <span>Access Dashboard</span>
      <span className="text-lg">→</span>
    </button>
  </div>
);

const RoleSelection = () => {
  const roles = [
    {
      icon: <Calendar size={32} />,
      title: 'Patient',
      description: 'Book appointments, manage prescriptions, find medicines',
      borderColor: 'border-role-patient-border',
    },
    {
      icon: <Stethoscope size={32} />,
      title: 'Doctor',
      description: 'Manage consultations, write prescriptions, track patients',
      borderColor: 'border-role-doctor-border',
    },
    {
      icon: <Pill size={32} />,
      title: 'Medicine Shop',
      description: 'Verify prescriptions, manage inventory, process orders',
      borderColor: 'border-role-medicine-border',
    },
    {
      icon: <Heart size={32} />,
      title: 'Donor',
      description: 'Save lives, respond to blood requests, earn rewards',
      borderColor: 'border-role-donor-border',
    },
    {
      icon: <Shield size={32} />,
      title: 'Admin',
      description: 'Monitor system, manage users, view analytics',
      borderColor: 'border-role-admin-border',
    },
  ];

  return (
    <section className="container pt-8 pb-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-foreground mb-4">Choose Your Role</h2>
        <p className="text-lg text-muted-foreground">Access tailored dashboards designed for your healthcare needs</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {roles.map((role, index) => (
          <RoleCard
            key={index}
            icon={role.icon}
            title={role.title}
            description={role.description}
            borderColor={role.borderColor}
          />
        ))}
      </div>
    </section>
  );
};

export default RoleSelection;
