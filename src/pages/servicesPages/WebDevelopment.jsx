import React from "react";
import { NavLink } from "react-router-dom";
import heroVideo from "../../assets/home/hero.mp4";
import heroImg from "../../assets/services/img2.jpg";

const WebDevelopment = () => {
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

      {/* Dark Overlay */}
      <div className="fixed inset-0 bg-black/80 -z-10"></div>

      {/* MAIN CONTENT */}
      <div className="pt-32 pb-20 max-w-6xl mx-auto text-center px-6 text-white">

        <h1 className="text-5xl font-bold mb-6 text-green-400">
          Web Development
        </h1>

        <p className="text-lg leading-relaxed text-gray-200 max-w-4xl mx-auto mb-10">
          We build modern, scalable, and high-performance websites using the world’s
          most advanced technologies. Our engineering approach ensures faster loading,
          better SEO, enhanced performance, and a seamless experience across all devices.
          From business websites to enterprise-level dashboards, we deliver industry-grade
          solutions tailored to your brand’s digital goals.
          <br /><br />
          Our process includes UX planning, architecture design, coding, testing,
          security optimization, and long-term maintenance. Every project is engineered
          to be fully responsive, visually stunning, and conversion-focused.
        </p>

        {/* Contact Button */}
        <NavLink
          to="/contact"
          className="bg-green-500 text-black px-8 py-3 rounded-xl font-semibold text-lg hover:bg-green-400 transition"
        >
          Let’s Contact
        </NavLink>

        {/* Centered Image */}
        <div className="mt-14 flex justify-center">
          <img
            src={heroImg}
            alt="Web Development"
            className="w-full max-w-3xl rounded-xl shadow-2xl border border-white/10"
          />
        </div>

        {/* Expertise Section */}
        <h2 className="text-4xl font-bold mt-16 mb-6 text-green-400">
          Our Web Development Expertise
        </h2>

        <ul className="text-lg text-gray-200 space-y-3 max-w-3xl mx-auto text-left">
          <li>✔ Custom Web Applications (React, Next.js, Laravel)</li>
          <li>✔ Full-Stack Solutions (MERN, MEVN, LAMP)</li>
          <li>✔ Admin Panels, CRM, ERP, Dashboards</li>
          <li>✔ REST API Architecture & Integrations</li>
          <li>✔ SEO-Friendly & Lightning-Fast Webpages</li>
          <li>✔ Cloud Deployment (AWS, Vercel, DigitalOcean)</li>
          <li>✔ Database Engineering & Secure Authentication</li>
        </ul>

      </div>
    </div>
  );
};

export default WebDevelopment;
