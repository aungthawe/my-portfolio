"use client";

import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const menuItems = ["home", "about", "skills", "projects", "contact"];

  return (
    <header className="fixed top-0 left-0 w-full bg-white/5 backdrop-blur-md border-b border-white/10 shadow-sm z-50">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <h1
          onClick={() => handleScroll("home")}
          className="text-2xl font-semibold cursor-pointer"
        >
          Aung Thawe<span className="text-purple-700">.</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          {menuItems.map((item) => (
            <li
              key={item}
              onClick={() => handleScroll(item)}
              className="cursor-pointer hover:text-purple-700 transition-colors hover:-translate-y-1 duration-300 transform transition-transform"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden flex flex-col space-y-1"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className="w-6 h-[2px] bg-gray-700"></span>
          <span className="w-6 h-[2px] bg-gray-700"></span>
          <span className="w-6 h-[2px] bg-gray-700"></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <ul className="flex flex-col items-center py-3 space-y-3 text-gray-700 font-medium">
            {menuItems.map((item) => (
              <li
                key={item}
                onClick={() => handleScroll(item)}
                className="cursor-pointer hover:text-blue-500 transition-colors"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
