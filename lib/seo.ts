import { buildAbsoluteUrl } from './config';
interface PageMetadataProps {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  lang?: string;
}

export function getPageMetadata({
  title,
  description,
  url,
  image,
  lang = 'tr', // Default language
}: PageMetadataProps) {
  const siteName = "ÇNR LOJİSTİK VE DEPOLAMA LİMİTED ŞİRKETİ"; // Your site's name
  // Build absolute defaults based on site config
  const defaultImage = buildAbsoluteUrl('/cnr-logo.png');
  const canonicalUrl = url ? buildAbsoluteUrl(url) : undefined;

  return {
    title: title ? `${title} | ${siteName}` : siteName,
    description: description || "A'dan Z'ye taşımacılık ve gümrük hizmetlerinde standartları belirliyoruz. Modern teknoloji ve deneyimli ekibimizle yanınızdayız.",
    alternates: canonicalUrl
      ? {
          canonical: canonicalUrl,
        }
      : undefined,
    openGraph: {
      title: title || siteName,
      description: description || "A'dan Z'ye taşımacılık ve gümrük hizmetlerinde standartları belirliyoruz. Modern teknoloji ve deneyimli ekibimizle yanınızdayız.",
      url: canonicalUrl,
      siteName: siteName,
      images: [
        {
          url: image ? buildAbsoluteUrl(image) : defaultImage,
          width: 1200,
          height: 630,
          alt: title || siteName,
        },
      ],
      locale: lang,
      type: 'website',
    },
    twitter: {
      card: "summary_large_image",
      title: title || siteName,
      description: description || "A'dan Z'ye taşımacılık ve gümrük hizmetlerinde standartları belirliyoruz. Modern teknoloji ve deneyimli ekibimizle yanınızdayız.",
      images: [image ? buildAbsoluteUrl(image) : defaultImage],
    },
  };
} 