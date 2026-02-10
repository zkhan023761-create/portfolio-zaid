export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white py-16 px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background Elements with More Particles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-float" style={{animationDelay: '3s'}}></div>
      
      {/* Animated Particles */}
      <div className="absolute top-1/4 right-1/3 w-2 h-2 bg-primary-400 rounded-full animate-ping opacity-20"></div>
      <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-accent-400 rounded-full animate-ping opacity-20" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-20" style={{animationDelay: '2s'}}></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section with Enhanced Animation */}
          <div className="md:col-span-1 animate-slideUp">
            <a href="#home" className="font-mono font-bold text-2xl bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent hover:scale-110 transition-all duration-300 inline-block relative group">
              Zaid Khan
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-400 to-accent-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <p className="text-neutral-400 mt-4 text-sm leading-relaxed">
              Building the future, one line of code at a time. Passionate about creating innovative digital solutions.
            </p>
            
            {/* Tech Stack Icons with Enhanced Animation */}
            <div className="flex gap-3 mt-6">
              <div className="w-8 h-8 bg-neutral-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-all duration-300 cursor-pointer group hover:scale-125 hover:rotate-12 animate-zoomIn">
                <span className="iconify text-lg text-neutral-400 group-hover:text-white transition-colors group-hover:animate-bounce" data-icon="mdi:react"></span>
              </div>
              <div className="w-8 h-8 bg-neutral-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-all duration-300 cursor-pointer group hover:scale-125 hover:rotate-12 animate-zoomIn" style={{animationDelay: '0.1s'}}>
                <span className="iconify text-lg text-neutral-400 group-hover:text-white transition-colors group-hover:animate-bounce" data-icon="mdi:nodejs"></span>
              </div>
              <div className="w-8 h-8 bg-neutral-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-all duration-300 cursor-pointer group hover:scale-125 hover:rotate-12 animate-zoomIn" style={{animationDelay: '0.2s'}}>
                <i className="fab fa-figma text-lg text-neutral-400 group-hover:text-white transition-colors group-hover:animate-bounce"></i>
              </div>
            </div>
          </div>

          {/* Quick Links with Enhanced Animation */}
          <div className="animate-slideUp" style={{animationDelay: '0.1s'}}>
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2 group hover:translate-x-1 transition-transform">
              <span className="w-1 h-6 bg-gradient-to-b from-primary-500 to-accent-500 rounded-full group-hover:h-8 transition-all duration-300"></span>
              Quick Links
            </h3>
            <div className="space-y-2">
              <a href="#home" className="block text-neutral-400 hover:text-primary-400 transition-all hover:translate-x-3 duration-300 group">→ Home</a>
              <a href="#about" className="block text-neutral-400 hover:text-primary-400 transition-all hover:translate-x-3 duration-300 group">→ About</a>
              <a href="#education" className="block text-neutral-400 hover:text-primary-400 transition-all hover:translate-x-3 duration-300 group">→ Education</a>
              <a href="#skills" className="block text-neutral-400 hover:text-primary-400 transition-all hover:translate-x-3 duration-300 group">→ Skills</a>
              <a href="#projects" className="block text-neutral-400 hover:text-primary-400 transition-all hover:translate-x-3 duration-300 group">→ Projects</a>
              <a href="#certifications" className="block text-neutral-400 hover:text-primary-400 transition-all hover:translate-x-3 duration-300 group">→ Certifications</a>
              <a href="#contact" className="block text-neutral-400 hover:text-primary-400 transition-all hover:translate-x-3 duration-300 group">→ Contact</a>
            </div>
          </div>

          {/* Services/Skills with Enhanced Animation */}
          <div className="animate-slideUp" style={{animationDelay: '0.2s'}}>
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2 group hover:translate-x-1 transition-transform">
              <span className="w-1 h-6 bg-gradient-to-b from-accent-500 to-pink-500 rounded-full group-hover:h-8 transition-all duration-300"></span>
              Services
            </h3>
            <div className="space-y-2 text-sm">
              <p className="text-neutral-400 hover:text-accent-400 transition-all duration-300 cursor-pointer hover:translate-x-2 hover:scale-105">→ Web Development</p>
              <p className="text-neutral-400 hover:text-accent-400 transition-all duration-300 cursor-pointer hover:translate-x-2 hover:scale-105">→ UI/UX Design</p>
              <p className="text-neutral-400 hover:text-accent-400 transition-all duration-300 cursor-pointer hover:translate-x-2 hover:scale-105">→ Frontend Development</p>
              <p className="text-neutral-400 hover:text-accent-400 transition-all duration-300 cursor-pointer hover:translate-x-2 hover:scale-105">→ Backend Development</p>
              <p className="text-neutral-400 hover:text-accent-400 transition-all duration-300 cursor-pointer hover:translate-x-2 hover:scale-105">→ Figma Prototyping</p>
              <p className="text-neutral-400 hover:text-accent-400 transition-all duration-300 cursor-pointer hover:translate-x-2 hover:scale-105">→ WordPress Development</p>
            </div>
          </div>

          {/* Connect Section with Enhanced Animation */}
          <div className="animate-slideUp" style={{animationDelay: '0.3s'}}>
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2 group hover:translate-x-1 transition-transform">
              <span className="w-1 h-6 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full group-hover:h-8 transition-all duration-300"></span>
              Connect
            </h3>
            <div className="flex flex-wrap gap-3 mb-6">
              <a href="https://www.linkedin.com/in/zaid-khan-943376379" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-neutral-800 rounded-lg hover:bg-blue-600 transition-all duration-300 hover:scale-125 hover:shadow-2xl hover:shadow-blue-600/50 hover:-translate-y-2 hover:rotate-12 animate-zoomIn">
                <span className="iconify text-xl" data-icon="mdi:linkedin"></span>
              </a>
              <a href="https://github.com/zkhan023761-create" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-all duration-300 hover:scale-125 hover:shadow-2xl hover:-translate-y-2 hover:rotate-12 animate-zoomIn" style={{animationDelay: '0.1s'}}>
                <span className="iconify text-xl" data-icon="mdi:github"></span>
              </a>
              <a href="https://www.instagram.com/khan.zaxid/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-neutral-800 rounded-lg hover:bg-pink-600 transition-all duration-300 hover:scale-125 hover:shadow-2xl hover:shadow-pink-600/50 hover:-translate-y-2 hover:rotate-12 animate-zoomIn" style={{animationDelay: '0.2s'}}>
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a href="mailto:zaidkhan023761@gmail.com" className="w-10 h-10 flex items-center justify-center bg-neutral-800 rounded-lg hover:bg-red-600 transition-all duration-300 hover:scale-125 hover:shadow-2xl hover:shadow-red-600/50 hover:-translate-y-2 hover:rotate-12 animate-zoomIn" style={{animationDelay: '0.3s'}}>
                <span className="iconify text-xl" data-icon="mdi:email"></span>
              </a>
              <a href="https://wa.me/919082775122" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-neutral-800 rounded-lg hover:bg-green-600 transition-all duration-300 hover:scale-125 hover:shadow-2xl hover:shadow-green-600/50 hover:-translate-y-2 hover:rotate-12 animate-zoomIn" style={{animationDelay: '0.4s'}}>
                <span className="iconify text-xl" data-icon="mdi:whatsapp"></span>
              </a>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              <p className="text-neutral-400 flex items-center gap-2">
                <span className="iconify text-primary-400" data-icon="mdi:email"></span>
                zaidkhan023761@gmail.com
              </p>
              <p className="text-neutral-400 flex items-center gap-2">
                <span className="iconify text-primary-400" data-icon="mdi:phone"></span>
                +91 9082775122
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section with Enhanced Animation */}
        <div className="border-t border-neutral-800 pt-8 animate-fadeInUp">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neutral-400 text-sm hover:text-neutral-300 transition-colors">
              &copy; 2026 Zaid Khan. All rights reserved. Built with <span className="text-red-500 animate-heartbeat inline-block">❤️</span> by Zaid Khan
            </p>
            <div className="flex gap-4 text-sm text-neutral-400">
              <a href="#" className="hover:text-primary-400 transition-all duration-300 hover:scale-110 hover:-translate-y-1">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-primary-400 transition-all duration-300 hover:scale-110 hover:-translate-y-1">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
