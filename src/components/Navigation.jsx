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
    <nav className={`fixed top-0 w-full z-50 glass-effect border-b border-neutral-200 transition-all duration-300 ${scrolled ? 'shadow-lg' : ''}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono font-bold text-xl gradient-text hover:scale-105 transition-transform">
            Zaid Khan
          </a>

          <div className="hidden md:flex space-x-8">
            <a href="#home" className="nav-link text-neutral-700 hover:text-primary-600 transition-colors font-medium">Home</a>
            <a href="#about" className="nav-link text-neutral-700 hover:text-primary-600 transition-colors font-medium">About</a>
            <a href="#education" className="nav-link text-neutral-700 hover:text-primary-600 transition-colors font-medium">Education</a>
            <a href="#skills" className="nav-link text-neutral-700 hover:text-primary-600 transition-colors font-medium">Skills</a>
            <a href="#projects" className="nav-link text-neutral-700 hover:text-primary-600 transition-colors font-medium">Projects</a>
            <a href="#certifications" className="nav-link text-neutral-700 hover:text-primary-600 transition-colors font-medium">Certifications</a>
            <a href="#contact" className="nav-link text-neutral-700 hover:text-primary-600 transition-colors font-medium">Contact</a>
          </div>

          <a href="#contact" className="btn-hover-glow hidden md:block px-6 py-2 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-all duration-300 hover:shadow-lg hover:shadow-primary-600/25 hover:scale-105 transform">
            Let's Talk
          </a>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-primary-100"
          >
            <span className="iconify text-2xl" data-icon="mdi:menu"></span>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-neutral-200 glass-effect">
          <div className="px-6 py-6 space-y-4">
            <a href="#home" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-neutral-700 hover:text-primary-600 font-medium">Home</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-neutral-700 hover:text-primary-600 font-medium">About</a>
            <a href="#education" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-neutral-700 hover:text-primary-600 font-medium">Education</a>
            <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-neutral-700 hover:text-primary-600 font-medium">Skills</a>
            <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-neutral-700 hover:text-primary-600 font-medium">Projects</a>
            <a href="#certifications" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-neutral-700 hover:text-primary-600 font-medium">Certifications</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-neutral-700 hover:text-primary-600 font-medium">Contact</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block py-2 px-6 bg-primary-600 text-white rounded-lg font-medium text-center hover:bg-primary-700 transition-all duration-300 hover:shadow-lg hover:shadow-primary-600/25">
              Let's Talk
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
