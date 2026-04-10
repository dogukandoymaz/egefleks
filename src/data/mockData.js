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

export const blogPosts = [
  {
    id: 1,
    title: "İzmir'de Laminat Parke Seçerken Dikkat Edilmesi Gerekenler",
    slug: "izmir-laminat-parke-secimi",
    category: "Laminat Parke",
    date: "10 Nisan 2026",
    image: "https://images.unsplash.com/photo-1575204015311-0fe377370780?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA0MTJ8MHwxfHNlYXJjaHwzfHxsYW1pbmF0ZSUyMGZsb29yaW5nfGVufDB8fHx8MTc3NDk0NzE5Mnww&ixlib=rb-4.1.0&q=85",
    summary: "İzmir'in nemli havasında laminat parke seçimi nasıl olmalı? Karşıyaka laminat parke mağazası Egefleks olarak sizlere ipuçları veriyoruz.",
    content: `
      <h2>İzmir'de Laminat Parke Uygulamalarının Püf Noktaları</h2>
      <p>İzmir, özellikle deniz kenarındaki Karşıyaka, Bostanlı gibi bölgelerde yüksek nem oranına sahip bir şehirdir. Bu nedenle zemin malzemesi seçerken görsellik kadar dayanıklılık da büyük önem taşır. <strong>İzmir laminat parke</strong> ihtiyaçlarınızda, Egefleks Zemin olarak en kaliteli ürünleri sunuyoruz.</p>
      
      <h3>Neden Kaliteli Bir Parke Tercih Edilmeli?</h3>
      <p>Laminat parkeler, doğal ahşap görünümünü uzun yıllar ilk günkü canlılığıyla korumak üzere tasarlanmıştır. Ancak <strong>Ege Bölgesi'nin iklim şartlarına</strong> uygun, genleşme payları doğru hesaplanmış bir montaj çok önemlidir. Profesyonel ekibimizle, evinizin veya ofisinizin ihtiyacına en uygun <em>laminat parke modellerini</em> beğeninize sunuyoruz.</p>
      
      <h3>Sınıf (Class) Seçimi Nasıl Olmalı?</h3>
      <p>Parke seçerken AC3, AC4 gibi sınıflandırmalarla karşılaşırsınız. Ev içi kullanımlarda genellikle 31. Sınıf (AC3) yeterli olurken, İzmir'deki yoğun ofis ortamları veya mağazalar için 32. Sınıf (AC4) ve üzeri ürünler tavsiye ediyoruz. Detaylı bilgi ve <strong>ücretsiz keşif</strong> için bizimle iletişime geçebilirsiniz.</p>
    `
  },
  {
    id: 2,
    title: "Ege Bölgesi'nde Lamine Parke Zarafeti",
    slug: "ege-bolgesi-lamine-parke-zarafeti",
    category: "Lamine Parke",
    date: "8 Nisan 2026",
    image: "https://images.pexels.com/photos/368754/pexels-photo-368754.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    summary: "%100 doğal ağaç dokusunu zeminlerinize taşıyan lamine parke çözümleri ile evinizde prestijli ve sıcak bir atmosfer yaratın.",
    content: `
      <h2>Lamine Parke Nedir ve Neden Tercih Edilmelidir?</h2>
      <p>Lamine parke, tamamı doğal ahşaptan üretilen, estetik kusursuzluğu ve dayanıklılığı birleştiren üst düzey bir zemin kaplamasıdır. Özellikle <strong>İzmir ve Ege Bölgesi'ndeki</strong> lüks konut, villa ve prestijli ofis projelerinde sıklıkla tercih edilir.</p>

      <h3>%100 Doğal Ahşap Dokusu</h3>
      <p>Lamine parkenin en büyük avantajı, tamamen organik olması ve ahşabın doğasından gelen nefes alan yapısıdır. Üst katmanında kullanılan değerli ağaç cinsleri sayesinde, uygulandığı mekana paha biçilemez bir sıcaklık ve lüks katar.</p>

      <h3>İzmir Villa ve Evlerinde Lamine Parke Kullanımı</h3>
      <p>Yaz aylarında serin, kış aylarında sıcak tutma özelliğine sahip bu parkeler, yerden ısıtma sistemlerine de tam uyumludur. Sağlıklı, uzun ömürlü ve zamansız bir estetik arıyorsanız, <strong>Karşıyaka lamine parke</strong> uzmanı Egefleks olarak sizlere Şerifoğlu ve Veroxfloor gibi dev markalarla hizmet sunmaktan mutluluk duyarız.</p>
    `
  },
  {
    id: 3,
    title: "İzmir'in Yeni Gözdesi: Özellikleriyle SPC Parke",
    slug: "izmirin-yeni-gozdesi-spc-parke",
    category: "SPC Parke",
    date: "5 Nisan 2026",
    image: "/projects/parke/parke2.png",
    summary: "Suya %100 dayanıklı, yüksek performanslı ve taş tozu karışımlı SPC parkelerin İzmir zemin tasarımındaki yükselişi.",
    content: `
      <h2>SPC Parke (Stone Plastic Composite) Nedir?</h2>
      <p>Son yılların en devrim niteliğindeki zemin kaplama teknolojisi olan <strong>SPC (Stone Plastic Composite) parke</strong>, taş tozu ve PVC karışımı özel yapısı sayesinde suya ve neme tam dayanıklılık sağlar. <em>İzmir'de rutubet sorunu yaşayan zeminlerde</em> ya da kordon boyu yazlık evlerde mükemmel bir çözümdür.</p>

      <h3>Mutfak ve Banyolarda Parke Görüntüsü</h3>
      <p>SPC parkeler suya tamamen dayanıklı olduğu için klasik parkelerin kullanılamadığı mutfak, banyo ve kış bahçesi gibi ıslak zeminlerde ahşap sıcaklığını yakalamanızı sağlar. Temizliği son derece basittir ve şişme, kabarma yapmaz.</p>

      <h3>Ege Bölgesi Boyunca SPC Uygulamaları</h3>
      <p>Egefleks Zemin olarak, Fortika ve Zemora markalarının yüksek kaliteli <strong>SPC parke İzmir</strong> uygulamalarını profesyonel ekibimizle gerçekleştiriyoruz. Darbelere karşı müthiş dirençli bu yeni nesil teknolojiyi yakından incelemek için mağazamızda sizi kahveye bekliyoruz.</p>
    `
  },
  {
    id: 4,
    title: "Karşıyaka Duvar Kağıdı Modelleri: Evinize Derinlik Katın",
    slug: "karsiyaka-duvar-kagidi-modelleri",
    category: "Duvar Kağıdı",
    date: "1 Nisan 2026",
    image: "https://images.pexels.com/photos/7166633/pexels-photo-7166633.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    summary: "Yaşam alanlarınıza sanat katacak duvar kağıtları ve panoramik poster uygulamaları ile evinizin enerjisini tamamen değiştirin.",
    content: `
      <h2>Duvarlarınızı Sıradanlıktan Kurtarın</h2>
      <p>Boya badana çoğu zaman tekdüze bir görünüm yaratırken, kaliteli bir <strong>duvar kağıdı</strong> mekanın tüm kimliğini sıfırdan oluşturur. <em>İzmir Karşıyaka duvar kağıdı modelleri</em> arayışınızda, Egefleks'in geniş yelpazedeki ürün kataloğu her bütçeye ve zevke hitap eder.</p>

      <h3>2026 Trendleri: Hangi Desenler Moda?</h3>
      <p>Günümüzde geometrik hatlar, 3 boyutlu algı yaratan desenler ve özel ölçü poster baskılar revaçta. Özellikle evlerde odak duvarı (TV arkası veya yatak başı) yaratmak, mekana derinlik ve prestij katar.</p>

      <h3>Poster Duvar Kağıtları</h3>
      <p>Kişiye özel ölçülerle ürettiğimiz panorama ve 3 boyutlu görsel posterler, iş yerlerinde ve modern salonlarda harika sonuçlar veriyor. <strong>Ege bölgesi duvar kağıdı satışlarında</strong> zengin ürün çeşitliliğine önem veriyor, kusursuz desenlerle mekanlarınıza değer katıyoruz.</p>
    `
  },
  {
    id: 5,
    title: "İzmir Bahçe, Teras ve Balkonları İçin Çim Halı Çözümleri",
    slug: "izmir-bahceleri-icin-cim-hali",
    category: "Çim Halı",
    date: "25 Mart 2026",
    image: "https://images.unsplash.com/photo-1659577843589-55345bcdbee8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODl8MHwxfHNlYXJjaHwzfHxhcnRpZmljaWFsJTIwZ3Jhc3N8ZW58MHx8fGdyZWVufDE3NzQ5NDcyNTR8MA&ixlib=rb-4.1.0&q=85",
    summary: "Doğal çim görünümü ve minimum bakım gerektiren yapısı ile Nurteks çim halı modelleri balkon ve bahçe keyfinizi katlayacak.",
    content: `
      <h2>4 Mevsim Yemyeşil Mekanlar</h2>
      <p>İzmir'in yazları sıcak ve kuraktır. Doğal çimin bakımı, sulanması ve canlı tutulması genellikle çok zahmetli ve masraflıdır. İşte bu noktada <strong>suni çim halı İzmir</strong> çözümleri devreye giriyor. Balkonlarda, teraslarda, havuz kenarlarında veya kafelerde yeşil bir vahaya kavuşmak artık çok kolay.</p>

      <h3>Nurteks Güvencesiyle Landscape Ürünler</h3>
      <p>Peyzaj serisi ürünlerimiz UV ışınlarına karşı tam korumalıdır. Ege güneşi altında rengi atmaz veya dokusu bozulmaz. 20mm'den başlayıp 40mm'ye kadar varan kalınlık ve sıklık seçenekleriyle, çıplak ayakla basıldığında doğal çim hissini birebir verir.</p>

      <h3>Temizliği ve Bakımı</h3>
      <p>Doğal çimlerdeki böceklenme, çamur oluşumu gibi problemleri <em>çim halı</em> sayesinde asla yaşamazsınız. Su süzme delikleri sayesinde yağan yağmurda su birikmesi yapmaz, kuruduktan sonra hemen kullanıma açık hale gelir. <strong>Karşıyaka çim halı satan yerler</strong> arasında kalitesiyle öne çıkan Egefleks'ten fiyat almadan karar vermeyin.</p>
    `
  },
  {
    id: 6,
    title: "Ege Bölgesi Suni Halı Saha Projeleri",
    slug: "ege-bolgesi-suni-hali-saha-kurulumu",
    category: "Suni Halısaha",
    date: "18 Mart 2026",
    image: "/projects/halisaha/halisaha5.png",
    summary: "Profesyonel standartlarda uzun ömürlü ve performanslı sentetik çim saha kurulumlarında Egefleks tecrübesine güvenin.",
    content: `
      <h2>Doğru Halı Saha Zemini Nasıl Olmalıdır?</h2>
      <p>Ticari halı sahaların işletme maliyetini ve yatırım getirisini doğrudan etkileyen en önemli faktör zemindir. <strong>İzmir suni halı saha yapımı</strong> projelerinde FIFA standartlarına uygun iplik yapısına sahip kaliteli ürünleri, profesyonel silis kumu ve SBR granül dolgularıyla uyguluyoruz.</p>

      <h3>Yüksek Performans ve Oyuncu Güvenliği</h3>
      <p>İyi bir suni çim; darbeleri emen, kayma ve yanıkları minimize eden bir yapıya sahip olmalıdır. Ege Bölgesi'nin dört bir yanına gerçekleştirdiğimiz <strong>halı saha projelerinde</strong>, ipliğin kalitesi kadar zemin altyapısının düzgünlüğüne ve montajın kalitesine de çok dikkat ediyoruz.</p>

      <h3>Yatırımınız Koruma Altında</h3>
      <p>Sahanın ömrü direkt olarak kullanılan çimin kalitesine bağlıdır. 55mm kalınlığındaki profesyonel fibrile veya monofilament sentetik çimlerimizle, aşınmalara uzun yılla meydan okuyoruz. Kurulum, yenileme veya granül takviyesi gibi hizmetler için <strong>Ege Bölgesi profesyonel halı saha uygulaması</strong> yapan firmamızla görüşün.</p>
    `
  },
  {
    id: 7,
    title: "İzmir Evlerinde Duvardan Duvara Halı ile Sıcaklık",
    slug: "duvardan-duvara-hali",
    category: "Halıfleks",
    date: "12 Mart 2026",
    image: "https://images.unsplash.com/photo-1515895309288-a3815ab7cf81?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2ODh8MHwxfHNlYXJjaHwzfHxQVkMlMjBmbG9vcmluZ3xlbnwwfHx8fDE3NzQ5NDcyNTh8MA&ixlib=rb-4.1.0&q=85",
    summary: "Otellerden, sinema salonlarına, yatak odalarından çocuk odalarına: Konforlu ve akustik zemin çözümü.",
    content: `
      <h2>Duvardan Duvara Halıfleks’in Yeniden Yükselişi</h2>
      <p>Uzun yıllardır lüks oteller ve prestijli ofislerde standart olan <strong>duvardan duvara halı (halıfleks)</strong> çözümleri, antibakteriyel üretim teknolojileriyle artık evlerin ve yatak odalarının da yeni gözdelerinden biri oldu. <em>İzmir halıfleks kaplama</em> konusunda aradığınız yumuşak dokuyu Egefleks'te bulabilirsiniz.</p>

      <h3>Konfor ve Isı Yalıtımı</h3>
      <p>Halı zeminler, diğer kaplama türlerine göre ısıyı odanın içinde hapseder. Aynı zamanda yankı ve ayak sesini sıfırlar, müthiş bir akustik ortam sunar. Yatak odası, giyinme odası ve çocuk odalarında tercih etmeniz durumunda mekana sıradışı bir butik otel konforu taşımış olursunuz.</p>

      <h3>İzmir Duvardan Duvara Halı Firmaları</h3>
      <p>Samur, Nurteks, LCT ve Kotil gibi Türkiye'nin önde gelen halı markalarının tüm kreasyonlarını <strong>Karşıyaka Egefleks zemin mağazamızda</strong> inceleyebilirsiniz. Zengin renk seçeneklerinden, leke tutmaz özel dokulara kadar her projeye ve bütçeye uygun profesyonel halı döşeme uygulamamızdan yararlanmak bir telefon kadar uzağınızda.</p>
    `
  },
  {
    id: 8,
    title: "Karşılaştırma: Çim Halı mı, Doğal Çim mi?",
    slug: "cim-hali-mi-dogal-cim-mi",
    category: "Çim Halı",
    date: "10 Nisan 2026",
    image: "https://images.pexels.com/photos/13083599/pexels-photo-13083599.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    summary: "Bahçeniz veya balkonunuz için zemin seçimi yaparken bakım maliyetleri, kullanım şartları ve uzun ömürlülük gibi kriterleri sizin için karşılaştırdık.",
    content: `
      <h2>İhtiyacınıza En Uygun Zemini Belirleyin</h2>
      <p>Bahar aylarının gelmesiyle birlikte yeşil ve ferah bir açık alan yaratma isteği artıyor. Bu noktada akla gelen ilk soru genellikle doğal çim mi yoksa <strong>suni çim halı</strong> mı olacağıdır. Her iki seçeneğin de kullanım senaryosuna göre çeşitli avantajları bulunuyor.</p>

      <h3>Maliyet ve Bakım Süreçleri</h3>
      <p>Doğal çim, toprağın doğallığını hissetmek isteyenler için harika bir his sunsa da düzenli sulama, biçme ve gübreleme gibi sürekli bir mesai gerektirir. Öte yandan gelişen teknolojiyle üretilen <em>suni çim halılar</em>, bu rutin bakımları tamamen ortadan kaldırarak uzun vadede hem su sarfiyatını bitiriyor hem de ciddi bir zaman ve maliyet tasarrufu sağlıyor.</p>

      <h3>Uzun Ömürlülük ve Dayanıklılık</h3>
      <p>Doğal çim özellikle gölge alanlarda veya çok sıcak iklimlerde yıpranmaya açıktır ve sararabilir. Çim halı sistemleri ise UV korumalı yapıları sayesinde rengini yıllarca korur, leke tutmaz ve yağmurlu havalardan sonra anında kullanılabilir durumda kalır. Bakım zahmeti olmadan 4 mevsim kusursuz yeşil bir görünüme sahip olmak isteyen okuyucularımız için Nurteks çim halı serileri, oldukça mantıklı ve konforlu bir tercih olacaktır.</p>
    `
  },
  {
    id: 9,
    title: "Karşılaştırma: Duvar Kağıdı mı, Boya mı?",
    slug: "duvar-kagidi-mi-boya-mi",
    category: "Duvar Kağıdı",
    date: "11 Nisan 2026",
    image: "https://images.unsplash.com/photo-1760172287483-02d382f63a6f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjB3YWxscGFwZXJ8ZW58MHx8fHwxNzc0OTQ3MjIzfDA&ixlib=rb-4.1.0&q=85",
    summary: "Yaşam alanlarınızı yenilerken hangi duvar dekorasyonunun size daha uygun olduğunu mekan ölçüsü, maliyet ve estetik beklentiler üzerinden değerlendirdik.",
    content: `
      <h2>Duvarlarınızı Yenilerken Hangi Yöntem Tercih Edilmeli?</h2>
      <p>Ev veya ofis dekorasyonunda mekanın atmosferini belirleyen en büyük etken duvarlardır. Bu değişimi yaparken karşımıza iki güçlü seçenek çıkıyor: Geleneksel boya uygulamaları ve modern <strong>duvar kağıdı</strong> sistemleri. Mekanınızın yapısına göre doğru kararı vermek, uzun vadeli memnuniyet için çok önemli.</p>

      <h3>Renkler ve Tasarım Özgürlüğü</h3>
      <p>Boya uygulamaları, duvarlara taze ve temiz bir his vermek için idealdir ve sık renk değiştirmeyi sevenler için oldukça pratiktir. Ancak mekana karakter katmak, derinlik hissi oluşturmak veya bir odak noktası yaratmak (örneğin taş, ahşap dokusu ya da geometrik desenler) istediğinizde, tasarım zenginliği açısından boya maalesef sınırlı kalıyor. Duvar kağıdı ise tam da bu noktada devreye girerek mekana anında sanatsal bir kimlik katıyor.</p>

      <h3>Uygulama Hızı ve Dayanıklılık</h3>
      <p>Boya sürecinde odanın boşaltılması, kuruma süresi ve boya kokusunun gitmesi gibi aşamalar varken; duvar kağıdı genellikle birkaç saat içinde, kokusuz ve temiz bir şekilde uygulanır. Kaliteli vinil duvar kağıtları aynı zamanda nemli bezle hafifçe silinebildiği için lekelere karşı da ekstra bir avantaj sağlar. Geleneksel temizlikten sapmadan, yıllarca solmayacak zengin bir görünüm arayanlar için duvar kağıdı modelleri mekanı dönüştürmek adına bir adım öne çıkıyor.</p>
    `
  }
];

