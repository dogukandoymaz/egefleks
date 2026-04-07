import { Link } from 'react-router-dom';
import { Tag, ChevronRight } from 'lucide-react';
import { SEO } from '../components/SEO';
import { projects } from '../data/mockData';

export const Projects = () => {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <SEO 
        title="Tamamlanan Projeler ve Referanslar | Egefleks"
        description="İzmir, Aydın, Denizli ve Manisa'da gerçekleştirdiğimiz parke, halısaha çimi ve zemin kaplama projelerimizi inceleyin. Profesyonel uygulama örnekleri."
        keywords="halısaha çimi izmir, halısaha çimi denizli, halısaha çimi aydın, halısaha çimi manisa, halısaha çimi balıkesir, zemin kaplama projeleri, parke uygulama örnekleri"
        canonical="/projeler"
      />
      {/* Header */}
      <section className="py-12 bg-gradient-to-r from-slate-700 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Tamamlanan Projelerimiz
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            İzmir ve çevresinde gerçekleştirdiğimiz başarılı zemin ve duvar kaplama projelerimize göz atın.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link
                key={project.id}
                to={project.slug ? `/proje/${project.slug}` : '#'}
                className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col ${!project.slug && 'pointer-events-none cursor-default'}`}
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={project.image}
                    alt={`Egefleks ${project.title} Uygulaması ${project.category}`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500 text-white text-sm font-semibold rounded-lg shadow-lg">
                      <Tag className="w-4 h-4" />
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-300">
                      {project.description}
                    </p>
                    {project.slug && (
                      <div className="mt-4 flex items-center text-amber-400 text-sm font-bold gap-1 group-hover:gap-2 transition-all">
                        Projeyi İncele <ChevronRight className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {projects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600">
                Henüz proje bulunmamaktadır.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-amber-600 mb-2">
                500+
              </div>
              <div className="text-gray-600">
                Tamamlanan Proje
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-amber-600 mb-2">
                20+
              </div>
              <div className="text-gray-600">
                Yıllık Tecrübe
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-amber-600 mb-2">
                1000+
              </div>
              <div className="text-gray-600">
                Mutlu Müşteri
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-amber-600 mb-2">
                100%
              </div>
              <div className="text-gray-600">
                Memnuniyet
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
