import React from 'react'
import { motion } from "framer-motion";
import { FaLightbulb, FaHandshake, FaUsers, FaShieldAlt, FaTools, FaBalanceScale } from "react-icons/fa";

const CoreValues = () => {
  const values = [
    {
      icon: <FaLightbulb className="text-4xl text-green-400" />,
      title: "Innovation & Excellence",
      desc: "We constantly push boundaries by adopting emerging technologies and delivering top-tier digital solutions crafted for long-term success."
    },
    {
      icon: <FaHandshake className="text-4xl text-green-400" />,
      title: "Transparency & Trust",
      desc: "Our communication is open, honest, and clear—ensuring complete trust and confidence throughout every project stage."
    },
    {
      icon: <FaUsers className="text-4xl text-green-400" />,
      title: "Client-Centric Solutions",
      desc: "Every product is built around our client’s goals, delivering value-driven strategies that produce measurable business results."
    },
    {
      icon: <FaShieldAlt className="text-4xl text-green-400" />,
      title: "Quality & Commitment",
      desc: "We ensure unmatched quality through rigorous testing, best coding practices, and a deep commitment to excellence."
    },
    {
      icon: <FaTools className="text-4xl text-green-400" />,
      title: "Long-term Support",
      desc: "Our relationship doesn’t end at delivery—we provide continuous updates, monitoring, scaling, and maintenance."
    },
    {
      icon: <FaBalanceScale className="text-4xl text-green-400" />,
      title: "Ethical Work Standards",
      desc: "We follow strict ethical principles, valuing integrity, responsibility, and a strong sense of professionalism."
    },
  ];

  return (
    <section className="py-20 bg-black/40 text-gray-300">
      <div className="max-w-7xl mx-auto px-6">
        
        <h2 className="text-4xl font-bold text-green-400 text-center mb-12">
          Our Core Values
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="p-8 bg-gray-900 border border-gray-700 rounded-xl text-center hover:shadow-[0_0_15px_#22c55e55] transition"
            >
              <div className="flex justify-center mb-4">
                {value.icon}
              </div>
              
              <h3 className="text-2xl font-semibold text-green-400 mb-2">
                {value.title}
              </h3>

              <p className="text-gray-300 text-base leading-relaxed">
                {value.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CoreValues;
