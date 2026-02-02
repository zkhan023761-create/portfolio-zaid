export default function WhatsAppFloat() {
  return (
    <a 
      href="https://wa.me/919082775122" 
      target="_blank" 
      rel="noopener noreferrer"
      className="whatsapp-float group"
    >
      <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-2xl hover:bg-green-600 transition-all hover:scale-110">
        <span className="iconify text-white text-3xl" data-icon="mdi:whatsapp"></span>
      </div>
      <div className="absolute right-20 top-1/2 transform -translate-y-1/2 bg-neutral-900 text-white px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Chat on WhatsApp
      </div>
    </a>
  );
}
