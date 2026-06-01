'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef(null);
  const tagRef = useRef(null);
  const nameRef = useRef(null);
  const roleRef = useRef(null);
  const descRef = useRef(null);
  const btnsRef = useRef(null);
  const socialsRef = useRef(null);
  const photoRef = useRef(null);
  const orb1 = useRef(null);
  const orb2 = useRef(null);
  const orb3 = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    // Orb animations
    gsap.to(orb1.current, { y: -40, x: 20, duration: 4, repeat: -1, yoyo: true, ease: 'sine.inOut' });
    gsap.to(orb2.current, { y: 30, x: -30, duration: 5, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 1 });
    gsap.to(orb3.current, { y: -25, x: 15, duration: 3.5, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 2 });

    // Main timeline
    const tl = gsap.timeline({ delay: 0.8 });

    tl.fromTo(tagRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }
    )
    .fromTo(nameRef.current,
      { y: 80, opacity: 0, skewY: 5 },
      { y: 0, opacity: 1, skewY: 0, duration: 1, ease: 'power4.out' }, '-=0.3'
    )
    .fromTo(roleRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }, '-=0.5'
    )
    .fromTo(descRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out' }, '-=0.4'
    )
    .fromTo(btnsRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' }, '-=0.3'
    )
    .fromTo(socialsRef.current.children,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, stagger: 0.08, duration: 0.4, ease: 'back.out(1.7)' }, '-=0.2'
    )
    .fromTo(photoRef.current,
      { x: 100, opacity: 0, rotation: 8 },
      { x: 0, opacity: 1, rotation: 3, duration: 1.2, ease: 'power4.out' }, '-=1.2'
    );

    // Scroll parallax on photo
    gsap.to(photoRef.current, {
      y: -60,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1.5,
      }
    });

    // Line draw
    gsap.fromTo(lineRef.current,
      { scaleX: 0 },
      { scaleX: 1, duration: 1.5, ease: 'power3.inOut', delay: 1.5 }
    );

  }, []);

  return (
    <section ref={sectionRef} id="home" className="min-h-screen flex items-center justify-center pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-[#030712] relative overflow-hidden">

      {/* Grid */}
      <div className="absolute inset-0 grid-pattern opacity-100"></div>

      {/* Orbs */}
      <div ref={orb1} className="absolute top-20 right-[10%] w-[500px] h-[500px] bg-cyan-500 rounded-full filter blur-[140px] opacity-10 pointer-events-none"></div>
      <div ref={orb2} className="absolute bottom-20 left-[5%] w-[400px] h-[400px] bg-violet-600 rounded-full filter blur-[120px] opacity-10 pointer-events-none"></div>
      <div ref={orb3} className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-pink-500 rounded-full filter blur-[100px] opacity-8 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left */}
          <div className="space-y-7 text-center lg:text-left">

            <div ref={tagRef} className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 backdrop-blur-sm">
              <span className="flex gap-1">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></span>
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" style={{animationDelay:'0.2s'}}></span>
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" style={{animationDelay:'0.4s'}}></span>
              </span>
              <span className="text-cyan-400 text-xs font-mono tracking-widest uppercase">Available for work</span>
            </div>

            <div ref={nameRef} className="overflow-hidden">
              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black leading-none tracking-tight">
                <span className="block text-white">Hi, I'm</span>
                <span className="block gradient-text-animated">Zaid Khan</span>
              </h1>
            </div>

            <div ref={lineRef} className="h-px bg-gradient-to-r from-cyan-500 via-violet-500 to-transparent origin-left"></div>

            <div ref={roleRef}>
              <h2 className="text-xl sm:text-2xl text-neutral-400 font-light">
                <span className="text-white font-semibold">Frontend Developer</span>
                <span className="text-cyan-500 mx-3">×</span>
                <span className="text-white font-semibold">UI/UX Designer</span>
              </h2>
            </div>

            <p ref={descRef} className="text-neutral-500 text-base leading-relaxed max-w-lg">
              Crafting immersive digital experiences with modern web technologies.
              Currently pursuing <span className="text-cyan-400">AI & Machine Learning</span> at Nexcore Institute of Technology.
            </p>

            <div ref={btnsRef} className="flex flex-wrap justify-center lg:justify-start gap-4">
              <a href="#projects"
                className="group relative px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-violet-600 text-white rounded-full font-semibold text-sm overflow-hidden hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-105">
                <span className="relative z-10 flex items-center gap-2">
                  View My Work
                  <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="mdi:arrow-right"></span>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-violet-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </a>
              <a href="#contact"
                className="group px-8 py-3.5 rounded-full border border-white/10 text-white font-semibold text-sm hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all duration-300 hover:scale-105 flex items-center gap-2">
                Contact Me
                <span className="iconify group-hover:rotate-45 transition-transform" data-icon="mdi:send"></span>
              </a>
            </div>

            <div ref={socialsRef} className="flex flex-wrap justify-center lg:justify-start gap-3">
              {[
                { href: 'https://www.linkedin.com/in/zaid-khan-943376379', icon: 'mdi:linkedin', label: 'LinkedIn' },
                { href: 'https://github.com/zkhan023761-create', icon: 'mdi:github', label: 'GitHub' },
                { href: 'https://www.instagram.com/khan.zaxid/', fa: 'fab fa-instagram', label: 'Instagram' },
                { href: 'mailto:zaidkhan023761@gmail.com', icon: 'mdi:email', label: 'Email' },
                { href: 'https://wa.me/919082775122', icon: 'mdi:whatsapp', label: 'WhatsApp' },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-xl border border-white/10 text-neutral-500 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-cyan-500/5 transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                  {s.fa ? <i className={`${s.fa} text-lg`}></i> : <span className="iconify text-lg" data-icon={s.icon}></span>}
                </a>
              ))}
            </div>
          </div>

          {/* Right - Photo Card */}
          <div className="flex justify-center lg:justify-end">
            <div ref={photoRef} className="relative w-full max-w-sm">

              {/* Glow */}
              <div className="absolute -inset-6 bg-gradient-to-br from-cyan-500/20 to-violet-600/20 rounded-3xl blur-3xl"></div>

              {/* Card */}
              <div className="relative bg-[#0a0f1e] border border-white/10 rounded-3xl overflow-hidden hover:border-cyan-500/30 transition-all duration-500 group">

                {/* Top bar */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
                  <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
                  <span className="ml-2 text-xs text-neutral-600 font-mono">zaid-khan.dev</span>
                </div>

                {/* Photo */}
                <div className="relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e] via-transparent to-transparent z-10"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 z-20"></div>
                  <img src="/Zaid.png" alt="Zaid Khan" className="w-full object-cover brightness-75 contrast-90" />
                </div>

                {/* Info */}
                <div className="p-5 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-white font-bold text-lg">Zaid Khan</h3>
                      <p className="text-cyan-400 text-xs font-mono">Frontend Dev & UI/UX Designer</p>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-green-500/10 border border-green-500/20 rounded-full">
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                      <span className="text-green-400 text-xs font-medium">Open</span>
                    </div>
                  </div>

                  {/* Skill bars */}
                  <div className="space-y-2.5">
                    {[
                      { label: 'React & Next.js', pct: 65, color: 'from-cyan-500 to-blue-500' },
                      { label: 'UI/UX & Figma', pct: 90, color: 'from-violet-500 to-pink-500' },
                      { label: 'JavaScript', pct: 75, color: 'from-yellow-500 to-orange-500' },
                      { label: 'Node & MongoDB', pct: 50, color: 'from-green-500 to-emerald-500' },
                    ].map((s, i) => (
                      <div key={i}>
                        <div className="flex justify-between mb-1">
                          <span className="text-[11px] text-neutral-500 font-mono">{s.label}</span>
                          <span className="text-[11px] text-neutral-600">{s.pct}%</span>
                        </div>
                        <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                          <div className={`h-full bg-gradient-to-r ${s.color} rounded-full`} style={{width:`${s.pct}%`}}></div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/5">
                    {[['15+','Projects'],['14+','Skills'],['100%','Passion']].map(([val, label], i) => (
                      <div key={i} className="text-center">
                        <div className="text-base font-bold gradient-text">{val}</div>
                        <div className="text-[10px] text-neutral-600">{label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-[#0a0f1e] border border-violet-500/30 rounded-2xl px-3 py-2 shadow-xl animate-float">
                <div className="flex items-center gap-2">
                  <span className="iconify text-violet-400 text-lg" data-icon="mdi:react"></span>
                  <span className="text-xs text-white font-mono">React.js</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-[#0a0f1e] border border-cyan-500/30 rounded-2xl px-3 py-2 shadow-xl animate-float" style={{animationDelay:'1s'}}>
                <div className="flex items-center gap-2">
                  <i className="fab fa-figma text-pink-400 text-lg"></i>
                  <span className="text-xs text-white font-mono">Figma</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
