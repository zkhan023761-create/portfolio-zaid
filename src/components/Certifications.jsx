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
    <section id="certifications" className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up" data-aos-duration="1000">
          <span className="text-primary-600 font-mono font-semibold text-sm tracking-wider uppercase">Achievements</span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-2 mb-4">
            <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
            Validated skills and professional achievements
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <div 
              key={cert.title}
              className="bg-white p-8 rounded-2xl shadow-lg hover-lift border-2 border-neutral-200"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={100 + index * 100}
            >
              <div className="flex items-start gap-4">
                <div className={`w-16 h-16 ${cert.bgColor} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <span className={`iconify text-3xl ${cert.textColor}`} data-icon="mdi:certificate"></span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                  <p className="text-neutral-600 mb-2">{cert.issuer}</p>
                  <p className="text-sm text-neutral-500 mb-4">{cert.date}</p>
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold transition-colors"
                  >
                    View Certificate
                    <span className="iconify text-lg" data-icon="mdi:arrow-right"></span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
