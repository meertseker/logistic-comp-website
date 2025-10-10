'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { GA_TRACKING_ID, pageview } from '../../lib/analytics';

export default function AnalyticsRouteTracker() {
  const pathname = usePathname();

  // Initialize GA and track first view
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!GA_TRACKING_ID || GA_TRACKING_ID === 'G-XXXXXXXXX') return;

    // If gtag is available after script load, ensure it's initialized/configured
    const w = window as Window & { gtag?: (...args: unknown[]) => void };
    if (w.gtag) {
      w.gtag('js', new Date());
      w.gtag('config', GA_TRACKING_ID, {
        page_path: window.location.pathname,
      });
    }
  }, []);

  // Track on route change
  useEffect(() => {
    if (!pathname) return;
    pageview(pathname);
  }, [pathname]);

  return null;
}


