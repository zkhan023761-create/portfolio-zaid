'use client';
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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
    link: 'https://www.figma.com/design/xVgaR3muKlLBEf0DTcGfnq/Portfolio-Project?node-id=0-1&t=sgpLUIVpfpaP3OaV-1',
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
    link: 'https://www.figma.com/design/xVgaR3muKlLBEf0DTcGfnq/Portfolio-Project?node-id=0-1&t=sgpLUIVpfpaP3OaV-1',
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
    link: 'https://www.figma.com/design/xVgaR3muKlLBEf0DTcGfnq/Portfolio-Project?node-id=0-1&t=sgpLUIVpfpaP3OaV-1',
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
    link: 'https://www.figma.com/design/xVgaR3muKlLBEf0DTcGfnq/Portfolio-Project?node-id=0-1&t=sgpLUIVpfpaP3OaV-1',
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
    link: 'https://www.figma.com/design/xVgaR3muKlLBEf0DTcGfnq/Portfolio-Project?node-id=0-1&t=sgpLUIVpfpaP3OaV-1',
    hasGallery: true,
    galleryImages: [
      '/school-admission.png',
      '/campus-gallery.png'
    ]
  }
];

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const sectionRef = useRef(null);

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header reveal
      gsap.fromTo('.projects-header',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: '.projects-header', start: 'top 85%' } }
      );

      // Category tab row reveal
      gsap.fromTo('.projects-filter-btn',
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, stagger: 0.05, duration: 0.5, ease: 'back.out(1.5)',
          scrollTrigger: { trigger: '.projects-filter-btn', start: 'top 90%' } }
      );

      // Card reveals on scroll
      gsap.fromTo('.project-card-anim',
        { y: 50, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, stagger: 0.05, duration: 0.6, ease: 'power3.out',
          scrollTrigger: { trigger: '.projects-grid-container', start: 'top 85%' } }
      );


    }, sectionRef);

    return () => ctx.revert();
  }, [filter]); // Re-bind triggers on filter changes

  const handleFilterChange = (newFilter) => {
    if (newFilter === filter) return;
    
    // Staggered exit transition
    gsap.to('.project-card-anim', {
      scale: 0.9,
      opacity: 0,
      y: 20,
      duration: 0.25,
      stagger: 0.02,
      ease: 'power2.in',
      onComplete: () => {
        setFilter(newFilter);
        // Entrance is triggered in useEffect when filter changes
      }
    });
  };

  return (
    <section ref={sectionRef} id="projects" className="py-24 px-6 lg:px-8 bg-[#050b18] relative overflow-hidden">
      <div className="absolute top-20 left-20 w-[500px] h-[500px] bg-cyan-500 rounded-full filter blur-[180px] opacity-5 pointer-events-none animate-float"></div>
      <div className="absolute bottom-20 right-20 w-[400px] h-[400px] bg-violet-600 rounded-full filter blur-[150px] opacity-5 pointer-events-none animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute inset-0 grid-pattern pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center projects-header">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-4">
            <span className="w-1 h-1 bg-cyan-400 rounded-full"></span>
            Portfolio
          </span>
          <h2 className="text-4xl lg:text-6xl font-black text-white mt-3 mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-neutral-500 text-lg max-w-2xl mx-auto mb-16">
            A showcase of my development and design work with real-world applications
          </p>
        </div>

        {/* Tab Filters Row */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          <button 
            onClick={() => handleFilterChange('all')}
            className={`projects-filter-btn px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              filter === 'all' 
                ? 'bg-gradient-to-r from-cyan-500 to-violet-600 text-white shadow-lg shadow-cyan-500/20 scale-105' 
                : 'bg-white/5 border border-white/10 text-neutral-500 hover:border-cyan-500/30 hover:text-white'
            }`}
          >All Projects</button>
          <button 
            onClick={() => handleFilterChange('coding')}
            className={`projects-filter-btn px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              filter === 'coding' 
                ? 'bg-gradient-to-r from-cyan-500 to-violet-600 text-white shadow-lg shadow-cyan-500/20 scale-105' 
                : 'bg-white/5 border border-white/10 text-neutral-500 hover:border-cyan-500/30 hover:text-white'
            }`}
          >Coding</button>
          <button 
            onClick={() => handleFilterChange('design')}
            className={`projects-filter-btn px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              filter === 'design' 
                ? 'bg-gradient-to-r from-violet-600 to-pink-600 text-white shadow-lg shadow-violet-500/20 scale-105' 
                : 'bg-white/5 border border-white/10 text-neutral-500 hover:border-violet-500/30 hover:text-white'
            }`}
          >UI/UX Design</button>
        </div>

        {/* Grid Container */}
        <div className="projects-grid-container grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 min-h-[400px]">
          {filteredProjects.map((project) => (
            <div 
              key={project.name}
              data-cursor-text="OPEN"
              className="project-card-anim bg-[#0a0f1e] rounded-2xl overflow-hidden border border-white/5 hover:border-cyan-500/20 transition-colors duration-500 group relative hover:shadow-2xl hover:shadow-cyan-500/10 cursor-none"
            >
              {/* Glow border ring */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-2xl opacity-0 group-hover:opacity-10 blur transition-opacity duration-500 pointer-events-none"></div>
              
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-cyan-400/10 to-transparent rounded-br-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              {/* 3D Tilt Card content wrapper */}
              <div className="tilt-card-project h-full flex flex-col">
                <div className={`project-image h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden flex-shrink-0`}>
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
                    <span className="iconify text-white text-6xl group-hover:scale-120 transition-transform duration-500 relative z-10" data-icon={project.icon}></span>
                  )}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-3 py-1 ${project.category === 'design' ? 'bg-violet-500/10 text-violet-400 border border-violet-500/20' : 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'} rounded-full text-xs font-mono`}>
                        {project.badge}
                      </span>
                      {project.category === 'design'
                        ? <i className="fab fa-figma text-neutral-400 text-lg group-hover:text-violet-400 transition-colors"></i>
                        : <span className="iconify text-neutral-400 text-lg group-hover:text-cyan-400 transition-colors" data-icon="mdi:code-tags"></span>
                      }
                    </div>
                    <h3 className="text-base font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{project.name}</h3>
                    <p className="text-neutral-500 mb-3 text-xs leading-relaxed">{project.description}</p>
                    <ul className="info-list text-xs text-neutral-400 mb-4">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="group-hover:text-neutral-400 transition-colors">{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tags.map((tag, idx) => (
                        <span key={idx} className="px-2 py-0.5 bg-white/5 text-neutral-400 border border-white/5 rounded-full text-[10px] font-mono hover:text-cyan-400 hover:border-cyan-500/20 transition-colors cursor-default">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a href={project.link} target="_blank" rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-cyan-500 to-violet-600 text-white rounded-xl text-sm font-semibold hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 group/btn relative overflow-hidden">
                      <span className="relative z-10">See Project</span>
                      <span className="iconify text-base group-hover/btn:translate-x-1 transition-transform relative z-10" data-icon="mdi:arrow-right"></span>
                      <span className="absolute inset-0 bg-gradient-to-r from-violet-600 to-cyan-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
