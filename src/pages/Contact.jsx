import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { companyInfo } from '../data/mockData';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { faqs } from '../data/mockData';
import { toast } from 'sonner';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    console.log('Form submitted:', formData);
    toast.success('Mesajınız alındı! En kısa sürede size dönüş yapacağız.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${companyInfo.whatsapp}`, '_blank');
  };

  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Header */}
      <section className="py-12 bg-gradient-to-r from-slate-700 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            İletişim
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Sorularınız için bize ulaşın. Uzman ekibimiz size yardımcı olmaktan mutluluk duyar.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-20 relative z-10">
            <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mb-4">
                <Phone className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                Telefon
              </h3>
              <a href={`tel:${companyInfo.phone}`} className="text-amber-600 hover:text-amber-700 font-medium">
                {companyInfo.phone}
              </a>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mb-4">
                <MessageCircle className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                WhatsApp
              </h3>
              <button onClick={handleWhatsApp} className="text-amber-600 hover:text-amber-700 font-medium">
                Hemen Mesaj Gönder
              </button>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mb-4">
                <Mail className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                E-posta
              </h3>
              <a href={`mailto:${companyInfo.email}`} className="text-amber-600 hover:text-amber-700 font-medium text-sm">
                {companyInfo.email}
              </a>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mb-4">
                <Clock className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                Çalışma Saatleri
              </h3>
              <p className="text-gray-600 text-sm">
                {companyInfo.workingHours}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Map & Address */}
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-slate-800 mb-2">
                Adresimiz ve Konum
              </h2>
            </div>
              
            <div className="bg-gray-50 p-6 rounded-2xl mb-8 flex justify-center text-left">
              <div className="flex items-start gap-4 max-w-lg">
                <MapPin className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">
                    Mağaza Adresi
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {companyInfo.address}
                  </p>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="rounded-2xl overflow-hidden shadow-xl h-[400px] md:h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3124.1234567890!2d27.0937!3d38.4632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDI3JzQ3LjUiTiAyN8KwMDUnMzcuMyJF!5e0!3m2!1str!2str!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Egefleks Konum"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4 text-center">
              Sık Sorulan Sorular
            </h2>
            <p className="text-lg text-gray-600 mb-12 text-center">
              Merak ettiğiniz soruların cevaplarını burada bulabilirsiniz.
            </p>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq) => (
                <AccordionItem 
                  key={faq.id} 
                  value={`item-${faq.id}`}
                  className="bg-white border border-gray-200 rounded-xl px-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left font-semibold text-slate-800 hover:text-amber-600 py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
};
