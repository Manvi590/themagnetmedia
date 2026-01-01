import React, { useRef, useEffect } from 'react';

interface InteractiveCardProps {
  children: React.ReactNode;
  className?: string;
  particleCount?: number;
  glowColor?: string; // e.g. '191,27,44'
}

export default function InteractiveCard({
  children,
  className = '',
  particleCount = 0,
  glowColor = '191,27,44'
}: InteractiveCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const particles: HTMLDivElement[] = [];

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // add overlay for glow
    const glow = document.createElement('div');
    glow.className = 'ic-glow';
    el.appendChild(glow);

    let rafId: number | null = null;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const rotateY = ((x / rect.width) - 0.5) * 10; // -5 to 5 deg
      const rotateX = ((y / rect.height) - 0.5) * -6; // -3 to 3 deg

      el.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

      // position glow
      glow.style.left = `${x}px`;
      glow.style.top = `${y}px`;
      glow.style.opacity = '1';
    };

    const handleMouseEnter = () => {
      // create particles only if particleCount > 0
      if (particleCount <= 0) return;
      for (let i = 0; i < particleCount; i++) {
        const p = document.createElement('div');
        p.className = 'ic-particle';
        const size = 4 + Math.round(Math.random() * 6);
        p.style.width = `${size}px`;
        p.style.height = `${size}px`;
        p.style.left = `${Math.random() * 100}%`;
        p.style.top = `${Math.random() * 100}%`;
        const delay = Math.random() * 0.6;
        p.style.animationDelay = `${delay}s`;
        p.style.background = `rgba(${glowColor}, 1)`;
        p.style.boxShadow = `0 0 8px rgba(${glowColor}, 0.6)`;
        el.appendChild(p);
        particles.push(p);
      }
    };

    const handleMouseLeave = () => {
      el.style.transform = '';
      glow.style.opacity = '0';
      // remove particles
      particles.forEach(p => p.remove());
      particles.length = 0;
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseenter', handleMouseEnter);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseenter', handleMouseEnter);
      el.removeEventListener('mouseleave', handleMouseLeave);
      rafId && cancelAnimationFrame(rafId);
      glow.remove();
      particles.forEach(p => p.remove());
    };
  }, [particleCount, glowColor]);

  return (
    <div ref={ref} className={`interactive-card ${className}`}>
      <style>{`
        .interactive-card { position: relative; transform-style: preserve-3d; transition: transform 0.18s ease, box-shadow 0.22s ease, border-color 0.22s ease; }
        .interactive-card .ic-glow { position: absolute; left: 50%; top: 50%; width: 280px; height: 280px; pointer-events: none; transform: translate(-50%,-50%); border-radius: 50%; background: radial-gradient(circle, rgba(${glowColor},0.22) 0%, rgba(${glowColor},0.09) 35%, transparent 70%); opacity: 0; transition: opacity 0.18s ease, left 0.06s linear, top 0.06s linear; mix-blend-mode: screen; z-index: 0; }
        .interactive-card .ic-particle { position: absolute; border-radius: 50%; opacity: 0.9; pointer-events: none; animation: ic-float 2.4s ease-in-out infinite alternate; z-index: 1; }
        @keyframes ic-float { from { transform: translateY(0px) translateX(0px) scale(1); opacity: 0.9 } to { transform: translateY(-12px) translateX(8px) scale(0.9); opacity: 0.25 } }
        .interactive-card:hover { box-shadow: 0 12px 40px rgba(${glowColor}, 0.14), 0 0 30px rgba(${glowColor}, 0.18); border-color: rgba(${glowColor}, 0.45) !important; }
        .interactive-card .ic-glow { filter: saturate(120%); }
      `}</style>
      {children}
    </div>
  );
}
