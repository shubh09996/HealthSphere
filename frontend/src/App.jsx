import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Layouts
import PublicLayout from './components/patient/PublicLayout.jsx';
import PatientDashboardLayout from './components/patient/PatientDashboardLayout.jsx';

// Public Pages
import HomePage from './pages/HomePage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import SignupPage from './pages/SignupPage.jsx';

// Patient Pages
import PatientDashboardPage from './pages/patient/PatientDashboardPage.jsx';
import AppointmentsPage from './pages/patient/AppointmentsPage.jsx';
import BookAppointmentPage from './pages/patient/BookAppointmentPage.jsx';
import PrescriptionsPage from './pages/patient/PrescriptionsPage.jsx';
import MedicineFinderPage from './pages/patient/MedicineFinderPage.jsx';
import MedicineDetailPage from './pages/patient/MedicineDetailPage.jsx';
import HealthRecordsPage from './pages/patient/HealthRecordsPage.jsx';
import BillingPage from './pages/patient/BillingPage.jsx';
import PatientProfilePage from './pages/patient/PatientProfilePage.jsx';
import NotificationsPage from './pages/patient/NotificationsPage.jsx'; // NEW: Notifications page import

// Settings Pages
import SettingsPage from './pages/patient/SettingsPage.jsx';
import ProfileSettings from './components/patient/settings/ProfileSettings.jsx';
import SecuritySettings from './components/patient/settings/SecuritySettings.jsx';
import NotificationSettings from './components/patient/settings/NotificationSettings.jsx';


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
          <Route path="medicine-finder" element={<MedicineFinderPage />} />
          <Route path="medicine-finder/:medicineId" element={<MedicineDetailPage />} />
          <Route path="health-records" element={<HealthRecordsPage />} />
          <Route path="billing" element={<BillingPage />} />
          <Route path="profile" element={<PatientProfilePage />} />
          
          {/* UPDATED: Route for the Notifications Page */}
          <Route path="notifications" element={<NotificationsPage />} />

          <Route path="settings" element={<SettingsPage />}>
            <Route index element={<Navigate to="profile" replace />} />
            <Route path="profile" element={<ProfileSettings />} />
            <Route path="security" element={<SecuritySettings />} />
            <Route path="notifications" element={<NotificationSettings />} />
          </Route>
          
        </Route>
      </Routes>
    </div>
  );
}

export default App;