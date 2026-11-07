"use client";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const ROLES = [
  "Creative Developer",
  "Fullstack Engineer",
  "AI/ML Specialist (Nexcore)",
  "DevOps & PM2 Architect",
];

export default function Hero() {
  const videoRef = useRef(null);
  const [roleIndex, setRoleIndex] = useState(0);

  // HLS Video Integration
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const hlsSrc =
      "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";
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
      } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = hlsSrc;
        video.addEventListener("loadedmetadata", () => {
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

  // Cycling Roles every 2 seconds
  useEffect(() => {
    const roleTimer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2000);
    return () => clearInterval(roleTimer);
  }, []);

  // GSAP Entrance Animations
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(
      ".name-reveal",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, delay: 0.1 },
    );
    tl.fromTo(
      ".blur-in",
      { opacity: 0, filter: "blur(10px)", y: 20 },
      { opacity: 1, filter: "blur(0px)", y: 0, duration: 1, stagger: 0.1 },
      "-=0.8",
    );
  }, []);

  const handleScrollTo = (targetId) => {
    const el = document.querySelector(targetId);
    if (el) {
      if (window.lenis) {
        window.lenis.scrollTo(el, { offset: -70 });
      } else {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-bg"
    >
      {/* Background HLS Video */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover -translate-x-1/2 -translate-y-1/2 opacity-75"
        />
        {/* Dark overlay: bg-black/20 */}
        <div className="absolute inset-0 bg-black/20" />
        {/* Bottom fade: h-48 bg-gradient-to-t from-bg to-transparent */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-linear-to-t from-bg to-transparent" />
      </div>

      {/* Hero Content (Centered, z-10) */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center pt-24 pb-20">
        {/* Eyebrow */}
        <div className="blur-in text-xs text-muted uppercase tracking-[0.25em] mb-8 font-medium flex items-center justify-center gap-2 flex-wrap font-mono">
          <span>COLLECTION &apos;26</span>
          <span>•</span>
          <span>CREATIVE DEVELOPER &amp; ARCHITECT</span>
          <span>•</span>
          <span className="text-[#89AACC]">MUMBAI, IN</span>
        </div>

        {/* Name */}
        <h1 className="name-reveal text-6xl md:text-8xl lg:text-9xl font-display italic leading-[0.9] tracking-tight text-text-primary mb-6">
          Zaid Khan
        </h1>

        {/* Role line */}
        <div className="blur-in text-base md:text-lg text-muted mb-4 flex items-center justify-center flex-wrap gap-1.5 font-light">
          <span>A</span>
          <span
            key={roleIndex}
            className="font-display italic text-text-primary text-xl md:text-2xl animate-role-fade-in inline-block mx-1"
          >
            {ROLES[roleIndex]}
          </span>
          <span>lives in Mumbai.</span>
        </div>

        {/* Description */}
        <p className="blur-in text-sm md:text-base text-muted max-w-xl mb-10 leading-relaxed font-light">
          Designing seamless digital interactions, bespoke web platforms, AI/ML
          pipelines, and scalable production architectures with modern web
          technologies.
        </p>

        {/* CTA Buttons */}
        <div className="blur-in inline-flex items-center gap-4 flex-wrap justify-center">
          {/* See Works (Solid button) */}
          <button
            onClick={() => handleScrollTo("#work")}
            className="group relative rounded-full text-sm font-medium px-7 py-3.5 transition-all duration-300 hover:scale-105 overflow-hidden"
          >
            <span className="absolute inset-0 bg-text-primary group-hover:opacity-0 transition-opacity duration-300" />
            <span className="absolute -inset-px rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            <span className="absolute inset-px rounded-full bg-bg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            <span className="relative z-10 text-bg group-hover:text-text-primary transition-colors duration-300 flex items-center gap-2">
              <span>See Works</span>
              <i className="fa-solid fa-arrow-right text-xs transition-transform duration-200 group-hover:translate-x-1" />
            </span>
          </button>

          {/* Reach out (Outlined button) */}
          <button
            onClick={() => handleScrollTo("#contact")}
            className="group relative rounded-full text-sm font-medium px-7 py-3.5 transition-all duration-300 hover:scale-105 border-2 border-stroke bg-bg hover:border-transparent"
          >
            <span className="absolute -inset-[1.5px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            <span className="relative z-10 text-text-primary flex items-center gap-2">
              <span>Reach out...</span>
              <i className="fa-solid fa-arrow-up-right-from-square text-[11px] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center pointer-events-none">
        <span className="text-xs text-muted uppercase tracking-[0.2em] mb-2 font-medium">
          SCROLL
        </span>
        <div className="w-px h-10 bg-stroke relative overflow-hidden">
          <div className="w-full h-1/2 accent-gradient animate-scroll-down" />
        </div>
      </div>
    </section>
  );
}
