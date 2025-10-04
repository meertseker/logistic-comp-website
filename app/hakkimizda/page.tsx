import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/Header';
import { getPageMetadata } from '../../lib/seo';

export const metadata: Metadata = {
  ...getPageMetadata({
    title: "Hakkımızda - ÇNR Lojistik ve Depolama",
    description: "ÇNR Lojistik olarak 15 yıldır lojistik ve taşımacılık sektöründe hizmet veriyoruz. Modern teknoloji ve deneyimli ekibimizle müşteri memnuniyetini ön planda tutuyoruz.",
    url: 'https://www.cnrlojistikvedepolama.com/hakkimizda',
  }),
};

const teamMembers = [
  {
    name: "Ahmet Yılmaz",
    position: "Genel Müdür",
    experience: "20 yıl",
    image: "/team/ahmet-yilmaz.jpg",
    description: "Lojistik sektöründe 20 yıllık deneyime sahip. Uluslararası taşımacılık konusunda uzman."
  },
  {
    name: "Fatma Demir",
    position: "Operasyon Müdürü",
    experience: "15 yıl",
    image: "/team/fatma-demir.jpg",
    description: "Operasyon yönetimi ve proje koordinasyonu konusunda uzman. 15 yıllık sektör deneyimi."
  },
  {
    name: "Mehmet Kaya",
    position: "Gümrük Müdürü",
    experience: "18 yıl",
    image: "/team/mehmet-kaya.jpg",
    description: "Gümrük işlemleri ve mevzuat konusunda uzman. Uluslararası ticaret hukuku alanında deneyimli."
  },
  {
    name: "Ayşe Özkan",
    position: "Müşteri İlişkileri Müdürü",
    experience: "12 yıl",
    image: "/team/ayse-ozkan.jpg",
    description: "Müşteri memnuniyeti ve hizmet kalitesi konusunda uzman. 12 yıllık müşteri deneyimi."
  }
];

const achievements = [
  {
    number: "15+",
    title: "Yıllık Deneyim",
    description: "Lojistik sektöründe 15 yıllık köklü geçmiş"
  },
  {
    number: "5000+",
    title: "Mutlu Müşteri",
    description: "Binlerce müşteriye güvenilir hizmet"
  },
  {
    number: "50+",
    title: "Ülke",
    description: "Dünya çapında geniş hizmet ağı"
  },
  {
    number: "24/7",
    title: "Destek",
    description: "Kesintisiz müşteri hizmetleri"
  }
];

const values = [
  {
    title: "Güvenilirlik",
    description: "Müşterilerimizin güvenini kazanmak için dürüstlük ve şeffaflık ilkelerimizle hareket ediyoruz.",
    icon: "🛡️"
  },
  {
    title: "Kalite",
    description: "Hizmet kalitemizi sürekli geliştirerek, sektörde öncü konumumuzu koruyoruz.",
    icon: "⭐"
  },
  {
    title: "İnovasyon",
    description: "Modern teknoloji ve yenilikçi çözümlerle lojistik hizmetlerimizi sürekli geliştiriyoruz.",
    icon: "🚀"
  },
  {
    title: "Müşteri Odaklılık",
    description: "Müşteri memnuniyetini ön planda tutarak, onların ihtiyaçlarına özel çözümler sunuyoruz.",
    icon: "👥"
  }
];

