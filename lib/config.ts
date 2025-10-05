export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.cnrlojistikvedepolama.com';

export const GOOGLE_VERIFICATION = process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || '';

export const buildAbsoluteUrl = (path: string = '/') => {
  if (!path) return SITE_URL;
  if (path.startsWith('http')) return path;
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
};


