import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '../../components/Header';
import { serviceSchema } from '../../../lib/advanced-schema';
import { getPageMetadata } from '../../../lib/seo';

interface ServicePageProps {
  params: {
    slug: string;
  };
}

const services = {
  'ihracat-konteyner-tasimaciligi': {
    title: 'İhracat Konteyner Taşımacılığı',
    description: 'İhracat süreçlerinizde güvenilir ve hızlı konteyner taşımacılığı hizmeti sunuyoruz. 20ft ve 40ft konteynerlerle dünya çapında güvenli taşımacılık.',
    content: `
      <p>ÇNR Lojistik olarak ihracat konteyner taşımacılığında 15 yıllık deneyimimizle, müşterilerimize en güvenilir ve hızlı hizmeti sunuyoruz. İhracat süreçlerinizde karşılaşabileceğiniz tüm lojistik zorlukları çözüyoruz.</p>
      
      <h3>Hizmet Kapsamımız</h3>
      <p>İhracat konteyner taşımacılığı hizmetimiz kapsamında:</p>
      <ul>
        <li><strong>20ft ve 40ft Konteyner Taşımacılığı:</strong> Standart ve yüksek kübaj konteynerlerle taşımacılık</li>
        <li><strong>Liman-Havalimanı Arası Lojistik:</strong> Entegre taşımacılık çözümleri</li>
        <li><strong>Gümrük İşlemleri Takibi:</strong> İhracat gümrük işlemlerinin profesyonel takibi</li>
        <li><strong>Sigorta ve Dokümantasyon:</strong> Kapsamlı sigorta ve gerekli belgelerin hazırlanması</li>
        <li><strong>7/24 Takip Sistemi:</strong> Yükünüzün anlık takibi ve raporlama</li>
      </ul>
      
      <h3>Neden ÇNR Lojistik?</h3>
      <p>İhracat konteyner taşımacılığında tercih edilme nedenlerimiz:</p>
      <ul>
        <li>15 yıllık sektör deneyimi</li>
        <li>Dünya çapında güvenilir partner ağı</li>
        <li>Modern teknoloji ile takip sistemi</li>
        <li>Rekabetçi fiyatlandırma</li>
        <li>Müşteri memnuniyeti odaklı hizmet anlayışı</li>
      </ul>
      
      <h3>İhracat Konteyner Taşımacılığı Süreci</h3>
      <p>İhracat konteyner taşımacılığı sürecimiz:</p>
      <ol>
        <li><strong>Planlama:</strong> Yükünüzün özelliklerine göre en uygun rota ve konteyner seçimi</li>
        <li><strong>Yükleme:</strong> Güvenli yükleme ve konteyner mühürleme işlemleri</li>
        <li><strong>Taşımacılık:</strong> Belirlenen rota üzerinden güvenli taşımacılık</li>
        <li><strong>Gümrük İşlemleri:</strong> İhracat gümrük işlemlerinin takibi</li>
        <li><strong>Teslimat:</strong> Hedef noktada güvenli teslimat</li>
      </ol>
    `,
    features: [
      '20ft ve 40ft konteyner taşımacılığı',
      'Liman-havalimanı arası lojistik',
      'Gümrük işlemleri takibi',
      'Sigorta ve dokümantasyon',
      '7/24 takip sistemi'
    ],
    benefits: [
      'Güvenilir ve hızlı taşımacılık',
      'Rekabetçi fiyatlandırma',
      'Profesyonel müşteri hizmetleri',
      'Modern takip teknolojisi',
      'Sigorta kapsamında taşımacılık'
    ]
  },
  'ithalat-konteyner-tasimaciligi': {
    title: 'İthalat Konteyner Taşımacılığı',
    description: 'İthalat süreçlerinizde profesyonel konteyner taşımacılığı çözümleri sunuyoruz. Gümrük giriş işlemlerinden depolamaya kadar kapsamlı hizmet.',
    content: `
      <p>İthalat konteyner taşımacılığında uzman ekibimizle, ithalat süreçlerinizin her aşamasında yanınızdayız. Gümrük giriş işlemlerinden depolama ve dağıtıma kadar kapsamlı çözümler sunuyoruz.</p>
      
      <h3>Hizmet Kapsamımız</h3>
      <p>İthalat konteyner taşımacılığı hizmetimiz:</p>
      <ul>
        <li><strong>İthalat Konteyner Taşımacılığı:</strong> Dünya çapından Türkiye'ye konteyner taşımacılığı</li>
        <li><strong>Gümrük Giriş İşlemleri:</strong> İthalat gümrük işlemlerinin profesyonel takibi</li>
        <li><strong>Depolama ve Dağıtım:</strong> Güvenli depolama ve dağıtım hizmetleri</li>
        <li><strong>Nakliye Organizasyonu:</strong> Entegre nakliye çözümleri</li>
        <li><strong>Maliyet Optimizasyonu:</strong> En uygun maliyetle taşımacılık</li>
      </ul>
      
      <h3>İthalat Süreci</h3>
      <p>İthalat konteyner taşımacılığı sürecimiz:</p>
      <ol>
        <li><strong>Planlama:</strong> İthalat sürecinin detaylı planlanması</li>
        <li><strong>Taşımacılık:</strong> Kaynak ülkeden Türkiye'ye taşımacılık</li>
        <li><strong>Gümrük İşlemleri:</strong> İthalat gümrük işlemlerinin takibi</li>
        <li><strong>Depolama:</strong> Güvenli depolama hizmetleri</li>
        <li><strong>Dağıtım:</strong> Hedef noktalara dağıtım</li>
      </ol>
    `,
    features: [
      'İthalat konteyner taşımacılığı',
      'Gümrük giriş işlemleri',
      'Depolama ve dağıtım',
      'Nakliye organizasyonu',
      'Maliyet optimizasyonu'
    ],
    benefits: [
      'Hızlı ve güvenli ithalat',
      'Gümrük işlemlerinde uzman destek',
      'Depolama çözümleri',
      'Maliyet optimizasyonu',
      '7/24 müşteri desteği'
    ]
  },
  'agir-yuk-tasimaciligi': {
    title: 'Ağır Yük Taşımacılığı',
    description: 'Özel ekipmanlarla ağır yük taşımacılığında uzman hizmet sunuyoruz. Endüstriyel projeler için güvenli taşımacılık çözümleri.',
    content: `
      <p>Ağır yük taşımacılığında özel ekipmanlarımız ve uzman personelimizle, en zorlu taşımacılık işlerini güvenle gerçekleştiriyoruz. Endüstriyel projeler için kapsamlı çözümler sunuyoruz.</p>
      
      <h3>Hizmet Kapsamımız</h3>
      <p>Ağır yük taşımacılığı hizmetimiz:</p>
      <ul>
        <li><strong>Özel Nakliye Araçları:</strong> Ağır yükler için özel tasarlanmış araçlar</li>
        <li><strong>Ağır Yük Planlaması:</strong> Detaylı planlama ve risk analizi</li>
        <li><strong>Güvenlik Önlemleri:</strong> Kapsamlı güvenlik protokolleri</li>
        <li><strong>Rota Optimizasyonu:</strong> En uygun rota planlaması</li>
        <li><strong>Proje Bazlı Çözümler:</strong> Özel projeler için özelleştirilmiş çözümler</li>
      </ul>
      
      <h3>Taşıyabileceğimiz Ağır Yükler</h3>
      <ul>
        <li>Endüstriyel makineler</li>
        <li>Büyük boyutlu ekipmanlar</li>
        <li>Proje yükleri</li>
        <li>Özel yapılar</li>
        <li>Hassas ekipmanlar</li>
      </ul>
    `,
    features: [
      'Özel nakliye araçları',
      'Ağır yük planlaması',
      'Güvenlik önlemleri',
      'Rota optimizasyonu',
      'Proje bazlı çözümler'
    ],
    benefits: [
      'Özel ekipmanlarla taşımacılık',
      'Güvenli ve profesyonel hizmet',
      'Proje bazlı çözümler',
      'Uzman personel',
      'Kapsamlı sigorta'
    ]
  },
  'gumrukleme-islemleri': {
    title: 'Gümrükleme İşlemleri',
    description: 'Profesyonel gümrük danışmanlığı ve işlem takibi hizmeti sunuyoruz. İthalat-ihracat süreçlerinizde uzman desteği.',
    content: `
      <p>Gümrükleme işlemlerinde 15 yıllık deneyimimizle, müşterilerimize en profesyonel hizmeti sunuyoruz. İthalat-ihracat süreçlerinizde karşılaşabileceğiniz tüm gümrük işlemlerini takip ediyoruz.</p>
      
      <h3>Hizmet Kapsamımız</h3>
      <p>Gümrükleme işlemleri hizmetimiz:</p>
      <ul>
        <li><strong>Gümrük Beyannameleri:</strong> İthalat-ihracat gümrük beyannamelerinin hazırlanması</li>
        <li><strong>Dokümantasyon Hazırlığı:</strong> Gerekli tüm belgelerin hazırlanması</li>
        <li><strong>Vergi Hesaplamaları:</strong> Gümrük vergileri ve KDV hesaplamaları</li>
        <li><strong>İthalat-İhracat Rejimleri:</strong> Farklı rejimlerde işlem takibi</li>
        <li><strong>Mevzuat Danışmanlığı:</strong> Gümrük mevzuatı konusunda danışmanlık</li>
      </ul>
      
      <h3>Gümrük İşlemleri Süreci</h3>
      <ol>
        <li><strong>Belge Hazırlığı:</strong> Gerekli belgelerin toplanması ve hazırlanması</li>
        <li><strong>Beyanname Hazırlığı:</strong> Gümrük beyannamesinin hazırlanması</li>
        <li><strong>Gümrük İşlemleri:</strong> Gümrük idaresinde işlemlerin takibi</li>
        <li><strong>Vergi Ödemeleri:</strong> Gümrük vergilerinin ödenmesi</li>
        <li><strong>Teslim İşlemleri:</strong> Yükün teslim alınması</li>
      </ol>
    `,
    features: [
      'Gümrük beyannameleri',
      'Dokümantasyon hazırlığı',
      'Vergi hesaplamaları',
      'İthalat-ihracat rejimleri',
      'Mevzuat danışmanlığı'
    ],
    benefits: [
      'Uzman gümrük danışmanlığı',
      'Hızlı işlem takibi',
      'Mevzuat güncellemeleri',
      'Maliyet optimizasyonu',
      '7/24 destek'
    ]
  },
  'proje-tasimaciligi': {
    title: 'Proje Taşımacılığı',
    description: 'Özel proje taşımacılığı çözümleri sunuyoruz. Endüstriyel projeler için kapsamlı lojistik hizmetleri.',
    content: `
      <p>Proje taşımacılığında uzman ekibimizle, en karmaşık projeleri başarıyla tamamlıyoruz. Endüstriyel projeler için özelleştirilmiş çözümler sunuyoruz.</p>
      
      <h3>Hizmet Kapsamımız</h3>
      <p>Proje taşımacılığı hizmetimiz:</p>
      <ul>
        <li><strong>Endüstriyel Projeler:</strong> Büyük ölçekli endüstriyel projeler</li>
        <li><strong>Özel Yük Planlaması:</strong> Projeye özel detaylı planlama</li>
        <li><strong>Çok Modlu Taşımacılık:</strong> Karayolu, denizyolu, havayolu entegrasyonu</li>
        <li><strong>Proje Yönetimi:</strong> Kapsamlı proje yönetimi hizmetleri</li>
        <li><strong>Risk Analizi:</strong> Detaylı risk analizi ve önlemler</li>
      </ul>
      
      <h3>Proje Taşımacılığı Süreci</h3>
      <ol>
        <li><strong>Proje Analizi:</strong> Projenin detaylı analizi ve planlama</li>
        <li><strong>Rota Planlaması:</strong> En uygun rota ve mod seçimi</li>
        <li><strong>Yük Organizasyonu:</strong> Yüklerin organize edilmesi</li>
        <li><strong>Taşımacılık:</strong> Güvenli taşımacılık süreci</li>
        <li><strong>Proje Tamamlama:</strong> Projenin başarıyla tamamlanması</li>
      </ol>
    `,
    features: [
      'Endüstriyel projeler',
      'Özel yük planlaması',
      'Çok modlu taşımacılık',
      'Proje yönetimi',
      'Risk analizi'
    ],
    benefits: [
      'Özelleştirilmiş çözümler',
      'Uzman proje yönetimi',
      'Çok modlu taşımacılık',
      'Risk yönetimi',
      'Proje takibi'
    ]
  },
  'adr-tasima': {
    title: 'ADR Taşıma',
    description: 'Tehlikeli madde taşımacılığı (ADR) hizmeti sunuyoruz. Sertifikalı araçlar ve uzman personelle güvenli taşımacılık.',
    content: `
      <p>ADR (Avrupa Tehlikeli Madde Taşımacılığı) sertifikalı araçlarımız ve uzman personelimizle, tehlikeli maddelerin güvenle taşınmasını sağlıyoruz. Tüm güvenlik protokollerine uygun hizmet sunuyoruz.</p>
      
      <h3>Hizmet Kapsamımız</h3>
      <p>ADR taşıma hizmetimiz:</p>
      <ul>
        <li><strong>ADR Sertifikalı Araçlar:</strong> Tehlikeli madde taşımacılığı için özel araçlar</li>
        <li><strong>Tehlikeli Madde Sınıflandırması:</strong> Yükün sınıflandırılması ve etiketleme</li>
        <li><strong>Güvenlik Protokolleri:</strong> Kapsamlı güvenlik önlemleri</li>
        <li><strong>Özel Ambalajlama:</strong> Tehlikeli maddeler için özel ambalajlama</li>
        <li><strong>Acil Durum Planları:</strong> Acil durumlara karşı hazırlık</li>
      </ul>
      
      <h3>Taşıyabileceğimiz Tehlikeli Maddeler</h3>
      <ul>
        <li>Yanıcı sıvılar</li>
        <li>Yanıcı gazlar</li>
        <li>Oksitleyici maddeler</li>
        <li>Zehirli maddeler</li>
        <li>Korozif maddeler</li>
      </ul>
    `,
    features: [
      'ADR sertifikalı araçlar',
      'Tehlikeli madde sınıflandırması',
      'Güvenlik protokolleri',
      'Özel ambalajlama',
      'Acil durum planları'
    ],
    benefits: [
      'Sertifikalı araçlarla taşımacılık',
      'Güvenli ve profesyonel hizmet',
      'Uzman personel',
      'Kapsamlı sigorta',
      '7/24 acil durum desteği'
    ]
  }
};

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = services[params.slug as keyof typeof services];
  
  if (!service) {
    return {
      title: 'Hizmet Bulunamadı',
    };
  }

  return {
    ...getPageMetadata({
      title: service.title,
      description: service.description,
      url: `https://www.cnrlojistikvedepolama.com/hizmetler/${params.slug}`,
    }),
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = services[params.slug as keyof typeof services];
  
  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema(service.title, service.description, `https://www.cnrlojistikvedepolama.com/hizmetler/${params.slug}`)) }}
      />

      {/* Breadcrumb */}
      <section className="bg-gray-50 py-4 px-4 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-600 hover:text-[#202953]">Anasayfa</Link>
            <span className="text-gray-400">/</span>
            <Link href="/hizmetler" className="text-gray-600 hover:text-[#202953]">Hizmetlerimiz</Link>
            <span className="text-gray-400">/</span>
            <span className="text-[#202953] font-semibold">{service.title}</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#202953] to-[#1a1f3a] text-white py-20 px-4 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            {service.title}
          </h1>
          <p className="text-xl lg:text-2xl mb-8 text-gray-300 max-w-4xl">
            {service.description}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-4 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div 
                className="prose prose-lg max-w-none text-gray-700"
                dangerouslySetInnerHTML={{ __html: service.content }}
              />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-2xl p-8 sticky top-24">
                <h3 className="text-2xl font-bold text-[#202953] mb-6">Hizmet Özellikleri</h3>
                
                <ul className="space-y-4 mb-8">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="border-t pt-6">
                  <h4 className="text-lg font-semibold text-[#202953] mb-4">Avantajlarımız</h4>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-4 h-4 text-blue-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-600 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 space-y-4">
                  <Link 
                    href="/#contact"
                    className="block w-full bg-[#202953] text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-[#1a1f3a] transition-colors duration-300"
                  >
                    Teklif Al
                  </Link>
                  <a 
                    href="tel:+905303732930"
                    className="block w-full border-2 border-[#202953] text-[#202953] text-center px-6 py-3 rounded-lg font-semibold hover:bg-[#202953] hover:text-white transition-colors duration-300"
                  >
                    Hemen Ara
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 px-4 lg:px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#202953] text-center mb-12">
            Diğer Hizmetlerimiz
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(services)
              .filter(([slug]) => slug !== params.slug)
              .slice(0, 3)
              .map(([slug, serviceData]) => (
                <Link 
                  key={slug}
                  href={`/hizmetler/${slug}`}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 group"
                >
                  <h3 className="text-xl font-semibold text-[#202953] mb-3 group-hover:text-[#1a1f3a] transition-colors">
                    {serviceData.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{serviceData.description}</p>
                  <div className="flex items-center text-[#202953] font-semibold group-hover:text-[#1a1f3a] transition-colors">
                    Detayları Gör
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export async function generateStaticParams() {
  return Object.keys(services).map((slug) => ({
    slug,
  }));
}
