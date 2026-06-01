'use client';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    // AOS
    if (typeof window !== 'undefined') {
      import('aos').then((AOS) => {
        AOS.init({ duration: 800, once: true, offset: 80 });
      });
    }

    // Iconify
    const iconifyScript = document.createElement('script');
    iconifyScript.src = 'https://code.iconify.design/3/3.1.0/iconify.min.js';
    document.head.appendChild(iconifyScript);

    // Smooth scroll
    const handleClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        e.preventDefault();
        const el = document.querySelector(target.getAttribute('href'));
        if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
      }
    };
    document.addEventListener('click', handleClick);

    // Skill progress bars
    const skillObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const width = entry.target.getAttribute('data-progress') + '%';
          entry.target.style.width = '0%';
          setTimeout(() => { entry.target.style.width = width; }, 100);
          skillObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    setTimeout(() => {
      document.querySelectorAll('.skill-progress').forEach(bar => skillObserver.observe(bar));
    }, 1000);

    return () => {
      document.removeEventListener('click', handleClick);
      ScrollTrigger.getAll().forEach(t => t.kill());
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
