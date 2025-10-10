import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import StatsAnimator from "./components/StatsAnimator";
import AnalyticsButton from "./components/AnalyticsButton";
import ContactForm from "./components/ContactForm";
import ClientOnly from "./components/ClientOnly";
import { localBusinessSchema, websiteSchema } from "../lib/advanced-schema";

export default function Home() {
  return (
    <main className="min-h-screen bg-white animate-fade-in-up">
      <Header />
      <StatsAnimator />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      {/* Hero Section */}
      <section className="relative px-4 py-20 lg:px-20 lg:py-32 min-h-screen bg-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -left-1/4 -top-1/4 w-3/4 h-3/4 bg-gradient-to-br from-[#0066FF] to-[#1A00E2] transform rotate-12 opacity-10"></div>
          <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-[#0066FF] rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-[#1A00E2] rounded-full opacity-15"></div>
          <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-[#28A745] rounded-full opacity-25"></div>
        </div>
        
        <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          <div className="space-y-10">
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-[80px] font-bold leading-[90px] text-[#0E0E0E] tracking-tight">
                Lojistik Dünyasını{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#202953] to-[#1A00E2]">
                  Yükseltiyoruz
                </span>
              </h1>
              <p className="text-xl text-[#63666D] max-w-lg font-medium leading-relaxed">
                A&apos;dan Z&apos;ye taşımacılık ve gümrük hizmetlerinde standartları belirliyoruz. 
                Modern teknoloji ve deneyimli ekibimizle yanınızdayız.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Link href="/iletisim" className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#202953] to-[#1A00E2] text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
                <span className="relative z-10">Teklif Al</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#1A00E2] to-[#202953] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              
              <AnalyticsButton
                href="tel:+902128757983"
                trackingType="phone"
                className="group inline-flex items-center gap-4 px-8 py-4 bg-white border-2 border-[#1A00E2] text-[#1A00E2] font-semibold rounded-full hover:bg-[#1A00E2] hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="w-12 h-12 bg-[#1A00E2] rounded-full flex items-center justify-center group-hover:bg-white transition-colors duration-300">
                  <svg className="w-6 h-6 text-white group-hover:text-[#1A00E2] transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 001.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <span>+90 (212) 875 79 83</span>
              </AnalyticsButton>
            </div>
            
            <div className="flex items-center gap-8 pt-8">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#66B2B2] rounded-full"></div>
                <span className="text-sm text-[#63666D] font-medium">15+ Yıl Deneyim</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#66B2B2] rounded-full"></div>
                <span className="text-sm text-[#63666D] font-medium">500+ Başarılı Proje</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#66B2B2] rounded-full"></div>
                <span className="text-sm text-[#63666D] font-medium">%99 Müşteri Memnuniyeti</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/IMG-20230928-WA0026.jpg"
                alt="ÇNR Lojistik - Modern Lojistik Hizmetleri ve Güvenilir Taşımacılık Çözümleri"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#202953]/20 to-[#1A00E2]/20"></div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 mx-auto">
                    <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                      <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1V8a1 1 0 00-1-1h-3z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold mb-2">Modern Lojistik</h2>
                  <p className="text-white/90">Güvenilir Taşımacılık Çözümleri</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 lg:px-20 bg-gray-50 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#E3F2FD] text-[#202953] px-4 py-2 rounded-lg mb-6">
              <div className="w-2 h-2 bg-[#202953] rounded-full"></div>
              <span className="font-semibold text-[15px]">Hizmetlerimiz</span>
            </div>
            <h2 className="text-4xl lg:text-[44px] font-semibold text-[#0E0E0E] mb-6 leading-[53px] tracking-[-1px]">
              Kargo taşımacılığından depolamaya kadar, benzersiz destek sunuyoruz.
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <article className="bg-white rounded-2xl overflow-hidden shadow-lg relative hover:shadow-xl transition-shadow duration-300 group">
              <div className="h-64 relative">
                <Image
                  src="/IMG-20230928-WA0027.jpg"
                  alt="İhracat Konteyner Taşımacılığı - ÇNR Lojistik"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#202953]/80 to-[#1A232B]/80 group-hover:from-[#1A232B]/80 group-hover:to-[#202953]/80 transition-all duration-300"></div>
                <div className="absolute top-4 right-4 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-[#202953]" fill="currentColor" viewBox="0 0 20 20">
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
                <AnalyticsButton
                  href="/hizmetler/ihracat-konteyner-tasimaciligi"
                  trackingType="service"
                  serviceName="İhracat Konteyner Taşımacılığı"
                  className="text-[#202953] font-semibold flex items-center gap-2 group"
                >
                  Detaylar
                  <div className="w-16 h-0.5 bg-blue-200 group-hover:bg-[#202953] transition-colors"></div>
                </AnalyticsButton>
              </div>
            </article>
            
            <article className="bg-white rounded-2xl overflow-hidden shadow-lg relative hover:shadow-xl transition-shadow duration-300 group">
              <div className="h-64 relative">
                <Image
                  src="/IMG-20230928-WA0028.jpg"
                  alt="İthalat Konteyner Taşımacılığı - ÇNR Lojistik"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#66B2B2]/80 to-[#4682B4]/80 group-hover:from-[#4682B4]/80 group-hover:to-[#66B2B2]/80 transition-all duration-300"></div>
                <div className="absolute top-4 right-4 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-[#66B2B2]" fill="currentColor" viewBox="0 0 20 20">
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
                <AnalyticsButton
                  href="/hizmetler/ithalat-konteyner-tasimaciligi"
                  trackingType="service"
                  serviceName="İthalat Konteyner Taşımacılığı"
                  className="text-[#66B2B2] font-semibold flex items-center gap-2 group"
                >
                  Detaylar
                  <div className="w-16 h-0.5 bg-green-200 group-hover:bg-[#66B2B2] transition-colors"></div>
                </AnalyticsButton>
              </div>
            </article>
            
            <article className="bg-white rounded-2xl overflow-hidden shadow-lg relative hover:shadow-xl transition-shadow duration-300 group">
              <div className="h-64 relative">
                <Image
                  src="/IMG-20230928-WA0022.jpg"
                  alt="Ağır Yük Taşımacılığı - ÇNR Lojistik"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#FFA07A]/80 to-[#CD7F32]/80 group-hover:from-[#CD7F32]/80 group-hover:to-[#FFA07A]/80 transition-all duration-300"></div>
                <div className="absolute top-4 right-4 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-[#FFA07A]" fill="currentColor" viewBox="0 0 20 20">
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
                <AnalyticsButton
                  href="/hizmetler/agir-yuk-tasimaciligi"
                  trackingType="service"
                  serviceName="Ağır Yük Taşımacılığı"
                  className="text-[#FFA07A] font-semibold flex items-center gap-2 group"
                >
                  Detaylar
                  <div className="w-16 h-0.5 bg-yellow-200 group-hover:bg-[#FFA07A] transition-colors"></div>
                </AnalyticsButton>
              </div>
            </article>
          </div>
          
          {/* Additional Services Grid - SEO Optimized */}
          <div className="grid md:grid-cols-4 gap-6 mt-12">
            <article className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <div className="w-12 h-12 bg-[#202953] rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-[#0E0E0E] mb-2">Gümrükleme İşlemleri</h3>
              <p className="text-[#63666D] text-sm mb-4">Profesyonel gümrük danışmanlığı ve işlem takibi</p>
              <AnalyticsButton
                href="/hizmetler/gumrukleme-islemleri"
                trackingType="service"
                serviceName="Gümrükleme İşlemleri"
                className="text-[#202953] font-semibold text-sm hover:underline"
              >
                Detaylar →
              </AnalyticsButton>
            </article>
            
            <article className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <div className="w-12 h-12 bg-[#66B2B2] rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1V8a1 1 0 00-1-1h-3z" />
                </svg>
              </div>
              <h3 className="font-semibold text-[#0E0E0E] mb-2">Proje Taşımacılığı</h3>
              <p className="text-[#63666D] text-sm mb-4">Özel proje taşımacılığı çözümleri</p>
              <AnalyticsButton
                href="/hizmetler/proje-tasimaciligi"
                trackingType="service"
                serviceName="Proje Taşımacılığı"
                className="text-[#66B2B2] font-semibold text-sm hover:underline"
              >
                Detaylar →
              </AnalyticsButton>
            </article>
            
            <article className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <div className="w-12 h-12 bg-[#FFA07A] rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1V8a1 1 0 00-1-1h-3z" />
                </svg>
              </div>
              <h3 className="font-semibold text-[#0E0E0E] mb-2">Ağır Nakliye İşlemleri</h3>
              <p className="text-[#63666D] text-sm mb-4">Özel ekipmanlarla ağır nakliye hizmetleri</p>
              <AnalyticsButton
                href="/hizmetler/agir-nakliye-islemleri"
                trackingType="service"
                serviceName="Ağır Nakliye İşlemleri"
                className="text-[#FFA07A] font-semibold text-sm hover:underline"
              >
                Detaylar →
              </AnalyticsButton>
            </article>
            
            <article className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <div className="w-12 h-12 bg-[#6C757D] rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1V8a1 1 0 00-1-1h-3z" />
                </svg>
              </div>
              <h3 className="font-semibold text-[#0E0E0E] mb-2">Liman Hizmetleri</h3>
              <p className="text-[#63666D] text-sm mb-4">Kapsamlı liman hizmetleri ve operasyon</p>
              <AnalyticsButton
                href="/hizmetler/liman-hizmetleri"
                trackingType="service"
                serviceName="Liman Hizmetleri"
                className="text-[#6C757D] font-semibold text-sm hover:underline"
              >
                Detaylar →
              </AnalyticsButton>
            </article>
          </div>
          
          {/* Second Row of Additional Services */}
          <div className="grid md:grid-cols-4 gap-6 mt-6">
            <article className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <div className="w-12 h-12 bg-[#28A745] rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1V8a1 1 0 00-1-1h-3z" />
                </svg>
              </div>
              <h3 className="font-semibold text-[#0E0E0E] mb-2">Motat Taşımacılığı</h3>
              <p className="text-[#63666D] text-sm mb-4">Motat taşımacılığı uzman hizmetleri</p>
              <AnalyticsButton
                href="/hizmetler/motat-tasimaciligi"
                trackingType="service"
                serviceName="Motat Taşımacılığı"
                className="text-[#28A745] font-semibold text-sm hover:underline"
              >
                Detaylar →
              </AnalyticsButton>
            </article>
            
            <article className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <div className="w-12 h-12 bg-[#17A2B8] rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1V8a1 1 0 00-1-1h-3z" />
                </svg>
              </div>
              <h3 className="font-semibold text-[#0E0E0E] mb-2">Plastik Atık Taşımacılığı</h3>
              <p className="text-[#63666D] text-sm mb-4">Çevre dostu plastik atık taşımacılığı</p>
              <AnalyticsButton
                href="/hizmetler/plastik-atik-tasimaciligi"
                trackingType="service"
                serviceName="Plastik Atık Taşımacılığı"
                className="text-[#17A2B8] font-semibold text-sm hover:underline"
              >
                Detaylar →
              </AnalyticsButton>
            </article>
            
            <article className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <div className="w-12 h-12 bg-[#DC3545] rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-[#0E0E0E] mb-2">ADR Taşıma</h3>
              <p className="text-[#63666D] text-sm mb-4">Tehlikeli madde taşımacılığı (ADR)</p>
              <AnalyticsButton
                href="/hizmetler/adr-tasima"
                trackingType="service"
                serviceName="ADR Taşıma"
                className="text-[#DC3545] font-semibold text-sm hover:underline"
              >
                Detaylar →
              </AnalyticsButton>
            </article>
            
            <article className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <div className="w-12 h-12 bg-[#FFC107] rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-[#0E0E0E] mb-2">Kimyasal Yanıcı Tehlikeli Madde Taşımacılığı</h3>
              <p className="text-[#63666D] text-sm mb-4">Güvenli kimyasal madde taşımacılığı</p>
              <AnalyticsButton
                href="/hizmetler/kimyasal-yanici-tehlikeli-madde-tasimaciligi"
                trackingType="service"
                serviceName="Kimyasal Yanıcı Tehlikeli Madde Taşımacılığı"
                className="text-[#FFC107] font-semibold text-sm hover:underline"
              >
                Detaylar →
              </AnalyticsButton>
            </article>
          </div>
          
          {/* Third Row - ISO Tank */}
          <div className="grid md:grid-cols-4 gap-6 mt-6">
            <article className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <div className="w-12 h-12 bg-[#6F42C1] rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1V8a1 1 0 00-1-1h-3z" />
                </svg>
              </div>
              <h3 className="font-semibold text-[#0E0E0E] mb-2">ISO Tank Taşımacılığı</h3>
              <p className="text-[#63666D] text-sm mb-4">Sıvı kimyasal madde taşımacılığı</p>
              <AnalyticsButton
                href="/hizmetler/iso-tank-tasimaciligi"
                trackingType="service"
                serviceName="ISO Tank Taşımacılığı"
                className="text-[#6F42C1] font-semibold text-sm hover:underline"
              >
                Detaylar →
              </AnalyticsButton>
            </article>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats-section" className="py-20 px-4 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-6xl lg:text-[150px] font-semibold text-[#202953] border-2 border-[#202953] rounded-lg p-8 mb-4 leading-[135px]">
                <span data-target="99">0</span>%
              </div>
              <div className="bg-gray-50 px-8 py-4 rounded-lg">
                <p className="text-[#202953] font-medium text-[17px] leading-[20px]">Müşteri Memnuniyeti</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-6xl lg:text-[150px] font-semibold text-[#66B2B2] border-2 border-[#66B2B2] rounded-lg p-8 mb-4 leading-[135px]">
                <span data-target="15">0</span>+
              </div>
              <div className="bg-gray-50 px-8 py-4 rounded-lg">
                <p className="text-[#66B2B2] font-medium text-[17px] leading-[20px]">Yıllık Deneyim</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-6xl lg:text-[150px] font-semibold text-[#FFA07A] border-2 border-[#FFA07A] rounded-lg p-8 mb-4 leading-[135px]">
                <span data-target="500">0</span>+
              </div>
              <div className="bg-gray-50 px-8 py-4 rounded-lg">
                <p className="text-[#FFA07A] font-medium text-[17px] leading-[20px]">Başarılı Proje</p>
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
              <div className="inline-flex items-center gap-2 bg-white text-[#202953] px-4 py-2 rounded-lg mb-6">
                <div className="w-2 h-2 bg-[#202953] rounded-full"></div>
                <span className="font-semibold text-[15px]">Hakkımızda</span>
              </div>
              <h2 className="text-4xl lg:text-[44px] font-semibold text-[#0E0E0E] mb-6 leading-[53px] tracking-[-1px]">
                Lojistik teknolojisinin geleceği bizimle başlıyor.
              </h2>
              <p className="text-[#63666D] mb-6 text-[17px] leading-[26px]">
                Tüm Marmara Limanları ve İzmir - Mersin limanlarında uzun yıllardan bugüne taşımacılık ve gümrük hizmetleri konusundaki tecrübemizi, ÇNR lojistik adı altında, profesyonel kadromuz ve modern teknolojimizle sizlere sunuyoruz.
              </p>
              <a href="/iletisim" className="bg-[#202953] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1A232B] transition-colors">
                Daha Fazla Bilgi
              </a>
            </div>
            
            <div className="relative">
              <div className="w-full h-96 relative rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/IMG-20230928-WA0025.jpg"
                  alt="ÇNR Lojistik Şirket Görseli - Profesyonel Lojistik Hizmetleri"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 lg:px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#E3F2FD] text-[#202953] px-4 py-2 rounded-lg mb-6">
              <div className="w-2 h-2 bg-[#202953] rounded-full"></div>
              <span className="font-semibold text-[15px]">İletişim</span>
            </div>
            <h2 className="text-4xl lg:text-[44px] font-semibold text-[#0E0E0E] mb-6 leading-[53px] tracking-[-1px]">
              Bizimle İletişime Geçin
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-semibold text-[#0E0E0E] mb-6">İletişim Bilgileri</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#202953] rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#0E0E0E] mb-1">Adres</h4>
                      <p className="text-[#63666D]">BARBAROS HAYRETTİN PAŞA Mah. 1997. SK PIKET LIFE Cad. No:12/97<br />34515 Esenyurt/İstanbul</p>
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
                      <a href="tel:+905303732930" className="text-[#202953] hover:underline">+90 (530) 373 29 30</a>
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
                      <a href="mailto:ahmet@cnrlojistikvedepolama.com" className="text-[#202953] hover:underline">ahmet@cnrlojistikvedepolama.com</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold text-[#0E0E0E] mb-6">Mesaj Gönderin</h3>
              <ClientOnly>
                <ContactForm />
              </ClientOnly>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0E0E0E] text-white py-20 px-4 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <Image
                  src="/cnr-logo.png"
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
                  <a href="tel:+905303732930" className="text-gray-400 underline">+90 (530) 373 29 30</a>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Navigasyon</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Anasayfa</Link></li>
                <li><Link href="/hakkimizda" className="text-gray-400 hover:text-white transition-colors">Hakkımızda</Link></li>
                <li><Link href="/hizmetler" className="text-gray-400 hover:text-white transition-colors">Hizmetlerimiz</Link></li>
                <li><Link href="/sss" className="text-gray-400 hover:text-white transition-colors">SSS</Link></li>
                <li><a href="/iletisim" className="text-gray-400 hover:text-white transition-colors">İletişim</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Hizmet Alanları</h3>
              <ul className="space-y-2">
                <li><Link href="/hizmetler/ihracat-konteyner-tasimaciligi" className="text-gray-400 hover:text-white transition-colors">İhracat Konteyner</Link></li>
                <li><Link href="/hizmetler/ithalat-konteyner-tasimaciligi" className="text-gray-400 hover:text-white transition-colors">İthalat Konteyner</Link></li>
                <li><Link href="/hizmetler/agir-yuk-tasimaciligi" className="text-gray-400 hover:text-white transition-colors">Ağır Yük Taşımacılığı</Link></li>
                <li><Link href="/hizmetler/gumrukleme-islemleri" className="text-gray-400 hover:text-white transition-colors">Gümrükleme</Link></li>
                <li><Link href="/hizmetler/adr-tasima" className="text-gray-400 hover:text-white transition-colors">ADR Taşıma</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              Copyright © 2024 Tüm hakları saklıdır. | ÇNR LOJİSTİK VE DEPOLAMA LİMİTED ŞİRKETİ
            </p>
          </div>
        </div>
      </footer>

      {/* Client-side interactive components */}
      
    </main>
  );
}