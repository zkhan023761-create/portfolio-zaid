'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);
  const headRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: headRef.current, start: 'top 85%' } }
      );
      gsap.fromTo(leftRef.current,
        { x: -60, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: leftRef.current, start: 'top 80%' } }
      );
      gsap.fromTo(rightRef.current,
        { x: 60, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: rightRef.current, start: 'top 80%' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const cards = [
    { icon: 'mdi:school', color: 'cyan', title: 'Education', sub1: 'Nexcore Institute', sub2: 'AI & Machine Learning' },
    { fa: 'fab fa-figma', color: 'violet', title: 'Specialization', sub1: 'Frontend Development', sub2: 'UI Design with Figma' },
    { icon: 'mdi:target', color: 'pink', title: 'Mission', sub1: 'Creating Impact', sub2: 'Through Technology' },
  ];

  const colorMap = {
    cyan: { border: 'border-cyan-500/20', bg: 'bg-cyan-500/5', icon: 'text-cyan-400', glow: 'group-hover:shadow-cyan-500/20' },
    violet: { border: 'border-violet-500/20', bg: 'bg-violet-500/5', icon: 'text-violet-400', glow: 'group-hover:shadow-violet-500/20' },
    pink: { border: 'border-pink-500/20', bg: 'bg-pink-500/5', icon: 'text-pink-400', glow: 'group-hover:shadow-pink-500/20' },
  };

  const comps = [
    { icon: 'mdi:react', color: 'text-cyan-400', title: 'React & Next.js', desc: 'Frontend Frameworks' },
    { icon: 'mdi:nodejs', color: 'text-green-400', title: 'Node & Express', desc: 'Backend Development' },
    { icon: 'mdi:language-javascript', color: 'text-yellow-400', title: 'JavaScript', desc: 'Programming Language' },
    { icon: 'mdi:tailwind', color: 'text-cyan-300', title: 'Tailwind CSS', desc: 'Styling Framework' },
    { fa: 'fab fa-figma', color: 'text-pink-400', title: 'Figma', desc: 'UI/UX Design' },
    { icon: 'mdi:language-c', color: 'text-indigo-400', title: 'C Programming', desc: 'Core Programming' },
  ];

  return (
    <section ref={sectionRef} id="about" className="py-24 px-6 lg:px-8 bg-[#030712] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-violet-600 rounded-full filter blur-[180px] opacity-5"></div>
      <div className="absolute inset-0 grid-pattern"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div ref={headRef} className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/20 bg-violet-500/5 text-violet-400 text-xs font-mono tracking-widest uppercase mb-4">
            <span className="w-1 h-1 bg-violet-400 rounded-full"></span>
            About Me
          </span>
          <h2 className="text-4xl lg:text-6xl font-black text-white mt-3">
            Passionate About <span className="gradient-text">Creating</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left */}
          <div ref={leftRef} className="space-y-6">
            {/* Info cards */}
            <div className="space-y-3">
              {cards.map((card, i) => {
                const c = colorMap[card.color];
                return (
                  <div key={i} className={`flex items-center gap-4 p-4 rounded-2xl border ${c.border} ${c.bg} group hover:scale-[1.02] transition-all duration-300 cursor-default hover:shadow-xl ${c.glow}`}>
                    <div className={`w-12 h-12 rounded-xl border ${c.border} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      {card.fa ? <i className={`${card.fa} text-xl ${c.icon}`}></i> : <span className={`iconify text-xl ${c.icon}`} data-icon={card.icon}></span>}
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">{card.title}</p>
                      <p className="text-neutral-400 text-xs">{card.sub1}</p>
                      <p className="text-neutral-600 text-xs">{card.sub2}</p>
                    </div>
                    <span className={`iconify ml-auto ${c.icon} opacity-0 group-hover:opacity-100 transition-opacity`} data-icon="mdi:arrow-right"></span>
                  </div>
                );
              })}
            </div>

            {/* Core Competencies */}
            <div className="p-5 rounded-2xl border border-white/5 bg-white/[0.02]">
              <h3 className="text-white font-bold text-sm mb-4 flex items-center gap-2">
                <span className="w-1 h-4 bg-gradient-to-b from-cyan-400 to-violet-500 rounded-full"></span>
                Core Competencies
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {comps.map((c, i) => (
                  <div key={i} className="flex items-center gap-2 p-2.5 rounded-xl border border-white/5 hover:border-white/10 hover:bg-white/5 transition-all duration-300 cursor-default group">
                    {c.fa ? <i className={`${c.fa} ${c.color} text-base group-hover:scale-110 transition-transform`}></i>
                      : <span className={`iconify ${c.color} text-base group-hover:scale-110 transition-transform`} data-icon={c.icon}></span>}
                    <div>
                      <p className="text-white text-xs font-semibold">{c.title}</p>
                      <p className="text-neutral-600 text-[10px]">{c.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right */}
          <div ref={rightRef} className="space-y-6">
            <p className="text-neutral-400 text-base leading-relaxed">
              I'm a driven full-stack developer and UI/UX designer currently pursuing <span className="text-cyan-400 font-medium">Artificial Intelligence & Machine Learning</span> at Nexcore Institute of Technology. My journey in tech is fueled by a deep passion for creating digital experiences that are both beautiful and functional.
            </p>
            <p className="text-neutral-500 text-base leading-relaxed">
              With expertise spanning from front-end development using React.js and Next.js to back-end technologies like Node.js and Express.js, I bridge the gap between code and creativity.
            </p>

            <div>
              <h3 className="text-white font-bold text-sm mb-4 flex items-center gap-2">
                <span className="w-1 h-4 bg-gradient-to-b from-cyan-400 to-violet-500 rounded-full"></span>
                What I Bring
              </h3>
              <div className="space-y-2">
                {['Clean, maintainable code architecture','User-centered design thinking','Responsive, mobile-first development','Modern JavaScript frameworks expertise','RESTful API development','Version control with Git'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 group cursor-default">
                    <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full flex-shrink-0 group-hover:scale-150 transition-transform" style={{boxShadow:'0 0 6px rgba(6,182,212,0.6)'}}></span>
                    <span className="text-neutral-500 text-sm group-hover:text-neutral-300 transition-colors">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3 pt-4">
              {[['15+','Projects','cyan'],['14+','Skills','violet'],['100%','Passion','pink']].map(([val, label, color], i) => (
                <div key={i} className={`text-center p-4 rounded-2xl border border-${color}-500/10 bg-${color}-500/5 hover:border-${color}-500/30 transition-all duration-300 hover:scale-105 cursor-default`}>
                  <div className="text-2xl font-black gradient-text">{val}</div>
                  <div className="text-xs text-neutral-600 mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
