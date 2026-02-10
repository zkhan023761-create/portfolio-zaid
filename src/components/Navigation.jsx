'use client';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.pageYOffset > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 glass-effect border-b border-neutral-200 transition-all duration-500 ${scrolled ? 'shadow-2xl shadow-primary-500/10 border-primary-200' : ''}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono font-bold text-xl gradient-text hover:scale-110 transition-all duration-300 animate-slideDown relative group">
            Zaid Khan
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-accent-600 group-hover:w-full transition-all duration-300"></span>
          </a>

          <div className="hidden md:flex space-x-8">
            <a href="#home" className="nav-link text-neutral-800 hover:text-primary-600 transition-all duration-300 font-medium relative group hover:-translate-y-1">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#about" className="nav-link text-neutral-800 hover:text-primary-600 transition-all duration-300 font-medium relative group hover:-translate-y-1">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#education" className="nav-link text-neutral-800 hover:text-primary-600 transition-all duration-300 font-medium relative group hover:-translate-y-1">
              Education
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#skills" className="nav-link text-neutral-800 hover:text-primary-600 transition-all duration-300 font-medium relative group hover:-translate-y-1">
              Skills
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#projects" className="nav-link text-neutral-800 hover:text-primary-600 transition-all duration-300 font-medium relative group hover:-translate-y-1">
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#certifications" className="nav-link text-neutral-800 hover:text-primary-600 transition-all duration-300 font-medium relative group hover:-translate-y-1">
              Certifications
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#contact" className="nav-link text-neutral-800 hover:text-primary-600 transition-all duration-300 font-medium relative group hover:-translate-y-1">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>

          <a href="#contact" className="btn-hover-glow hidden md:block px-6 py-2 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-all duration-300 hover:shadow-xl hover:shadow-primary-600/40 hover:scale-110 transform relative overflow-hidden group">
            <span className="relative z-10">Let's Talk</span>
            <span className="absolute inset-0 bg-gradient-to-r from-accent-600 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </a>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-primary-100 transition-all duration-300 hover:scale-110 hover:rotate-90"
          >
            <span className="iconify text-2xl" data-icon="mdi:menu"></span>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-neutral-200 glass-effect animate-slideDown">
          <div className="px-6 py-6 space-y-4">
            <a href="#home" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-neutral-900 hover:text-primary-600 font-semibold transition-all duration-300 hover:translate-x-2 hover:scale-105">Home</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-neutral-900 hover:text-primary-600 font-semibold transition-all duration-300 hover:translate-x-2 hover:scale-105">About</a>
            <a href="#education" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-neutral-900 hover:text-primary-600 font-semibold transition-all duration-300 hover:translate-x-2 hover:scale-105">Education</a>
            <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-neutral-900 hover:text-primary-600 font-semibold transition-all duration-300 hover:translate-x-2 hover:scale-105">Skills</a>
            <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-neutral-900 hover:text-primary-600 font-semibold transition-all duration-300 hover:translate-x-2 hover:scale-105">Projects</a>
            <a href="#certifications" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-neutral-900 hover:text-primary-600 font-semibold transition-all duration-300 hover:translate-x-2 hover:scale-105">Certifications</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-neutral-900 hover:text-primary-600 font-semibold transition-all duration-300 hover:translate-x-2 hover:scale-105">Contact</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block py-2 px-6 bg-primary-600 text-white rounded-lg font-medium text-center hover:bg-primary-700 transition-all duration-300 hover:shadow-xl hover:shadow-primary-600/40 hover:scale-105">
              Let's Talk
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
