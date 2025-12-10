import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const WhyChooseUs = () => {
  const points = [
    "10+ years delivering robust enterprise IT solutions across diverse industries.",
    "Agile development workflow ensuring fast iterations and reduced time-to-market.",
    "Expert engineers, UI/UX designers, cloud architects, and project managers.",
    "Global delivery capability with consistent 100% on-time project execution.",
    "Advanced tech stack including AI automation, cloud-native architecture, DevOps & cybersecurity.",
    "Lifetime support, 24/7 system monitoring, and dedicated maintenance plans."
  ];

  return (
    <section className="relative py-24 text-gray-300 overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-green-500/20 blur-[160px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-green-400/20 blur-[160px] rounded-full"></div>

      {/* Overlay for video background readability */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold text-green-400 mb-12"
        >
          Why Businesses Trust Us
        </motion.h2>

        <ul className="space-y-8 text-lg max-w-3xl mx-auto">
          {points.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-start gap-3 border-b border-gray-700 pb-4 hover:border-green-500 transition-all"
            >
              <FaCheckCircle className="text-green-400 text-2xl mt-1" />
              <span className="text-gray-300 leading-relaxed">{item}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhyChooseUs;
