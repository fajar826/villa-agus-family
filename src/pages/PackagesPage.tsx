import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Clock, 
  CheckCircle2, 
  ChevronRight, 
  MessageCircle, 
  ShieldCheck, 
  Compass, 
  Waves, 
  Users, 
  Sparkles, 
  Utensils, 
  Ship,
  Map,
  BadgePercent,
  Check,
  X
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export const PackagesPage = () => {
  const { language } = useLanguage();
  const currentLang = (language || "ID") as "ID" | "EN" | "FR" | "DE";
  
  // Set default active tab: "trip" or "dive"
  const [activeTab, setActiveTab] = useState<"trip" | "dive">("trip");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  // Detailed official data matching your images perfectly
  const tripPackages = [
    {
      id: "trip-3d2n-snorkeling",
      title: "Special Snorkeling 3D2N",
      subtitle: "Paket 3D2N - 2 PAX",
      duration: "3D2N",
      pax: "2 PAX",
      price: "9.425.000",
      roomType: "Kamar AC",
      icon: <Compass className="text-emerald-400" size={24} />,
      image: "https://fusofyeqniyyunromgnh.supabase.co/storage/v1/object/public/pemandangan%20dan%20aktivitas/aktivitas%20dan%20pemandangan1.jpeg",
      features: {
        ID: [
          "Kamar AC selama 2 Malam",
          "Makan 3x sehari (Prasmanan Makanan Segar)",
          "Tiket & Kamar Mandi di Kapal penyeberangan",
          "Penjemputan & Pengantaran Bandara Sorong PP",
          "Penjemputan & Pengantaran Pelabuhan Misool PP",
          "Trip berlayar selama 2 hari penuh",
          "Tiket masuk ke seluruh objek wisata Misool"
        ],
        EN: [
          "Air-Conditioned Cozy Room for 2 Nights",
          "Full board dining (3 meals per day - Local Bounty)",
          "Ferry tickets & private cabin access on transit boat",
          "Sorong Airport Pick-up & Drop-off service",
          "Misool Port speedboat transfers",
          "2 Full Days private island-hopping snorkeling boat",
          "Admission tickets to all beautiful tourist spots"
        ],
        FR: [
          "Chambre climatisée confortable pour 2 nuits",
          "Pension complète (3 repas par jour - Produits frais)",
          "Billets de ferry & accès cabine privée",
          "Service de navette Aéroport de Sorong AR",
          "Transferts en vedette rapide Port de Misool",
          "2 jours de bateau de snorkeling privé",
          "Billets d'entrée pour tous les sites touristiques"
        ],
        DE: [
          "Klimatisiertes gemütliches Zimmer für 2 Nächte",
          "Vollpension (3 frische Mahlzeiten pro Tag)",
          "Fährtickets & Zugang zur Kabine auf dem Transitboot",
          "Sorong Flughafen Abhol- & Bringservice",
          "Speedboot-Transfers Hafen Misool",
          "2 volle Tage privates Schnorchel-Ausflugsboot",
          "Eintrittskarten für alle Nationalpark-Sehenswürdigkeiten"
        ]
      },
      badge: "SANGAT POPULER"
    },
    {
      id: "trip-4d3n-special",
      title: "Special Hopping & Snorkeling",
      subtitle: "Paket 4D3N - 2 PAX",
      duration: "4D3N",
      pax: "2 PAX",
      price: "11.675.000",
      roomType: "Kamar AC",
      icon: <Sparkles className="text-emerald-400" size={24} />,
      image: "https://fusofyeqniyyunromgnh.supabase.co/storage/v1/object/public/pemandangan%20dan%20aktivitas/pemandangan2.jpeg",
      features: {
        ID: [
          "Kamar AC selama 3 Malam",
          "Makan 3x sehari (Prasmanan Makanan Segar)",
          "Tiket & Kamar Mandi di Kapal penyeberangan",
          "Penjemputan & Pengantaran Bandara Sorong PP",
          "Penjemputan & Pengantaran Pelabuhan Misool PP",
          "Trip berlayar selama 3 hari penuh",
          "Tiket masuk ke seluruh objek wisata Misool"
        ],
        EN: [
          "Air-Conditioned Cozy Room for 3 Nights",
          "Full board dining (3 meals per day - Local Bounty)",
          "Ferry tickets & private cabin access on transit boat",
          "Sorong Airport Pick-up & Drop-off service",
          "Misool Port speedboat transfers",
          "3 Full Days private island-hopping snorkeling boat",
          "Admission tickets to all beautiful tourist spots"
        ],
        FR: [
          "Chambre climatisée confortable pour 3 nuits",
          "Pension complète (3 repas par jour - Produits frais)",
          "Billets de ferry & accès cabine privée",
          "Service de navette Aéroport de Sorong AR",
          "Transferts en vedette rapide Port de Misool",
          "3 jours de bateau de snorkeling privé",
          "Billets d'entrée pour tous les sites de Misool"
        ],
        DE: [
          "Klimatisiertes gemütliches Zimmer für 3 Nächte",
          "Vollpension (3 frische Mahlzeiten pro Tag)",
          "Fährtickets & Zugang zur Kabine auf dem Transitboot",
          "Sorong Flughafen Abhol- & Bringservice",
          "Speedboot-Transfers Hafen Misool",
          "3 volle Tage privates Schnorchel-Ausflugsboot",
          "Eintrittskarten für alle Nationalpark-Sehenswürdigkeiten"
        ]
      },
      badge: "EKSPLORASI OPTIMAL"
    },
    {
      id: "trip-3d2n-4pax",
      title: "Hopping Island & Snorkeling",
      subtitle: "Paket 3D2N - 4 PAX (Hemat Kelompok)",
      duration: "3D2N",
      pax: "4 PAX",
      price: "8.175.000",
      roomType: "Kamar AC",
      icon: <Users className="text-emerald-400" size={24} />,
      image: "https://fusofyeqniyyunromgnh.supabase.co/storage/v1/object/public/pemandangan%20dan%20aktivitas/aktivitas5.jpeg",
      features: {
        ID: [
          "Kamar AC selama 2 Malam",
          "Makan 3x sehari (Prasmanan Makanan Segar)",
          "Tiket & Kamar Mandi di Kapal penyeberangan",
          "Penjemputan & Pengantaran Bandara Sorong PP",
          "Penjemputan & Pengantaran Pelabuhan Misool PP",
          "Trip berlayar selama 2 hari penuh",
          "Tiket masuk ke seluruh objek wisata Misool"
        ],
        EN: [
          "Air-Conditioned Cozy Room for 2 Nights",
          "Full board dining (3 meals per day - Local Bounty)",
          "Ferry tickets & private cabin access on transit boat",
          "Sorong Airport Pick-up & Drop-off service",
          "Misool Port speedboat transfers",
          "2 Full Days private island-hopping snorkeling boat",
          "Admission tickets to all beautiful tourist spots"
        ],
        FR: [
          "Chambre climatisée confortable pour 2 nuits",
          "Pension complète (3 repas par jour - Produits frais)",
          "Billets de ferry & accès cabine privée",
          "Service de navette Aéroport de Sorong AR",
          "Transferts en vedette rapide Port de Misool",
          "2 jours de bateau de snorkeling privé",
          "Billets d'entrée pour tous les sites touristiques"
        ],
        DE: [
          "Klimatisiertes gemütliches Zimmer für 2 Nächte",
          "Vollpension (3 frische Mahlzeiten pro Tag)",
          "Fährtickets & Zugang zur Kabine auf dem Transitboot",
          "Sorong Flughafen Abhol- & Bringservice",
          "Speedboot-Transfers Hafen Misool",
          "2 volle Tage privates Schnorchel-Ausflugsboot",
          "Eintrittskarten für alle Nationalpark-Sehenswürdigkeiten"
        ]
      },
      badge: "BEST VALUE FOR GROUP"
    },
    {
      id: "trip-6d5n-enjoy",
      title: "Enjoy Hopping & Snorkeling",
      subtitle: "Paket 6D5N - 2 PAX (Santai Maksimal)",
      duration: "6D5N",
      pax: "2 PAX",
      price: "13.550.000",
      roomType: "Kamar Kipas",
      icon: <Ship className="text-emerald-400" size={24} />,
      image: "https://fusofyeqniyyunromgnh.supabase.co/storage/v1/object/public/pemandangan%20dan%20aktivitas/pemandangan.jpeg",
      features: {
        ID: [
          "Kamar Kipas selama 5 Malam",
          "Makan 3x sehari (Prasmanan Makanan Segar)",
          "Tiket & Kamar Mandi di Kapal penyeberangan",
          "Penjemputan & Pengantaran Bandara Sorong PP",
          "Penjemputan & Pengantaran Pelabuhan Misool PP",
          "Trip berlayar selama 4 hari penuh",
          "Tiket masuk ke seluruh objek wisata Misool"
        ],
        EN: [
          "Cozy Eco Fan Room for 5 Nights",
          "Full board dining (3 meals per day - Local Bounty)",
          "Ferry tickets & private cabin access on transit boat",
          "Sorong Airport Pick-up & Drop-off service",
          "Misool Port speedboat transfers",
          "4 Full Days private island-hopping snorkeling boat",
          "Admission tickets to all beautiful tourist spots"
        ],
        FR: [
          "Chambre avec ventilateur écologique pour 5 nuits",
          "Pension complète (3 repas par jour - Produits frais)",
          "Billets de ferry & accès cabine privée",
          "Service de navette Aéroport de Sorong AR",
          "Transferts en vedette rapide Port de Misool",
          "4 jours de bateau de snorkeling privé",
          "Billets d'entrée pour tous les sites touristiques"
        ],
        DE: [
          "Gemütliches Eco-Lüfter-Zimmer für 5 Nächte",
          "Vollpension (3 frische Mahlzeiten pro Tag)",
          "Fährtickets & Zugang zur Kabine auf dem Transitboot",
          "Sorong Flughafen Abhol- & Bringservice",
          "Speedboot-Transfers Hafen Misool",
          "4 volle Tage privates Schnorchel-Ausflugsboot",
          "Eintrittskarten für alle Nationalpark-Sehenswürdigkeiten"
        ]
      },
      badge: "SLOWER TRAVEL EXPERIENCES"
    }
  ];

  const divePackages = [
    {
      id: "dive-3d2n-special",
      title: "Special Diving Package",
      subtitle: "Paket 3D2N - 2 PAX (3 Sesi Menyelam)",
      duration: "3D2N",
      pax: "2 PAX",
      price: "13.950.000",
      roomType: "Kamar AC",
      icon: <Waves className="text-purple-400" size={24} />,
      image: "https://fusofyeqniyyunromgnh.supabase.co/storage/v1/object/public/pemandangan%20dan%20aktivitas/diving.jpeg",
      features: {
        ID: [
          "Kamar AC selama 2 Malam",
          "Makan 3x sehari (Prasmanan Makanan Segar)",
          "Tiket & Kamar Mandi di Kapal penyeberangan",
          "Penjemputan & Pengantaran Bandara Sorong PP",
          "Penjemputan & Pengantaran Pelabuhan Misool PP",
          "Diving 1 Hari (3x Penyelaman/Orang + Alat & Guide)",
          "Trip Hopping Island selama 1 Hari",
          "Tiket masuk ke seluruh objek wisata Misool"
        ],
        EN: [
          "Air-Conditioned Cozy Room for 2 Nights",
          "Full board dining (3 meals per day - Local Bounty)",
          "Ferry tickets & private cabin access on transit boat",
          "Sorong Airport Pick-up & Drop-off service",
          "Misool Port speedboat transfers",
          "Diving 1 Day (3 Sells/Dives Per Person incl. Gear & Guide)",
          "Private Island Hopping for 1 Day",
          "Admission tickets to all beautiful tourist spots"
        ],
        FR: [
          "Chambre climatisée confortable pour 2 nuits",
          "Pension complète (3 repas par jour - Produits frais)",
          "Billets de ferry & accès cabine privée",
          "Service de navette Aéroport de Sorong AR",
          "Transferts en vedette rapide Port de Misool",
          "Plongée sous-marine 1 jour (3 plongées/personne incl. kit & guide)",
          "Island Hopping d'une journée complète",
          "Billets d'entrée pour tous les sites touristiques"
        ],
        DE: [
          "Klimatisiertes gemütliches Zimmer für 2 Nächte",
          "Vollpension (3 frische Mahlzeiten pro Tag)",
          "Fährtickets & Zugang zur Kabine auf dem Transitboot",
          "Sorong Flughafen Abhol- & Bringservice",
          "Speedboot-Transfers Hafen Misool",
          "Diving 1 Tag (3 Tauchgänge pro Person inkl. Ausrüstung & Guide)",
          "Privates Island Hopping für 1 Tag",
          "Eintrittskarten für alle Nationalpark-Sehenswürdigkeiten"
        ]
      },
      badge: "RECOOMENDED UNTUK WEEKEND DIVER"
    },
    {
      id: "dive-4d3n-hopping",
      title: "Special Diving & Hopping",
      subtitle: "Paket 4D3N - 2 PAX (6 Sesi Menyelam)",
      duration: "4D3N",
      pax: "2 PAX",
      price: "17.175.000",
      roomType: "Kamar AC",
      icon: <Sparkles className="text-purple-400" size={24} />,
      image: "https://fusofyeqniyyunromgnh.supabase.co/storage/v1/object/public/pemandangan%20dan%20aktivitas/diving4.jpeg",
      features: {
        ID: [
          "Kamar AC selama 3 Malam",
          "Makan 3x sehari (Prasmanan Makanan Segar)",
          "Tiket & Kamar Mandi di Kapal penyeberangan",
          "Penjemputan & Pengantaran Bandara Sorong PP",
          "Penjemputan & Pengantaran Pelabuhan Misool PP",
          "Diving 2 Hari (6x Penyelaman/Orang + Alat & Guide)",
          "Trip Hopping Island selama 1 Hari",
          "Tiket masuk ke seluruh objek wisata Misool"
        ],
        EN: [
          "Air-Conditioned Cozy Room for 3 Nights",
          "Full board dining (3 meals per day - Local Bounty)",
          "Ferry tickets & private cabin access on transit boat",
          "Sorong Airport Pick-up & Drop-off service",
          "Misool Port speedboat transfers",
          "Diving 2 Days (6 Sells/Dives Per Person incl. Gear & Guide)",
          "Private Island Hopping for 1 Day",
          "Admission tickets to all beautiful tourist spots"
        ],
        FR: [
          "Chambre climatisée confortable pour 3 nuits",
          "Pension complète (3 repas par jour - Produits frais)",
          "Billets de ferry & accès cabine privée",
          "Service de navette Aéroport de Sorong AR",
          "Transferts en vedette rapide Port de Misool",
          "Plongée sous-marine 2 jours (6 plongées/personne incl. kit & guide)",
          "Island Hopping d'une journée complète",
          "Billets d'entrée pour tous les sites touristiques"
        ],
        DE: [
          "Klimatisiertes gemütliches Zimmer für 3 Nächte",
          "Vollpension (3 frische Mahlzeiten pro Tag)",
          "Fährtickets & Zugang zur Kabine auf dem Transitboot",
          "Sorong Flughafen Abhol- & Bringservice",
          "Speedboot-Transfers Hafen Misool",
          "Diving 2 Tage (6 Tauchgänge pro Person inkl. Ausrüstung & Guide)",
          "Privates Island Hopping für 1 Tag",
          "Eintrittskarten für alle Nationalpark-Sehenswürdigkeiten"
        ]
      },
      badge: "WORLD-CLASS CORAL EXPLORER"
    },
    {
      id: "dive-9d8n-enjoy",
      title: "Enjoy Dive & Island Hopping",
      subtitle: "Paket 9D8N - 2 PAX (12 Sesi Menyelam)",
      duration: "9D8N",
      pax: "2 PAX",
      price: "33.350.000",
      roomType: "Kamar Kipas",
      icon: <Waves className="text-purple-400" size={24} />,
      image: "https://fusofyeqniyyunromgnh.supabase.co/storage/v1/object/public/pemandangan%20dan%20aktivitas/diving6.jpeg",
      features: {
        ID: [
          "Kamar Kipas selama 8 Malam",
          "Makan 3x sehari (Prasmanan Makanan Segar)",
          "Tiket & Kamar Mandi di Kapal penyeberangan",
          "Penjemputan & Pengantaran Bandara Sorong PP",
          "Penjemputan & Pengantaran Pelabuhan Misool PP",
          "Diving 6 Hari (12x Penyelaman/Orang + Alat & Guide)",
          "Trip Hopping Island selama 2 Hari",
          "Tiket masuk ke seluruh objek wisata Misool"
        ],
        EN: [
          "Cozy Eco Fan Room for 8 Nights",
          "Full board dining (3 meals per day - Local Bounty)",
          "Ferry tickets & private cabin access on transit boat",
          "Sorong Airport Pick-up & Drop-off service",
          "Misool Port speedboat transfers",
          "Diving 6 Days (12 Sells/Dives Per Person incl. Gear & Guide)",
          "Private Island Hopping for 2 Days",
          "Admission tickets to all beautiful tourist spots"
        ],
        FR: [
          "Chambre avec ventilateur écologique pour 8 nuits",
          "Pension complète (3 repas par jour - Produits frais)",
          "Billets de ferry & accès cabine privée",
          "Service de navette Aéroport de Sorong AR",
          "Transferts en vedette rapide Port de Misool",
          "Plongée sous-marine 6 jours (12 plongées/personne incl. kit & guide)",
          "Island Hopping sur 2 jours complets",
          "Billets d'entrée pour todos los sitios de Misool"
        ],
        DE: [
          "Gemütliches Eco-Lüfter-Zimmer für 8 Nächte",
          "Vollpension (3 frische Mahlzeiten pro Tag)",
          "Fährtickets & Zugang zur Kabine auf dem Transitboot",
          "Sorong Flughafen Abhol- & Bringservice",
          "Speedboot-Transfers Hafen Misool",
          "Diving 6 Tage (12 Tauchgänge pro Person inkl. Ausrüstung & Guide)",
          "Privates Island Hopping für 2 Tage",
          "Eintrittskarten für alle Nationalpark-Sehenswürdigkeiten"
        ]
      },
      badge: "ULTIMATE DIVE EXPEDITION"
    },
    {
      id: "dive-6d5n-enjoy",
      title: "Enjoy Dive Package",
      subtitle: "Paket 6D5N - 2 PAX (10 Sesi Menyelam)",
      duration: "6D5N",
      pax: "2 PAX",
      price: "24.550.000",
      roomType: "Kamar Kipas",
      icon: <Waves className="text-purple-400" size={24} />,
      image: "https://fusofyeqniyyunromgnh.supabase.co/storage/v1/object/public/pemandangan%20dan%20aktivitas/diving5.jpeg",
      features: {
        ID: [
          "Kamar Kipas selama 5 Malam",
          "Makan 3x sehari (Prasmanan Makanan Segar)",
          "Tiket & Kamar Mandi di Kapal penyeberangan",
          "Penjemputan & Pengantaran Bandara Sorong PP",
          "Penjemputan & Pengantaran Pelabuhan Misool PP",
          "Diving 4 Hari (10x Penyelaman/Orang + Alat & Guide)",
          "Tiket masuk ke seluruh objek wisata Misool"
        ],
        EN: [
          "Cozy Eco Fan Room for 5 Nights",
          "Full board dining (3 meals per day - Local Bounty)",
          "Ferry tickets & private cabin access on transit boat",
          "Sorong Airport Pick-up & Drop-off service",
          "Misool Port speedboat transfers",
          "Diving 4 Days (10 Sells/Dives Per Person incl. Gear & Guide)",
          "Admission tickets to all beautiful tourist spots"
        ],
        FR: [
          "Chambre avec ventilateur écologique pour 5 nuits",
          "Pension complète (3 repas par jour - Produits frais)",
          "Billets de ferry & accès cabine privée",
          "Service de navette Aéroport de Sorong AR",
          "Transferts en vedette rapide Port de Misool",
          "Plongée sous-marine 4 jours (10 plongées/personne incl. kit & guide)",
          "Billets d'entrée pour tous les sites touristiques"
        ],
        DE: [
          "Gemütliches Eco-Lüfter-Zimmer für 5 Nächte",
          "Vollpension (3 frische Mahlzeiten pro Tag)",
          "Fährtickets & Zugang zur Kabine auf dem Transitboot",
          "Sorong Flughafen Abhol- & Bringservice",
          "Speedboot-Transfers Hafen Misool",
          "Diving 4 Tage (10 Tauchgänge pro Person inkl. Ausrüstung & Guide)",
          "Eintrittskarten für alle Nationalpark-Sehenswürdigkeiten"
        ]
      },
      badge: "INTENSIVE SCUBA ADVENTURE"
    }
  ];

  const currentPackages = activeTab === "trip" ? tripPackages : divePackages;

  return (
    <div className="bg-[#FAF9F5] min-h-screen text-stone-800 font-sans">
      
      {/* 1. Hero Header Banner */}
      <section className="relative pt-36 pb-24 md:pt-44 md:pb-32 bg-zinc-950 overflow-hidden text-white border-b border-stone-200">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://fusofyeqniyyunromgnh.supabase.co/storage/v1/object/public/pemandangan%20dan%20aktivitas/pemandangan.jpeg" 
            className="w-full h-full object-cover opacity-25 filter brightness-75 scale-105"
            alt="Misool Resort Exterior"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-zinc-950/80 to-[#FAF9F5]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-premium-purple/20 border border-premium-purple/30 text-purple-200 text-[10px] font-bold uppercase tracking-widest mb-6 rounded-md backdrop-blur-md">
              <Sparkles size={11} className="text-premium-purple" /> 
              {currentLang === "ID" ? "OFFICIAL TRIP & DIVING PRICING" : "OFFICIAL RATES"}
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-black text-white mb-6 leading-tight tracking-tight">
              {currentLang === "ID" ? "Daftar Paket Resmi" : "Official Stay & Tour Packages"} <br />
              <span className="text-emerald-400 italic font-light font-sans">Nut Tonton Homes Misool</span>
            </h1>
            <p className="text-sm md:text-base text-zinc-300 font-light leading-relaxed max-w-2xl mx-auto">
              {currentLang === "ID" 
                ? "Semua paket sudah termasuk fasilitas penginapan cottage beachfront, makan prasmanan 3x sehari, antar-jemput pelabuhan/bandara, tiket penyeberangan kapal ferry, dan perahu eksplorasi privat."
                : "All packages include beachfront cottage accommodation, full-board meals, round-trip airport/port transfers, fast ferry tickets, and private tour excursions."
              }
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Live Package Categories Tabs Selector */}
      <section className="relative z-20 -mt-10 max-w-xl mx-auto px-6 mb-16">
        <div className="bg-white/80 backdrop-blur-md p-1.5 rounded-full border border-stone-200 shadow-xl flex gap-1 justify-center">
          
          <button
            onClick={() => setActiveTab("trip")}
            className={`flex-1 py-3 px-6 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
              activeTab === "trip"
                ? "bg-emerald-600 text-white shadow-md shadow-emerald-700/15"
                : "text-stone-600 hover:text-stone-900 hover:bg-stone-50"
            }`}
          >
            <Compass size={16} />
            {currentLang === "ID" ? "Paket Trip & Snorkeling" : "Snorkeling Packages"}
          </button>

          <button
            onClick={() => setActiveTab("dive")}
            className={`flex-1 py-3 px-6 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
              activeTab === "dive"
                ? "bg-purple-600 text-white shadow-md shadow-purple-950/15"
                : "text-stone-600 hover:text-stone-900 hover:bg-stone-50"
            }`}
          >
            <Waves size={16} />
            {currentLang === "ID" ? "Paket Diving (Scuba)" : "Diving Packages"}
          </button>

        </div>
      </section>

      {/* 3. Render Interactively Customized Package Grid */}
      <section className="pb-24 px-6 max-w-7xl mx-auto">
        
        {/* Intro Tagline */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 mb-2">
            {activeTab === "trip" 
              ? (currentLang === "ID" ? "Pilihan Paket Snorkeling & Island Hopping" : "Island Hopping & Snorkeling Adventures")
              : (currentLang === "ID" ? "Pilihan Paket Penyelaman Scuba Eksklusif" : "Deep Sea Scuba Diving Adventures")
            }
          </h2>
          <p className="text-xs md:text-sm text-stone-500 max-w-xl mx-auto font-light">
            {activeTab === "trip"
              ? (currentLang === "ID" 
                  ? "Eksplorasi jajaran lagoon ikonik, danau ubur-ubur, dan puncak karst spektakuler di sekitar pulau Misool." 
                  : "Explore scenic lagoons, stingless jellyfish lakes, and spectacular pinnacles around Misool.")
              : (currentLang === "ID" 
                  ? "Dilengkapi tangki, pemberat, boat penyelaman, pemandu berlisensi setempat (Dive Master), dan sewa peralatan scuba siap pakai." 
                  : "Fully equipped with dive boat, tanks, weights, certified local Dive Master, and high-quality scuba gear rental.")
            }
          </p>
        </div>

        {/* Dynamic Animated Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          <AnimatePresence mode="popLayout">
            {currentPackages.map((pkg) => {
              // Create dynamic custom WhatsApp messages
              const waTextID = `Halo Nut Tonton Homes Misool, saya tertarik melakukan pemesanan untuk paket kami:
*Paket:* ${pkg.title} (${pkg.subtitle})
*Harga:* Rp ${pkg.price} / Orang
*Tipe Kamar:* ${pkg.roomType}
Tolong bantu informasikan detail tanggal ketersediaan terdekat. Terima kasih!`;
              const waUrl = `https://wa.me/6282199327798?text=${encodeURIComponent(waTextID)}`;

              return (
                <motion.div
                  key={pkg.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 15 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-3xl border border-stone-200 shadow-xl overflow-hidden flex flex-col hover:shadow-2xl transition-all duration-300 relative group"
                >
                  {/* Subtle Top Accent Ribbon */}
                  <div className={`h-1.5 w-full ${activeTab === "trip" ? "bg-emerald-500" : "bg-purple-500"}`}></div>

                  {/* Header Image Cover */}
                  <div 
                    onClick={() => setLightboxImage(pkg.image)}
                    className="relative h-56 sm:h-64 overflow-hidden cursor-zoom-in group/img"
                  >
                    <img 
                      src={pkg.image} 
                      alt={pkg.title} 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent transition-all duration-300 group-hover/img:via-black/40"></div>
                    
                    {/* Hover zoom text/indicator */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/60 backdrop-blur-sm text-white text-[10px] font-bold tracking-widest px-4 py-2.5 rounded-full border border-white/10 uppercase opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 pointer-events-none shadow-lg whitespace-nowrap">
                      🔍 {currentLang === "ID" ? "Klik untuk Memperbesar" : "Click to Zoom"}
                    </div>
                    
                    {/* Badge Pill for Quality Seal */}
                    <span className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-[9px] font-bold tracking-widest px-3 py-1.5 rounded-full border border-white/10 uppercase">
                      ⭐ {pkg.badge}
                    </span>

                    {/* Room Type Tag */}
                    <span className="absolute top-4 right-4 bg-emerald-600/90 backdrop-blur-md text-white text-[9px] font-bold tracking-widest px-3 py-1.5 rounded-full uppercase">
                      🏨 {pkg.roomType}
                    </span>
                    
                    {/* Bottom overlay headings */}
                    <div className="absolute bottom-4 left-6 right-6 text-white">
                      <div className="flex items-center gap-3 text-[10px] text-emerald-400 font-extrabold uppercase tracking-wider mb-1">
                        <span className="flex items-center gap-1"><Clock size={11} /> {pkg.duration}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1"><Users size={11} /> {pkg.pax}</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-serif font-black tracking-tight leading-tight text-white">{pkg.title}</h3>
                    </div>
                  </div>

                  {/* Pricing / Rate Section */}
                  <div className="p-6 sm:p-8 border-b border-stone-100 bg-stone-50/50 flex flex-col sm:flex-row items-baseline sm:justify-between gap-2">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider font-extrabold text-stone-400 block mb-1">
                        {currentLang === "ID" ? "HARGA NETT PER ORANG" : "NET PRICE PER PERSON"}
                      </span>
                      <div className="flex items-baseline gap-1.5 text-stone-900">
                        <span className="text-base font-bold">Rp</span>
                        <span className={`text-3xl sm:text-4xl font-serif font-black ${activeTab === "trip" ? "text-emerald-700" : "text-purple-700"}`}>
                          {pkg.price}
                        </span>
                        <span className="text-xs text-stone-400 font-medium">/ {currentLang === "ID" ? "Orang" : "Person"}</span>
                      </div>
                    </div>
                    
                    {/* Minimum Pax Validation Tag */}
                    <div className="px-3.5 py-1.5 bg-stone-200/50 rounded-lg text-[10px] font-bold text-stone-600 uppercase tracking-widest border border-stone-200">
                      👨‍👩‍👦 {currentLang === "ID" ? `Kapasitas ${pkg.pax}` : `Includes ${pkg.pax}`}
                    </div>
                  </div>

                  {/* Bullet Inclusions Panel */}
                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="text-[10px] uppercase tracking-widest font-extrabold text-stone-400 mb-4 flex items-center gap-2">
                        <span>📋</span> 
                        {currentLang === "ID" ? "FASILITAS YANG ANDA DAPATKAN" : "SERVICES & BENEFITS INCLUDED"}
                      </h4>
                      
                      <ul className="space-y-3.5 mb-8">
                        {pkg.features[currentLang].map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                              activeTab === "trip" ? "bg-emerald-50 text-emerald-600" : "bg-purple-50 text-purple-600"
                            }`}>
                              <Check size={12} strokeWidth={3} />
                            </span>
                            <span className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Booking Call-To-Action Button */}
                    <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row gap-3">
                      <a
                        href={waUrl}
                        target="_blank"
                        rel="noreferrer"
                        className={`flex-1 py-4.5 rounded-xl text-white font-extrabold text-xs uppercase tracking-widest flex items-center justify-center gap-2.5 shadow-md active:scale-[0.98] transition-all cursor-pointer ${
                          activeTab === "trip" 
                            ? "bg-emerald-600 hover:bg-emerald-700 shadow-emerald-800/10" 
                            : "bg-purple-600 hover:bg-purple-700 shadow-purple-900/10"
                        }`}
                      >
                        <MessageCircle size={16} fill="white" />
                        {currentLang === "ID" ? "Pesan via WhatsApp" : "Book via WhatsApp"}
                      </a>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </section>

      {/* 4. Help & Inbound Customization Section */}
      <section className="py-24 bg-gradient-to-br from-zinc-950 via-stone-900 to-zinc-950 relative overflow-hidden text-white border-t border-stone-300">
        <div className="absolute top-0 right-0 w-80 h-80 bg-premium-purple/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-premium-green/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10 px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20 items-center">
            
            {/* Info Text */}
            <div>
              <span className="text-premium-purple font-bold text-xs uppercase tracking-[0.25em] mb-4 inline-block">
                {currentLang === "ID" ? "LAYANAN KUSTOM TRIP" : "CUSTOM TRIP & LOGISTICAL SUPPORT"}
              </span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 leading-tight text-white">
                Rencana Menginap Anda <br className="hidden sm:block" /> <span className="text-premium-purple italic">Butuh Penyesuaian?</span>
              </h2>
              <p className="text-zinc-400 mb-10 max-w-lg font-light leading-relaxed text-sm md:text-base">
                {currentLang === "ID" 
                  ? "Untuk rombongan di atas 4 orang, kustomisasi jumlah hari tinggal, event spesial corporate gathering, honeymoon setup, atau reservasi sewa speedboat privat tambahan, silakan hubungi asisten kami. Kami siap mengurus seluruh jadwal logistik Anda dari Sorong tanpa repot!"
                  : "Have a larger group or specific corporate gathering? Or looking for a tailored multi-day scuba diving schedule? Our team is glad to customize speedboats, beachfront dinners, and custom itinerary options for you. Leave all logistics to us."
                }
              </p>
              
              <div className="space-y-6">
                {[
                  { title: currentLang === "ID" ? "Sewa Speedboat Privat" : "Private Speedboat Charter", desc: currentLang === "ID" ? "Armada eksklusif untuk kenyamanan snorkeling rombongan pribadi Anda." : "Top-tier speedboats dedicated strictly for your family island tours." },
                  { title: currentLang === "ID" ? "Setup Acara Spesial" : "Romantic Beachfront Setups", desc: currentLang === "ID" ? "Romantic candle dinner di pantai pasir putih di bawah taburan bintang Misool." : "Fresh seafood barbecue dinner directly on white sand beachfront under the stars." },
                  { title: currentLang === "ID" ? "Sertifikasi Diving SSI" : "Scuba Diver Assistance", desc: currentLang === "ID" ? "Bantuan sewa perlengkapan diving ekstra lengkap dan rujukan lokal berlisensi." : "Top-branded BCD, regulators, dive computers and local guide guidance." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-premium-purple flex-shrink-0 border border-white/10">
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm md:text-base text-zinc-100 font-serif">{item.title}</h4>
                      <p className="text-zinc-400 text-xs font-light">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Consultation Form Card */}
            <div className="bg-white/5 backdrop-blur-xl p-8 md:p-14 rounded-3xl border border-white/10 text-center relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/15 rounded-full blur-2xl"></div>
              
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-emerald-400 px-3.5 py-1.5 bg-emerald-400/10 rounded-full mb-6 inline-block border border-emerald-400/20">
                💬 {currentLang === "ID" ? "KONSULTASI GRATIS JALUR LAYANAN" : "FREE TRAVEL CONSULTATION"}
              </span>

              <h3 className="text-xl md:text-2xl font-serif font-bold mb-6 text-white">
                {currentLang === "ID" ? "Bicarakan Rencana Liburan Anda" : "Plan Your Dream Getaway"}
              </h3>
              
              <p className="text-zinc-300 mb-10 leading-relaxed max-w-sm mx-auto font-light text-xs sm:text-sm">
                {currentLang === "ID" 
                  ? "Tanyakan jadwal kapal feri umum, biaya tambahan, pilihan dive site, atau cuaca terbaik di pulau Misool Raja Ampat secara langsung kepada asisten lokal kami."
                  : "Get answers about ferry departure times from Sorong, optimal season months, or dive site requirements directly from our helpful local crew."
                }
              </p>
              
              <a 
                href="https://wa.me/6282199327798?text=Halo%2520Nut%2520Tonton%2520Homes%2520Misool%252C%2520saya%2520ingin%2520bertanya%2520dan%2520berkonsultasi%2520mengenai%2520perjalanan%2520saya%2520ke%2520Misool." 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-premium-purple hover:opacity-90 text-white px-8 md:px-10 py-4.5 rounded-[4px] font-bold text-xs tracking-widest uppercase transition-transform shadow-2xl w-full sm:w-auto justify-center cursor-pointer active:scale-95"
              >
                <MessageCircle size={18} fill="white" /> 
                {currentLang === "ID" ? "TANYA SEKARANG VIA WHATSAPP" : "CONSULT WITH OUR EXPERTS"}
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Real-time Wide Lightbox overlay */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-[999] flex items-center justify-center p-4 cursor-zoom-out select-none"
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-6 right-6 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-colors border-none cursor-pointer z-[1000] flex items-center justify-center shadow"
              title="Close"
            >
              <X size={24} />
            </button>

            {/* Lightbox Image */}
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-5xl w-full flex flex-col items-center justify-center relative"
            >
              <img
                src={lightboxImage}
                alt="Enlarged Package View"
                referrerPolicy="no-referrer"
                className="max-h-[80vh] max-w-[90vw] object-contain rounded-2xl shadow-2xl border border-white/10"
              />
              <p className="text-stone-300 text-xs mt-4 font-light tracking-wide bg-black/40 px-4 py-2 rounded-full">
                {currentLang === "ID" ? "Klik di luar area gambar untuk menutup" : "Click outside the image to close"}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};
