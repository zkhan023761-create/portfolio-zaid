'use client';
import { useState, useEffect } from 'react';

const WORDS = ['Design', 'Create', 'Inspire'];

export default function LoadingScreen({ onComplete }) {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [fadeState, setFadeState] = useState('in'); // 'in', 'out'

  // Counter via requestAnimationFrame over 2700ms
  useEffect(() => {
    let rafId;
    let timeoutId;
    const startTime = performance.now();
    const duration = 2700;

    const tick = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentCount = Math.floor(progress * 100);
      setCount(currentCount);

      if (progress < 1) {
        rafId = requestAnimationFrame(tick);
      } else {
        setCount(100);
        timeoutId = setTimeout(() => {
          if (onComplete) onComplete();
        }, 400);
      }
    };

    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [onComplete]);

  // Rotating words cycling every 900ms
  useEffect(() => {
    const interval = setInterval(() => {
      setFadeState('out');
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % WORDS.length);
        setFadeState('in');
      }, 200);
    }, 900);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] bg-bg flex flex-col justify-between p-6 sm:p-10 md:p-16 select-none overflow-hidden">
      {/* Top Left: Portfolio Label */}
      <div className="animate-slideUp">
        <span className="text-xs text-muted uppercase tracking-[0.3em] font-medium">
          Portfolio
        </span>
      </div>

      {/* Center: Rotating Words */}
      <div className="flex items-center justify-center my-auto">
        <div
          className={`text-4xl md:text-6xl lg:text-7xl font-display italic text-text-primary/80 transition-all duration-300 transform ${
            fadeState === 'in'
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-5'
          }`}
        >
          {WORDS[wordIndex]}
        </div>
      </div>

      {/* Bottom Row: Counter Display & Bottom Progress Bar */}
      <div className="w-full">
        <div className="flex justify-end items-baseline mb-4">
          <div className="text-6xl md:text-8xl lg:text-9xl font-display text-text-primary tabular-nums tracking-tighter">
            {String(count).padStart(3, '0')}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="h-[3px] bg-stroke/50 w-full overflow-hidden rounded-full">
          <div
            className="h-full accent-gradient transition-transform duration-75 ease-out rounded-full"
            style={{
              transform: `scaleX(${count / 100})`,
              transformOrigin: 'left',
              boxShadow: '0 0 8px rgba(137, 170, 204, 0.35)',
            }}
          />
        </div>
      </div>
    </div>
  );
}

