'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef(null);
  const tagRef = useRef(null);
  const roleRef = useRef(null);
  const descRef = useRef(null);
  const btnsRef = useRef(null);
  const socialsRef = useRef(null);
  const photoRef = useRef(null);
  const orb1 = useRef(null);
  const orb2 = useRef(null);
  const orb3 = useRef(null);
  const lineRef = useRef(null);
  const heroCanvasRef = useRef(null);

  // Helper function to split text for character reveals
  const renderSplitText = (text, className) => {
    return text.split('').map((char, i) => (
      <span
        key={i}
        className={`char inline-block ${className}`}
        style={{ transformOrigin: 'bottom center', display: char === ' ' ? 'inline' : 'inline-block' }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  useEffect(() => {
    // 3D Canvas setup in Hero: Solar System of Skills
    let camera, scene, renderer;
    const container = heroCanvasRef.current;
    let cleanupThree = () => {};

    if (container) {
      const initThree = async () => {
        const THREE = await import('three');
        
        const width = container.clientWidth || window.innerWidth;
        const height = container.clientHeight || window.innerHeight;
        
        camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
        camera.position.z = 9.0;
        
        scene = new THREE.Scene();
        scene.background = null;
        
        // 6 Orbiting skills - expanded to full-screen Hero layout
        const planetsData = [
          { name: 'React', radius: 2.2, speed: 0.008, color: 0x6366f1, size: 0.16, phase: 0 },
          { name: 'Next.js', radius: 3.0, speed: 0.006, color: 0x3b82f6, size: 0.14, phase: Math.PI / 3 },
          { name: 'Figma', radius: 3.8, speed: 0.005, color: 0xec4899, size: 0.13, phase: (2 * Math.PI) / 3 },
          { name: 'Node.js', radius: 4.6, speed: 0.004, color: 0x22c55e, size: 0.14, phase: Math.PI },
          { name: 'JavaScript', radius: 5.4, speed: 0.003, color: 0xeab308, size: 0.12, phase: (4 * Math.PI) / 3 },
          { name: 'Python', radius: 6.2, speed: 0.0025, color: 0x06b6d4, size: 0.13, phase: (5 * Math.PI) / 3 },
        ];

        const planets = [];

        // Helper to draw Canvas Text Sprite
        const createTextSprite = (text, colorHex) => {
          const canvas = document.createElement('canvas');
          canvas.width = 128;
          canvas.height = 32;
          const ctx = canvas.getContext('2d');
          ctx.font = 'bold 16px Courier New, monospace';
          ctx.fillStyle = '#' + new THREE.Color(colorHex).getHexString();
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(text, 64, 16);
          
          const texture = new THREE.CanvasTexture(canvas);
          const spriteMat = new THREE.SpriteMaterial({ map: texture, transparent: true, depthWrite: false });
          const sprite = new THREE.Sprite(spriteMat);
          sprite.scale.set(1.2, 0.3, 1);
          return sprite;
        };

        planetsData.forEach((pData) => {
          // Orbit rings rotated in 3D
          const points = [];
          for (let i = 0; i <= 64; i++) {
            const theta = (i / 64) * Math.PI * 2;
            const pos = new THREE.Vector3(pData.radius * Math.cos(theta), 0, pData.radius * Math.sin(theta));
            pos.applyAxisAngle(new THREE.Vector3(1, 0, 0), Math.PI / 4);
            pos.applyAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI / 8);
            points.push(pos);
          }
          const ringGeometry = new THREE.BufferGeometry().setFromPoints(points);
          const ringMaterial = new THREE.LineBasicMaterial({
            color: pData.color,
            transparent: true,
            opacity: 0.08,
          });
          const ring = new THREE.Line(ringGeometry, ringMaterial);
          scene.add(ring);

          // Group for planet + text label
          const group = new THREE.Group();

          // Core sphere
          const coreGeom = new THREE.SphereGeometry(pData.size, 10, 10);
          const coreMat = new THREE.MeshBasicMaterial({ color: pData.color, transparent: true, opacity: 0.8 });
          const core = new THREE.Mesh(coreGeom, coreMat);
          group.add(core);

          // Wireframe outer sphere
          const wireGeom = new THREE.SphereGeometry(pData.size * 1.4, 8, 8);
          const wireMat = new THREE.MeshBasicMaterial({ color: pData.color, wireframe: true, transparent: true, opacity: 0.3 });
          const wire = new THREE.Mesh(wireGeom, wireMat);
          group.add(wire);

          // Name label sprite
          const sprite = createTextSprite(pData.name, pData.color);
          sprite.position.y = pData.size * 1.8;
          group.add(sprite);

          scene.add(group);

          planets.push({
            group,
            core,
            wire,
            sprite,
            radius: pData.radius,
            speed: pData.speed,
            angle: pData.phase,
          });
        });

        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.appendChild(renderer.domElement);

        let mouseX = 0, mouseY = 0;
        const handleMouseMove = (e) => {
          const rect = container.getBoundingClientRect();
          mouseX = ((e.clientX - rect.left) / width) * 2 - 1;
          mouseY = -((e.clientY - rect.top) / height) * 2 + 1;
        };

        window.addEventListener('mousemove', handleMouseMove);

        let animationId;
        const animate = () => {
          animationId = requestAnimationFrame(animate);

          // Update orbit angles and positions
          planets.forEach((p) => {
            const speedMultiplier = window.isHeroCardHovered ? 2.2 : 1.0;
            p.angle += p.speed * speedMultiplier;

            // Base position on tilted 3D plane
            const pos = new THREE.Vector3(p.radius * Math.cos(p.angle), 0, p.radius * Math.sin(p.angle));
            pos.applyAxisAngle(new THREE.Vector3(1, 0, 0), Math.PI / 4);
            pos.applyAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI / 8);

            p.group.position.copy(pos);

            // Spin meshes
            p.core.rotation.y += 0.02;
            p.wire.rotation.y -= 0.01;

            // Simulating 3D depth by sizing & opacity relative to Z-coordinate (occlusion illusion)
            const zNormalized = (pos.z + p.radius) / (p.radius * 2); // 0 to 1
            const scale = 0.65 + zNormalized * 0.7; // 0.65x to 1.35x
            p.group.scale.set(scale, scale, scale);

            p.core.material.opacity = 0.25 + zNormalized * 0.75;
            p.wire.material.opacity = 0.1 + zNormalized * 0.4;
            p.sprite.material.opacity = 0.15 + zNormalized * 0.85;
          });

          // Parallax scene tilting
          scene.rotation.y = mouseX * 0.25;
          scene.rotation.x = -mouseY * 0.15;

          renderer.render(scene, camera);
        };
        animate();

        const handleResize = () => {
          if (!container || !camera || !renderer) return;
          const w = container.clientWidth;
          const h = container.clientHeight;
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
          renderer.setSize(w, h);
        };
        window.addEventListener('resize', handleResize);

        cleanupThree = () => {
          window.removeEventListener('mousemove', handleMouseMove);
          window.removeEventListener('resize', handleResize);
          cancelAnimationFrame(animationId);
          if (renderer) renderer.dispose();
          try {
            container.removeChild(renderer.domElement);
          } catch (e) {}
        };
      };
      initThree();
    }

    // Orb float animations
    gsap.to(orb1.current, { y: -40, x: 20, duration: 4, repeat: -1, yoyo: true, ease: 'sine.inOut' });
    gsap.to(orb2.current, { y: 30, x: -30, duration: 5, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 1 });
    gsap.to(orb3.current, { y: -25, x: 15, duration: 3.5, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 2 });

    // Main Reveal Timeline
    const tl = gsap.timeline({ delay: 0.5 });

    tl.fromTo(tagRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }
    )
    .fromTo('.char-hi',
      { y: 50, opacity: 0, rotateX: -45 },
      { y: 0, opacity: 1, rotateX: 0, stagger: 0.03, duration: 0.6, ease: 'power4.out' },
      '-=0.3'
    )
    .fromTo('.name-title-block',
      { y: 60, opacity: 0, skewY: 4 },
      { y: 0, opacity: 1, skewY: 0, duration: 0.8, ease: 'power4.out' },
      '-=0.4'
    )
    .fromTo(roleRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
      '-=0.4'
    )
    .fromTo(descRef.current,
      { y: 25, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' },
      '-=0.3'
    )
    .fromTo(btnsRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' },
      '-=0.2'
    )
    .fromTo(socialsRef.current.children,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, stagger: 0.06, duration: 0.4, ease: 'back.out(1.7)' },
      '-=0.2'
    )
    .fromTo(photoRef.current,
      { x: 50, opacity: 0, rotation: 0 },
      { x: 0, opacity: 1, rotation: 0, duration: 1.0, ease: 'power4.out' },
      '-=1.0'
    );

    // Scroll parallax on photo
    gsap.to(photoRef.current, {
      y: -50,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1.0,
      }
    });

    // Draw divider line
    gsap.fromTo(lineRef.current,
      { scaleX: 0 },
      { scaleX: 1, duration: 1.2, ease: 'power3.inOut', delay: 1.0 }
    );

    // Magnetic effect helper
    const makeMagnetic = (element, strength = 0.3) => {
      if (!element) return;
      
      const handleMouseMove = (e) => {
        const bound = element.getBoundingClientRect();
        const x = e.clientX - (bound.left + bound.width / 2);
        const y = e.clientY - (bound.top + bound.height / 2);
        
        gsap.to(element, {
          x: x * strength,
          y: y * strength,
          duration: 0.3,
          ease: 'power2.out'
        });
      };
      
      const handleMouseLeave = () => {
        gsap.to(element, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: 'elastic.out(1.1, 0.4)'
        });
      };
      
      element.addEventListener('mousemove', handleMouseMove);
      element.addEventListener('mouseleave', handleMouseLeave);
      
      return () => {
        element.removeEventListener('mousemove', handleMouseMove);
        element.removeEventListener('mouseleave', handleMouseLeave);
      };
    };

    // Make social icons magnetic
    const cleanups = [];
    if (socialsRef.current) {
      Array.from(socialsRef.current.children).forEach(icon => {
        cleanups.push(makeMagnetic(icon, 0.35));
      });
    }

    return () => {
      cleanupThree();
      cleanups.forEach(cleanup => cleanup && cleanup());
    };
  }, []);

  return (
    <section ref={sectionRef} id="home" className="min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-[#030712] relative overflow-hidden">

      {/* Grid background */}
      <div className="absolute inset-0 grid-pattern opacity-100 pointer-events-none"></div>

      {/* Background Orbs */}
      <div ref={orb1} className="absolute top-20 right-[10%] w-[500px] h-[500px] bg-cyan-500 rounded-full filter blur-[140px] opacity-10 pointer-events-none"></div>
      <div ref={orb2} className="absolute bottom-20 left-[5%] w-[400px] h-[400px] bg-violet-600 rounded-full filter blur-[120px] opacity-10 pointer-events-none"></div>
      <div ref={orb3} className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-pink-500 rounded-full filter blur-[100px] opacity-8 pointer-events-none"></div>

      {/* Interactive 3D Canvas Container (Solar System of Skills covering whole Hero background) */}
      <div 
        ref={heroCanvasRef} 
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{ opacity: 0.75 }}
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Column - Intro Details */}
          <div className="space-y-7 text-center lg:text-left">

            <div ref={tagRef} className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 backdrop-blur-sm">
              <span className="flex gap-1">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></span>
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" style={{animationDelay:'0.2s'}}></span>
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" style={{animationDelay:'0.4s'}}></span>
              </span>
              <span className="text-cyan-400 text-xs font-mono tracking-widest uppercase">Available for work</span>
            </div>

            <div className="overflow-hidden">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-none tracking-tight perspective-1000">
                <span className="block text-white mb-2">
                  {renderSplitText("Hi, I'm", "char-hi")}
                </span>
                <span className="block gradient-text-animated pb-2 name-title-block">
                  Zaid Khan
                </span>
              </h1>
            </div>

            <div ref={lineRef} className="h-px bg-gradient-to-r from-cyan-500 via-violet-500 to-transparent origin-left"></div>

            <div ref={roleRef}>
              <h2 className="text-lg sm:text-xl text-neutral-400 font-light">
                <span className="text-white font-semibold">Frontend Developer</span>
                <span className="text-cyan-500 mx-3">×</span>
                <span className="text-white font-semibold">UI/UX Designer</span>
              </h2>
            </div>

            <p ref={descRef} className="text-neutral-300 text-sm sm:text-base leading-relaxed max-w-lg mx-auto lg:mx-0">
              An engineering student specializing in Artificial Intelligence, Data Science, and Machine Learning. Passionate about building high-performance web applications with clean architecture and user-centric UI/UX design.
            </p>

            <div ref={btnsRef} className="flex flex-wrap justify-center lg:justify-start gap-4">
              <a href="#projects"
                className="group relative px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-violet-600 text-white rounded-full font-semibold text-sm overflow-hidden hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-105">
                <span className="relative z-10 flex items-center gap-2">
                  Explore Projects
                  <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="mdi:arrow-right"></span>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-violet-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </a>
              <a href="#contact"
                className="group px-8 py-3.5 rounded-full border border-white/10 text-white font-semibold text-sm hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all duration-300 hover:scale-105 flex items-center gap-2">
                Get In Touch
                <span className="iconify group-hover:rotate-45 transition-transform" data-icon="mdi:send"></span>
              </a>
            </div>

            <div ref={socialsRef} className="flex flex-wrap justify-center lg:justify-start gap-3">
              {[
                { href: 'https://www.linkedin.com/in/zaid-khan-943376379', icon: 'mdi:linkedin', label: 'LinkedIn' },
                { href: 'https://github.com/zkhan023761-create', icon: 'mdi:github', label: 'GitHub' },
                { href: 'https://www.instagram.com/khan.zaxid/', fa: 'fab fa-instagram', label: 'Instagram' },
                { href: 'mailto:zkhan023761@gmail.com', icon: 'mdi:email', label: 'Email' },
                { href: 'https://wa.me/919082775122', icon: 'mdi:whatsapp', label: 'WhatsApp' },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-xl border border-white/10 text-neutral-500 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-cyan-500/5 transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                  {s.fa ? <i className={`${s.fa} text-lg`}></i> : <span className="iconify text-lg" data-icon={s.icon}></span>}
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Photo Card & Three.js Canvas */}
          <div className="flex justify-center lg:justify-end">
            <div ref={photoRef} className="relative w-full max-w-sm">

              {/* Glow Behind Card */}
              <div className="absolute -inset-6 bg-gradient-to-br from-cyan-500/20 to-violet-600/20 rounded-3xl blur-3xl"></div>

              {/* Main Profile Card (HUD-themed with flat top) */}
              <div 
                className="relative bg-[#0a0f1e]/85 backdrop-blur-md border border-white/10 rounded-b-3xl rounded-t-none overflow-hidden hover:border-indigo-500/40 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] transition-all duration-500 group"
                onMouseEnter={() => { window.isHeroCardHovered = true; }}
                onMouseLeave={() => { window.isHeroCardHovered = false; }}
              >
                {/* Cyber HUD Brackets */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-indigo-500/50 z-30 transition-colors group-hover:border-cyan-400"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-indigo-500/50 z-30 transition-colors group-hover:border-cyan-400"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-indigo-500/50 z-30 transition-colors group-hover:border-cyan-400"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-indigo-500/50 z-30 transition-colors group-hover:border-cyan-400"></div>

                {/* Top Window Bar */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-black/45 rounded-t-none relative z-10">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/70"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/70"></div>
                  </div>
                  <span className="text-[10px] text-neutral-400 font-mono tracking-wider">SYSTEM_CORE: ACTIVE</span>
                  <span className="text-[10px] text-cyan-400 font-mono">zaid-khan.dev</span>
                </div>

                {/* Photo Container */}
                <div className="relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e] via-transparent to-transparent z-10"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 z-20"></div>
                  
                  {/* Holographic Laser scan line */}
                  <div className="animate-scan z-20"></div>
                  
                  <img src="/Zaid.png" alt="Zaid Khan" className="w-full object-cover brightness-75 contrast-90" />
                </div>

                {/* Info & Stats */}
                <div className="p-5 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-white font-bold text-lg">Zaid Khan</h3>
                      <p className="text-cyan-400 text-xs font-mono">Frontend Developer & UI/UX Designer</p>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-green-500/10 border border-green-500/20 rounded-full">
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                      <span className="text-green-400 text-xs font-medium">Available</span>
                    </div>
                  </div>

                  {/* Skill Progress Overview */}
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
                          <span className="text-[11px] text-neutral-400">{s.pct}%</span>
                        </div>
                        <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                          <div className={`h-full bg-gradient-to-r ${s.color} rounded-full`} style={{width:`${s.pct}%`}}></div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Quick Stats Grid */}
                  <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/5">
                    {[['15+','Projects'],['14+','Skills'],['100%','Commitment']].map(([val, label], i) => (
                      <div key={i} className="text-center">
                        <div className="text-base font-bold gradient-text">{val}</div>
                        <div className="text-[10px] text-neutral-400">{label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Role Badges with Animation */}
              <div className="absolute -top-4 -right-4 bg-[#0a0f1e] border border-violet-500/30 rounded-2xl px-3 py-2 shadow-xl animate-float pointer-events-none">
                <div className="flex items-center gap-2">
                  <span className="iconify text-violet-400 text-lg" data-icon="mdi:react"></span>
                  <span className="text-xs text-white font-mono">React.js</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-[#0a0f1e] border border-cyan-500/30 rounded-2xl px-3 py-2 shadow-xl animate-float pointer-events-none" style={{animationDelay:'1s'}}>
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
