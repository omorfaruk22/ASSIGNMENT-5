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
}import React, { useState, useEffect } from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechCard from './components/TechCard';
import StackSidebar from './components/StackSidebar';
import Footer from './components/Footer';

export default function App() {
  const [technologies, setTechnologies] = useState([]);
  const [stack, setStack] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/technologies.json')
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load JSON data:', err);
        setLoading(false);
      });
  }, []);

  const handleAddToStack = (tech) => {
    const exists = stack.some((item) => item.id === tech.id);
    if (exists) {
      alert(`${tech.name} is already in your stack!`);
      return;
    }
    setStack((prev) => [...prev, tech]);
  };

  const handleRemoveFromStack = (id) => {
    setStack((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearAll = () => {
    setStack([]);
  };

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-800 flex flex-col font-sans">
      <Navbar />
      <Hero />

      <main id="technologies" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow w-full">
        <div className="mb-8">
          <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            Explore the <span className="brand-gradient-text">Technologies</span>
          </h2>
          <p className="text-slate-400 text-xs mt-1">Pick one technology per category to build your ideal stack.</p>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 text-slate-400">
            <div className="w-8 h-8 border-3 border-emerald-500 border-t-transparent rounded-full animate-spin mb-3"></div>
            <p className="text-xs font-medium">Loading technologies...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {technologies.map((tech) => (
                <TechCard
                  key={tech.id}
                  tech={tech}
                  onAdd={handleAddToStack}
                  isAdded={stack.some((item) => item.id === tech.id)}
                />
              ))}
            </div>

            <div className="lg:col-span-1">
              <StackSidebar
                stack={stack}
                onRemove={handleRemoveFromStack}
                onClearAll={handleClearAll}
              />
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}