import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for page navigation
import logo from '../../assets/assessaai_logo2.png'; // Ensure path is correct
import './Navbar.css'; // For any custom CSS

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar bg-white shadow-md fixed w-full z-20">
      <div className="navbar-container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="navbar-logo flex items-center">
          <img src={logo} alt="ASSESSA AI Logo" className="h-10" />
        </div>

        {/* Desktop Menu */}
        <div className="navbar-links hidden md:flex items-center space-x-8">
          <ScrollLink to="home" smooth={true} duration={500} className="text-gray-700 hover:underline cursor-pointer">
            Home
          </ScrollLink>
          <ScrollLink to="features" smooth={true} duration={500} className="text-gray-700 hover:underline cursor-pointer">
            Features
          </ScrollLink>
          <ScrollLink to="pricing" smooth={true} duration={500} className="text-gray-700 hover:underline cursor-pointer">
            Pricing
          </ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={500} className="text-gray-700 hover:underline cursor-pointer">
            Contact
          </ScrollLink>
        </div>

        {/* Desktop Action Buttons */}
        <div className="navbar-actions hidden md:flex space-x-4">
          <Link to="/login" className="text-gray-700 hover:text-red-600">Login</Link>
          <Link to="/signup" className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition duration-300">
            Sign Up
          </Link>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none" aria-label="Toggle Menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md transition-all duration-300 ease-in-out transform">
          <div className="flex flex-col items-start px-6 py-3 space-y-2">
            <ScrollLink to="home" smooth={true} duration={500} className="text-gray-700 hover:underline cursor-pointer w-full" onClick={toggleMenu}>
              Home
            </ScrollLink>
            <ScrollLink to="features" smooth={true} duration={500} className="text-gray-700 hover:underline cursor-pointer w-full" onClick={toggleMenu}>
              Features
            </ScrollLink>
            <ScrollLink to="pricing" smooth={true} duration={500} className="text-gray-700 hover:underline cursor-pointer w-full" onClick={toggleMenu}>
              Pricing
            </ScrollLink>
            <ScrollLink to="contact" smooth={true} duration={500} className="text-gray-700 hover:underline cursor-pointer w-full" onClick={toggleMenu}>
              Contact
            </ScrollLink>
            <Link to="/login" className="text-gray-700 hover:text-red-600 w-full text-left" onClick={toggleMenu}>Login</Link>
            <Link to="/signup" className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition duration-300 w-full text-left" onClick={toggleMenu}>
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;