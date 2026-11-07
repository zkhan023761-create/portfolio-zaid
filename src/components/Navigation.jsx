'use client';
import { useState, useEffect } from 'react';

const NAV_ITEMS = [
  { name: 'Home', href: '#home' },
  { name: 'Work', href: '#work' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Credentials', href: '#credentials' },
  { name: 'Stats', href: '#stats' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Section spy
      const sections = ['home', 'work', 'skills', 'education', 'credentials', 'stats'];
      const scrollPos = window.scrollY + 200;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            const match = NAV_ITEMS.find(
              (item) => item.href.substring(1) === sectionId
            );
            if (match) setActiveSection(match.name);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href, name) => {
    e.preventDefault();
    setActiveSection(name);
    const target = document.querySelector(href);
    if (target) {
      if (window.lenis) {
        window.lenis.scrollTo(target, { offset: -70 });
      } else {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full flex justify-center sm:pt-4 sm:px-4 pointer-events-none">
      <div
        className={`pointer-events-auto w-full sm:w-auto max-w-full sm:max-w-max flex items-center bg-surface/90 backdrop-blur-xl border-b sm:border border-white/10 sm:rounded-full px-2 sm:px-3 py-2 transition-all duration-300 shadow-lg shadow-black/50 ${
          scrolled ? 'bg-surface/95 sm:border-white/20' : ''
        }`}
      >
        {/* Horizontal scroll track on mobile phones, flex on desktop */}
        <div className="flex items-center w-full overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden px-1 space-x-1 sm:space-x-1 shrink-0">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home', 'Home')}
            className="group relative w-8 h-8 sm:w-9 sm:h-9 rounded-full p-[1.5px] transition-transform duration-300 hover:scale-110 flex items-center justify-center shrink-0"
          >
            <div className="absolute inset-0 rounded-full accent-gradient group-hover:rotate-180 transition-transform duration-700" />
            <div className="relative w-full h-full bg-bg rounded-full flex items-center justify-center">
              <span className="font-display italic text-xs sm:text-[13px] text-text-primary tracking-tight">
                ZK
              </span>
            </div>
          </a>

          {/* Divider */}
          <div className="w-px h-4 sm:h-5 bg-stroke mx-1 shrink-0" />

          {/* Nav Links */}
          <div className="flex items-center space-x-0.5 sm:space-x-1 shrink-0">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.name;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href, item.name)}
                  className={`text-xs sm:text-sm rounded-full px-2.5 sm:px-4 py-1.5 sm:py-2 transition-all duration-200 font-medium shrink-0 whitespace-nowrap ${
                    isActive
                      ? 'text-text-primary bg-stroke/50'
                      : 'text-muted hover:text-text-primary hover:bg-stroke/50'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </div>

          {/* Divider */}
          <div className="w-px h-4 sm:h-5 bg-stroke mx-1 shrink-0" />

          {/* "Say hi" button */}
          <a
            href="mailto:zkhan023761@gmail.com"
            onClick={() => {
              window.location.href = 'mailto:zkhan023761@gmail.com';
            }}
            className="group relative text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 inline-flex items-center cursor-pointer shrink-0 whitespace-nowrap"
          >
            <span className="absolute -inset-[1.5px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            <span className="relative z-10 flex items-center gap-1.5 font-medium text-text-primary">
              <span>Say hi</span>
              <i className="fa-solid fa-arrow-up-right-from-square text-[10px] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </a>

          {/* Divider */}
          <div className="w-px h-4 sm:h-5 bg-stroke mx-1 shrink-0" />

          {/* LinkedIn & GitHub shortcuts */}
          <div className="flex items-center space-x-1 shrink-0 pr-1">
            <a
              href="https://www.linkedin.com/in/zaid-khan-943376379"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn Profile"
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-stroke/70 flex items-center justify-center text-muted hover:text-text-primary hover:border-[#89AACC]/60 transition-all bg-bg/50 shrink-0"
            >
              <i className="fa-brands fa-linkedin text-xs" />
            </a>
            <a
              href="https://github.com/zkhan023761-create"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub Profile"
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-stroke/70 flex items-center justify-center text-muted hover:text-text-primary hover:border-[#89AACC]/60 transition-all bg-bg/50 shrink-0"
            >
              <i className="fa-brands fa-github text-xs" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
