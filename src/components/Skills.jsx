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
    progress: 65, 
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
    progress: 60, 
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
    progress: 50, 
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
    progress: 55, 
    description: 'Fast Node.js web framework',
    category: 'Backend',
    glowColor: 'shadow-neutral-600/50',
    link: 'https://expressjs.com/'
  },
  { 
    name: 'MongoDB', 
    icon: 'simple-icons:mongodb', 
    bgColor: 'bg-gradient-to-br from-green-600 to-green-800', 
    textColor: 'text-white', 
    progress: 45, 
    description: 'NoSQL database management',
    category: 'Backend',
    glowColor: 'shadow-green-600/50',
    link: 'https://www.mongodb.com/'
  },
  { 
    name: 'Nginx', 
    icon: 'simple-icons:nginx', 
    bgColor: 'bg-gradient-to-br from-emerald-500 to-teal-700', 
    textColor: 'text-white', 
    progress: 35, 
    description: 'Web server & reverse proxy',
    category: 'Backend',
    glowColor: 'shadow-emerald-500/50',
    link: 'https://nginx.org/'
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
    progress: 65, 
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
    <section id="skills" className="py-24 px-6 lg:px-8 bg-[#030712] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-600 rounded-full filter blur-[180px] opacity-5 animate-float"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500 rounded-full filter blur-[150px] opacity-5 animate-float" style={{animationDelay:'2s'}}></div>
      <div className="absolute inset-0 grid-pattern"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16" data-aos="fade-up" data-aos-duration="1000">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/20 bg-violet-500/5 text-violet-400 text-xs font-mono tracking-widest uppercase mb-4">
            <span className="w-1 h-1 bg-violet-400 rounded-full"></span>
            My Expertise
          </span>
          <h2 className="text-4xl lg:text-6xl font-black text-white mt-3 mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-neutral-500 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit combining modern development frameworks with advanced design capabilities
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-16" data-aos="fade-up" data-aos-delay="200">
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-cyan-500 to-violet-600 text-white shadow-lg shadow-cyan-500/20 scale-105'
                  : 'bg-white/5 text-neutral-500 border border-white/10 hover:border-cyan-500/30 hover:text-white'
              }`}
              data-aos="zoom-in"
              data-aos-delay={100 + index * 50}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredSkills.map((skill, index) => (
            <a
              key={skill.name}
              href={skill.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block cursor-pointer"
              data-aos="zoom-in"
              data-aos-duration="600"
              data-aos-delay={100 + (index % 4) * 80}
            >
              {/* Glow */}
              <div className={`absolute inset-0 ${skill.bgColor} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-500`}></div>
              
              {/* Main Card */}
              <div className="relative bg-[#0a0f1e] rounded-3xl p-6 border border-white/5 hover:border-cyan-500/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-3 hover:shadow-2xl hover:shadow-cyan-500/10">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-cyan-500/5 to-transparent rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative mb-5">
                  <div className={`w-16 h-16 ${skill.bgColor} rounded-2xl flex items-center justify-center transform transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 shadow-lg`}>
                    {skill.isFontAwesome ? (
                      <i className={`${skill.icon} text-3xl ${skill.textColor}`}></i>
                    ) : (
                      <span className={`iconify text-3xl ${skill.textColor}`} data-icon={skill.icon}></span>
                    )}
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                  <span className="px-2 py-1 bg-gradient-to-r from-cyan-500 to-violet-600 text-white text-[10px] font-mono rounded-full">{skill.category}</span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors duration-300">{skill.name}</h3>
                <p className="text-neutral-600 text-xs mb-5 leading-relaxed">{skill.description}</p>
                <div className="relative">
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-[10px] font-mono text-neutral-600 group-hover:text-cyan-500 transition-colors">Proficiency</span>
                    <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2 py-0.5 rounded-full">{skill.progress}%</span>
                  </div>
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div className="skill-progress h-full bg-gradient-to-r from-cyan-500 to-violet-600 rounded-full" style={{width: `${skill.progress}%`}}></div>
                  </div>
                </div>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  <div className="flex items-center justify-between text-xs text-cyan-400 font-mono">
                    <span className="flex items-center gap-1"><span className="iconify text-sm" data-icon="mdi:open-in-new"></span>Learn more</span>
                    <span className="iconify" data-icon="mdi:arrow-right"></span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-cyan-500 to-violet-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-3xl"></div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
