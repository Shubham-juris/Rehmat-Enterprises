import React from "react";
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <section className="relative py-24 text-gray-300 bg-black">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-green-500/20 blur-[150px]"></div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-green-400/20 blur-[150px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold text-green-400 text-center mb-14"
        >
          Contact Us
        </motion.h2>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Left: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-gray-900 p-8 rounded-xl border border-gray-700 shadow"
          >
            <h3 className="text-2xl font-bold text-green-400 mb-6">Send a Message</h3>

            <form className="space-y-5">
              <div>
                <label className="block mb-2 text-gray-300">Your Name</label>
                <input
                  type="text"
                  className="w-full p-3 rounded-lg bg-black/40 border border-gray-700 focus:border-green-400 outline-none"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-300">Your Email</label>
                <input
                  type="email"
                  className="w-full p-3 rounded-lg bg-black/40 border border-gray-700 focus:border-green-400 outline-none"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-300">Message</label>
                <textarea
                  rows="5"
                  className="w-full p-3 rounded-lg bg-black/40 border border-gray-700 focus:border-green-400 outline-none"
                  placeholder="Write your message"
                ></textarea>
              </div>

              <button className="w-full py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition">
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Right: Contact Info + Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Information */}
            <div className="bg-gray-900 p-8 rounded-xl border border-gray-700 shadow">
              <h3 className="text-2xl font-bold text-green-400 mb-6">
                Contact Information
              </h3>

              <p className="mb-4">
                <strong className="text-green-400">Address:</strong>  
                123 Business Avenue, Calgary, AB, Canada
              </p>

              <p className="mb-4">
                <strong className="text-green-400">Email:</strong>  
                info@rehmatenterprises.com
              </p>

              <p className="mb-4">
                <strong className="text-green-400">Phone:</strong>  
                +1 (587) 000-0000
              </p>

             
            </div>

            {/* Google Map */}
            <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden border border-gray-700">
              <iframe
                title="company-map"
                width="100%"
                height="100%"
                loading="lazy"
                allowFullScreen
                className="border-0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25211.66973449482!2d-114.0719!3d51.0447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5371700e3b6b0d9f%3A0xadb2d50e1dc0b0a0!2sCalgary%2C%20AB%2C%20Canada!5e0!3m2!1sen!2sca!4v1234567890"
              ></iframe>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactPage;
