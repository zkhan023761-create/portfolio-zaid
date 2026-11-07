export default function WhatsAppFloat() {
  return (
    <aside aria-label="Quick Contact" className="fixed bottom-6 right-6 z-[9999] pointer-events-auto">
      <a
        href="https://wa.me/919082775122"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative flex items-center justify-center cursor-pointer"
      >
        <div className="relative w-14 h-14 bg-emerald-500 rounded-full flex items-center justify-center shadow-2xl hover:bg-emerald-600 transition-all duration-300 hover:scale-110 border border-white/20">
          <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-40 animate-ping pointer-events-none" />
          <i className="fa-brands fa-whatsapp text-white text-3xl relative z-10" />
        </div>
        <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-surface/95 border border-stroke text-text-primary text-xs px-3.5 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl pointer-events-none font-medium">
          Chat on WhatsApp
        </div>
      </a>
    </aside>
  );
}
