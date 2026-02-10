'use client';
import { useState } from 'react';

const skills = [
  { 
    name: 'HTML5', 
    icon: 'mdi:language-html5', 
    bgColor: 'bg-gradient-to-br from-orange-400 to-orange-600', 
    textColor: 'text-white', 
    progress: 100, 
    description: 'Semantic markup & structure',
    category: 'Frontend',
    glowColor: 'shadow-orange-500/50',
    link: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
  },
  { 
    name: 'CSS3', 
    icon: 'mdi:language-css3', 
    bgColor: 'bg-gradient-to-br from-blue-400 to-blue-600', 
    textColor: 'text-white', 
    progress: 80, 
    description: 'Modern styling & animations',
    category: 'Frontend',
    glowColor: 'shadow-blue-500/50',
    link: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
  },
  { 
    name: 'Tailwind CSS', 
    icon: 'mdi:tailwind', 
    bgColor: 'bg-gradient-to-br from-cyan-400 to-cyan-600', 
    textColor: 'text-white', 
    progress: 90, 
    description: 'Utility-first framework',
    category: 'Frontend',
    glowColor: 'shadow-cyan-500/50',
    link: 'https://tailwindcss.com/'
  },
  { 
    name: 'JavaScript', 
    icon: 'mdi:language-javascript', 
    bgColor: 'bg-gradient-to-br from-yellow-400 to-yellow-600', 
    textColor: 'text-white', 
    progress: 75, 
    description: 'Interactive & dynamic web',
    category: 'Frontend',
    glowColor: 'shadow-yellow-500/50',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
  },
  { 
    name: 'React.js', 
    icon: 'mdi:react', 
    bgColor: 'bg-gradient-to-br from-blue-400 to-blue-600', 
    textColor: 'text-white', 
    progress: 30, 
    description: 'Component-based UI library',
    category: 'Frontend',
    glowColor: 'shadow-blue-500/50',
    link: 'https://react.dev/'
  },
  { 
    name: 'Next.js', 
    icon: 'simple-icons:nextdotjs', 
    bgColor: 'bg-gradient-to-br from-neutral-700 to-neutral-900', 
    textColor: 'text-white', 
    progress: 40, 
    description: 'React framework for production',
    category: 'Frontend',
    glowColor: 'shadow-neutral-700/50',
    link: 'https://nextjs.org/'
  },
  { 
    name: 'Node.js', 
    icon: 'mdi:nodejs', 
    bgColor: 'bg-gradient-to-br from-green-500 to-green-700', 
    textColor: 'text-white', 
    progress: 10, 
    description: 'JavaScript runtime environment',
    category: 'Backend',
    glowColor: 'shadow-green-500/50',
    link: 'https://nodejs.org/'
  },
  { 
    name: 'Express.js', 
    icon: 'simple-icons:express', 
    bgColor: 'bg-gradient-to-br from-neutral-600 to-neutral-800', 
    textColor: 'text-white', 
    progress: 30, 
    description: 'Fast Node.js web framework',
    category: 'Backend',
    glowColor: 'shadow-neutral-600/50',
    link: 'https://expressjs.com/'
  },
  { 
    name: 'C Programming', 
    icon: 'mdi:language-c', 
    bgColor: 'bg-gradient-to-br from-indigo-500 to-indigo-700', 
    textColor: 'text-white', 
    progress: 50, 
    description: 'Core programming fundamentals',
    category: 'Programming',
    glowColor: 'shadow-indigo-500/50',
    link: 'https://en.wikipedia.org/wiki/C_(programming_language)'
  },
  { 
    name: 'Figma', 
    icon: 'fab fa-figma', 
    bgColor: 'bg-gradient-to-br from-purple-500 to-pink-600', 
    textColor: 'text-white', 
    progress: 90, 
    description: 'UI/UX design & prototyping', 
    isFontAwesome: true,
    category: 'Design',
    glowColor: 'shadow-purple-500/50',
    link: 'https://www.figma.com/'
  },
  { 
    name: 'WordPress', 
    icon: 'mdi:wordpress', 
    bgColor: 'bg-gradient-to-br from-blue-500 to-blue-700', 
    textColor: 'text-white', 
    progress: 70, 
    description: 'CMS & website development',
    category: 'CMS',
    glowColor: 'shadow-blue-500/50',
    link: 'https://wordpress.org/'
  },
  { 
    name: 'Git / GitHub', 
    icon: 'mdi:github', 
    bgColor: 'bg-gradient-to-br from-neutral-700 to-neutral-900', 
    textColor: 'text-white', 
    progress: 10, 
    description: 'Version control & collaboration',
    category: 'Tools',
    glowColor: 'shadow-neutral-700/50',
    link: 'https://github.com/'
  },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Frontend', 'Backend', 'Design', 'Programming', 'CMS', 'Tools'];
  
  const filteredSkills = activeCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 px-6 lg:px-8 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header with Floating Animation */}
        <div className="text-center mb-16" data-aos="fade-up" data-aos-duration="1000">
          <div className="inline-block animate-float mb-4">
            <span className="text-primary-600 font-mono font-semibold text-sm tracking-wider uppercase bg-primary-100 px-6 py-2 rounded-full">
              My Expertise
            </span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mt-2 mb-6 text-neutral-900 animate-fadeInUp">
            Skills & <span className="gradient-text ">Technologies</span>
          </h2>
          <p className="text-neutral-800 text-lg max-w-2xl mx-auto font-medium animate-fadeInUp stagger-1">
            A comprehensive toolkit combining modern development frameworks with advanced design capabilities
          </p>
        </div>

        {/* Category Filter with Slide Animation */}
        <div className="flex flex-wrap justify-center gap-4 mb-16" data-aos="fade-up" data-aos-delay="200">
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-2xl shadow-primary-600/50 scale-105'
                  : 'bg-white text-neutral-700 border-2 border-neutral-200 hover:border-primary-600 hover:text-primary-600 hover:shadow-xl'
              }`}
              data-aos="zoom-in"
              data-aos-delay={100 + index * 50}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid with Advanced Animations */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {filteredSkills.map((skill, index) => (
            <a
              key={skill.name}
              href={skill.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block cursor-pointer"
              data-aos="zoom-in"
              data-aos-duration="800"
              data-aos-delay={100 + (index % 4) * 100}
            >
              {/* Glowing Background Effect */}
              <div className={`absolute inset-0 ${skill.bgColor} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500 animate-pulse`}></div>
              
              {/* Main Card */}
              <div className="relative bg-white rounded-3xl p-8 border-2 border-neutral-200 hover:border-transparent transition-all duration-500 transform hover:scale-105 hover:-translate-y-3 hover:shadow-2xl group-hover:shadow-primary-500/20">
                
                {/* Animated Corner Accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary-100 to-transparent rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Icon with Rotation Animation */}
                <div className="relative mb-6">
                  <div className={`w-20 h-20 ${skill.bgColor} rounded-2xl flex items-center justify-center transform transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 shadow-lg ${skill.glowColor} group-hover:shadow-2xl`}>
                    {skill.isFontAwesome ? (
                      <i className={`${skill.icon} text-4xl ${skill.textColor} animate-pulse`}></i>
                    ) : (
                      <span className={`iconify text-4xl ${skill.textColor} animate-pulse`} data-icon={skill.icon}></span>
                    )}
                  </div>
                  
                  {/* Orbiting Dots */}
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-primary-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
                  <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-accent-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping" style={{animationDelay: '0.2s'}}></div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                  <span className="px-3 py-1 bg-gradient-to-r from-primary-500 to-accent-500 text-white text-xs font-bold rounded-full shadow-lg">
                    {skill.category}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-3 text-neutral-900 group-hover:text-primary-600 transition-colors duration-300">
                  {skill.name}
                </h3>
                <p className="text-neutral-700 text-sm mb-6 font-medium leading-relaxed group-hover:text-neutral-900 transition-colors">
                  {skill.description}
                </p>

                {/* Animated Progress Bar */}
                <div className="relative">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold text-neutral-600 group-hover:text-primary-600 transition-colors">Proficiency</span>
                    <span className="text-xs font-mono font-bold text-primary-600 bg-primary-100 px-2 py-1 rounded-full group-hover:scale-110 transition-transform">
                      {skill.progress}%
                    </span>
                  </div>
                  
                  {/* Progress Bar Container */}
                  <div className="relative h-3 bg-neutral-200 rounded-full overflow-hidden shadow-inner">
                    {/* Animated Background Shimmer */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 animate-shimmer"></div>
                    
                    {/* Progress Fill with Gradient */}
                    <div 
                      className="skill-progress h-full bg-gradient-to-r from-primary-500 via-accent-500 to-primary-600 rounded-full relative overflow-hidden shadow-lg transition-all duration-1000 group-hover:shadow-primary-500/50"
                      style={{width: `${skill.progress}%`}} 
                      data-progress={skill.progress}
                    >
                      {/* Animated Shine Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shimmer"></div>
                    </div>
                  </div>
                </div>

                {/* Hover Reveal: Additional Info */}
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  <div className="flex items-center justify-between text-xs text-primary-600 font-semibold">
                    <span className="flex items-center gap-2">
                      <span className="iconify animate-bounce" data-icon="mdi:open-in-new"></span>
                      <span>Learn more</span>
                    </span>
                    <span className="iconify text-lg" data-icon="mdi:arrow-right"></span>
                  </div>
                </div>

                {/* Bottom Decorative Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-3xl"></div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
