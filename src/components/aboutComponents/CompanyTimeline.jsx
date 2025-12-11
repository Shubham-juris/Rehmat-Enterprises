import React from 'react'
import { motion } from "framer-motion";

const CompanyTimeline = () => {
  const events = [
    { 
      year: "2015", 
      text: "Rehmat Enterprises was established with a vision to build reliable, secure, and scalable digital products for emerging businesses. We began as a small team passionate about solving complex technology challenges." 
    },
    { 
      year: "2017", 
      text: "We expanded our services into enterprise-grade software, building custom ERPs, CRMs, and automation tools that helped organizations streamline operations and improve efficiency." 
    },
    { 
      year: "2020", 
      text: "With digital transformation accelerating worldwide, we launched advanced cloud engineering, DevOps automation, and AI-driven solutions. Our cloud-native architectures enabled companies to reduce costs and scale infinitely." 
    },
    { 
      year: "2023", 
      text: "Rehmat Enterprises crossed 100+ global clients, delivering complex digital ecosystems with a 98% satisfaction rate. We strengthened our team with experts in cybersecurity, system architecture, and enterprise innovation." 
    },
    { 
      year: "2025", 
      text: "Today, we continue evolving as a next-generation IT partner, empowering businesses to become future-ready through automation, smart technologies, and strategic digital modernization." 
    },
  ];

  return (
    <section className="py-20 bg-black/40 text-gray-300">
      <div className="max-w-5xl mx-auto px-6">
        
        <h2 className="text-4xl text-green-400 font-bold mb-12 text-center">
          Our Journey Through Innovation
        </h2>

        {/* Timeline Container */}
        <div className="relative border-l-4 border-green-400 mx-auto w-full max-w-3xl">

          {events.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12 ml-6"
            >
              {/* Dot Indicator */}
              <div className="w-4 h-4 bg-green-400 rounded-full absolute -left-[10px] shadow-[0_0_10px_#22c55e]"></div>

              {/* Year */}
              <h3 className="text-2xl font-bold text-green-400">
                {event.year}
              </h3>

              {/* Text */}
              <p className="text-gray-300 mt-2 leading-relaxed">
                {event.text}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default CompanyTimeline;
