import React from 'react';
import HomeHero from '../components/homeComponents/HomeHero';
import AboutSection from '../components/homeComponents/AboutSection';
import ServicesSection from '../components/homeComponents/ServicesSection';
import WhyChooseUs from '../components/homeComponents/WhyChooseUs';
import ProcessSection from '../components/homeComponents/ProcessSection';
import heroVideo from '../assets/home/hero.mp4'; // video path

const HomePage = () => {
  return (
    <div className="relative w-full min-h-screen">

      {/* Background Video */}
      <video
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Overlay to darken video */}
      <div className="absolute inset-0 bg-black/70 bg-opacity-60 z-10"></div>

      {/* Page Content */}
      <div className="relative z-20">
        <HomeHero/>
        <AboutSection/>
        <ServicesSection/>
        <WhyChooseUs/>
        <ProcessSection/>
      </div>
    </div>
  )
}

export default HomePage;
