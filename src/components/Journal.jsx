'use client';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const JOURNAL_ENTRIES = [
  {
    title: 'Google AI Professional Certificate: Artificial Intelligence & Machine Learning',
    type: 'Verified Milestone',
    category: 'Google AI & Coursera',
    readTime: '3 min read',
    date: 'February 2026',
    link: 'https://lnkd.in/p/dkMDHZRW',
    isExternal: true,
    image:
      'https://media.licdn.com/dms/image/v2/D4D22AQF_kz1xhRPJtA/feedshare-image-high-res/B4DaGqC_bUJMAQ-/0/1793854273478?e=2147483647&v=beta&t=gSgWpslZArf9sk3FmqoyxMQ0e3mK_Jyh86GPnD8s1eI',
    highlight: 'Google AI Certified',
    certData: {
      title: 'Artificial Intelligence & Machine Learning',
      issuer: 'Google AI / Coursera',
      date: 'Feb 2026',
      badge: 'Google AI Certified',
      image:
        'https://media.licdn.com/dms/image/v2/D4D22AQF_kz1xhRPJtA/feedshare-image-high-res/B4DaGqC_bUJMAQ-/0/1793854273478?e=2147483647&v=beta&t=gSgWpslZArf9sk3FmqoyxMQ0e3mK_Jyh86GPnD8s1eI',
      link: 'https://lnkd.in/p/dkMDHZRW',
      subtext: 'Official Google AI Professional Certificate awarded via Coursera with 7 specialized AI modules.',
    },
  },
  {
    title: 'Figma UI/UX Design & Web Development Internship at CODTECH IT Solutions',
    type: 'Industry Internship',
    category: 'UI/UX & Frontend',
    readTime: '4 min read',
    date: 'February 2026',
    link: 'https://lnkd.in/p/dtUWb7bK',
    isExternal: true,
    image:
      'https://media.licdn.com/dms/image/v2/D4D22AQE7Z1OMffUE9w/feedshare-image-high-res/B4DaGqDQL4IMAQ-/0/1793854342166?e=2147483647&v=beta&t=M_rS0xjzyAXqfajJSjJorTa0lSMlTqRa_viBzGXxKLU',
    highlight: 'Figma UI/UX Certified',
    certData: {
      title: 'Figma UI/UX Design & Web Development',
      issuer: 'CODTECH IT Solutions',
      date: 'Feb 2026',
      badge: 'Internship Certified',
      image:
        'https://media.licdn.com/dms/image/v2/D4D22AQE7Z1OMffUE9w/feedshare-image-high-res/B4DaGqDQL4IMAQ-/0/1793854342166?e=2147483647&v=beta&t=M_rS0xjzyAXqfajJSjJorTa0lSMlTqRa_viBzGXxKLU',
      link: 'https://lnkd.in/p/dtUWb7bK',
      subtext: 'Verified 8-week internship completing design systems, web architecture, and full responsive flows.',
    },
  },
  {
    title: 'Anthropic Claude & AI Fluency Certification Milestone (Nexcore Alliance)',
    type: 'AI Credential',
    category: 'LLM Prompt Engineering',
    readTime: '5 min read',
    date: 'February 2026',
    link: 'https://lnkd.in/p/dijJ3r9t',
    isExternal: true,
    image:
      'https://media.licdn.com/dms/image/v2/D4D22AQHtt_Vo3LtANQ/feedshare-image-high-res/B4DZ0e7M1pIwAU-/0/1774340329069?e=2147483647&v=beta&t=ecuhKHdBy3Yvh-a_lPYmxPGiI2vlIX_whr-BmwJaMoA',
    highlight: 'Anthropic Claude',
    certData: {
      title: 'Claude & AI Fluency Certification',
      issuer: 'ANTHROPIC & Nexcore Alliance',
      date: 'Feb 2026',
      badge: 'Official Claude',
      image:
        'https://media.licdn.com/dms/image/v2/D4D22AQHtt_Vo3LtANQ/feedshare-image-high-res/B4DZ0e7M1pIwAU-/0/1774340329069?e=2147483647&v=beta&t=ecuhKHdBy3Yvh-a_lPYmxPGiI2vlIX_whr-BmwJaMoA',
      link: 'https://lnkd.in/p/dijJ3r9t',
      subtext: 'Claude LLM reasoning, advanced prompt construction, contextual agents, and model evaluation framework.',
    },
  },
  {
    title: 'Microsoft Learn: Discover Data Analysis Achievement Badge',
    type: 'Data Analysis',
    category: 'Analytics & Warehousing',
    readTime: '3 min read',
    date: 'January 2026',
    link: 'https://lnkd.in/p/d_fkunj2',
    isExternal: true,
    image:
      'https://media.licdn.com/dms/image/sync/v2/D4D27AQH7Dgj6SYTECg/articleshare-shrink_800/B4DZzg.9cuIoAI-/0/1773301127390?e=2147483647&v=beta&t=IyTcUyhU_vwQHIMa6NitwK5keaHzS1zRSDKwix1Z6JE',
    highlight: 'Microsoft Certified',
    certData: {
      title: 'Discover Data Analysis Badge',
      issuer: 'Microsoft Learn',
      date: 'Jan 2026',
      badge: 'Microsoft Certified',
      image:
        'https://media.licdn.com/dms/image/sync/v2/D4D27AQH7Dgj6SYTECg/articleshare-shrink_800/B4DZzg.9cuIoAI-/0/1773301127390?e=2147483647&v=beta&t=IyTcUyhU_vwQHIMa6NitwK5keaHzS1zRSDKwix1Z6JE',
      link: 'https://lnkd.in/p/d_fkunj2',
      subtext: 'Relational querying, business analytics modeling, data warehouse transformation, and dashboards.',
    },
  },
];

