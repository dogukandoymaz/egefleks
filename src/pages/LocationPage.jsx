import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MapPin, Phone, MessageCircle, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { SEO } from '../components/SEO';
import { locationPages, companyInfo } from '../data/mockData';

export const LocationPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Find if slug matches any location page
  // We use this route at the very end of App.js routes so standard routes will hit first.
  const pageData = locationPages.find(page => page.slug === slug);

  useEffect(() => {
    // If someone goes to a random slug that isn't a known location page (or another defined route), redirect to home
    if (!pageData) {
      navigate('/', { replace: true });
    }
  }, [pageData, navigate]);

  if (!pageData) return null;

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${companyInfo.whatsapp}?text=Merhaba, ${pageData.location} bölgesi için ${pageData.service} fiyatı almak istiyorum.`, '_blank');
  };

  const getFeaturesList = (service) => {
    if (service.includes('Parke')) {
       return ['Çizilmelere karşı ekstra direnç', 'Sıvı dökülmelerine karşı toleranslı formlar', 'Uzun ömürlü, yerli ve ithal modeller'];
    }
    if (service.includes('Çim')) {
       return ['4 Mevsim yemyeşil görünüm', 'Maliyetsiz, sulama gerektirmeyen peyzaj', 'Her türlü zemine tam entegrasyon'];
    }
    if (service.includes('Kapı')) {
       return ['Çizilme ve neme karşı ekstra yüzey direnci', 'Modern ve şık dekoratif tasarım serileri', 'Sessiz kapanma ve tam yalıtım sistemi'];
    }
    if (service.includes('Panel')) {
       return ['Mekana 3 boyutlu derinlik katan yapı', 'Toz tutmayan ve kolay temizlenen yüzey', 'Kokusuz ve hızlı montaj garantisi'];
    }
    if (service.includes('Halı')) {
       return ['Antibakteriyel ve toz tutmayan teknoloji', 'Mükemmel akustik ve ses yalıtımı', 'Yüksek konfor ve dekoratif renk seçenekleri'];
    }
    return ['Solmayan 3D desen ve tasarım', 'Nemli bezle kolayca silinebilirlik', 'Hızlı ve temiz usta işçiliği'];
  }

  const features = getFeaturesList(pageData.service);

  return (
    <div className="min-h-screen pt-32 pb-20 bg-gray-50">
      <SEO 
        title={`${pageData.title}`}
        description={pageData.summary}
        keywords={`${pageData.location.toLowerCase()} ${pageData.service.toLowerCase()}, izmir zemin kaplama, ${pageData.slug}`}
        canonical={`/${pageData.slug}`}
      />

      <div className="container mx-auto px-4 max-w-6xl">
        {/* Breadcrumb simulation */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <span>Hizmet Bölgeleri</span>
          <ArrowRight className="w-4 h-4" />
          <span className="text-emerald-700 font-medium">{pageData.location}</span>
          <ArrowRight className="w-4 h-4" />
          <span className="text-emerald-700 font-medium">{pageData.service}</span>
        </div>

        {/* Hero Section of Landing Page */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col md:flex-row mb-12">
          <div className="md:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full font-medium text-sm w-max mb-6 border border-emerald-100">
               <MapPin className="w-4 h-4" />
               {pageData.location} Bölgesi
            </div>
            
            <h1 className="text-3xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
              {pageData.location} <span className="text-emerald-600">{pageData.service}</span> Çözümleri
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              {pageData.summary}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <button 
                onClick={handleWhatsApp}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-emerald-500/30 transition-all hover:-translate-y-1 whitespace-nowrap"
              >
                <MessageCircle className="w-5 h-5 flex-shrink-0" />
                <span>Hemen Fiyat Alın</span>
              </button>
              <a 
                href={`tel:${companyInfo.phone}`}
                className="flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 px-6 py-3 rounded-xl font-semibold transition-all whitespace-nowrap"
              >
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>{companyInfo.phone}</span>
              </a>
            </div>
            <p className="text-xs text-gray-400 mt-2 flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-emerald-500" /> Ücretsiz Keşif Fırsatı
            </p>
          </div>

          <div className="md:w-1/2 h-64 md:h-auto relative">
            <img 
              src={pageData.image} 
              alt={`${pageData.location} ${pageData.service}`} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 md:via-white/20 to-transparent w-32 hidden md:block"></div>
          </div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 h-full">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Neden Egefleks'i Tercih Etmelisiniz?
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {pageData.location} ve çevresinde gerçekleştirdiğimiz sayısız kaplama projesi ile sizlere uzman işçilik sunuyoruz. Kullanmış olduğumuz {pageData.service.toLowerCase()} malzemeleri tamamen TSE ve uluslararası standartlara uygundur.
              </p>
              
              <ul className="space-y-4">
                {features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{feat}</span>
                  </li>
                ))}
                <li className="flex items-start gap-3 text-slate-500 text-sm mt-4 pt-4 border-t border-gray-100">
                  <MapPin className="w-5 h-5 flex-shrink-0" />
                  Mağazamız Karşıyaka Anadolu Caddesi üzerinde olup tüm Ege Bölgesine aynı gün keşif imkanı sağlamaktadır.
                </li>
              </ul>
            </div>
          </div>

          {/* Sidebar CTA */}
          <div className="md:col-span-1">
            <div className="bg-emerald-900 text-white p-8 rounded-3xl shadow-lg relative overflow-hidden h-full flex flex-col justify-center">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-800 rounded-bl-full opacity-50"></div>
              <h3 className="text-xl font-bold mb-4 relative z-10">Sorularınız Mı Var?</h3>
              <p className="text-emerald-100 mb-8 relative z-10 text-sm leading-relaxed">
                Mekanınızın ölçüleri, malzeme kalınlıkları veya ödeme seçenekleri hakkında sormak istediklerinizi Whatsapp hattımızdan anında yanıtlıyoruz.
              </p>
              <button 
                onClick={handleWhatsApp}
                className="w-full bg-white text-emerald-900 hover:bg-emerald-50 px-6 py-3 rounded-xl font-bold transition-all relative z-10 shadow-xl flex items-center justify-center gap-2"
              >
                Mesaj Yaz
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
