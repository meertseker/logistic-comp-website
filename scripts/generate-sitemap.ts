import { writeFileSync } from 'fs';
import { resolve } from 'path';

// Define your domain here (fallback to env if available)
const YOUR_DOMAIN = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.cnrlojistikvedepolama.com';

const generateSitemap = () => {
  // Static pages
  const pages: string[] = [
    '/',
    '/hakkimizda',
    '/hizmetler',
    '/sss',
    '/iletisim',
  ];

  // Known service slugs (sync with app/hizmetler/[slug]/page.tsx)
  const serviceSlugs = [
    'ihracat-konteyner-tasimaciligi',
    'ithalat-konteyner-tasimaciligi',
    'agir-yuk-tasimaciligi',
    'gumrukleme-islemleri',
    'proje-tasimaciligi',
    'adr-tasima',
    'agir-nakliye-islemleri',
    'liman-hizmetleri',
    'motat-tasimaciligi',
    'plastik-atik-tasimaciligi',
    'kimyasal-yanici-tehlikeli-madde-tasimaciligi',
    'iso-tank-tasimaciligi',
  ];

  const servicePages = serviceSlugs.map((slug) => `/hizmetler/${slug}`);
  const allPages = [...pages, ...servicePages];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allPages
    .map((page) => {
      return `
    <url>
      <loc>${YOUR_DOMAIN}${page}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.7</priority>
    </url>
  `;
    })
    .join('')}
</urlset>`;

  const filePath = resolve(process.cwd(), 'public', 'sitemap.xml');
  writeFileSync(filePath, sitemap, 'utf-8');
  console.log('sitemap.xml generated!');
};

generateSitemap(); 