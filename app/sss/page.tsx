import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/Header';
import { getPageMetadata } from '../../lib/seo';
import { breadcrumbSchema } from '../../lib/advanced-schema';
import { faqSchema } from '../../lib/advanced-schema';

export const metadata: Metadata = {
  ...getPageMetadata({
    title: "Sıkça Sorulan Sorular - ÇNR Lojistik",
    description: "Lojistik ve taşımacılık hizmetlerimiz hakkında sıkça sorulan sorular ve cevapları. ÇNR Lojistik olarak merak ettiğiniz tüm konularda detaylı bilgiler.",
    url: 'https://www.cnrlojistikvedepolama.com/sss',
  }),
};

const faqData = [
  {
    category: "Genel Bilgiler",
    questions: [
      {
        question: "ÇNR Lojistik ne kadar süredir hizmet veriyor?",
        answer: "ÇNR Lojistik olarak 15 yıldır lojistik ve taşımacılık sektöründe hizmet vermekteyiz. Bu süre zarfında binlerce müşterimize güvenilir hizmet sunmuş bulunmaktayız."
      },
      {
        question: "Hangi şehirlerde hizmet veriyorsunuz?",
        answer: "Türkiye genelinde hizmet vermekteyiz. Özellikle İstanbul, Ankara, İzmir, Bursa, Antalya gibi büyük şehirlerde yoğun olarak faaliyet gösteriyoruz. Ayrıca uluslararası taşımacılık hizmetlerimiz de mevcuttur."
      },
      {
        question: "Hizmet verdiğiniz sektörler nelerdir?",
        answer: "Otomotiv, tekstil, gıda, kimya, inşaat, elektronik, makine imalatı gibi birçok sektöre hizmet vermekteyiz. Her sektörün özel ihtiyaçlarına uygun çözümler sunuyoruz."
      },
      {
        question: "7/24 hizmet veriyor musunuz?",
        answer: "Evet, acil durumlar ve özel projeler için 7/24 hizmet vermekteyiz. Müşteri hizmetlerimiz ve operasyon ekibimiz her zaman ulaşılabilir durumdadır."
      }
    ]
  },
  {
    category: "Taşımacılık Hizmetleri",
    questions: [
      {
        question: "Konteyner taşımacılığında hangi boyutlarda konteyner kullanıyorsunuz?",
        answer: "20ft ve 40ft standart konteynerlerin yanı sıra, 40ft HC (High Cube), 45ft konteynerler de kullanmaktayız. Ayrıca özel projeler için açık üstlü, platform konteynerler de mevcuttur."
      },
      {
        question: "Ağır yük taşımacılığında hangi ağırlıklara kadar hizmet veriyorsunuz?",
        answer: "Özel araçlarımızla 100 tona kadar ağır yük taşımacılığı yapabilmekteyiz. Daha ağır yükler için özel proje planlaması yaparak en uygun çözümü sunuyoruz."
      },
      {
        question: "ADR taşımacılığında hangi sınıf tehlikeli maddeleri taşıyorsunuz?",
        answer: "ADR sınıflandırmasına göre 1-9 arası tüm sınıflardaki tehlikeli maddeleri taşıyabilmekteyiz. Sertifikalı araçlarımız ve uzman personelimizle güvenli taşımacılık sağlıyoruz."
      },
      {
        question: "Proje taşımacılığında hangi tür projeleri üstleniyorsunuz?",
        answer: "Endüstriyel tesis kurulumları, enerji projeleri, inşaat projeleri, makine montajları gibi büyük ölçekli projeleri üstlenmekteyiz. Her proje için özel planlama yapıyoruz."
      }
    ]
  },
  {
    category: "Gümrük İşlemleri",
    questions: [
      {
        question: "Gümrük işlemlerinde hangi belgeleri hazırlıyorsunuz?",
        answer: "Gümrük beyannameleri, ticari faturalar, menşe şehadetnameleri, sigorta poliçeleri, konşimentolar, paket listeleri gibi tüm gerekli belgeleri hazırlıyoruz."
      },
      {
        question: "İthalat-ihracat süreçleri ne kadar sürer?",
        answer: "Süreç, yükün türüne ve gümrük işlemlerinin karmaşıklığına göre değişir. Genellikle 1-3 gün arasında tamamlanır. Acil durumlar için hızlandırılmış işlemler de mevcuttur."
      },
      {
        question: "Gümrük vergilerini siz mi ödüyorsunuz?",
        answer: "Gümrük vergilerini müşteri adına ödeyebiliriz. Bu durumda önceden belirlenen komisyon oranı üzerinden hizmet bedeli alınır."
      },
      {
        question: "Hangi gümrük kapılarında işlem yapıyorsunuz?",
        answer: "Türkiye'deki tüm gümrük kapılarında işlem yapabilmekteyiz. Özellikle İstanbul, Mersin, İzmir, Samsun gibi büyük limanlarda yoğun olarak faaliyet gösteriyoruz."
      }
    ]
  },
  {
    category: "Fiyatlandırma ve Ödeme",
    questions: [
      {
        question: "Fiyatlandırma nasıl yapılıyor?",
        answer: "Fiyatlandırma, yükün ağırlığı, hacmi, mesafesi, özel gereksinimleri ve gümrük işlemlerinin karmaşıklığına göre belirlenir. Detaylı teklif için bizimle iletişime geçebilirsiniz."
      },
      {
        question: "Hangi ödeme yöntemlerini kabul ediyorsunuz?",
        answer: "Nakit, çek, havale, kredi kartı ve vadeli ödeme seçeneklerimiz mevcuttur. Kurumsal müşterilerimiz için özel ödeme planları da sunuyoruz."
      },
      {
        question: "Fiyat değişikliği olabilir mi?",
        answer: "Yükün özelliklerinde değişiklik olması durumunda fiyat revize edilebilir. Ancak bu durumda müşteriye önceden bilgi verilir ve onay alınır."
      },
      {
        question: "Sigorta kapsamı nasıl?",
        answer: "Tüm taşımacılık işlemlerimiz sigorta kapsamındadır. Sigorta bedeli, yükün değerine göre belirlenir ve poliçe detayları müşteriye sunulur."
      }
    ]
  },
  {
    category: "Takip ve İletişim",
    questions: [
      {
        question: "Yükümü nasıl takip edebilirim?",
        answer: "Online takip sistemimiz üzerinden yükünüzün anlık konumunu takip edebilirsiniz. Ayrıca SMS ve e-posta bildirimleri de alabilirsiniz."
      },
      {
        question: "Hangi iletişim kanallarını kullanabilirim?",
        answer: "Telefon, e-posta, WhatsApp, online form ve ofis ziyareti ile bizimle iletişime geçebilirsiniz. 7/24 müşteri hizmetlerimiz mevcuttur."
      },
      {
        question: "Acil durumlarda nasıl iletişim kurabilirim?",
        answer: "Acil durumlar için 7/24 acil hat numaramız mevcuttur. Ayrıca WhatsApp üzerinden de anlık destek alabilirsiniz."
      },
      {
        question: "Müşteri temsilcim kim?",
        answer: "Her müşterimize özel müşteri temsilcisi atanır. Temsilcinizin iletişim bilgileri işlem başlangıcında size verilir."
      }
    ]
  },
  {
    category: "Teknik Konular",
    questions: [
      {
        question: "Hangi araç türlerini kullanıyorsunuz?",
        answer: "Kamyon, tır, konteyner taşıyıcıları, özel nakliye araçları, ADR sertifikalı araçlar gibi geniş bir araç filosuna sahibiz."
      },
      {
        question: "Depolama hizmetiniz var mı?",
        answer: "Evet, İstanbul ve diğer büyük şehirlerde depolama tesislerimiz mevcuttur. Kısa ve uzun dönem depolama hizmetleri sunuyoruz."
      },
      {
        question: "Hangi limanlarla çalışıyorsunuz?",
        answer: "Türkiye'deki tüm büyük limanlarla çalışmaktayız. Özellikle İstanbul, Mersin, İzmir, Samsun limanlarında yoğun operasyonlarımız vardır."
      },
      {
        question: "Çevre dostu taşımacılık yapıyor musunuz?",
        answer: "Evet, çevre dostu araçlar kullanıyor ve karbon ayak izimizi minimize etmeye çalışıyoruz. Elektrikli ve hibrit araçlar da filomuzda yer almaktadır."
      }
    ]
  }
];

