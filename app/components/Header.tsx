
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const closeMobile = () => setIsMobileOpen(false);

  return (
    <header className="px-4 py-6 lg:px-20 bg-[#202953] shadow-sm sticky top-0 z-50">
      <div className="flex items-center justify-between relative z-10">
        <div className="flex items-center">
          <Link href="/" onClick={closeMobile}>
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

        {/* Desktop navigation */}
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

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label="Menüyü Aç/Kapat"
          aria-expanded={isMobileOpen}
          className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-white rounded p-2"
          onClick={() => setIsMobileOpen((v) => !v)}
        >
          {/* Simple hamburger icon */}
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>

        {/* Mobile dropdown menu */}
        {isMobileOpen && (
          <div className="absolute inset-x-0 top-full md:hidden bg-[#202953] -mx-4 lg:-mx-20 shadow-lg animate-slide-in-top z-40">
            <div className="px-4 lg:px-20 py-4 flex flex-col gap-2">
              <Link href="/" onClick={closeMobile} className={`block px-3 py-2 rounded-md font-semibold ${pathname === '/' ? 'text-[#202953] bg-white' : 'text-white hover:bg-white/10'}`}>Anasayfa</Link>
              <Link href="/hakkimizda" onClick={closeMobile} className={`block px-3 py-2 rounded-md font-semibold ${pathname === '/hakkimizda' ? 'text-[#202953] bg-white' : 'text-white hover:bg-white/10'}`}>Hakkımızda</Link>
              <Link href="/hizmetler" onClick={closeMobile} className={`block px-3 py-2 rounded-md font-semibold ${pathname === '/hizmetler' || pathname.startsWith('/hizmetler/') ? 'text-[#202953] bg-white' : 'text-white hover:bg-white/10'}`}>Hizmetlerimiz</Link>
              <Link href="/sss" onClick={closeMobile} className={`block px-3 py-2 rounded-md font-semibold ${pathname === '/sss' ? 'text-[#202953] bg-white' : 'text-white hover:bg-white/10'}`}>SSS</Link>
              <Link href="/iletisim" onClick={closeMobile} className={`block px-3 py-2 rounded-md font-semibold ${pathname === '/iletisim' ? 'text-[#202953] bg-white' : 'text-white hover:bg-white/10'}`}>İletişim</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
