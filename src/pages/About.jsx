import React from 'react';
import { Award, Target, Users, Heart, CheckCircle2 } from 'lucide-react';
import { companyInfo, services } from '../data/mockData';
import * as LucideIcons from 'lucide-react';

export const About = () => {
  const values = [
    {
      icon: 'Heart',
      title: 'Müşteri Memnuniyeti',
      description: 'Müşterilerimizin beklentilerini aşmak, en önemli önceliğimizdir.'
    },
    {
      icon: 'Award',
      title: 'Kalite Standartları',
      description: 'Sadece sertifikalı, test edilmiş ve garantili ürünlerle çalışıyoruz.'
    },
    {
      icon: 'Users',
      title: 'Uzman Ekip',
      description: 'Alanında deneyimli, sertifikalı montaj ekibimizle hizmet veriyoruz.'
    },
    {
      icon: 'Target',
      title: 'Zamanında Teslimat',
      description: 'Belirlenen sürelerde eksiksiz ve kusursuz iş teslimi garantisi.'
    }
  ];


  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-slate-700 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Hakkımızda
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              {companyInfo.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6 text-center">
              Hikayemiz
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
              <p>
                <strong className="text-slate-800">Egefleks Yer ve Duvar Kaplamaları</strong>, yer ve duvar kaplamaları alanında estetik, kalite ve fonksiyonelliği bir araya getirerek yaşam alanlarına değer katmayı hedefleyen bir markadır. Ege Bölgesi’nde yıllara dayanan sektör deneyiminden aldığı güçle, modern tasarım anlayışını güvenilir hizmet yaklaşımıyla buluşturmaktadır.
              </p>
              <p>
                2018 yılında kurulan firmamız, kısa sürede sektörde güçlü bir konum elde ederek hem bireysel hem kurumsal projelerde tercih edilen çözüm ortağı haline gelmiştir.
              </p>
              <p>
                Ürün portföyümüzde; laminat ve lamine parke, PVC yer döşemeleri, karo halı, duvardan duvara halı, dekoratif ve sportif çim halılar, fuar ve podyum halıları, endüstriyel paspas çözümleri ile yerli ve ithal duvar kağıtları yer almaktadır. Tüm ürünlerimiz, yüksek kalite standartları doğrultusunda; toptan, perakende ve proje bazlı uygulamalarla sunulmaktadır.
              </p>
              <p>
                Firmamız, yalnızca ürün sunan bir yapıdan öte; müşterilerine uçtan uca çözüm sağlayan bir iş ortağı olmayı hedeflemektedir. Her projede detaylara verdiğimiz önem, kaliteye olan bağlılığımız ve sürdürülebilir memnuniyet anlayışımız ile fark yaratıyoruz.
              </p>
              <p>
                Geleceğe yönelik vizyonumuz doğrultusunda, sektörde yenilikçi yaklaşımımızı sürdürerek; yaşam alanlarına değer katan, güvenilir ve güçlü bir marka olmaya devam ediyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-12 text-center">
            Değerlerimiz
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = LucideIcons[value.icon] || LucideIcons.Box;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* Why Choose Us */}
      <section className="py-20 bg-slate-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">
            Neden Egefleks?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {services.map((service) => {
              const IconComponent = LucideIcons[service.icon] || LucideIcons.Box;
              return (
                <div
                  key={service.id}
                  className="flex items-start gap-4 p-6 bg-white/5 backdrop-blur-sm rounded-xl hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-8">
            Sertifikalar ve Garantiler
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            Tüm ürünlerimiz uluslararası kalite standartlarına sahip, sertifikalı ve garantili ürünlerdir. 
            Montaj işçiliğimiz de 2 yıl garanti kapsamındadır.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {['CE Belgeli', 'TSE Onaylı', 'ISO 9001', 'Yangın Belgeli'].map((cert, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <CheckCircle2 className="w-12 h-12 text-amber-600 mx-auto mb-3" />
                <p className="font-semibold text-slate-800">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
