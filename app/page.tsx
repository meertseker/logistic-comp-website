'use client';

import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const animateNumbers = () => {
      const counters = document.querySelectorAll('[data-target]');
      counters.forEach(counter => {
        const targetAttr = counter.getAttribute('data-target');
        const target = targetAttr ? +targetAttr : 0; // Null check added here
        const duration = 1000; // milliseconds
        let start = 0;
        let startTime: number | null = null;

        const easeOutQuad = (t: number) => t * (2 - t);

        const animate = (currentTime: number) => {
          if (!startTime) startTime = currentTime;
          const progress = Math.min((currentTime - startTime) / duration, 1);
          const easedProgress = easeOutQuad(progress);
          counter.textContent = Math.floor(start + easedProgress * (target - start)).toString(); // Converted to string

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
      }, { threshold: 0.5 }); // Trigger when 50% of the section is visible
      observer.observe(statsSection);
    } else {
      // Fallback for immediate animation if section not found or observer not supported/needed
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
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="px-4 py-6 lg:px-20 bg-white shadow-sm sticky top-0 z-50">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/CNR-LOGO.PNG"
              alt="ÇNR Lojistik Logo"
              width={160}
              height={50}
              className="h-12 w-auto"
            />
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-[#007BFF] font-semibold border-2 border-[#007BFF] px-4 py-2 rounded-full">Anasayfa</a>
            <a href="#about" className="text-gray-600 font-semibold hover:text-[#007BFF] transition-colors">Hakkımızda</a>
            <a href="#services" className="text-gray-600 font-semibold hover:text-[#007BFF] transition-colors flex items-center gap-1">
              Hizmetlerimiz
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#gallery" className="text-gray-600 font-semibold hover:text-[#007BFF] transition-colors">Galeri</a>
            <a href="#contact" className="text-gray-600 font-semibold hover:text-[#007BFF] transition-colors">İletişim</a>
          </nav>
          
          {/* CTA Button */}
          <a href="#contact" className="text-[#007BFF] font-semibold">Teklif Al</a>
        </div>
      </header>

      {/* Hero Section - Modern Design with Public Images */}
      <section className="relative px-4 py-20 lg:px-20 lg:py-32 min-h-screen bg-white overflow-hidden">
        {/* Modern Background Elements */}
        <div className="absolute inset-0">
          {/* Large diagonal blue shape */}
          <div className="absolute -left-1/4 -top-1/4 w-3/4 h-3/4 bg-gradient-to-br from-[#0066FF] to-[#1A00E2] transform rotate-12 opacity-10"></div>
          {/* Floating geometric shapes */}
          <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-[#0066FF] rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-[#1A00E2] rounded-full opacity-15"></div>
          <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-[#28A745] rounded-full opacity-25"></div>
        </div>
        
        <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left Content - Modern Typography */}
          <div className="space-y-10 animate-fade-in-up">
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-[80px] font-bold leading-[90px] text-[#0E0E0E] tracking-tight animate-fade-in-up animate-delay-200">
                Lojistik Dünyasını{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-[#1A00E2]">
                  Yükseltiyoruz
                </span>
              </h1>
              <p className="text-xl text-[#63666D] max-w-lg font-medium leading-relaxed animate-fade-in-up animate-delay-400">
                A'dan Z'ye taşımacılık ve gümrük hizmetlerinde standartları belirliyoruz. 
                Modern teknoloji ve deneyimli ekibimizle yanınızdayız.
              </p>
            </div>
            
            {/* Modern CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-up animate-delay-600">
              <a href="#contact" className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#0066FF] to-[#1A00E2] text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
                <span className="relative z-10">Teklif Al</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#1A00E2] to-[#0066FF] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              
              <a href="tel:+902128757983" className="group inline-flex items-center gap-4 px-8 py-4 bg-white border-2 border-[#1A00E2] text-[#1A00E2] font-semibold rounded-full hover:bg-[#1A00E2] hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl animate-fade-in-up animate-delay-800">
                <div className="w-12 h-12 bg-[#1A00E2] rounded-full flex items-center justify-center group-hover:bg-white transition-colors duration-300">
                  <svg className="w-6 h-6 text-white group-hover:text-[#1A00E2] transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 001.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <span>+90 (212) 875 79 83</span>
              </a>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex items-center gap-8 pt-8 animate-fade-in-up animate-delay-1000">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#28A745] rounded-full"></div>
                <span className="text-sm text-[#63666D] font-medium">15+ Yıl Deneyim</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#28A745] rounded-full"></div>
                <span className="text-sm text-[#63666D] font-medium">500+ Başarılı Proje</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#28A745] rounded-full"></div>
                <span className="text-sm text-[#63666D] font-medium">%99 Müşteri Memnuniyeti</span>
              </div>
            </div>
          </div>
          
          {/* Right Content - Using Public Images */}
          <div className="relative">
            {/* Main Image Container with Public Images */}
            <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/IMG-20230928-WA0026.jpg"
                alt="Lojistik Hizmetleri"
                fill
                className="object-cover"
                priority
              />
              {/* Overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0066FF]/20 to-[#1A00E2]/20"></div>
              
              {/* Content overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 mx-auto">
                    <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                      <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1V8a1 1 0 00-1-1h-3z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Modern Lojistik</h3>
                  <p className="text-white/90">Güvenilir Taşımacılık Çözümleri</p>
                </div>
              </div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#28A745] rounded-lg flex items-center justify-center">
                  <Image
                    src="/vercel.svg"
                    alt="Hızlı Teslimat"
                    width={24}
                    height={24}
                    className="text-white"
                  />
                </div>
                <div>
                  <p className="font-semibold text-[#0E0E0E]">Hızlı Teslimat</p>
                  <p className="text-sm text-[#63666D]">24/7 Takip</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#FFC107] rounded-lg flex items-center justify-center">
                  <Image
                    src="/file.svg"
                    alt="Güvenli Taşıma"
                    width={24}
                    height={24}
                    className="text-white"
                  />
                </div>
                <div>
                  <p className="font-semibold text-[#0E0E0E]">Güvenli Taşıma</p>
                  <p className="text-sm text-[#63666D]">Sigortalı Hizmet</p>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute top-1/4 -right-8 w-24 h-24 bg-gradient-to-br from-[#0066FF] to-[#1A00E2] rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute bottom-1/4 -left-8 w-32 h-32 bg-gradient-to-br from-[#28A745] to-[#1A00E2] rounded-full opacity-15"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 lg:px-20 bg-gray-50 relative">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#E3F2FD] text-[#007BFF] px-4 py-2 rounded-lg mb-6">
              <div className="w-2 h-2 bg-[#007BFF] rounded-full"></div>
              <span className="font-semibold text-[15px]">Hizmetlerimiz</span>
            </div>
            <h2 className="text-4xl lg:text-[44px] font-semibold text-[#0E0E0E] mb-6 leading-[53px] tracking-[-1px]">
              Kargo taşımacılığından depolamaya kadar, benzersiz destek sunuyoruz.
            </h2>
          </div>
          
          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* İhracat Konteyner Taşımacılığı */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg relative hover:shadow-xl transition-shadow duration-300 group animate-fade-in-up">
              <div className="h-64 relative">
                <Image
                  src="/IMG-20230928-WA0027.jpg"
                  alt="İhracat Konteyner Taşımacılığı"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#007BFF]/80 to-[#0056B3]/80 group-hover:from-[#0056B3]/80 group-hover:to-[#007BFF]/80 transition-all duration-300"></div>
                <div className="absolute top-4 right-4 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-[#007BFF]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1V8a1 1 0 00-1-1h-3z" />
                  </svg>
                </div>
                <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold">
                  İhracat Konteyner
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#0E0E0E] mb-3">İhracat Konteyner Taşımacılığı</h3>
                <p className="text-[#63666D] mb-4 text-[15px] leading-[21px]">
                  İhracat süreçlerinizde güvenilir ve hızlı konteyner taşımacılığı hizmeti.
                </p>
                <a href="#contact" className="text-[#007BFF] font-semibold flex items-center gap-2 group">
                  Detaylar
                  <div className="w-16 h-0.5 bg-blue-200 group-hover:bg-[#007BFF] transition-colors"></div>
                </a>
              </div>
            </div>
            
            {/* İthalat Konteyner Taşımacılığı */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg relative hover:shadow-xl transition-shadow duration-300 group animate-fade-in-up animate-delay-200">
              <div className="h-64 relative">
          <Image
                  src="/IMG-20230928-WA0028.jpg"
                  alt="İthalat Konteyner Taşımacılığı"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#28A745]/80 to-[#1E7E34]/80 group-hover:from-[#1E7E34]/80 group-hover:to-[#28A745]/80 transition-all duration-300"></div>
                <div className="absolute top-4 right-4 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-[#28A745]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1V8a1 1 0 00-1-1h-3z" />
                  </svg>
                </div>
                <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold">
                  İthalat Konteyner
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#0E0E0E] mb-3">İthalat Konteyner Taşımacılığı</h3>
                <p className="text-[#63666D] mb-4 text-[15px] leading-[21px]">
                  İthalat süreçlerinizde profesyonel konteyner taşımacılığı çözümleri.
                </p>
                <a href="#contact" className="text-[#28A745] font-semibold flex items-center gap-2 group">
                  Detaylar
                  <div className="w-16 h-0.5 bg-green-200 group-hover:bg-[#28A745] transition-colors"></div>
                </a>
              </div>
            </div>
            
            {/* Ağır Yük Taşımacılığı */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg relative hover:shadow-xl transition-shadow duration-300 group animate-fade-in-up animate-delay-400">
              <div className="h-64 relative">
          <Image
                  src="/IMG-20230928-WA0022.jpg"
                  alt="Ağır Yük Taşımacılığı"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#FFC107]/80 to-[#E0A800]/80 group-hover:from-[#E0A800]/80 group-hover:to-[#FFC107]/80 transition-all duration-300"></div>
                <div className="absolute top-4 right-4 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-[#FFC107]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                  </svg>
                </div>
                <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold">
                  Ağır Yük
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#0E0E0E] mb-3">Ağır Yük Taşımacılığı</h3>
                <p className="text-[#63666D] mb-4 text-[15px] leading-[21px]">
                  Özel ekipmanlarla ağır yük taşımacılığında uzman hizmet.
                </p>
                <a href="#contact" className="text-[#FFC107] font-semibold flex items-center gap-2 group">
                  Detaylar
                  <div className="w-16 h-0.5 bg-yellow-200 group-hover:bg-[#FFC107] transition-colors"></div>
                </a>
              </div>
            </div>
          </div>
          
          {/* Additional Services Grid */}
          <div className="grid md:grid-cols-4 gap-6 mt-12">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 group animate-fade-in-up animate-delay-600">
              <div className="w-12 h-12 bg-[#007BFF] rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-[#0E0E0E] mb-2">Gümrükleme İşlemleri</h3>
              <p className="text-[#63666D] text-sm">Profesyonel gümrük danışmanlığı</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 group animate-fade-in-up animate-delay-800">
              <div className="w-12 h-12 bg-[#28A745] rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1V8a1 1 0 00-1-1h-3z" />
                </svg>
              </div>
              <h3 className="font-semibold text-[#0E0E0E] mb-2">Proje Taşımacılığı</h3>
              <p className="text-[#63666D] text-sm">Özel proje taşımacılığı çözümleri</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 group animate-fade-in-up animate-delay-1000">
              <div className="w-12 h-12 bg-[#FFC107] rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1V8a1 1 0 00-1-1h-3z" />
                </svg>
              </div>
              <h3 className="font-semibold text-[#0E0E0E] mb-2">Liman Hizmetleri</h3>
              <p className="text-[#63666D] text-sm">Kapsamlı liman hizmetleri</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 group animate-fade-in-up animate-delay-1200">
              <div className="w-12 h-12 bg-[#6C757D] rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1V8a1 1 0 00-1-1h-3z" />
                </svg>
              </div>
              <h3 className="font-semibold text-[#0E0E0E] mb-2">ADR Taşıma</h3>
              <p className="text-[#63666D] text-sm">Tehlikeli madde taşımacılığı</p>
            </div>
          </div>
          
          {/* Bottom Text */}
          <div className="text-center mt-12 animate-fade-in-up animate-delay-1400">
            <p className="text-[rgba(99,102,109,0.68)] text-[14px] leading-[20px]">
              Bu sadece buzdağının görünen kısmı. Hizmetlerimizi sizin{" "}
              <a href="#contact" className="text-[#007BFF] underline">özel ihtiyaçlarınıza</a> göre şekillendiriyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats-section" className="py-20 px-4 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in-up">
              <div className="text-6xl lg:text-[150px] font-semibold text-[#007BFF] border-2 border-[#007BFF] rounded-lg p-8 mb-4 leading-[135px]">
                <span data-target="99">0</span>%
              </div>
              <div className="bg-gray-50 px-8 py-4 rounded-lg">
                <p className="text-[#007BFF] font-medium text-[17px] leading-[20px]">Müşteri Memnuniyeti</p>
              </div>
            </div>
            
            <div className="text-center animate-fade-in-up animate-delay-200">
              <div className="text-6xl lg:text-[150px] font-semibold text-[#28A745] border-2 border-[#28A745] rounded-lg p-8 mb-4 leading-[135px]">
                <span data-target="15">0</span>+
              </div>
              <div className="bg-gray-50 px-8 py-4 rounded-lg">
                <p className="text-[#28A745] font-medium text-[17px] leading-[20px]">Yıllık Deneyim</p>
              </div>
            </div>
            
            <div className="text-center animate-fade-in-up animate-delay-400">
              <div className="text-6xl lg:text-[150px] font-semibold text-[#FFC107] border-2 border-[#FFC107] rounded-lg p-8 mb-4 leading-[135px]">
                <span data-target="500">0</span>+
              </div>
              <div className="bg-gray-50 px-8 py-4 rounded-lg">
                <p className="text-[#FFC107] font-medium text-[17px] leading-[20px]">Başarılı Proje</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 lg:px-20 bg-[#F8F9FA] relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white text-[#007BFF] px-4 py-2 rounded-lg mb-6">
                <div className="w-2 h-2 bg-[#007BFF] rounded-full"></div>
                <span className="font-semibold text-[15px]">Hakkımızda</span>
              </div>
              <h2 className="text-4xl lg:text-[44px] font-semibold text-[#0E0E0E] mb-6 leading-[53px] tracking-[-1px]">
                Lojistik teknolojisinin geleceği bizimle başlıyor.
              </h2>
              <p className="text-[#63666D] mb-6 text-[17px] leading-[26px]">
                Tüm Marmara Limanları ve İzmir - Mersin limanlarında uzun yıllardan bugüne taşımacılık ve gümrük hizmetleri konusundaki tecrübemizi, ÇNR lojistik adı altında, profesyonel kadromuz ve modern teknolojimizle sizlere sunuyoruz.
              </p>
              <a href="#contact" className="bg-[#007BFF] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0056B3] transition-colors">
                Daha Fazla Bilgi
              </a>
            </div>
            
            <div className="relative animate-fade-in-up animate-delay-400">
              <div className="w-full h-96 relative rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/IMG-20230928-WA0025.jpg"
                  alt="Şirket Görseli"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-[#007BFF]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#E3F2FD] text-[#007BFF] px-4 py-2 rounded-lg mb-6">
              <div className="w-2 h-2 bg-[#007BFF] rounded-full"></div>
              <span className="font-semibold text-[15px]">Galeri</span>
            </div>
            <h2 className="text-4xl lg:text-[44px] font-semibold text-[#0E0E0E] mb-6 leading-[53px] tracking-[-1px]">
              Çalışmalarımızdan Kareler
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group animate-fade-in-up">
              <Image
                src="/IMG-20230928-WA0019.jpg"
                alt="Lojistik Hizmetleri 1"
                fill
                className="object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="text-white">
                  <h3 className="font-semibold text-lg">İhracat Konteyner</h3>
                  <p className="text-sm">Güvenilir taşımacılık</p>
                </div>
              </div>
            </div>
            
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group animate-fade-in-up animate-delay-200">
              <Image
                src="/IMG-20230928-WA0020.jpg"
                alt="Lojistik Hizmetleri 2"
                fill
                className="object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="text-white">
                  <h3 className="font-semibold text-lg">İthalat Konteyner</h3>
                  <p className="text-sm">Profesyonel hizmet</p>
                </div>
              </div>
            </div>
            
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group animate-fade-in-up animate-delay-400">
              <Image
                src="/IMG-20230928-WA0021.jpg"
                alt="Lojistik Hizmetleri 3"
                fill
                className="object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="text-white">
                  <h3 className="font-semibold text-lg">Ağır Yük Taşımacılığı</h3>
                  <p className="text-sm">Özel ekipmanlar</p>
                </div>
              </div>
            </div>
            
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group animate-fade-in-up animate-delay-600">
              <Image
                src="/IMG-20230928-WA0022.jpg"
                alt="Lojistik Hizmetleri 4"
                fill
                className="object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="text-white">
                  <h3 className="font-semibold text-lg">Gümrükleme İşlemleri</h3>
                  <p className="text-sm">Uzman danışmanlık</p>
                </div>
              </div>
            </div>
            
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group animate-fade-in-up animate-delay-800">
              <Image
                src="/IMG-20230928-WA0023.jpg"
                alt="Lojistik Hizmetleri 5"
                fill
                className="object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="text-white">
                  <h3 className="font-semibold text-lg">Proje Taşımacılığı</h3>
                  <p className="text-sm">Özel çözümler</p>
                </div>
              </div>
            </div>
            
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group animate-fade-in-up animate-delay-1000">
          <Image
                src="/IMG-20230928-WA0024.jpg"
                alt="Lojistik Hizmetleri 6"
                fill
                className="object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="text-white">
                  <h3 className="font-semibold text-lg">Liman Hizmetleri</h3>
                  <p className="text-sm">Kapsamlı destek</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 lg:px-20 bg-gradient-to-r from-[#007BFF] to-[#0056B3] relative overflow-hidden animate-fade-in-up animate-delay-200">
        <div className="absolute inset-0 animate-gradient">
          <div className="absolute right-0 top-0 w-1/2 h-full bg-[#28A745] opacity-20"></div>
          <div className="absolute left-0 top-0 w-1/3 h-full bg-[#FFC107] opacity-20"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h2 className="text-4xl lg:text-[50px] font-semibold text-white mb-8 leading-[55px] tracking-[-1px] animate-fade-in-up">
            Harekete geçmeye hazır mısınız? Hemen teklif alın.
          </h2>
          <a href="#contact" className="group relative inline-flex items-center justify-center px-8 py-4 bg-[#FFC107] text-[#007BFF] font-semibold rounded-lg hover:bg-[#E0A800] transition-colors duration-300 transform hover:-translate-y-1 hover:shadow-xl animate-fade-in-up animate-delay-200">
            <span className="relative z-10">Teklif Al</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#E0A800] to-[#FFC107] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 lg:px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#E3F2FD] text-[#007BFF] px-4 py-2 rounded-lg mb-6">
              <div className="w-2 h-2 bg-[#007BFF] rounded-full"></div>
              <span className="font-semibold text-[15px]">İletişim</span>
            </div>
            <h2 className="text-4xl lg:text-[44px] font-semibold text-[#0E0E0E] mb-6 leading-[53px] tracking-[-1px]">
              Bizimle İletişime Geçin
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8 animate-fade-in-up">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-semibold text-[#0E0E0E] mb-6">İletişim Bilgileri</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#007BFF] rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#0E0E0E] mb-1">Adres</h4>
                      <p className="text-[#63666D]">Yakuplu Mah. Başkent Cd. Altındaş Apt. No:51 / 8<br />Beylikdüzü / İstanbul</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#28A745] rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 001.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#0E0E0E] mb-1">Telefon</h4>
                      <a href="tel:+902128757983" className="text-[#007BFF] hover:underline">+90 (212) 875 79 83</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#FFC107] rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#0E0E0E] mb-1">E-posta</h4>
                      <a href="mailto:ahmet@cnrlojistikvedepolama.com" className="text-[#007BFF] hover:underline">ahmet@cnrlojistikvedepolama.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#25D366] rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#0E0E0E] mb-1">WhatsApp</h4>
                      <a href="https://wa.me/902128757983" className="text-[#25D366] hover:underline">WhatsApp İçin Tıklayın</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg animate-fade-in-up animate-delay-200">
              <h3 className="text-2xl font-semibold text-[#0E0E0E] mb-6">Mesaj Gönderin</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-[#0E0E0E] mb-2">Ad Soyad</label>
                  <input type="text" id="fullName" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#007BFF] focus:border-transparent transition-all duration-300" placeholder="Adınız Soyadınız" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#0E0E0E] mb-2">E-posta</label>
                  <input type="email" id="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#007BFF] focus:border-transparent transition-all duration-300" placeholder="e-posta@example.com" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#0E0E0E] mb-2">Telefon</label>
                  <input type="tel" id="phone" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#007BFF] focus:border-transparent transition-all duration-300" placeholder="+90 (XXX) XXX XX XX" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#0E0E0E] mb-2">Mesaj</label>
                  <textarea id="message" rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#007BFF] focus:border-transparent transition-all duration-300" placeholder="Mesajınızı buraya yazın..."></textarea>
                </div>
                <button type="submit" className="w-full bg-[#007BFF] text-white py-3 rounded-lg font-semibold hover:bg-[#0056B3] transition-colors duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-xl">
                  Mesaj Gönder
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0E0E0E] text-white py-20 px-4 lg:px-20 animate-fade-in-up animate-delay-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <Image
                  src="/CNR-LOGO-White.png" // Assuming a white version of your logo exists for dark backgrounds
                  alt="ÇNR Lojistik Logo"
                  width={160}
                  height={50}
                  className="h-12 w-auto"
                />
              </div>
              <p className="text-gray-300 mb-8 max-w-md text-[17px] leading-[26px]">
                Modern lojistik çözümleri için güvenilir partneriniz. Taşımacılık ve depolama hizmetlerinde uzman ekibimizle yanınızdayız.
              </p>
              
              <div className="space-y-4">
                <div>
                  <p className="text-gray-300 text-sm mb-1">E-posta</p>
                  <a href="mailto:ahmet@cnrlojistikvedepolama.com" className="text-gray-400 underline">ahmet@cnrlojistikvedepolama.com</a>
                </div>
                <div>
                  <p className="text-gray-300 text-sm mb-1">Telefon</p>
                  <a href="tel:+902128757983" className="text-gray-400 underline">+90 (212) 875 79 83</a>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Navigasyon</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Anasayfa</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">Hakkımızda</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Hizmetlerimiz</a></li>
                <li><a href="#gallery" className="text-gray-400 hover:text-white transition-colors">Galeri</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">İletişim</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Hizmet Alanları</h3>
              <ul className="space-y-2">
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">İhracat Konteyner</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">İthalat Konteyner</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Ağır Yük Taşımacılığı</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Gümrükleme</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">ADR Taşıma</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              Copyright © 2024 Tüm hakları saklıdır. | ÇNR Lojistik ve Depolama
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:-translate-y-1">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:-translate-y-1">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.367-12 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.89-5.367 11.89-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:-translate-y-1">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71-.02-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:-translate-y-1">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:-translate-y-1">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.89-5.367 11.89-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Live Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#128C7E] transition-colors cursor-pointer">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden fixed inset-0 bg-black bg-opacity-50 z-40 ${isMobileMenuOpen ? '' : 'hidden'}`} id="mobile-menu-overlay" onClick={() => closeMobileMenu()}>
        <div className="bg-white w-64 h-full p-6" onClick={(e) => e.stopPropagation()}>
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#007BFF] rounded"></div>
              <span className="text-xl font-bold text-black">ÇNR Lojistik</span>
            </div>
            <button className="text-gray-600" onClick={() => closeMobileMenu()}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="space-y-4">
            <a href="#" className="block text-[#007BFF] font-semibold py-2">Anasayfa</a>
            <a href="#about" className="block text-gray-600 font-semibold py-2">Hakkımızda</a>
            <a href="#services" className="block text-gray-600 font-semibold py-2">Hizmetlerimiz</a>
            <a href="#gallery" className="block text-gray-600 font-semibold py-2">Galeri</a>
            <a href="#contact" className="block text-gray-600 font-semibold py-2">İletişim</a>
            <a href="#contact" className="block bg-[#FFC107] text-white px-4 py-2 rounded-lg font-semibold text-center mt-4">
              Teklif Al
            </a>
          </nav>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden fixed top-6 right-4 z-50 bg-white p-2 rounded-lg shadow-lg" onClick={() => openMobileMenu()}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  );
}