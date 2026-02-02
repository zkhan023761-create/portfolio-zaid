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
    icon: 'mdi:whatsapp',
    title: 'WhatsApp',
    value: 'Chat on WhatsApp',
    link: 'https://wa.me/919082775122',
    bgColor: 'bg-green-100',
    textColor: 'text-green-600',
    hoverColor: 'hover:text-green-600'
  },
  {
    icon: 'fab fa-figma',
    title: 'Figma',
    value: 'View Design Work',
    link: 'https://www.figma.com/@zaidkhan',
    bgColor: 'bg-purple-100',
    textColor: 'text-purple-600',
    hoverColor: 'hover:text-purple-600',
    isFontAwesome: true
  }
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 lg:px-8 bg-pattern">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up" data-aos-duration="1000">
          <span className="text-primary-600 font-mono font-semibold text-sm tracking-wider uppercase">Get In Touch</span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-2 mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {contactInfo.map((contact, index) => (
            <div 
              key={contact.title}
              className="bg-white p-6 rounded-2xl shadow-lg hover-lift border-2 border-neutral-200"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={100 + index * 50}
            >
              <div className={`w-14 h-14 ${contact.bgColor} rounded-xl flex items-center justify-center mb-4`}>
                {contact.isFontAwesome ? (
                  <i className={`${contact.icon} text-2xl ${contact.textColor}`}></i>
                ) : (
                  <span className={`iconify text-2xl ${contact.textColor}`} data-icon={contact.icon}></span>
                )}
              </div>
              <h3 className="font-semibold text-lg mb-2">{contact.title}</h3>
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
