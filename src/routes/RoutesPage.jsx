import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import MobileAppDev from "../pages/servicesPages/MobileAppDev";
import WebDevelopment from "../pages/servicesPages/WebDevelopment";
import UIUXDesign from "../pages/servicesPages/UIUXDesign";
import DigitalMarketing from "../pages/servicesPages/DigitalMarketing";
import ScrollToTop from "../pages/ScrollToTop";

const RoutesPage = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="mobile-app-development" element={<MobileAppDev />} />
        <Route path="website-development" element={<WebDevelopment />} />
        <Route path="ui-ux-design" element={<UIUXDesign />} />
        <Route path="digital-marketing" element={<DigitalMarketing />} />
      </Routes>
    </>
  );
};

export default RoutesPage;
