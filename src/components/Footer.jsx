import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, MessageCircle, Globe, Camera } from 'lucide-react';
import { companyInfo } from '../data/mockData';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-800 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <img src="/logo.png" alt="Egefleks Logo" className="h-10 w-auto brightness-0 invert opacity-90 object-contain" />
            </div>
            <p className="text-sm leading-relaxed">
              {companyInfo.tagline}
            </p>
            <div className="flex flex-col gap-3 mt-6">
              <a 
                href={companyInfo.social.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-3 w-fit px-4 py-2 bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Camera className="w-5 h-5 group-hover:rotate-6 transition-transform" />
                <span className="text-sm font-semibold">Instagram</span>
              </a>

              <a 
                href={`https://wa.me/${companyInfo.whatsapp}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-3 w-fit px-4 py-2 bg-[#25D366] text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 group-hover:rotate-6 transition-transform" />
                <span className="text-sm font-semibold">WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Hızlı Erişim</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-amber-500 transition-colors inline-block">Ana Sayfa</Link>
              </li>
              <li>
                <Link to="/urunler" className="text-sm hover:text-amber-500 transition-colors inline-block">Ürünler</Link>
              </li>
              <li>
                <Link to="/projeler" className="text-sm hover:text-amber-500 transition-colors inline-block">Projeler</Link>
              </li>
              <li>
                <Link to="/hakkimizda" className="text-sm hover:text-amber-500 transition-colors inline-block">Hakkımızda</Link>
              </li>
              <li>
                <Link to="/iletisim" className="text-sm hover:text-amber-500 transition-colors inline-block">İletişim</Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Ürünlerimiz</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/urunler/parke" className="text-sm hover:text-amber-500 transition-colors inline-block">Parke</Link>
              </li>
              <li>
                <Link to="/urunler/duvar-kagidi" className="text-sm hover:text-amber-500 transition-colors inline-block">Duvar Kağıdı</Link>
              </li>
              <li>
                <Link to="/urunler/cim-hali" className="text-sm hover:text-amber-500 transition-colors inline-block">Çim Halı</Link>
              </li>
              <li>
                <Link to="/urunler/halifleks" className="text-sm hover:text-amber-500 transition-colors inline-block">Halıfleks</Link>
              </li>
              <li>
                <Link to="/urunler/pvc-yer-dosemesi" className="text-sm hover:text-amber-500 transition-colors inline-block">PVC Yer Döşemesi</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">İletişim</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm">{companyInfo.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <a href={`tel:${companyInfo.phone}`} className="text-sm hover:text-amber-500 transition-colors">
                  {companyInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <a href={`mailto:${companyInfo.email}`} className="text-sm hover:text-amber-500 transition-colors">
                  {companyInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm">{companyInfo.workingHours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 mt-10 pt-6 text-center">
          <p className="text-sm text-gray-400">
            © {currentYear} {companyInfo.name}. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};
