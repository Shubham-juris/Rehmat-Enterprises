import React from 'react'
import AboutHero from '../components/aboutComponents/AboutHero'
import VisionMission from '../components/aboutComponents/VisionMission'
import CompanyTimeline from '../components/aboutComponents/CompanyTimeline'
import CoreValues from '../components/aboutComponents/CoreValues'

import bgVideo from '../assets/home/hero.mp4'

const AboutPage = () => {
  return (
    <>
      {/* Background Video */}
      <div className="relative w-full min-h-screen overflow-hidden bg-black">
        
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover opacity-40"
        >
          <source src={bgVideo} type="video/mp4" />
        </video>

        {/* Content */}
        <div className="relative z-10">
          <AboutHero/>
          <VisionMission/> 
          <CompanyTimeline/>
          <CoreValues/>
        </div>

        {/* Dark Overlay (optional) */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
    </>
  )
}

export default AboutPage
