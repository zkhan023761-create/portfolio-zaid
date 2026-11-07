'use client';
import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import LoadingScreen from '@/components/LoadingScreen';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Journal from '@/components/Journal';
import Explorations from '@/components/Explorations';
import Stats from '@/components/Stats';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import ThreeBackground from '@/components/ThreeBackground';
import SmoothScroll from '@/components/SmoothScroll';
import CustomCursor from '@/components/CustomCursor';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Iconify Script Loader for supplementary icons
    const iconifyScript = document.createElement('script');
    iconifyScript.src = 'https://code.iconify.design/3/3.1.0/iconify.min.js';
    document.head.appendChild(iconifyScript);

    // Smooth scroll anchor handler using Lenis
    const handleClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        const href = target.getAttribute('href');
        if (href === '#' || href === '') return;

        e.preventDefault();
        const el = document.querySelector(href);
        if (el) {
          if (window.lenis) {
            window.lenis.scrollTo(el, { offset: -70 });
          } else {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    };
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      <SmoothScroll>
        <CustomCursor />
        <ThreeBackground />
        <Navigation />

        <main className="relative z-10 w-full overflow-hidden bg-bg">
          {/* Section 2: Cosmic Hero (Integrated with Nexcore NIT AI/ML) */}
          <Hero />

          {/* Section 3: Selected Works (Bento Grid: zunicreation.xyz) */}
          <Projects />

          {/* Section 4: Skills & DevOps (Python, SQL, Excel, Power BI, PM2 DevOps) */}
          <Skills />

          {/* Section 5: Academic Foundation (B.Voc in AI/DS at Nexcore NIT & HSC 12th from Anjuman-i-Islam) */}
          <Education />

          {/* Section 6: Journal & Verified Credentials (Google AI, CODTECH, Nexcore, Anthropic, Intel) */}
          <Journal />

          {/* Section 7: Explorations (Visual Showcase: 3 Live Platforms, Figma & GitHub) */}
          <Explorations />

          {/* Section 7: Stats */}
          <Stats />

          {/* Section 8: Contact & Inverted Cosmic Footer */}
          <Footer />
        </main>
      </SmoothScroll>

      {/* Viewport Fixed Floating WhatsApp */}
      <WhatsAppFloat />
    </>
  );
}
