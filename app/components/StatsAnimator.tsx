'use client';

import { useEffect } from 'react';

export default function StatsAnimator() {
  useEffect(() => {
    const easeOutQuad = (t: number) => t * (2 - t);

    const animateNumbers = () => {
      const counters = document.querySelectorAll<HTMLElement>('[data-target]');
      const duration = 1200;

      counters.forEach((counter) => {
        const targetAttr = counter.getAttribute('data-target');
        const target = targetAttr ? parseInt(targetAttr, 10) : 0;
        const start = 0;
        let startTime: number | null = null;

        const step = (currentTime: number) => {
          if (startTime === null) startTime = currentTime;
          const progress = Math.min((currentTime - startTime) / duration, 1);
          const eased = easeOutQuad(progress);
          const value = Math.floor(start + eased * (target - start));
          counter.textContent = value.toString();
          if (progress < 1) requestAnimationFrame(step);
        };

        requestAnimationFrame(step);
      });
    };

    const statsSection = document.getElementById('stats-section');
    if (!statsSection) {
      // Fallback: animate on mount if section not found
      animateNumbers();
      return;
    }

    let hasAnimated = false;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            hasAnimated = true;
            animateNumbers();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(statsSection);
    return () => observer.disconnect();
  }, []);

  return null;
}


