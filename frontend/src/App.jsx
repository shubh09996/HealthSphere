import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Layouts
import PublicLayout from './components/Patient/PublicLayout.jsx';
import PatientDashboardLayout from './components/Patient/PatientDashboardLayout.jsx';

// Public Pages
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

// Patient Pages
import PatientDashboardPage from './pages/Patient/DashboardPage.jsx';
import AppointmentsPage from './pages/patient/AppointmentsPage';
import PrescriptionsPage from './pages/patient/PrescriptionsPage';

// Placeholder for other pages
const Placeholder = ({ title }) => (
    <div className="bg-card p-6 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold text-foreground">{title}</h1>
        <p className="text-muted-foreground mt-2">This is a placeholder page for {title}.</p>
    </div>
);


function App() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Routes>
        {/* --- PUBLIC ROUTES --- */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Route>

        {/* --- PATIENT DASHBOARD ROUTES --- */}
        <Route path="/patient" element={<PatientDashboardLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<PatientDashboardPage />} />
          <Route path="appointments" element={<AppointmentsPage />} />
          <Route path="prescriptions" element={<PrescriptionsPage />} />
          <Route path="medicine-finder" element={<Placeholder title="Medicine Finder" />} />
          <Route path="health-records" element={<Placeholder title="Health Records" />} />
          <Route path="billing" element={<Placeholder title="Billing" />} />
          <Route path="settings" element={<Placeholder title="Settings" />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;