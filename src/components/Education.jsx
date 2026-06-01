'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Education() {
  const sectionRef = useRef(null);
  const titleLineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title reveal
      gsap.fromTo('.edu-header',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: '.edu-header', start: 'top 85%' } }
      );

      // SVG title underline drawing animation
      gsap.fromTo(titleLineRef.current,
        { strokeDashoffset: 300, strokeDasharray: 300 },
        { strokeDashoffset: 0, duration: 1.2, ease: 'power2.inOut',
          scrollTrigger: { trigger: '.edu-header', start: 'top 80%' } }
      );

      // Academic cards reveals
      gsap.utils.toArray('.edu-card').forEach((card, i) => {
        gsap.fromTo(card,
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: i * 0.15,
            scrollTrigger: { trigger: card, start: 'top 85%' } }
        );
      });

      // Bottom stats cards staggered scaling reveals
      gsap.utils.toArray('.stat-card-edu').forEach((card, i) => {
        gsap.fromTo(card,
          { scale: 0.8, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.6, ease: 'back.out(1.5)', delay: i * 0.08,
            scrollTrigger: { trigger: card, start: 'top 90%' } }
        );
      });


    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="education" className="py-24 px-6 lg:px-8 bg-[#050b18] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500 rounded-full filter blur-[180px] opacity-5 pointer-events-none"></div>
      <div className="absolute inset-0 grid-pattern pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 edu-header flex flex-col items-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-4">
            <span className="w-1 h-1 bg-cyan-400 rounded-full"></span>
            Academic Journey
          </span>
          <h2 className="text-4xl lg:text-6xl font-black text-white mt-3 relative inline-block">
            My <span className="gradient-text">Education</span>
            {/* SVG animated drawing path beneath title */}
            <span className="absolute left-1/2 -translate-x-1/2 -bottom-4 w-40 h-2 block">
              <svg viewBox="0 0 100 10" className="w-full h-full">
                <path 
                  ref={titleLineRef}
                  d="M0,5 Q50,0 100,5" 
                  fill="none" 
                  stroke="url(#svg-gradient)" 
                  strokeWidth="3" 
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="svg-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h2>
          <p className="text-neutral-500 text-lg max-w-2xl mx-auto mt-8">Building a strong foundation in technology and innovation</p>
        </div>

        {/* Timeline Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          
          {/* Card 1 */}
          <div className="edu-card tilt-card-edu group relative p-6 rounded-3xl border border-white/5 bg-[#0a0f1e] hover:border-cyan-500/20 transition-colors duration-500 hover:shadow-2xl hover:shadow-cyan-500/10 overflow-hidden cursor-default">
            <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500 rounded-full filter blur-[80px] opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
            <div className="absolute top-6 right-6">
              <span className="px-3 py-1 bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-mono rounded-full">Currently Pursuing</span>
            </div>
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-cyan-500/20">
              <span className="iconify text-2xl text-white" data-icon="mdi:brain"></span>
            </div>
            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">B.Voc in AI, Data Science & Machine Learning</h3>
            <p className="text-cyan-400 text-sm font-medium mb-3">Nexcore Institute of Technology</p>
            <div className="flex items-center gap-2 text-neutral-400 text-xs mb-4">
              <span className="iconify" data-icon="mdi:calendar"></span>
              <span>2026 - Present</span>
            </div>
            <div className="space-y-2 mb-4">
              {['Specializing in AI, Data Science, and Machine Learning','Hands-on experience with modern AI/ML frameworks','Building practical AI, DS, and ML projects'].map((p, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="w-1 h-1 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></span>
                  <p className="text-neutral-300 text-xs">{p}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {['AI/DS/ML','Data Science','Machine Learning','Deep Learning'].map(tag => (
                <span key={tag} className="px-2 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-mono rounded-full">{tag}</span>
              ))}
            </div>
          </div>

          {/* Card 2 */}
          <div className="edu-card tilt-card-edu group relative p-6 rounded-3xl border border-white/5 bg-[#0a0f1e] hover:border-violet-500/20 transition-colors duration-500 hover:shadow-2xl hover:shadow-violet-500/10 overflow-hidden cursor-default">
            <div className="absolute top-0 right-0 w-40 h-40 bg-violet-500 rounded-full filter blur-[80px] opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
            <div className="absolute top-6 right-6">
              <span className="px-3 py-1 bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-mono rounded-full">Completed</span>
            </div>
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-violet-500/20">
              <span className="iconify text-2xl text-white" data-icon="mdi:school"></span>
            </div>
            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-violet-400 transition-colors">Higher Secondary Education (12th)</h3>
            <p className="text-violet-400 text-sm font-medium mb-3">Anjuman Islam Junior College</p>
            <div className="flex items-center gap-2 text-neutral-400 text-xs mb-4">
              <span className="iconify" data-icon="mdi:calendar-check"></span>
              <span>Pass Out 2024-25</span>
            </div>
            <div className="space-y-2 mb-4">
              {['Strong foundation in science subjects','Developed analytical and problem-solving skills','Built academic foundation for higher studies'].map((p, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="w-1 h-1 bg-violet-500 rounded-full mt-2 flex-shrink-0"></span>
                  <p className="text-neutral-300 text-xs">{p}</p>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-3 p-3 rounded-xl bg-violet-500/5 border border-violet-500/10">
              <span className="iconify text-2xl text-violet-400" data-icon="mdi:trophy"></span>
              <div>
                <p className="text-white text-xs font-semibold">Academic Excellence</p>
                <p className="text-neutral-400 text-[10px]">Foundation for Career</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Quick Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { val: '14+', label: 'Technologies', href: '#skills', border: 'border-cyan-500/10 hover:border-cyan-500/30 bg-cyan-500/5' },
            { val: '100%', label: 'Dedication', href: '#about', border: 'border-violet-500/10 hover:border-violet-500/30 bg-violet-500/5' },
            { val: '15+', label: 'Projects Built', href: '#projects', border: 'border-pink-500/10 hover:border-pink-500/30 bg-pink-500/5' },
            { val: '∞', label: 'Learning', href: '#contact', border: 'border-green-500/10 hover:border-green-500/30 bg-green-500/5' },
          ].map((s, i) => (
            <a key={i} href={s.href} className={`stat-card-edu text-center p-5 rounded-2xl border ${s.border} transition-all duration-300 hover:scale-105 hover:-translate-y-1 group`}>
              <div className="text-3xl font-black gradient-text mb-1">{s.val}</div>
              <div className="text-xs text-neutral-500 group-hover:text-neutral-350 transition-colors">{s.label}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
