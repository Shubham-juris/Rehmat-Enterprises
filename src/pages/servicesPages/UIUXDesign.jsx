import React from "react";
import { NavLink } from "react-router-dom";
import heroVideo from "../../assets/home/hero.mp4";
import heroImg from "../../assets/services/img3.png";

const UIUXDesign = () => {
  return (
    <div className="w-full min-h-screen relative">

      {/* Background Video */}
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

        <h1 className="text-5xl font-bold mb-6 text-green-400">
          UI / UX Design
        </h1>

        <p className="text-lg leading-relaxed text-gray-200 max-w-4xl mx-auto mb-10">
          Our UI/UX design approach is deeply rooted in human psychology, design
          thinking, and real user behavior. We create intuitive, visually stunning,
          and conversion-optimized digital experiences that connect emotionally with
          users and support your business goals. 
          <br /><br />
          From research to wireframes to interactive prototypes, we ensure every
          screen is crafted with purpose. Our team uses global design standards,
          accessibility guidelines, and modern interactive patterns to deliver
          products that are not only beautiful but also efficient, scalable, and
          user-centric.
          <br /><br />
          Whether you're launching a startup, redesigning an existing platform,
          or creating a new enterprise interface, our UI/UX team brings clarity,
          creativity, and world-class design quality to every project.
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
            alt="UI UX Design"
            className="w-full max-w-3xl rounded-xl shadow-2xl border border-white/10"
          />
        </div>

        <h2 className="text-4xl font-bold mt-16 mb-6 text-green-400">
          Our UI/UX Design Expertise
        </h2>

        <ul className="text-lg text-gray-200 space-y-3 max-w-3xl mx-auto text-left">
          <li>✔ High-Fidelity UI for Mobile & Web Apps</li>
          <li>✔ Wireframes, Prototypes & Design Systems</li>
          <li>✔ UX Research, User Flows & Journey Mapping</li>
          <li>✔ Visual Identity, Color Theory & Typography</li>
          <li>✔ Interaction & Motion Based Design</li>
          <li>✔ User Testing, A/B Testing & Usability Improvements</li>
          <li>✔ Component Libraries & Scalable UI Architecture</li>
        </ul>

      </div>
    </div>
  );
};

export default UIUXDesign;
