import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ChevronRight, Check } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { productCategories } from '../data/mockData';

export const Products = () => {
  const { slug } = useParams();
  const [selectedCategory, setSelectedCategory] = useState(null);

  React.useEffect(() => {
    if (slug) {
      const category = productCategories.find(cat => cat.slug === slug);
      setSelectedCategory(category);
    } else {
      setSelectedCategory(null);
    }
  }, [slug]);

  // Product List View
  if (!selectedCategory) {
    return (
      <div className="min-h-screen pt-32 pb-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
              Ürünlerimiz
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Zemin ve duvar kaplamalarında geniş ürün yelpazemizi keşfedin. Her bütçeye ve zevke uygun çözümler.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category) => {
              const IconComponent = LucideIcons[category.icon] || LucideIcons.Box;
              return (
                <Link
                  key={category.id}
                  to={`/urunler/${category.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={category.images[0]}
                      alt={category.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent"></div>
                    <div className="absolute top-6 left-6 w-14 h-14 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center group-hover:bg-amber-500 transition-colors duration-300">
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {category.name}
                      </h3>
                      <p className="text-gray-200 text-sm">
                        {category.shortDesc}
                      </p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {category.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        {category.products?.length > 0 ? category.products.length : (category.subCategories?.length || 0)} Üretim/Alt Kategori
                      </span>
                      <div className="flex items-center text-amber-600 font-medium group-hover:gap-2 transition-all">
                        İncele
                        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // Product Detail View
  const IconComponent = LucideIcons[selectedCategory.icon] || LucideIcons.Box;

  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-6">
        <div className="container mx-auto px-4">
          <Link
            to="/urunler"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-amber-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Tüm Ürünler
          </Link>
        </div>
      </div>

      {/* Category Header */}
      <section className="py-6 bg-slate-900 text-white border-b border-white/5">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-6">
            <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-lg flex items-center justify-center flex-shrink-0">
              <IconComponent className="w-6 h-6 text-amber-500" />
            </div>
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold tracking-tight">
                {selectedCategory.name}
              </h1>
              <p className="text-gray-400 text-sm lg:text-base mt-1">
                {selectedCategory.description}
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* Product List or SubCategories */}
      {selectedCategory.subCategories ? (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            {selectedCategory.subCategories.map((sub) => (
              <div key={sub.id} className="mb-16 last:mb-0">
                <h2 className="text-3xl font-bold text-slate-800 mb-4">{sub.name}</h2>
                <p className="text-gray-600 mb-8">{sub.description}</p>
                
                {sub.brands && sub.brands.length > 0 ? (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {sub.brands.map((brand, idx) => {
                      const isGenericImage = brand.name.toLowerCase().includes('uygulama görseli');
                      return (
                        <Link key={idx} to={`/marka/${brand.slug}`} className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
                          <div className={`w-full aspect-[4/3] relative overflow-hidden bg-gray-50 flex items-center justify-center ${isGenericImage ? 'h-full' : ''}`}>
                            <img src={brand.image} alt={brand.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                          </div>
                          {!isGenericImage && (
                            <div className="p-5 text-center bg-white z-10 relative">
                              <h3 className="font-bold text-slate-800">{brand.name}</h3>
                            </div>
                          )}
                        </Link>
                      );
                    })}
                  </div>
                ) : (
                  <div className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-200">
                    <p className="text-gray-500">Bu kategori için yakında ürünler eklenecektir.</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      ) : (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-800 mb-8">
            {selectedCategory.name} Ürün Çeşitleri
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {selectedCategory.products.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-3">
                    {product.description}
                  </p>

                </div>

                <div className="border-t border-gray-200 pt-4">
                  <h4 className="text-sm font-semibold text-slate-700 mb-3">
                    Özellikler:
                  </h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <Check className="w-4 h-4 text-amber-600 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/iletisim"
                  className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-xl hover:from-amber-600 hover:to-amber-700 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Fiyat Teklifi Al
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            Ücretsiz Keşif ve Danışmanlık
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Mekanınız için en uygun {selectedCategory.name.toLowerCase()} seçiminde size yardımcı olalım.
          </p>
          <Link
            to="/iletisim"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-xl hover:from-amber-600 hover:to-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Hemen İletişime Geç
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};
