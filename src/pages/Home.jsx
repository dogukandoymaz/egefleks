import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Star, ArrowRight } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { productCategories, services, projects, testimonials } from '../data/mockData';

export const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] lg:h-[700px] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1581784878214-8d5596b98a01?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NjZ8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpbnRlcmlvcnxlbnwwfHx8fDE3NzQ5NDcyOTN8MA&ixlib=rb-4.1.0&q=85"
            alt="Egefleks Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-blue-900/60"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Mekanlarınıza Değer Katan
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                Zemin ve Duvar Çözümleri
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-200 mb-8 leading-relaxed">
              20 yılı aşkın tecrübemizle parke, duvar kağıdı, halıfleks ve endüstriyel PVC ürünlerinde İzmir'in güvenilir adresi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/urunler"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-xl hover:from-amber-600 hover:to-amber-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                Ürünleri İncele
                <ChevronRight className="w-5 h-5" />
              </Link>
              <Link
                to="/projeler"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 border-0"
              >
                Projelerimiz
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              Ürün Kategorilerimiz
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Geniş ürün yelpazemiz ile her ihtiyaca uygun, kaliteli zemin ve duvar kaplama çözümleri sunuyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productCategories.map((category) => {
              const IconComponent = LucideIcons[category.icon] || LucideIcons.Box;
              return (
                <Link
                  key={category.id}
                  to={`/urunler/${category.slug}`}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={category.images[0]}
                      alt={category.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent"></div>
                    <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center group-hover:bg-amber-500 transition-colors duration-300">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-slate-800 mb-2 group-hover:text-amber-600 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {category.shortDesc}
                    </p>
                    <div className="flex items-center text-amber-600 font-medium group-hover:gap-2 transition-all">
                      Detaylı İncele
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              Hizmetlerimiz
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ürün satışından montaja kadar tüm süreçte yanınızdayız.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const IconComponent = LucideIcons[service.icon] || LucideIcons.Box;
              return (
                <div
                  key={service.id}
                  className="group p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-20 bg-slate-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Tamamlanan Projelerimiz
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              İzmir'in dört bir yanında gerçekleştirdiğimiz başarılı projelerden bazıları.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative h-80">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block px-3 py-1 bg-amber-500 text-white text-xs font-semibold rounded-full mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/projeler"
              className="inline-flex items-center gap-2 px-8 py-4 bg-amber-500 text-white font-semibold rounded-xl hover:bg-amber-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Tüm Projeleri Gör
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              Müşteri Yorumları
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Bizimle çalışan müşterilerimizin memnuniyet hikayeleri.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold text-slate-800">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-600">
                    {testimonial.role} • {testimonial.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-700 to-blue-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Hayalinizdeki Mekanı Birlikte Oluşturalım
          </h2>
          <p className="text-lg lg:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Ücretsiz keşif ve ürün danışmanlığı için hemen iletişime geçin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/iletisim"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-500 text-white font-semibold rounded-xl hover:bg-amber-600 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              Hemen İletişime Geç
              <ChevronRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+905412518464"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
            >
              Bizi Arayın
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
