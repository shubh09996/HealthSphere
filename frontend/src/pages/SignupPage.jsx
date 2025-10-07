import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
    Stethoscope, User, Heart, Shield, Eye, EyeOff, Mail, Lock, Building, ShieldCheck, HeartHandshake, Sparkles 
} from 'lucide-react';

// Self-contained Google Icon to remove dependency errors
const GoogleIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" fill="#FFC107"/>
        <path d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" fill="#FF3D00"/>
        <path d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" fill="#4CAF50"/>
        <path d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571l6.19,5.238C42.022,35.244,44,30.036,44,24C44,22.659,43.862,21.35,43.611,20.083z" fill="#1976D2"/>
    </svg>
);

// Data for role selection
const roleData = {
    patient: { icon: User },
    doctor: { icon: Stethoscope },
    shop: { icon: Building },
    donor: { icon: Heart },
    admin: { icon: Shield }
};

const PasswordStrengthMeter = ({ password }) => {
    const [strength, setStrength] = useState({ score: 0, label: 'Weak', color: 'bg-red-500' });

    useEffect(() => {
        let score = 0;
        if (password.length > 7) score++;
        if (/[A-Z]/.test(password)) score++;
        if (/[0-9]/.test(password)) score++;
        if (/[^A-Za-z0-9]/.test(password)) score++;
        
        let label = 'Weak';
        let color = 'bg-red-500';

        switch(score) {
            case 1: label = 'Weak'; color = 'bg-red-500'; break;
            case 2: label = 'Fair'; color = 'bg-orange-500'; break;
            case 3: label = 'Good'; color = 'bg-yellow-500'; break;
            case 4: label = 'Strong'; color = 'bg-green-500'; break;
            default: label = 'Weak'; color = 'bg-red-500';
        }

        if (password.length === 0) {
            setStrength({ score: 0, label: 'Weak', color: 'bg-gray-300 dark:bg-gray-700' });
        } else {
            setStrength({ score, label, color });
        }
    }, [password]);

    return (
        <div className="flex items-center gap-2 mt-1">
            <div className="w-full bg-gray-200 dark:bg-muted/30 rounded-full h-2">
                <motion.div 
                    className={`h-2 rounded-full ${strength.color}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${(strength.score / 4) * 100}%` }}
                    transition={{ duration: 0.5 }}
                />
            </div>
            <span className="text-xs text-muted-foreground w-16 text-right">{strength.label}</span>
        </div>
    );
};

