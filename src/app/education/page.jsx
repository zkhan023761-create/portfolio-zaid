'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Education from '@/components/Education';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import ThreeBackground from '@/components/ThreeBackground';
import SmoothScroll from '@/components/SmoothScroll';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export default function EducationPage() {
  useEffect(() => {
    // Iconify Script Loader for supplementary icons
    const iconifyScript = document.createElement('script');
    iconifyScript.src = 'https://code.iconify.design/3/3.1.0/iconify.min.js';
    document.head.appendChild(iconifyScript);
  }, []);

  return (
    <SmoothScroll>
      <CustomCursor />
      <ThreeBackground />
      <Navigation />

      <main className="relative z-10 w-full min-h-screen bg-bg pt-28 pb-16">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-stroke bg-surface/50 text-xs text-muted hover:text-white hover:border-[#89AACC]/50 transition-colors font-mono"
          >
            <i className="fa-solid fa-arrow-left text-xs" />
            <span>Back to Full Portfolio</span>
          </Link>
        </div>

        <Education />

        <Footer />
      </main>

      <WhatsAppFloat />
    </SmoothScroll>
  );
}

