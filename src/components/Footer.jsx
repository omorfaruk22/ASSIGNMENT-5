import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 text-gray-500 text-xs pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <img 
              src="/logo-text.png" 
              alt="Dev Stack Logo" 
              className="h-6 w-auto object-contain"
            />
          </div>
          <p className="text-gray-400 text-xs leading-relaxed max-w-xs">
            Curated tools, technologies, and resources for modern software engineering.
          </p>
          <div className="flex gap-4 pt-1 text-xs text-gray-400">
            <a href="#github" className="hover:text-gray-600">GitHub</a>
            <a href="#twitter" className="hover:text-gray-600">Twitter</a>
            <a href="#linkedin" className="hover:text-gray-600">LinkedIn</a>
          </div>
        </div>

        <div>
          <h4 className="text-gray-900 font-bold mb-3 text-xs uppercase tracking-wider">Product</h4>
          <ul className="space-y-2 text-xs">
            <li><a href="#home" className="hover:text-gray-900">Home</a></li>
            <li><a href="#technologies" className="hover:text-gray-900">Technologies</a></li>
            <li><a href="#projects" className="hover:text-gray-900">Projects</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-gray-900 font-bold mb-3 text-xs uppercase tracking-wider">Company</h4>
          <ul className="space-y-2 text-xs">
            <li><a href="#about" className="hover:text-gray-900">About</a></li>
            <li><a href="#contact" className="hover:text-gray-900">Contact</a></li>
            <li><a href="#careers" className="hover:text-gray-900">Careers</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-gray-900 font-bold mb-3 text-xs uppercase tracking-wider">Legal</h4>
          <ul className="space-y-2 text-xs">
            <li><a href="#privacy" className="hover:text-gray-900">Privacy Policy</a></li>
            <li><a href="#terms" className="hover:text-gray-900">Terms of Service</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-gray-400">
        <p>© {new Date().getFullYear()} DevStack. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#privacy" className="hover:text-gray-600">Privacy</a>
          <a href="#terms" className="hover:text-gray-600">Terms</a>
        </div>
      </div>
    </footer>
  );
}