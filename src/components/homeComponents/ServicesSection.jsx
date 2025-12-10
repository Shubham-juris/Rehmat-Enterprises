import React from "react";
import { motion } from "framer-motion";

const ServicesSection = () => {
  const services = [
    {
      title: "Custom Web Development",
      desc: "High-performance, scalable websites and web apps built on React, Next.js, Node.js, and API-driven architectures tailored for enterprise needs.",
    },
    {
      title: "Mobile App Development",
      desc: "Native-level Android & iOS apps using React Native and Flutter with optimized performance, security, and user-focused design.",
    },
    {
      title: "Enterprise Software Solutions",
      desc: "ERP, CRM, HRMS, automation tools, and internal management systems engineered for productivity, analytics, and workflow optimization.",
    },
    {
      title: "Cloud & DevOps Services",
      desc: "AWS, Azure, and GCP cloud deployment, infrastructure modernization, CI/CD pipelines, auto scaling, and high-level cloud security.",
    },
    {
      title: "Digital Marketing & Branding",
      desc: "SEO optimization, SMM campaigns, paid ads, business branding, analytics tracking, and growth marketing strategies.",
    },
    {
      title: "IT Support & Maintenance",
      desc: "24/7 system monitoring, patch updates, server optimization, bug fixes, cybersecurity improvements, and long-term SLA support.",
    },
  ];

  return (
    <section className="relative py-24 text-gray-300 overflow-hidden">

      {/* Background glow */}
      <div className="absolute top-0 left-0 w-[250px] h-[250px] bg-green-500/20 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-green-400/20 blur-[150px] rounded-full"></div>

      {/* Dark overlay for video background readability */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-green-400 text-center mb-16">
          Our IT Solutions & Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="p-6 bg-gray-900/60 border border-gray-700 rounded-xl backdrop-blur-md 
              hover:scale-105 hover:border-green-500 transition-all duration-300 shadow-lg"
            >
              <h3 className="text-xl font-bold text-green-400 mb-3">
                {service.title}
              </h3>

              <p className="text-gray-300 leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
