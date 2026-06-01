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
      // Heading reveal
      gsap.fromTo(headRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: headRef.current, start: 'top 85%' } }
      );

      // Columns entry reveals
      gsap.fromTo(leftRef.current,
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: leftRef.current, start: 'top 80%' } }
      );

      gsap.fromTo(rightRef.current,
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: rightRef.current, start: 'top 80%' } }
      );

      // Staggered reveals for internal items
      gsap.fromTo('.about-item',
        { y: 25, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.6, ease: 'power2.out',
          scrollTrigger: { trigger: leftRef.current, start: 'top 75%' } }
      );

      gsap.fromTo('.comp-item',
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, stagger: 0.05, duration: 0.5, ease: 'back.out(1.5)',
          scrollTrigger: { trigger: '.comp-item', start: 'top 90%' } }
      );


    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const cards = [
    { icon: 'mdi:school', color: 'cyan', title: 'Education', sub1: 'Nexcore Institute', sub2: 'AI, DS & ML' },
    { fa: 'fab fa-figma', color: 'violet', title: 'Specialization', sub1: 'Frontend Development', sub2: 'UI Design with Figma' },
    { icon: 'mdi:target', color: 'pink', title: 'Mission', sub1: 'Creating Impact', sub2: 'Through Technology' },
  ];

  const colorMap = {
    cyan: { border: 'border-cyan-500/20', bg: 'bg-cyan-500/5', icon: 'text-cyan-400', glow: 'hover:shadow-cyan-500/10' },
    violet: { border: 'border-violet-500/20', bg: 'bg-violet-500/5', icon: 'text-violet-400', glow: 'hover:shadow-violet-500/10' },
    pink: { border: 'border-pink-500/20', bg: 'bg-pink-500/5', icon: 'text-pink-400', glow: 'hover:shadow-pink-500/10' },
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
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-violet-600 rounded-full filter blur-[180px] opacity-5 pointer-events-none"></div>
      <div className="absolute inset-0 grid-pattern pointer-events-none"></div>

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

          {/* Left Column */}
          <div ref={leftRef} className="space-y-6">
            {/* Info cards with GSAP 3D Tilt */}
            <div className="space-y-3">
              {cards.map((card, i) => {
                const c = colorMap[card.color];
                return (
                  <div 
                    key={i} 
                    className={`tilt-card-about about-item flex items-center gap-4 p-4 rounded-2xl border ${c.border} ${c.bg} group cursor-default hover:shadow-xl ${c.glow} transition-shadow duration-300`}
                  >
                    <div className="w-12 h-12 rounded-xl border border-white/5 bg-[#0a0f1e]/40 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {card.fa ? <i className={`${card.fa} text-xl ${c.icon}`}></i> : <span className={`iconify text-xl ${c.icon}`} data-icon={card.icon}></span>}
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">{card.title}</p>
                      <p className="text-neutral-400 text-xs">{card.sub1}</p>
                      <p className="text-neutral-400 text-xs">{card.sub2}</p>
                    </div>
                    <span className={`iconify ml-auto ${c.icon} opacity-0 group-hover:opacity-100 transition-opacity`} data-icon="mdi:arrow-right"></span>
                  </div>
                );
              })}
            </div>

            {/* Core Competencies */}
            <div className="about-item p-5 rounded-2xl border border-white/5 bg-white/[0.02]">
              <h3 className="text-white font-bold text-sm mb-4 flex items-center gap-2">
                <span className="w-1 h-4 bg-gradient-to-b from-cyan-400 to-violet-500 rounded-full"></span>
                Core Competencies
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {comps.map((c, i) => (
                  <div key={i} className="comp-item flex items-center gap-2 p-2.5 rounded-xl border border-white/5 hover:border-white/10 hover:bg-white/5 transition-all duration-300 cursor-default group">
                    {c.fa ? <i className={`${c.fa} ${c.color} text-base group-hover:scale-110 transition-transform`}></i>
                      : <span className={`iconify ${c.color} text-base group-hover:scale-110 transition-transform`} data-icon={c.icon}></span>}
                    <div>
                      <p className="text-white text-xs font-semibold">{c.title}</p>
                      <p className="text-neutral-400 text-[10px]">{c.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div ref={rightRef} className="space-y-6">
            <p className="text-neutral-400 text-base leading-relaxed">
              I am a dedicated frontend engineer and UI/UX designer currently pursuing <span className="text-cyan-400 font-medium">Artificial Intelligence, Data Science & Machine Learning</span> at Nexcore Institute of Technology. My work focuses on bridging the gap between complex software engineering and elegant, user-centric interface design.
            </p>
            <p className="text-neutral-500 text-base leading-relaxed">
              With expertise spanning frontend architectures using React.js and Next.js to backend services with Node.js and Express, I build scalable, high-performance web applications that deliver seamless user experiences.
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
                    <span className="text-neutral-500 group-hover:text-neutral-350 transition-colors text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3 pt-4">
              {[
                { val: '15+', label: 'Projects', border: 'border-cyan-500/10 hover:border-cyan-500/30 bg-cyan-500/5' },
                { val: '14+', label: 'Skills', border: 'border-violet-500/10 hover:border-violet-500/30 bg-violet-500/5' },
                { val: '100%', label: 'Passion', border: 'border-pink-500/10 hover:border-pink-500/30 bg-pink-500/5' },
              ].map((item, i) => (
                <div key={i} className={`text-center p-4 rounded-2xl border ${item.border} transition-all duration-300 hover:scale-105 cursor-default`}>
                  <div className="text-2xl font-black gradient-text">{item.val}</div>
                  <div className="text-xs text-neutral-600 mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
