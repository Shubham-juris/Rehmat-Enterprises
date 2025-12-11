import React from 'react'
import { motion } from "framer-motion";
import img from "../../assets/about/hero.webp"

const AboutHero = () => {
  return (
    <section className="min-h-[80vh] bg-black/40 text-gray-300 flex items-center mt-15 py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-6xl font-extrabold leading-tight"
          >
            About{" "}
            <span className="text-green-400 drop-shadow-lg">
              Rehmat Enterprises
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-6 text-lg text-gray-400 leading-relaxed"
          >
            Rehmat Enterprises is not just an IT company — we are a digital 
            transformation partner enabling organizations to unlock scalability, 
            automation, and next-generation innovation through cutting-edge 
            technology solutions.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.9 }}
            className="mt-5 text-gray-400 text-lg leading-relaxed"
          >
            With a proven track record of delivering enterprise-grade systems, 
            we empower businesses with custom software, cloud engineering, 
            DevOps automation, cybersecurity, and AI-powered digital ecosystems.  
            Our mission is to build future-ready solutions that accelerate growth 
            and strengthen operational excellence.
          </motion.p>
        </div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-[350px] md:h-[450px] rounded-xl overflow-hidden shadow-lg 
                     border border-gray-700 bg-gray-900"
        >
          <img 
            src={img}
            className="w-full h-full object-cover opacity-80"
          ></img>

          {/* <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div> */}

          <div className="absolute inset-0 border-2 border-green-400/30 rounded-xl shadow-[0_0_40px_#22c55e55]"></div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutHero;
