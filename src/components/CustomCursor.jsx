'use client';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export default function CustomCursor() {
  const cursorDotRef = useRef(null);
  const cursorBgRef = useRef(null);
  const [hoverText, setHoverText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if device is touch-enabled
    const isTouchDevice = 
      'ontouchstart' in window || 
      navigator.maxTouchPoints > 0 || 
      window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice) return;

    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 50);

    // Hide standard cursor on body
    document.body.style.cursor = 'none';
    
    // Add non-standard CSS to interactive elements so cursor behaves nicely
    const style = document.createElement('style');
    style.innerHTML = `
      a, button, [role="button"], input, select, textarea {
        cursor: none !important;
      }
    `;
    document.head.appendChild(style);

    const cursorDot = cursorDotRef.current;
    const cursorBg = cursorBgRef.current;

    // Use gsap.quickTo for smooth mouse tracking without delay/jerkiness
    const xToDot = gsap.quickTo(cursorDot, 'x', { duration: 0.08, ease: 'power3' });
    const yToDot = gsap.quickTo(cursorDot, 'y', { duration: 0.08, ease: 'power3' });

    const xToBg = gsap.quickTo(cursorBg, 'x', { duration: 0.25, ease: 'power3' });
    const yToBg = gsap.quickTo(cursorBg, 'y', { duration: 0.25, ease: 'power3' });

    const handleMouseMove = (e) => {
      // Coordinates centered
      xToDot(e.clientX - 4);
      yToDot(e.clientY - 4);
      xToBg(e.clientX - 16);
      yToBg(e.clientY - 16);
    };

    window.addEventListener('mousemove', handleMouseMove);

    const handleMouseOver = (e) => {
      const target = e.target.closest('a, button, [role="button"], [data-cursor-text], .hover-lift, .project-card, .skill-card');
      if (target) {
        const text = target.getAttribute('data-cursor-text');
        if (text) {
          setHoverText(text);
          gsap.to(cursorBg, {
            width: 70,
            height: 70,
            xPercent: -25,
            yPercent: -25,
            backgroundColor: 'rgba(99, 102, 241, 0.12)',
            borderColor: 'rgba(99, 102, 241, 0.5)',
            borderWidth: '1.5px',
            boxShadow: '0 0 15px rgba(99, 102, 241, 0.2)',
            duration: 0.3,
          });
          gsap.to(cursorDot, { scale: 0, duration: 0.2 });
        } else {
          // Standard interactive element hover
          gsap.to(cursorBg, {
            scale: 1.6,
            backgroundColor: 'rgba(59, 130, 246, 0.08)',
            borderColor: 'rgba(59, 130, 246, 0.4)',
            borderWidth: '1px',
            boxShadow: '0 0 12px rgba(59, 130, 246, 0.15)',
            duration: 0.3,
          });
          gsap.to(cursorDot, { scale: 1.8, backgroundColor: '#6366f1', duration: 0.2 });
        }
      }
    };

    const handleMouseOut = (e) => {
      const target = e.target.closest('a, button, [role="button"], [data-cursor-text], .hover-lift, .project-card, .skill-card');
      if (target) {
        setHoverText('');
        gsap.to(cursorBg, {
          scale: 1,
          width: 32,
          height: 32,
          xPercent: 0,
          yPercent: 0,
          backgroundColor: 'transparent',
          borderColor: 'rgba(99, 102, 241, 0.3)',
          borderWidth: '1px',
          boxShadow: 'none',
          duration: 0.3,
        });
        gsap.to(cursorDot, { scale: 1, backgroundColor: '#3b82f6', duration: 0.2 });
      }
    };

    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseout', handleMouseOut);

    const handleMouseLeave = () => {
      gsap.to([cursorDot, cursorBg], { opacity: 0, duration: 0.2 });
    };
    const handleMouseEnter = () => {
      gsap.to([cursorDot, cursorBg], { opacity: 1, duration: 0.2 });
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseOut);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.body.style.cursor = 'auto';
      style.remove();
    };
  }, []);

  return (
    <>
      {/* Outer circle */}
      <div
        ref={cursorBgRef}
        className="fixed top-0 left-0 w-8 h-8 border border-cyan-500/30 rounded-full pointer-events-none z-[9999] mix-blend-screen flex items-center justify-center overflow-hidden transition-opacity duration-300"
        style={{ opacity: isVisible ? 1 : 0 }}
      >
        {hoverText && (
          <span className="text-[9px] font-bold font-mono tracking-widest text-cyan-400 text-center uppercase">
            {hoverText}
          </span>
        )}
      </div>

      {/* Inner dot */}
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-violet-500 rounded-full pointer-events-none z-[9999] transition-opacity duration-300 shadow-md shadow-violet-500/30"
        style={{ opacity: isVisible ? 1 : 0 }}
      />
    </>
  );
}
