import React from "react";
import { NavLink } from "react-router-dom";
import heroVideo from "../../assets/home/hero.mp4";
import heroImg from "../../assets/services/img4.jpg";

const DigitalMarketing = () => {
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
          Digital Marketing
        </h1>

        {/* Heavy Content */}
        <div className="space-y-6 text-lg leading-relaxed text-gray-200 max-w-4xl mx-auto">
          <p>
            At Rehmat Enterprises, our digital marketing solutions help brands grow,
            scale, and dominate the digital space through data-driven strategies and
            performance-focused execution designed to maximize ROI.
          </p>

          <p>
            We create laser-targeted marketing campaigns using SEO, Social Media,
            Google Ads, Content Marketing, and advanced analytics. Our strategies
            improve visibility, drive qualified traffic, and convert users into
            long-term customers efficiently.
          </p>

          <p>
            Every action we take is monitored through analytics, heat maps, A/B tests,
            conversion tracking, and behavior research to ensure continuous
            improvement and powerful, measurable results.
          </p>

          <p>
            Whether you're a startup looking for quick traction or an established
            brand seeking long-term digital domination, we tailor strategies that
            match your business goals and audience behavior perfectly.
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
            alt="Digital Marketing"
            className="w-full max-w-3xl rounded-xl shadow-2xl border border-white/10"
          />
        </div>

        {/* Expertise Section */}
        <h2 className="text-4xl font-bold mt-16 mb-6 text-green-400">
          Our Digital Marketing Expertise
        </h2>

        <ul className="text-lg text-gray-200 space-y-3 max-w-3xl mx-auto text-left">
          <li>✔ Search Engine Optimization (SEO)</li>
          <li>✔ Social Media Marketing (Instagram, Facebook, LinkedIn)</li>
          <li>✔ Google Ads & Paid Campaigns</li>
          <li>✔ Content Strategy, Branding & Copywriting</li>
          <li>✔ Lead Generation & Conversion Funnel Optimization</li>
          <li>✔ Email Marketing & Automation</li>
          <li>✔ Performance Tracking & Analytics</li>
          <li>✔ Online Presence Building & Reputation Management</li>
        </ul>

      </div>
    </div>
  );
};

export default DigitalMarketing;
