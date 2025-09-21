export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "ÇNR Lojistik",
  "url": "https://yourdomain.com", // TODO: Replace with your actual domain!
  "logo": "https://yourdomain.com/cnr-logo.png", // TODO: Replace with your actual domain for logo URL!
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+90 (212) 875 79 83",
    "contactType": "Customer Service"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Yakuplu Mah. Başkent Cd. Altındaş Apt. No:51 / 8",
    "addressLocality": "Beylikdüzü",
    "addressRegion": "İstanbul",
    "postalCode": "34520", // Assuming a postal code for Beylikdüzü
    "addressCountry": "TR"
  },
  "sameAs": [
    // TODO: Add your social media profiles here if available
    // "https://www.facebook.com/your-company-page",
    // "https://twitter.com/your-company-page",
    // "https://www.linkedin.com/company/your-company-page"
  ]
}; 