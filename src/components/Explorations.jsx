"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ALL_PROJECTS = [
  {
    id: "zunicreation",
    title: "Zuniii Creation",
    subtitle: "Live Bridal & Contemporary Mehndi Web Platform",
    category: "Live Flagship Platform",
    badge: "LIVE PRODUCTION",
    badgeColor: "text-emerald-400 bg-emerald-950/80 border-emerald-500/30",
    image: "/projects/zunicreation-home.png",
    cardPosition: "top-left",
    cardClass: "card-float-tl",
    rotation: "rotate-0 lg:-rotate-2",
    sizeClass: "max-w-[420px]",
    liveUrl: "https://zunicreation.xyz",
    githubUrl: "https://github.com/zkhan023761-create",
    description:
      "A full-stack, bespoke web platform designed and deployed for Zuniii Creation in Mumbai. Engineered with Next.js, responsive luxury galleries, direct WhatsApp client booking pipeline, and live custom domain configuration with 100% uptime.",
    tags: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "WhatsApp API",
      "PM2 Daemons",
      "zunicreation.xyz",
    ],
  },
  {
    id: "rescuebite",
    title: "RescueBite Platform",
    subtitle: "Smart Food Rescue & Surplus Redistribution",
    category: "Collaborative Impact Platform",
    badge: "LOGISTICS & IMPACT",
    badgeColor: "text-amber-400 bg-amber-950/80 border-amber-500/30",
    image: "/projects/rescuebite-home.png",
    cardPosition: "top-right",
    cardClass: "card-float-tr",
    rotation: "rotate-0 lg:rotate-1",
    sizeClass: "max-w-[440px]",
    liveUrl: "https://rescuebiteofficial.vercel.app/",
    githubUrl: "https://github.com/zkhan023761-create",
    description:
      "A collaborative community platform connecting restaurants, donors, and volunteers to reduce food waste through real-time surplus redistribution, volunteer coordination, and smart logistical routing.",
    tags: [
      "React",
      "Logistics UX",
      "Real-Time Routing",
      "Social Impact",
      "Vercel",
    ],
  },
  {
    id: "mediai",
    title: "Medi AI Ecosystem",
    subtitle: "Clinical Intelligence & Connected Healthcare",
    category: "Clinical Intelligence & Healthcare AI",
    badge: "HEALTHCARE AI",
    badgeColor: "text-cyan-400 bg-cyan-950/80 border-cyan-500/30",
    image: "/projects/mediai-home.png",
    cardPosition: "bottom-left",
    cardClass: "card-float-bl",
    rotation: "rotate-0 lg:rotate-2",
    sizeClass: "max-w-[400px]",
    liveUrl: "https://medi-ai-official.vercel.app/",
    secondaryUrl: "http://mediaiofficial.in/",
    secondaryLabel: "mediaiofficial.in",
    githubUrl: "https://github.com/zkhan023761-create",
    description:
      "Collaborative healthcare platform providing clinical intelligence, real-time AI patient triage assistance, diagnostic insights, and connected medical workflows with dual domain architecture and PM2 backend stability.",
    tags: [
      "Next.js",
      "Healthcare AI",
      "Clinical Triage",
      "PM2 Server Daemons",
      "Dual Domain",
    ],
  },
  {
    id: "figma-system",
    title: "Figma UI/UX & GitHub",
    subtitle: "Design System Tokens, Prototypes & Code Architecture",
    category: "Design System & Codebase",
    badge: "FIGMA & GITHUB",
    badgeColor: "text-purple-400 bg-purple-950/80 border-purple-500/30",
    image: "/projects/figma-design-system.jpg",
    cardPosition: "bottom-right",
    cardClass: "card-float-br",
    rotation: "rotate-0 lg:rotate-2",
    sizeClass: "max-w-[440px]",
    liveUrl:
      "https://www.figma.com/design/xVgaR3muKlLBEf0DTcGfnq/Portfolio-Project?node-id=0-1&p=f&t=4HsgolleAXIYOzSp-0",
    linkedinUrl: "https://lnkd.in/p/dtUWb7bK",
    githubUrl: "https://github.com/zkhan023761-create",
    description:
      "High-fidelity user interface prototyping, bespoke design token hierarchies, mobile-first design systems, and developer-ready component handovers published on Figma and GitHub.",
    tags: [
      "Figma",
      "UI/UX Design",
      "Design Tokens",
      "GitHub Architecture",
      "Open Source",
    ],
  },
  {
    id: "pm2-infra",
    title: "PM2 Cloud Infrastructure",
    subtitle: "High-Availability Process Clustering & Zero-Downtime Daemons",
    category: "Cloud Infrastructure & DevOps",
    badge: "PM2 CLOUD INFRA",
    badgeColor: "text-sky-400 bg-sky-950/80 border-sky-500/30",
    image: "/projects/mediai-home.png",
    cardPosition: "modal-featured",
    liveUrl: "https://zunicreation.xyz",
    githubUrl: "https://github.com/zkhan023761-create",
    description:
      "Production server infrastructure configured with PM2 process manager clustering, automated zero-downtime reloads, memory utilization monitoring, and daemon process supervision replacing Docker with lean native performance.",
    tags: [
      "PM2 Clustering",
      "Cloud DevOps",
      "Zero Downtime",
      "Process Manager",
      "Reverse Proxy",
    ],
  },
];

