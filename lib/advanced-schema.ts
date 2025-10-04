// Advanced Schema Markup for SEO
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "ÇNR Lojistik ne kadar süredir hizmet veriyor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ÇNR Lojistik olarak 15 yıldır lojistik ve taşımacılık sektöründe hizmet vermekteyiz. Bu süre zarfında binlerce müşterimize güvenilir hizmet sunmuş bulunmaktayız."
      }
    },
    {
      "@type": "Question",
      "name": "Hangi şehirlerde hizmet veriyorsunuz?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Türkiye genelinde hizmet vermekteyiz. Özellikle İstanbul, Ankara, İzmir, Bursa, Antalya gibi büyük şehirlerde yoğun olarak faaliyet gösteriyoruz. Ayrıca uluslararası taşımacılık hizmetlerimiz de mevcuttur."
      }
    },
    {
      "@type": "Question",
      "name": "Konteyner taşımacılığında hangi boyutlarda konteyner kullanıyorsunuz?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "20ft ve 40ft standart konteynerlerin yanı sıra, 40ft HC (High Cube), 45ft konteynerler de kullanmaktayız. Ayrıca özel projeler için açık üstlü, platform konteynerler de mevcuttur."
      }
    },
    {
      "@type": "Question",
      "name": "ADR taşımacılığında hangi sınıf tehlikeli maddeleri taşıyorsunuz?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ADR sınıflandırmasına göre 1-9 arası tüm sınıflardaki tehlikeli maddeleri taşıyabilmekteyiz. Sertifikalı araçlarımız ve uzman personelimizle güvenli taşımacılık sağlıyoruz."
      }
    },
    {
      "@type": "Question",
      "name": "Gümrük işlemlerinde hangi belgeleri hazırlıyorsunuz?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Gümrük beyannameleri, ticari faturalar, menşe şehadetnameleri, sigorta poliçeleri, konşimentolar, paket listeleri gibi tüm gerekli belgeleri hazırlıyoruz."
      }
    }
  ]
};

export const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Anasayfa",
      "item": "https://www.cnrlojistikvedepolama.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Hizmetlerimiz",
      "item": "https://www.cnrlojistikvedepolama.com/hizmetler"
    }
  ]
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.cnrlojistikvedepolama.com/#organization",
  "name": "ÇNR Lojistik ve Depolama",
  "alternateName": "ÇNR Lojistik",
  "description": "15 yıllık deneyimle lojistik ve taşımacılık hizmetleri sunan güvenilir şirket",
  "url": "https://www.cnrlojistikvedepolama.com",
  "logo": "https://www.cnrlojistikvedepolama.com/cnr-logo.png",
  "image": "https://www.cnrlojistikvedepolama.com/cnr-logo.png",
  "telephone": "+90 (530) 373 29 30",
  "email": "info@cnrlojistikvedepolama.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "BARBAROS HAYRETTİN PAŞA Mah. 1997. SK PIKET LIFE Cad. No:12/97",
    "addressLocality": "Esenyurt",
    "addressRegion": "İstanbul",
    "postalCode": "34515",
    "addressCountry": "TR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "41.0082",
    "longitude": "28.9784"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "09:00",
      "closes": "15:00"
    }
  ],
  "priceRange": "$$",
  "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
  "currenciesAccepted": "TRY",
  "areaServed": [
    {
      "@type": "Country",
      "name": "Turkey"
    },
    {
      "@type": "City",
      "name": "İstanbul"
    },
    {
      "@type": "City", 
      "name": "Ankara"
    },
    {
      "@type": "City",
      "name": "İzmir"
    }
  ],
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "41.0082",
      "longitude": "28.9784"
    },
    "geoRadius": "500000"
  },
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
          "name": "ADR Taşıma",
          "description": "Tehlikeli madde taşımacılığı (ADR)"
        }
      }
    ]
  },
  "sameAs": [
    // TODO: Add social media profiles when available
  ],
  "foundingDate": "2009",
  "numberOfEmployees": "50-100",
  "slogan": "A'dan Z'ye taşımacılık ve gümrük hizmetlerinde standartları belirliyoruz"
};

export const serviceSchema = (serviceName: string, serviceDescription: string, serviceUrl: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": serviceName,
  "description": serviceDescription,
  "url": serviceUrl,
  "provider": {
    "@type": "Organization",
    "name": "ÇNR Lojistik",
    "url": "https://www.cnrlojistikvedepolama.com",
    "telephone": "+90 (530) 373 29 30",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "BARBAROS HAYRETTİN PAŞA Mah. 1997. SK PIKET LIFE Cad. No:12/97",
      "addressLocality": "Esenyurt",
      "addressRegion": "İstanbul",
      "postalCode": "34515",
      "addressCountry": "TR"
    }
  },
  "areaServed": {
    "@type": "Country",
    "name": "Turkey"
  },
  "serviceType": "Logistics and Transportation",
  "category": "Transportation Services"
});

export const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Review",
  "itemReviewed": {
    "@type": "Organization",
    "name": "ÇNR Lojistik",
    "url": "https://www.cnrlojistikvedepolama.com"
  },
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "4.8",
    "bestRating": "5",
    "worstRating": "1"
  },
  "author": {
    "@type": "Person",
    "name": "Müşteri Yorumları"
  },
  "reviewBody": "ÇNR Lojistik ile çalışmak harika bir deneyim. Profesyonel hizmet anlayışları ve güvenilir taşımacılık hizmetleri için teşekkürler."
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "ÇNR Lojistik ve Depolama",
  "url": "https://www.cnrlojistikvedepolama.com",
  "description": "15 yıllık deneyimle lojistik ve taşımacılık hizmetleri sunan güvenilir şirket",
  "publisher": {
    "@type": "Organization",
    "name": "ÇNR Lojistik",
    "url": "https://www.cnrlojistikvedepolama.com"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.cnrlojistikvedepolama.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "İletişim - ÇNR Lojistik",
  "description": "ÇNR Lojistik ile iletişime geçin. Telefon, e-posta, adres bilgilerimiz ve online iletişim formu.",
  "url": "https://www.cnrlojistikvedepolama.com/iletisim",
  "mainEntity": {
    "@type": "Organization",
    "name": "ÇNR Lojistik",
    "telephone": "+90 (530) 373 29 30",
    "email": "info@cnrlojistikvedepolama.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "BARBAROS HAYRETTİN PAŞA Mah. 1997. SK PIKET LIFE Cad. No:12/97",
      "addressLocality": "Esenyurt",
      "addressRegion": "İstanbul",
      "postalCode": "34515",
      "addressCountry": "TR"
    }
  }
};
