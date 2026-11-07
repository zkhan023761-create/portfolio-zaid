'use client';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const SOCIAL_LINKS = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/zaid-khan-943376379', icon: 'fa-brands fa-linkedin' },
  { name: 'GitHub', href: 'https://github.com/zkhan023761-create', icon: 'fa-brands fa-github' },
];

export default function Footer() {
  const videoRef = useRef(null);
  const marqueeRef = useRef(null);
  const [copied, setCopied] = useState(false);

  const handleEmailClick = (e) => {
    // Trigger mail client
    window.location.href = 'mailto:zkhan023761@gmail.com';
    // Copy to clipboard fallback
    if (navigator.clipboard) {
      navigator.clipboard.writeText('zkhan023761@gmail.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  // Inverted HLS Video Setup
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const hlsSrc = 'https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8';
    let hlsInstance = null;

    const setupHls = () => {
      if (window.Hls && window.Hls.isSupported()) {
        hlsInstance = new window.Hls({
          enableWorker: true,
          lowLatencyMode: true,
        });
        hlsInstance.loadSource(hlsSrc);
        hlsInstance.attachMedia(video);
        hlsInstance.on(window.Hls.Events.MANIFEST_PARSED, () => {
          video.play().catch(() => {});
        });
      } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = hlsSrc;
        video.addEventListener('loadedmetadata', () => {
          video.play().catch(() => {});
        });
      }
    };

    if (window.Hls) {
      setupHls();
    } else {
      const interval = setInterval(() => {
        if (window.Hls) {
          clearInterval(interval);
          setupHls();
        }
      }, 100);
      return () => {
        clearInterval(interval);
        if (hlsInstance) hlsInstance.destroy();
      };
    }

    return () => {
      if (hlsInstance) hlsInstance.destroy();
    };
  }, []);

  // GSAP Marquee continuous animation
  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const anim = gsap.to(marquee, {
      xPercent: -50,
      duration: 35,
      ease: 'none',
      repeat: -1,
    });

    return () => anim.kill();
  }, []);

  return (
    <footer
      id="contact"
      className="relative bg-bg pt-20 md:pt-28 pb-8 md:pb-12 overflow-hidden border-t border-stroke/50"
    >
      {/* Background Inverted HLS Video: scale-y-[-1] */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover -translate-x-1/2 -translate-y-1/2 scale-y-[-1] opacity-40"
        />
        {/* Heavier overlay: bg-black/60 */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-300 mx-auto px-6 md:px-10 lg:px-16 flex flex-col items-center text-center">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-px bg-stroke" />
          <span className="text-xs text-muted uppercase tracking-[0.3em] font-medium">
            Let&apos;s Connect
          </span>
          <span className="w-8 h-px bg-stroke" />
        </div>

        {/* Big Heading */}
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-normal text-text-primary tracking-tight mb-4">
          Have an <span className="font-display italic">idea?</span>
        </h2>
        <p className="text-muted text-sm md:text-base max-w-md mb-10 leading-relaxed font-light">
          Available for bespoke web development, AI integration, data science pipelines, and scalable full-stack architectures.
        </p>

        {/* Email CTA Button with gradient hover border ring & Gmail fallback */}
        <div className="flex flex-col items-center gap-3 mb-16">
          <a
            href="mailto:zkhan023761@gmail.com"
            onClick={handleEmailClick}
            className="group relative inline-flex items-center gap-3 rounded-full text-base md:text-lg px-8 py-4 bg-bg text-text-primary border border-stroke hover:border-transparent transition-all duration-300 hover:scale-105 shadow-xl cursor-pointer"
          >
            <span className="absolute -inset-[1.5px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            <i className="fa-solid fa-envelope text-xs text-[#89AACC]" />
            <span className="font-mono text-xs sm:text-sm text-[#89AACC]">
              {copied ? 'Copied zkhan023761@gmail.com!' : 'zkhan023761@gmail.com'}
            </span>
            <i className="fa-solid fa-arrow-up-right-from-square text-xs transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <div className="flex items-center gap-3 text-xs text-muted font-mono">
            <span>Click to email or copy address</span>
            <span>•</span>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=zkhan023761@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#89AACC] hover:underline flex items-center gap-1.5"
            >
              <span>Open in Gmail</span>
              <i className="fa-solid fa-arrow-up-right-from-square text-[9px]" />
            </a>
          </div>
        </div>
      </div>

      {/* GSAP Marquee: "BUILDING THE FUTURE • " repeated */}
      <div className="relative z-10 w-full overflow-hidden py-6 border-y border-stroke/40 my-8 bg-surface/30 backdrop-blur-sm select-none">
        <div
          ref={marqueeRef}
          className="flex whitespace-nowrap text-3xl sm:text-4xl md:text-5xl font-display italic text-text-primary/70 tracking-widest"
        >
          {Array.from({ length: 16 }).map((_, i) => (
            <span key={i} className="inline-block mx-4">
              BUILDING THE FUTURE <span className="text-[#89AACC] not-italic">•</span>{' '}
            </span>
          ))}
        </div>
      </div>

      {/* Footer Status Bar */}
      <div className="relative z-10 max-w-300 mx-auto px-6 md:px-10 lg:px-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-muted">
        {/* Green pulsing dot + status */}
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          <span className="text-text-primary/90 font-medium tracking-wide">
            Available for projects
          </span>
          <span className="text-stroke">•</span>
          <span>Mumbai, India</span>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-5 flex-wrap">
          {SOCIAL_LINKS.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-text-primary transition-colors font-medium tracking-wider flex items-center gap-1.5 group"
            >
              <i className={`${item.icon} text-sm group-hover:text-[#89AACC] transition-colors`} />
              <span>{item.name}</span>
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="font-mono text-[11px] text-muted/80">
          © {new Date().getFullYear()} Zaid Khan. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
