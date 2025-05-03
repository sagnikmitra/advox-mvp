import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Components
import Layout from './components/layout/Layout';

// Pages
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import PracticeAreaPage from './pages/practice-areas/PracticeAreaPage';
import FamilyLawPage from './pages/practice-areas/FamilyLawPage';
import PropertyLawPage from './pages/practice-areas/PropertyLawPage';
import CriminalLawPage from './pages/practice-areas/CriminalLawPage';
import CorporateLawPage from './pages/practice-areas/CorporateLawPage';
import CivilLitigationPage from './pages/practice-areas/CivilLitigationPage';
import TaxLawPage from './pages/practice-areas/TaxLawPage';
import LawyerDashboard from './pages/lawyer/LawyerDashboard';
import LawyerLogin from './pages/lawyer/LawyerLogin';
import LawyerRegister from './pages/lawyer/LawyerRegister';
import CaseList from './pages/lawyer/cases/CaseList';
import CaseDetail from './pages/lawyer/cases/CaseDetail';
import ClientList from './pages/lawyer/clients/ClientList';
import HearingList from './pages/lawyer/hearings/HearingList';
import TaskList from './pages/lawyer/tasks/TaskList';
import ClientDashboard from './pages/client/ClientDashboard';
import ClientLogin from './pages/client/ClientLogin';
import ClientRegister from './pages/client/ClientRegister';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="practice-areas" element={<PracticeAreaPage />}>
          <Route path="family-law" element={<FamilyLawPage />} />
          <Route path="property-law" element={<PropertyLawPage />} />
          <Route path="criminal-law" element={<CriminalLawPage />} />
          <Route path="corporate-law" element={<CorporateLawPage />} />
          <Route path="civil-litigation" element={<CivilLitigationPage />} />
          <Route path="tax-law" element={<TaxLawPage />} />
        </Route>
        
        {/* Lawyer Routes */}
        <Route path="lawyer">
          <Route index element={<LawyerDashboard />} />
          <Route path="login" element={<LawyerLogin />} />
          <Route path="register" element={<LawyerRegister />} />
          <Route path="cases" element={<CaseList />} />
          <Route path="cases/:cnr" element={<CaseDetail />} />
          <Route path="clients" element={<ClientList />} />
          <Route path="hearings" element={<HearingList />} />
          <Route path="tasks" element={<TaskList />} />
        </Route>

        {/* Client Routes */}
        <Route path="client">
          <Route index element={<ClientDashboard />} />
          <Route path="login" element={<ClientLogin />} />
          <Route path="register" element={<ClientRegister />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;