'use client';

import Link from 'next/link';
import { trackPhoneCall, trackServiceClick, trackContactForm, trackExternalLink, trackWhatsApp } from '../../lib/analytics';

interface AnalyticsButtonProps {
  href: string;
  onClick?: () => void;
  className: string;
  children: React.ReactNode;
  trackingType: 'phone' | 'service' | 'contact' | 'external' | 'whatsapp';
  serviceName?: string;
}

export default function AnalyticsButton({ 
  href, 
  onClick, 
  className, 
  children, 
  trackingType,
  serviceName 
}: AnalyticsButtonProps) {
  const handleClick = () => {
    switch (trackingType) {
      case 'phone':
        trackPhoneCall();
        break;
      case 'service':
        if (serviceName) trackServiceClick(serviceName);
        break;
      case 'contact':
        trackContactForm();
        break;
      case 'external':
        trackExternalLink(href);
        break;
      case 'whatsapp':
        trackWhatsApp();
        break;
    }
    if (onClick) onClick();
  };

  const isInternal = href.startsWith('/') && !href.startsWith('//');

  if (isInternal) {
    return (
      <Link href={href} onClick={handleClick} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
