const skills = [
  { name: 'HTML5', icon: 'mdi:language-html5', bgColor: 'bg-orange-100', textColor: 'text-orange-600', progress: 100, description: 'Semantic markup & structure' },
  { name: 'CSS3', icon: 'mdi:language-css3', bgColor: 'bg-blue-100', textColor: 'text-blue-600', progress: 80, description: 'Modern styling & animations' },
  { name: 'Tailwind CSS', icon: 'mdi:tailwind', bgColor: 'bg-cyan-100', textColor: 'text-cyan-600', progress: 90, description: 'Utility-first framework' },
  { name: 'JavaScript', icon: 'mdi:language-javascript', bgColor: 'bg-yellow-100', textColor: 'text-yellow-600', progress: 75, description: 'Interactive & dynamic web' },
  { name: 'React.js', icon: 'mdi:react', bgColor: 'bg-blue-100', textColor: 'text-blue-500', progress: 30, description: 'Component-based UI library' },
  { name: 'Next.js', icon: 'simple-icons:nextdotjs', bgColor: 'bg-neutral-800', textColor: 'text-white', progress: 40, description: 'React framework for production' },
  { name: 'Node.js', icon: 'mdi:nodejs', bgColor: 'bg-green-100', textColor: 'text-green-600', progress: 10, description: 'JavaScript runtime environment' },
  { name: 'Express.js', icon: 'simple-icons:express', bgColor: 'bg-neutral-200', textColor: 'text-neutral-800', progress: 30, description: 'Fast Node.js web framework' },
  { name: 'C Programming', icon: 'mdi:language-c', bgColor: 'bg-indigo-100', textColor: 'text-indigo-600', progress: 50, description: 'Core programming fundamentals' },
  { name: 'Figma', icon: 'fab fa-figma', bgColor: 'bg-purple-100', textColor: 'text-purple-600', progress: 90, description: 'UI/UX design & prototyping', isFontAwesome: true },
  { name: 'WordPress', icon: 'mdi:wordpress', bgColor: 'bg-blue-100', textColor: 'text-blue-700', progress: 70, description: 'CMS & website development' },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up" data-aos-duration="1000">
          <span className="text-primary-600 font-mono font-semibold text-sm tracking-wider uppercase">My Expertise</span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-2 mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit combining modern development frameworks with advanced design capabilities in Figma
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {skills.map((skill, index) => (
            <div 
              key={skill.name}
              className="bg-gradient-to-br from-neutral-50 to-white p-6 rounded-2xl border-2 border-neutral-200 hover-lift group"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={100 + index * 50}
            >
              <div className={`w-16 h-16 ${skill.bgColor} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                {skill.isFontAwesome ? (
                  <i className={`${skill.icon} text-4xl ${skill.textColor}`}></i>
                ) : (
                  <span className={`iconify text-4xl ${skill.textColor}`} data-icon={skill.icon}></span>
                )}
              </div>
              <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
              <p className="text-neutral-600 text-sm mb-4">{skill.description}</p>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{width: `${skill.progress}%`}} 
                  data-progress={skill.progress}
                ></div>
              </div>
              <p className="text-xs text-neutral-500 mt-2 text-right font-mono">{skill.progress}%</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
