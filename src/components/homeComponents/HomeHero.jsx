import React from "react";
import { motion } from "framer-motion";
import heroVideo from "../../assets/home/hero.mp4";

const HomeHero = () => {
  return (
    <section className="relative w-full h-screen mt-15 flex items-center justify-center overflow-hidden">

      {/* Background Video */}
      <video
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      ></video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Floating Gradient Shape */}
      <div className="absolute -top-20 -right-20 w-[400px] h-[400px] 
      bg-green-500/30 blur-[130px] rounded-full"></div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl px-6 text-white space-y-6">

        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          Empowering Your Business With  
          <span className="text-green-400"> IT Solutions</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto"
        >
          Rehmat Enterprises delivers modern web solutions, mobile apps,
          software development, and digital transformation services to help
          your business grow in the digital world.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex justify-center space-x-4 mt-4"
        >

          <a
            href="/contact"
            className="px-6 py-3 border border-green-400 text-green-400 rounded-lg 
            font-semibold hover:bg-green-500 hover:text-white transition shadow-lg"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeHero;
