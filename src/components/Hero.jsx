export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-row items-center justify-center pt-20 pb-16 px-6 lg:px-8 bg-pattern relative overflow-hidden">
      {/* Floating Decorative Elements with Enhanced Animation */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-accent-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-1/3 right-1/4 w-56 h-56 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-float" style={{animationDelay: '3s'}}></div>
      
      {/* Animated Particles */}
      <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-primary-400 rounded-full animate-ping opacity-40"></div>
      <div className="absolute top-2/3 right-1/3 w-3 h-3 bg-accent-400 rounded-full animate-ping opacity-40" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-40" style={{animationDelay: '2s'}}></div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8" data-aos="fade-up" data-aos-duration="1000">
            <div data-aos="zoom-in" data-aos-delay="200">
              <div className="inline-block animate-float mb-4">
                <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium font-mono hover:bg-primary-200 hover:scale-110 transition-all duration-300 cursor-default animate-borderGlow border-2 border-primary-200 shadow-lg hover:shadow-xl">
                  <span className="inline-block animate-wiggle">👋</span> Welcome to my portfolio
                </span>
              </div>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-neutral-900 animate-slideUp" data-aos="fade-right" data-aos-delay="300">
              Hi, I'm<br />
              <span className="gradient-text  relative inline-block">
                Zaid Khan
                <span className="absolute -inset-1 bg-gradient-to-r from-primary-500/20 to-accent-500/20 blur-xl animate-pulse"></span>
              </span>
            </h1>

            <h2 className="text-2xl lg:text-3xl text-neutral-900 font-semibold animate-slideUp" data-aos="fade-right" data-aos-delay="400" style={{animationDelay: '0.2s'}}>
              <span className="inline-block hover:scale-110 transition-transform duration-300">Frontend Developer</span> & <span className="inline-block hover:scale-110 transition-transform duration-300">UI/UX Designer</span>
            </h2>

            <p className="text-lg text-neutral-900 leading-relaxed max-w-xl font-medium" data-aos="fade-up" data-aos-delay="500">
              Crafting beautiful, user-centered digital experiences with expertise in modern web technologies. 
              Currently pursuing AI & Machine Learning at Nexcore Institute of Technology.
            </p>

            <div className="flex flex-wrap gap-6 pt-6 animate-slideUp" data-aos="fade-up" data-aos-delay="600" style={{animationDelay: '0.4s'}}>
              <a href="#projects" className="btn-hover-glow px-8 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-600/50 hover:scale-110 transform relative overflow-hidden group">
                <span className="relative z-10 flex items-center gap-2">
                  View My Work
                  <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="mdi:arrow-right"></span>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-accent-600 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </a>
              <a href="#contact" className="btn-hover-glow px-8 py-3 border-2 border-primary-600 text-primary-600 rounded-lg font-medium hover:bg-primary-600 hover:text-white transition-all duration-300 hover:shadow-2xl hover:shadow-primary-600/50 hover:scale-110 transform relative overflow-hidden group">
                <span className="relative z-10 flex items-center gap-2">
                  Contact Me
                  <span className="iconify group-hover:rotate-45 transition-transform" data-icon="mdi:send"></span>
                </span>
              </a>
            </div>

            {/* Social Links with Enhanced Animations */}
            <div className="flex gap-6 pt-6 animate-slideUp" data-aos="fade-up" data-aos-delay="700" style={{animationDelay: '0.5s'}}>
              <a href="https://www.linkedin.com/in/zaid-khan-943376379" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center bg-white border-2 border-neutral-200 rounded-lg hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 hover:scale-125 hover:shadow-2xl shadow-sm hover:rotate-12 relative group animate-zoomIn">
                <span className="iconify text-2xl group-hover:animate-bounce" data-icon="mdi:linkedin"></span>
                <span className="absolute inset-0 rounded-lg bg-blue-600 opacity-0 group-hover:opacity-10 transition-opacity"></span>
              </a>
              <a href="https://github.com/zkhan023761-create" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center bg-white border-2 border-neutral-200 rounded-lg hover:border-neutral-800 hover:text-neutral-800 hover:bg-neutral-50 transition-all duration-300 hover:scale-125 hover:shadow-2xl shadow-sm hover:rotate-12 relative group animate-zoomIn" style={{animationDelay: '0.1s'}}>
                <span className="iconify text-2xl group-hover:animate-bounce" data-icon="mdi:github"></span>
                <span className="absolute inset-0 rounded-lg bg-neutral-800 opacity-0 group-hover:opacity-10 transition-opacity"></span>
              </a>
              <a href="https://www.instagram.com/khan.zaxid/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center bg-white border-2 border-neutral-200 rounded-lg hover:border-pink-600 hover:text-pink-600 hover:bg-pink-50 transition-all duration-300 hover:scale-125 hover:shadow-2xl shadow-sm hover:rotate-12 relative group animate-zoomIn" style={{animationDelay: '0.2s'}}>
                <i className="fab fa-instagram text-2xl group-hover:animate-bounce"></i>
                <span className="absolute inset-0 rounded-lg bg-pink-600 opacity-0 group-hover:opacity-10 transition-opacity"></span>
              </a>
              <a href="mailto:zaidkhan023761@gmail.com" className="w-12 h-12 flex items-center justify-center bg-white border-2 border-neutral-200 rounded-lg hover:border-red-600 hover:text-red-600 hover:bg-red-50 transition-all duration-300 hover:scale-125 hover:shadow-2xl shadow-sm hover:rotate-12 relative group animate-zoomIn" style={{animationDelay: '0.3s'}}>
                <span className="iconify text-2xl group-hover:animate-bounce" data-icon="mdi:email"></span>
                <span className="absolute inset-0 rounded-lg bg-red-600 opacity-0 group-hover:opacity-10 transition-opacity"></span>
              </a>
              <a href="https://wa.me/919082775122" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center bg-white border-2 border-neutral-200 rounded-lg hover:border-green-600 hover:text-green-600 hover:bg-green-50 transition-all duration-300 hover:scale-125 hover:shadow-2xl shadow-sm hover:rotate-12 relative group animate-zoomIn" style={{animationDelay: '0.4s'}}>
                <span className="iconify text-2xl group-hover:animate-bounce" data-icon="mdi:whatsapp"></span>
                <span className="absolute inset-0 rounded-lg bg-green-600 opacity-0 group-hover:opacity-10 transition-opacity"></span>
              </a>
            </div>
          </div>

          {/* Right Content - Photo & Info */}
          <div className="w-full max-w-md mx-auto lg:max-w-none lg:w-[480px] lg:ml-auto lg:mr-0" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
            <div className="flex flex-col items-center lg:items-end">
              {/* Profile Photo Card with Enhanced Animations */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-500 hover-lift hover:shadow-primary-500/30 animate-zoomIn relative group w-full">
                {/* Animated Border Glow */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500 rounded-3xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500 animate-pulse"></div>
                
                {/* Photo Container */}
                <div className="relative mb-6 z-10" data-aos="zoom-in" data-aos-delay="400">
                  <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary-500 to-accent-500 p-1 animate-glow relative group/photo">
                    <div className="w-full h-full bg-neutral-200 rounded-2xl flex items-center justify-center hover:scale-110 transition-transform duration-500 relative overflow-hidden">
                      {/* Animated Shine Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover/photo:translate-x-full transition-transform duration-1000"></div>
                      {/* Placeholder for photo - replace with actual image */}
                      <div className="text-center">
                        <span className="iconify text-8xl text-neutral-400 animate-pulse" data-icon="mdi:account-circle"></span>
                        <p className="text-sm text-neutral-500 mt-2">Your Photo Here</p>
                      </div>
                      {/* Uncomment and use this when you have a photo:
                      <img src="your-photo.jpg" alt="Zaid Khan" className="w-full h-full object-cover rounded-2xl" />
                      */}
                    </div>
                  </div>
                  {/* Decorative Badge with Enhanced Animation */}
                  <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-xl hover:scale-125 transition-all duration-300 animate-zoomIn group/badge cursor-pointer" data-aos="flip-left" data-aos-delay="600" style={{animationDelay: '0.8s'}}>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full absolute animate-pulse"></div>
                      <span className="text-sm font-semibold group-hover/badge:text-green-600 transition-colors">Available</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl p-6 text-white hover:shadow-2xl transition-all duration-500 relative overflow-hidden group/card z-10" data-aos="fade-up" data-aos-delay="500">
                  {/* Animated Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-white rounded-full blur-2xl animate-float"></div>
                    <div className="absolute bottom-0 left-0 w-16 h-16 bg-white rounded-full blur-2xl animate-float" style={{animationDelay: '1s'}}></div>
                  </div>
                  
                  <div className="space-y-4 sm:space-y-5 relative z-10">
                    <div className="flex flex-col items-center text-center hover:scale-105 transition-all duration-300 group/item cursor-pointer">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm shrink-0 group-hover/item:rotate-[360deg] group-hover/item:scale-125 transition-all duration-500 shadow-lg mb-3">
                        <span className="iconify text-xl sm:text-2xl group-hover/item:animate-bounce" data-icon="mdi:code-braces"></span>
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold">Frontend Developer</h3>
                        <p className="text-xs sm:text-sm text-primary-100">Modern Web Applications</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-center text-center hover:scale-105 transition-all duration-300 group/item cursor-pointer">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm shrink-0 group-hover/item:rotate-[360deg] group-hover/item:scale-125 transition-all duration-500 shadow-lg mb-3">
                        <i className="fab fa-figma text-xl sm:text-2xl group-hover/item:animate-bounce"></i>
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold">UI/UX Designer</h3>
                        <p className="text-xs sm:text-sm text-primary-100">User-Centered Design</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stats with Enhanced Animations */}
                <div className="grid grid-cols-3 gap-3 sm:gap-5 mt-6 sm:mt-8 z-10 relative" data-aos="fade-up" data-aos-delay="700">
                  <div className="text-center p-3 sm:p-5 bg-primary-50 rounded-xl hover:bg-primary-100 hover:scale-110 transition-all duration-300 cursor-default group relative overflow-hidden animate-zoomIn">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-200 to-transparent opacity-0 group-hover:opacity-50 transition-opacity"></div>
                    <div className="text-2xl sm:text-3xl font-bold text-primary-600 group-hover:scale-125 transition-transform relative z-10 animate-heartbeat">15+</div>
                    <div className="text-sm sm:text-base text-neutral-900 font-semibold relative z-10">Projects</div>
                  </div>
                  <div className="text-center p-3 sm:p-5 bg-primary-50 rounded-xl hover:bg-primary-100 hover:scale-110 transition-all duration-300 cursor-default group relative overflow-hidden animate-zoomIn" style={{animationDelay: '0.1s'}}>
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-200 to-transparent opacity-0 group-hover:opacity-50 transition-opacity"></div>
                    <div className="text-2xl sm:text-3xl font-bold text-primary-600 group-hover:scale-125 transition-transform relative z-10 animate-heartbeat" style={{animationDelay: '0.3s'}}>9+</div>
                    <div className="text-sm sm:text-base text-neutral-900 font-semibold relative z-10">Skills</div>
                  </div>
                  <div className="text-center p-3 sm:p-5 bg-primary-50 rounded-xl hover:bg-primary-100 hover:scale-110 transition-all duration-300 cursor-default group relative overflow-hidden animate-zoomIn" style={{animationDelay: '0.2s'}}>
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-transparent opacity-0 group-hover:opacity-50 transition-opacity"></div>
                    <div className="text-2xl sm:text-3xl font-bold text-primary-600 group-hover:scale-125 transition-transform relative z-10 animate-heartbeat" style={{animationDelay: '0.6s'}}>100%</div>
                    <div className="text-sm sm:text-base text-neutral-900 font-semibold relative z-10">Passion</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
