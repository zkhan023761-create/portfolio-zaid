export default function About() {
  return (
    <section id="about" className="py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="order-2 lg:order-1" data-aos="fade-right" data-aos-duration="1000">
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-500 to-accent-500 rounded-3xl p-1 hover-lift">
                <div className="bg-white rounded-3xl p-8 h-full">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <span className="iconify text-3xl text-primary-600" data-icon="mdi:school"></span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">Education</h4>
                        <p className="text-neutral-600">Nexcore Institute of Technology</p>
                        <p className="text-sm text-neutral-500">AI & Machine Learning</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-accent-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <i className="fab fa-figma text-3xl text-accent-600"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">Specialization</h4>
                        <p className="text-neutral-600">Full Stack Development</p>
                        <p className="text-sm text-neutral-500">UI/UX Design with Figma</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <span className="iconify text-3xl text-blue-600" data-icon="mdi:target"></span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">Mission</h4>
                        <p className="text-neutral-600">Creating Impact</p>
                        <p className="text-sm text-neutral-500">Through Technology</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-8" data-aos="fade-left" data-aos-duration="1000">
            <div>
              <span className="text-primary-600 font-mono font-semibold text-sm tracking-wider uppercase">About Me</span>
              <h2 className="text-4xl lg:text-5xl font-bold mt-2 mb-6">
                Passionate About <span className="gradient-text">Creating</span>
              </h2>
            </div>

            <p className="text-lg text-neutral-600 leading-relaxed">
              I'm a driven full-stack developer and UI/UX designer currently pursuing Artificial Intelligence & Machine Learning at Nexcore Institute of Technology. My journey in tech is fueled by a deep passion for creating digital experiences that are both beautiful and functional.
            </p>

            <p className="text-lg text-neutral-600 leading-relaxed">
              With expertise spanning from front-end development using React.js and Next.js to back-end technologies like Node.js and Express.js, I bridge the gap between code and creativity. I specialize in building responsive, scalable web applications while crafting intuitive user experiences and interactive prototypes in Figma.
            </p>

            <div className="pt-4">
              <h3 className="font-semibold text-xl mb-4">What I Bring to the Table:</h3>
              <ul className="info-list text-neutral-700">
                <li>Clean, maintainable, and scalable code architecture</li>
                <li>User-centered design thinking and research methodology</li>
                <li>Responsive, mobile-first development approach</li>
                <li>Modern JavaScript frameworks and libraries expertise</li>
                <li>RESTful API development and integration</li>
                <li>Version control with Git and collaborative workflows</li>
                <li>Performance optimization and best practices</li>
                <li>Continuous learning and staying updated with latest technologies</li>
              </ul>
            </div>

            <div className="pt-4">
              <h3 className="font-semibold text-xl mb-4">Core Competencies:</h3>
              <ul className="info-list text-neutral-700">
                <li>Frontend Development: React.js, Next.js, HTML5, CSS3, Tailwind CSS</li>
                <li>Backend Development: Node.js, Express.js</li>
                <li>Programming Languages: JavaScript, C Programming</li>
                <li>Design Tools: Figma (Advanced), UI/UX Prototyping & Design Systems</li>
                <li>CMS Platforms: WordPress Development & Customization</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
