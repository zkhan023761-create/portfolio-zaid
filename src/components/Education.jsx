"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Education() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header entrance
      gsap.fromTo(
        ".edu-header",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".edu-header",
            start: "top 85%",
          },
        },
      );

      // Cards entrance
      gsap.fromTo(
        ".edu-card",
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".edu-grid",
            start: "top 80%",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="education"
      ref={sectionRef}
      className="bg-bg py-16 md:py-24 border-t border-stroke/50 relative overflow-hidden"
    >
      <div className="max-w-300 mx-auto px-6 md:px-10 lg:px-16">
        {/* Section Header */}
        <div className="edu-header flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.3em] font-mono font-medium">
                Academic Background
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-text-primary tracking-tight font-normal">
              Formal <span className="font-display italic">education</span>
            </h2>
            <p className="text-muted text-sm md:text-base mt-2 max-w-lg font-light">
              Higher secondary education and current undergraduate degree
              program in artificial intelligence and data science.
            </p>
          </div>

          <div className="hidden sm:inline-flex">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface/50 border border-stroke text-xs text-muted font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Verified Institution History</span>
            </span>
          </div>
        </div>

        {/* 2 Clean Focused Education Cards */}
        <div className="edu-grid grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Card 1: Currently Pursuing B.Voc in AI & Data Science */}
          <div className="edu-card rounded-3xl bg-surface/40 hover:bg-surface/70 border border-stroke hover:border-[#89AACC]/50 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between gap-3 mb-4 flex-wrap">
                <span className="text-[10px] uppercase font-mono tracking-wider px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/40 text-cyan-300 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                  <span>Currently Pursuing</span>
                </span>
                <span className="text-xs text-muted font-mono">
                  2025 — Present
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-normal text-text-primary tracking-tight mb-1">
                B.Voc in{" "}
                <span className="font-display italic text-[#89AACC]">
                  AI &amp; Data Science
                </span>
              </h3>

              <div className="text-sm text-text-primary/90 font-medium mb-1">
                Nexcore Institute of Technology (NIT)
              </div>
              <div className="text-xs text-muted font-mono mb-4">
                Mumbai, Maharashtra • Undergraduate Program
              </div>

              <p className="text-xs sm:text-sm text-muted font-light leading-relaxed mb-6">
                Pursuing Bachelor of Vocation in Artificial Intelligence and
                Data Science at Nexcore Institute of Technology (NIT), Mumbai.
              </p>
            </div>

            <div className="pt-4 border-t border-stroke/40 flex flex-wrap gap-2 text-xs font-mono text-muted">
              <span>Nexcore NIT</span>
              <span>•</span>
              <span>Mumbai</span>
              <span>•</span>
              <span className="text-[#89AACC]">Undergraduate Degree</span>
            </div>
          </div>

          {/* Card 2: Completed 12th from Anjuman-i-Islam */}
          <div className="edu-card rounded-3xl bg-surface/40 hover:bg-surface/70 border border-stroke hover:border-[#89AACC]/50 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between gap-3 mb-4 flex-wrap">
                <span className="text-[10px] uppercase font-mono tracking-wider px-3 py-1 rounded-full bg-emerald-950/70 border border-emerald-500/30 text-emerald-400 flex items-center gap-1.5">
                  <i className="fa-solid fa-circle-check text-[10px]" />
                  <span>Completed</span>
                </span>
                <span className="text-xs text-muted font-mono">
                  February 2025
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-normal text-text-primary tracking-tight mb-1">
                Higher Secondary Certificate{" "}
                <span className="font-display italic text-[#89AACC]">
                  (12th Science)
                </span>
              </h3>

              <div className="text-sm text-text-primary/90 font-medium mb-1">
                Anjuman-i-Islam Junior College
              </div>
              <div className="text-xs text-muted font-mono mb-4">
                Mumbai • Maharashtra State Board, Pune
              </div>

              <p className="text-xs sm:text-sm text-muted font-light leading-relaxed mb-6">
                Completed 12th Science from Anjuman-i-Islam Junior College in
                Mumbai under the Maharashtra State Board.
              </p>
            </div>

            <div className="pt-4 border-t border-stroke/40 flex flex-wrap gap-2 text-xs font-mono text-muted">
              <span>Anjuman-i-Islam</span>
              <span>•</span>
              <span>Mumbai</span>
              <span>•</span>
              <span className="text-[#89AACC]">HSC Science</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
