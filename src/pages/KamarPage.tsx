import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  CheckCircle2, 
  Star, 
  MessageCircle, 
  Coffee, 
  Utensils, 
  Wifi, 
  Zap, 
  Compass, 
  DollarSign, 
  User, 
  Send,
  X,
  ChevronLeft,
  ChevronRight,
  Eye
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { categorizedGallery, testimonials } from "../constants";

export const KamarPage = () => {
  const { language } = useLanguage();
  const currentLang = (language || "ID") as "ID" | "EN" | "FR" | "DE";

  // State for user-submitted reviews with requested live image assets as avatars
  const [reviews, setReviews] = useState(testimonials.map((t, index) => ({
    id: index + 1,
    name: t.name,
    avatar: t.avatar,
    rating: t.rating,
    relativeTime: {
      ID: "Baru saja",
      EN: "Just now",
      FR: "À l'instant",
      DE: "Gerade eben"
    },
    comment: {
      ID: t.content,
      EN: t.content,
      FR: t.content,
      DE: t.content
    }
  })));
;

  // Form and Carousel state
  const [activeReviewIdx, setActiveReviewIdx] = useState(0);
  const [isReviewFormOpen, setIsReviewFormOpen] = useState(false);
  const [newName, setNewName] = useState("");
  const [newRating, setNewRating] = useState(5);
  const [newComment, setNewComment] = useState("");
  const [successMsg, setSuccessMsg] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [customMedia, setCustomMedia] = useState<{ type: "image" | "video"; url: string; title: string } | null>(null);

  const translationsLocal = {
    tagline: {
      ID: "Informasi Villa Agus Family",
      EN: "Exclusivity on the Beaches of Misool",
      FR: "Exclusivité sur les Plages de Misool",
      DE: "Exklusivität an den Stränden von Misool"
    },
    headline: {
      ID: "Villa Agus Family",
      EN: "Traditional Beachfront Cottage",
      FR: "Cottage Traditionnel de Plage",
      DE: "Traditionelles Strand-Cottage"
    },
    badgeInfo: {
      ID: "Informasi Lengkap & Fasilitas Kami",
      EN: "⭐ 4.9/5 Guest Reviews | Only 6 Units Available",
      FR: "⭐ 4.9/5 Avis de nos Invités | 6 Unités Disponibles",
      DE: "⭐ 4.9/5 Gästebewertungen | 6 Einheiten Verfügbar"
    },
    descTitle: {
      ID: "Informasi Lengkap Villa Agus Family",
      EN: "Pure Serenity on Raja Ampat's Waterfront",
      FR: "Sérénité Pure au Bord de Raja Ampat",
      DE: "Reine Gelassenheit an der Küste von Raja Ampat"
    },
    salesPitch: {
      ID: "Villa Agus Family menawarkan hunian keluarga yang nyaman dan asri di Karangasem dengan pemandangan pegunungan dan suasana pedesaan Bali yang tenang. Tempat terbaik untuk liburan keluarga yang intim dan damai jauh dari hiruk pikuk kota.",
      EN: "Designed with traditional Papuan timber architecture that beautifully blends with Raja Ampat's pristine nature. Wake up directly greeted by the gentle sound of waves and a 180-degree endless ocean panorama right in front of your bed. The ultimate escape from urban congestion to pristine tropical quietude.",
      FR: "Conçu avec une architecture en bois de construction traditionnelle papoue se mariant de manière absolue avec la nature de Raja Ampat. Réveillez-vous bercé par le doux ressac des vagues et un panorama marin infini à 180 degrés directement depuis votre lit. Le lieu idéal pour fuir la rumeur urbaine.",
      DE: "Gestaltet im Stil traditioneller papuanischer Holzarchitektur, die perfekt mit der Natur von Raja Ampat harmoniert. Wachen Sie direkt mit dem sanften Rauschen der Brandung und einem freien 180-Grad-Meerblick direkt vor Ihrem Bett auf. Der perfekte Rückzugsort, um der Hektik zu entfliehen."
    },
    quickBoxTitle: {
      ID: "Fakta Utama Villa",
      EN: "Key Villa Facts",
      FR: "Faits Villa",
      DE: "Wichtige Fakten"
    },
    bedrooms: {
      ID: "Total Kamar: 3. Fasilitas Per Kamar: 1 Bed, 1 Kamar Mandi Dalam, Lemari Pakaian",
      EN: "Total Rooms: 3. Per Room: 1 Bed, 1 En-suite Bathroom, Locker",
      FR: "Total Chambres: 3. Par chambre: 1 Lit, 1 Salle de bain privée, Armoire",
      DE: "Zimmer gesamt: 3. Pro Zimmer: 1 Bett, 1 En-suite Badezimmer, Schrank"
    },
    capacityDetail: {
      ID: "Kapasitas Maksimal: 2 Orang per Kamar",
      EN: "Max Capacity: 2 Guests per Room",
      FR: "Capacité Max: 2 Personnes par chambre",
      DE: "Maximale Kapazität: 2 Gäste pro Zimmer"
    },
    amenities: {
      ID: "Fasilitas: Free WiFi, Air Panas, AC, Parkir, Lemari di Setiap Kamar",
      EN: "Amenities: Free WiFi, Hot Water, AC, Parking, Locker in Each Room",
      FR: "Commodités: WiFi Gratuit, Eau Chaude, Clim, Parking, Armoire dans chaque chambre",
      DE: "Annehmlichkeiten: Kostenloses WiFi, Warmwasser, AC, Parkplatz, Schrank in jedem Zimmer"
    },
    viewType: {
      ID: "Pemandangan: Full Ocean View",
      EN: "View: Full Ocean View",
      FR: "Vue: Vue Mer Intégrale",
      DE: "Ausblick: Voller Ozeanblick"
    },
    beachAccess: {
      ID: "Akses: 0 Meter dari Bibir Pantai",
      EN: "Access: 0 Meters from Waterfront Beach",
      FR: "Accès: 0 Mètre du Bord de Plage",
      DE: "Zugang: 0 Meter direkt am Strand"
    },
    facilitiesTitle: {
      ID: "Fasilitas yang Anda Dapatkan",
      EN: "Official Resort Facilities",
      FR: "Équipements et Prestations Inclus",
      DE: "Inkludierte Resort-Leistungen"
    },
    facilitiesSubtitle: {
      ID: "Seluruh kebutuhan dasar Anda telah tercakup sepenuhnya selama menginap di Villa Agus Family.",
      EN: "All your premium essential needs are fully covered during your stay at Nut Tonton Homes.",
      FR: "Tous vos besoins essentiels haut de gamme sont couverts durant votre séjour chez Nut Tonton.",
      DE: "Ihre Premium-Grundversorgung ist während Ihres Aufenthalts bei Nut Tonton vollkommen abgedeckt."
    },
    fMakanTitle: {
      ID: "Fasilitas Makan",
      EN: "Full Board Meals",
      FR: "Pension Complète",
      DE: "Vollpension (Speisen)"
    },
    fMakanDesc: {
      ID: "Makan 3x / hari (Sarapan, makan siang, & malam menu lokal/seafood segar).",
      EN: "3 meals daily (Fresh, locally-sourced local cuisine & freshly caught seafood for breakfast, lunch & dinner).",
      FR: "3 Repas par jour (Cuisine locale fraîche et poissons locaux savoureux matin, midi et soir).",
      DE: "3 Mahlzeiten täglich (Frühstück, Mittag- & Abendessen mit lokalen Spezialitäten und frischem Fisch)."
    },
    fMinumTitle: {
      ID: "Fasilitas Minum",
      EN: "All-Day Beverages",
      FR: "Boissons à Volonté",
      DE: "Getränke (Ganztägig)"
    },
    fMinumDesc: {
      ID: "Air minum mineral, kopi, & teh selalu tersedia gratis kapan saja.",
      EN: "Complimentary mineral water, coffee, and tea are always available and self-replenishing.",
      FR: "Eau minérale, café de pays et thés offerts à volonté à toute heure de la journée.",
      DE: "Erfrischendes Trinkwasser, Kaffee und Tee stehen Ihnen jederzeit kostenlos zur Verfügung."
    },
    fCamilanTitle: {
      ID: "Fasilitas Camilan",
      EN: "Afternoon Snack",
      FR: "Snack de l'Après-Midi",
      DE: "Nachmittagssnacks"
    },
    fCamilanDesc: {
      ID: "Afternoon snack (Kue camilan tradisional pelengkap santai sore hari).",
      EN: "Afternoon snack (Traditional local cakes, savory snacks, and fruits served during golden sunset hours).",
      FR: "Snack de l'après-midi (Pâtisseries locales traditionnelles pour agrémenter vos fins d'après-midi).",
      DE: "Nachmittagssnack (Traditionelles Gebäck und Kleinigkeiten für die gemütliche Stunde am Nachmittag)."
    },
    fWifiTitle: {
      ID: "Fasilitas Internet",
      EN: "Island Wi-Fi",
      FR: "Réseau Sans Fil Wi-Fi",
      DE: "Mobiles Wi-Fi"
    },
    fWifiDesc: {
      ID: "Wi-Fi tersedia selama listrik menyala (Tetap terhubung lancar berkabar keluarga walau di tengah pulau terpencil).",
      EN: "Wi-Fi available whenever power is on (Stay conveniently connected with friends and family even in a remote island paradise).",
      FR: "Wi-Fi disponible lorsque l'électricité est en marche pour rester en lien avec vos proches, même au fond du sanctuaire insulaire.",
      DE: "Wi-Fi verfügbar, sobald Strom vorhanden ist (Bleiben Sie mit Ihren Liebsten verbunden, trotz der wunderbaren Abgeschiedenheit)."
    },
    fListrikTitle: {
      ID: "Fasilitas Listrik",
      EN: "Eco-Friendly Scheduled Power",
      FR: "Électricité Bioclimatique",
      DE: "Öko-Stromversorgung"
    },
    fListrikDesc: {
      ID: "Listrik aktif jam 18.00 - 06.00 WIT.",
      EN: "Sustainably managed generator schedules provide active power nightly from 18:00 to 06:00 WIT.",
      FR: "Réseau actif de 18:00 à 06:00 WIT (Alimentation par générateur écologique planifié).",
      DE: "Eco-Power-Generatorsystem ist planmäßig täglich von 18:00 Uhr abends bis 06:00 Uhr morgens WIT aktiv."
    },
    fGearTitle: {
      ID: "Mini Dive Shop & Rental Gear",
      EN: "Mini Dive Shop & Rental Gear",
      FR: "Mini Boutique de Plongée",
      DE: "Mini-Tauchy-Shop & Leihausrüstung"
    },
    fGearDesc: {
      ID: "Menyediakan layanan sewa alat diving & snorkeling standar internasional langsung di lokasi resort, lengkap dengan guide lokal berpengalaman.",
      EN: "Provides international standard diving & snorkeling rental equipment directly at the resort, guided by experienced local crew.",
      FR: "Propose la location d'équipements de plongée et snorkeling de standard international directement au resort, avec guides locaux expérimentés.",
      DE: "Bietet internationalen Standard für Tauch- und Schnorchelausrüstungsverleih direkt im Resort, begleitet von erfahrenen lokalen Guides."
    },
    galleryTitle: {
      ID: "Detail Galeri Kamar & Interior",
      EN: "Cottage Interior & Details Gallery",
      FR: "Détails et Intérieurs de Votre Lodge",
      DE: "Cottage-Detailgalerie"
    },
    reviewsTitle: {
      ID: "Ulasan Tamu & Masukan Pengunjung",
      EN: "Guest Experiences & Reviews",
      FR: "Expériences et Témoignages",
      DE: "Gästebewertungen & Erfahrungen"
    },
    testimonialColumnTitle: {
      ID: "Testimoni Tamu Sebelumnya",
      EN: "Previous Guests Testimonials",
      FR: "Témoignages Existants",
      DE: "Kundenmeinungen"
    },
    formColumnTitle: {
      ID: "Tinggalkan Ulasan untuk Kamar Kami",
      EN: "Leave a Cottage Review",
      FR: "Écrire un Nouvel Avis",
      DE: "Eigene Bewertung verfassen"
    },
    formName: {
      ID: "Nama Lengkap Anda",
      EN: "Your Full Name",
      FR: "Votre Nom Complet",
      DE: "Ihr vollständiger Name"
    },
    formRating: {
      ID: "Peringkat Bintang",
      EN: "Star Rating Selection",
      FR: "Note Étoiles Selected",
      DE: "Sterne-Bewertung"
    },
    formComment: {
      ID: "Tuliskan Kesan & Ulasan Anda",
      EN: "Write your honest review description",
      FR: "Votre commentaire détaillé",
      DE: "Ihre detaillierte Bewertung"
    },
    formButton: {
      ID: "Kirim Ulasan Sekarang",
      EN: "Submit Review Now",
      FR: "Soumettre l'Avis",
      DE: "Bewertung abschicken"
    },
    formSuccess: {
      ID: "Terima kasih! Ulasan Anda telah dipublikasikan secara nyata di atas.",
      EN: "Thank you! Your review has been added to the guest records live above.",
      FR: "Merci! Votre témoignage a été ajouté en direct ci-dessus.",
      DE: "Vielen Dank! Ihre Bewertung wurde direkt oben hinzugefügt."
    },
    stickyWaText: {
      ID: "💬 Tanya Ketersediaan Kamar via WA",
      EN: "💬 Inquire Room Availability via WA",
      FR: "💬 Vérifier la Disponibilité via WhatsApp",
      DE: "💬 Zimmerverfügbarkeit via WA anfragen"
    },
    excellent: {
      ID: "EXCELLENT",
      EN: "EXCELLENT",
      FR: "EXCELLENT",
      DE: "EXCELLENT"
    },
    basedOn: {
      ID: "Berdasarkan 150+ ulasan",
      EN: "Based on 150+ reviews",
      FR: "Basé sur plus de 150 avis",
      DE: "Basierend auf 150+ Google-Bewertungen"
    },
    leaveReviewBtn: {
      ID: "Tulis Ulasan Tamu",
      EN: "Write Guest Review",
      FR: "Laisser un avis",
      DE: "Bewertung schreiben"
    }
  };

  const tLocal = (key: keyof typeof translationsLocal) => {
    return (translationsLocal as any)[key]?.[currentLang] || (translationsLocal as any)[key]?.["ID"] || "";
  };

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim() || !newComment.trim()) return;

    const newRev = {
      id: reviews.length + 1,
      name: newName,
      avatar: "https://fusofyeqniyyunromgnh.supabase.co/storage/v1/object/public/pemandangan%20dan%20aktivitas/605fba91-555e-432a-8565-0f187c6f8152.jpeg", // Default to an elegant avatar picture
      rating: newRating,
      relativeTime: {
        ID: "Baru saja",
        EN: "Just now",
        FR: "À l'instant",
        DE: "Gerade eben"
      },
      comment: {
        ID: newComment,
        EN: newComment,
        FR: newComment,
        DE: newComment
      }
    };

    setReviews([newRev, ...reviews]);
    setActiveReviewIdx(0); // Instantly showcase their review
    setNewName("");
    setNewComment("");
    setSuccessMsg(true);
    setTimeout(() => {
      setSuccessMsg(false);
      setIsReviewFormOpen(false); // Close dialog gracefully
    }, 4000);
  };

  // Image assets supplied by the client
  const roomImages = [
    "https://fusofyeqniyyunromgnh.supabase.co/storage/v1/object/public/pemandangan%20dan%20aktivitas/rooms2.jpeg",
    "https://fusofyeqniyyunromgnh.supabase.co/storage/v1/object/public/website/y2.jpeg",
    "https://fusofyeqniyyunromgnh.supabase.co/storage/v1/object/public/pemandangan%20dan%20aktivitas/kamar4.jpeg",
    "https://fusofyeqniyyunromgnh.supabase.co/storage/v1/object/public/pemandangan%20dan%20aktivitas/roms4.jpeg",
    "https://fusofyeqniyyunromgnh.supabase.co/storage/v1/object/public/pemandangan%20dan%20aktivitas/rooms3.jpeg",
    "https://fusofyeqniyyunromgnh.supabase.co/storage/v1/object/public/pemandangan%20dan%20aktivitas/roms3.jpeg",
    "https://fusofyeqniyyunromgnh.supabase.co/storage/v1/object/public/pemandangan%20dan%20aktivitas/roms5.jpeg",
    "https://fusofyeqniyyunromgnh.supabase.co/storage/v1/object/public/pemandangan%20dan%20aktivitas/roms6.jpeg",
    "https://fusofyeqniyyunromgnh.supabase.co/storage/v1/object/public/pemandangan%20dan%20aktivitas/rooms.jpeg",
    "https://fusofyeqniyyunromgnh.supabase.co/storage/v1/object/public/pemandangan%20dan%20aktivitas/kamar%20mandi.jpeg",
    "https://fusofyeqniyyunromgnh.supabase.co/storage/v1/object/public/pemandangan%20dan%20aktivitas/kamar%20mandi2.jpeg",
    "https://fusofyeqniyyunromgnh.supabase.co/storage/v1/object/public/pemandangan%20dan%20aktivitas/kamarmandi4.jpeg"
  ];

  const allFacilityImages = [...categorizedGallery.villa, ...categorizedGallery.fasilitas, ...categorizedGallery.kamarmandi, ...categorizedGallery.dapur];

  return (
    <div id="top" className="bg-white min-h-screen pt-20">
      {/* 2. Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/55 z-10"></div>
        <img 
          src="https://kycscxrffjorfwmuogjp.supabase.co/storage/v1/object/public/galery%20villa%20agus%20family/kamar2.jpeg" 
          alt="Kamar Villa Agus Family" 
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover scale-102 filter brightness-[0.85]"
        />
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <span className="inline-block px-4 py-1.5 bg-premium-green/20 backdrop-blur-md border border-white/30 text-white text-[11px] font-bold tracking-[0.3em] uppercase mb-6 rounded-full">
              {tLocal("tagline")}
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-black text-white mb-6 leading-tight drop-shadow-md">
              {tLocal("headline")}
            </h1>
            <p className="text-sm md:text-base text-emerald-100 font-bold bg-black/40 border border-emerald-500/20 backdrop-blur-sm px-6 py-2.5 rounded-lg inline-flex items-center gap-2">
              {tLocal("badgeInfo")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. Section Deskripsi & Fakta Cepat */}
      <section className="py-12 md:py-20 bg-zinc-50 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
            
            {/* Kolom Kiri: Narasi Jualan */}
            <div className="md:col-span-7">
              <span className="text-premium-green font-bold text-[10px] uppercase tracking-widest bg-premium-green/10 px-2.5 py-1 rounded mb-3 inline-block">
                OVERVIEW
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-text-dark mb-4 leading-tight">
                {tLocal("descTitle")}
              </h2>
              <p className="text-text-light text-sm sm:text-base leading-relaxed font-light">
                {tLocal("salesPitch")}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Section Fasilitas Resmi */}
      <section className="py-24 bg-gradient-to-br from-zinc-900 via-stone-900 to-zinc-950 text-white relative overflow-hidden border-t border-zinc-900/40">
        <div className="absolute top-0 right-0 w-80 h-80 bg-premium-purple/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-premium-green/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-premium-purple font-bold text-xs uppercase tracking-widest bg-premium-purple/15 px-3.5 py-1.5 rounded mb-4 inline-block border border-premium-purple/10">
              SERVICES INCLUDE
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
              {tLocal("facilitiesTitle")}
            </h2>
            <p className="text-zinc-400 text-sm md:text-base font-light">
              {tLocal("facilitiesSubtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-2">
            
            {/* Bedrooms & Bathrooms */}
            <div className="relative bg-white/5 border border-white/10 p-5 rounded-lg flex gap-4 sm:gap-5 items-start hover:bg-white/10 hover:border-white/20 transition-all duration-300 shadow-xl group">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white flex-shrink-0 border border-white/5 group-hover:scale-105 transition-transform">
                <Compass size={22} className="text-zinc-100" />
              </div>
              <div className="flex-1">
                <h3 className="font-serif font-bold text-base text-white mb-1 group-hover:text-premium-purple transition-colors">
                  {tLocal("bedrooms")}
                </h3>
              </div>
            </div>

            {/* Capacity */}
            <div className="relative bg-white/5 border border-white/10 p-5 rounded-lg flex gap-4 sm:gap-5 items-start hover:bg-white/10 hover:border-white/20 transition-all duration-300 shadow-xl group">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white flex-shrink-0 border border-white/5 group-hover:scale-105 transition-transform">
                <User size={22} className="text-zinc-100" />
              </div>
              <div className="flex-1">
                <h3 className="font-serif font-bold text-base text-white mb-1 group-hover:text-premium-purple transition-colors">
                  {tLocal("capacityDetail")}
                </h3>
              </div>
            </div>

            {/* Amenities */}
            <div className="relative bg-white/5 border border-white/10 p-5 rounded-lg flex gap-4 sm:gap-5 items-start hover:bg-white/10 hover:border-white/20 transition-all duration-300 shadow-xl group">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white flex-shrink-0 border border-white/5 group-hover:scale-105 transition-transform">
                <Wifi size={22} className="text-zinc-100" />
              </div>
              <div className="flex-1">
                <h3 className="font-serif font-bold text-base text-white mb-1 group-hover:text-premium-purple transition-colors">
                  {tLocal("amenities")}
                </h3>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Section Galeri Foto Kamar */}
      <section className="py-20 bg-zinc-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-text-dark">
              {tLocal("galleryTitle")}
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {allFacilityImages.map((img, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03, y: -4 }}
                onClick={() => setLightboxIndex(i)}
                className="relative overflow-hidden rounded-xl bg-zinc-100 shadow-md border border-gray-150 cursor-zoom-in aspect-[4/3] group"
              >
                <img
                  src={img.url}
                  alt={img.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                  <div className="w-10 h-10 bg-white/25 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-transform duration-300 shadow-md">
                    <Eye size={18} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Section Ulasan & Form Review */}
      <section className="py-20 bg-zinc-50/80 border-t border-b border-zinc-200 overflow-hidden relative text-zinc-800">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-orange-500 font-bold text-xs uppercase tracking-widest mb-2 inline-block">
              TESTIMONI
            </span>
            <h2 className="text-3xl md:text-5xl font-sans font-extrabold text-zinc-900">
              {currentLang === "ID" ? "Apa Kata Mereka?" : "What Our Guests Say?"}
            </h2>
          </div>

          {/* Grid Layout (2 Kolom) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Sisi Kiri (Desktop/All): Excellent Stats Card */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4">
              <span className="font-serif font-black text-4xl sm:text-5xl tracking-wide text-zinc-900">
                {tLocal("excellent")}
              </span>
              
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} size={22} fill="#EAB308" className="text-yellow-500" />
                ))}
              </div>

              <p className="text-zinc-500 text-sm font-medium">
                {currentLang === "ID" ? "Berdasarkan 756 ulasan" : "Based on 756 reviews"}
              </p>

              {/* Colorful Google Logo Wordmark */}
              <div className="pt-2 select-none">
                <span className="font-sans font-black text-[#4285F4] text-4xl tracking-tight">
                  G<span className="text-[#EA4335]">o</span><span className="text-[#FBBC05]">o</span>g<span className="text-[#34A853]">l</span><span className="text-[#EA4335]">e</span>
                </span>
              </div>

              {/* Write Review Button */}
              <button
                onClick={() => setIsReviewFormOpen(true)}
                className="mt-4 flex items-center gap-2 bg-[#1A1A1A] hover:bg-zinc-800 text-white text-xs uppercase tracking-wider font-bold py-3.5 px-6 rounded-full transition-all cursor-pointer shadow-md active:scale-95"
              >
                <MessageCircle size={14} fill="none" className="text-yellow-400" />
                <span>{tLocal("leaveReviewBtn")}</span>
              </button>
            </div>

            {/* Sisi Kanan (Desktop): Slider/Carousel with Arrow Controls */}
            <div className="hidden md:flex lg:col-span-8 items-center gap-4 justify-between w-full relative">
              
              {/* Left Arrow Button */}
              <button
                onClick={() => {
                  setActiveReviewIdx((prev) => (prev > 0 ? prev - 1 : reviews.length - 1));
                }}
                className="bg-white hover:bg-zinc-100 text-zinc-700 border border-zinc-200 p-3 rounded-full transition-all cursor-pointer flex-shrink-0 shadow-md active:scale-90 z-20"
              >
                <ChevronLeft size={22} className="text-zinc-700" />
              </button>

              {/* Slider Viewport */}
              <div className="flex-1 overflow-hidden mx-auto py-2">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-2">
                  {/* Let's render 3 cards starting from activeReviewIdx */}
                  {Array.from({ length: 3 }).map((_, slotIdx) => {
                    const revIdx = (activeReviewIdx + slotIdx) % reviews.length;
                    const rev = reviews[revIdx];
                    if (!rev) return null;
                    return (
                      <motion.div
                        key={`${rev.id}-${slotIdx}`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: slotIdx * 0.05 }}
                        className={`bg-white border border-zinc-200/60 rounded-xl p-6 flex flex-col justify-between min-h-[300px] shadow-sm hover:shadow-md transition-shadow relative ${
                          slotIdx === 2 ? "hidden lg:flex" : "flex"
                        }`}
                      >
                        <div>
                          {/* Card Header: Avatar, Name & Google Logo on top right */}
                          <div className="flex items-start justify-between gap-2 mb-4">
                            <div className="flex items-center gap-3">
                              <div>
                                <h4 className="font-sans font-bold text-zinc-900 text-[14px] sm:text-base leading-tight">
                                  {rev.name}
                                </h4>
                                <span className="block mt-0.5 text-[11px] text-zinc-400 font-light">
                                  {(rev as any).relativeTime?.[currentLang] || (rev as any).relativeTime?.["ID"] || "3 tahun lalu"}
                                </span>
                              </div>
                            </div>
                            
                            {/* Little Colorful G Icon */}
                            <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24">
                              <path
                                fill="#4285F4"
                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                              />
                              <path
                                fill="#34A853"
                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                              />
                              <path
                                fill="#FBBC05"
                                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.85z"
                              />
                              <path
                                fill="#EA4335"
                                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.85c.87-2.6 3.3-4.53 6.16-4.53z"
                              />
                            </svg>
                          </div>

                          {/* Card Rating Stars */}
                          <div className="flex gap-0.5 my-3">
                            {Array.from({ length: 5 }).map((_, idx) => (
                              <Star
                                key={idx}
                                size={14}
                                fill={idx < rev.rating ? "#EAB308" : "none"}
                                className={idx < rev.rating ? "text-yellow-500" : "text-zinc-200"}
                              />
                            ))}
                          </div>

                          <p className="text-zinc-700 text-xs sm:text-[13px] leading-relaxed font-light">
                            "{rev.comment?.[currentLang] || rev.comment?.["ID"]}"
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Bullets */}
                <div className="flex justify-center gap-1.5 mt-6">
                  {reviews.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveReviewIdx(i)}
                      className={`w-2 h-2 rounded-full cursor-pointer transition-all border-none ${
                        activeReviewIdx === i ? "bg-zinc-850 w-4 bg-zinc-800" : "bg-zinc-300"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Right Arrow Button */}
              <button
                onClick={() => {
                  setActiveReviewIdx((prev) => (prev < reviews.length - 1 ? prev + 1 : 0));
                }}
                className="bg-white hover:bg-zinc-100 text-zinc-700 border border-zinc-200 p-3 rounded-full transition-all cursor-pointer flex-shrink-0 shadow-md active:scale-90 z-20"
              >
                <ChevronRight size={22} className="text-zinc-700" />
              </button>
            </div>

            {/* Sisi Kanan (Mobile): touch-swipe horizontal */}
            <div className="md:hidden lg:col-span-8 w-full">
              <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4 px-1">
                {reviews.map((rev, i) => (
                  <div
                    key={rev.id || i}
                    className="shrink-0 w-[85vw] snap-center bg-white border border-zinc-205 rounded-xl p-6 flex flex-col justify-between min-h-[290px] shadow-sm relative text-left"
                  >
                    <div>
                      {/* Card Header: Avatar & Name */}
                      <div className="flex items-start justify-between gap-2 mb-3">
                        <div className="flex items-center gap-3.5">
                          <div>
                            <h4 className="font-sans font-bold text-zinc-900 text-sm sm:text-base leading-tight">
                              {rev.name}
                            </h4>
                            <span className="block mt-0.5 text-[10px] text-zinc-400 font-light">
                              {rev.relativeTime?.[currentLang] || rev.relativeTime?.["ID"] || "2 months ago"}
                            </span>
                          </div>
                        </div>

                        {/* Little G Icon */}
                        <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24">
                          <path
                            fill="#4285F4"
                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                          />
                          <path
                            fill="#34A853"
                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          />
                          <path
                            fill="#FBBC05"
                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.85z"
                          />
                          <path
                            fill="#EA4335"
                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.85c.87-2.6 3.3-4.53 6.16-4.53z"
                          />
                        </svg>
                      </div>

                      {/* Card Rating Stars */}
                      <div className="flex gap-0.5 my-2">
                        {Array.from({ length: 5 }).map((_, idx) => (
                          <Star
                            key={idx}
                            size={12}
                            fill={idx < rev.rating ? "#EAB308" : "none"}
                            className={idx < rev.rating ? "text-yellow-500" : "text-zinc-200"}
                          />
                        ))}
                      </div>

                      <p className="text-zinc-700 text-xs sm:text-[13px] leading-relaxed">
                        "{rev.comment?.[currentLang] || rev.comment?.["ID"]}"
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Progress Bullets for Mobile */}
              <div className="flex justify-center gap-1.5 mt-2">
                {reviews.map((_, i) => (
                  <span
                    key={i}
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                      activeReviewIdx % reviews.length === i ? "bg-zinc-800 w-3" : "bg-zinc-300"
                    }`}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Write Guestbook modal popup */}
      <AnimatePresence>
        {isReviewFormOpen && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsReviewFormOpen(false)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative bg-zinc-900 border border-zinc-800 text-white rounded-2xl p-6 sm:p-8 max-w-lg w-full shadow-2xl z-20"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsReviewFormOpen(false)}
                className="absolute top-4 right-4 text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-full p-2.5 transition-colors border-none cursor-pointer"
              >
                <X size={18} />
              </button>

              <h3 className="font-serif font-bold text-2xl text-white mb-2 flex items-center gap-2">
                <Send size={20} className="text-premium-green" />
                {tLocal("formColumnTitle")}
              </h3>
              <p className="text-zinc-400 text-xs font-light mb-6">
                {currentLang === "ID" ? "Ulasan Anda akan langsung ditampilkan dalam slider ulasan tamu langsung." : "Your feedback is instantly featured in our live guest testimonials slider above."}
              </p>

              <form onSubmit={handleAddReview} className="space-y-5 text-left">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-300 mb-2">
                    {tLocal("formName")}
                  </label>
                  <input
                    type="text"
                    required
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    placeholder="e.g. John Doe / Ahmad"
                    className="w-full bg-zinc-950 border border-zinc-800 text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-premium-green focus:ring-1 focus:ring-premium-green transition-all shadow-sm"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-300 mb-2">
                    {tLocal("formRating")}
                  </label>
                  <div className="flex gap-2 bg-zinc-950 p-2.5 rounded-lg border border-zinc-800 inline-flex">
                    {Array.from({ length: 5 }).map((_, idx) => {
                      const starVal = idx + 1;
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setNewRating(starVal)}
                          className="p-1 hover:scale-110 transition-transform cursor-pointer bg-transparent border-none"
                        >
                          <Star
                            size={24}
                            fill={starVal <= newRating ? "#EAB308" : "none"}
                            className={starVal <= newRating ? "text-yellow-500" : "text-zinc-600"}
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-300 mb-2">
                    {tLocal("formComment")}
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="..."
                    className="w-full bg-zinc-950 border border-zinc-800 text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-premium-green focus:ring-1 focus:ring-premium-green transition-all shadow-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-premium-green hover:bg-premium-green/90 text-white font-bold text-xs uppercase tracking-widest py-4 rounded-lg shadow-lg active:scale-98 transition-all duration-200 border-none cursor-pointer flex items-center justify-center gap-2"
                >
                  <MessageCircle size={14} fill="white" />
                  {tLocal("formButton")}
                </button>

                <AnimatePresence>
                  {successMsg && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="p-3 bg-emerald-950 text-emerald-300 text-xs rounded-lg border border-emerald-800 mt-3 font-medium"
                    >
                      {tLocal("formSuccess")}
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 7. Bagian Khusus Mobile HP: Sticky Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/90 backdrop-blur-md border-t border-gray-150 p-4 shadow-2xl flex justify-center items-center">
        <a
          href="https://wa.me/6282199327798?text=Halo%20Nut%20Tonton%20Homes%20Misool,%20saya%20ingin%20tanya%20ketersediaan%20Traditional%20Beachfront%20Cottage"
          target="_blank"
          rel="noreferrer"
          className="w-full bg-[#25D366] hover:bg-[#1ebd5d] text-white font-serif font-black text-xs sm:text-sm uppercase tracking-wider py-4 px-6 rounded-lg shadow-lg flex items-center justify-center gap-3 border border-[#20b859]"
        >
          <MessageCircle size={18} fill="white" className="flex-shrink-0 animate-bounce" />
          <span>{tLocal("stickyWaText")}</span>
        </a>
      </div>

      {/* Interactive Lightbox Popup Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
            className="fixed inset-0 bg-black/95 z-[999] flex flex-col justify-between p-4 sm:p-6 cursor-zoom-out select-none"
          >
            {/* Top Toolbar */}
            <div className="flex items-center justify-between w-full text-white z-[1000] relative pt-2">
              <div className="text-left">
                <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest">
                  Nut Tonton Homes
                </span>
                <p className="text-xs text-zinc-400 font-light">
                  {lightboxIndex + 1} of {allFacilityImages.length}
                </p>
              </div>
              
              <button 
                onClick={() => setLightboxIndex(null)}
                className="text-white/80 hover:text-white bg-white/5 hover:bg-white/10 rounded-full p-2.5 transition-colors border-none cursor-pointer"
                title="Tutup (Esc)"
              >
                <X size={22} />
              </button>
            </div>

            {/* Central Media Sandbox with Click Protection & Arrow Channels */}
            <div className="flex items-center justify-between w-full h-[70vh] relative">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : allFacilityImages.length - 1));
                }}
                className="absolute left-1 sm:left-4 z-[1001] text-white/50 hover:text-white bg-black/30 hover:bg-black/60 rounded-full p-3 transition-colors border-none cursor-pointer flex items-center justify-center"
              >
                <ChevronLeft size={28} />
              </button>

              <div 
                className="w-full h-full flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <motion.img 
                  key={lightboxIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  src={allFacilityImages[lightboxIndex].url} 
                  alt="Expanded cottage view shadow-2xl" 
                  className="max-w-[85vw] max-h-[75vh] md:max-w-[80vw] md:max-h-[80vh] object-contain rounded-lg shadow-2xl border border-zinc-900"
                  referrerPolicy="no-referrer"
                />
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex((prev) => (prev !== null && prev < allFacilityImages.length - 1 ? prev + 1 : 0));
                }}
                className="absolute right-1 sm:right-4 z-[1001] text-white/50 hover:text-white bg-black/30 hover:bg-black/60 rounded-full p-3 transition-colors border-none cursor-pointer flex items-center justify-center"
              >
                <ChevronRight size={28} />
              </button>
            </div>

            {/* Bottom Spacer */}
            <div className="w-full h-10"></div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Interactive Custom Media Modal for Dive Gear and Video */}
      <AnimatePresence>
        {customMedia !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setCustomMedia(null)}
            className="fixed inset-0 bg-black/95 z-[9999] flex flex-col justify-between p-4 sm:p-6 cursor-zoom-out select-none"
          >
            {/* Top Toolbar */}
            <div className="flex items-center justify-between w-full text-white z-[10000] relative pt-2">
              <div className="text-left">
                <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest">
                  {customMedia.type === "video" ? "Diving Video Documentation" : "Dive Gear & Rental Shop"}
                </span>
                <p className="text-xs text-zinc-300 font-light font-serif">
                  {customMedia.title}
                </p>
              </div>
              
              <button 
                onClick={() => setCustomMedia(null)}
                className="text-white/80 hover:text-white bg-white/5 hover:bg-white/10 rounded-full p-2.5 transition-colors border-none cursor-pointer"
                title="Tutup (Esc)"
              >
                <X size={22} />
              </button>
            </div>

            {/* Central Content Box */}
            <div className="flex items-center justify-center w-full h-[75vh] relative" onClick={(e) => e.stopPropagation()}>
              {customMedia.type === "video" ? (
                <div className="w-full max-w-3xl aspect-video rounded-xl overflow-hidden border border-white/10 bg-zinc-950 shadow-2xl relative">
                  <video 
                    src={customMedia.url}
                    controls
                    autoPlay
                    playsInline
                    className="w-full h-full object-contain"
                  />
                </div>
              ) : (
                <motion.img 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  src={customMedia.url} 
                  alt="Diving Gear Photo" 
                  className="max-w-[85vw] max-h-[75vh] md:max-w-[80vw] md:max-h-[80vh] object-contain rounded-lg shadow-2xl border border-zinc-900"
                  referrerPolicy="no-referrer"
                />
              )}
            </div>

            {/* Bottom Spacer */}
            <div className="w-full h-10"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
