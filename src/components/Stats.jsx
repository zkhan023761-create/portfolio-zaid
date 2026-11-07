'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  {
    number: '16+',
    label: 'Months Technical Focus',
    subtext: 'Continuous deep skilling in AI, data science, and full-stack software development',
  },
  {
    number: '10+',
    label: 'Deployments & Collaborations',
    subtext: 'Live client flagships (zunicreation.xyz), MediAI, RescueBite & open-source codebases',
  },
  {
    number: '100%',
    label: 'Uptime & Delivery',
    subtext: 'Reliable cloud architectures, high performance, and client satisfaction',
  },
];

export default function Stats() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.stat-item',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="stats"
      ref={sectionRef}
      className="bg-bg py-20 md:py-28 border-t border-stroke/50"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              className="stat-item flex flex-col items-start border-l border-stroke pl-6 md:pl-8 group"
            >
              <div className="text-6xl md:text-7xl lg:text-8xl font-display italic text-text-primary mb-3 tracking-tight group-hover:accent-gradient-text transition-all duration-300">
                {stat.number}
              </div>
              <div className="text-xs uppercase tracking-[0.25em] font-semibold text-text-primary mb-1">
                {stat.label}
              </div>
              <p className="text-xs text-muted font-light leading-relaxed">
                {stat.subtext}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
