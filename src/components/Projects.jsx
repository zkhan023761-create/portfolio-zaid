'use client';
import { useState } from 'react';

const projects = [
  {
    name: 'RedBus Clone',
    category: 'design',
    icon: 'mdi:bus',
    gradient: 'from-red-500 to-red-700',
    image: 'https://images.unsplash.com/photo-1527786356703-4b100091cd2c?w=500&h=300&fit=crop',
    description: 'A comprehensive bus booking platform redesign with enhanced search functionality, seat selection, and booking management system.',
    features: ['User-friendly booking flow design', 'Interactive seat selection interface', 'Mobile-optimized responsive layout'],
    tags: ['Figma', 'UI Design', 'UX Research'],
    badge: 'UI/UX',
    badgeBg: 'bg-purple-100',
    badgeText: 'text-purple-700',
    link: 'https://www.figma.com/design/rfiuPmW8GxbPksQYOuBe3q/CARHARTT?node-id=0-1&t=MGbptlkmYnr1nyDt-1',
    hasGallery: true,
    galleryImages: [
      '/rebbus.png'
    ]
  },
  {
    name: 'BookMyShow Clone',
    category: 'coding',
    icon: 'mdi:movie-open',
    gradient: 'from-red-500 to-pink-600',
    image: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=500&h=300&fit=crop',
    description: 'A functional clone of the popular ticket booking platform with responsive design and interactive features.',
    features: ['Movie listings with filters and search', 'Theatre seat selection system', 'Booking confirmation workflow'],
    tags: ['HTML', 'CSS', 'JavaScript'],
    badge: 'CODING',
    badgeBg: 'bg-primary-100',
    badgeText: 'text-primary-700',
    link: 'https://github.com/zkhan023761-create/BookMyShow-Clone',
    hasGallery: true,
    galleryImages: [
      '/book-my-show.png'
    ]
  },
  {
    name: 'Printify Clone',
    category: 'coding',
    icon: 'mdi:shopping-outline',
    gradient: 'from-green-500 to-emerald-600',
    image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=500&h=300&fit=crop',
    description: 'A responsive e-commerce platform clone with product listings and user-friendly navigation.',
    features: ['Product catalog with categories', 'Shopping cart functionality', 'Responsive grid layouts'],
    tags: ['HTML', 'CSS', 'JavaScript'],
    badge: 'CODING',
    badgeBg: 'bg-primary-100',
    badgeText: 'text-primary-700',
    link: 'https://github.com/zkhan023761-create/Printify-Clone',
    hasGallery: true,
    galleryImages: [
      '/printify.png'
    ]
  },
  {
    name: 'Wonderlust Travels',
    category: 'coding',
    icon: 'mdi:airplane',
    gradient: 'from-blue-500 to-purple-600',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&h=300&fit=crop',
    description: 'A modern travel booking web application with creative design and smooth interactions.',
    features: ['Destination browsing with filters', 'Smooth scroll animations', 'Contact form integration'],
    tags: ['HTML', 'Tailwind', 'JavaScript'],
    badge: 'CODING',
    badgeBg: 'bg-primary-100',
    badgeText: 'text-primary-700',
    link: 'https://github.com/zkhan023761-create/Wonderlust-Travels-clone',
    hasGallery: true,
    galleryImages: [
      '/wonderlust-travels.png'
    ]
  },
  {
    name: 'Admin Dashboard',
    category: 'coding',
    icon: 'mdi:view-dashboard',
    gradient: 'from-green-500 to-teal-600',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
    description: 'A responsive admin dashboard with intuitive controls and data visualization.',
    features: ['Analytics and metrics display', 'User management interface', 'Responsive sidebar navigation'],
    tags: ['HTML', 'CSS', 'JavaScript'],
    badge: 'CODING',
    badgeBg: 'bg-primary-100',
    badgeText: 'text-primary-700',
    link: 'https://github.com/zkhan023761-create/admin-dashboard',
    hasGallery: true,
    galleryImages: [
      '/admin-dashboard.png'
    ]
  },
  {
    name: 'ChatBot Interface',
    category: 'coding',
    icon: 'mdi:chat',
    gradient: 'from-indigo-500 to-purple-600',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&h=300&fit=crop',
    description: 'A responsive chatbot interface with natural language processing and user-friendly design.',
    features: ['Real-time message exchange', 'Auto-response system', 'Typing indicator animation'],
    tags: ['HTML', 'CSS', 'JavaScript'],
    badge: 'CODING',
    badgeBg: 'bg-primary-100',
    badgeText: 'text-primary-700',
    link: 'https://github.com/zkhan023761-create/chatbot',
    hasGallery: true,
    galleryImages: [
      '/chatbot.png'
    ]
  },
  {
    name: 'Quiz Application',
    category: 'coding',
    icon: 'mdi:help-box',
    gradient: 'from-violet-500 to-pink-600',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=500&h=300&fit=crop',
    description: 'An interactive quiz application with multiple-choice questions and scoring system.',
    features: ['Dynamic question rendering', 'Score calculation and feedback', 'Timer functionality'],
    tags: ['HTML', 'CSS', 'JavaScript'],
    badge: 'CODING',
    badgeBg: 'bg-primary-100',
    badgeText: 'text-primary-700',
    link: 'https://github.com/zkhan023761-create/Quiz',
    hasGallery: true,
    galleryImages: [
      '/quiz.png'
    ]
  },
  {
    name: 'Tailkits Clone',
    category: 'coding',
    icon: 'mdi:palette',
    gradient: 'from-cyan-500 to-blue-600',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop',
    description: 'A responsive clone of the Tailkits website with modern UI components and animations.',
    features: ['Component library showcase', 'Smooth animations and transitions', 'Code snippet displays'],
    tags: ['HTML', 'Tailwind', 'JavaScript'],
    badge: 'CODING',
    badgeBg: 'bg-primary-100',
    badgeText: 'text-primary-700',
    link: 'https://github.com/zkhan023761-create/tailkits-clone',
    hasGallery: true,
    galleryImages: [
      '/tailkits.png'
    ]
  },
  {
    name: 'Subscription Plan',
    category: 'coding',
    icon: 'mdi:credit-card',
    gradient: 'from-orange-500 to-red-600',
    image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=500&h=300&fit=crop',
    description: 'A responsive subscription plan page with interactive pricing cards and toggle options.',
    features: ['Monthly/yearly toggle switch', 'Feature comparison table', 'Call-to-action buttons'],
    tags: ['HTML', 'CSS', 'JavaScript'],
    badge: 'CODING',
    badgeBg: 'bg-primary-100',
    badgeText: 'text-primary-700',
    link: 'https://github.com/zkhan023761-create/subscription-plan',
    hasGallery: true,
    galleryImages: [
      '/subscription.png'
    ]
  },
  {
    name: 'JioMart Clone Application',
    category: 'design',
    icon: 'mdi:shopping',
    gradient: 'from-yellow-400 to-orange-500',
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=500&h=300&fit=crop',
    description: 'Complete mobile app redesign for quick commerce platform with enhanced user experience.',
    features: ['User flow optimization', 'Mobile-first design approach', 'Interactive prototyping'],
    tags: ['Figma', 'UI Design', 'Prototyping'],
    badge: 'UI/UX',
    badgeBg: 'bg-purple-100',
    badgeText: 'text-purple-700',
    link: 'https://www.figma.com/design/rfiuPmW8GxbPksQYOuBe3q/CARHARTT?node-id=0-1&t=MGbptlkmYnr1nyDt-1',
    hasGallery: true,
    galleryImages: [
      '/jio-mart.png'
    ]
  },
  {
    name: 'Gozoop Website Clone',
    category: 'design',
    icon: 'mdi:briefcase',
    gradient: 'from-indigo-500 to-blue-600',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
    description: 'Professional corporate website design with modern aesthetics and clean interface.',
    features: ['Corporate branding consistency', 'Portfolio showcase design', 'Responsive layouts'],
    tags: ['Figma', 'Web Design', 'UX Research'],
    badge: 'UI/UX',
    badgeBg: 'bg-purple-100',
    badgeText: 'text-purple-700',
    link: 'https://www.figma.com/design/rfiuPmW8GxbPksQYOuBe3q/CARHARTT?node-id=0-1&t=MGbptlkmYnr1nyDt-1',
    hasGallery: true,
    galleryImages: [
      '/Gozzop.png'
    ]
  },
  {
    name: 'Snapdeal Website Clone',
    category: 'design',
    icon: 'mdi:cart',
    gradient: 'from-red-500 to-orange-600',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab0c3dde8?w=500&h=300&fit=crop',
    description: 'E-commerce platform redesign focusing on improved navigation and checkout flow.',
    features: ['Enhanced checkout process', 'Product discovery optimization', 'Trust-building elements'],
    tags: ['Figma', 'E-commerce', 'User Flow'],
    badge: 'UI/UX',
    badgeBg: 'bg-purple-100',
    badgeText: 'text-purple-700',
    link: 'https://www.figma.com/design/rfiuPmW8GxbPksQYOuBe3q/CARHARTT?node-id=0-1&t=MGbptlkmYnr1nyDt-1',
    hasGallery: true,
    galleryImages: [
      '/snapdeal.png'
    ]
  },
  {
    name: 'CoCo Cola Website Clone',
    category: 'design',
    icon: 'mdi:bottle-wine',
    gradient: 'from-neutral-700 to-neutral-900',
    image: 'https://images.unsplash.com/photo-1554227073-94e28f2ddb4f?w=500&h=300&fit=crop',
    description: 'Modern beverage brand website with engaging animations and responsive design.',
    features: ['Brand storytelling design', 'Micro-interactions', 'Visual hierarchy'],
    tags: ['Figma', 'Brand', 'Interactive'],
    badge: 'UI/UX',
    badgeBg: 'bg-purple-100',
    badgeText: 'text-purple-700',
    link: 'https://www.figma.com/design/rfiuPmW8GxbPksQYOuBe3q/CARHARTT?node-id=0-1&t=MGbptlkmYnr1nyDt-1',
    hasGallery: true,
    galleryImages: [
      '/coco-cola.png'
    ]
  },
  {
    name: 'Tours & Travels Redesign',
    category: 'design',
    icon: 'mdi:earth',
    gradient: 'from-emerald-500 to-green-600',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&h=300&fit=crop',
    description: 'Complete website overhaul for halal tourism platform with cultural sensitivity and modern design.',
    features: ['Cultural context consideration', 'Booking journey optimization', 'Accessibility compliance'],
    tags: ['Figma', 'Redesign', 'Travel'],
    badge: 'UI/UX',
    badgeBg: 'bg-purple-100',
    badgeText: 'text-purple-700',
    link: 'https://www.figma.com/design/rfiuPmW8GxbPksQYOuBe3q/CARHARTT?node-id=0-1&t=MGbptlkmYnr1nyDt-1',
    hasGallery: true,
    galleryImages: [
      '/travels.png'
    ]
  },
  {
    name: 'School & Campus Redesign',
    category: 'design',
    icon: 'mdi:school',
    gradient: 'from-blue-600 to-indigo-700',
    image: 'https://images.unsplash.com/photo-1427504494785-cdba58eafd00?w=500&h=300&fit=crop',
    description: 'Comprehensive redesign of educational institution\'s digital presence across web and mobile.',
    features: ['Multi-platform design system', 'Student portal interface', 'Information architecture'],
    tags: ['Figma', 'Education', 'Multi-platform'],
    badge: 'UI/UX',
    badgeBg: 'bg-purple-100',
    badgeText: 'text-purple-700',
    link: 'https://www.figma.com/design/rfiuPmW8GxbPksQYOuBe3q/CARHARTT?node-id=0-1&t=MGbptlkmYnr1nyDt-1',
    hasGallery: true,
    galleryImages: [
      '/school-admission.png',
      '/campus-gallery.png'
    ]
  }
];

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-24 px-6 lg:px-8 bg-pattern relative overflow-hidden">
      {/* Animated Background with More Elements */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-float" style={{animationDelay: '3s'}}></div>
      
      {/* Animated Particles */}
      <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-primary-400 rounded-full animate-ping opacity-30"></div>
      <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-accent-400 rounded-full animate-ping opacity-30" style={{animationDelay: '1.5s'}}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center" data-aos="fade-up" data-aos-duration="1000">
          <div className="inline-block animate-float mb-4">
            <span className="text-primary-600 font-mono font-semibold text-sm tracking-wider uppercase bg-primary-100 px-6 py-2 rounded-full hover:scale-110 transition-all duration-300 animate-pulse">
              Portfolio
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mt-3 mb-4 text-neutral-900">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-neutral-800 text-lg max-w-2xl mx-auto mb-16 font-medium">
            A showcase of my development and design work with real-world applications
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-16 animate-zoomIn" data-aos="fade-up" data-aos-duration="1000">
          <button 
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-lg font-medium transition-all duration-500 hover:scale-110 transform relative overflow-hidden group ${
              filter === 'all' 
                ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-2xl shadow-primary-600/50 scale-105 animate-pulse' 
                : 'bg-white border-2 border-neutral-200 text-neutral-700 hover:border-primary-600 hover:text-primary-600 hover:bg-primary-50 hover:shadow-xl'
            }`}
          >
            <span className="relative z-10">All Projects</span>
            {filter === 'all' && <span className="absolute inset-0 bg-gradient-to-r from-accent-600 to-primary-600 opacity-50 animate-shimmer"></span>}
          </button>
          <button 
            onClick={() => setFilter('coding')}
            className={`px-6 py-2 rounded-lg font-medium transition-all duration-500 hover:scale-110 transform relative overflow-hidden group ${
              filter === 'coding' 
                ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-2xl shadow-primary-600/50 scale-105 animate-pulse' 
                : 'bg-white border-2 border-neutral-200 text-neutral-700 hover:border-primary-600 hover:text-primary-600 hover:bg-primary-50 hover:shadow-xl'
            }`}
          >
            <span className="relative z-10">Coding</span>
            {filter === 'coding' && <span className="absolute inset-0 bg-gradient-to-r from-accent-600 to-primary-600 opacity-50 animate-shimmer"></span>}
          </button>
          <button 
            onClick={() => setFilter('design')}
            className={`px-6 py-2 rounded-lg font-medium transition-all duration-500 hover:scale-110 transform relative overflow-hidden group ${
              filter === 'design' 
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-2xl shadow-purple-600/50 scale-105 animate-pulse' 
                : 'bg-white border-2 border-neutral-200 text-neutral-700 hover:border-purple-600 hover:text-purple-600 hover:bg-purple-50 hover:shadow-xl'
            }`}
          >
            <span className="relative z-10">UI/UX Design</span>
            {filter === 'design' && <span className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-50 animate-shimmer"></span>}
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.name}
              className="project-card bg-white rounded-2xl overflow-hidden shadow-lg hover-lift border-2 border-neutral-200 hover:border-primary-300 transition-all duration-500 group relative animate-zoomIn hover:shadow-2xl hover:shadow-primary-500/20"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={100 + (index % 3) * 50}
            >
              {/* Animated Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500 animate-pulse"></div>
              
              {/* Animated Corner Accents */}
              <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-primary-400/20 to-transparent rounded-br-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-accent-400/20 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" style={{animationDelay: '0.2s'}}></div>
              
              <div className={`project-image h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                {project.hasGallery ? (
                  <div className={`absolute inset-0 grid ${project.galleryImages.length === 1 ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'} gap-0`}>
                    {project.galleryImages.map((imgSrc, idx) => (
                      <div key={idx} className={`relative overflow-hidden ${project.galleryImages.length === 1 ? 'h-full' : 'h-24 md:h-full'} bg-white`}>
                        <img 
                          src={imgSrc} 
                          alt=""
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-gradient-to-br ${project.gradient}"><span class="iconify text-white text-3xl" data-icon="${project.icon}"></span></div>`;
                          }}
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <span className="iconify text-white text-6xl group-hover:scale-150 group-hover:rotate-12 transition-all duration-500 relative z-10" data-icon={project.icon}></span>
                )}
                {/* Overlay on hover with Animation */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {/* Animated Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                {/* Floating Particles */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
                <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-white rounded-full opacity-0 group-hover:opacity-100 animate-ping" style={{animationDelay: '0.3s'}}></div>
              </div>
              <div className="p-6 relative z-10">
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-3 py-1 ${project.badgeBg} ${project.badgeText} rounded-full text-xs font-semibold group-hover:scale-110 transition-all duration-300 animate-pulse group-hover:animate-bounce`}>
                    {project.badge}
                  </span>
                  {project.category === 'design' ? (
                    <i className="fab fa-figma text-neutral-400 text-xl group-hover:text-purple-600 group-hover:scale-150 group-hover:rotate-[360deg] transition-all duration-500 animate-float"></i>
                  ) : (
                    <span className="iconify text-neutral-400 text-xl group-hover:text-primary-600 group-hover:scale-150 group-hover:rotate-[360deg] transition-all duration-500 animate-float" data-icon="mdi:code-tags"></span>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-2 text-neutral-900 group-hover:text-primary-600 transition-colors duration-300 group-hover:translate-x-1 relative">
                  {project.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-accent-600 group-hover:w-full transition-all duration-500"></span>
                </h3>
                <p className="text-neutral-800 mb-4 text-sm font-medium group-hover:text-neutral-900 transition-colors">{project.description}</p>
                <ul className="info-list text-sm text-neutral-800 font-medium mb-4">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="group-hover:translate-x-2 transition-transform duration-300 hover:text-primary-600" style={{transitionDelay: `${idx * 50}ms`}}>{feature}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full text-xs hover:bg-primary-100 hover:text-primary-700 transition-all duration-300 hover:scale-110 cursor-pointer hover:rotate-3 hover:shadow-md">
                      {tag}
                    </span>
                  ))}
                </div>
                {/* See Project Button with Enhanced Animation */}
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-hover-glow w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-lg font-medium hover:shadow-2xl hover:shadow-primary-600/50 hover:scale-105 transition-all duration-300 group/btn relative overflow-hidden animate-shimmer"
                >
                  <span className="relative z-10">See Project</span>
                  <span className="iconify text-lg group-hover/btn:translate-x-2 transition-transform relative z-10 animate-bounce" data-icon="mdi:arrow-right"></span>
                  <span className="absolute inset-0 bg-gradient-to-r from-accent-600 to-pink-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></span>
                  {/* Ripple Effect */}
                  <span className="absolute inset-0 rounded-lg opacity-0 group-hover/btn:opacity-100 group-hover/btn:animate-ping bg-white/20"></span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
