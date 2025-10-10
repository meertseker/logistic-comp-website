// Google Analytics 4 (GA4) Configuration
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID || 'G-XXXXXXXXX'; // TODO: Replace with your actual GA4 Measurement ID

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && GA_TRACKING_ID && GA_TRACKING_ID !== 'G-XXXXXXXXX') {
    const w = window as Window & { gtag?: (...args: unknown[]) => void };
    if (w.gtag) {
      w.gtag('config', GA_TRACKING_ID, {
        page_path: url,
      });
    }
  }
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window !== 'undefined' && GA_TRACKING_ID && GA_TRACKING_ID !== 'G-XXXXXXXXX') {
    const w = window as Window & { gtag?: (...args: unknown[]) => void };
    if (w.gtag) {
      w.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    }
  }
};

// Track specific business events
export const trackContactForm = () => {
  event({
    action: 'contact_form_submit',
    category: 'engagement',
    label: 'contact_form',
  });
};

export const trackPhoneCall = () => {
  event({
    action: 'phone_call_click',
    category: 'engagement',
    label: 'phone_number',
  });
};

export const trackWhatsApp = () => {
  event({
    action: 'whatsapp_click',
    category: 'engagement',
    label: 'whatsapp_button',
  });
};

export const trackServiceClick = (serviceName: string) => {
  event({
    action: 'service_click',
    category: 'engagement',
    label: serviceName,
  });
};

// Enhanced tracking functions
export const trackPageView = (pageName: string, pageTitle: string) => {
  if (typeof window !== 'undefined') {
    const w = window as Window & { gtag?: (...args: unknown[]) => void };
    if (w.gtag) {
      w.gtag('event', 'page_view', {
        page_title: pageTitle,
        page_location: window.location.href,
        page_name: pageName,
      });
    }
  }
};

export const trackScrollDepth = (depth: number) => {
  event({
    action: 'scroll_depth',
    category: 'engagement',
    label: `${depth}%`,
    value: depth,
  });
};

export const trackTimeOnPage = (timeInSeconds: number) => {
  event({
    action: 'time_on_page',
    category: 'engagement',
    label: `${timeInSeconds} seconds`,
    value: timeInSeconds,
  });
};

export const trackServicePageView = (serviceName: string) => {
  event({
    action: 'service_page_view',
    category: 'services',
    label: serviceName,
  });
};

export const trackFAQClick = (question: string) => {
  event({
    action: 'faq_click',
    category: 'engagement',
    label: question,
  });
};

export const trackFormStart = (formName: string) => {
  event({
    action: 'form_start',
    category: 'contact',
    label: formName,
  });
};

export const trackFormComplete = (formName: string) => {
  event({
    action: 'form_complete',
    category: 'contact',
    label: formName,
  });
};

export const trackFormError = (formName: string, errorType: string) => {
  event({
    action: 'form_error',
    category: 'contact',
    label: `${formName} - ${errorType}`,
  });
};

export const trackDownload = (fileName: string) => {
  event({
    action: 'file_download',
    category: 'engagement',
    label: fileName,
  });
};

export const trackExternalLink = (linkUrl: string) => {
  event({
    action: 'external_link_click',
    category: 'engagement',
    label: linkUrl,
  });
};

export const trackSearch = (searchTerm: string) => {
  event({
    action: 'search',
    category: 'engagement',
    label: searchTerm,
  });
};

// Conversion tracking
export const trackConversion = (conversionType: string, value?: number) => {
  event({
    action: 'conversion',
    category: 'conversion',
    label: conversionType,
    value: value,
  });
};
