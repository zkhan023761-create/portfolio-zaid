'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const BENTO_PROJECTS = [
  {
    title: 'Zuniii Creation',
    subtitle: 'Bridal & Contemporary Mehndi Platform',
    category: 'Live Production Flagship',
    badge: 'LIVE PRODUCTION',
    badgeColor: 'text-emerald-400 bg-emerald-950/60 border-emerald-500/30',
    liveUrl: 'https://zunicreation.xyz',
    githubUrl: 'https://github.com/zkhan023761-create',
    domain: 'zunicreation.xyz',
    colSpan: 'md:col-span-7',
    description:
      'A full-stack, bespoke web platform designed and deployed for Zuniii Creation in Mumbai. Engineered with Next.js, responsive luxury galleries, direct WhatsApp booking pipeline, and custom domain configuration.',
    image: '/projects/zunicreation-home.png',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'WhatsApp API', 'zunicreation.xyz'],
    ctaType: 'live',
  },
  {
    title: 'MediAI Ecosystem',
    subtitle: 'Clinical Intelligence & Connected Health',
    category: 'Collaborative Project',
    badge: 'COLLABORATION',
    badgeColor: 'text-cyan-400 bg-cyan-950/60 border-cyan-500/30',
    liveUrl: 'https://medi-ai-official.vercel.app/',
    secondaryUrl: 'http://mediaiofficial.in/',
    secondaryLabel: 'mediaiofficial.in',
    githubUrl: 'https://github.com/zkhan023761-create',
    colSpan: 'md:col-span-5',
    description:
      'A collaborative healthcare platform providing clinical intelligence, patient triage assistance, diagnostic insights, and connected medical workflows.',
    image: '/projects/mediai-home.png',
    tags: ['Next.js', 'Healthcare AI', 'Clinical Triage', 'Collaboration'],
    ctaType: 'collab',
  },
  {
    title: 'RescueBite Platform',
    subtitle: 'Smart Food Rescue & Distribution',
    category: 'Collaborative Project',
    badge: 'COLLABORATION',
    badgeColor: 'text-amber-400 bg-amber-950/60 border-amber-500/30',
    liveUrl: 'https://rescuebiteofficial.vercel.app/',
    githubUrl: 'https://github.com/zkhan023761-create',
    colSpan: 'md:col-span-5',
    description:
      'A collaborative community platform connecting restaurants, supermarkets, and volunteers to reduce food waste through real-time surplus redistribution.',
    image: '/projects/rescuebite-home.png',
    tags: ['React', 'Logistics UX', 'Real-Time Routing', 'Collaboration'],
    ctaType: 'collab',
  },
  {
    title: 'Figma Design System & GitHub',
    subtitle: 'UI/UX Prototypes & Code Architecture',
    category: 'Design & Codebase',
    badge: 'FIGMA & GITHUB',
    badgeColor: 'text-purple-400 bg-purple-950/60 border-purple-500/30',
    liveUrl:
      'https://www.figma.com/design/xVgaR3muKlLBEf0DTcGfnq/Portfolio-Project?node-id=0-1&p=f&t=4HsgolleAXIYOzSp-0',
    linkedinUrl: 'https://lnkd.in/p/dtUWb7bK',
    githubUrl: 'https://github.com/zkhan023761-create',
    colSpan: 'md:col-span-7',
    description:
      'High-fidelity user interface prototyping, bespoke design token hierarchies, mobile-first design systems, and published full-stack repositories on GitHub.',
    image: '/projects/figma-design-system.jpg',
    tags: ['Figma', 'UI/UX Design', 'Design Tokens', 'GitHub', 'Open Source'],
    ctaType: 'figma',
  },
];