export default function SSSPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          ...breadcrumbSchema,
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Anasayfa", item: "https://www.cnrlojistikvedepolama.com" },
            { "@type": "ListItem", position: 2, name: "Sıkça Sorulan Sorular", item: "https://www.cnrlojistikvedepolama.com/sss" }
          ]
        }) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumb */}
      <section className="bg-gray-50 py-4 px-4 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-600 hover:text-[#202953]">Anasayfa</Link>
            <span className="text-gray-400">/</span>
            <span className="text-[#202953] font-semibold">Sıkça Sorulan Sorular</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#202953] to-[#1a1f3a] text-white py-20 px-4 lg:px-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/IMG-20230928-WA0025.jpg"
            alt="ÇNR Lojistik - SSS Arka Plan"
            fill
            className="object-cover opacity-20"
            sizes="100vw"
          />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Sıkça Sorulan Sorular
          </h1>
          <p className="text-xl lg:text-2xl mb-8 text-gray-300 max-w-4xl mx-auto">
            Lojistik ve taşımacılık hizmetlerimiz hakkında merak ettiğiniz her şeyi burada bulabilirsiniz.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 px-4 lg:px-20">
        <div className="max-w-6xl mx-auto">
          {faqData.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <h2 className="text-3xl font-bold text-[#202953] mb-8 text-center">
                {category.category}
              </h2>
              
              <div className="space-y-6">
                {category.questions.map((faq, faqIndex) => (
                  <div key={faqIndex} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                    <h3 className="text-xl font-semibold text-[#202953] mb-4 flex items-start">
                      <span className="bg-[#202953] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0 mt-1">
                        Q
                      </span>
                      {faq.question}
                    </h3>
                    <div className="ml-12">
                      <p className="text-gray-700 leading-relaxed flex items-start">
                        <span className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0 mt-1">
                          A
                        </span>
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4 lg:px-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#202953] mb-6">
            Aradığınız Cevabı Bulamadınız mı?
          </h2>
          <p className="text-xl mb-8 text-gray-600">
            Uzman ekibimiz size yardımcı olmaktan mutluluk duyar
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/#contact"
              className="bg-[#202953] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#1a1f3a] transition-colors duration-300"
            >
              İletişime Geç
            </Link>
            <a 
              href="tel:+905303732930"
              className="border-2 border-[#202953] text-[#202953] px-8 py-4 rounded-lg font-semibold hover:bg-[#202953] hover:text-white transition-colors duration-300"
            >
              Hemen Ara
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
