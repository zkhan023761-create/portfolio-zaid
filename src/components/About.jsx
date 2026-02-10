export default function About() {
  return (
    <section id="about" className="py-16 px-6 lg:px-8 relative overflow-hidden bg-white">
      {/* Animated Background */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-accent-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Info Cards */}
          <div className="order-2 lg:order-1 space-y-8" data-aos="fade-right" data-aos-duration="1000">
            {/* Education Cards Container */}
            <div className="relative group/container h-[400px]">
              {/* Animated Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 via-accent-500 to-pink-500 rounded-3xl blur opacity-20 group-hover/container:opacity-40 transition duration-500 animate-pulse"></div>
              
              <div className="relative bg-gradient-to-br from-primary-500 to-accent-500 rounded-3xl p-1 hover:shadow-2xl transition-all duration-500 h-full">
                <div className="bg-white rounded-3xl overflow-hidden h-full flex flex-col">
                  {/* Education Card */}
                  <div className="flex items-center gap-5 p-6 bg-gradient-to-r from-primary-50 to-primary-100 hover:from-primary-100 hover:to-primary-200 transition-all duration-500 group/item cursor-pointer relative overflow-hidden flex-1">
                    {/* Animated Background Wave */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/item:translate-x-full transition-transform duration-1000"></div>
                    
                    {/* Floating Particles */}
                    <div className="absolute top-2 right-2 w-2 h-2 bg-primary-400 rounded-full opacity-0 group-hover/item:opacity-100 animate-ping"></div>
                    <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-primary-500 rounded-full opacity-0 group-hover/item:opacity-100 animate-ping" style={{animationDelay: '0.2s'}}></div>
                    
                    <div className="relative w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover/item:scale-125 group-hover/item:rotate-[360deg] transition-all duration-700 shadow-lg group-hover/item:shadow-2xl group-hover/item:shadow-primary-500/50">
                      <span className="iconify text-3xl text-white group-hover/item:animate-bounce" data-icon="mdi:school"></span>
                    </div>
                    <div className="relative z-10 flex-1">
                      <h4 className="font-bold text-lg text-neutral-900 group-hover/item:text-primary-600 transition-colors mb-1">Education</h4>
                      <p className="text-neutral-900 font-semibold text-base mb-0.5">Nexcore Institute</p>
                      <p className="text-sm text-neutral-800 font-medium">AI & Machine Learning</p>
                    </div>
                    
                    {/* Arrow Indicator */}
                    <div className="opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                      <span className="iconify text-2xl text-primary-600 animate-bounce" data-icon="mdi:arrow-right"></span>
                    </div>
                  </div>

                  {/* Specialization Card */}
                  <div className="flex items-center gap-5 p-6 bg-gradient-to-r from-accent-50 to-accent-100 hover:from-accent-100 hover:to-accent-200 transition-all duration-500 group/item cursor-pointer relative overflow-hidden flex-1">
                    {/* Animated Background Wave */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/item:translate-x-full transition-transform duration-1000"></div>
                    
                    {/* Floating Particles */}
                    <div className="absolute top-2 left-2 w-2 h-2 bg-accent-400 rounded-full opacity-0 group-hover/item:opacity-100 animate-ping"></div>
                    <div className="absolute bottom-2 right-2 w-1.5 h-1.5 bg-pink-500 rounded-full opacity-0 group-hover/item:opacity-100 animate-ping" style={{animationDelay: '0.2s'}}></div>
                    
                    <div className="relative w-16 h-16 bg-gradient-to-br from-accent-400 to-pink-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover/item:scale-125 group-hover/item:rotate-[360deg] transition-all duration-700 shadow-lg group-hover/item:shadow-2xl group-hover/item:shadow-accent-500/50">
                      <i className="fab fa-figma text-3xl text-white group-hover/item:animate-bounce"></i>
                    </div>
                    <div className="relative z-10 flex-1">
                      <h4 className="font-bold text-lg text-neutral-900 group-hover/item:text-accent-600 transition-colors mb-1">Specialization</h4>
                      <p className="text-neutral-900 font-semibold text-base mb-0.5">Frontend Development</p>
                      <p className="text-sm text-neutral-800 font-medium">UI Design with Figma</p>
                    </div>
                    
                    {/* Arrow Indicator */}
                    <div className="opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                      <span className="iconify text-2xl text-accent-600 animate-bounce" data-icon="mdi:arrow-right"></span>
                    </div>
                  </div>

                  {/* Mission Card */}
                  <div className="flex items-center gap-5 p-6 bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 transition-all duration-500 group/item cursor-pointer relative overflow-hidden flex-1">
                    {/* Animated Background Wave */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/item:translate-x-full transition-transform duration-1000"></div>
                    
                    {/* Floating Particles */}
                    <div className="absolute top-2 right-2 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover/item:opacity-100 animate-ping"></div>
                    <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-cyan-500 rounded-full opacity-0 group-hover/item:opacity-100 animate-ping" style={{animationDelay: '0.2s'}}></div>
                    
                    <div className="relative w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover/item:scale-125 group-hover/item:rotate-[360deg] transition-all duration-700 shadow-lg group-hover/item:shadow-2xl group-hover/item:shadow-blue-500/50">
                      <span className="iconify text-3xl text-white group-hover/item:animate-bounce" data-icon="mdi:target"></span>
                    </div>
                    <div className="relative z-10 flex-1">
                      <h4 className="font-bold text-lg text-neutral-900 group-hover/item:text-blue-600 transition-colors mb-1">Mission</h4>
                      <p className="text-neutral-900 font-semibold text-base mb-0.5">Creating Impact</p>
                      <p className="text-sm text-neutral-800 font-medium">Through Technology</p>
                    </div>
                    
                    {/* Arrow Indicator */}
                    <div className="opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                      <span className="iconify text-2xl text-blue-600 animate-bounce" data-icon="mdi:arrow-right"></span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Corner Orbs */}
              <div className="absolute -top-3 -left-3 w-6 h-6 bg-primary-400 rounded-full opacity-0 group-hover/container:opacity-70 blur-sm animate-bounce"></div>
              <div className="absolute -bottom-3 -right-3 w-5 h-5 bg-accent-400 rounded-full opacity-0 group-hover/container:opacity-70 blur-sm animate-bounce" style={{animationDelay: '0.3s'}}></div>
            </div>

            {/* Core Competencies Box */}
            <div className="relative h-[400px]" data-aos="fade-up" data-aos-delay="200">
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl p-1 hover:shadow-2xl transition-all duration-500 group h-full">
                <div className="bg-white rounded-3xl p-6 h-full flex flex-col">
                  <h3 className="font-bold text-lg mb-5 text-neutral-900 flex items-center gap-2 group-hover:scale-105 transition-transform flex-shrink-0">
                    <span className="w-1.5 h-6 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full group-hover:h-8 transition-all duration-300"></span>
                    Core Competencies
                  </h3>
                  <div className="grid grid-cols-2 gap-4 flex-1">
                    <div className="flex flex-col justify-center p-4 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl hover:from-primary-100 hover:to-primary-200 transition-all duration-300 cursor-pointer group/comp border-2 border-transparent hover:border-primary-300 hover:scale-105 hover:-translate-y-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="iconify text-blue-500 text-xl group-hover/comp:scale-125 group-hover/comp:rotate-12 transition-all duration-300" data-icon="mdi:react"></span>
                        <p className="font-bold text-sm text-neutral-900">React & Next.js</p>
                      </div>
                      <p className="text-xs text-neutral-700">Frontend Frameworks</p>
                    </div>
                    
                    <div className="flex flex-col justify-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-xl hover:from-green-100 hover:to-green-200 transition-all duration-300 cursor-pointer group/comp border-2 border-transparent hover:border-green-300 hover:scale-105 hover:-translate-y-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="iconify text-green-600 text-xl group-hover/comp:scale-125 group-hover/comp:rotate-12 transition-all duration-300" data-icon="mdi:nodejs"></span>
                        <p className="font-bold text-sm text-neutral-900">Node & Express</p>
                      </div>
                      <p className="text-xs text-neutral-700">Backend Development</p>
                    </div>
                    
                    <div className="flex flex-col justify-center p-4 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl hover:from-yellow-100 hover:to-yellow-200 transition-all duration-300 cursor-pointer group/comp border-2 border-transparent hover:border-yellow-300 hover:scale-105 hover:-translate-y-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="iconify text-yellow-600 text-xl group-hover/comp:scale-125 group-hover/comp:rotate-12 transition-all duration-300" data-icon="mdi:language-javascript"></span>
                        <p className="font-bold text-sm text-neutral-900">JavaScript</p>
                      </div>
                      <p className="text-xs text-neutral-700">Programming Language</p>
                    </div>
                    
                    <div className="flex flex-col justify-center p-4 bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-xl hover:from-cyan-100 hover:to-cyan-200 transition-all duration-300 cursor-pointer group/comp border-2 border-transparent hover:border-cyan-300 hover:scale-105 hover:-translate-y-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="iconify text-cyan-600 text-xl group-hover/comp:scale-125 group-hover/comp:rotate-12 transition-all duration-300" data-icon="mdi:tailwind"></span>
                        <p className="font-bold text-sm text-neutral-900">Tailwind CSS</p>
                      </div>
                      <p className="text-xs text-neutral-700">Styling Framework</p>
                    </div>
                    
                    <div className="flex flex-col justify-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl hover:from-purple-100 hover:to-purple-200 transition-all duration-300 cursor-pointer group/comp border-2 border-transparent hover:border-purple-300 hover:scale-105 hover:-translate-y-1">
                      <div className="flex items-center gap-2 mb-2">
                        <i className="fab fa-figma text-purple-600 text-xl group-hover/comp:scale-125 group-hover/comp:rotate-12 transition-all duration-300"></i>
                        <p className="font-bold text-sm text-neutral-900">Figma</p>
                      </div>
                      <p className="text-xs text-neutral-700">UI/UX Design</p>
                    </div>
                    
                    <div className="flex flex-col justify-center p-4 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl hover:from-indigo-100 hover:to-indigo-200 transition-all duration-300 cursor-pointer group/comp border-2 border-transparent hover:border-indigo-300 hover:scale-105 hover:-translate-y-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="iconify text-indigo-600 text-xl group-hover/comp:scale-125 group-hover/comp:rotate-12 transition-all duration-300" data-icon="mdi:language-c"></span>
                        <p className="font-bold text-sm text-neutral-900">C Programming</p>
                      </div>
                      <p className="text-xs text-neutral-700">Core Programming</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="order-1 lg:order-2 space-y-6" data-aos="fade-left" data-aos-duration="1000">
            <div data-aos="fade-up" data-aos-delay="200">
              <span className="text-primary-600 font-mono font-semibold text-xs tracking-wider uppercase bg-primary-100 px-4 py-2 rounded-full inline-block">About Me</span>
              <h2 className="text-3xl lg:text-4xl font-bold mt-3 mb-4 text-neutral-900">
                Passionate About <span className="gradient-text">Creating</span>
              </h2>
            </div>

            <p className="text-base text-neutral-900 leading-relaxed font-medium" data-aos="fade-up" data-aos-delay="300">
              I'm a driven full-stack developer and UI/UX designer currently pursuing Artificial Intelligence & Machine Learning at Nexcore Institute of Technology. My journey in tech is fueled by a deep passion for creating digital experiences that are both beautiful and functional.
            </p>

            <p className="text-base text-neutral-900 leading-relaxed font-medium" data-aos="fade-up" data-aos-delay="400">
              With expertise spanning from front-end development using React.js and Next.js to back-end technologies like Node.js and Express.js, I bridge the gap between code and creativity.
            </p>

            <div className="pt-2" data-aos="fade-up" data-aos-delay="500">
              <h3 className="font-bold text-lg mb-3 text-neutral-900 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-gradient-to-b from-primary-500 to-accent-500 rounded-full"></span>
                What I Bring
              </h3>
              <ul className="info-list text-neutral-900 font-medium text-sm space-y-2">
                <li className="hover:translate-x-2 transition-transform duration-300">Clean, maintainable code architecture</li>
                <li className="hover:translate-x-2 transition-transform duration-300">User-centered design thinking</li>
                <li className="hover:translate-x-2 transition-transform duration-300">Responsive, mobile-first development</li>
                <li className="hover:translate-x-2 transition-transform duration-300">Modern JavaScript frameworks expertise</li>
                <li className="hover:translate-x-2 transition-transform duration-300">RESTful API development</li>
                <li className="hover:translate-x-2 transition-transform duration-300">Version control with Git</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