const SignupPage = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { when: "beforeChildren", staggerChildren: 0.1, delayChildren: 0.2 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.98 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
    };
    
    const featureItemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
    };

    return (
        <motion.div
            className="min-h-screen relative flex items-start justify-center p-4 pt-20 pb-8 overflow-x-hidden"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <div className="absolute inset-0 z-0 overflow-hidden">
                <motion.div className="absolute top-1/4 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-hs-gradient-start rounded-full mix-blend-multiply filter blur-2xl opacity-30 dark:opacity-20 animate-blob" />
                <motion.div className="absolute top-1/2 right-1/4 w-64 h-64 sm:w-80 sm:h-80 bg-hs-gradient-middle rounded-full mix-blend-multiply filter blur-2xl opacity-30 dark:opacity-20 animate-blob animation-delay-2000" />
                <motion.div className="absolute bottom-1/4 left-1/3 w-56 h-56 sm:w-72 sm:h-72 bg-hs-gradient-end rounded-full mix-blend-multiply filter blur-2xl opacity-30 dark:opacity-20 animate-blob animation-delay-4000" />
            </div>

            <div className="relative z-10 flex flex-col xl:flex-row items-stretch justify-center w-full max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-6xl gap-4 lg:gap-8">
                {/* Left Promotional Panel */}
                <motion.div
                    className="xl:w-1/2 p-6 bg-card rounded-2xl shadow-2xl border border-border flex flex-col justify-center space-y-3 backdrop-blur-md dark:bg-card/70"
                    variants={itemVariants}
                >
                     <div className="flex items-center space-x-2">
                        <div className="bg-gradient-to-r from-hs-gradient-start via-hs-gradient-middle to-hs-gradient-end p-2 rounded-md">
                            <span className="text-primary-foreground font-bold text-lg">H</span>
                        </div>
                        <span className="text-2xl font-semibold bg-gradient-to-r from-hs-gradient-start via-hs-gradient-middle to-hs-gradient-end text-transparent bg-clip-text">HealthSphere</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">Join Our Community</h2>
                    <p className="text-muted-foreground text-base sm:text-lg">Your health, secured and simplified. Create an account to get started.</p>

                    <motion.div className="space-y-5" initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
                        <motion.div className="flex items-start space-x-4" variants={featureItemVariants}>
                            <ShieldCheck size={24} className="text-hs-gradient-middle flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="text-lg sm:text-xl font-semibold text-foreground">Data Privacy First</h3>
                                <p className="text-muted-foreground text-sm">Your health data is encrypted and secure with us.</p>
                            </div>
                        </motion.div>
                        <motion.div className="flex items-start space-x-4" variants={featureItemVariants}>
                            <HeartHandshake size={24} className="text-hs-gradient-middle flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="text-lg sm:text-xl font-semibold text-foreground">Community Trust</h3>
                                <p className="text-muted-foreground text-sm">Join thousands of patients, doctors, and donors.</p>
                            </div>
                        </motion.div>
                         <motion.div className="flex items-start space-x-4" variants={featureItemVariants}>
                            <Sparkles size={24} className="text-hs-gradient-middle flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="text-lg sm:text-xl font-semibold text-foreground">Seamless Experience</h3>
                                <p className="text-muted-foreground text-sm">A unified platform for all your healthcare needs.</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Right Signup Form */}
                <motion.div
                    className="xl:w-1/2 p-6 bg-card rounded-2xl shadow-2xl border border-border flex flex-col justify-center space-y-3 backdrop-blur-md dark:bg-card/70"
                    variants={itemVariants}
                >
                    <h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-hs-gradient-start via-hs-gradient-middle to-hs-gradient-end text-transparent bg-clip-text text-center">Create Account</h2>
                    
                    <div className="flex items-center gap-2">
                        <div className="flex-grow border-t border-border"></div>
                        <span className="text-muted-foreground text-xs">OR SIGN UP WITH EMAIL</span>
                        <div className="flex-grow border-t border-border"></div>
                    </div>

                    {/* Form Inputs */}
                    <div className="relative group">
                        <input type="text" placeholder="Full Name" className="w-full p-3 pl-10 pr-4 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-hs-gradient-middle dark:bg-muted/30" />
                        <User size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-hs-gradient-middle transition-colors" />
                    </div>
                     <div className="relative group">
                        <input type="email" placeholder="your.email@example.com" className="w-full p-3 pl-10 pr-4 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-hs-gradient-middle dark:bg-muted/30" />
                        <Mail size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-hs-gradient-middle transition-colors" />
                    </div>
                    <div className="relative group">
                        <input onChange={(e) => setPassword(e.target.value)} type={showPassword ? 'text' : 'password'} placeholder="Password" className="w-full p-3 pl-10 pr-10 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-hs-gradient-middle dark:bg-muted/30" />
                        <Lock size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-hs-gradient-middle transition-colors" />
                        <motion.button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 pr-3 flex items-center text-muted-foreground hover:text-foreground z-10" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </motion.button>
                    </div>
                    <PasswordStrengthMeter password={password} />

                     <div className="relative group">
                        <input onChange={(e) => setConfirmPassword(e.target.value)} type={showConfirmPassword ? 'text' : 'password'} placeholder="Confirm Password" className={`w-full p-3 pl-10 pr-10 border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 transition-all duration-300 dark:bg-muted/30 ${password && confirmPassword && password !== confirmPassword ? 'border-red-500 focus:ring-red-500' : 'border-border focus:ring-hs-gradient-middle'}`} />
                        <Lock size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-hs-gradient-middle transition-colors" />
                        <motion.button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute inset-y-0 right-0 pr-3 flex items-center text-muted-foreground hover:text-foreground z-10" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                            {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </motion.button>
                    </div>

                    <div className="flex justify-between items-center text-sm">
                        <label className="flex items-center space-x-2 text-muted-foreground cursor-pointer group">
                            <input type="checkbox" className="form-checkbox h-4 w-4 rounded-sm text-hs-gradient-middle focus:ring-hs-gradient-middle border-border bg-background transition-colors duration-300 dark:bg-muted/30 dark:border-muted/50" />
                            <span>I agree to the <a href="#" className="text-hs-gradient-middle hover:underline">Terms & Conditions</a></span>
                        </label>
                    </div>

                    <motion.button
                        className="w-full bg-gradient-to-r from-hs-gradient-start via-hs-gradient-middle to-hs-gradient-end text-primary-foreground py-3 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl hover:opacity-95 transition-all duration-300"
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                    >
                        Create Account
                    </motion.button>

                    <div className="flex items-center gap-2">
                        <div className="flex-grow border-t border-border"></div>
                        <span className="text-muted-foreground text-xs">OR CONTINUE WITH</span>
                        <div className="flex-grow border-t border-border"></div>
                    </div>
                    <motion.button className="w-full flex items-center justify-center gap-3 py-3 border border-border rounded-lg bg-background hover:bg-muted transition-colors dark:bg-muted/30 dark:hover:bg-muted/50" whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                        <GoogleIcon />
                        <span className="font-semibold text-foreground">Sign up with Google</span>
                    </motion.button>

                    <p className="text-center text-muted-foreground text-sm sm:text-base">
                        Already have an account? 
                        <a href="#" className="font-medium bg-gradient-to-r from-hs-gradient-start via-hs-gradient-middle to-hs-gradient-end text-transparent bg-clip-text hover:underline ml-1">
                            Sign In
                        </a>
                    </p>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default SignupPage;

