'use client';

import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";

export default function ClientHomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const animateNumbers = () => {
      const counters = document.querySelectorAll('[data-target]');
      counters.forEach(counter => {
        const targetAttr = counter.getAttribute('data-target');
        const target = targetAttr ? +targetAttr : 0;
        const duration = 1000;
        const start = 0;
        let startTime: number | null = null;

        const easeOutQuad = (t: number) => t * (2 - t);

        const animate = (currentTime: number) => {
          if (!startTime) startTime = currentTime;
          const progress = Math.min((currentTime - startTime) / duration, 1);
          const easedProgress = easeOutQuad(progress);
          counter.textContent = Math.floor(start + easedProgress * (target - start)).toString();

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };
        requestAnimationFrame(animate);
      });
    };

    const statsSection = document.getElementById('stats-section');
    if (statsSection) {
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateNumbers();
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.5 });
      observer.observe(statsSection);
    } else {
      animateNumbers();
    }
  }, []);

  const openMobileMenu = () => {
    setIsMobileMenuOpen(true);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className={`min-h-screen ${isMobileMenuOpen ? 'overflow-hidden' : 'bg-white'}`}>
      {/* Header */}
      <header className="px-4 py-6 lg:px-20 bg-[#202953] shadow-sm sticky top-0 z-50 relative">
        <div className="flex items-center justify-between relative z-10">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/cnr-logo.png"
              alt="ÇNR Lojistik Logo"
              width={160}
              height={50}
              className="h-12 w-auto"
              priority
            />
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-white font-semibold border-2 border-white px-4 py-2 rounded-full">Anasayfa</a>
            <a href="#about" className="text-white font-semibold hover:text-[#202953] transition-colors">Hakkımızda</a>
            <a href="#services" className="text-white font-semibold hover:text-[#202953] transition-colors flex items-center gap-1">
              Hizmetlerimiz
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#gallery" className="text-white font-semibold hover:text-[#202953] transition-colors">Galeri</a>
            <a href="#contact" className="text-white font-semibold hover:text-[#202953] transition-colors">İletişim</a>
          </nav>
          
          {/* CTA Button */}
          <a href="#contact" className="text-white font-semibold hidden md:block">Teklif Al</a>
        </div>
      </header>

      {/* Mobile Menu Button */}
      <button className="md:hidden fixed top-6 right-4 z-50 bg-white p-2 rounded-lg shadow-lg" onClick={() => openMobileMenu()}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden fixed inset-0 bg-opacity-80 z-[999] transition-all duration-300 ${isMobileMenuOpen ? 'visible backdrop-blur-sm' : 'invisible'}`} onClick={() => closeMobileMenu()}>
        <div className={`bg-white w-full max-h-[90vh] overflow-y-auto p-6 shadow-lg transform transition-transform duration-300 ease-out ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`} onClick={(e) => e.stopPropagation()}>
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-2">
              <Image
                src="/cnr-logo.png"
                alt="ÇNR Lojistik Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </div>
            <button className="text-gray-600" onClick={() => closeMobileMenu()}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="space-y-4">
            <a href="#" className="block text-[#202953] font-semibold py-2">Anasayfa</a>
            <a href="#about" className="block text-gray-600 font-semibold py-2">Hakkımızda</a>
            <a href="#services" className="block text-gray-600 font-semibold py-2">Hizmetlerimiz</a>
            <a href="#gallery" className="block text-gray-600 font-semibold py-2">Galeri</a>
            <a href="#contact" className="block text-gray-600 font-semibold py-2">İletişim</a>
            <a href="#contact" className="block bg-[#FFA07A] text-white px-4 py-2 rounded-lg font-semibold text-center mt-4">
              Teklif Al
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}
