export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "ÇNR Lojistik",
  "url": "https://www.cnrlojistikvedepolama.com",
  "logo": "https://www.cnrlojistikvedepolama.com/cnr-logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+90 (530) 373 29 30",
    "contactType": "Customer Service"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "BARBAROS HAYRETTİN PAŞA Mah. 1997. SK PIKET LIFE Cad. No:12/97",
    "addressLocality": "Esenyurt",
    "addressRegion": "İstanbul",
    "postalCode": "34515",
    "addressCountry": "TR"
  },
  "sameAs": [
    // TODO: Add your social media profiles here if available
    // "https://www.facebook.com/your-company-page",
    // "https://twitter.com/your-company-page",
    // "https://www.linkedin.com/company/your-company-page"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "ÇNR Lojistik Hizmetleri",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "İhracat Konteyner Taşımacılığı",
          "description": "İhracat süreçlerinizde güvenilir ve hızlı konteyner taşımacılığı hizmeti"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "İthalat Konteyner Taşımacılığı",
          "description": "İthalat süreçlerinizde profesyonel konteyner taşımacılığı çözümleri"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Ağır Yük Taşımacılığı",
          "description": "Özel ekipmanlarla ağır yük taşımacılığında uzman hizmet"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Gümrükleme İşlemleri",
          "description": "Profesyonel gümrük danışmanlığı ve işlem takibi"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Proje Taşımacılığı",
          "description": "Özel proje taşımacılığı çözümleri"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "ADR Taşıma",
          "description": "Tehlikeli madde taşımacılığı (ADR)"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "ISO Tank Taşımacılığı",
          "description": "Sıvı kimyasal madde taşımacılığı"
        }
      }
    ]
  }
}; 