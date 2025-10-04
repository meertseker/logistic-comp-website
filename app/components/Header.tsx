'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="px-4 py-6 lg:px-20 bg-[#202953] shadow-sm sticky top-0 z-50">
      <div className="flex items-center justify-between relative z-10">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/cnr-logo.png"
              alt="ÇNR Lojistik Logo"
              width={160}
              height={50}
              className="h-12 w-auto"
              priority
            />
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link 
            href="/" 
            className={`font-semibold transition-colors ${
              pathname === '/' 
                ? 'text-white border-2 border-white px-4 py-2 rounded-full' 
                : 'text-white hover:text-[#202953]'
            }`}
          >
            Anasayfa
          </Link>
          <Link 
            href="/hakkimizda" 
            className={`font-semibold transition-colors ${
              pathname === '/hakkimizda' 
                ? 'text-white border-2 border-white px-4 py-2 rounded-full' 
                : 'text-white hover:text-[#202953]'
            }`}
          >
            Hakkımızda
          </Link>
          <Link 
            href="/hizmetler" 
            className={`font-semibold transition-colors flex items-center gap-1 ${
              pathname === '/hizmetler' || pathname.startsWith('/hizmetler/')
                ? 'text-white border-2 border-white px-4 py-2 rounded-full' 
                : 'text-white hover:text-[#202953]'
            }`}
          >
            Hizmetlerimiz
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
          <Link 
            href="/sss" 
            className={`font-semibold transition-colors ${
              pathname === '/sss' 
                ? 'text-white border-2 border-white px-4 py-2 rounded-full' 
                : 'text-white hover:text-[#202953]'
            }`}
          >
            SSS
          </Link>
          <Link 
            href="/iletisim" 
            className={`font-semibold transition-colors ${
              pathname === '/iletisim' 
                ? 'text-white border-2 border-white px-4 py-2 rounded-full' 
                : 'text-white hover:text-[#202953]'
            }`}
          >
            İletişim
          </Link>
        </nav>
      </div>
    </header>
  );
}
