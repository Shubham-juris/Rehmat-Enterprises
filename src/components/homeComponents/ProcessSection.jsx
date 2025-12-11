import React from "react";
import { motion } from "framer-motion";

const ProcessSection = () => {
  const steps = [
    {
      title: "Discovery",
      desc: "We analyze your business goals, challenges, and workflows to design a tailored digital solution.",
    },
    {
      title: "Planning & Strategy",
      desc: "We create architecture plans, UI/UX flow, and choose the right technologies for seamless execution.",
    },
    {
      title: "Development",
      desc: "Our team builds scalable, secure, enterprise-level software with continuous testing.",
    },
    {
      title: "Deployment",
      desc: "CI/CD pipelines ensure smooth, error-free deployment on cloud or on-premise environments.",
    },
    {
      title: "Maintenance",
      desc: "We provide long-term support, monitoring, updates, and performance optimization.",
    },
  ];

  return (
    <section className="relative py-24 text-gray-300 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-10 left-0 w-[300px] h-[300px] bg-green-500/20 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-10 right-0 w-[300px] h-[300px] bg-green-400/10 blur-[150px] rounded-full"></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-green-400">
          Our Development Process
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-gray-900 border border-gray-700 rounded-xl shadow-md text-center hover:scale-105 transition-transform duration-300"
            >
              {/* Step Number Circle */}
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-green-500/20 border border-green-400 flex items-center justify-center text-green-400 text-2xl font-bold">
                {index + 1}
              </div>

              <h3 className="text-xl font-bold text-green-400 mb-2">
                {step.title}
              </h3>

              <p className="text-gray-300">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
