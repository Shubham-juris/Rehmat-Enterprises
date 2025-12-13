import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import {
  FaMobileAlt,
  FaCode,
  FaGlobe,
  FaPaintBrush,
  FaUsers,
  FaBullhorn,
} from "react-icons/fa";
import logo from "../assets/navbar/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const activeClass = ({ isActive }) =>
    isActive ? "text-green-400 font-semibold" : "text-white hover:text-green-400";

  return (
    <nav className="w-full bg-black shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo Left */}
        <div className="flex items-center">
          <NavLink to="/">
            <img src={logo} alt="Logo" className="h-14 w-auto" />
          </NavLink>
        </div>

        {/* RIGHT SIDE MENU  */}
        <div className="hidden md:flex items-center space-x-12 text-lg font-medium">

          {/* Home */}
          <NavLink to="/" className={activeClass}>
            Home
          </NavLink>

          {/* About */}
          <NavLink to="/about" className={activeClass}>
            About
          </NavLink>

          {/* Services Dropdown */}
          <div className="relative">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="text-white hover:text-green-400 flex items-center"
            >
              Services <span className="ml-1 text-xs">▼</span>
            </button>

            {servicesOpen && (
              <div
                className="absolute right-0 mt-4 w-96 bg-white text-black rounded-xl shadow-lg p-6 grid grid-cols-2 gap-6 z-50"
                onMouseLeave={() => setServicesOpen(false)}
              >
                <NavLink
                  to="/mobile-app-development"
                  className="flex items-center space-x-3 hover:text-green-500"
                >
                  <FaMobileAlt className="text-2xl text-blue-600" />
                  <span>Mobile App Development</span>
                </NavLink>

                <NavLink
                  to="/website-development"
                  className="flex items-center space-x-3 hover:text-green-500"
                >
                  <FaGlobe className="text-2xl text-blue-600" />
                  <span>Website Development</span>
                </NavLink>

                <NavLink
                  to="/ui-ux-design"
                  className="flex items-center space-x-3 hover:text-green-500"
                >
                  <FaPaintBrush className="text-2xl text-blue-600" />
                  <span>UI/UX Design</span>
                </NavLink>

                <NavLink
                  to="/digital-marketing"
                  className="flex items-center space-x-3 hover:text-green-500"
                >
                  <FaBullhorn className="text-2xl text-blue-600" />
                  <span>Digital Marketing</span>
                </NavLink>
              </div>
            )}
          </div>

          {/* Contact Button Right */}
          <NavLink
            to="/contact"
            className="bg-green-500 text-black px-5 py-2 rounded-lg font-semibold hover:bg-green-400 transition"
          >
            Contact
          </NavLink>

        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-white text-3xl cursor-pointer" onClick={() => setOpen(!open)}>
          {open ? <HiX /> : <HiMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-black shadow-lg transition-all duration-300 overflow-hidden ${open ? "max-h-96" : "max-h-0"}`}>
        <ul className="flex flex-col px-6 py-4 space-y-4 text-white text-lg">
          <NavLink to="/" onClick={() => setOpen(false)} className={activeClass}>
            Home
          </NavLink>

          <NavLink to="/about" onClick={() => setOpen(false)} className={activeClass}>
            About
          </NavLink>

          <button className="text-left text-white" onClick={() => setServicesOpen(!servicesOpen)}>
            Services ▼
          </button>

          {servicesOpen && (
            <div className="bg-white text-black p-4 rounded-lg space-y-4">
              <NavLink to="/mobile-app-development" onClick={() => setOpen(false)} className="flex items-center space-x-3">
                <FaMobileAlt className="text-xl text-blue-600" />
                <span>Mobile App Development</span>
              </NavLink>
              
              <NavLink to="/website-development" onClick={() => setOpen(false)} className="flex items-center space-x-3">
                <FaGlobe className="text-xl text-blue-600" />
                <span>Website Development</span>
              </NavLink>

              <NavLink to="/ui-ux-design" onClick={() => setOpen(false)} className="flex items-center space-x-3">
                <FaPaintBrush className="text-xl text-blue-600" />
                <span>UI/UX Design</span>
              </NavLink>

              <NavLink to="/digital-marketing" onClick={() => setOpen(false)} className="flex items-center space-x-3">
                <FaBullhorn className="text-xl text-blue-600" />
                <span>Digital Marketing</span>
              </NavLink>
            </div>
          )}

          <NavLink to="/contact" onClick={() => setOpen(false)} className="bg-green-500 text-black px-5 py-2 rounded-lg font-semibold w-max">
            Contact
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
