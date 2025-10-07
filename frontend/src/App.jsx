import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Layouts
import PublicLayout from './components/Patient/PublicLayout.jsx';
import PatientDashboardLayout from './components/Patient/PatientDashboardLayout.jsx';

// Public Pages
import HomePage from './pages/HomePage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import SignupPage from './pages/SignupPage.jsx';

// Patient Pages
import PatientDashboardPage from './pages/Patient/DashboardPage.jsx';
import AppointmentsPage from './pages/Patient/AppointmentsPage.jsx';
import BookAppointmentPage from './pages/Patient/BookAppointmentPage.jsx';
import PrescriptionsPage from './pages/Patient/PrescriptionsPage.jsx';
import MedicineFinderPage from './pages/Patient/MedicineFinderPage.jsx'; // NEW: Medicine Finder Search Page
import MedicineDetailPage from './pages/Patient/MedicineDetailPage.jsx'; // NEW: Medicine Detail Page

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
          <Route path="book-appointment" element={<BookAppointmentPage />} /> 
          <Route path="prescriptions" element={<PrescriptionsPage />} />
          
          {/* UPDATED: Functional routes for Medicine Finder */}
          <Route path="medicine-finder" element={<MedicineFinderPage />} />
          <Route path="medicine-finder/:medicineId" element={<MedicineDetailPage />} />

          <Route path="health-records" element={<Placeholder title="Health Records" />} />
          <Route path="billing" element={<Placeholder title="Billing" />} />
          <Route path="settings" element={<Placeholder title="Settings" />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;