export const seoLocations = ['Karşıyaka', 'Bostanlı', 'Mavişehir', 'Çiğli'];

export const seoServices = [
  { name: 'Parke', slug: 'parke', image: '/projects/parke/parke2.png', desc: 'doğal ahşap görünümlü, dayanıklı lamine, laminat ve yüksek performanslı SPC parke' },
  { name: 'Suni Çim', slug: 'suni-cim', image: '/projects/halisaha/halisaha5.png', desc: 'uzun ömürlü, bakım gerektirmeyen profesyonel suni çim' },
  { name: 'Çim Halı', slug: 'cim-hali', image: '/projects/landscape/landscape1.png', desc: 'balkon ve bahçeleriniz için estetik, 4 mevsim yeşil çim halı' },
  { name: 'Duvar Kağıdı', slug: 'duvar-kagidi', image: 'https://images.pexels.com/photos/7166633/pexels-photo-7166633.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', desc: 'evinize özel 3 boyutlu, şık ve modern duvar kağıdı' },
  { name: 'Kapı', slug: 'kapi', image: '/kapi/westdoor1.png', desc: 'şık, modern ve dayanıklı birinci sınıf iç mekan kapı' },
  { name: 'Duvar Paneli', slug: 'duvar-paneli', image: '/projects/duvarpaneli/panel1.png', desc: 'mekanlarınıza derinlik katan estetik 3D dekoratif duvar paneli' },
  { name: 'Halıfleks', slug: 'halifleks', image: '/projects/karohali/karo1.png', desc: 'konforlu, akustik ve antibakteriyel duvardan duvara halı' }
];

const generateLocationPages = () => {
    const pages = [];
    const charMap = {
        'ş': 's', 'Ş': 's', 'ı': 'i', 'İ': 'i', 'ğ': 'g', 'Ğ': 'g',
        'ü': 'u', 'Ü': 'u', 'ö': 'o', 'Ö': 'o', 'ç': 'c', 'Ç': 'c'
    };
    const slugify = (text) => text.toLowerCase().split('').map(c => charMap[c] || c).join('').replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-');

    seoLocations.forEach(loc => {
        seoServices.forEach(srv => {
            const slug = `${slugify(loc)}-${srv.slug}`;
            pages.push({
                id: slug,
                slug,
                location: loc,
                service: srv.name,
                image: srv.image,
                desc: srv.desc,
                title: `${loc} ${srv.name} Çözümleri | Egefleks`,
                summary: `${loc} bölgesindeki ev ve iş yerleriniz için en uygun ve kaliteli ${srv.name.toLowerCase()} çözümlerini profesyonel ekibimizle sunuyoruz. Geniş ürün yelpazesi, uygun fiyat ve hızlı teslimat için Egefleks mağazamıza bekleriz.`
            });
        });
    });
    return pages;
};

export const locationPages = generateLocationPages();
