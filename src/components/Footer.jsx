export default function Footer() {
  return (
    <footer className="bg-[#030712] border-t border-white/5 text-white py-16 px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500 rounded-full filter blur-[180px] opacity-5"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <a href="#home" className="font-mono font-bold text-2xl gradient-text inline-block mb-4">ZK.</a>
            <p className="text-neutral-600 text-sm leading-relaxed mb-6">
              Building the future, one line of code at a time.
            </p>
            <div className="flex gap-3">
              {[
                { icon: 'mdi:react', color: 'hover:text-cyan-400' },
                { icon: 'mdi:nodejs', color: 'hover:text-green-400' },
                { fa: 'fab fa-figma', color: 'hover:text-pink-400' },
              ].map((t, i) => (
                <div key={i} className={`w-8 h-8 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-neutral-600 ${t.color} transition-colors cursor-pointer hover:border-white/20`}>
                  {t.fa ? <i className={`${t.fa} text-sm`}></i> : <span className="iconify text-sm" data-icon={t.icon}></span>}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-sm mb-4 flex items-center gap-2">
              <span className="w-1 h-4 bg-gradient-to-b from-cyan-400 to-violet-500 rounded-full"></span>
              Quick Links
            </h3>
            <div className="space-y-2">
              {['Home','About','Education','Skills','Projects','Certifications','Contact'].map(link => (
                <a key={link} href={`#${link.toLowerCase()}`}
                  className="block text-neutral-600 hover:text-cyan-400 text-sm transition-colors hover:translate-x-1 duration-200">
                  → {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-sm mb-4 flex items-center gap-2">
              <span className="w-1 h-4 bg-gradient-to-b from-violet-400 to-pink-500 rounded-full"></span>
              Services
            </h3>
            <div className="space-y-2 text-sm">
              {['Web Development','UI/UX Design','Frontend Development','Backend Development','Figma Prototyping','WordPress Development'].map(s => (
                <p key={s} className="text-neutral-600 hover:text-violet-400 transition-colors cursor-default">→ {s}</p>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-sm mb-4 flex items-center gap-2">
              <span className="w-1 h-4 bg-gradient-to-b from-pink-400 to-cyan-500 rounded-full"></span>
              Connect
            </h3>
            <div className="flex flex-wrap gap-2 mb-5">
              {[
                { href: 'https://www.linkedin.com/in/zaid-khan-943376379', icon: 'mdi:linkedin', color: 'hover:bg-blue-600/20 hover:border-blue-500/40 hover:text-blue-400' },
                { href: 'https://github.com/zkhan023761-create', icon: 'mdi:github', color: 'hover:bg-white/10 hover:border-white/20 hover:text-white' },
                { href: 'https://www.instagram.com/khan.zaxid/', fa: 'fab fa-instagram', color: 'hover:bg-pink-600/20 hover:border-pink-500/40 hover:text-pink-400' },
                { href: 'mailto:zaidkhan023761@gmail.com', icon: 'mdi:email', color: 'hover:bg-red-600/20 hover:border-red-500/40 hover:text-red-400' },
                { href: 'https://wa.me/919082775122', icon: 'mdi:whatsapp', color: 'hover:bg-green-600/20 hover:border-green-500/40 hover:text-green-400' },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                  className={`w-9 h-9 flex items-center justify-center bg-white/5 border border-white/10 rounded-lg text-neutral-600 transition-all duration-300 ${s.color}`}>
                  {s.fa ? <i className={`${s.fa} text-sm`}></i> : <span className="iconify text-sm" data-icon={s.icon}></span>}
                </a>
              ))}
            </div>
            <div className="space-y-2 text-xs text-neutral-600">
              <p className="flex items-center gap-2"><span className="iconify text-cyan-500" data-icon="mdi:email"></span>zaidkhan023761@gmail.com</p>
              <p className="flex items-center gap-2"><span className="iconify text-cyan-500" data-icon="mdi:phone"></span>+91 9082775122</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-600 text-sm">
            &copy; 2026 <span className="gradient-text font-semibold">Zaid Khan</span>. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-neutral-600">
            <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
            <span>·</span>
            <a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