export default function Explorations() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const col1Ref = useRef(null);
  const col2Ref = useRef(null);
  const [activeProject, setActiveProject] = useState(null);

  // Close modal on Escape key
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape" && activeProject) {
        setActiveProject(null);
      }
    },
    [activeProject],
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animation for header
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
          },
        },
      );

      // Entrance animation for cards
      gsap.fromTo(
        ".showcase-card",
        { opacity: 0, scale: 0.94, y: 35 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        },
      );

      // Subtle desktop parallax on scroll (never leaves empty void)
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        gsap.fromTo(
          col1Ref.current,
          { y: 25 },
          {
            y: -25,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.2,
            },
          },
        );

        gsap.fromTo(
          col2Ref.current,
          { y: -20 },
          {
            y: 20,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.5,
            },
          },
        );
      });
    }, sectionRef);

    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);

    return () => {
      clearTimeout(refreshTimer);
      ctx.revert();
    };
  }, []);

  // Top 4 preview cards displayed in the asymmetrical floating bento grid
  const bentoCards = ALL_PROJECTS.slice(0, 4);

  return (
    <section
      id="explorations"
      ref={sectionRef}
      className="relative w-full bg-bg py-20 lg:py-28 overflow-hidden border-t border-stroke/50"
    >
      {/* Floating Card Keyframe Styles */}
      <style>{`
        @keyframes float-tl {
          0%, 100% { transform: translateY(0px) rotate(-2deg); }
          50% { transform: translateY(-8px) rotate(-1.5deg); }
        }
        @keyframes float-tr {
          0%, 100% { transform: translateY(0px) rotate(1deg); }
          50% { transform: translateY(8px) rotate(1.5deg); }
        }
        @keyframes float-bl {
          0%, 100% { transform: translateY(0px) rotate(2deg); }
          50% { transform: translateY(-7px) rotate(1.5deg); }
        }
        @keyframes float-br {
          0%, 100% { transform: translateY(0px) rotate(2deg); }
          50% { transform: translateY(7px) rotate(2.5deg); }
        }
        .card-float-tl { animation: float-tl 6s ease-in-out infinite; }
        .card-float-tr { animation: float-tr 6.5s ease-in-out infinite 0.5s; }
        .card-float-bl { animation: float-bl 5.5s ease-in-out infinite 1s; }
        .card-float-br { animation: float-br 7s ease-in-out infinite 1.5s; }
        @media (max-width: 1023px) {
          .card-float-tl, .card-float-tr, .card-float-bl, .card-float-br {
            animation: none !important;
            transform: none !important;
          }
        }
      `}</style>

      {/* Main Container */}
      <div className="relative max-w-340 mx-auto px-4 sm:px-6">
        {/* Center Content: Centered in desktop floating composition */}
        <div
          ref={headerRef}
          className="lg:absolute lg:inset-0 lg:flex lg:items-center lg:justify-center z-10 pointer-events-none mb-14 lg:mb-0"
        >
          <div className="max-w-105 w-full text-center flex flex-col items-center mx-auto pointer-events-auto">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <span className="w-6 sm:w-8 h-px bg-stroke" />
              <span className="text-[10px] sm:text-[11px] text-muted uppercase tracking-[0.25em] font-mono">
                Visual Playground • Selected Works
              </span>
              <span className="w-6 sm:w-8 h-px bg-stroke" />
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl text-text-primary tracking-tight font-normal mb-3 sm:mb-4">
              Visual <span className="font-display italic">showcase</span>
            </h2>

            {/* Description */}
            <p className="text-muted text-xs sm:text-sm max-w-xs sm:max-w-sm mb-6 sm:mb-8 leading-relaxed font-light">
              Interactive showcase of live production platforms, healthcare AI
              collaborations, and Figma design architectures.
            </p>

            {/* Central Pill Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-2.5 sm:gap-3 w-full sm:w-auto px-4 sm:px-0">
              <a
                href="https://github.com/zkhan023761-create"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto group relative rounded-full text-xs uppercase tracking-wider font-medium px-5 py-2.5 text-text-primary border border-stroke hover:border-transparent transition-colors bg-bg/90 backdrop-blur-md shadow-2xl cursor-pointer inline-flex items-center justify-center gap-2 hover:bg-surface"
              >
                <span className="absolute -inset-px rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                <i className="fa-brands fa-github text-sm" />
                <span>See More on GitHub</span>
                <i className="fa-solid fa-arrow-up-right-from-square text-[10px]" />
              </a>

              <a
                href="https://www.figma.com/design/xVgaR3muKlLBEf0DTcGfnq/Portfolio-Project?node-id=0-1&p=f&t=4HsgolleAXIYOzSp-0"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto group relative rounded-full text-xs uppercase tracking-wider font-medium px-4 py-2.5 text-text-primary border border-stroke hover:border-transparent transition-colors bg-surface/60 backdrop-blur-md shadow-xl cursor-pointer inline-flex items-center justify-center gap-2 hover:bg-surface"
              >
                <i className="fa-brands fa-figma text-xs text-purple-400" />
                <span>Explore on Figma</span>
                <i className="fa-solid fa-arrow-up-right-from-square text-[10px]" />
              </a>
            </div>
          </div>
        </div>

        {/* 2-Column Asymmetrical Floating Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-x-110 xl:gap-x-120">
          {/* Column 1 (Left Side: Top-Left & Bottom-Left) */}
          <div
            ref={col1Ref}
            className="flex flex-col gap-8 lg:gap-24 items-center lg:items-start"
          >
            {/* Top-Left Card: Zuniii Creation (Large tilted preview card) */}
            <div
              onClick={() => setActiveProject(bentoCards[0])}
              className={`showcase-card ${bentoCards[0].cardClass} cursor-pointer group aspect-16/11 ${bentoCards[0].sizeClass} w-full rounded-3xl overflow-hidden bg-surface border border-stroke/70 p-3 transition-all duration-500 ease-out hover:scale-[1.03] hover:border-[#89AACC]/60 hover:shadow-[0_0_35px_rgba(137,170,204,0.3)] hover:shadow-black/80 ${bentoCards[0].rotation}`}
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-bg border border-stroke/50">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${bentoCards[0].image})` }}
                />

                {/* Top Badges Bar */}
                <div className="absolute top-2.5 left-2.5 right-2.5 sm:top-3 sm:left-3 sm:right-3 flex items-center justify-between pointer-events-none z-10">
                  <span
                    className={`text-[9px] uppercase font-mono tracking-wider px-2.5 py-0.5 rounded-full backdrop-blur-md border shadow-lg ${bentoCards[0].badgeColor}`}
                  >
                    {bentoCards[0].badge}
                  </span>
                  <span className="w-7 h-7 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/80 group-hover:scale-110 group-hover:text-white group-hover:border-[#89AACC]/40 transition-all">
                    <i className="fa-solid fa-magnifying-glass text-[10px]" />
                  </span>
                </div>

                {/* Info Overlay (Matches Reference Screenshot) */}
                <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/55 to-transparent flex flex-col justify-end p-5 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[9px] uppercase font-mono tracking-widest text-[#89AACC]">
                    {bentoCards[0].category}
                  </span>
                  <h4 className="text-base sm:text-lg font-medium text-white tracking-tight">
                    {bentoCards[0].title}
                  </h4>
                  <p className="text-xs text-text-primary/70 line-clamp-1 mt-0.5 font-light">
                    {bentoCards[0].subtitle}
                  </p>
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/10 text-[11px]">
                    <span className="text-[#89AACC] flex items-center gap-1 font-mono">
                      <span>Inspect Project</span>
                      <i className="fa-solid fa-arrow-up-right-from-square text-[9px]" />
                    </span>
                    <span className="text-muted font-mono text-[10px]">
                      Click to view
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom-Left Card: Medi AI Ecosystem & PM2 (Medium preview card) */}
            <div
              onClick={() => setActiveProject(bentoCards[2])}
              className={`showcase-card ${bentoCards[2].cardClass} cursor-pointer group aspect-16/11 ${bentoCards[2].sizeClass} w-full rounded-3xl overflow-hidden bg-surface border border-stroke/70 p-3 transition-all duration-500 ease-out hover:scale-[1.03] hover:border-[#89AACC]/60 hover:shadow-[0_0_35px_rgba(137,170,204,0.3)] hover:shadow-black/80 ${bentoCards[2].rotation}`}
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-bg border border-stroke/50">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${bentoCards[2].image})` }}
                />

                {/* Top Badges Bar */}
                <div className="absolute top-2.5 left-2.5 right-2.5 sm:top-3 sm:left-3 sm:right-3 flex items-center justify-between pointer-events-none z-10">
                  <span
                    className={`text-[9px] uppercase font-mono tracking-wider px-2.5 py-0.5 rounded-full backdrop-blur-md border shadow-lg ${bentoCards[2].badgeColor}`}
                  >
                    {bentoCards[2].badge}
                  </span>
                  <span className="w-7 h-7 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/80 group-hover:scale-110 group-hover:text-white group-hover:border-[#89AACC]/40 transition-all">
                    <i className="fa-solid fa-magnifying-glass text-[10px]" />
                  </span>
                </div>

                {/* Info Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/55 to-transparent flex flex-col justify-end p-5 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[9px] uppercase font-mono tracking-widest text-[#89AACC]">
                    {bentoCards[2].category}
                  </span>
                  <h4 className="text-base sm:text-lg font-medium text-white tracking-tight">
                    {bentoCards[2].title}
                  </h4>
                  <p className="text-xs text-text-primary/70 line-clamp-1 mt-0.5 font-light">
                    {bentoCards[2].subtitle}
                  </p>
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/10 text-[11px]">
                    <span className="text-[#89AACC] flex items-center gap-1 font-mono">
                      <span>Inspect Project</span>
                      <i className="fa-solid fa-arrow-up-right-from-square text-[9px]" />
                    </span>
                    <span className="text-muted font-mono text-[10px]">
                      Click to view
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2 (Right Side: Top-Right & Bottom-Right) */}
          <div
            ref={col2Ref}
            className="flex flex-col gap-8 lg:gap-24 items-center lg:items-end lg:pt-6"
          >
            {/* Top-Right Card: RescueBite (Large tilted preview card) */}
            <div
              onClick={() => setActiveProject(bentoCards[1])}
              className={`showcase-card ${bentoCards[1].cardClass} cursor-pointer group aspect-16/11 ${bentoCards[1].sizeClass} w-full rounded-3xl overflow-hidden bg-surface border border-stroke/70 p-3 transition-all duration-500 ease-out hover:scale-[1.03] hover:border-[#89AACC]/60 hover:shadow-[0_0_35px_rgba(137,170,204,0.3)] hover:shadow-black/80 ${bentoCards[1].rotation}`}
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-bg border border-stroke/50">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${bentoCards[1].image})` }}
                />

                {/* Top Badges Bar */}
                <div className="absolute top-2.5 left-2.5 right-2.5 sm:top-3 sm:left-3 sm:right-3 flex items-center justify-between pointer-events-none z-10">
                  <span
                    className={`text-[9px] uppercase font-mono tracking-wider px-2.5 py-0.5 rounded-full backdrop-blur-md border shadow-lg ${bentoCards[1].badgeColor}`}
                  >
                    {bentoCards[1].badge}
                  </span>
                  <span className="w-7 h-7 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/80 group-hover:scale-110 group-hover:text-white group-hover:border-[#89AACC]/40 transition-all">
                    <i className="fa-solid fa-magnifying-glass text-[10px]" />
                  </span>
                </div>

                {/* Info Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/55 to-transparent flex flex-col justify-end p-5 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[9px] uppercase font-mono tracking-widest text-[#89AACC]">
                    {bentoCards[1].category}
                  </span>
                  <h4 className="text-base sm:text-lg font-medium text-white tracking-tight">
                    {bentoCards[1].title}
                  </h4>
                  <p className="text-xs text-text-primary/70 line-clamp-1 mt-0.5 font-light">
                    {bentoCards[1].subtitle}
                  </p>
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/10 text-[11px]">
                    <span className="text-[#89AACC] flex items-center gap-1 font-mono">
                      <span>Inspect Project</span>
                      <i className="fa-solid fa-arrow-up-right-from-square text-[9px]" />
                    </span>
                    <span className="text-muted font-mono text-[10px]">
                      Click to view
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom-Right Card: Figma Design System (Large preview card) */}
            <div
              onClick={() => setActiveProject(bentoCards[3])}
              className={`showcase-card ${bentoCards[3].cardClass} cursor-pointer group aspect-16/11 ${bentoCards[3].sizeClass} w-full rounded-3xl overflow-hidden bg-surface border border-stroke/70 p-3 transition-all duration-500 ease-out hover:scale-[1.03] hover:border-[#89AACC]/60 hover:shadow-[0_0_35px_rgba(137,170,204,0.3)] hover:shadow-black/80 ${bentoCards[3].rotation}`}
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-bg border border-stroke/50">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${bentoCards[3].image})` }}
                />

                {/* Top Badges Bar */}
                <div className="absolute top-2.5 left-2.5 right-2.5 sm:top-3 sm:left-3 sm:right-3 flex items-center justify-between pointer-events-none z-10">
                  <span
                    className={`text-[9px] uppercase font-mono tracking-wider px-2.5 py-0.5 rounded-full backdrop-blur-md border shadow-lg ${bentoCards[3].badgeColor}`}
                  >
                    {bentoCards[3].badge}
                  </span>
                  <span className="w-7 h-7 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/80 group-hover:scale-110 group-hover:text-white group-hover:border-[#89AACC]/40 transition-all">
                    <i className="fa-solid fa-magnifying-glass text-[10px]" />
                  </span>
                </div>

                {/* Info Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/55 to-transparent flex flex-col justify-end p-5 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[9px] uppercase font-mono tracking-widest text-[#89AACC]">
                    {bentoCards[3].category}
                  </span>
                  <h4 className="text-base sm:text-lg font-medium text-white tracking-tight">
                    {bentoCards[3].title}
                  </h4>
                  <p className="text-xs text-text-primary/70 line-clamp-1 mt-0.5 font-light">
                    {bentoCards[3].subtitle}
                  </p>
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/10 text-[11px]">
                    <span className="text-[#89AACC] flex items-center gap-1 font-mono">
                      <span>Inspect Project</span>
                      <i className="fa-solid fa-arrow-up-right-from-square text-[9px]" />
                    </span>
                    <span className="text-muted font-mono text-[10px]">
                      Click to view
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full-Screen Lightbox / Project Details Modal */}
      {activeProject && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="bg-surface border border-stroke rounded-2xl sm:rounded-3xl max-w-2xl sm:max-w-3xl w-full p-5 sm:p-8 overflow-hidden relative shadow-2xl max-h-[92vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-bg border border-stroke flex items-center justify-center text-muted hover:text-white hover:border-white/30 transition-colors z-20"
              aria-label="Close modal"
            >
              <i className="fa-solid fa-xmark text-sm" />
            </button>

            {/* Quick Switcher for all 5 Projects */}
            <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto [scrollbar-width:none] pb-3 mb-4 border-b border-stroke/40 pr-10">
              {ALL_PROJECTS.map((proj) => {
                const isSelected = activeProject.id === proj.id;
                return (
                  <button
                    key={proj.id}
                    onClick={() => setActiveProject(proj)}
                    className={`text-[10px] sm:text-xs font-mono uppercase tracking-wider px-3 py-1.5 rounded-full shrink-0 transition-all ${
                      isSelected
                        ? "bg-text-primary text-bg font-semibold"
                        : "bg-bg border border-stroke text-muted hover:text-white hover:border-white/20"
                    }`}
                  >
                    {proj.title}
                  </button>
                );
              })}
            </div>

            {/* High-Resolution Project Preview */}
            <div className="rounded-xl sm:rounded-2xl overflow-hidden mb-5 sm:mb-6 border border-stroke/50 bg-black aspect-video relative group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={activeProject.image}
                alt={activeProject.title}
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3">
                <span
                  className={`text-[10px] uppercase font-mono tracking-wider px-2.5 py-1 rounded-full backdrop-blur-md border shadow-lg ${
                    activeProject.badgeColor ||
                    "text-cyan-400 bg-cyan-950/80 border-cyan-500/30"
                  }`}
                >
                  {activeProject.badge}
                </span>
              </div>
            </div>

            {/* Project Metadata */}
            <div className="mb-5 sm:mb-6">
              <div className="text-xs text-[#89AACC] font-mono uppercase tracking-wider mb-1">
                {activeProject.category}
              </div>
              <h3 className="text-xl sm:text-2xl font-normal text-text-primary tracking-tight mb-2">
                {activeProject.title}
              </h3>
              <p className="text-xs sm:text-sm text-muted font-light leading-relaxed mb-4">
                {activeProject.description}
              </p>

              {/* Technology Tags */}
              <div className="flex flex-wrap gap-2">
                {activeProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono px-3 py-1 rounded-full bg-bg border border-stroke text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Direct Action URLs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4 border-t border-stroke/40">
              {activeProject.liveUrl && (
                <a
                  href={activeProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative rounded-full text-xs uppercase tracking-wider font-medium px-5 py-2.5 text-text-primary border border-stroke hover:border-transparent transition-colors text-center inline-flex items-center justify-center gap-2"
                >
                  <span className="absolute -inset-px rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                  <i className="fa-solid fa-arrow-up-right-from-square text-xs" />
                  <span>Launch Live Platform</span>
                </a>
              )}

              {activeProject.secondaryUrl && (
                <a
                  href={activeProject.secondaryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-muted hover:text-white px-4 py-2.5 rounded-full border border-stroke/60 hover:border-stroke transition-colors text-center inline-flex items-center justify-center gap-1.5 font-mono"
                >
                  <i className="fa-solid fa-globe text-xs text-cyan-400" />
                  <span>{activeProject.secondaryLabel || "Mirror Domain"}</span>
                </a>
              )}

              {activeProject.githubUrl && (
                <a
                  href={activeProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-muted hover:text-white px-4 py-2.5 rounded-full border border-stroke/60 hover:border-stroke transition-colors text-center inline-flex items-center justify-center gap-1.5 font-mono"
                >
                  <i className="fa-brands fa-github text-xs" />
                  <span>GitHub Repository</span>
                </a>
              )}

              {activeProject.linkedinUrl && (
                <a
                  href={activeProject.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-muted hover:text-white px-4 py-2.5 rounded-full border border-stroke/60 hover:border-stroke transition-colors text-center inline-flex items-center justify-center gap-1.5 font-mono"
                >
                  <i className="fa-brands fa-linkedin text-xs text-sky-400" />
                  <span>LinkedIn Post</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
