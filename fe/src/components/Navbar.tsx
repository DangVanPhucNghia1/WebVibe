import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from "react-router-dom";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-[#67AE6E] py-4 px-4 lg:px-12 shadow-sm z-50">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src="/img/homepage/logo1.png" alt="WebVibe Logo" className="h-6" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-8 text-sm font-medium text-white">
          <Link to="/" className="hover:text-black">WebVibe</Link>
          <Link to="/product" className="hover:text-black">Live Product</Link>
          <Link to="/contact" className="hover:text-black">Contact</Link>
          <Link to="/aboutUs" className="hover:text-black">About Us</Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="lg:hidden mt-4 bg-white shadow-md rounded-md px-6 py-4 space-y-4 text-sm font-medium text-gray-700">
          <Link to="/" onClick={() => setMenuOpen(false)} className="block hover:text-black">WebVibe</Link>
          <Link to="/product" onClick={() => setMenuOpen(false)} className="block hover:text-black">Live Product</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)} className="block hover:text-black">Contact</Link>
          <Link to="/aboutUs" onClick={() => setMenuOpen(false)} className="block hover:text-black">About Us</Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
