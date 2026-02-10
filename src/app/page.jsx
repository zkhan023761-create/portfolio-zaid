'use client';
import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import ThreeBackground from '@/components/ThreeBackground';

export default function Home() {
  useEffect(() => {
    // Initialize AOS
    if (typeof window !== 'undefined') {
      import('aos').then((AOS) => {
        AOS.init({
          duration: 1000,
          once: true,
          offset: 100
        });
      });
    }

    // Load Iconify
    const iconifyScript = document.createElement('script');
    iconifyScript.src = 'https://code.iconify.design/3/3.1.0/iconify.min.js';
    document.head.appendChild(iconifyScript);

    // Content Protection - Disable right-click
    const disableRightClick = (e) => {
      e.preventDefault();
      return false;
    };

    // Content Protection - Disable keyboard shortcuts
    const disableKeyboardShortcuts = (e) => {
      // Disable Ctrl+C, Ctrl+X, Ctrl+A, Ctrl+U, Ctrl+S, F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C
      if (
        (e.ctrlKey && (e.key === 'c' || e.key === 'x' || e.key === 'a' || e.key === 'u' || e.key === 's')) ||
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) ||
        e.key === 'F12'
      ) {
        e.preventDefault();
        return false;
      }
    };

    // Content Protection - Disable text selection via mouse
    const disableSelection = (e) => {
      e.preventDefault();
      showCopyAlert();
      return false;
    };

    // Show copy protection alert
    const showCopyAlert = () => {
      const alert = document.createElement('div');
      alert.className = 'copy-alert';
      alert.textContent = '⚠️ Content is Protected!';
      document.body.appendChild(alert);
      
      setTimeout(() => {
        alert.remove();
      }, 2000);
    };

    // Add event listeners
    document.addEventListener('contextmenu', disableRightClick);
    document.addEventListener('keydown', disableKeyboardShortcuts);
    document.addEventListener('selectstart', disableSelection);
    document.addEventListener('copy', disableSelection);
    document.addEventListener('cut', disableSelection);

    // Smooth scroll for navigation links
    const handleClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        e.preventDefault();
        const element = document.querySelector(target.getAttribute('href'));
        if (element) {
          const offsetTop = element.offsetTop - 80;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleClick);

    // Skill progress bar animation
    const skillObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const width = entry.target.getAttribute('data-progress') + '%';
          entry.target.style.width = '0%';
          setTimeout(() => {
            entry.target.style.width = width;
          }, 100);
          skillObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    setTimeout(() => {
      const skillBars = document.querySelectorAll('.skill-progress');
      skillBars.forEach(bar => skillObserver.observe(bar));
    }, 1000);

    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('contextmenu', disableRightClick);
      document.removeEventListener('keydown', disableKeyboardShortcuts);
      document.removeEventListener('selectstart', disableSelection);
      document.removeEventListener('copy', disableSelection);
      document.removeEventListener('cut', disableSelection);
    };
  }, []);

  return (
    <>
      <ThreeBackground />
      <Navigation />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
