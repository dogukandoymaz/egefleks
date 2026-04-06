import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, MessageCircle } from 'lucide-react';
import { companyInfo } from '../data/mockData';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${companyInfo.whatsapp}`, '_blank');
  };

  const navLinks = [
    { path: '/', label: 'Ana Sayfa' },
    { path: '/urunler', label: 'Ürünler' },
    { path: '/projeler', label: 'Projeler' },
    { path: '/hakkimizda', label: 'Hakkımızda' },
    { path: '/iletisim', label: 'İletişim' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="hidden md:flex items-center justify-between py-2 border-b border-gray-200">
          <div className="flex items-center gap-6 text-sm text-gray-600">
            <a href={`tel:${companyInfo.phone}`} className="flex items-center gap-2 hover:text-amber-600 transition-colors">
              <Phone className="w-4 h-4" />
              {companyInfo.phone}
            </a>
            <span className="text-gray-400">|</span>
            <span>{companyInfo.workingHours}</span>
          </div>
          <div className="flex items-center gap-4">

          </div>
        </div>

        {/* Main Navigation */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/logo.png" alt="Egefleks Logo" className="h-8 sm:h-10 w-auto object-contain" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors relative group ${location.pathname === link.path ? 'text-amber-600' : 'text-gray-700 hover:text-amber-600'}`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-amber-600 transition-all duration-300 ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleWhatsApp}
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-lg hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="text-sm font-medium">WhatsApp</span>
            </button>

            {/* Mobile WhatsApp Icon */}
            <button
              onClick={handleWhatsApp}
              className="sm:hidden p-2.5 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-lg hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-md"
            >
              <MessageCircle className="w-5 h-5" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-amber-600 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96 border-t border-gray-200' : 'max-h-0'}`}>
        <nav className="container mx-auto px-4 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className={`px-4 py-2 rounded-lg transition-colors ${location.pathname === link.path ? 'bg-amber-50 text-amber-600 font-medium' : 'text-gray-700 hover:bg-gray-50'}`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-gray-200 flex items-center gap-3">
            <a href={`tel:${companyInfo.phone}`} className="flex items-center gap-2 text-sm text-gray-600">
              <Phone className="w-4 h-4" />
              {companyInfo.phone}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};