const VERIFIED_CREDENTIALS = [
  {
    title: 'Artificial Intelligence & Machine Learning',
    issuer: 'Google AI / Coursera',
    date: 'Feb 2026',
    badge: 'Google AI Certified',
    link: 'https://lnkd.in/p/dkMDHZRW',
    image:
      'https://media.licdn.com/dms/image/v2/D4D22AQF_kz1xhRPJtA/feedshare-image-high-res/B4DaGqC_bUJMAQ-/0/1793854273478?e=2147483647&v=beta&t=gSgWpslZArf9sk3FmqoyxMQ0e3mK_Jyh86GPnD8s1eI',
    subtext: '7-course professional specialization covering deep learning, neural networks, and Python computer vision.',
  },
  {
    title: 'Figma UI/UX Design & Web Development',
    issuer: 'CODTECH IT Solutions',
    date: 'Feb 2026',
    badge: 'Internship Certified',
    link: 'https://lnkd.in/p/dtUWb7bK',
    image:
      'https://media.licdn.com/dms/image/v2/D4D22AQE7Z1OMffUE9w/feedshare-image-high-res/B4DaGqDQL4IMAQ-/0/1793854342166?e=2147483647&v=beta&t=M_rS0xjzyAXqfajJSjJorTa0lSMlTqRa_viBzGXxKLU',
    subtext: 'Hands-on frontend design systems, component libraries, responsive breakpoints, and client project deliverables.',
  },
  {
    title: 'Claude & AI Fluency Certification',
    issuer: 'ANTHROPIC & Nexcore',
    date: 'Feb 2026',
    badge: 'Official Claude',
    link: 'https://lnkd.in/p/dijJ3r9t',
    image:
      'https://media.licdn.com/dms/image/v2/D4D22AQHtt_Vo3LtANQ/feedshare-image-high-res/B4DZ0e7M1pIwAU-/0/1774340329069?e=2147483647&v=beta&t=ecuhKHdBy3Yvh-a_lPYmxPGiI2vlIX_whr-BmwJaMoA',
    subtext: 'Validated mastery of prompt reasoning, context management, tool integrations, and safety frameworks.',
  },
  {
    title: 'Discover Data Analysis Badge',
    issuer: 'Microsoft Learn',
    date: 'Jan 2026',
    badge: 'Microsoft Certified',
    link: 'https://lnkd.in/p/d_fkunj2',
    image:
      'https://media.licdn.com/dms/image/sync/v2/D4D27AQH7Dgj6SYTECg/articleshare-shrink_800/B4DZzg.9cuIoAI-/0/1773301127390?e=2147483647&v=beta&t=IyTcUyhU_vwQHIMa6NitwK5keaHzS1zRSDKwix1Z6JE',
    subtext: 'Core analytical methods, tabular modeling, DAX fundamentals, and business intelligence reporting.',
  },
  {
    title: 'AI for All (Aware & Appreciate)',
    issuer: 'Intel & Digital India (MeitY)',
    date: 'Jan 2026',
    badge: 'Govt. of India',
    link: 'https://lnkd.in/p/dbXuGEZu',
    image:
      'https://media.licdn.com/dms/image/v2/D4D22AQF5CoT7RsXv2g/feedshare-shrink_800/B4DZve.1jwHgAg-/0/1768972573613?e=2147483647&v=beta&t=DpdmcODIDd1saphHFLDCPYOxv5K4HKD9PyugBECbg_Q',
    subtext: 'National qualification by Ministry of Electronics & IT (MeitY) and Intel covering digital awareness and applied AI.',
  },
  {
    title: 'Yuva AI for All - English',
    issuer: 'AISECT Learn & INDIAai',
    date: 'Jan 2026',
    badge: 'National Skilling',
    link: 'https://lnkd.in/p/dZAh3Kci',
    image:
      'https://media.licdn.com/dms/image/v2/D4D22AQGmycxGxYeZ2w/feedshare-shrink_800/B4DZve_8hJK0Ag-/0/1768972863825?e=2147483647&v=beta&t=J-1AaGgqgLEuHsXR-yG5m8bkI6di1418OEDxTGlSIC8',
    subtext: 'National vocational skilling program in machine learning algorithms, computational problem-solving, and data ethics.',
  },
];

