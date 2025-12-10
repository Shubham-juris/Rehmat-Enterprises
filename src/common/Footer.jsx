import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-green-400 mb-4">
            Rehmat Enterprises
          </h2>
          <p className="text-gray-300">
            We provide top-notch IT solutions including web development,
            mobile apps, software systems, and digital services.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="text-gray-300 hover:text-green-400">Home</a></li>
            <li><a href="/about" className="text-gray-300 hover:text-green-400">About</a></li>
            <li><a href="/services" className="text-gray-300 hover:text-green-400">Services</a></li>
            <li><a href="/contact" className="text-gray-300 hover:text-green-400">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Email: info@rehmatenterprises.com</li>
            <li>Phone: +1 56000120000</li>
            <li>Location: xyz</li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Rehmat Enterprises. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
