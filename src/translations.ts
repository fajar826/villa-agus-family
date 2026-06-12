export type Language = "ID" | "EN" | "FR" | "DE";

export interface TranslationType {
  nav: {
    home: string;
    rooms: string;
    activities: string;
    paket: string;
    gallery: string;
    blog: string;
    cta: string;
    about: string;
    contact: string;
    menuTitle: string;
    selectLang: string;
    checkAvail: string;
  };
  hero: {
    headline: string;
    subheadline: string;
    cta: string;
    explore: string;
    badge: string;
  };
  cottage: {
    badge: string;
    title: string;
    description: string;
    facilitiesTitle: string;
    maxGuests: string;
    acOption: string;
    privateBathroom: string;
    privateTerrace: string;
  };
  usp: {
    badge: string;
    title: string;
    subtitle: string;
    usp1Title: string;
    usp1Desc: string;
    usp2Title: string;
    usp2Desc: string;
    usp3Title: string;
    usp3Desc: string;
  };
  pursuits: {
    badge: string;
    title: string;
    consultation: string;
    btnMore: string;
  };
  gallerySec: {
    badge: string;
    title: string;
    all: string;
    accommodation: string;
    activity: string;
  };
  wcu: {
    badge: string;
    titlePart1: string;
    titlePart2: string;
    description: string;
    point1Title: string;
    point1Desc: string;
    point2Title: string;
    point2Desc: string;
    point3Title: string;
    point3Desc: string;
    badgeTitle: string;
    badgeDesc: string;
  };
  blog: {
    badge: string;
    title: string;
    more: string;
    readMore: string;
  };
  testimonials: {
    badge: string;
    title: string;
  };
  ctaBanner: {
    title: string;
    description: string;
    btnBook: string;
    btnEmail: string;
  };
  footer: {
    description: string;
    navTitle: string;
    contactTitle: string;
    labelLocation: string;
  };
}

