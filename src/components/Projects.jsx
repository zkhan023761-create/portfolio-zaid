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
    link: 'https://www.figma.com/design/rfiuPmW8GxbPksQYOuBe3q/CARHARTT?node-id=0-1&t=MGbptlkmYnr1nyDt-1'
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
    link: 'https://github.com/zkhan023761-create/BookMyShow-Clone'
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
    link: 'https://github.com/zkhan023761-create/Printify-Clone'
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
    link: 'https://github.com/zkhan023761-create/Wonderlust-Travels-clone'
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
    link: 'https://github.com/zkhan023761-create/admin-dashboard'
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
    link: 'https://github.com/zkhan023761-create/chatbot'
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
    link: 'https://github.com/zkhan023761-create/Quiz'
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
    link: 'https://github.com/zkhan023761-create/tailkits-clone'
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
    link: 'https://github.com/zkhan023761-create/subscription-plan'
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
    link: 'https://www.figma.com/design/rfiuPmW8GxbPksQYOuBe3q/CARHARTT?node-id=0-1&t=MGbptlkmYnr1nyDt-1'
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
    link: 'https://www.figma.com/design/rfiuPmW8GxbPksQYOuBe3q/CARHARTT?node-id=0-1&t=MGbptlkmYnr1nyDt-1'
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
    link: 'https://www.figma.com/design/rfiuPmW8GxbPksQYOuBe3q/CARHARTT?node-id=0-1&t=MGbptlkmYnr1nyDt-1'
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
    link: 'https://www.figma.com/design/rfiuPmW8GxbPksQYOuBe3q/CARHARTT?node-id=0-1&t=MGbptlkmYnr1nyDt-1'
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
    link: 'https://www.figma.com/design/rfiuPmW8GxbPksQYOuBe3q/CARHARTT?node-id=0-1&t=MGbptlkmYnr1nyDt-1'
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
    link: 'https://www.figma.com/design/rfiuPmW8GxbPksQYOuBe3q/CARHARTT?node-id=0-1&t=MGbptlkmYnr1nyDt-1'
  }
];

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-24 px-6 lg:px-8 bg-pattern relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16" data-aos="fade-up" data-aos-duration="1000">
          <span className="text-primary-600 font-mono font-semibold text-sm tracking-wider uppercase animate-pulse">Portfolio</span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-2 mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
            A showcase of my development and design work with real-world applications
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-16" data-aos="fade-up" data-aos-duration="1000">
          <button 
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 transform ${
              filter === 'all' 
                ? 'bg-primary-600 text-white shadow-md shadow-primary-600/30' 
                : 'bg-white border-2 border-neutral-200 text-neutral-700 hover:border-primary-600 hover:text-primary-600 hover:bg-primary-50'
            }`}
          >
            All Projects
          </button>
          <button 
            onClick={() => setFilter('coding')}
            className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 transform ${
              filter === 'coding' 
                ? 'bg-primary-600 text-white shadow-md shadow-primary-600/30' 
                : 'bg-white border-2 border-neutral-200 text-neutral-700 hover:border-primary-600 hover:text-primary-600 hover:bg-primary-50'
            }`}
          >
            Coding
          </button>
          <button 
            onClick={() => setFilter('design')}
            className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 transform ${
              filter === 'design' 
                ? 'bg-primary-600 text-white shadow-md shadow-primary-600/30' 
                : 'bg-white border-2 border-neutral-200 text-neutral-700 hover:border-purple-600 hover:text-purple-600 hover:bg-purple-50'
            }`}
          >
            UI/UX Design
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.name}
              className="project-card bg-white rounded-2xl overflow-hidden shadow-lg hover-lift border-2 border-neutral-200 hover:border-primary-300 transition-all duration-500 group"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={100 + (index % 3) * 50}
            >
              <div className={`project-image h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <span className="iconify text-white text-6xl group-hover:scale-125 transition-transform duration-500" data-icon={project.icon}></span>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-3 py-1 ${project.badgeBg} ${project.badgeText} rounded-full text-xs font-semibold group-hover:scale-110 transition-transform`}>
                    {project.badge}
                  </span>
                  {project.category === 'design' ? (
                    <i className="fab fa-figma text-neutral-400 text-xl group-hover:text-purple-600 group-hover:scale-125 transition-all duration-300"></i>
                  ) : (
                    <span className="iconify text-neutral-400 text-xl group-hover:text-primary-600 group-hover:scale-125 transition-all duration-300" data-icon="mdi:code-tags"></span>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">{project.name}</h3>
                <p className="text-neutral-600 mb-4 text-sm">{project.description}</p>
                <ul className="info-list text-sm text-neutral-600 mb-4">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="group-hover:translate-x-1 transition-transform duration-300">{feature}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full text-xs hover:bg-primary-100 hover:text-primary-700 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
                {/* See Project Button */}
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-hover-glow w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-lg font-medium hover:shadow-xl hover:shadow-primary-600/30 hover:scale-105 transition-all duration-300 group/btn"
                >
                  <span>See Project</span>
                  <span className="iconify text-lg group-hover/btn:translate-x-1 transition-transform" data-icon="mdi:arrow-right"></span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
