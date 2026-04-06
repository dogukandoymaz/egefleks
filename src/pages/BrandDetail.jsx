import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { productCategories } from '../data/mockData';

export const BrandDetail = () => {
  const { brandSlug } = useParams();
  
  // Find the brand by iterating through categories and subcategories
  let foundBrand = null;
  productCategories.forEach(category => {
    if (category.subCategories) {
      category.subCategories.forEach(sub => {
        if (sub.brands) {
          const brand = sub.brands.find(b => b.slug === brandSlug);
          if (brand) {
            foundBrand = {
              ...brand,
              parentCategory: category
            };
          }
        }
      });
    }
  });

  if (!foundBrand) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-800 mb-4">Marka Bulunamadı</h1>
          <Link to="/urunler/parke" className="text-amber-600 hover:text-amber-700 flex items-center justify-center gap-2">
            <ArrowLeft className="w-4 h-4" /> Parke Çeşitlerine Dön
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <Link
          to={`/urunler/${foundBrand.parentCategory?.slug || 'parke'}`}
          className="inline-flex items-center gap-2 text-gray-600 hover:text-amber-600 transition-colors mb-8 font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          {foundBrand.parentCategory?.name || 'Ürünlere'} Dön
        </Link>
        
        <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
          {/* Brand Image Header */}
          <div className="w-full lg:w-1/2 bg-slate-50 flex justify-center items-center p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-gray-100">
            <img 
              src={foundBrand.image} 
              alt={foundBrand.name} 
              loading="lazy"
              className="w-full h-auto max-h-[500px] object-contain rounded-xl shadow-sm"
            />
          </div>
          
          {/* Content Section */}
          <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">{foundBrand.name}</h1>
            
            <div className="prose prose-lg text-gray-600 max-w-none mb-10">
              <p className="leading-relaxed text-lg m-0">
                {foundBrand.description}
              </p>
            </div>
            
            <div className="mt-auto flex justify-center lg:justify-start">
               <Link
                 to="/iletisim"
                 className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-xl hover:from-amber-600 hover:to-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto text-center"
               >
                 Detaylı Bilgi ve Keşif İçin İletişime Geçin
               </Link>
            </div>
          </div>
        </div>

        {/* Brand Gallery */}
        {foundBrand.images && foundBrand.images.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center lg:text-left">Uygulama Örnekleri</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {foundBrand.images.map((img, index) => (
                <div key={index} className="aspect-square rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                  <img 
                    src={img} 
                    alt={`${foundBrand.name} ${index + 1}`} 
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" 
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
