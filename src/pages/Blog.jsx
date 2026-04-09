import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ChevronRight, BookOpen } from 'lucide-react';
import { SEO } from '../components/SEO';
import { blogPosts } from '../data/mockData';

export const Blog = () => {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <SEO 
        title="Blog ve Sektörel Haberler | Egefleks Faydalı Bilgiler"
        description="İzmir laminat parke, Lamine parke, duvar kağıdı ve zemin kaplama uzmanı Egefleks'ten sektör yenilikleri ve faydalı ipuçları öğrenin."
        keywords="izmir zemin kaplama blog, karşıyaka parke blog, laminat parke seçimi, ege bölgesi lamine parke, duvar kağıdı modelleri"
        canonical="/blog"
      />
      {/* Header */}
      <section className="py-12 bg-gradient-to-r from-emerald-700 to-teal-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Blog & Faydalı Bilgiler
          </h1>
          <p className="text-lg text-emerald-100 max-w-2xl mx-auto">
            Zemin ve duvar kaplama dünyasına dair en güncel bilgiler, ipuçları ve trend tasarımlar.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600/90 backdrop-blur-sm text-white text-xs font-semibold rounded-lg shadow-lg">
                      <BookOpen className="w-3 h-3" />
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-center text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm flex-grow line-clamp-3">
                    {post.summary}
                  </p>
                  <div className="mt-5 flex items-center text-emerald-600 text-sm font-bold gap-1 group-hover:gap-2 transition-all">
                    Devamını Oku <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {blogPosts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600">
                Henüz blog yazısı bulunmamaktadır.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
