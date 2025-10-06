import React from 'react';
import { Users, Activity, Briefcase, Heart } from 'lucide-react';

const StatCard = ({ icon, value, label }) => (
  <div className="bg-card p-6 rounded-lg shadow-sm border border-border/75 flex flex-col items-start space-y-2">
    <div className="p-2 bg-muted rounded-md text-primary">
      {icon}
    </div>
    <div>
      <p className="text-3xl font-bold text-foreground">{value}</p>
      <p className="text-muted-foreground font-medium">{label}</p>
    </div>
  </div>
);


const Stats = () => {
  const statsData = [
    { icon: <Users size={24} />, value: '24,583+', label: 'Active Users' },
    { icon: <Activity size={24} />, value: '142+', label: 'Hospitals' },
    { icon: <Briefcase size={24} />, value: '856+', label: 'Medicine Shops' },
    { icon: <Heart size={24} />, value: '3,247+', label: 'Blood Donors' },
  ];

  return (
    <section className="pb-24 md:pb-32">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsData.map((stat, index) => (
          <StatCard key={index} icon={stat.icon} value={stat.value} label={stat.label} />
        ))}
      </div>
    </section>
  );
};

export default Stats;