import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Tag, ChevronRight } from 'lucide-react';
import { projects } from '../data/mockData';

export const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Proje bulunamadı.</h2>
        <Link to="/projeler" className="text-amber-600 hover:underline">Projelere Dön</Link>
      </div>
    );
  }

  const projectImages = project.images || [project.image];

  return (
    <div className="min-h-screen pt-32 pb-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <Link
          to="/projeler"
          className="inline-flex items-center gap-2 text-slate-600 hover:text-amber-600 transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Projelere Dön
        </Link>
        
        <div className="max-w-6xl mx-auto">
          {/* Main Content Card */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-12">
            <div className="flex flex-col lg:flex-row">
              {/* Main Image */}
              <div className="lg:w-1/2 aspect-video lg:aspect-auto">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content Section */}
              <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4">
                   <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-100 text-amber-700 text-sm font-semibold rounded-lg">
                      <Tag className="w-4 h-4" />
                      {project.category}
                    </span>
                </div>
                
                <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">{project.title}</h1>
                
                <div className="prose prose-lg text-gray-600 max-w-none mb-10">
                  <p className="leading-relaxed text-lg">
                    {project.description}
                  </p>
                </div>
                
                <div className="mt-auto">
                   <Link
                     to="/iletisim"
                     className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto text-center"
                   >
                     Hemen Bilgi Alın (WhatsApp)
                   </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Project Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projectImages.map((img, index) => (
              <div key={index} className="aspect-square rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer">
                <img 
                  src={img} 
                  alt={`${project.title} ${index + 1}`} 
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
