'use client';
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SKILLS_DATA = [
  // --- Data & Analytics ---
  {
    name: 'Python',
    category: 'Data & Analytics',
    level: '90%',
    icon: 'fa-brands fa-python',
    color: 'text-amber-400',
    description:
      'Core programming for AI & Machine Learning, data transformation, script automation, and statistical modeling.',
  },
  {
    name: 'SQL',
    category: 'Data & Analytics',
    level: '88%',
    icon: 'fa-solid fa-database',
    color: 'text-cyan-400',
    description:
      'Relational database querying, schema design, complex joins, indexing, and PostgreSQL / MySQL optimization.',
  },
  {
    name: 'Power BI',
    category: 'Data & Analytics',
    level: '85%',
    icon: 'fa-solid fa-chart-column',
    color: 'text-yellow-400',
    description:
      'Interactive executive dashboards, DAX queries, ETL data modeling, and actionable business intelligence visualizations.',
  },
  {
    name: 'Microsoft Excel',
    category: 'Data & Analytics',
    level: '92%',
    icon: 'fa-solid fa-file-excel',
    color: 'text-emerald-400',
    description:
      'Advanced spreadsheets, pivot tables, XLOOKUP, data cleaning, automated formulas, and statistical analysis.',
  },

  // --- DevOps & Cloud ---
  {
    name: 'PM2 Process Manager',
    category: 'DevOps',
    level: '90%',
    icon: 'fa-solid fa-server',
    color: 'text-indigo-400',
    description:
      'Production clustering, zero-downtime reloads, daemon management, automatic restarts, and runtime log monitoring.',
  },
  {
    name: 'DevOps & CI/CD',
    category: 'DevOps',
    level: '82%',
    icon: 'fa-solid fa-code-branch',
    color: 'text-sky-400',
    description:
      'Automated deployment pipelines, GitHub Actions workflows, environment configuration, and staging management.',
  },
  {
    name: 'Linux & Bash',
    category: 'DevOps',
    level: '85%',
    icon: 'fa-brands fa-linux',
    color: 'text-slate-300',
    description:
      'Server administration, shell script automation, SSH configurations, systemd services, and file permission policies.',
  },
  {
    name: 'Nginx & SSL',
    category: 'DevOps',
    level: '80%',
    icon: 'fa-solid fa-network-wired',
    color: 'text-emerald-400',
    description:
      'Reverse proxy configurations, SSL/TLS certificate automation, load distribution, and HTTP header hardening.',
  },

  // --- Development ---
  {
    name: 'React.js & Next.js',
    category: 'Development',
    level: '90%',
    icon: 'fa-brands fa-react',
    color: 'text-cyan-400',
    description:
      'Modern App Router architecture, Server Components, client state hooks, SEO optimization, and high-performance UI.',
  },
  {
    name: 'Node.js & Express',
    category: 'Development',
    level: '86%',
    icon: 'fa-brands fa-node-js',
    color: 'text-green-400',
    description:
      'RESTful APIs, middleware orchestration, authentication flows, error handling, and asynchronous event loops.',
  },
  {
    name: 'Tailwind CSS',
    category: 'Development',
    level: '94%',
    icon: 'fa-solid fa-wind',
    color: 'text-teal-400',
    description:
      'Modern utility-first styling, responsive fluid layouts, custom CSS custom properties, and dark mode theming.',
  },
  {
    name: 'JavaScript (ES6+)',
    category: 'Development',
    level: '90%',
    icon: 'fa-brands fa-js',
    color: 'text-yellow-400',
    description:
      'Asynchronous programming, closures, DOM manipulation, functional data pipelines, and TypeScript foundations.',
  },
  {
    name: 'Figma & UI/UX',
    category: 'Development',
    level: '84%',
    icon: 'fa-brands fa-figma',
    color: 'text-purple-400',
    description:
      'High-fidelity mockups, design token architectures, interactive prototypes, user journey mapping, and wireframes.',
  },
  {
    name: 'Git & GitHub',
    category: 'Development',
    level: '90%',
    icon: 'fa-brands fa-git-alt',
    color: 'text-orange-400',
    description:
      'Collaborative branching workflows, PR reviews, merge conflict resolutions, semantic versioning, and open-source hygiene.',
  },
];

const CATEGORIES = ['All', 'Data & Analytics', 'DevOps', 'Development'];

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.skills-header',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.skills-header',
            start: 'top 85%',
          },
        }
      );

      gsap.fromTo(
        '.skill-card',
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.05,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.skills-grid',
            start: 'top 85%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [selectedCategory]);

  const filteredSkills =
    selectedCategory === 'All'
      ? SKILLS_DATA
      : SKILLS_DATA.filter((s) => s.category === selectedCategory);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="bg-bg py-16 md:py-24 border-t border-stroke/50"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className="skills-header flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.3em] font-medium">
                Capabilities &amp; Stack
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-text-primary tracking-tight font-normal">
              Technical <span className="font-display italic">expertise</span>
            </h2>
            <p className="text-muted text-sm md:text-base mt-2 max-w-xl font-light">
              High-velocity engineering across Python data analysis, SQL warehousing, Power BI dashboards, full-stack Next.js, and PM2 production infrastructure.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs uppercase tracking-wider rounded-full px-4 py-2 font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-text-primary bg-stroke/60 border border-white/20 shadow-sm'
                      : 'text-muted bg-surface/50 hover:text-text-primary hover:bg-stroke/40 border border-stroke'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {filteredSkills.map((skill, idx) => (
            <div
              key={idx}
              className="skill-card group bg-surface border border-stroke rounded-2xl p-6 transition-all duration-300 hover:border-[#89AACC]/40 hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Subtle accent hover glow */}
              <div className="absolute top-0 right-0 w-24 h-24 accent-gradient opacity-0 group-hover:opacity-10 rounded-full blur-2xl transition-opacity duration-500 pointer-events-none" />

              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-bg border border-stroke flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300">
                    <i className={`${skill.icon} ${skill.color}`} />
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-text-primary group-hover:text-white transition-colors">
                      {skill.name}
                    </h3>
                    <span className="text-[11px] text-muted uppercase tracking-wider font-mono">
                      {skill.category}
                    </span>
                  </div>
                </div>

                <span className="text-xs font-mono text-muted group-hover:text-text-primary transition-colors">
                  {skill.level}
                </span>
              </div>

              <p className="text-xs text-muted leading-relaxed font-light mb-4">
                {skill.description}
              </p>

              {/* Progress bar */}
              <div className="h-1 bg-stroke/60 w-full rounded-full overflow-hidden">
                <div
                  className="h-full accent-gradient rounded-full transition-all duration-700"
                  style={{ width: skill.level }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
