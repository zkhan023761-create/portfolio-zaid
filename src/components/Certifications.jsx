const certifications = [
  {
    title: 'AI For All - AI Appreciate',
    issuer: 'Intel & Digital India',
    date: 'January 2026',
    link: 'https://www.linkedin.com/in/zaid-khan-943376379',
    bgColor: 'bg-primary-100',
    textColor: 'text-primary-600'
  },
  {
    title: 'Yuva AI For All - English',
    issuer: 'AISECT Learn',
    date: 'January 2026',
    link: 'https://www.linkedin.com/in/zaid-khan-943376379',
    bgColor: 'bg-accent-100',
    textColor: 'text-accent-600'
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-16 px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-float"></div>
      <div className="absolute bottom-10 left-10 w-56 h-56 bg-accent-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-float" style={{animationDelay: '2s'}}></div>
      
      {/* Animated Particles */}
      <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-primary-400 rounded-full animate-ping opacity-30"></div>
      <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-accent-400 rounded-full animate-ping opacity-30" style={{animationDelay: '1s'}}></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 animate-slideDown" data-aos="fade-up" data-aos-duration="1000">
          <span className="text-primary-600 font-mono font-semibold text-xs tracking-wider uppercase bg-primary-100 px-4 py-2 rounded-full inline-block hover:scale-110 transition-all duration-300 animate-pulse">Achievements</span><br></br><br></br>
          <h2 className="text-3xl lg:text-4xl font-bold mt-3 mb-3 text-neutral-900 animate-fadeInUp relative inline-block">
            <span className="gradient-text animate-glow relative">
              Certifications
              <span className="absolute -inset-2 bg-gradient-to-r from-primary-500/10 to-accent-500/10 blur-2xl animate-pulse"></span>
            </span>
          </h2>
          <p className="text-neutral-800 text-base max-w-2xl mx-auto font-medium animate-fadeInUp stagger-1">
            Validated skills and professional achievements
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <div 
              key={cert.title}
              className="bg-white p-6 rounded-2xl shadow-lg hover-lift border-2 border-neutral-200 hover:border-primary-300 transition-all duration-500 group relative overflow-hidden animate-zoomIn"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={100 + index * 100}
            >
              {/* Animated Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500"></div>
              
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary-100 rounded-full blur-2xl animate-float"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-accent-100 rounded-full blur-2xl animate-float" style={{animationDelay: '1s'}}></div>
              </div>
              
              <div className="flex items-start gap-4 relative z-10">
                <div className={`w-14 h-14 ${cert.bgColor} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-125 group-hover:rotate-[360deg] transition-all duration-500 shadow-lg group-hover:shadow-2xl`}>
                  <span className={`iconify text-2xl ${cert.textColor} group-hover:animate-bounce`} data-icon="mdi:certificate"></span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-1 text-neutral-900 group-hover:text-primary-600 transition-colors duration-300 group-hover:translate-x-1">{cert.title}</h3>
                  <p className="text-neutral-800 mb-1 font-semibold text-sm group-hover:text-neutral-900 transition-colors">{cert.issuer}</p>
                  <p className="text-xs text-neutral-700 mb-3 font-medium">{cert.date}</p>
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold transition-all duration-300 text-sm group/link hover:translate-x-1"
                  >
                    View Certificate
                    <span className="iconify text-base group-hover/link:translate-x-1 transition-transform" data-icon="mdi:arrow-right"></span>
                  </a>
                </div>
              </div>
              
              {/* Hover Indicator */}
              <div className="mt-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 relative z-10">
                <div className="h-1 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
