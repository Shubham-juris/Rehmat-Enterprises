import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../assets/navbar/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Active class function
  const activeClass = ({ isActive }) =>
    isActive
      ? "text-green-400 font-semibold"
      : "text-white hover:text-green-400";

  return (
    <nav className="w-full bg-black shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <NavLink to="/">
          <img
            src={logo}
            alt="Rehmat Enterprises Logo"
            className="h-14 w-auto"
          />
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          <li>
            <NavLink to="/" className={activeClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={activeClass}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className={activeClass}>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={activeClass}>
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden text-white text-3xl cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenu />}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden bg-black shadow-lg transition-all duration-300 overflow-hidden
        ${open ? "max-h-60" : "max-h-0"}`}
      >
        <ul className="flex flex-col px-6 py-4 space-y-4 text-lg font-medium">
          <li>
            <NavLink
              to="/"
              onClick={() => setOpen(false)}
              className={activeClass}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              onClick={() => setOpen(false)}
              className={activeClass}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              onClick={() => setOpen(false)}
              className={activeClass}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              onClick={() => setOpen(false)}
              className={activeClass}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
