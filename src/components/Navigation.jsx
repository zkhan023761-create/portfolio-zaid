'use client';
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const linksRef = useRef([]);
  const btnRef = useRef(null);

  useEffect(() => {
    // Intro animation
    const tl = gsap.timeline();
    tl.fromTo(navRef.current, { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power4.out' })
      .fromTo(logoRef.current, { x: -30, opacity: 0 }, { x: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }, '-=0.5')
      .fromTo(linksRef.current, { y: -20, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.07, duration: 0.5, ease: 'power2.out' }, '-=0.4')
      .fromTo(btnRef.current, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(1.7)' }, '-=0.3');

    // Magnetic effect helper
    const makeMagnetic = (element, strength = 0.25) => {
      if (!element) return;
      
      const handleMouseMove = (e) => {
        const bound = element.getBoundingClientRect();
        const x = e.clientX - (bound.left + bound.width / 2);
        const y = e.clientY - (bound.top + bound.height / 2);
        
        gsap.to(element, {
          x: x * strength,
          y: y * strength,
          duration: 0.3,
          ease: 'power2.out'
        });
      };
      
      const handleMouseLeave = () => {
        gsap.to(element, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: 'elastic.out(1.1, 0.4)'
        });
      };
      
      element.addEventListener('mousemove', handleMouseMove);
      element.addEventListener('mouseleave', handleMouseLeave);
      
      return () => {
        element.removeEventListener('mousemove', handleMouseMove);
        element.removeEventListener('mouseleave', handleMouseLeave);
      };
    };

    // Make elements magnetic
    const cleanups = [];
    if (logoRef.current) cleanups.push(makeMagnetic(logoRef.current, 0.2));
    if (btnRef.current) cleanups.push(makeMagnetic(btnRef.current, 0.25));
    
    // Slight delay to ensure refs are fully populated
    const timeoutId = setTimeout(() => {
      linksRef.current.forEach(link => {
        if (link) cleanups.push(makeMagnetic(link, 0.3));
      });
    }, 100);

    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', handleScroll);
      cleanups.forEach(cleanup => cleanup && cleanup());
    };
  }, []);

  const navLinks = ['Home', 'About', 'Education', 'Skills', 'Projects', 'Certifications', 'Contact'];

  return (
    <nav ref={navRef} className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-[#030712]/90 backdrop-blur-xl border-b border-cyan-500/10 shadow-lg shadow-cyan-500/5' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex justify-between items-center h-16">
          <a ref={logoRef} href="#home" className="font-mono font-bold text-xl relative group">
            <span className="gradient-text">ZK</span>
            <span className="text-white/60">.</span>
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-cyan-400 to-violet-500 group-hover:w-full transition-all duration-500"></span>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, i) => (
              <a key={link} ref={el => linksRef.current[i] = el} href={`#${link.toLowerCase()}`}
                className="text-neutral-500 hover:text-white text-sm font-medium tracking-wide transition-all duration-300 relative group">
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          <a ref={btnRef} href="#contact"
            className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-500/40 text-cyan-400 text-sm font-medium hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
            <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></span>
            Let&apos;s Talk
          </a>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2">
            <span className="iconify text-2xl" data-icon={mobileMenuOpen ? 'mdi:close' : 'mdi:menu'}></span>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-[#030712]/98 backdrop-blur-xl border-t border-white/5">
          <div className="px-6 py-6 space-y-4">
            {navLinks.map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-neutral-400 hover:text-cyan-400 font-medium transition-colors border-b border-white/5 text-sm">
                {link}
              </a>
            ))}
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}
              className="block py-2 px-4 bg-gradient-to-r from-cyan-500 to-violet-600 text-white rounded-full font-medium text-center text-sm">
              Let&apos;s Talk
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
