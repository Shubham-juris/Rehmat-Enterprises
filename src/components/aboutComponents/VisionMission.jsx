import React from 'react'
import { motion } from "framer-motion";

const VisionMission = () => {
  return (
    <section className="py-20 bg-black/40 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">

        {/* Vision */}
        <motion.div 
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="p-8 bg-gray-900 rounded-xl border border-gray-700 shadow-xl backdrop-blur-sm"
        >
          <h2 className="text-3xl font-bold text-green-400 mb-4">Our Vision</h2>

          <p className="leading-relaxed mb-6">
            To become a globally recognized organization that sets new standards in  
            <span className="text-green-300"> innovation, reliability, and service excellence</span>.  
            We envision a future where every business, regardless of size, has access to  
            cutting-edge digital solutions that drive measurable growth.
          </p>

          <ul className="space-y-3 text-gray-400">
            <li>• Empower industries through intelligent technology adoption.</li>
            <li>• Build long-term, trust-driven partnerships with global enterprises.</li>
            <li>• Create sustainable, future-proof digital ecosystems.</li>
            <li>• Lead with innovation, integrity, and customer-first strategies.</li>
          </ul>
        </motion.div>

        {/* Mission */}
        <motion.div 
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="p-8 bg-gray-900 rounded-xl border border-gray-700 shadow-xl backdrop-blur-sm"
        >
          <h2 className="text-3xl font-bold text-green-400 mb-4">Our Mission</h2>

          <p className="leading-relaxed mb-6">
            Our mission is to deliver high-impact solutions that help businesses  
            <span className="text-green-300"> scale faster, operate smarter, and compete globally</span>.  
            Every service we offer is driven by quality, transparency, and relentless improvement.
          </p>

          <ul className="space-y-3 text-gray-400">
            <li>• Provide world-class IT services with a focus on precision & performance.</li>
            <li>• Build robust digital products using modern, scalable technologies.</li>
            <li>• Offer strategic guidance that aligns business goals with digital growth.</li>
            <li>• Deliver reliable long-term support, maintenance, and optimization.</li>
            <li>• Ensure client success through collaboration, creativity, and discipline.</li>
          </ul>
        </motion.div>

      </div>
    </section>
  );
};

export default VisionMission;
