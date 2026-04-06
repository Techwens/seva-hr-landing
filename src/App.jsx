import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import Onbording from './pages/Onbording';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import DataSecurity from './pages/DataSecurity';
import About from './pages/About';
import MobileApp from './pages/MobileApp';
import RefundPolicy from './pages/RefundPolicy';
import Faq from './pages/Faq';
import Contact from './pages/Contact';
import FeatureEmployeeManagement from './pages/FeatureEmployeeManagement';
import FeaturePayroll from './pages/FeaturePayroll';
import FeatureAttendance from './pages/FeatureAttendance';
import FeaturePerformance from './pages/FeaturePerformance';
import FeatureCompliance from './pages/FeatureCompliance';
import Solutions from './pages/Solutions';
import WhySevaHR from './pages/WhySevaHR';
import Pricing from './pages/Pricing';
import OurStory from './pages/OurStory';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/onboarding" element={<Onbording />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/data-security" element={<DataSecurity />} />
            <Route path="/about" element={<About />} />
            <Route path="/mobile-app" element={<MobileApp />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/features/employee-management" element={<FeatureEmployeeManagement />} />
            <Route path="/features/payroll" element={<FeaturePayroll />} />
            <Route path="/features/attendance" element={<FeatureAttendance />} />
            <Route path="/features/performance" element={<FeaturePerformance />} />
            <Route path="/features/compliance" element={<FeatureCompliance />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/why-sevahr" element={<WhySevaHR />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/our-story" element={<OurStory />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