export default function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header entrance
      gsap.fromTo(
        '.works-header',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.works-header',
            start: 'top 85%',
          },
        }
      );

      // Bento cards entrance
      gsap.fromTo(
        '.bento-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.bento-grid',
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="bg-bg py-16 md:py-24 border-t border-stroke/50"
    >
      <div className="max-w-300 mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className="works-header flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.3em] font-medium">
                Selected Work &amp; Collaborations
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-text-primary tracking-tight font-normal">
              Featured <span className="font-display italic">projects</span>
            </h2>
            <p className="text-muted text-sm md:text-base mt-2 max-w-lg font-light">
              Live production platforms, collaborative web applications, Figma design prototypes, and GitHub codebases.
            </p>
          </div>

          {/* Quick Action Links on Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://zunicreation.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-full text-xs uppercase tracking-wider font-medium px-4 py-2 text-text-primary border border-stroke hover:border-transparent transition-colors"
            >
              <span className="absolute -inset-px rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              <span className="relative z-10 flex items-center gap-1.5">
                <span>zunicreation.xyz</span>
                <i className="fa-solid fa-arrow-up-right-from-square text-[10px]" />
              </span>
            </a>

            <a
              href="https://github.com/zkhan023761-create"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-full text-xs uppercase tracking-wider font-medium px-4 py-2 text-text-primary border border-stroke hover:border-transparent transition-colors"
            >
              <span className="absolute -inset-px rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              <span className="relative z-10 flex items-center gap-1.5">
                <i className="fa-brands fa-github text-xs" />
                <span>GitHub</span>
              </span>
            </a>
          </div>
        </div>

        {/* Bento Grid: 7 / 5 / 5 / 7 alternate spans */}
        <div className="bento-grid grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {BENTO_PROJECTS.map((project, idx) => (
            <div
              key={idx}
              className={`bento-card ${project.colSpan} relative rounded-3xl overflow-hidden bg-surface border border-stroke min-h-95 md:min-h-110 flex flex-col justify-end p-6 md:p-8 group cursor-pointer transition-shadow duration-300 hover:shadow-2xl hover:shadow-black/50`}
            >
              {/* Background Image: Real Captured Homepages */}
              <div
                className="absolute inset-0 bg-cover bg-top transition-transform duration-700 ease-out group-hover:scale-105"
                style={{ backgroundImage: `url(${project.image})` }}
              />

              {/* Halftone Overlay */}
              <div className="halftone-overlay absolute inset-0 opacity-20 mix-blend-multiply pointer-events-none" />

              {/* Dark Gradient Vignette for clear text readability */}
              <div className="absolute inset-0 bg-linear-to-t from-bg via-bg/75 to-bg/30 pointer-events-none" />

              {/* Hover Overlay: bg-bg/80 + backdrop-blur-lg */}
              <div className="absolute inset-0 bg-bg/85 opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-lg flex flex-col items-center justify-center p-6 z-20 text-center">
                {/* Pill with animated gradient border, white bg */}
                <div className="relative p-[1.5px] rounded-full accent-gradient animate-gradient-shift shadow-xl mb-4 transform group-hover:scale-105 transition-transform duration-300">
                  <div className="bg-white text-black px-6 py-2.5 rounded-full flex items-center gap-2">
                    <span className="text-xs uppercase tracking-wider font-semibold">
                      View —
                    </span>
                    <span className="font-display italic text-lg text-black">
                      {project.title}
                    </span>
                    <i className="fa-solid fa-arrow-up-right-from-square text-xs text-black" />
                  </div>
                </div>

                <p className="text-xs md:text-sm text-text-primary/90 max-w-sm font-light mb-4">
                  {project.description}
                </p>

                {/* Direct Action Links on Hover: Live Site, Mirror, GitHub */}
                <div className="flex items-center gap-2.5 flex-wrap justify-center z-30" onClick={(e) => e.stopPropagation()}>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-1.5 rounded-full text-xs font-medium bg-[#89AACC] text-black hover:bg-white transition-colors flex items-center gap-1.5"
                  >
                    {project.ctaType === 'figma' ? (
                      <>
                        <i className="fa-brands fa-figma text-xs" />
                        <span>Open Figma Design</span>
                      </>
                    ) : (
                      <>
                        <span>Visit Platform</span>
                        <i className="fa-solid fa-arrow-up-right-from-square text-[10px]" />
                      </>
                    )}
                  </a>

                  {project.secondaryUrl && (
                    <a
                      href={project.secondaryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-surface border border-stroke text-text-primary hover:border-white transition-colors flex items-center gap-1.5"
                    >
                      <i className="fa-solid fa-globe text-[11px]" />
                      <span>{project.secondaryLabel}</span>
                    </a>
                  )}

                  {project.linkedinUrl && (
                    <a
                      href={project.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-surface border border-stroke text-text-primary hover:border-white transition-colors flex items-center gap-1.5"
                    >
                      <i className="fa-brands fa-linkedin text-xs text-[#89AACC]" />
                      <span>LinkedIn Post</span>
                      <i className="fa-solid fa-arrow-up-right-from-square text-[10px]" />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-surface border border-stroke text-text-primary hover:border-white transition-colors flex items-center gap-1.5"
                    >
                      <i className="fa-brands fa-github text-xs" />
                      <span>GitHub</span>
                      <i className="fa-solid fa-arrow-up-right-from-square text-[10px]" />
                    </a>
                  )}
                </div>
              </div>

              {/* Card Static Content (Bottom) */}
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-text-primary/70 bg-bg/70 backdrop-blur-md px-2.5 py-1 rounded-full border border-stroke">
                    {project.category}
                  </span>
                  <span
                    className={`text-[10px] uppercase tracking-wider font-medium backdrop-blur-md px-2.5 py-1 rounded-full border flex items-center gap-1.5 ${project.badgeColor}`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                    {project.badge}
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl text-text-primary font-medium tracking-tight mb-2">
                  {project.title}{' '}
                  <span className="text-muted font-display italic text-xl md:text-2xl font-normal">
                    — {project.subtitle}
                  </span>
                </h3>

                <div className="flex flex-wrap gap-1.5 mt-3">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-mono text-muted/80 bg-surface/90 border border-stroke/60 px-2 py-0.5 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Master Click Target */}
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-10"
                aria-label={`View ${project.title}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
