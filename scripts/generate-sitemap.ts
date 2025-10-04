import { writeFileSync } from 'fs';
import { resolve } from 'path';

// Define your domain here
const YOUR_DOMAIN = 'https://www.cnrlojistikvedepolama.com';

const generateSitemap = () => {
  const pages = [
    '/',
    '/#about',
    '/#services',
    '/#gallery',
    '/#contact',
    // Add other static pages or routes here
    // Example: '/blog', '/products/category-1', etc.
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
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