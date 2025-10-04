import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import { getPageMetadata } from '../../lib/seo';

export const metadata: Metadata = {
  ...getPageMetadata({
    title: "Hizmetlerimiz - Lojistik ve Taşımacılık Çözümleri",
    description: "ÇNR Lojistik olarak ihracat-ithalat konteyner taşımacılığı, ağır yük taşımacılığı, gümrükleme işlemleri, ADR taşıma ve daha fazla profesyonel lojistik hizmeti sunuyoruz.",
    url: 'https://www.cnrlojistikvedepolama.com/hizmetler',
  }),
};

const services = [
  {
    slug: 'ihracat-konteyner-tasimaciligi',
    title: 'İhracat Konteyner Taşımacılığı',
    description: 'İhracat süreçlerinizde güvenilir ve hızlı konteyner taşımacılığı hizmeti',
    image: '/IMG-20230928-WA0027.jpg',
    features: [
      '20ft ve 40ft konteyner taşımacılığı',
      'Liman-havalimanı arası lojistik',
      'Gümrük işlemleri takibi',
      'Sigorta ve dokümantasyon',
      '7/24 takip sistemi'
    ]
  },
  {
    slug: 'ithalat-konteyner-tasimaciligi',
    title: 'İthalat Konteyner Taşımacılığı',
    description: 'İthalat süreçlerinizde profesyonel konteyner taşımacılığı çözümleri',
    image: '/IMG-20230928-WA0028.jpg',
    features: [
      'İthalat konteyner taşımacılığı',
      'Gümrük giriş işlemleri',
      'Depolama ve dağıtım',
      'Nakliye organizasyonu',
      'Maliyet optimizasyonu'
    ]
  },
  {
    slug: 'agir-yuk-tasimaciligi',
    title: 'Ağır Yük Taşımacılığı',
    description: 'Özel ekipmanlarla ağır yük taşımacılığında uzman hizmet',
    image: '/IMG-20230928-WA0019.jpg',
    features: [
      'Özel nakliye araçları',
      'Ağır yük planlaması',
      'Güvenlik önlemleri',
      'Rota optimizasyonu',
      'Proje bazlı çözümler'
    ]
  },
  {
    slug: 'gumrukleme-islemleri',
    title: 'Gümrükleme İşlemleri',
    description: 'Profesyonel gümrük danışmanlığı ve işlem takibi',
    image: '/IMG-20230928-WA0020.jpg',
    features: [
      'Gümrük beyannameleri',
      'Dokümantasyon hazırlığı',
      'Vergi hesaplamaları',
      'İthalat-ihracat rejimleri',
      'Mevzuat danışmanlığı'
    ]
  },
  {
    slug: 'proje-tasimaciligi',
    title: 'Proje Taşımacılığı',
    description: 'Özel proje taşımacılığı çözümleri',
    image: '/IMG-20230928-WA0021.jpg',
    features: [
      'Endüstriyel projeler',
      'Özel yük planlaması',
      'Çok modlu taşımacılık',
      'Proje yönetimi',
      'Risk analizi'
    ]
  },
  {
    slug: 'agir-nakliye-islemleri',
    title: 'Ağır Nakliye İşlemleri',
    description: 'Ağır ve hacimli yüklerin güvenli taşınması',
    image: '/IMG-20230928-WA0022.jpg',
    features: [
      'Özel nakliye araçları',
      'Yük güvenliği',
      'Rota planlaması',
      'İzin ve belgeler',
      '7/24 destek'
    ]
  },
  {
    slug: 'liman-hizmetleri',
    title: 'Liman Hizmetleri',
    description: 'Liman operasyonlarında profesyonel hizmet',
    image: '/IMG-20230928-WA0023.jpg',
    features: [
      'Liman operasyonları',
      'Konteyner işlemleri',
      'Depolama hizmetleri',
      'Dokümantasyon',
      'Lojistik koordinasyon'
    ]
  },
  {
    slug: 'motat-tasimaciligi',
    title: 'Motat Taşımacılığı',
    description: 'Motorlu araç taşımacılığında uzman hizmet',
    image: '/IMG-20230928-WA0024.jpg',
    features: [
      'Araç taşımacılığı',
      'Özel taşıyıcılar',
      'Güvenli nakliye',
      'Sigorta kapsamı',
      'Teslimat takibi'
    ]
  },
  {
    slug: 'plastik-atik-tasimaciligi',
    title: 'Plastik Atık Taşımacılığı',
    description: 'Çevre dostu plastik atık taşımacılığı',
    image: '/IMG-20230928-WA0025.jpg',
    features: [
      'Atık taşımacılığı',
      'Çevre mevzuatı',
      'Özel konteynerler',
      'Geri dönüşüm',
      'Sertifikalı işlemler'
    ]
  },
  {
    slug: 'adr-tasima',
    title: 'ADR Taşıma',
    description: 'Tehlikeli madde taşımacılığı (ADR)',
    image: '/IMG-20230928-WA0026.jpg',
    features: [
      'ADR sertifikalı araçlar',
      'Tehlikeli madde sınıflandırması',
      'Güvenlik protokolleri',
      'Özel ambalajlama',
      'Acil durum planları'
    ]
  },
  {
    slug: 'kimyasal-yanici-tehlikeli-madde-tasimaciligi',
    title: 'Kimyasal Yanıcı Tehlikeli Madde Taşımacılığı',
    description: 'Kimyasal ve yanıcı maddelerin güvenli taşınması',
    image: '/IMG-20230928-WA0027.jpg',
    features: [
      'Kimyasal madde taşımacılığı',
      'Yanıcı madde protokolleri',
      'Özel güvenlik önlemleri',
      'Sertifikalı personel',
      'Risk değerlendirmesi'
    ]
  },
  {
    slug: 'iso-tank-tasimaciligi',
    title: 'ISO Tank Taşımacılığı',
    description: 'Sıvı kimyasal madde taşımacılığı',
    image: '/IMG-20230928-WA0028.jpg',
    features: [
      'ISO tank konteynerleri',
      'Sıvı madde taşımacılığı',
      'Özel temizlik',
      'Sızdırmazlık testleri',
      'Uzman operatörler'
    ]
  }
];

