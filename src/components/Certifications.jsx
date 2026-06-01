'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const certifications = [
  { title: 'AI For All - AI Appreciate', issuer: 'Intel & Digital India', date: 'January 2026', link: 'https://www.linkedin.com/in/zaid-khan-943376379', color: 'cyan' },
  { title: 'Yuva AI For All - English', issuer: 'AISECT Learn', date: 'January 2026', link: 'https://www.linkedin.com/in/zaid-khan-943376379', color: 'violet' },
  { title: 'AI Fluency: Framework & Foundations', issuer: 'ANTHROPIC', date: 'January 2026', link: 'https://www.linkedin.com/in/zaid-khan-943376379', color: 'pink' },
  { title: 'Claude 101', issuer: 'ANTHROPIC', date: 'January 2026', link: 'https://www.linkedin.com/in/zaid-khan-943376379', color: 'cyan' },
  { title: 'AI Fluency for Students', issuer: 'ANTHROPIC', date: 'January 2026', link: 'https://www.linkedin.com/in/zaid-khan-943376379', color: 'violet' },
  { title: 'AI Fluency for Nonprofits', issuer: 'ANTHROPIC', date: 'January 2026', link: 'https://www.linkedin.com/in/zaid-khan-943376379', color: 'pink' },
];

const colorMap = {
  cyan: { border: 'border-cyan-500/20', bg: 'bg-cyan-500/5', text: 'text-cyan-400', hover: 'hover:border-cyan-500/40 hover:shadow-cyan-500/10' },
  violet: { border: 'border-violet-500/20', bg: 'bg-violet-500/5', text: 'text-violet-400', hover: 'hover:border-violet-500/40 hover:shadow-violet-500/10' },
  pink: { border: 'border-pink-500/20', bg: 'bg-pink-500/5', text: 'text-pink-400', hover: 'hover:border-pink-500/40 hover:shadow-pink-500/10' },
};

export default function Certifications() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.cert-card').forEach((card, i) => {
        gsap.fromTo(card,
          { y: 50, opacity: 0, scale: 0.95 },
          { y: 0, opacity: 1, scale: 1, duration: 0.7, ease: 'power3.out', delay: i * 0.08,
            scrollTrigger: { trigger: card, start: 'top 88%' } }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="certifications" className="py-24 px-6 lg:px-8 bg-[#030712] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600 rounded-full filter blur-[200px] opacity-5"></div>
      <div className="absolute inset-0 grid-pattern"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 cert-card">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/20 bg-violet-500/5 text-violet-400 text-xs font-mono tracking-widest uppercase mb-4">
            <span className="w-1 h-1 bg-violet-400 rounded-full"></span>
            Achievements
          </span>
          <h2 className="text-4xl lg:text-6xl font-black text-white mt-3">
            <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-neutral-500 text-lg max-w-2xl mx-auto mt-4">Validated skills and professional achievements</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {certifications.map((cert, i) => {
            const c = colorMap[cert.color];
            return (
              <div key={i} className={`cert-card group p-5 rounded-2xl border ${c.border} ${c.bg} bg-[#0a0f1e] ${c.hover} hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1`}>
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl border ${c.border} flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <span className={`iconify text-xl ${c.text}`} data-icon="mdi:certificate"></span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-bold text-sm mb-1 group-hover:text-white transition-colors leading-tight">{cert.title}</h3>
                    <p className={`${c.text} text-xs font-mono mb-1`}>{cert.issuer}</p>
                    <p className="text-neutral-600 text-xs mb-3">{cert.date}</p>
                    <a href={cert.link} target="_blank" rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1 ${c.text} text-xs font-semibold hover:underline`}>
                      View Certificate
                      <span className="iconify text-sm group-hover:translate-x-1 transition-transform" data-icon="mdi:arrow-right"></span>
                    </a>
                  </div>
                </div>
                <div className={`mt-4 h-px bg-gradient-to-r from-transparent via-${cert.color}-500/30 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
