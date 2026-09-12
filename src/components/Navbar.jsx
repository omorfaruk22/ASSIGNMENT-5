import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 hover:text-gray-900 focus:outline-none p-1"
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Brand Logo Picture */}
        <div className="flex items-center gap-2">
          <img 
            src="/logo-text.png" 
            alt="Dev Stack Logo" 
            className="h-8 w-auto object-contain"
          />
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600">
          <a href="#home" className="text-emerald-600 font-semibold">Home</a>
          <a href="#technologies" className="hover:text-gray-900 transition-colors">Technologies</a>
          <a href="#projects" className="hover:text-gray-900 transition-colors">Projects</a>
          <a href="#about" className="hover:text-gray-900 transition-colors">About</a>
          <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3">
          <button className="text-sm font-medium text-gray-700 hover:text-gray-900 px-3 py-1.5">
            Sign In
          </button>
          <button className="brand-gradient-btn text-white text-sm font-medium px-5 py-2 rounded-full shadow-xs hover:opacity-95 transition-opacity">
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-4 space-y-2 text-sm font-medium text-gray-700">
          <a href="#home" className="block py-2 text-emerald-600 font-semibold">Home</a>
          <a href="#technologies" className="block py-2 hover:text-gray-900">Technologies</a>
          <a href="#projects" className="block py-2 hover:text-gray-900">Projects</a>
          <a href="#about" className="block py-2 hover:text-gray-900">About</a>
          <a href="#contact" className="block py-2 hover:text-gray-900">Contact</a>
        </div>
      )}
    </header>
  );
}