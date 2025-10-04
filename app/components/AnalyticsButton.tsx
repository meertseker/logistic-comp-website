'use client';

import { trackPhoneCall, trackServiceClick, trackContactForm } from '../../lib/analytics';

interface AnalyticsButtonProps {
  href: string;
  onClick?: () => void;
  className: string;
  children: React.ReactNode;
  trackingType: 'phone' | 'service' | 'contact';
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
    }
    if (onClick) onClick();
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
