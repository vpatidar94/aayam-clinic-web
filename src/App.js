import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopHeader from './components/TopHeader/TopHeader';
import Header from './components/Header/Header';
import Spinner from './components/Spinner/Spinner';

// Lazy-loaded components
const HomePage = lazy(() => import('./components/HomePage/HomePage'));
const Appointment = lazy(() => import('./components/Appointment/Appointment'));
const AboutUs = lazy(() => import('./components/AboutUs/AboutUs'));
const SkinTreatment = lazy(() => import('./components/SkinTreatment/SkinTreatment'));
const CosmeticTreatment = lazy(() => import('./components/CosmeticTreatment/CosmeticTreatment'));
const DermatoSurgery = lazy(() => import('./components/DermatoSurgery/DermatoSurgery'));
const ProceduralTreatment = lazy(() => import('./components/ProceduralTreatment/ProceduralTreatment'));
const Services = lazy(() => import('./components/Services/Services'));
const ContactUs = lazy(() => import('./components/ContactUs/ContactUs'));
const SkinTips = lazy(() => import('./components/HealthTips/SkinTips/SkinTips'));
const NailsTips = lazy(() => import('./components/HealthTips/NailsTips/NailsTips'));
const HairTips = lazy(() => import('./components/HealthTips/HairTips/HairTips'));
const DentalTips = lazy(() => import('./components/HealthTips/DentalTips/DentalTips'));
const GeneralHealthTips = lazy(() => import('./components/HealthTips/GeneralHealthTips/GeneralHealthTips'));
const TermsAndCondition = lazy(() => import('./components/TermsAndCondition/TermsAndCondition'));

const App = () => {
  return (
    <div>
      <Router>
        <TopHeader />
        <Header />
        <Suspense fallback={<Spinner/>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="Appointment" element={<Appointment />} />
            <Route path="ContactUs" element={<ContactUs />} />
            <Route path="AboutUs" element={<AboutUs />} />
            <Route path="SkinTreatment" element={<SkinTreatment />} />
            <Route path="CosmeticTreatment" element={<CosmeticTreatment />} />
            <Route path="DermatoSurgery" element={<DermatoSurgery />} />
            <Route path="ProceduralTreatment" element={<ProceduralTreatment />} />
            <Route path="Services" element={<Services />} />
            <Route path="SkinTips" element={<SkinTips />} />
            <Route path="NailsTips" element={<NailsTips />} />
            <Route path="HairTips" element={<HairTips />} />
            <Route path="DentalTips" element={<DentalTips />} />
            <Route path="GeneralHealthTips" element={<GeneralHealthTips />} />
            <Route path="TermsAndCondition" element={<TermsAndCondition />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
};

export default App;
