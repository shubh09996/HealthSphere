import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Layouts
import PublicLayout from './components/Patient/PublicLayout.jsx';
import PatientDashboardLayout from './components/Patient/PatientDashboardLayout.jsx';
import DoctorDashboardLayout from './components/doctor/DoctorDashboardLayout.jsx';

// Public Pages
import FeaturesPage from './pages/FeaturesPage.jsx';
import RolesPage from './pages/RolesPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import HomePage from './pages/HomePage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import SignupPage from './pages/SignupPage.jsx';

// Patient Pages (all of them)
import PatientDashboardPage from './pages/Patient/PatientDashboardPage.jsx';
import AppointmentsPage from './pages/Patient/AppointmentsPage.jsx';
import BookAppointmentPage from './pages/Patient/BookAppointmentPage.jsx';
import PrescriptionsPage from './pages/Patient/PrescriptionsPage.jsx';
import MedicineFinderPage from './pages/Patient/MedicineFinderPage.jsx';
import MedicineDetailPage from './pages/Patient/MedicineDetailPage.jsx';
import HealthRecordsPage from './pages/Patient/HealthRecordsPage.jsx';
import BillingPage from './pages/Patient/BillingPage.jsx';
import PatientProfilePage from './pages/Patient/PatientProfilePage.jsx';
import NotificationsPage from './pages/Patient/NotificationsPage.jsx';
import SettingsPage from './pages/Patient/SettingsPage.jsx';
import ProfileSettings from './components/Patient/settings/ProfileSettings.jsx';
import SecuritySettings from './components/Patient/settings/SecuritySettings.jsx';
import NotificationSettings from './components/Patient/settings/NotificationSettings.jsx';

// Doctor Pages
import DoctorDashboardPage from './pages/doctor/DoctorDashboardPage.jsx';
import SchedulePage from './pages/doctor/SchedulePage.jsx'; // NEW: Schedule page import
import MyPatientsPage from './pages/doctor/MyPatientsPage.jsx';
import DoctorPrescriptionsPage from './pages/doctor/DoctorPrescriptionsPage.jsx'; 
import DoctorSettingsPage from './pages/doctor/DoctorSettingsPage.jsx';
import DoctorProfileSettings from './components/doctor/settings/DoctorProfileSettings.jsx';
import ConsultationSettings from './components/doctor/settings/ConsultationSettings.jsx';
import DoctorProfilePage from './pages/doctor/DoctorProfilePage.jsx';
import DoctorNotificationsPage from './pages/doctor/DoctorNotificationsPage.jsx';
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
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/roles" element={<RolesPage />} />
          <Route path="/about" element={<AboutPage />} /> 
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Route>

        {/* --- PATIENT DASHBOARD ROUTES --- */}
        <Route path="/patient" element={<PatientDashboardLayout />}>
            {/* All patient routes are correctly configured here */}
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
            <Route path="notifications" element={<NotificationsPage />} />
            <Route path="settings" element={<SettingsPage />}>
                <Route index element={<Navigate to="profile" replace />} />
                <Route path="profile" element={<ProfileSettings />} />
                <Route path="security" element={<SecuritySettings />} />
                <Route path="notifications" element={<NotificationSettings />} />
            </Route>
        </Route>

        {/* --- DOCTOR DASHBOARD ROUTES --- */}
        <Route path="/doctor" element={<DoctorDashboardLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<DoctorDashboardPage />} />
          
          {/* UPDATED: Functional route for Schedule Page */}
          <Route path="schedule" element={<SchedulePage />} />

          <Route path="patients" element={<MyPatientsPage />} />
          <Route path="prescriptions" element={<DoctorPrescriptionsPage />} />
          <Route path="profile" element={<DoctorProfilePage />} />
          <Route path="notifications" element={<DoctorNotificationsPage />} />

          <Route path="settings" element={<DoctorSettingsPage />}>
            <Route index element={<Navigate to="profile" replace />} />
            <Route path="profile" element={<DoctorProfileSettings />} />
            <Route path="consultation" element={<ConsultationSettings />} />
            <Route path="security" element={<SecuritySettings />} />
            <Route path="notifications" element={<NotificationSettings />} />
          </Route>
        </Route>

      </Routes>
    </div>
  );
}

export default App;