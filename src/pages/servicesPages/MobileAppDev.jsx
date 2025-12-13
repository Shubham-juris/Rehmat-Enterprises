import React from "react";
import { NavLink } from "react-router-dom";
import heroVideo from "../../assets/home/hero.mp4";
import heroImg from "../../assets/services/img1.webp";

const MobileAppDev = () => {
  return (
    <div className="w-full min-h-screen relative">

      {/* Full Background Video */}
      <video
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
      />

      {/* Overlay */}
      <div className="fixed inset-0 bg-black/80 -z-10"></div>

      {/* MAIN CONTENT */}
      <div className="pt-32 pb-20 max-w-6xl mx-auto text-center px-6 text-white">

        {/* Heading */}
        <h1 className="text-5xl font-bold mb-6 text-green-400">
          Mobile App Development
        </h1>

        {/* Heavy Content */}
        <div className="space-y-6 text-lg leading-relaxed text-gray-200 max-w-4xl mx-auto">
          <p>
            At Rehmat Enterprises, we specialize in building high-performance, feature-rich,
            and scalable mobile applications tailored specifically to your business goals.
            Our team combines creativity, advanced technology, and strategic thinking to
            deliver applications that not only look stunning but also perform flawlessly
            across both Android and iOS platforms.
          </p>

          <p>
            Whether you need a consumer-facing product, enterprise mobile solution, or a
            custom workflow application, we craft mobile apps that elevate user experience
            and drive measurable business results. Our end-to-end development covers UI/UX
            design, full-stack development, server architecture, API integration, quality
            assurance, and ongoing maintenance.
          </p>

          <p>
            We follow modern development practices such as Agile, Modular Coding, Cloud
            Integration, and Performance Optimization. This ensures that your app remains
            secure, blazing fast, and future-ready even after millions of users. We also
            implement user behavior analytics and heat-mapping to understand how people
            interact with the app.
          </p>

          <p>
            From real-time tracking apps, booking engines, and eCommerce apps to social
            networks, fintech, CRM/ERP solutions, healthcare systems, and AI utilities —
            our expertise covers every major industry with deep technical capability.
          </p>
        </div>

        {/* Contact Button */}
        <NavLink
          to="/contact"
          className="inline-block mt-10 bg-green-500 text-black font-semibold px-8 py-3 rounded-xl text-lg hover:bg-green-400 transition"
        >
          Let’s Contact
        </NavLink>

        {/* Image Section */}
        <div className="mt-14 flex justify-center">
          <img
            src={heroImg}
            alt="Mobile App Development"
            className="w-full max-w-3xl rounded-xl shadow-2xl border border-white/10"
          />
        </div>

        {/* Expertise Section */}
        <h2 className="text-4xl font-bold mt-16 mb-6 text-green-400">
          Our Mobile App Development Expertise
        </h2>

        <ul className="text-lg text-gray-200 space-y-3 max-w-3xl mx-auto text-left">
          <li>✔ Custom Android & iOS Application Development</li>
          <li>✔ Cross-Platform Apps (React Native & Flutter)</li>
          <li>✔ UI/UX Research, Mobile App Design & Prototyping</li>
          <li>✔ API Integrations & Third-Party Services</li>
          <li>✔ Cloud-Based Mobile Architecture (AWS, GCP)</li>
          <li>✔ Real-Time Features: Chat, Maps, Notifications, GPS</li>
          <li>✔ eCommerce Stores, Payment Gateway & Subscription Apps</li>
          <li>✔ App Security, Encryption & Performance Monitoring</li>
        </ul>

      </div>
    </div>
  );
};

export default MobileAppDev;
