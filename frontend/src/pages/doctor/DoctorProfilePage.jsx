import React from 'react';
import { motion } from 'framer-motion';
// UPDATED: 'User' icon has been added to the import list
import { Edit, CheckCircle, Briefcase, Star, Clock, Brain, Users, BarChart2, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { doctorProfileData as data } from '../../data/doctorProfileData';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';

const InfoCard = ({ title, icon, children }) => (
    <div className="bg-card p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
            <div className="bg-primary/10 text-primary p-2 rounded-lg">{icon}</div>
            <h3 className="font-bold text-lg text-foreground">{title}</h3>
        </div>
        {children}
    </div>
);

const DoctorProfilePage = () => {
    return (
        <div className="space-y-8">
            {/* Profile Header */}
            <div className="bg-card p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-md flex flex-col sm:flex-row items-center gap-6">
                <img src={data.personalInfo.pfp} alt={data.personalInfo.name} className="w-28 h-28 rounded-full border-4 border-primary/50"/>
                <div className="flex-1 text-center sm:text-left">
                    <div className="flex items-center justify-center sm:justify-start gap-2">
                        <h1 className="text-3xl font-bold text-foreground">{data.personalInfo.name}</h1>
                        {data.personalInfo.isVerified && <CheckCircle className="text-green-500" />}
                    </div>
                    <p className="text-primary font-semibold">{data.personalInfo.specialty}</p>
                    <p className="text-sm text-muted-foreground mt-1">{data.personalInfo.qualifications} • {data.personalInfo.experience} years experience</p>
                </div>
                <Link to="/doctor/settings/profile" className="flex items-center gap-2 font-semibold py-2 px-4 rounded-lg bg-muted text-foreground hover:bg-border">
                    <Edit size={16}/> Edit Profile
                </Link>
            </div>

            {/* Main Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column */}
                <div className="lg:col-span-2 space-y-8">
                    <InfoCard title="About Me" icon={<User size={20}/>}>
                        <p className="text-muted-foreground leading-relaxed">{data.personalInfo.bio}</p>
                    </InfoCard>

                    <InfoCard title="Performance" icon={<BarChart2 size={20}/>}>
                        <div className="grid grid-cols-3 gap-4 text-center mb-6">
                            <div><p className="text-3xl font-bold">{data.performance.totalPatients}+</p><p className="text-sm text-muted-foreground">Total Patients</p></div>
                            <div><p className="text-3xl font-bold">{data.performance.consultationsThisMonth}</p><p className="text-sm text-muted-foreground">This Month</p></div>
                            <div><p className="text-3xl font-bold flex items-center justify-center gap-1">{data.performance.avgRating}<Star size={18} className="text-yellow-400"/></p><p className="text-sm text-muted-foreground">Avg. Rating</p></div>
                        </div>
                        <div className="h-48 w-full">
                            <ResponsiveContainer><LineChart data={data.performance.monthlyConsultations}><XAxis dataKey="month" fontSize={12} tickLine={false} axisLine={false}/><YAxis fontSize={12} tickLine={false} axisLine={false}/><Tooltip/><Line type="monotone" dataKey="count" stroke="var(--primary)" strokeWidth={2} /></LineChart></ResponsiveContainer>
                        </div>
                    </InfoCard>
                    
                    <InfoCard title="Patient Reviews" icon={<Users size={20}/>}>
                        <div className="space-y-4">
                            {data.reviews.map((review, i) => (
                                <div key={i} className="border-b border-border pb-2 last:border-b-0 last:pb-0">
                                    <div className="flex justify-between items-center">
                                        <p className="font-semibold">{review.patientName}</p>
                                        <div className="flex items-center gap-1 text-sm font-bold">{review.rating} <Star size={14} className="text-yellow-400"/></div>
                                    </div>
                                    <p className="text-sm text-muted-foreground italic">"{review.comment}"</p>
                                </div>
                            ))}
                        </div>
                    </InfoCard>
                </div>

                {/* Right Column */}
                <div className="lg:col-span-1 space-y-8">
                    <InfoCard title="Expertise" icon={<Brain size={20}/>}>
                         <div className="flex flex-wrap gap-2">
                            {data.expertise.map(skill => <span key={skill} className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full font-medium">{skill}</span>)}
                        </div>
                    </InfoCard>
                    
                    <InfoCard title="Work Schedule" icon={<Clock size={20}/>}>
                        <div className="space-y-2 text-sm">
                            {Object.entries(data.workSchedule).map(([day, time]) => (
                                <div key={day} className="flex justify-between">
                                    <span className="font-semibold text-foreground">{day}</span>
                                    <span className={time === 'Off' ? 'text-red-500 font-semibold' : 'text-muted-foreground'}>{time}</span>
                                </div>
                            ))}
                        </div>
                    </InfoCard>
                </div>
            </div>
        </div>
    );
};

export default DoctorProfilePage;