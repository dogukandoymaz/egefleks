import React from 'react';
import { Helmet } from 'react-helmet-async';
import { companyInfo } from '../data/mockData';

export const SEO = ({ title, description, keywords, canonical }) => {
  const siteTitle = title ? `${title} | Egefleks` : 'Egefleks | Zemin ve Duvar Çözümleri - İzmir';
  const metaDescription = description || '20 yılı aşkın tecrübemizle parke, duvar kağıdı, halıfleks ve endüstriyel PVC ürünlerinde İzmir\'in güvenilir adresi. Kaliteli zemin ve duvar kaplama çözümleri.';
  const url = 'https://egefleks.com'; // Change to actual domain when live
  
  return (
    <Helmet>
      {/* Base Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={metaDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonical ? `${url}${canonical}` : url} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content="/magaza.png" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={metaDescription} />
      <meta property="twitter:image" content="/magaza.png" />
      
      {/* Language */}
      <meta http-equiv="content-language" content="tr" />
    </Helmet>
  );
};
