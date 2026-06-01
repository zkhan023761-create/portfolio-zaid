'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Education() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.edu-card').forEach((card, i) => {
        gsap.fromTo(card,
          { y: 80, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', delay: i * 0.15,
            scrollTrigger: { trigger: card, start: 'top 85%' } }
        );
      });
      gsap.utils.toArray('.stat-card').forEach((card, i) => {
        gsap.fromTo(card,
          { scale: 0.8, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.6, ease: 'back.out(1.7)', delay: i * 0.1,
            scrollTrigger: { trigger: card, start: 'top 90%' } }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="education" className="py-24 px-6 lg:px-8 bg-[#050b18] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500 rounded-full filter blur-[180px] opacity-5"></div>
      <div className="absolute inset-0 grid-pattern"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 edu-card">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-4">
            <span className="w-1 h-1 bg-cyan-400 rounded-full"></span>
            Academic Journey
          </span>
          <h2 className="text-4xl lg:text-6xl font-black text-white mt-3">
            My <span className="gradient-text">Education</span>
          </h2>
          <p className="text-neutral-500 text-lg max-w-2xl mx-auto mt-4">Building a strong foundation in technology and innovation</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {/* Card 1 */}
          <div className="edu-card group relative p-6 rounded-3xl border border-white/5 bg-[#0a0f1e] hover:border-cyan-500/20 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10 overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500 rounded-full filter blur-[80px] opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
            <div className="absolute -top-3 -right-3">
              <span className="px-3 py-1 bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-mono rounded-full">Currently Pursuing</span>
            </div>
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-cyan-500/20">
              <span className="iconify text-2xl text-white" data-icon="mdi:brain"></span>
            </div>
            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">B.Voc in AI & Machine Learning</h3>
            <p className="text-cyan-400 text-sm font-medium mb-3">Nexcore Institute of Technology</p>
            <div className="flex items-center gap-2 text-neutral-500 text-xs mb-4">
              <span className="iconify" data-icon="mdi:calendar"></span>
              <span>2026 - Present</span>
            </div>
            <div className="space-y-2 mb-4">
              {['Specializing in AI and Machine Learning technologies','Hands-on experience with modern AI frameworks','Building practical ML and data science projects'].map((p, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="w-1 h-1 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></span>
                  <p className="text-neutral-500 text-xs">{p}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {['AI/ML','Machine Learning','Deep Learning'].map(tag => (
                <span key={tag} className="px-2 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-mono rounded-full">{tag}</span>
              ))}
            </div>
          </div>

          {/* Card 2 */}
          <div className="edu-card group relative p-6 rounded-3xl border border-white/5 bg-[#0a0f1e] hover:border-violet-500/20 transition-all duration-500 hover:shadow-2xl hover:shadow-violet-500/10 overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-violet-500 rounded-full filter blur-[80px] opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
            <div className="absolute -top-3 -right-3">
              <span className="px-3 py-1 bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-mono rounded-full">Completed</span>
            </div>
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-violet-500/20">
              <span className="iconify text-2xl text-white" data-icon="mdi:school"></span>
            </div>
            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-violet-400 transition-colors">Higher Secondary Education (12th)</h3>
            <p className="text-violet-400 text-sm font-medium mb-3">Anjuman Islam Junior College</p>
            <div className="flex items-center gap-2 text-neutral-500 text-xs mb-4">
              <span className="iconify" data-icon="mdi:calendar-check"></span>
              <span>Pass Out 2024-25</span>
            </div>
            <div className="space-y-2 mb-4">
              {['Strong foundation in science subjects','Developed analytical and problem-solving skills','Built academic foundation for higher studies'].map((p, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="w-1 h-1 bg-violet-500 rounded-full mt-2 flex-shrink-0"></span>
                  <p className="text-neutral-500 text-xs">{p}</p>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-3 p-3 rounded-xl bg-violet-500/5 border border-violet-500/10">
              <span className="iconify text-2xl text-violet-400" data-icon="mdi:trophy"></span>
              <div>
                <p className="text-white text-xs font-semibold">Academic Excellence</p>
                <p className="text-neutral-600 text-[10px]">Foundation for Career</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { val: '14+', label: 'Technologies', href: '#skills', color: 'cyan' },
            { val: '100%', label: 'Dedication', href: '#about', color: 'violet' },
            { val: '15+', label: 'Projects Built', href: '#projects', color: 'pink' },
            { val: '∞', label: 'Learning', href: '#contact', color: 'green' },
          ].map((s, i) => (
            <a key={i} href={s.href} className={`stat-card text-center p-5 rounded-2xl border border-${s.color}-500/10 bg-${s.color}-500/5 hover:border-${s.color}-500/30 hover:bg-${s.color}-500/10 transition-all duration-300 hover:scale-105 hover:-translate-y-1 group`}>
              <div className="text-3xl font-black gradient-text mb-1">{s.val}</div>
              <div className="text-xs text-neutral-500 group-hover:text-neutral-300 transition-colors">{s.label}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
