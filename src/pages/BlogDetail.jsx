import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Calendar, ChevronLeft, CalendarDays, Share2 } from 'lucide-react';
import { SEO } from '../components/SEO';
import { blogPosts, companyInfo } from '../data/mockData';

export const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const post = blogPosts.find(p => p.slug === slug);

  useEffect(() => {
    if (!post) {
      navigate('/blog', { replace: true });
    }
  }, [post, navigate]);

  if (!post) return null;

  // Add prose styles for rendering HTML content safely
  const proseStyles = `
    .prose h2 { font-size: 1.875rem; font-weight: 700; color: #1f2937; margin-top: 2rem; margin-bottom: 1rem; }
    .prose h3 { font-size: 1.5rem; font-weight: 600; color: #374151; margin-top: 1.5rem; margin-bottom: 0.75rem; }
    .prose p { font-size: 1.125rem; line-height: 1.75; color: #4b5563; margin-bottom: 1.25rem; }
    .prose strong { color: #111827; font-weight: 600; }
    .prose em { color: #059669; font-style: normal; font-weight: 500; }
  `;

  return (
    <div className="min-h-screen pt-32 pb-20 bg-gray-50">
      <SEO 
        title={`${post.title} | Egefleks Blog`}
        description={post.summary}
        canonical={`/blog/${post.slug}`}
      />
      <style>{proseStyles}</style>

      <div className="container mx-auto px-4 max-w-4xl">
        {/* Back button */}
        <Link 
          to="/blog" 
          className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium mb-8 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          Blog'a Dön
        </Link>

        {/* Article Header */}
        <div className="bg-white rounded-t-3xl p-8 md:p-12 shadow-sm border-b border-gray-100">
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
            <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full font-medium">
              {post.category}
            </span>
            <span className="flex items-center gap-2">
              <CalendarDays className="w-4 h-4" />
              {post.date}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            {post.title}
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed border-l-4 border-emerald-500 pl-4 py-2 italic bg-gray-50/50 rounded-r-lg mb-8">
            {post.summary}
          </p>
        </div>

        {/* Featured Image */}
        <div className="w-full h-auto md:h-[500px] bg-white">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover shadow-sm"
          />
        </div>

        {/* Article Content */}
        <div className="bg-white rounded-b-3xl p-8 md:p-12 shadow-sm relative">
          <div 
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Share/Action Bottom */}
          <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <span className="text-gray-900 font-medium font-bold">Paylaş:</span>
              <button 
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  alert("Link kopyalandı!");
                }}
                className="p-2.5 rounded-full bg-gray-100 hover:bg-emerald-100 hover:text-emerald-700 text-gray-600 transition-colors"
                title="Linki Kopyala"
              >
                <Share2 className="w-5 h-5" />
              </button>
            </div>
            
            <a 
              href={`https://wa.me/${companyInfo.whatsapp}?text=Merhaba, şu yazı hakkında bilgi almak istiyorum: ${post.title}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-colors font-medium shadow-md flex items-center gap-2"
            >
              Uzmana Danışın
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
