export default function Education() {
  return (
    <section id="education" className="py-24 px-6 lg:px-8 bg-gradient-to-br from-primary-50 via-white to-accent-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16" data-aos="fade-up" data-aos-duration="1000">
          <span className="text-primary-600 font-mono font-semibold text-sm tracking-wider uppercase">Academic Journey</span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-2 mb-4 text-neutral-900">
            My <span className="gradient-text">Education</span>
          </h2>
          <p className="text-neutral-800 text-lg max-w-2xl mx-auto font-medium">
            Building a strong foundation in technology and innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Current Education - B.Voc AI & ML */}
          <div 
            className="group relative"
            data-aos="fade-right" 
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            <div className="relative bg-white rounded-3xl p-8 shadow-xl hover-lift border-2 border-transparent hover:border-primary-200 transition-all duration-500">
              {/* Status Badge */}
              <div className="absolute -top-4 -right-4">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg animate-pulse">
                  Currently Pursuing
                </div>
              </div>

              {/* Icon */}
              <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                <span className="iconify text-4xl text-white" data-icon="mdi:brain"></span>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-neutral-800 mb-2 group-hover:text-primary-600 transition-colors">
                    B.Voc in AI & Machine Learning
                  </h3>
                  <p className="text-primary-600 font-semibold text-lg">
                    Nexcore Institute of Technology
                  </p>
                </div>

                <div className="flex items-center gap-2 text-neutral-600">
                  <span className="iconify text-xl" data-icon="mdi:calendar"></span>
                  <span className="font-medium">2026 - Present</span>
                </div>

                {/* Key Highlights */}
                <div className="pt-4 space-y-3">
                  <div className="flex items-start gap-3 group/item">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 group-hover/item:scale-150 transition-transform"></div>
                    <p className="text-neutral-700 text-sm leading-relaxed">
                      Specializing in Artificial Intelligence and Machine Learning technologies
                    </p>
                  </div>
                  <div className="flex items-start gap-3 group/item">
                    <div className="w-2 h-2 bg-accent-500 rounded-full mt-2 group-hover/item:scale-150 transition-transform"></div>
                    <p className="text-neutral-700 text-sm leading-relaxed">
                      Hands-on experience with modern AI frameworks and tools
                    </p>
                  </div>
                  <div className="flex items-start gap-3 group/item">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 group-hover/item:scale-150 transition-transform"></div>
                    <p className="text-neutral-700 text-sm leading-relaxed">
                      Building practical projects in machine learning and data science
                    </p>
                  </div>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2 pt-4">
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-semibold hover:bg-primary-200 transition-colors">
                    AI/ML
                  </span>
                  <span className="px-3 py-1 bg-accent-100 text-accent-700 rounded-full text-xs font-semibold hover:bg-accent-200 transition-colors">
                    Machine Learning
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold hover:bg-blue-200 transition-colors">
                    Artificial Intelligence
                  </span>
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-primary-100 to-transparent rounded-tl-full opacity-50"></div>
            </div>
          </div>

          {/* 12th Pass Out */}
          <div 
            className="group relative"
            data-aos="fade-left" 
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            <div className="relative bg-white rounded-3xl p-8 shadow-xl hover-lift border-2 border-transparent hover:border-blue-200 transition-all duration-500">
              {/* Status Badge */}
              <div className="absolute -top-4 -right-4">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg">
                  Completed
                </div>
              </div>

              {/* Icon */}
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                <span className="iconify text-4xl text-white" data-icon="mdi:school"></span>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-neutral-800 mb-2 group-hover:text-blue-600 transition-colors">
                    Higher Secondary Education (12th)
                  </h3>
                  <p className="text-blue-600 font-semibold text-lg">
                   Anjuman Islam Junior College of Science & Commerce
                  </p>
                </div>

                <div className="flex items-center gap-2 text-neutral-600">
                  <span className="iconify text-xl" data-icon="mdi:calendar-check"></span>
                  <span className="font-medium">Pass Out in 2024-25</span>
                </div>

                {/* Key Highlights */}
                <div className="pt-4 space-y-3">
                  <div className="flex items-start gap-3 group/item">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 group-hover/item:scale-150 transition-transform"></div>
                    <p className="text-neutral-700 text-sm leading-relaxed">
                      Strong foundation in science 
                    </p>
                  </div>
                  <div className="flex items-start gap-3 group/item">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 group-hover/item:scale-150 transition-transform"></div>
                    <p className="text-neutral-700 text-sm leading-relaxed">
                      Developed analytical and problem-solving skills
                    </p>
                  </div>
                  <div className="flex items-start gap-3 group/item">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 group-hover/item:scale-150 transition-transform"></div>
                    <p className="text-neutral-700 text-sm leading-relaxed">
                      Built a strong academic foundation for higher studies
                    </p>
                  </div>
                </div>

                {/* Achievement Badge */}
                <div className="pt-4">
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl p-4 group-hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-3">
                      <span className="iconify text-3xl text-blue-600" data-icon="mdi:trophy"></span>
                      <div>
                        <p className="text-sm font-semibold text-neutral-800">Academic Excellence</p>
                        <p className="text-xs text-neutral-600">Foundation for Career</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-blue-100 to-transparent rounded-tl-full opacity-50"></div>
            </div>
          </div>
        </div>

        {/* Timeline Connector - Hidden on mobile */}
        <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0">
          <div className="w-24 h-1 bg-gradient-to-r from-primary-300 via-accent-300 to-blue-300 rounded-full animate-pulse"></div>
        </div>

        {/* Bottom Stats */}
        <div 
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          <a 
            href="#skills"
            className="text-center p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group border-2 border-transparent hover:border-primary-500 cursor-pointer"
          >
            <div className="text-5xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent mb-2 group-hover:scale-125 transition-transform">
              12+
            </div>
            <div className="text-sm text-neutral-900 font-bold">Technologies</div>
            <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-xs text-primary-600 font-semibold">View Skills →</span>
            </div>
          </a>
          <a 
            href="#about"
            className="text-center p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group border-2 border-transparent hover:border-accent-500 cursor-pointer"
          >
            <div className="text-5xl font-bold bg-gradient-to-r from-accent-600 to-pink-600 bg-clip-text text-transparent mb-2 group-hover:scale-125 transition-transform">
              100%
            </div>
            <div className="text-sm text-neutral-900 font-bold">Dedication</div>
            <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-xs text-accent-600 font-semibold">About Me →</span>
            </div>
          </a>
          <a 
            href="#projects"
            className="text-center p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group border-2 border-transparent hover:border-blue-500 cursor-pointer"
          >
            <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2 group-hover:scale-125 transition-transform">
              15+
            </div>
            <div className="text-sm text-neutral-900 font-bold">Projects Built</div>
            <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-xs text-blue-600 font-semibold">View Projects →</span>
            </div>
          </a>
          <a 
            href="#contact"
            className="text-center p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group border-2 border-transparent hover:border-green-500 cursor-pointer"
          >
            <div className="text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2 group-hover:scale-125 transition-transform">
              ∞
            </div>
            <div className="text-sm text-neutral-900 font-bold">Learning</div>
            <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-xs text-green-600 font-semibold">Get in Touch →</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