export const translations: Record<Language, TranslationType> = {
  ID: {
    nav: {
      home: "Home",
      rooms: "Fasilitas",
      activities: "Aktivitas",
      paket: "Paket & Tarif",
      gallery: "Galeri",
      blog: "Blog",
      cta: "CEK KETERSEDIAAN",
      about: "Tentang Kami",
      contact: "Kontak",
      menuTitle: "Menu Navigasi",
      selectLang: "Pilih Bahasa",
      checkAvail: "Cek Ketersediaan?"
    },
    hero: {
      badge: "Villa Keluarga Eksklusif di Karangasem",
      headline: "Liburan Privat dan Tenang Bareng Keluarga di Karangasem",
      subheadline: "Nikmati suasana Bali yang asri dan autentik dengan fasilitas lengkap khusus untuk momen intim bersama orang tersayang.",
      cta: "Cek Ketersediaan via WA",
      explore: "Jelajahi Fasilitas"
    },
    cottage: {
      badge: "VILLA EKSKLUSIF",
      title: "Villa Agus Familly",
      description: "Villa Agus Familly menawarkan kenyamanan maksimal dengan 3 kamar tidur dan 3 kamar mandi. Dirancang untuk keluarga dengan kapasitas hingga 6 orang, villa ini adalah tempat istirahat yang sempurna setelah menjelajahi keindahan Karangasem.",
      facilitiesTitle: "Fasilitas Unggulan",
      maxGuests: "Maksimal 6 Tamu",
      acOption: "Dilengkapi AC",
      privateBathroom: "3 Kamar Mandi",
      privateTerrace: "Parkir Luas"
    },
    usp: {
      badge: "FASILITAS UTAMA",
      title: "Keunggulan Kami",
      subtitle: "Villa Agus Familly memberikan fasilitas lengkap untuk memastikan Anda dan keluarga merasa betah selama menginap.",
      usp1Title: "Fasilitas Lengkap",
      usp1Desc: "Dilengkapi dengan Free Wifi, AC, dan Air Panas untuk kenyamanan Anda.",
      usp2Title: "Privasi dan Kenyamanan",
      usp2Desc: "Kapasitas hingga 6 orang dengan 3 kamar tidur yang luas.",
      usp3Title: "Lokasi Strategis",
      usp3Desc: "Berlokasi di Karangasem, akses mudah ke berbagai destinasi wisata menarik.",
    },
    pursuits: {
      badge: "AKTIVITAS KARANGASEM",
      title: "Paket Perjalanan & Aktivitas Sekitar",
      consultation: "Konsultasi Aktivitas",
      btnMore: "Selengkapnya"
    },
    gallerySec: {
      badge: "MOMEN TERABADIKAN",
      title: "Galeri Visual Villa Agus Familly",
      all: "Semua",
      accommodation: "Villa & Kamar",
      activity: "Aktivitas"
    },
    wcu: {
      badge: "MENGAPA KAMI",
      titlePart1: "Mengapa Memilih",
      titlePart2: "Villa Agus Familly?",
      description: "Kami berkomitmen memberikan kenyamanan dan privasi bagi keluarga Anda dengan fasilitas terbaik.",
      point1Title: "Kapasitas Keluarga",
      point1Desc: "Dengan 3 kamar tidur dan 3 kamar mandi, sangat cocok untuk keluarga hingga 6 orang.",
      point2Title: "Fasilitas Modern",
      point2Desc: "Nikmati Free Wifi, AC, Air Panas, dan parkir yang aman.",
      point3Title: "Lokasi Nyaman",
      point3Desc: "Terletak di Br. Dinas Kangkaang, Desa Kerthamandala, Kecamatan Abang, Kabupaten Karangasem.",
      badgeTitle: "Pelayanan Ramah",
      badgeDesc: "Untuk Kenyamanan Anda"
    },
    blog: {
      badge: "WAWASAN & TIPS LOKAL",
      title: "Blog / Cerita dari Karangasem",
      more: "Lihat Semua Cerita",
      readMore: "Baca panduan lengkap"
    },
    testimonials: {
      badge: "PENGALAMAN TAMU",
      title: "Apa Kata Tamu Kami"
    },
    ctaBanner: {
      title: "Rasakan Kembali Hakikat Ketenangan yang Sejati",
      description: "Nikmati liburan tenang bersama keluarga. Hubungi narahubung kami di WhatsApp sekarang untuk mengecek ketersediaan unit.",
      btnBook: "Pesan / Cek Ketersediaan",
      btnEmail: "Kirim Email"
    },
    footer: {
      description: "Villa Agus Familly, tempat istirahat keluarga terbaik di Karangasem dengan fasilitas lengkap.",
      navTitle: "Navigasi",
      contactTitle: "Hubungi Kami",
      labelLocation: "Lokasi: Br. Dinas Kangkaang, Desa Kerthamandala, Kec. Abang, Kab. Karangasem"
    }
  },
  EN: {
    nav: {
      home: "Home",
      rooms: "Facilities",
      activities: "Activities",
      paket: "Packages & Rates",
      gallery: "Gallery",
      blog: "Blog",
      cta: "CHECK AVAILABILITY",
      about: "About Us",
      contact: "Contact Us",
      menuTitle: "Navigation Menu",
      selectLang: "Select Language",
      checkAvail: "Check Availability?"
    },
    hero: {
      badge: "Exclusive Family Villa in Karangasem",
      headline: "Private and Peaceful Family Vacation in Karangasem",
      subheadline: "Enjoy the beautiful and authentic Bali atmosphere with complete facilities specifically for intimate moments with loved ones.",
      cta: "Check Availability via WA",
      explore: "Explore Facilities"
    },
    cottage: {
      badge: "EXCLUSIVE VILLA",
      title: "Villa Agus Familly",
      description: "Villa Agus Familly offers maximum comfort with 3 bedrooms and 3 bathrooms. Designed for families with a capacity of up to 6 people, this villa is the perfect place to rest after exploring the beauty of Karangasem.",
      facilitiesTitle: "Key Facilities",
      maxGuests: "Max 6 Guests",
      acOption: "Equipped with AC",
      privateBathroom: "3 Bathrooms",
      privateTerrace: "Spacious Parking"
    },
    usp: {
      badge: "MAIN FACILITIES",
      title: "Our Advantages",
      subtitle: "Villa Agus Familly provides complete facilities to ensure you and your family feel at home during your stay.",
      usp1Title: "Complete Facilities",
      usp1Desc: "Equipped with Free Wifi, AC, and Hot Water for your comfort.",
      usp2Title: "Privacy and Comfort",
      usp2Desc: "Capacity up to 6 people with 3 spacious bedrooms.",
      usp3Title: "Strategic Location",
      usp3Desc: "Located in Karangasem, easy access to various interesting tourist destinations.",
    },
    pursuits: {
      badge: "KARANGASEM ACTIVITIES",
      title: "Travel Packages & Surrounding Activities",
      consultation: "Activity Consultation",
      btnMore: "See More"
    },
    gallerySec: {
      badge: "CAPTURED MOMENTS",
      title: "Villa Agus Familly Visual Gallery",
      all: "All",
      accommodation: "Villa & Rooms",
      activity: "Activities"
    },
    wcu: {
      badge: "WHY US",
      titlePart1: "Why Choose",
      titlePart2: "Villa Agus Familly?",
      description: "We are committed to providing comfort and privacy for your family with the best facilities.",
      point1Title: "Family Capacity",
      point1Desc: "With 3 bedrooms and 3 bathrooms, it is very suitable for families up to 6 people.",
      point2Title: "Modern Facilities",
      point2Desc: "Enjoy Free Wifi, AC, Hot Water, and safe parking.",
      point3Title: "Convenient Location",
      point3Desc: "Located in Br. Dinas Kangkaang, Desa Kerthamandala, Abang District, Karangasem Regency.",
      badgeTitle: "Friendly Service",
      badgeDesc: "For Your Comfort"
    },
    blog: {
      badge: "LOCAL INSIGHTS & TIPS",
      title: "Blog / Stories from Karangasem",
      more: "See All Stories",
      readMore: "Read full guide"
    },
    testimonials: {
      badge: "GUEST EXPERIENCES",
      title: "What Our Guests Say"
    },
    ctaBanner: {
      title: "Reclaim the Authentic Essence of Peace",
      description: "Enjoy a relaxing vacation with family. Contact our liaison via WhatsApp now to check unit availability.",
      btnBook: "Book / Check Availability",
      btnEmail: "Send Email"
    },
    footer: {
      description: "Villa Agus Familly, the best family resting place in Karangasem with complete facilities.",
      navTitle: "Navigation",
      contactTitle: "Contact Us",
      labelLocation: "Location: Br. Dinas Kangkaang, Desa Kerthamandala, Kec. Abang, Kab. Karangasem"
    }
  },
  FR: {
    nav: {
      home: "Accueil",
      rooms: "Installations",
      activities: "Activités",
      paket: "Forfaits & Tarifs",
      gallery: "Galerie",
      blog: "Blog",
      cta: "VÉRIFIER DISPONIBILITÉ",
      about: "À Propos de Nous",
      contact: "Contactez-nous",
      menuTitle: "Menu de Navigation",
      selectLang: "Sélectionner la Langue",
      checkAvail: "Vérifier la Disponibilité ?"
    },
    hero: {
      badge: "Villa Familiale Exclusive à Karangasem",
      headline: "Vacances familiales privées et paisibles à Karangasem",
      subheadline: "Profitez d'une atmosphère balinaise authentique et magnifique avec des installations complètes pour des moments intimes avec vos proches.",
      cta: "Vérifier la disponibilité via WA",
      explore: "Explorer les installations"
    },
    cottage: {
      badge: "VILLA EXCLUSIVE",
      title: "Villa Agus Familly",
      description: "Villa Agus Familly offre un confort maximal avec 3 chambres et 3 salles de bain. Conçue pour les familles avec une capacité allant jusqu'à 6 personnes, cette villa est l'endroit idéal pour se reposer après avoir exploré la beauté de Karangasem.",
      facilitiesTitle: "Installations Principales",
      maxGuests: "Max 6 Invités",
      acOption: "Équipé de la climatisation",
      privateBathroom: "3 Salles de bain",
      privateTerrace: "Parking spacieux"
    },
    usp: {
      badge: "INSTALLATIONS PRINCIPALES",
      title: "Nos Avantages",
      subtitle: "Villa Agus Familly offre des installations complètes pour que vous et votre famille vous sentiez comme à la maison pendant votre séjour.",
      usp1Title: "Installations Complètes",
      usp1Desc: "Équipé du Wifi gratuit, de la climatisation et de l'eau chaude pour votre confort.",
      usp2Title: "Intimité et Confort",
      usp2Desc: "Capacité jusqu'à 6 personnes avec 3 chambres spacieuses.",
      usp3Title: "Emplacement Stratégique",
      usp3Desc: "Situé à Karangasem, accès facile à diverses destinations touristiques intéressantes.",
    },
    pursuits: {
      badge: "ACTIVITÉS À KARANGASEM",
      title: "Forfaits de Voyage & Activités",
      consultation: "Consultation d'Activités",
      btnMore: "En savoir plus"
    },
    gallerySec: {
      badge: "MOMENTS CAPTURÉS",
      title: "Galerie Visuelle de la Villa Agus Familly",
      all: "Tout",
      accommodation: "Villa & Chambres",
      activity: "Activités"
    },
    wcu: {
      badge: "POURQUOI NOUS",
      titlePart1: "Pourquoi choisir",
      titlePart2: "la Villa Agus Familly ?",
      description: "Nous nous engageons à offrir confort et intimité à votre famille avec les meilleures installations.",
      point1Title: "Capacité Familiale",
      point1Desc: "Avec 3 chambres et 3 salles de bain, elle est très adaptée aux familles jusqu'à 6 personnes.",
      point2Title: "Installations Modernes",
      point2Desc: "Profitez du Wifi gratuit, de la climatisation, de l'eau chaude et d'un parking sécurisé.",
      point3Title: "Emplacement Pratique",
      point3Desc: "Situé à Br. Dinas Kangkaang, Desa Kerthamandala, District d'Abang, Régence de Karangasem.",
      badgeTitle: "Service Amical",
      badgeDesc: "Pour votre confort"
    },
    blog: {
      badge: "INFORMATIONS ET CONSEILS LOCAUX",
      title: "Blog / Histoires de Karangasem",
      more: "Voir toutes les histoires",
      readMore: "Lire le guide complet"
    },
    testimonials: {
      badge: "EXPÉRIENCES DES INVITÉS",
      title: "Ce que disent nos invités"
    },
    ctaBanner: {
      title: "Retrouvez l'Essence Véritable de la Paix",
      description: "Profitez de vacances relaxantes en famille. Contactez notre responsable via WhatsApp maintenant pour vérifier la disponibilité des unités.",
      btnBook: "Réserver / Vérifier la disponibilité",
      btnEmail: "Envoyer un e-mail"
    },
    footer: {
      description: "Villa Agus Familly, le meilleur lieu de repos familial à Karangasem avec des installations complètes.",
      navTitle: "Navigation",
      contactTitle: "Contactez-nous",
      labelLocation: "Emplacement: Br. Dinas Kangkaang, Desa Kerthamandala, Kec. Abang, Kab. Karangasem"
    }
  },
  DE: {
    nav: {
      home: "Startseite",
      rooms: "Einrichtungen",
      activities: "Aktivitäten",
      paket: "Pakete & Preise",
      gallery: "Galerie",
      blog: "Blog",
      cta: "WA-VERFÜGBARKEIT",
      about: "Über Uns",
      contact: "Kontakt",
      menuTitle: "Navigationsmenü",
      selectLang: "Sprache auswählen",
      checkAvail: "Verfügbarkeit prüfen?"
    },
    hero: {
      badge: "Exklusive Familienvilla in Karangasem",
      headline: "Privater und ruhiger Familienurlaub in Karangasem",
      subheadline: "Genießen Sie die schöne und authentische Bali-Atmosphäre mit kompletter Ausstattung für intime Momente mit Ihren Liebsten.",
      cta: "Verfügbarkeit via WA prüfen",
      explore: "Einrichtungen entdecken"
    },
    cottage: {
      badge: "EXKLUSIVE VILLA",
      title: "Villa Agus Familly",
      description: "Villa Agus Familly bietet maximalen Komfort mit 3 Schlafzimmern und 3 Badezimmern. Entworfen für Familien mit einer Kapazität von bis zu 6 Personen, ist diese Villa der perfekte Ort zum Ausruhen nach der Erkundung der Schönheit von Karangasem.",
      facilitiesTitle: "Hauptausstattung",
      maxGuests: "Max 6 Gäste",
      acOption: "Ausgestattet mit Klimaanlage",
      privateBathroom: "3 Badezimmer",
      privateTerrace: "Großzügiger Parkplatz"
    },
    usp: {
      badge: "HAUPTAUSSTATTUNG",
      title: "Unsere Vorteile",
      subtitle: "Villa Agus Familly bietet eine komplette Ausstattung, damit Sie und Ihre Familie sich während Ihres Aufenthalts wie zu Hause fühlen.",
      usp1Title: "Komplette Ausstattung",
      usp1Desc: "Ausgestattet mit kostenlosem Wifi, Klimaanlage und Warmwasser für Ihren Komfort.",
      usp2Title: "Privatsphäre und Komfort",
      usp2Desc: "Kapazität bis zu 6 Personen mit 3 geräumigen Schlafzimmern.",
      usp3Title: "Strategische Lage",
      usp3Desc: "Gelegen in Karangasem, einfacher Zugang zu verschiedenen interessanten Touristenzielen.",
    },
    pursuits: {
      badge: "KARANGASEM AKTIVITÄTEN",
      title: "Reisepakete & Umgebung",
      consultation: "Aktivitätsberatung",
      btnMore: "Mehr sehen"
    },
    gallerySec: {
      badge: "EINGEFANGENE MOMENTE",
      title: "Villa Agus Familly Bildergalerie",
      all: "Alle",
      accommodation: "Villa & Zimmer",
      activity: "Aktivitäten"
    },
    wcu: {
      badge: "WARUM WIR",
      titlePart1: "Warum Villa",
      titlePart2: "Agus Familly wählen?",
      description: "Wir verpflichten uns, Ihrer Familie mit der besten Ausstattung Komfort und Privatsphäre zu bieten.",
      point1Title: "Familienkapazität",
      point1Desc: "Mit 3 Schlafzimmern und 3 Badezimmern ist sie sehr gut für Familien bis zu 6 Personen geeignet.",
      point2Title: "Moderne Ausstattung",
      point2Desc: "Genießen Sie kostenloses Wifi, Klimaanlage, Warmwasser und sicheres Parken.",
      point3Title: "Bequeme Lage",
      point3Desc: "Gelegen in Br. Dinas Kangkaang, Desa Kerthamandala, Bezirk Abang, Regierungsbezirk Karangasem.",
      badgeTitle: "Freundlicher Service",
      badgeDesc: "Für Ihren Komfort"
    },
    blog: {
      badge: "LOKALE EINBLICKE & TIPPS",
      title: "Blog / Geschichten aus Karangasem",
      more: "Alle Geschichten sehen",
      readMore: "Vollständigen Reiseführer lesen"
    },
    testimonials: {
      badge: "GÄSTEEINDRUCK",
      title: "Was unsere Gäste sagen"
    },
    ctaBanner: {
      title: "Finden Sie den wahren Geist der Ruhe wieder",
      description: "Genießen Sie einen entspannten Urlaub mit Ihrer Familie. Kontaktieren Sie unseren Ansprechpartner jetzt via WhatsApp, um die Verfügbarkeit der Unterkunft zu prüfen.",
      btnBook: "Buchen / Verfügbarkeit prüfen",
      btnEmail: "E-Mail senden"
    },
    footer: {
      description: "Villa Agus Familly, der beste Ruheort für Familien in Karangasem mit kompletter Ausstattung.",
      navTitle: "Navigation",
      contactTitle: "Kontaktieren Sie uns",
      labelLocation: "Ort: Br. Dinas Kangkaang, Desa Kerthamandala, Kec. Abang, Kab. Karangasem"
    }
  }
};
