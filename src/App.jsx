import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import Onbording from './pages/Onbording';
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/onboarding" element={<Onbording />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App