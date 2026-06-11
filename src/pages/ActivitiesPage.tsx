import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { 
  Compass, 
  MapPin, 
  Clock, 
  ChevronRight, 
  CheckCircle2, 
  Waves, 
  Droplets,
  Sunset,
  AlertCircle,
  MessageCircle,
  HelpCircle
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

// Detailed local translations for Activities Page
const localTranslations = {
  ID: {
    badge: "EKSPLORASI RAJA AMPAT",
    heroTitle: "Aktivitas Petualangan di Misool",
    heroSub: "Temukan keindahan bawah laut terkaya di dunia dan gugusan karst magis di jantung Misool Timur bersama tim lokal berpengalaman.",
    filterAll: "Semua Aktivitas",
    filterWater: "Air & Penyelaman",
    filterAdventure: "Petualangan & Ekspedisi",
    viewDetails: "Lihat Detail Sesi",
    suitability: "Kesesuaian",
    includes: "Termasuk",
    duration: "Durasi",
    unlimited: "Akses Bebas",
    contactPlanner: "Rencanakan Petualangan Kustom Anda",
    contactDesc: "Kami senang menyelenggarakan trip spesial sesuai kebutuhan liburan Anda, mulai dari ekspedisi fotografi hingga kursus menyelam keluarga.",
    contactCta: "KONSULTASI PETUALANGAN VIA WA",
    suitabilityText: {
      diving: "Penyelaman terakreditasi (SSI)",
      snorkeling: "Semua umur, ramah keluarga & pemula",
      hopping: "Pecinta lanskap, drone pilot, petualang"
    },
    activityDetails: {
      diving: {
        category: "Diving & Scuba",
        title: "The Ultimate Diving Quest",
        desc: "Jelajahi Segitiga Terumbu Karang Dunia. Pertemuan arus hangat berhutan koral melahirkan keanekaragaman hayati terbaik di planet ini.",
        location: "Fiabacet Reef & Boo Area, Misool",
        price: "Rp 1.150.000 / Penyelaman",
        duration: "3 - 4 Jam per Sesi"
      },
      snorkel: {
        category: "Water Sports",
        title: "Snorkeling & Kayaking Jernih",
        desc: "Berenang di air kristal hijau toska yang tenang dikelilingi ribuan ikan warna-warni langsung dari teras privat depan cottage Anda.",
        location: "House Reef & Pantai Usaha Jaya",
        price: "Gratis untuk Tamu Menginap",
        duration: "Bebas Seharian"
      },
      hopping: {
        category: "Boat Expedition",
        title: "Misool Island Hopping",
        desc: "Mengarungi perahu menyusuri gugusan pulau karang ikonik, laguna cinta tersembunyi yang damai, serta goa magis purbakala.",
        location: "Dafalen Love Lagoon & Goa Keramat",
        price: "Rp 1.500.000 / Tamu (Trip Berbagi)",
        duration: "1 Hari Penuh (08:00 - 17:00)"
      }
    }
  },
  EN: {
    badge: "RAJA AMPAT EXPLORATIONS",
    heroTitle: "Adventure Activities in Misool",
    heroSub: "Discover the world's richest marine biodiversity and magical karst formations in the heart of East Misool with our experienced local guides.",
    filterAll: "All Activities",
    filterWater: "Water & Diving",
    filterAdventure: "Adventure & Expedition",
    viewDetails: "View Detail Session",
    suitability: "Suitability",
    includes: "Includes",
    duration: "Duration",
    unlimited: "Free Access",
    contactPlanner: "Plan Your Custom Adventure",
    contactDesc: "We gladly host bespoke trips shaped to your ideal vacation, from specialized photography expeditions to family diving courses.",
    contactCta: "CONSULT ADVENTURE VIA WHATSAPP",
    suitabilityText: {
      diving: "Certified divers (SSI)",
      snorkeling: "All age groups, family & beginner friendly",
      hopping: "Landscape lovers, drone pilots, adventurers"
    },
    activityDetails: {
      diving: {
        category: "Diving & Scuba",
        title: "The Ultimate Diving Quest",
        desc: "Explore the global Coral Triangle. Warm upwelling currents nurture the highest marine biodiversity found anywhere on Earth.",
        location: "Fiabacet Reef & Boo Area, Misool",
        price: "Rp 1,150,000 / Dive",
        duration: "3 - 4 Hours per Session"
      },
      snorkel: {
        category: "Water Sports",
        title: "Prsitine Snorkeling & Kayaking",
        desc: "Swim in tranquil turquoise waters surrounded by thousands of colorful fishes directly from your private cottage deck.",
        location: "House Reef & Usaha Jaya Shores",
        price: "Complimentary for Stay Guests",
        duration: "Unlimited All Day"
      },
      hopping: {
        category: "Boat Expedition",
        title: "Misool Island Hopping",
        desc: "Embark on an outstanding boat tour through iconic karst islets, secret romantic lagoons, and mystical ancient caves.",
        location: "Dafalen Love Lagoon & Sacred Cave",
        price: "Rp 1,500,000 / Tax (Shared Trip)",
        duration: "Full-Day (08:00 - 17:00)"
      }
    }
  },
  FR: {
    badge: "EXPLORATIONS DE RAJA AMPAT",
    heroTitle: "Activités d'Aventure à Misool",
    heroSub: "Découvrez la biodiversité marine la plus riche au monde et les formations karstiques magiques de Misool Est, guidés par notre équipe chaleureuse.",
    filterAll: "Toutes les Activités",
    filterWater: "Eau & Plongée",
    filterAdventure: "Aventure & Expédition",
    viewDetails: "Voir les Détails",
    suitability: "Idéal pour",
    includes: "Inclus",
    duration: "Durée",
    unlimited: "Accès Libre",
    contactPlanner: "Planifiez Votre Aventure Unique",
    contactDesc: "Nous organisons volontiers vos expéditions sur-mesure selon vos envies : photographie, plongée technique ou sorties familiales.",
    contactCta: "CONSULTEZ TRIPS PAR WHATSAPP",
    suitabilityText: {
      diving: "Plongeurs brevetés (SSI)",
      snorkeling: "Tous âges, idéal pour familles & débutants",
      hopping: "Amoureux de grands paysages, pilotes de drone"
    },
    activityDetails: {
      diving: {
        category: "Diving & Scuba",
        title: "The Ultimate Diving Quest",
        desc: "Explorez le Triangle de Corail mondial. Les courants thermiques nourrissent la plus haute biodiversité marine de notre planète.",
        location: "Fiabacet Reef & Boo Area, Misool",
        price: "Rp 1.150.000 / Plongée",
        duration: "3 - 4 Heures par Session"
      },
      snorkel: {
        category: "Water Sports",
        title: "Snorkeling & Kayak Transparent",
        desc: "Nagez dans des eaux turquoise apaisantes entouré de poissons tropicaux, directement depuis la terrasse de votre cottage.",
        location: "Récif Maison & Rives d'Usaha Jaya",
        price: "Gratuit pour les Visiteurs du Resort",
        duration: "Illimité"
      },
      hopping: {
        category: "Boat Expedition",
        title: "Misool Island Hopping",
        desc: "Parcourez en bateau les célèbres sentinelles de calcaire, les lagunes cachées romantiques et les cavernes sacrées préhistoriques.",
        location: "Lagune de Dafalen & Grotte Sacrée",
        price: "Rp 1.500.000 / Pers (Partagé)",
        duration: "Journée Complète (08:00 - 17:00)"
      }
    }
  },
  DE: {
    badge: "ENTDECKUNG VON RAJA AMPAT",
    heroTitle: "Abenteuer-Aktivitäten in Misool",
    heroSub: "Entdecken Sie die reichste marine Artenvielfalt der Erde und magische Karstinseln im Herzen von Ost-Misool mit unseren erfahrenen Guides.",
    filterAll: "Alle Aktivitäten",
    filterWater: "Wasser & Tauchen",
    filterAdventure: "Abenteuer & Expedition",
    viewDetails: "Details der Session",
    suitability: "Eignung",
    includes: "Inklusive",
    duration: "Dauer",
    unlimited: "Freier Zugang",
    contactPlanner: "Planen Sie Ihr Traum-Aventure",
    contactDesc: "Gerne stellen wir maßgeschneiderte Touren ganz nach Ihren Urlaubswünschen zusammen – von Fototouren bis hin zu Tauchgängen.",
    contactCta: "BERATUNG VIA WHATSAPP ERHALTEN",
    suitabilityText: {
      diving: "Zertifizierte Taucher (SSI)",
      snorkeling: "Jedes Alter, familien- und anfängerfreundlich",
      hopping: "Landschaftsliebhaber, Drohnenpiloten, Entdecker"
    },
    activityDetails: {
      diving: {
        category: "Tauchen & Scuba",
        title: "The Ultimate Diving Quest",
        desc: "Erforschen Sie das weltweite Korallendreieck. Nährstoffreiche Meeresströmungen ernähren die dichteste marine Biosphäre der Welt.",
        location: "Fiabacet Reef & Boo Area, Misool",
        price: "Rp 1.150.000 / Tauchgang",
        duration: "3 - 4 Stunden pro Session"
      },
      snorkel: {
        category: "Wassersport",
        title: "Schnorcheln & Transparent-Kajak",
        desc: "Schwimmen Sie im kristallklaren Wasser direkt vor Ihrer eigenen privaten Cottage-Terrasse umgeben von bunten Fischen.",
        location: "Hausriff & Bucht von Usaha Jaya",
        price: "Kostenfrei für Resortgäste",
        duration: "Ganztägig unbegrenzt"
      },
      hopping: {
        category: "Bootsexpedition",
        title: "Misool Island Hopping",
        desc: "Fahren Sie mit Holzbooten durch monumentale Karstberge, versteckte romantische Liebesbuchten und mythische alte Höhlen.",
        location: "Dafalen Liebeslagune & Geheiligte Höhle",
        price: "Rp 1.500.000 / Gast (Geteilte Tour)",
        duration: "Ganztägig (08:00 - 17:00)"
      }
    }
  }
};

export const ActivitiesPage = () => {
  const { language } = useLanguage();
  const t = localTranslations[language] || localTranslations.ID;
  const [activeFilter, setActiveFilter] = useState("all");

  const activitiesList = [
    {
      id: "diving-quest",
      category: t.activityDetails.diving.category,
      categoryKey: "water",
      title: t.activityDetails.diving.title,
      description: t.activityDetails.diving.desc,
      location: t.activityDetails.diving.location,
      price: t.activityDetails.diving.price,
      duration: t.activityDetails.diving.duration,
      image: "https://fusofyeqniyyunromgnh.supabase.co/storage/v1/object/public/pemandangan%20dan%20aktivitas/diving.jpeg",
      icon: <Waves className="text-emerald-600" size={24} />,
      suitability: t.suitabilityText.diving,
      includes: [
        language === "ID" ? "Dive Master Berpengalaman" : "Professional Dive Master",
        language === "ID" ? "Tabung Gas Scuba & Timbel" : "Scuba Tank & Weightbelts",
        language === "ID" ? "Kapal Antar Jemput" : "Boat Transfers Included",
        language === "ID" ? "Buah Segar & Air Kelapa" : "Fresh Fruits & Hydration"
      ]
    },
    {
      id: "snorkel-kayak",
      category: t.activityDetails.snorkel.category,
      categoryKey: "water",
      title: t.activityDetails.snorkel.title,
      description: t.activityDetails.snorkel.desc,
      location: t.activityDetails.snorkel.location,
      price: t.activityDetails.snorkel.price,
      duration: t.activityDetails.snorkel.duration,
      image: "https://fusofyeqniyyunromgnh.supabase.co/storage/v1/object/public/pemandangan%20dan%20aktivitas/aktivitas5.jpeg",
      icon: <Droplets className="text-emerald-600" size={24} />,
      suitability: t.suitabilityText.snorkeling,
      includes: [
        language === "ID" ? "Alat Snorkeling Premium" : "Premium Snorkeling Masks",
        language === "ID" ? "Sewa Kayak Transparan Bebas" : "Clear-bottom Kayak Hire",
        language === "ID" ? "Jaket Pelampung Keselamatan" : "Certified Safety Vests",
        language === "ID" ? "Pengawasan Tim Pantai" : "Beachfront Guard Support"
      ]
    },
    {
      id: "island-hop",
      category: t.activityDetails.hopping.category,
      categoryKey: "adventure",
      title: t.activityDetails.hopping.title,
      description: t.activityDetails.hopping.desc,
      location: t.activityDetails.hopping.location,
      price: t.activityDetails.hopping.price,
      duration: t.activityDetails.hopping.duration,
      image: "https://fusofyeqniyyunromgnh.supabase.co/storage/v1/object/public/pemandangan%20dan%20aktivitas/pemandangan.jpeg",
      icon: <Sunset className="text-emerald-600" size={24} />,
      suitability: t.suitabilityText.hopping,
      includes: [
        language === "ID" ? "Speedboat Charter & BBM" : "Speedboat Charter with Fuel",
        language === "ID" ? "Makan Siang Kotak Piknik" : "Gourmet Lakeside Lunch",
        language === "ID" ? "Izin Masuk & Retribusi Adat" : "Eco & Village Custom Permits",
        language === "ID" ? "Pemandu Adat Lokal Asli" : "Local Papuan Host Guide"
      ]
    }
  ];

  const filteredActivities = activeFilter === "all" 
    ? activitiesList 
    : activitiesList.filter(act => act.categoryKey === activeFilter);

  return (
    <div className="bg-white min-h-screen pt-20">
      {/* Premium Elegant Header */}
      <div className="relative h-[280px] sm:h-[380px] w-full overflow-hidden bg-zinc-950 flex items-center">
        <img 
          src="https://fusofyeqniyyunromgnh.supabase.co/storage/v1/object/public/pemandangan%20dan%20aktivitas/pemandangan2.jpeg" 
          alt="Misool Karst Scenery" 
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-zinc-950/40 to-zinc-950/60 z-10"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-20 w-full text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="text-emerald-400 font-bold text-xs uppercase tracking-[0.3em] mb-3 block">
              {t.badge}
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black tracking-tight leading-tight text-white mb-4">
              {t.heroTitle}
            </h1>
            <p className="text-white/85 text-sm sm:text-base md:text-lg font-light leading-relaxed">
              {t.heroSub}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Navigation Tabs Filter */}
        <div className="flex flex-wrap items-center justify-start gap-3 mb-16 border-b border-gray-100 pb-6">
          <button
            onClick={() => setActiveFilter("all")}
            className={`cursor-pointer px-6 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all ${
              activeFilter === "all"
                ? "bg-premium-green text-white shadow-md shadow-emerald-700/10"
                : "bg-gray-50 text-text-light hover:bg-gray-100 border border-gray-200"
            }`}
          >
            {t.filterAll}
          </button>
          <button
            onClick={() => setActiveFilter("water")}
            className={`cursor-pointer px-6 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all ${
              activeFilter === "water"
                ? "bg-premium-green text-white shadow-md shadow-emerald-700/10"
                : "bg-gray-50 text-text-light hover:bg-gray-100 border border-gray-200"
            }`}
          >
            {t.filterWater}
          </button>
          <button
            onClick={() => setActiveFilter("adventure")}
            className={`cursor-pointer px-6 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all ${
              activeFilter === "adventure"
                ? "bg-premium-green text-white shadow-md shadow-emerald-700/10"
                : "bg-gray-50 text-text-light hover:bg-gray-100 border border-gray-200"
            }`}
          >
            {t.filterAdventure}
          </button>
        </div>

        {/* Dynamic Grid Layout */}
        <div className="space-y-16">
          {filteredActivities.map((act, index) => (
            <motion.div
              key={act.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 border border-gray-100 rounded-2xl overflow-hidden card-shadow bg-white p-6 md:p-8"
            >
              {/* Photo Area */}
              <div className="lg:col-span-5 h-[260px] sm:h-[350px] lg:h-auto rounded-xl overflow-hidden relative group bg-zinc-900 shadow-inner">
                <img 
                  src={act.image} 
                  alt={act.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-zinc-950/80 backdrop-blur-md px-3.5 py-1.5 rounded text-[10px] font-bold text-white uppercase tracking-widest border border-white/10 flex items-center gap-1.5">
                  <MapPin size={12} className="text-emerald-400" />
                  {act.location}
                </div>
              </div>

              {/* Info Column */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-bold text-emerald-600 uppercase tracking-widest flex items-center gap-2">
                      {act.icon}
                      {act.category}
                    </span>
                  </div>

                  <h3 className="text-3xl font-bold text-text-dark font-serif mb-4 leading-tight">
                    {act.title}
                  </h3>

                  <p className="text-text-light text-base leading-relaxed font-light mb-6">
                    {act.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-gray-100 pt-6 mb-8">
                    {/* Suitability Box */}
                    <div className="space-y-2">
                      <span className="text-xs font-bold text-text-dark uppercase tracking-wider block flex items-center gap-1.5">
                        <AlertCircle size={14} className="text-emerald-600" />
                        {t.suitability}
                      </span>
                      <p className="text-xs text-text-light leading-relaxed font-light">
                        {act.suitability}
                      </p>
                    </div>

                    {/* Includes Box */}
                    <div className="space-y-2">
                      <span className="text-xs font-bold text-text-dark uppercase tracking-wider block flex items-center gap-1.5">
                        <CheckCircle2 size={14} className="text-emerald-600" />
                        {t.includes}
                      </span>
                      <ul className="text-xs text-text-light space-y-1 font-light">
                        {act.includes.map((inc, i) => (
                          <li key={i} className="flex items-center gap-1.5">
                            <span className="w-1 h-1 bg-emerald-600 rounded-full"></span>
                            {inc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-end border-t border-gray-100 pt-6 mt-auto gap-4">
                  <Link 
                    to={`/activity/${act.id}`}
                    className="cursor-pointer btn-premium flex items-center justify-center gap-2 text-xs font-bold tracking-wider"
                  >
                    {t.viewDetails}
                    <ChevronRight size={14} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Call to Action for Custom Trip Planners */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-24 p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-zinc-900 via-stone-900 to-zinc-950 text-white relative overflow-hidden shadow-2xl border border-white/5"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <span className="text-emerald-400 font-bold text-xs uppercase tracking-[0.25em] mb-4 block">
              {t.badge}
            </span>
            <h3 className="text-3xl sm:text-4xl font-serif font-bold mb-4 leading-tight">
              {t.contactPlanner}
            </h3>
            <p className="text-zinc-300 text-sm sm:text-base font-light leading-relaxed mb-8 max-w-2xl mx-auto">
              {t.contactDesc}
            </p>

            <a 
              href="https://wa.me/6282199327798?text=Halo%20Nut%20Tonton%20Homes%20Misool,%20saya%20ingin%20tanya%20dan%20rencanakan%20custom%20tour%20/aktivitas%20alam" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-premium-green hover:opacity-95 text-white px-8 py-4 rounded-[4px] font-bold text-xs tracking-widest uppercase transition-transform hover:scale-101 shadow-xl justify-center"
            >
              <MessageCircle size={18} fill="white" /> {t.contactCta}
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
