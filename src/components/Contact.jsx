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
  orange: 'border-orange-500/20 bg-orange-500/5 text-orange-400 hover:border-orange-500/40',
  blue: 'border-blue-500/20 bg-blue-500/5 text-blue-400 hover:border-blue-500/40',
  cyan: 'border-cyan-500/20 bg-cyan-500/5 text-cyan-400 hover:border-cyan-500/40',
  green: 'border-green-500/20 bg-green-500/5 text-green-400 hover:border-green-500/40',
  pink: 'border-pink-500/20 bg-pink-500/5 text-pink-400 hover:border-pink-500/40',
};

export default function Contact() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.contact-card').forEach((card, i) => {
        gsap.fromTo(card,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out', delay: i * 0.1,
            scrollTrigger: { trigger: card, start: 'top 88%' } }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="py-24 px-6 lg:px-8 bg-[#050b18] relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500 rounded-full filter blur-[180px] opacity-5"></div>
      <div className="absolute inset-0 grid-pattern"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 contact-card">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-4">
            <span className="w-1 h-1 bg-cyan-400 rounded-full"></span>
            Get In Touch
          </span>
          <h2 className="text-4xl lg:text-6xl font-black text-white mt-3">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-neutral-500 text-lg max-w-2xl mx-auto mt-4">Have a project in mind? I'd love to hear from you!</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {contactInfo.map((contact, i) => {
            const c = colorMap[contact.color];
            return (
              <a key={i} href={contact.link}
                target={contact.link.startsWith('http') ? '_blank' : undefined}
                rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`contact-card group p-5 rounded-2xl border ${c} transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-xl bg-[#0a0f1e] block`}>
                <div className={`w-12 h-12 rounded-xl border ${c.split(' ')[0]} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  <span className={`iconify text-xl ${c.split(' ')[3]}`} data-icon={contact.icon}></span>
                </div>
                <h3 className="text-white font-bold text-sm mb-1">{contact.title}</h3>
                <p className={`text-xs ${c.split(' ')[3]} font-mono break-all`}>{contact.value}</p>
                <div className="mt-3 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className={`text-xs ${c.split(' ')[3]}`}>Connect</span>
                  <span className={`iconify text-sm ${c.split(' ')[3]}`} data-icon="mdi:arrow-right"></span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
