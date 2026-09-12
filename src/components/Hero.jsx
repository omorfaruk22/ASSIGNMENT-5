import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="bg-white py-12 md:py-20 border-b border-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
            Build Your Ideal <br />
            <span className="brand-gradient-text">Development Stack</span>
          </h1>
          <p className="text-gray-500 text-sm sm:text-base max-w-md leading-relaxed">
            Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a 
              href="#technologies" 
              className="brand-gradient-btn text-white text-xs font-semibold px-5 py-3 rounded-lg shadow-xs hover:opacity-95 transition-opacity"
            >
              Explore Technologies
            </a>
            <a 
              href="#about" 
              className="border border-gray-200 text-gray-700 hover:bg-gray-50 text-xs font-semibold px-5 py-3 rounded-lg transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Hero Image Section */}
        <div className="flex justify-center md:justify-end">
          <div className="w-full max-w-md">
            <img 
              src="/hero-stack.png" 
              alt="Hero Stack Banner" 
              className="w-full h-auto object-contain drop-shadow-lg rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}