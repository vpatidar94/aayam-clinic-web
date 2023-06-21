import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage'
import Header from './components/Header/Header'
import AboutUs from './components/AboutUs/AboutUs';
import SkinTreatment from './components/SkinTreatment/SkinTreatment';
import CosmeticTreatment from './components/CosmeticTreatment/CosmeticTreatment';
import DermatoSurgery from './components/DermatoSurgery/DermatoSugery';
import ProceduralTreatment from './components/ProceduralTreatment/ProceduralTreatment';
import Appointment from './components/Appointment/Appointment';
import Services from './components/Services/Services';
import ContactUs from './components/ContactUs/ContactUs';
import SkinTips from './components/HealthTips/SkinTips/SkinTips';
import NailsTips from './components/HealthTips/NailsTips/NailsTips';
import HairTips from './components/HealthTips/HairTips/HairTips';
import DentalTips from './components/HealthTips/DentalTips/DentalTips';
import GeneralHealthTips from './components/HealthTips/GeneralHealthTips/GeneralHealthTips';
import TopHeader from './components/TopHeader/TopHeader';
import TermsAndCondition from './components/TermsAndCondition/TermsAndCondition';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <TopHeader/>
      <Header/>
      <Routes>
        <Route  path="/" element={<HomePage/>}/>
        <Route path="AboutUs" element={<AboutUs/>}/>
        <Route path="SkinTreatment" element={<SkinTreatment/>}/>
        <Route path="CosmeticTreatment" element={<CosmeticTreatment/>}/>
        <Route path="DermatoSurgery" element={<DermatoSurgery/>}/>
        <Route path="ProceduralTreatment" element={<ProceduralTreatment/>}/>
        <Route path='Appointment' element={<Appointment/>}/>
        <Route path="Services" element={<Services/>}/>
        <Route path="ContactUs" element={<ContactUs/>}/>
        <Route path="SkinTips" element={<SkinTips/>}/>
        <Route path="NailsTips" element={<NailsTips/>}/>
        <Route path="HairTips" element={<HairTips/>}/>
        <Route path="DentalTips" element={<DentalTips/>}/>
        <Route path="GeneralHealthTips" element={<GeneralHealthTips/>}/>
        <Route path='TermsAndCondition' element={<TermsAndCondition/>}/>
      </Routes>
      </BrowserRouter>
      
      
    </div>
  )
}

export default App