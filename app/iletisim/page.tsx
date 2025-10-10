import { Metadata } from 'next';
import Link from 'next/link';
import Header from '../components/Header';
import ContactForm from "../components/ContactForm";
import ClientOnly from "../components/ClientOnly";
import { getPageMetadata } from '../../lib/seo';
import { contactPageSchema } from '../../lib/advanced-schema';

export const metadata: Metadata = {
  ...getPageMetadata({
    title: "İletişim - ÇNR Lojistik ve Depolama",
    description: "ÇNR Lojistik ile iletişime geçin. Telefon, e-posta, adres bilgilerimiz ve online iletişim formu. 7/24 müşteri hizmetleri.",
    url: 'https://www.cnrlojistikvedepolama.com/iletisim',
  }),
};

const contactInfo = [
  {
    title: "Adres",
    icon: "📍",
    details: [
      "BARBAROS HAYRETTİN PAŞA Mah.",
      "1997. SK PIKET LIFE Cad. No:12/97",
      "Esenyurt / İstanbul 34515"
    ]
  },
  {
    title: "Telefon",
    icon: "📞",
    details: [
      "+90 (530) 373 29 30",
      "7/24 Acil Destek Hattı"
    ]
  },
  {
    title: "E-posta",
    icon: "✉️",
    details: [
      "ahmet@cnrlojistikvedepolama.com"
      
    ]
  },
  {
    title: "Çalışma Saatleri",
    icon: "🕒",
    details: [
      "Pazartesi - Cuma: 08:00 - 18:00",
      "Cumartesi: 09:00 - 15:00",
      "Pazar: Kapalı (Acil durumlar hariç)"
    ]
  }
];

// removed services array; no longer needed by the form

export default function IletisimPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />

      {/* Breadcrumb */}
      <section className="bg-gray-50 py-4 px-4 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-600 hover:text-[#202953]">Anasayfa</Link>
            <span className="text-gray-400">/</span>
            <span className="text-[#202953] font-semibold">İletişim</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#202953] to-[#1a1f3a] text-white py-20 px-4 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            İletişim
          </h1>
          <p className="text-xl lg:text-2xl mb-8 text-gray-300 max-w-4xl mx-auto">
            Bizimle iletişime geçin, lojistik ihtiyaçlarınız için en uygun çözümü birlikte bulalım
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 px-4 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="text-4xl mb-4">{info.icon}</div>
                <h3 className="text-xl font-semibold text-[#202953] mb-4">
                  {info.title}
                </h3>
                <div className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 px-4 lg:px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-[#202953] mb-6">
                Bize Mesaj Gönderin
              </h2>
              <ClientOnly>
                <ContactForm className="space-y-6" />
              </ClientOnly>
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              {/* Map */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-[#202953] mb-6">
                  Konumumuz
                </h3>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d663.4721064911428!2d28.640606061887645!3d41.0178385563277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b55f0f364e7f5f%3A0xe8e2b96b6e5a9590!2sPhuket%20Life!5e0!3m2!1str!2suk!4v1760118675304!5m2!1str!2suk"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                  loading="lazy"
                  title="ÇNR Lojistik konumu"
                  referrerPolicy="strict-origin-when-cross-origin"
                    className="w-full h-full"
                  />
                </div>
                <div className="mt-4 text-sm text-gray-600">
                  <p><strong>Adres:</strong> BARBAROS HAYRETTİN PAŞA Mah. 1997. SK PIKET LIFE Cad. No:12/97, Esenyurt/İstanbul</p>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-[#202953] mb-6">
                  Hızlı İletişim
                </h3>
                <div className="space-y-4">
                  <a 
                    href="tel:+905303732930"
                    className="flex items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
                  >
                    <span className="text-2xl mr-4">📞</span>
                    <div>
                      <p className="font-semibold text-[#202953]">Hemen Ara</p>
                      <p className="text-sm text-gray-600">+90 (530) 373 29 30</p>
                    </div>
                  </a>
                  
                  <a 
                    href="mailto:ahmet@cnrlojistikvedepolama.com"
                    className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                  >
                    <span className="text-2xl mr-4">✉️</span>
                    <div>
                      <p className="font-semibold text-[#202953]">E-posta Gönder</p>
                      <p className="text-sm text-gray-600">info@cnrlojistikvedepolama.com</p>
                    </div>
                  </a>
                  
                  <a 
                    href="https://wa.me/905303732930"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
                  >
                    <span className="text-2xl mr-4">💬</span>
                    <div>
                      <p className="font-semibold text-[#202953]">WhatsApp</p>
                      <p className="text-sm text-gray-600">WhatsApp ile mesaj gönder</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#202953] mb-6">
              Sıkça Sorulan Sorular
            </h2>
            <p className="text-xl text-gray-600">
              Merak ettiğiniz konular hakkında detaylı bilgiler
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-[#202953] mb-4">
                Ne kadar sürede teklif alabilirim?
              </h3>
              <p className="text-gray-600">
                Teklif talebinizi aldıktan sonra 24 saat içinde detaylı teklifimizi size ulaştırıyoruz. 
                Acil durumlar için daha hızlı yanıt verebiliyoruz.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-[#202953] mb-4">
                Hangi bölgelerde hizmet veriyorsunuz?
              </h3>
              <p className="text-gray-600">
                Türkiye genelinde hizmet vermekteyiz. Özellikle İstanbul, Ankara, İzmir, 
                Bursa gibi büyük şehirlerde yoğun operasyonlarımız bulunmaktadır.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-[#202953] mb-4">
                Sigorta kapsamınız nasıl?
              </h3>
              <p className="text-gray-600">
                Tüm taşımacılık işlemlerimiz kapsamlı sigorta ile korunmaktadır. 
                Sigorta detayları ve kapsamı hakkında detaylı bilgi alabilirsiniz.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-[#202953] mb-4">
                Yükümü nasıl takip edebilirim?
              </h3>
              <p className="text-gray-600">
                Online takip sistemimiz üzerinden yükünüzün anlık konumunu takip edebilir, 
                SMS ve e-posta bildirimleri alabilirsiniz.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/sss"
              className="inline-flex items-center bg-[#202953] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#1a1f3a] transition-colors duration-300"
            >
              Tüm Soruları Gör
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
