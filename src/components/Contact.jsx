'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const contactInfo = [
  { icon: 'mdi:email', title: 'Email', value: 'zaidkhan023761@gmail.com', link: 'mailto:zaidkhan023761@gmail.com', color: 'orange' },
  { icon: 'mdi:phone', title: 'Phone', value: '+91 9082775122', link: 'tel:+919082775122', color: 'blue' },
  { icon: 'mdi:linkedin', title: 'LinkedIn', value: 'Connect on LinkedIn', link: 'https://www.linkedin.com/in/zaid-khan-943376379', color: 'cyan' },
  { icon: 'mdi:whatsapp', title: 'WhatsApp', value: 'Chat on WhatsApp', link: 'https://wa.me/919082775122', color: 'green' },
  { icon: 'mdi:instagram', title: 'Instagram', value: 'Follow on Instagram', link: 'https://www.instagram.com/khan.zaxid/', color: 'pink' },
];

const colorMap = {
  orange: { border: 'border-orange-500/20', bg: 'bg-orange-500/5', text: 'text-orange-400', hover: 'hover:border-orange-500/40' },
  blue: { border: 'border-blue-500/20', bg: 'bg-blue-500/5', text: 'text-blue-400', hover: 'hover:border-blue-500/40' },
  cyan: { border: 'border-cyan-500/20', bg: 'bg-cyan-500/5', text: 'text-cyan-400', hover: 'hover:border-cyan-500/40' },
  green: { border: 'border-green-500/20', bg: 'bg-green-500/5', text: 'text-green-400', hover: 'hover:border-green-500/40' },
  pink: { border: 'border-pink-500/20', bg: 'bg-pink-500/5', text: 'text-pink-400', hover: 'hover:border-pink-500/40' },
};

export default function Contact() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header and cards staggered animation
      gsap.fromTo('.contact-card-anim',
        { y: 40, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.7, ease: 'power3.out', stagger: 0.08,
          scrollTrigger: { trigger: '.contact-grid-container', start: 'top 85%' } }
      );

      // Magnetic helper for contact cards
      const makeMagnetic = (element) => {
        if (!element) return;
        
        const handleMouseMove = (e) => {
          const bound = element.getBoundingClientRect();
          const x = (e.clientX - bound.left) / bound.width - 0.5;
          const y = (e.clientY - bound.top) / bound.height - 0.5;
          
          gsap.to(element, {
            x: x * bound.width * 0.15,
            y: y * bound.height * 0.15,
            scale: 1.02,
            ease: 'power2.out',
            duration: 0.3,
            overwrite: 'auto'
          });
        };
        
        const handleMouseLeave = () => {
          gsap.to(element, {
            x: 0,
            y: 0,
            scale: 1,
            ease: 'elastic.out(1.1, 0.4)',
            duration: 0.7,
            overwrite: 'auto'
          });
        };
        
        element.addEventListener('mousemove', handleMouseMove);
        element.addEventListener('mouseleave', handleMouseLeave);
        
        return () => {
          element.removeEventListener('mousemove', handleMouseMove);
          element.removeEventListener('mouseleave', handleMouseLeave);
        };
      };

      // Apply Magnetic effect to contact cards
      const tiltCleanups = [];
      gsap.utils.toArray('.tilt-card-contact').forEach((card) => {
        tiltCleanups.push(makeMagnetic(card));
      });

      return () => {
        tiltCleanups.forEach(cleanup => cleanup && cleanup());
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="py-24 px-6 lg:px-8 bg-[#050b18] relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500 rounded-full filter blur-[180px] opacity-5 pointer-events-none"></div>
      <div className="absolute inset-0 grid-pattern pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 contact-card-anim">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-4">
            <span className="w-1 h-1 bg-cyan-400 rounded-full"></span>
            Get In Touch
          </span>
          <h2 className="text-4xl lg:text-6xl font-black text-white mt-3">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-neutral-500 text-lg max-w-2xl mx-auto mt-4">Have a project in mind? I&apos;d love to hear from you!</p>
        </div>

        {/* Cards Grid */}
        <div className="contact-grid-container grid md:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {contactInfo.map((contact, i) => {
            const c = colorMap[contact.color];
            return (
              <a key={i} href={contact.link}
                target={contact.link.startsWith('http') ? '_blank' : undefined}
                rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="contact-card-anim tilt-card-contact group p-5 rounded-2xl border bg-[#0a0f1e] block transition-colors duration-300"
                style={{ borderColor: 'rgba(255,255,255,0.05)' }}
              >
                {/* Custom Styling mapping card values */}
                <div className={`w-12 h-12 rounded-xl border ${c.border} ${c.bg} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  <span className={`iconify text-xl ${c.text}`} data-icon={contact.icon}></span>
                </div>
                
                <h3 className="text-white font-bold text-sm mb-1">{contact.title}</h3>
                <p className={`text-xs ${c.text} font-mono break-all`}>{contact.value}</p>
                
                <div className="mt-3 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className={`text-xs ${c.text}`}>Connect</span>
                  <span className={`iconify text-sm ${c.text}`} data-icon="mdi:arrow-right"></span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
