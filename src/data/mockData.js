// Mock data for Egefleks Yer ve Duvar Kaplamaları

export const companyInfo = {
  name: "Egefleks Yer ve Duvar Kaplamaları",
  tagline: "Mekanlarınıza Değer Katan Zemin ve Duvar Çözümleri",
  phone: "+90 541 251 84 64",
  whatsapp: "+905412518464",
  email: "info@egefleks.com",
  address: "Dedebaşı, Anadolu Cd. 463b, 35170 Karşıyaka/İzmir",
  mapCoordinates: {
    lat: 38.4632,
    lng: 27.1000
  },
  workingHours: "Pazartesi - Cumartesi: 09:00 - 19:00",
  social: {
    instagram: "https://www.instagram.com/egeflekszemin/",
    facebook: "https://www.facebook.com/Egefleks/"
  }
};

export const productCategories = [
  {
    id: 1,
    name: "Parke",
    slug: "parke",
    description: "Doğal ahşap görünümü ve dayanıklılığı bir arada sunan laminat ve masif parke çözümleri.",
    shortDesc: "Şık ve dayanıklı zemin kaplamaları",
    icon: "Layers",
    images: [
      "https://images.unsplash.com/photo-1575204015311-0fe377370780?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA0MTJ8MHwxfHNlYXJjaHwzfHxsYW1pbmF0ZSUyMGZsb29yaW5nfGVufDB8fHx8MTc3NDk0NzE5Mnww&ixlib=rb-4.1.0&q=85",
      "https://images.unsplash.com/photo-1519393890420-f28727375fa5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA0MTJ8MHwxfHNlYXJjaHw0fHxsYW1pbmF0ZSUyMGZsb29yaW5nfGVufDB8fHx8MTc3NDk0NzE5Mnww&ixlib=rb-4.1.0&q=85",
      "https://images.pexels.com/photos/368754/pexels-photo-368754.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    ],
    featured: true,
    subCategories: [
      {
        id: "laminat",
        name: "Laminat Parke",
        description: "Dayanıklı ve kolay temizlenen modern zemin çözümleri.",
        brands: [
          { name: "Floorpan Parke", slug: "floorpan", image: "/parke-brands/floorpan.png", description: "Klasik meşeden egzotik ağaç dokularına kadar yüzlerce farklı dekor seçeneği sunan Floorpan, her mekana uygun zengin laminat parke koleksiyonlarıyla yaşam alanlarınıza değer katar." },
          { name: "AGT Parke", slug: "agt", image: "/parke-brands/agt.png", description: "Geniş bir ürün yelpazesi sunan AGT, farklı kalınlık, doku ve renk alternatifleriyle modern dekorasyon trendlerine yön veren yenilikçi parke çeşitlerine sahiptir." },
          { name: "Çamsan Parke", slug: "camsan", image: "/parke-brands/camsan.png", description: "Klasikten moderne uzanan geniş renk skalası ve farklı yüzey dokularıyla Çamsan, mekanlarınızı kişiselleştirmeniz için sayısız ürün seçeneği ve zengin bir desen yelpazesi sunar." },
          { name: "Peli Parke", slug: "peli", image: "/parke-brands/peli.png", description: "Farklı kullanım alanları için özel olarak tasarlanmış çeşitli seri ve dekor alternatifleri ile Peli, ahşabın doğal görünümünü yaşam alanlarınıza taşıyan geniş bir ürün gamına sahiptir." },
          { name: "Vario Clic Parke", slug: "vario", image: "/parke-brands/vario.png", description: "Üstün kalite ve dayanıklılığı estetikle birleştiren Vario Clic, her zevke hitap eden geniş renk ve desen seçenekleriyle zeminlerinize değer katar." },
          { name: "TerraClick Parke", slug: "terraclick", image: "/parke-brands/terraclick.png", description: "Ekonomik ve pratik zemin çözümleri sunan TerraClick, doğal görünümü ve kolay montaj özelliği ile mekanlarınızı hızlıca yeniler." },
          { name: "Krono Original Parke", slug: "krono", image: "/parke-brands/krono.png", description: "Dünya standartlarında üretim kalitesiyle Krono Original, zamansız tasarımları ve yüksek aşınma direnciyle uzun ömürlü kullanım sunar." },
          { name: "Veroxfloor Parke", slug: "verox-laminat", image: "/parke-brands/verox.png", description: "Modern çizgileri ve zengin doku alternatifleriyle Veroxfloor, mekanlarınıza prestijli ve şık bir görünüm kazandırır." }
        ]
      },
      {
        id: "lamine",
        name: "Lamine Parke",
        description: "%100 doğal ahşaptan üretilen, sıcak ve prestijli zemin kaplaması.",
        brands: [
          { name: "Veroxfloor Lamine Parke", slug: "veroxfloor", image: "/parke-brands/veroxfloor.png", description: "Fırçalı ve mat cilalı gibi farklı yüzey seçenekleri ile Veroxfloor, mekanlarınıza doğal ahşabın sıcaklığını taşıyan zengin lamine parke koleksiyonları sunar." },
          { name: "Şerifoğlu Lamine Parke", slug: "serifoglu", image: "/parke-brands/serifoglu.png", description: "Tek parça (plank) ya da çoklu şerit görünümleri sunan geniş ürün yelpazesiyle Şerifoğlu, %100 doğal ağaç dokusunu ve üstün dayanıklılığı yaşam alanlarınızla buluşturur." },
          { name: "Dendro Lamine Parke", slug: "dendro", image: "/parke-brands/dendro.png", description: "Klasik koleksiyonlardan chevron ve herringbone (balıksırtı) desenlerine uzanan geniş renk ve doku çeşitliliği ile Dendro, ahşabın doğallığını kusursuz bir şekilde mekanlarınıza yansıtır." }
        ]
      },
      {
        id: "spc",
        name: "SPC Parke",
        description: "Suya dayanıklı, yüksek dirençli ve uzun ömürlü yeni nesil taş tozu karışımlı parke çözümleri.",
        brands: [
          { name: "Zemora SPC Parke", slug: "zemora", image: "/parke-brands/zemora.png", description: "Yüksek teknoloji ile üretilen Zemora SPC parke, suya ve neme karşı %100 dayanıklılığı ile banyo ve mutfaklarda da güvenle kullanılır." },
          { name: "Fortika SPC Parke", slug: "fortika", image: "/parke-brands/fortika.png", description: "Dayanıklı yapısı ve doğal ahşap dokusuyla Fortika, yoğun trafikli alanlar için estetik ve sağlam zemin çözümleri sunar." }
        ]
      }
    ],
    products: [
    ]
  },
  {
    id: 2,
    name: "Duvar Kağıdı",
    slug: "duvar-kagidi",
    description: "Modern ve klasik tasarımlarla mekanlarınıza estetik katan ithal ve yerli duvar kağıtları.",
    shortDesc: "Duvarlarınıza sanat katın",
    icon: "Wallpaper",
    images: [
      "https://images.pexels.com/photos/7166633/pexels-photo-7166633.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "https://images.unsplash.com/photo-1760172287483-02d382f63a6f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjB3YWxscGFwZXJ8ZW58MHx8fHwxNzc0OTQ3MjIzfDA&ixlib=rb-4.1.0&q=85",
      "https://images.pexels.com/photos/10064809/pexels-photo-10064809.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    ],
    featured: true,
    subCategories: [
      {
        id: "duvar-kagidi-markalarimiz",
        name: "Duvar Kağıdı Markalarımız",
        description: "Dünyanın ve Türkiye'nin önde gelen duvar kağıdı markaları ile mekanlarınıza estetik katıyoruz.",
        brands: [
          { name: "Adawall Duvar Kağıdı", slug: "adawall", image: "/duvar-kagidi/adawall.png", description: "Modern ve klasik desenleri bir arada sunan, yüksek kaliteli Adawall duvar kağıtları ile duvarlarınıza sanat katın." },
          { name: "Vertu Duvar Kağıdı", slug: "vertu", image: "/duvar-kagidi/vertu.png", description: "Lüks ve estetiği buluşturan Vertu duvar kağıdı koleksiyonları, mekanlarınıza prestijli bir görünüm kazandırır." },
          { name: "Novamur Duvar Kağıdı", slug: "novamur", image: "/duvar-kagidi/novamur.png", description: "Yenilikçi tasarımları ve dayanıklı dokusuyla Novamur, modern yaşam alanları için ideal çözümler sunar." },
          { name: "Decowall Duvar Kağıdı", slug: "decowall", image: "/duvar-kagidi/decowall.png", description: "Geniş desen ve renk seçenekleriyle Decowall, her zevke uygun dekoratif duvar kağıdı alternatifleri sunar." },
          { name: "Sheima Duvar Kağıdı", slug: "sheima", image: "/duvar-kagidi/sheima.png", description: "Zarif desenleri ve yüksek kaliteli dokusuyla Sheima, duvarlarınıza modern ve şık bir derinlik kazandırır." }
        ]
      },
      {
        id: "poster-kagidi",
        name: "Duvar Kağıdı Posteri",
        description: "İstediğiniz görseli duvar ölçülerinize göre özel baskı hizmetimizle hazırlıyoruz. Mekanlarınıza derinlik katan panoramik ve kişiye özel poster çözümlerimizle tanışın.",
        brands: [
          { name: "Poster Uygulama Görseli 1", slug: "poster-1", image: "/duvar-kagidi/poster1.png", description: "Duvar ölçülerinize tam uyumlu, yüksek çözünürlüklü özel tasarım poster baskı uygulaması." },
          { name: "Poster Uygulama Görseli 2", slug: "poster-2", image: "/duvar-kagidi/poster2.png", description: "Kişiye özel görsel seçenekleriyle mekanlarınıza derinlik katan poster duvar kağıdı örneği." }
        ]
      }
    ],
    products: [
    ]
  },
  {
    id: 3,
    name: "Çim Halı",
    slug: "cim-hali",
    description: "Dış mekan ve spor alanları için dayanıklı, doğal görünümlü yapay çim halılar.",
    shortDesc: "Yeşilin doğal güzelliği",
    icon: "TreePine",
    images: [
      "https://images.unsplash.com/photo-1659577843589-55345bcdbee8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODl8MHwxfHNlYXJjaHwzfHxhcnRpZmljaWFsJTIwZ3Jhc3N8ZW58MHx8fGdyZWVufDE3NzQ5NDcyNTR8MA&ixlib=rb-4.1.0&q=85",
      "https://images.pexels.com/photos/13083599/pexels-photo-13083599.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    ],
    featured: true,
    subCategories: [
      {
        id: "nurteks",
        name: "Nurteks Çim Halı",
        description: "Türkiye'nin öncü suni çim üreticilerinden Nurteks; balkon, bahçe peyzajları ve spor alanları için UV ışınlarına dayanıklı, uzun ömürlü ve pratik 4 mevsim çim halı çözümleri sunar. Doğal çimin bakım süreçlerini ortadan kaldıran 7mm'den 40mm'ye kadar farklı kalınlık ve zengin doku seçenekleriyle mekanlarınızı özelleştirebilirsiniz.",
        brands: [
          { name: "Nurteks Uygulama Görseli 1", slug: "nurteks-1", image: "/cim-hali/nurteks1.png", description: "Nurteks suni çim halı koleksiyonları ile tasarlanmış örnek peyzaj ve kullanım alanı. Yüksek UV dayanımı ve doğal görünümüyle dış mekanlara değer katar." },
          { name: "Nurteks Uygulama Görseli 2", slug: "nurteks-2", image: "/cim-hali/nurteks2.png", description: "Nurteks suni çim halı koleksiyonları ile tasarlanmış örnek peyzaj ve kullanım alanı. Yüksek UV dayanımı ve doğal görünümüyle dış mekanlara değer katar." },
          { name: "Nurteks Uygulama Görseli 3", slug: "nurteks-3", image: "/cim-hali/nurteks3.png", description: "Nurteks suni çim halı koleksiyonları ile tasarlanmış örnek peyzaj ve kullanım alanı. Yüksek UV dayanımı ve doğal görünümüyle dış mekanlara değer katar." }
        ]
      }
    ],
    products: []
  },
  {
    id: 4,
    name: "Halıfleks",
    slug: "halifleks",
    description: "Duvardan duvara ve karo halı çeşitlerimizin bulunduğu ekonomik ve pratik zemin kaplama çözümleri. Konforlu ve estetik ortamlar için zengin seçenekler.",
    shortDesc: "Duvardan duvara ve karo halı çözümleri",
    icon: "Package",
    images: [
      "https://images.unsplash.com/photo-1515895309288-a3815ab7cf81?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2ODh8MHwxfHNlYXJjaHwzfHxQVkMlMjBmbG9vcmluZ3xlbnwwfHx8fDE3NzQ5NDcyNTh8MA&ixlib=rb-4.1.0&q=85",
      "https://images.unsplash.com/photo-1548091764-0c182a95bbe0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2ODh8MHwxfHNlYXJjaHwxfHxQVkMlMjBmbG9vcmluZ3xlbnwwfHx8fDE3NzQ5NDcyNTh8MA&ixlib=rb-4.1.0&q=85"
    ],
    featured: false,
    subCategories: [
      {
        id: "hali-markalarimiz",
        name: "Halı Markalarımız",
        description: "Duvardan duvara ve karo halı seçeneklerimizde kalite ve konforu bir arada sunan markalarımız.",
        brands: [
          { name: "Kotil", slug: "kotil", image: "/halifleks/kotil.png", description: "Yüksek kaliteli duvardan duvara ve karo halı çözümleri sunan Kotil, mekanlarınıza sıcaklık ve konfor katar." },
          { name: "LCT", slug: "lct", image: "/halifleks/lct.png", description: "Modern tasarımları ve dayanıklı dokusuyla LCT halı koleksiyonları, estetik ve fonksiyonelliği buluşturur." },
          { name: "Contensse", slug: "contensse", image: "/halifleks/contensse.png", description: "Lüks ve zerafeti duvarlarınızdan zeminlerinize taşıyan Contensse halı çeşitleri ile mekanların nı özelleştirin." },
          { name: "Samur", slug: "samur", image: "/halifleks/samur.png", description: "Türkiye'nin köklü halı markalarından Samur, geniş renk ve desen yelpazesiyle her mekana uygun çözümler sunar." },
          { name: "Nurteks", slug: "nurteks-hali", image: "/halifleks/nurteks.png", description: "Halıfleks ve duvardan duvara halı serilerinde konforu ve dayanıklılığı birleştiren Nurteks, zengin doku seçenekleriyle her mekana uygun çözümler üretir." }
        ]
      }
    ],
    products: []
  },
  {
    id: 5,
    name: "PVC Yer Döşemesi",
    slug: "pvc-yer-dosemesi",
    description: "Ağır hizmet tipi endüstriyel ve ticari mekanlar için profesyonel zemin kaplamaları.",
    shortDesc: "Profesyonel zemin sistemleri",
    icon: "Building2",
    images: [
      "https://images.unsplash.com/photo-1771531072574-af6ed6b954c0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2ODh8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZmxvb3Jpbmd8ZW58MHx8fHwxNzc0OTQ3MjYyfDA&ixlib=rb-4.1.0&q=85",
      "https://images.pexels.com/photos/36230779/pexels-photo-36230779.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    ],
    featured: false,
    subCategories: [
      {
        id: "pvc-markalarimiz",
        name: "PVC Markalarımız",
        description: "Dünyanın önde gelen PVC zemin kaplama markalarıyla yüksek dayanıklılık ve estetiği birleştiriyoruz.",
        brands: [
          { name: "Tarkett", slug: "tarkett", image: "/pvc-brands/tarkett.png", description: "Yenilikçi ve sürdürülebilir zemin çözümleriinde dünya lideri Tarkett, her türlü ticari ve endüstriyel alan için estetik ve dayanıklı PVC kaplamalar sunar." },
          { name: "Net Floor", slug: "net-floor", image: "/pvc-brands/net-floor.png", description: "Modern tasarımları ve üstün performans özellikleriyle Net Floor, yoğun trafikli alanlar için ideal ve ekonomik PVC zemin çözümleri geliştirir." },
          { name: "GerFlor", slug: "gerflor", image: "/pvc-brands/gerflor.png", description: "Yüksek teknolojiyle üretilen GerFlor PVC zemin kaplamaları, üstün aşınma direnci ve modern tasarımları ile profesyonel mekanların ilk tercihidir." }
        ]
      }
    ],
    products: [
      {
        id: 501,
        name: "Heterojen PVC",
        description: "Hastane ve okul tipi zemin",
        priceRange: "100₺ - 200₺/m²",
        features: ["Antibakteriyel", "Yangın geciktirici", "Kolay temizlik"]
      },
      {
        id: 502,
        name: "Homojen PVC",
        description: "Fabrika ve atölye zeminleri",
        priceRange: "150₺ - 300₺/m²",
        features: ["Aşınmaya dayanıklı", "Kimyasal dirençli", "Endüstriyel kalite"]
      }
    ]
  },
  {
    id: 6,
    name: "Duvar Paneli",
    slug: "duvar-paneli",
    description: "Modern ve estetik mekanlar için dekoratif duvar paneli çözümleri. Mekanlarınıza derinlik ve şıklık katan 3D panel sistemleri.",
    shortDesc: "Dekoratif duvar çözümleri",
    icon: "Layout",
    images: [
      "/duvar-paneli/modema.png"
    ],
    featured: true,
    subCategories: [
      {
        id: "duvar-paneli-markalarimiz",
        name: "Duvar Paneli Markalarımız",
        description: "Dekoratif duvar paneli çözümlerinde kalite ve estetiği buluşturan dünyaca ünlü markalarımız.",
        brands: [
          { name: "Modema Duvar Paneli", slug: "modema", image: "/duvar-paneli/modema.png", description: "Modern tasarımları ve zengin doku seçenekleriyle Modema, duvarlarınıza 3 boyutlu bir derinlik ve şıklık katar." },
          { name: "AdaPanel Duvar Paneli", slug: "adapanel", image: "/duvar-paneli/adapanel.png", description: "Kolay montajı ve dayanıklı yapısıyla AdaPanel, mekanlarınızı kısa sürede yenilemeniz için estetik çözümler sunar." },
          { name: "Peli Duvar Paneli", slug: "peli-panel", image: "/duvar-paneli/peli.png", description: "Peli kalitesiyle üretilen duvar panelleri, ahşabın doğal sıcaklığını ve modern dekorasyon trendlerini duvarlarınıza taşır." },
          { name: "AGT Duvar Paneli", slug: "agt-panel", image: "/duvar-paneli/agt.png", description: "Zengin model ve yüzey seçenekleriyle AGT duvar panelleri, her türlü dekorasyon stiline uyum sağlayan estetik ve sağlam çözümler sunar." }
        ]
      }
    ],
    products: []
  },
  {
    id: 7,
    name: "Kapı",
    slug: "kapi",
    description: "Modern ve estetik mekanlar için yüksek kaliteli iç mekan kapı çözümleri. Westdoor kalitesiyle mekanlarınıza değer katın.",
    shortDesc: "Kaliteli iç mekan kapıları",
    icon: "DoorOpen",
    images: [
      "/kapi/westdoor1.png"
    ],
    featured: true,
    subCategories: [
      {
        id: "westdoor-kapi",
        name: "Westdoor Kapı",
        description: "Estetik tasarımı ve dayanıklı yapısıyla Westdoor kapı koleksiyonu.",
        brands: [
          { name: "Westdoor", slug: "westdoor-1", image: "/kapi/westdoor1.png", description: "" },
          { name: "Westdoor", slug: "westdoor-2", image: "/kapi/westdoor2.png", description: "" }
        ]
      }
    ],
    products: []
  }
];

export const services = [
  {
    id: 1,
    icon: "Ruler",
    title: "Ücretsiz Keşif",
    description: "Uzman ekibimiz mekanınızı inceleyerek en uygun çözümü önerir."
  },
  {
    id: 2,
    icon: "Palette",
    title: "Tasarım Danışmanlığı",
    description: "Renk, doku ve desen seçiminde profesyonel destek."
  },
  {
    id: 3,
    icon: "Wrench",
    title: "Profesyonel Montaj",
    description: "Deneyimli montaj ekibimizle kusursuz uygulama garantisi."
  },
  {
    id: 4,
    icon: "Shield",
    title: "Garanti ve Servis",
    description: "Ürünlerimiz garanti kapsamında, satış sonrası destek sunuyoruz."
  },
  {
    id: 5,
    icon: "Clock",
    title: "Hızlı Teslimat",
    description: "Sipariş sonrası hızlı teslimat ve aynı gün montaj hizmeti."
  },
  {
    id: 6,
    icon: "BadgeCheck",
    title: "Kalite Güvencesi",
    description: "Yalnızca sertifikalı ve kaliteli ürünlerle çalışıyoruz."
  }
];

export const projects = [
  {
    id: 5,
    title: "Suni Çim Halısaha Uygulamalarımız",
    category: "Çim Halı",
    slug: "hali-saha-uygulamalari",
    location: "Ege Bölgesi Genel",
    image: "/projects/halisaha/halisaha5.png",
    images: [
      "/projects/halisaha/halisaha5.png",
      "/projects/halisaha/halisaha1.png",
      "/projects/halisaha/halisaha2.png",
      "/projects/halisaha/halisaha3.png",
      "/projects/halisaha/halisaha4.png"
    ],
    description: "Profesyonel standartlarda dayanıklı ve uzun ömürlü suni çim halı saha uygulamalarımız. UV dayanımlı ve yüksek performanslı zemin çözümleri."
  },
  {
    id: 6,
    title: "Landscape Çim Halı Uygulamalarımız",
    category: "Çim Halı",
    slug: "landscape-cim-hali",
    location: "İzmir ve Çevre İller",
    image: "/projects/landscape/landscape1.png",
    images: [
      "/projects/landscape/landscape1.png",
      "/projects/landscape/landscape2.png",
      "/projects/landscape/landscape3.png",
      "/projects/landscape/landscape4.png",
      "/projects/landscape/landscape5.png",
      "/projects/landscape/landscape6.png",
      "/projects/landscape/landscape7.png"
    ],
    description: "Bahçe, balkon ve teraslar için estetik ve bakım gerektirmeyen peyzaj çözümlerimiz. Nurteks kalitesiyle 4 mevsim yemyeşil alanlar."
  },
  {
    id: 7,
    title: "Ahşap Merdiven Kaplama Uygulamalarımız",
    category: "Parke",
    slug: "ahsap-merdiven-kaplama",
    location: "İzmir ve Çevre İller",
    image: "/projects/merdiven/merdiven1.png",
    images: [
      "/projects/merdiven/merdiven1.png",
      "/projects/merdiven/merdiven2.png",
      "/projects/merdiven/merdiven3.png",
      "/projects/merdiven/merdiven4.png"
    ],
    description: "Estetik ve dayanıklı ahşap merdiven kaplama çözümlerimiz. Mekanlarınıza doğal bir sıcaklık ve modern bir dokunuş katıyoruz."
  },
  {
    id: 8,
    title: "Karo Halı Uygulamalarımız",
    category: "Halıfleks",
    slug: "karo-hali-uygulamalari",
    location: "İzmir ve Çevre İller",
    image: "/projects/karohali/karo1.png",
    images: [
      "/projects/karohali/karo1.png",
      "/projects/karohali/karo2.png",
      "/projects/karohali/karo3.png",
      "/projects/karohali/karo4.png"
    ],
    description: "Ofis ve ticari mekanlar için modern, akustik ve dayanıklı karo halı uygulama çözümlerimiz."
  },
  {
    id: 9,
    title: "Parke Uygulamalarımız",
    category: "Parke",
    slug: "parke-uygulamalari",
    location: "İzmir ve Çevre İller",
    image: "/projects/parke/parke1.png",
    images: [
      "/projects/parke/parke1.png",
      "/projects/parke/parke2.png",
      "/projects/parke/parke3.png",
      "/projects/parke/parke4.png"
    ],
    description: "Laminat ve lamine parke seçeneklerimizle mekanlarınıza değer katan profesyonel zemin çözümlerimiz."
  },
  {
    id: 10,
    title: "Duvar Paneli Uygulamalarımız",
    category: "Duvar Paneli",
    slug: "duvar-paneli-uygulamalari",
    location: "İzmir ve Çevre İller",
    image: "/projects/duvarpaneli/panel1.png",
    images: [
      "/projects/duvarpaneli/panel1.png",
      "/projects/duvarpaneli/panel2.png",
      "/projects/duvarpaneli/panel3.png",
      "/projects/duvarpaneli/panel4.png"
    ],
    description: "3D dekoratif duvar paneli uygulamalarımızla mekanlarınıza derinlik ve estetik şıklık katıyoruz."
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Emre DÜNDAR",
    role: "Müşteri",
    location: "İzmir",
    rating: 5,
    content: "Asım bey ve Aslıhan hanım çok güler yüzlülerdi. Kendisi tüm modelleri tek tek sıkılmadan anlattı. İkramlarda bulundu. Sorunsuz bir şekilde alışverişimi yaptım."
  },
  {
    id: 2,
    name: "Şener GEZGİNCİ",
    role: "Müşteri",
    location: "Karşıyaka",
    rating: 5,
    content: "Firma sahibi Aslıhan hanımın ilgi ve alakası için çok teşekkür ediyorum. İşçilik ve kalite konusunda İzmir'in en iyisi diyebilirim."
  },
  {
    id: 3,
    name: "Mehmet Durgun",
    role: "Müşteri",
    location: "Çiğli",
    rating: 5,
    content: "Kaliteli ürün ve profesyonel ekip. Parke seçimimizde bize çok yardımcı oldular, montaj süreci de oldukça titiz ilerledi."
  }
];

export const faqs = [
  {
    id: 1,
    question: "Keşif ücreti alıyor musunuz?",
    answer: "Hayır, keşif hizmetimiz tamamen ücretsizdir. Uzman ekibimiz mekanınızı inceleyerek size en uygun ürün ve fiyat teklifini sunar."
  },
  {
    id: 2,
    question: "Montaj süresi ne kadar?",
    answer: "Montaj süresi metrekareye ve ürün tipine göre değişir. Ortalama bir daire için 1-3 gün arasında tamamlanır. Detaylı bilgi için iletişime geçebilirsiniz."
  },
  {
    id: 3,
    question: "Garanti süresi ne kadar?",
    answer: "Ürünlerimiz üretici garantisi ile gelir. Laminat parkeler için 10 yıl, PVC ürünler için 5-8 yıl garanti sunuyoruz. Montaj işçiliğimiz de 2 yıl garantilidir."
  },
  {
    id: 4,
    question: "Numune görebilir miyiz?",
    answer: "Evet, mağazamızda tüm ürünlerimizin numunelerini görebilir, dokunarak kaliteyi test edebilirsiniz. Ayrıca evde numune görme hizmetimiz de mevcuttur."
  },
  {
    id: 5,
    question: "Ödeme seçenekleri neler?",
    answer: "Kredi kartına taksit, havale/EFT ve peşin ödeme indirimleri gibi birçok seçenek sunmaktayız."
  }
];
