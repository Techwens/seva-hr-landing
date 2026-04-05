import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import Onbording from './pages/Onbording';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import DataSecurity from './pages/DataSecurity';
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
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App