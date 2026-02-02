export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <a href="#home" className="font-mono font-bold text-2xl text-primary-400 hover:text-primary-300 transition-colors">
              Zaid Khan
            </a>
            <p className="text-neutral-400 mt-4">
              Building the future, one line of code at a time.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="#home" className="block text-neutral-400 hover:text-primary-400 transition-colors">Home</a>
              <a href="#about" className="block text-neutral-400 hover:text-primary-400 transition-colors">About</a>
              <a href="#skills" className="block text-neutral-400 hover:text-primary-400 transition-colors">Skills</a>
              <a href="#projects" className="block text-neutral-400 hover:text-primary-400 transition-colors">Projects</a>
              <a href="#contact" className="block text-neutral-400 hover:text-primary-400 transition-colors">Contact</a>
              <a href="#certifications" className="block text-neutral-400 hover:text-primary-400 transition-colors">Certifications</a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Connect With Me</h3>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/zaid-khan-943376379" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-neutral-800 rounded-lg hover:bg-blue-600 transition-all duration-300 hover:scale-110 hover:shadow-lg">
                <span className="iconify text-xl" data-icon="mdi:linkedin"></span>
              </a>
              <a href="https://github.com/zkhan023761-create" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-all duration-300 hover:scale-110 hover:shadow-lg">
                <span className="iconify text-xl" data-icon="mdi:github"></span>
              </a>
              <a href="https://www.figma.com/@zaidkhan" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-neutral-800 rounded-lg hover:bg-pink-600 transition-all duration-300 hover:scale-110 hover:shadow-lg">
                <i className="fab fa-figma text-xl"></i>
              </a>
              <a href="mailto:zaidkhan023761@gmail.com" className="w-10 h-10 flex items-center justify-center bg-neutral-800 rounded-lg hover:bg-red-600 transition-all duration-300 hover:scale-110 hover:shadow-lg">
                <span className="iconify text-xl" data-icon="mdi:email"></span>
              </a>
              <a href="https://wa.me/919082775122" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-neutral-800 rounded-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 hover:shadow-lg">
                <span className="iconify text-xl" data-icon="mdi:whatsapp"></span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8 text-center text-neutral-400">
          <p>&copy; 2026 Zaid Khan. All rights reserved. Built by ❤️ Zaid Khan</p>
        </div>
      </div>
    </footer>
  );
}
