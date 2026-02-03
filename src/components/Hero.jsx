export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-row items-center justify-center pt-20 pb-16 px-6 lg:px-8 bg-pattern relative overflow-hidden">
      {/* Floating Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-accent-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{animationDelay: '1s'}}></div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8" data-aos="fade-up" data-aos-duration="1000">
            <div className="inline-block">
              <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium font-mono">
                👋 Welcome to my portfolio
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Hi, I'm<br />
              <span className="gradient-text">Zaid Khan</span>
            </h1>

            <h2 className="text-2xl lg:text-3xl text-neutral-600 font-medium">
              Frontend Developer & UI/UX Designer
            </h2>

            <p className="text-lg text-neutral-600 leading-relaxed max-w-xl">
              Crafting beautiful, user-centered digital experiences with expertise in modern web technologies. 
              Currently pursuing AI & Machine Learning at Nexcore Institute of Technology.
            </p>

            <div className="flex flex-wrap gap-6 pt-6">
              <a href="#projects" className="btn-hover-glow px-8 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-all duration-300 hover:shadow-xl hover:shadow-primary-600/25 hover:scale-105 transform">
                View My Work
              </a>
              <a href="#contact" className="btn-hover-glow px-8 py-3 border-2 border-primary-600 text-primary-600 rounded-lg font-medium hover:bg-primary-600 hover:text-white transition-all duration-300 hover:shadow-xl hover:shadow-primary-600/25 hover:scale-105 transform">
                Contact Me
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 pt-6">
              <a href="https://www.linkedin.com/in/zaid-khan-943376379" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center bg-white border-2 border-neutral-200 rounded-lg hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 hover:scale-110 hover:shadow-lg shadow-sm">
                <span className="iconify text-2xl" data-icon="mdi:linkedin"></span>
              </a>
              <a href="https://github.com/zkhan023761-create" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center bg-white border-2 border-neutral-200 rounded-lg hover:border-neutral-800 hover:text-neutral-800 hover:bg-neutral-50 transition-all duration-300 hover:scale-110 hover:shadow-lg shadow-sm">
                <span className="iconify text-2xl" data-icon="mdi:github"></span>
              </a>
              <a href="https://www.instagram.com/khan.zaxid/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center bg-white border-2 border-neutral-200 rounded-lg hover:border-pink-600 hover:text-pink-600 hover:bg-pink-50 transition-all duration-300 hover:scale-110 hover:shadow-lg shadow-sm">
                <i className="fab fa-instagram text-2xl"></i>
              </a>
              <a href="mailto:zaidkhan023761@gmail.com" className="w-12 h-12 flex items-center justify-center bg-white border-2 border-neutral-200 rounded-lg hover:border-red-600 hover:text-red-600 hover:bg-red-50 transition-all duration-300 hover:scale-110 hover:shadow-lg shadow-sm">
                <span className="iconify text-2xl" data-icon="mdi:email"></span>
              </a>
              <a href="https://wa.me/919082775122" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center bg-white border-2 border-neutral-200 rounded-lg hover:border-green-600 hover:text-green-600 hover:bg-green-50 transition-all duration-300 hover:scale-110 hover:shadow-lg shadow-sm">
                <span className="iconify text-2xl" data-icon="mdi:whatsapp"></span>
              </a>
            </div>
          </div>

          {/* Right Content - Photo & Info */}
          <div className=" lg:block  sm:mx-auto sm:w-full sm:grid sm:place-items-center" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
            <div className="grid place-items-center sm: w-fit sm:mx-auto  sm:grid sm:place-items-center">
              {/* Profile Photo Card */}
              <div className="bg-white rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 hover-lift">
                {/* Photo Container */}
                <div className="relative mb-6">
                  <div className="aspect-square rounded-2xl overflow-hidden bg-linear-to-br from-primary-500 to-accent-500 p-1">
                    <div className="w-full h-full bg-neutral-200 rounded-2xl flex items-center justify-center">
                      {/* Placeholder for photo - replace with actual image */}
                      <div className="text-center">
                        <span className="iconify text-8xl text-neutral-400" data-icon="mdi:account-circle"></span>
                        <p className="text-sm text-neutral-500 mt-2">Your Photo Here</p>
                      </div>
                      {/* Uncomment and use this when you have a photo:
                      <img src="your-photo.jpg" alt="Zaid Khan" className="w-full h-full object-cover rounded-2xl" />
                      */}
                    </div>
                  </div>
                  {/* Decorative Badge */}
                  <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-xl">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-semibold">Available</span>
                    </div>
                  </div>
                </div>

                <div className="bg-linear-to-br from-primary-500 to-accent-500 rounded-2xl p-6 text-white">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm shrink-0">
                        <span className="iconify text-2xl" data-icon="mdi:code-braces"></span>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold">Frontend Developer</h3>
                        <p className="text-xs text-primary-100">Modern Web Applications</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm shrink-0">
                        <i className="fab fa-figma text-2xl"></i>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold">UI/UX Designer</h3>
                        <p className="text-xs text-primary-100">User-Centered Design</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mt-6">
                  <div className="text-center p-4 bg-primary-50 rounded-xl">
                    <div className="text-2xl font-bold text-primary-600">15+</div>
                    <div className="text-sm text-neutral-600">Projects</div>
                  </div>
                  <div className="text-center p-4 bg-primary-50 rounded-xl">
                    <div className="text-2xl font-bold text-primary-600">12+</div>
                    <div className="text-sm text-neutral-600">Skills</div>
                  </div>
                  <div className="text-center p-4 bg-primary-50 rounded-xl">
                    <div className="text-2xl font-bold text-primary-600">100%</div>
                    <div className="text-sm text-neutral-600">Passion</div>
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