export default function Journal() {
  const sectionRef = useRef(null);
  const [selectedCert, setSelectedCert] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.journal-header',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.journal-header',
            start: 'top 85%',
          },
        }
      );

      gsap.fromTo(
        '.journal-pill',
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.journal-list',
            start: 'top 85%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="credentials"
      ref={sectionRef}
      className="bg-bg py-16 md:py-24 border-t border-stroke/50"
    >
      <div className="max-w-300 mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className="journal-header flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.3em] font-medium">
                Journal &amp; Credentials
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-text-primary tracking-tight font-normal">
              Recent <span className="font-display italic">thoughts</span>
            </h2>
            <p className="text-muted text-sm md:text-base mt-2 max-w-lg font-light">
              Verified certifications from Google AI, CODTECH, Anthropic, Microsoft, Intel &amp; AISECT with direct post links.
            </p>
          </div>

          <div className="hidden md:inline-flex">
            <a
              href="https://www.linkedin.com/in/zaid-khan-943376379"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-full text-xs uppercase tracking-wider font-medium px-5 py-2.5 text-text-primary border border-stroke hover:border-transparent transition-colors"
            >
              <span className="absolute -inset-px rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              <span className="relative z-10 flex items-center gap-2">
                <i className="fa-brands fa-linkedin text-xs" />
                <span>View LinkedIn Activity</span>
                <i className="fa-solid fa-arrow-right text-xs transition-transform duration-200 group-hover:translate-x-0.5" />
              </span>
            </a>
          </div>
        </div>

        {/* Journal Entries as Horizontal Pills */}
        <div className="journal-list flex flex-col gap-4 mb-16">
          {JOURNAL_ENTRIES.map((entry, idx) => (
            <div
              key={idx}
              onClick={() => {
                if (entry.certData) {
                  setSelectedCert(entry.certData);
                } else if (entry.link) {
                  window.open(entry.link, '_blank', 'noopener,noreferrer');
                }
              }}
              className="journal-pill group flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 p-4 sm:px-6 rounded-[28px] sm:rounded-full bg-surface/30 hover:bg-surface border border-stroke hover:border-[#89AACC]/40 transition-all duration-300 relative overflow-hidden cursor-pointer"
            >
              <div className="flex items-center gap-4 sm:gap-5 min-w-0">
                <div
                  className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden shrink-0 border border-stroke/70 bg-bg cursor-pointer hover:border-[#89AACC] transition-colors"
                  title="Click to view full certificate"
                >
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${entry.image})` }}
                  />
                </div>

                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className="text-[10px] uppercase tracking-wider font-mono px-2 py-0.5 rounded-full bg-stroke/50 text-muted">
                      {entry.type}
                    </span>
                    <span className="text-[10px] text-emerald-400 font-mono">
                      {entry.highlight}
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-medium text-text-primary group-hover:text-white transition-colors truncate max-w-xl">
                    {entry.title}
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-4 shrink-0 sm:self-auto self-end">
                <div className="text-right text-xs text-muted font-mono hidden md:block">
                  <div>{entry.date}</div>
                  <div className="text-[11px] text-muted/70">{entry.readTime}</div>
                </div>

                <div className="w-8 h-8 rounded-full border border-stroke flex items-center justify-center text-xs text-muted group-hover:text-text-primary group-hover:border-[#89AACC]/60 transition-colors">
                  <span className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    {entry.isCertModal ? (
                      <i className="fa-solid fa-magnifying-glass text-[11px]" />
                    ) : (
                      <i className="fa-solid fa-arrow-up-right-from-square text-[10px]" />
                    )}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Verified Credentials Grid */}
        <div className="pt-8 border-t border-stroke/40">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-2">
            <h3 className="text-xl md:text-2xl text-text-primary font-normal tracking-tight">
              Verified <span className="font-display italic">credentials &amp; foundation</span>
            </h3>
            <span className="text-xs text-muted font-mono uppercase tracking-wider">
              Google AI • CODTECH • Anthropic • Microsoft • Intel • AISECT
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {VERIFIED_CREDENTIALS.map((cert, cIdx) => (
              <div
                key={cIdx}
                className="group p-5 rounded-2xl bg-surface/50 border border-stroke hover:border-[#89AACC]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] uppercase tracking-wider font-mono px-2 py-0.5 rounded border text-emerald-400 bg-emerald-950/40 border-emerald-500/20">
                      {cert.badge}
                    </span>
                    <span className="text-[11px] text-muted font-mono">{cert.date}</span>
                  </div>

                  {cert.image && (
                    <div
                      onClick={() => setSelectedCert(cert)}
                      className="cursor-pointer aspect-16/10 rounded-xl overflow-hidden mb-3 border border-stroke/60 bg-bg relative group/img"
                    >
                      <div
                        className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover/img:scale-105"
                        style={{ backgroundImage: `url(${cert.image})` }}
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-xs text-white font-medium">
                        <span>View Certificate</span>
                        <i className="fa-solid fa-magnifying-glass text-[11px]" />
                      </div>
                    </div>
                  )}

                  <h4 className="text-sm font-medium text-text-primary group-hover:text-white transition-colors mb-1">
                    {cert.title}
                  </h4>
                  <div className="text-xs text-[#89AACC] font-mono mb-2">{cert.issuer}</div>

                  {cert.subtext && (
                    <p className="text-xs text-muted leading-relaxed font-light mt-1">
                      {cert.subtext}
                    </p>
                  )}
                </div>

                <div className="pt-4 mt-3 border-t border-stroke/40 flex items-center justify-between text-xs text-muted">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-text-primary text-[#89AACC] flex items-center gap-1 font-mono text-[11px]"
                  >
                    <span>Verify on LinkedIn</span>
                    <i className="fa-solid fa-arrow-up-right-from-square text-[9px]" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal for Certificate Preview */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="bg-surface border border-stroke rounded-3xl max-w-2xl w-full p-6 overflow-hidden relative shadow-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-bg border border-stroke flex items-center justify-center text-muted hover:text-white transition-colors z-10"
              aria-label="Close modal"
            >
              <i className="fa-solid fa-xmark text-sm" />
            </button>
            <div className="rounded-2xl overflow-hidden mb-4 border border-stroke/50 bg-bg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="w-full h-auto max-h-[65vh] object-contain mx-auto"
              />
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-lg font-medium text-text-primary">
                  {selectedCert.title}
                </h3>
                <p className="text-xs text-muted font-mono">
                  {selectedCert.issuer} • {selectedCert.date}
                </p>
                {selectedCert.subtext && (
                  <p className="text-xs text-muted/80 mt-1 font-mono max-w-md">
                    {selectedCert.subtext}
                  </p>
                )}
              </div>
              <a
                href={selectedCert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full px-4 py-2 text-xs font-medium bg-[#89AACC] text-black hover:bg-white transition-colors shrink-0 flex items-center gap-1.5 self-start sm:self-center"
              >
                <span>{selectedCert.isAcademic ? 'Open Full Certificate' : 'View LinkedIn Post'}</span>
                <i className="fa-solid fa-arrow-up-right-from-square text-[10px]" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