export default function HakkimizdaPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Breadcrumb */}
      <section className="bg-gray-50 py-4 px-4 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-600 hover:text-[#202953]">Anasayfa</Link>
            <span className="text-gray-400">/</span>
            <span className="text-[#202953] font-semibold">Hakkımızda</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#202953] to-[#1a1f3a] text-white py-20 px-4 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Hakkımızda
          </h1>
          <p className="text-xl lg:text-2xl mb-8 text-gray-300 max-w-4xl mx-auto">
            15 yıllık deneyimimizle lojistik ve taşımacılık sektöründe güvenilir çözümler sunuyoruz
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 px-4 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#202953] mb-6">
                ÇNR Lojistik Hikayesi
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  2009 yılında kurulan ÇNR Lojistik, lojistik ve taşımacılık sektöründe 
                  müşteri memnuniyetini ön planda tutan bir anlayışla hizmet vermeye başladı. 
                  Küçük bir ekip ve sınırlı kaynaklarla başlayan yolculuğumuz, bugün 
                  sektörde öncü konumda olan bir şirkete dönüştü.
                </p>
                <p>
                  İlk yıllarımızda yerel taşımacılık hizmetleriyle başlayarak, 
                  müşteri portföyümüzü genişlettik. 2015 yılında uluslararası 
                  taşımacılık hizmetlerine geçiş yaparak, hizmet yelpazemizi 
                  önemli ölçüde genişlettik.
                </p>
                <p>
                  Bugün, modern teknoloji altyapısı, uzman personel kadromuz ve 
                  geniş araç filosumuzla, müşterilerimize en kaliteli lojistik 
                  hizmetlerini sunmaktayız. Sektördeki 15 yıllık deneyimimiz, 
                  bize güvenilir ve profesyonel hizmet sunma konusunda büyük avantaj sağlıyor.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/IMG-20230928-WA0026.jpg"
                alt="ÇNR Lojistik - Şirket Hikayesi ve Modern Lojistik Hizmetleri"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 px-4 lg:px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#202953] mb-6">
              Rakamlarla ÇNR Lojistik
            </h2>
            <p className="text-xl text-gray-600">
              Başarılarımızı rakamlarla keşfedin
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl font-bold text-[#202953] mb-4">
                  {achievement.number}
                </div>
                <h3 className="text-xl font-semibold text-[#202953] mb-2">
                  {achievement.title}
                </h3>
                <p className="text-gray-600">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#202953] mb-6">
              Değerlerimiz
            </h2>
            <p className="text-xl text-gray-600">
              Çalışma prensiplerimiz ve değerlerimiz
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-6xl mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#202953] mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 lg:px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#202953] mb-6">
              Ekibimiz
            </h2>
            <p className="text-xl text-gray-600">
              Deneyimli ve uzman kadromuz
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-[#202953] to-[#1a1f3a] rounded-full flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-[#202953] mb-2">
                  {member.name}
                </h3>
                <p className="text-[#202953] font-medium mb-2">
                  {member.position}
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  {member.experience} deneyim
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-[#202953] to-[#1a1f3a] text-white rounded-2xl p-8">
              <h3 className="text-3xl font-bold mb-6">Misyonumuz</h3>
              <p className="text-lg leading-relaxed">
                Müşterilerimizin lojistik ihtiyaçlarını en etkin ve güvenilir şekilde 
                karşılayarak, onların işlerini büyütmelerine katkı sağlamak. 
                Modern teknoloji ve deneyimli ekibimizle, sektörde öncü konumumuzu 
                sürdürmek ve müşteri memnuniyetini her zaman ön planda tutmak.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-600 to-green-800 text-white rounded-2xl p-8">
              <h3 className="text-3xl font-bold mb-6">Vizyonumuz</h3>
              <p className="text-lg leading-relaxed">
                Türkiye'nin en güvenilir ve yenilikçi lojistik şirketi olmak. 
                Sektörde teknoloji kullanımında öncü olarak, müşterilerimize 
                en kaliteli hizmeti sunmak ve uluslararası arenada da 
                tanınan bir marka haline gelmek.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 lg:px-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#202953] mb-6">
            Bizimle Çalışmaya Hazır mısınız?
          </h2>
          <p className="text-xl mb-8 text-gray-600">
            Deneyimli ekibimizle tanışın ve lojistik ihtiyaçlarınız için en uygun çözümü bulun
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/#contact"
              className="bg-[#202953] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#1a1f3a] transition-colors duration-300"
            >
              İletişime Geç
            </Link>
            <Link 
              href="/hizmetler"
              className="border-2 border-[#202953] text-[#202953] px-8 py-4 rounded-lg font-semibold hover:bg-[#202953] hover:text-white transition-colors duration-300"
            >
              Hizmetlerimizi İncele
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
