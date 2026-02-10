const contactInfo = [
  {
    icon: 'mdi:email',
    title: 'Email',
    value: 'zaidkhan023761@gmail.com',
    link: 'mailto:zaidkhan023761@gmail.com',
    bgColor: 'bg-orange-100',
    textColor: 'text-orange-600',
    hoverColor: 'hover:text-orange-600'
  },
  {
    icon: 'mdi:phone',
    title: 'Phone',
    value: '+91 9082775122',
    link: 'tel:+919082775122',
    bgColor: 'bg-blue-100',
    textColor: 'text-blue-600',
    hoverColor: 'hover:text-primary-600'
  },
  {
    icon: 'mdi:linkedin',
    title: 'LinkedIn',
    value: 'Connect on LinkedIn',
    link: 'https://www.linkedin.com/in/zaid-khan-943376379',
    bgColor: 'bg-blue-100',
    textColor: 'text-blue-700',
    hoverColor: 'hover:text-blue-700'
  },
  {
    icon: 'mdi:whatsapp',
    title: 'WhatsApp',
    value: 'Chat on WhatsApp',
    link: 'https://wa.me/919082775122',
    bgColor: 'bg-green-100',
    textColor: 'text-green-600',
    hoverColor: 'hover:text-green-600'
  },
  {
    icon: 'mdi:instagram',
    title: 'Instagram',
    value: 'Follow on Instagram',
    link: 'https://www.instagram.com/khan.zaxid/',
    bgColor: 'bg-pink-100',
    textColor: 'text-pink-600',
    hoverColor: 'hover:text-pink-600'
  }
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 lg:px-8 bg-pattern relative overflow-hidden">
      {/* Animated Background Elements with More Particles */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-accent-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{animationDelay: '1.5s'}}></div>
      <div className="absolute top-1/2 left-1/2 w-56 h-56 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-float" style={{animationDelay: '3s'}}></div>
      
      {/* Animated Particles */}
      <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-primary-400 rounded-full animate-ping opacity-30"></div>
      <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-accent-400 rounded-full animate-ping opacity-30" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-2/3 right-1/2 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-30" style={{animationDelay: '2s'}}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-slideDown" data-aos="fade-up" data-aos-duration="1000">
          <span className="text-primary-600 font-mono font-semibold text-sm tracking-wider uppercase animate-pulse inline-block hover:scale-110 transition-transform ">Get In Touch</span><br></br><br></br>
          <h2 className="text-4xl lg:text-5xl font-bold mt-2 mb-4 text-neutral-900 animate-fadeInUp relative inline-block">
            Let's <span className="gradient-text animate-glow relative">
              Connect
              <span className="absolute -inset-2 bg-gradient-to-r from-primary-500/10 to-accent-500/10 blur-2xl animate-pulse"></span>
            </span>
          </h2>
          <p className="text-neutral-800 text-lg max-w-2xl mx-auto font-medium animate-fadeInUp stagger-1">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
          {contactInfo.map((contact, index) => (
            <div 
              key={contact.title}
              className="bg-white p-6 rounded-2xl shadow-lg hover-lift border-2 border-neutral-200 hover:border-primary-300 transition-all duration-500 group relative overflow-hidden animate-zoomIn"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={100 + index * 50}
            >
              {/* Animated Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500"></div>
              
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 right-0 w-16 h-16 bg-primary-100 rounded-full blur-2xl animate-float"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-accent-100 rounded-full blur-2xl animate-float" style={{animationDelay: '1s'}}></div>
              </div>
              
              <div className={`w-14 h-14 ${contact.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-125 group-hover:rotate-[360deg] transition-all duration-500 relative z-10 shadow-lg group-hover:shadow-2xl`}>
                {contact.isFontAwesome ? (
                  <i className={`${contact.icon} text-2xl ${contact.textColor} group-hover:animate-bounce`}></i>
                ) : (
                  <span className={`iconify text-2xl ${contact.textColor} group-hover:animate-bounce`} data-icon={contact.icon}></span>
                )}
              </div>
              <h3 className="font-bold text-lg mb-2 text-neutral-900 group-hover:text-primary-600 transition-colors duration-300 relative z-10 group-hover:translate-x-1">{contact.title}</h3>
              <a 
                href={contact.link}
                target={contact.link.startsWith('http') ? '_blank' : undefined}
                rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`text-neutral-800 ${contact.hoverColor} transition-all duration-300 break-all text-sm font-semibold relative z-10 hover:underline hover:translate-x-1 inline-block`}
              >
                {contact.value}
              </a>
              
              {/* Hover Indicator */}
              <div className="mt-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 relative z-10">
                <span className="text-xs text-primary-600 font-semibold flex items-center gap-1">
                  <span className="iconify animate-bounce" data-icon="mdi:arrow-right"></span>
                  Click to connect
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
