import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="relative py-24 text-gray-300 overflow-hidden">

      {/* Soft Background Glow */}
      <div className="absolute -top-20 left-0 w-[350px] h-[350px] bg-green-500/20 blur-[150px] rounded-full"></div>
      <div className="absolute -bottom-20 right-0 w-[350px] h-[350px] bg-green-400/10 blur-[160px] rounded-full"></div>

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/40 "></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-green-400 leading-tight mb-6">
            Leading the Future of  
            <span className="text-white"> IT & Digital Transformation</span>
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            Rehmat Enterprises is a trusted IT solutions provider delivering 
            enterprise-grade software, mobile apps, and web platforms. We blend 
            innovation, industry expertise, and cutting-edge technologies to help 
            organizations accelerate digital transformation and unlock their full potential.
          </p>
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="space-y-6 text-gray-300 text-lg leading-relaxed"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <p>
            Our expert team of developers, designers, and technology strategists 
            specializes in building scalable digital solutions. From cloud-native 
            systems and enterprise applications to AI-powered automation, we create 
            technology that enhances efficiency and elevates customer experiences.
          </p>

          <p>
            Our mission is simple — to empower businesses with future-ready 
            technology that drives measurable results, operational excellence, 
            and sustainable growth.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;