export default function HizmetlerPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#202953] to-[#1a1f3a] text-white py-20 px-4 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Profesyonel Lojistik Hizmetleri
          </h1>
          <p className="text-xl lg:text-2xl mb-8 text-gray-300 max-w-4xl mx-auto">
            A'dan Z'ye taşımacılık ve gümrük hizmetlerinde standartları belirliyoruz. 
            Modern teknoloji ve deneyimli ekibimizle yanınızdayız.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 lg:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#202953] mb-6">
              Hizmetlerimiz
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Lojistik ihtiyaçlarınız için kapsamlı çözümler sunuyoruz
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={service.slug} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                <div className="h-64 relative">
                  <Image
                    src={service.image}
                    alt={`${service.title} - ÇNR Lojistik`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#202953]/80 to-[#1a1f3a]/80"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold">{index + 1}</span>
                      </div>
                      <h3 className="text-lg font-semibold px-4">{service.title}</h3>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    href={`/hizmetler/${service.slug}`}
                    className="inline-flex items-center justify-center w-full bg-[#202953] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1a1f3a] transition-colors duration-300 group"
                  >
                    Detayları Gör
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 lg:px-20 bg-[#202953] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Size Özel Lojistik Çözümü İstiyorsunuz?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Uzman ekibimiz sizin için en uygun lojistik çözümünü hazırlayacak
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/#contact"
              className="bg-white text-[#202953] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Teklif Al
            </Link>
            <a 
              href="tel:+905303732930"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#202953] transition-colors duration-300"
            >
              Hemen Ara
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
