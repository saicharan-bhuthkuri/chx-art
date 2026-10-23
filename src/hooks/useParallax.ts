import { useEffect, useState, useRef } from 'react';

export const useParallax = (speed: number = 0.2) => {
  const [offsetY, setOffsetY] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Disable parallax if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let animationFrameId: number;
    let isTicking = false;

    const handleScroll = () => {
      if (!isTicking) {
        animationFrameId = requestAnimationFrame(() => {
          if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            // Calculate how far the element is relative to the viewport center
            const scrollDistance = window.innerHeight - rect.top;
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
              setOffsetY(scrollDistance * speed);
            }
          }
          isTicking = false;
        });
        isTicking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, [speed]);

  return { ref, offsetY };
};
