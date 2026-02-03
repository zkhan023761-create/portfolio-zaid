const contactInfo = [
  {
    icon: 'mdi:email',
    title: 'Email',
    value: 'zaidkhan023761@gmail.com',
    link: 'mailto:zaidkhan023761@gmail.com',
    bgColor: 'bg-primary-100',
    textColor: 'text-primary-600',
    hoverColor: 'hover:text-primary-600'
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
      {/* Animated Background Elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-accent-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{animationDelay: '1.5s'}}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16" data-aos="fade-up" data-aos-duration="1000">
          <span className="text-primary-600 font-mono font-semibold text-sm tracking-wider uppercase animate-pulse">Get In Touch</span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-2 mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
          {contactInfo.map((contact, index) => (
            <div 
              key={contact.title}
              className="bg-white p-6 rounded-2xl shadow-lg hover-lift border-2 border-neutral-200 hover:border-primary-300 transition-all duration-300 group"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={100 + index * 50}
            >
              <div className={`w-14 h-14 ${contact.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                {contact.isFontAwesome ? (
                  <i className={`${contact.icon} text-2xl ${contact.textColor}`}></i>
                ) : (
                  <span className={`iconify text-2xl ${contact.textColor}`} data-icon={contact.icon}></span>
                )}
              </div>
              <h3 className="font-semibold text-lg mb-2 group-hover:text-primary-600 transition-colors">{contact.title}</h3>
              <a 
                href={contact.link}
                target={contact.link.startsWith('http') ? '_blank' : undefined}
                rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`text-neutral-600 ${contact.hoverColor} transition-colors break-all text-sm`}
              >
                {contact.value}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
