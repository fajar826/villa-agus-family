import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Camera, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Compass, 
  Eye, 
  ExternalLink,
  MessageCircle
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { categorizedGallery } from "../constants";

// Define TypeScript structures for our multi-language gallery items
interface GalleryItem {
  id: number;
  url: string;
  category: "cottage" | "view" | "activity" | "fasilitas" | "kamarmandi" | "dapur";
  titles: {
    ID: string;
    EN: string;
    FR: string;
    DE: string;
  };
  captions: {
    ID: string;
    EN: string;
    FR: string;
    DE: string;
  };
  size: string; // Tailwind grid coordinates for responsive Bento layout
}

// Convert categorizedGallery to GalleryItem[]
const GALLERY_ITEMS: GalleryItem[] = [
  ...categorizedGallery.villa.map((item, i) => ({
    id: i,
    url: item.url,
    category: "cottage" as const,
    titles: { ID: item.title, EN: item.title, FR: item.title, DE: item.title },
    captions: { ID: item.desc, EN: item.desc, FR: item.desc, DE: item.desc },
    size: i % 2 === 0 ? "md:col-span-2 md:row-span-1" : "md:col-span-1 md:row-span-1"
  })),
  ...categorizedGallery.fasilitas.map((item, i) => ({
    id: i + 10,
    url: item.url,
    category: "fasilitas" as const,
    titles: { ID: item.title, EN: item.title, FR: item.title, DE: item.title },
    captions: { ID: item.desc, EN: item.desc, FR: item.desc, DE: item.desc },
    size: i % 2 === 0 ? "md:col-span-1 md:row-span-1" : "md:col-span-2 md:row-span-1"
  })),
  ...categorizedGallery.kamarmandi.map((item, i) => ({
    id: i + 30,
    url: item.url,
    category: "kamarmandi" as const,
    titles: { ID: item.title, EN: item.title, FR: item.title, DE: item.title },
    captions: { ID: item.desc, EN: item.desc, FR: item.desc, DE: item.desc },
    size: "md:col-span-1 md:row-span-1"
  })),
  ...categorizedGallery.dapur.map((item, i) => ({
    id: i + 40,
    url: item.url,
    category: "dapur" as const,
    titles: { ID: item.title, EN: item.title, FR: item.title, DE: item.title },
    captions: { ID: item.desc, EN: item.desc, FR: item.desc, DE: item.desc },
    size: "md:col-span-1 md:row-span-1"
  })),
  ...categorizedGallery.video.map((item, i) => ({
    id: i + 20,
    url: item.url,
    category: "view" as const,
    titles: { ID: item.title, EN: item.title, FR: item.title, DE: item.title },
    captions: { ID: item.desc, EN: item.desc, FR: item.desc, DE: item.desc },
    size: "md:col-span-1 md:row-span-2"
  }))
];

// Aesthetic mock-Instagram feeds to act as high-society social proof sneak-peek
const INSTAGRAM_FEEDS: Array<{ img: string; likes: string; comments: string }> = [
    ...categorizedGallery.villa,
    ...categorizedGallery.fasilitas
].map((item, i) => ({
    img: item.url,
    likes: (100 + i * 50).toString(),
    comments: (10 + i * 5).toString()
}));

export const GalleryPage = () => {
  const { language } = useLanguage();
  const [categoryFilter, setCategoryFilter] = useState<"all" | "cottage" | "fasilitas" | "kamarmandi" | "dapur">("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filter items in real time based on active tab
  const filteredItems = categoryFilter === "all"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === categoryFilter);

  // Active item inside lightbox modal
  const activeLightboxItem = lightboxIndex !== null && filteredItems[lightboxIndex]
    ? filteredItems[lightboxIndex]
    : null;

  // Handle previous page in lightbox carousel
  const handlePrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1));
  };

  // Handle next page in lightbox carousel
  const handleNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0));
  };

  // Close lightbox modal
  const handleClose = () => {
    setLightboxIndex(null);
  };

  // Keyboard navigation listeners (ArrowLeft, ArrowRight, Escape)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "Escape") {
        setLightboxIndex(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filteredItems]);

  // Translate specific page title/elements
  const textStrings = {
    heroTitle: {
      ID: "Galeri Villa Agus Familly",
      EN: "Villa Agus Familly Gallery",
      FR: "Galerie Villa Agus Familly",
      DE: "Galerie Villa Agus Familly"
    },
    heroSub: {
      ID: "Intip kenyamanan autentik Villa Agus Familly, tempat istirahat tenang di tengah keindahan Karangasem.",
      EN: "Glimpse the authentic comfort of Villa Agus Familly, a peaceful retreat in the heart of Karangasem's beauty.",
      FR: "Découvrez le confort authentique de Villa Agus Familly, une retraite paisible au cœur de la beauté de Karangasem.",
      DE: "Werfen Sie einen Blick auf den authentischen Komfort der Villa Agus Familly, einem ruhigen Rückzugsort inmitten von Karangasems Schönheit."
    },
    filters: {
      all: { ID: "All (Semua Foto)", EN: "All Photos", FR: "Toutes Photos", DE: "Alle Bilder" },
      cottage: { ID: "Kamar", EN: "Rooms", FR: "Chambres", DE: "Zimmer" },
      fasilitas: { ID: "Fasilitas & Area", EN: "Facilities & Area", FR: "Installations & Zone", DE: "Einrichtungen & Bereich" },
      kamarmandi: { ID: "Kamar Mandi", EN: "Bathroom", FR: "Salle de Bain", DE: "Badezimmer" },
      dapur: { ID: "Dapur", EN: "Kitchen", FR: "Cuisine", DE: "Küche" }
    },
    instagramTitle: {
      ID: "Bagikan Momen Anda di #VillaAgusFamilly",
      EN: "Share Your Moments at #VillaAgusFamilly",
      FR: "Partagez Vos Moments à #VillaAgusFamilly",
      DE: "Teilen Sie Ihre Erlebnisse unter #VillaAgusFamilly"
    },
    instagramSub: {
      ID: "Kehangatan keluarga, keceriaan bersama, dan kenangan abadi di Villa Agus Familly.",
      EN: "Family warmth, shared joy, and eternal memories at Villa Agus Familly.",
      FR: "Chaleur familiale, joie partagée et souvenirs éternels à Villa Agus Familly.",
      DE: "Familiäre Wärme, geteilte Freude und ewige Erinnerungen in der Villa Agus Familly."
    },
    ctaTitle: {
      ID: "Siap Merasakan Ketenangan Sekeluarga?",
      EN: "Ready to Experience Peaceful Family Time?",
      FR: "Prêt à Découvrir la Tranquillité en Famille?",
      DE: "Sind Sie bereit für friedliche Zeit mit der Familie?"
    },
    ctaSub: {
      ID: "Villa Agus Familly siap menyambut Anda. Hubungi tim reservasi kami di WhatsApp untuk mengamankan tanggal liburan impian.",
      EN: "Villa Agus Familly is ready to welcome you. Contact our reservation team on WhatsApp to secure your dream holiday dates.",
      FR: "Villa Agus Familly est prête à vous accueillir. Contactez notre équipe de réservation sur WhatsApp pour réserver vos dates de vacances de rêve.",
      DE: "Villa Agus Familly heißt Sie herzlich willkommen. Kontaktieren Sie unser Reservierungsteam auf WhatsApp, um Ihre Traumurlaubsdaten zu sichern."
    },
    ctaBtn: {
      ID: "Amankan Tanggal Liburan Anda Sekarang",
      EN: "Secure Your Holiday Dates Now",
      FR: "Réserver Vos Dates d'Évasion Maintenant",
      DE: "Sichern Sie sich jetzt Ihre Urlaubsdaten"
    },
    viewImage: {
      ID: "Perbesar gambar",
      EN: "Zoom image",
      FR: "Agrandir l'image",
      DE: "Bild vergrößern"
    }
  };

  const currentLang = (language as "ID" | "EN" | "FR" | "DE") || "ID";

  return (
    <div id="gallery-container" className="bg-zinc-50 min-h-screen">
      
      {/* 2. Hero Section */}
      <section id="gallery-hero" className="relative pt-44 pb-28 sm:py-48 bg-zinc-950 overflow-hidden text-center text-white">
        <div className="absolute inset-0 z-0 select-none">
          <img 
            src="https://fusofyeqniyyunromgnh.supabase.co/storage/v1/object/public/pemandangan%20dan%20aktivitas/pemandangan.jpeg" 
            className="w-full h-full object-cover opacity-35 scale-105 pointer-events-none filter blur-[1px]"
            alt="Misool Lagoon Panoramic Backdrop"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-zinc-950/70 to-zinc-50"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 border border-white/20 text-white text-[10px] font-bold uppercase tracking-[0.2em] mb-6 rounded backdrop-blur-md shadow-sm">
              <Camera size={12} className="text-emerald-400" /> 
              {currentLang === "ID" ? "GELADAK VISUAL SURGA" : "HEAVENLY VISUAL DECK"}
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-black text-white mb-6 leading-tight select-none">
              {textStrings.heroTitle[currentLang]}
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-zinc-300 font-light leading-relaxed max-w-2xl mx-auto">
              {textStrings.heroSub[currentLang]}
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. Filter Section */}
      <section id="gallery-filters" className="relative -mt-12 z-20 px-6">
        <div className="max-w-4xl mx-auto bg-white border border-zinc-100 p-2 sm:p-2.5 rounded-full shadow-xl flex flex-wrap items-center justify-center gap-1 sm:gap-2">
          
          <button
            id="filter-btn-all"
            onClick={() => setCategoryFilter("all")}
            className={`px-5 py-2.5 rounded-full font-sans font-semibold text-xs tracking-wide uppercase transition-all duration-300 pointer-events-auto border-none cursor-pointer ${
              categoryFilter === "all"
                ? "bg-premium-green text-white shadow-md shadow-emerald-700/10 scale-102"
                : "text-text-light hover:text-text-dark hover:bg-zinc-100 bg-transparent"
            }`}
          >
            {textStrings.filters.all[currentLang]}
          </button>

          <button
            id="filter-btn-cottage"
            onClick={() => setCategoryFilter("cottage")}
            className={`px-5 py-2.5 rounded-full font-sans font-semibold text-xs tracking-wide uppercase transition-all duration-300 pointer-events-auto border-none cursor-pointer ${
              categoryFilter === "cottage"
                ? "bg-premium-green text-white shadow-md shadow-emerald-700/10 scale-102"
                : "text-text-light hover:text-text-dark hover:bg-zinc-100 bg-transparent"
            }`}
          >
            {textStrings.filters.cottage[currentLang]}
          </button>

          <button
            id="filter-btn-fasilitas"
            onClick={() => setCategoryFilter("fasilitas")}
            className={`px-5 py-2.5 rounded-full font-sans font-semibold text-xs tracking-wide uppercase transition-all duration-300 pointer-events-auto border-none cursor-pointer ${
              categoryFilter === "fasilitas"
                ? "bg-premium-green text-white shadow-md shadow-emerald-700/10 scale-102"
                : "text-text-light hover:text-text-dark hover:bg-zinc-100 bg-transparent"
            }`}
          >
            {textStrings.filters.fasilitas[currentLang]}
          </button>
 
          <button
            id="filter-btn-kamarmandi"
            onClick={() => setCategoryFilter("kamarmandi")}
            className={`px-5 py-2.5 rounded-full font-sans font-semibold text-xs tracking-wide uppercase transition-all duration-300 pointer-events-auto border-none cursor-pointer ${
              categoryFilter === "kamarmandi"
                ? "bg-premium-green text-white shadow-md shadow-emerald-700/10 scale-102"
                : "text-text-light hover:text-text-dark hover:bg-zinc-100 bg-transparent"
            }`}
          >
            {textStrings.filters.kamarmandi[currentLang]}
          </button>
 
          <button
            id="filter-btn-dapur"
            onClick={() => setCategoryFilter("dapur")}
            className={`px-5 py-2.5 rounded-full font-sans font-semibold text-xs tracking-wide uppercase transition-all duration-300 pointer-events-auto border-none cursor-pointer ${
              categoryFilter === "dapur"
                ? "bg-premium-green text-white shadow-md shadow-emerald-700/10 scale-102"
                : "text-text-light hover:text-text-dark hover:bg-zinc-100 bg-transparent"
            }`}
          >
            {textStrings.filters.dapur[currentLang]}
          </button>

        </div>
      </section>

      {/* 4. Elegant Bento Grid Gallery */}
      <section id="gallery-bento-grid" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          
          <motion.div 
            layout 
            className="grid grid-cols-1 md:grid-cols-4 gap-4 md:auto-rows-[250px]"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.length === 0 ? (
                <div id="gallery-empty-state" className="col-span-1 md:col-span-4 py-20 text-center text-zinc-500 bg-white rounded-2xl border border-zinc-100 shadow-sm">
                  <Camera size={48} className="mx-auto mb-4 text-zinc-400 opacity-60" />
                  <p className="font-serif text-lg font-medium text-zinc-800">
                    {currentLang === "ID" ? "Belum ada foto di galeri" : "No photos in coordinates"}
                  </p>
                  <p className="text-sm text-zinc-500 mt-1">
                    {currentLang === "ID" 
                      ? "Semua foto di halaman galeri telah dikosongkan." 
                      : "All photos in the gallery have been emptied / deleted."}
                  </p>
                </div>
              ) : (
                filteredItems.map((item, idx) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 220, damping: 25 }}
                    onClick={() => setLightboxIndex(idx)}
                    className={`group relative overflow-hidden rounded-2xl bg-zinc-800 shadow-sm border border-zinc-100 cursor-zoom-in aspect-[4/3] md:aspect-auto ${item.size}`}
                  >
                    {item.url.toLowerCase().endsWith(".mp4") ? (
                      <video 
                        src={item.url} 
                        muted 
                        loop 
                        autoPlay
                        playsInline
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none" 
                      />
                    ) : (
                      <img 
                        src={item.url} 
                        alt="Gallery Asset" 
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none"
                      />
                    )}
                    
                    {/* Glass-Morphism Gradient Hover Overlay (Pure visual with no text on top of the images as requested) */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center select-none">
                      {/* Floating Zoom icon indicator */}
                      <div className="w-12 h-12 bg-white/25 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-all duration-300 shadow-lg">
                        <Eye size={20} />
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>


      {/* 6. Call-to-Action (CTA) Section */}
      <section id="gallery-cta" className="py-24 px-6 bg-zinc-950 text-white text-center relative overflow-hidden border-t border-zinc-800">
        <div className="absolute inset-0 z-0 opacity-15 select-none pointer-events-none">
          <img 
            src="https://fusofyeqniyyunromgnh.supabase.co/storage/v1/object/public/galeri/12.jpeg" 
            className="w-full h-full object-cover"
            alt="Water sunset view overlay"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-black mb-6 leading-tight max-w-3xl mx-auto px-4">
            {textStrings.ctaTitle[currentLang]}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-zinc-300 mb-12 font-light px-4 max-w-2xl mx-auto leading-relaxed">
            {textStrings.ctaSub[currentLang]}
          </p>
          
          <a
            id="gallery-booking-cta"
            href="https://wa.me/6282199327798?text=Halo%2520Nut%2520Tonton%2520Homes%2520Misool%252C%2520saya%2520tertarik%2520menginap%2520dari%2520Galeri%2520Visual%2520dan%2520ingin%2520cek%2520ketersediaan%2520Traditional%2520Beachfront%2520Cottage" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 hover:scale-[1.02] text-white px-8 sm:px-12 py-4.5 rounded-[4px] font-bold text-xs tracking-[0.15em] uppercase transition-all shadow-xl shadow-emerald-950/40 pointer-events-auto cursor-pointer border-none"
          >
            <MessageCircle size={18} className="fill-white text-emerald-600" /> 
            {textStrings.ctaBtn[currentLang]}
          </a>
        </div>
      </section>

      {/* 7. Full-Screen Interactive Lightbox Pop-up Modal */}
      <AnimatePresence>
        {activeLightboxItem && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/95 z-[999] flex flex-col justify-between p-4 sm:p-6 cursor-zoom-out select-none"
          >
            
            {/* Top Toolbar */}
            <div className="flex items-center justify-between w-full text-white z-[1000] relative pt-2">
              <div className="text-left">
                <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest">
                  {categoryFilter === "all" ? "MISOOL ARCHIVE" : categoryFilter.toUpperCase()}
                </span>
                <p className="text-xs text-zinc-400 font-light">
                  {lightboxIndex !== null ? lightboxIndex + 1 : 0} of {filteredItems.length}
                </p>
              </div>
              
              <button 
                id="lightbox-close-btn"
                onClick={handleClose}
                className="text-white/80 hover:text-white bg-white/5 hover:bg-white/10 rounded-full p-2.5 transition-colors border-none cursor-pointer"
                title="Tutup (Esc)"
              >
                <X size={22} />
              </button>
            </div>

            {/* Central Media Sandbox with Click Protection & Arrow Channels */}
            <div className="flex items-center justify-between w-full h-[70vh] relative">
              
              {/* Previous Button */}
              <button
                id="lightbox-prev-btn"
                onClick={handlePrev}
                className="absolute left-1 sm:left-4 z-[1001] text-white/50 hover:text-white bg-black/30 hover:bg-black/60 rounded-full p-3 transition-colors border-none cursor-pointer flex items-center justify-center"
                title="Sebelumnya (ArrowLeft)"
              >
                <ChevronLeft size={28} />
              </button>

              {/* Main Expanded Image / Video */}
              <div 
                className="w-full h-full flex items-center justify-center"
                onClick={(e) => e.stopPropagation()} // Prevent clicking the image from closing the modal
              >
                {activeLightboxItem.url.toLowerCase().endsWith(".mp4") ? (
                  <motion.video 
                    key={activeLightboxItem.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.25 }}
                    src={activeLightboxItem.url} 
                    controls
                    autoPlay
                    loop
                    className="max-w-[85vw] max-h-[75vh] md:max-w-[80vw] md:max-h-[80vh] object-contain rounded-lg shadow-2xl border border-zinc-800"
                  />
                ) : (
                  <motion.img 
                    key={activeLightboxItem.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.25 }}
                    src={activeLightboxItem.url} 
                    alt="Expanded visual view" 
                    className="max-w-[85vw] max-h-[75vh] md:max-w-[80vw] md:max-h-[80vh] object-contain rounded-lg shadow-2xl border border-zinc-800"
                    referrerPolicy="no-referrer"
                  />
                )}
              </div>

              {/* Next Button */}
              <button
                id="lightbox-next-btn"
                onClick={handleNext}
                className="absolute right-1 sm:right-4 z-[1001] text-white/50 hover:text-white bg-black/30 hover:bg-black/60 rounded-full p-3 transition-colors border-none cursor-pointer flex items-center justify-center"
                title="Selanjutnya (ArrowRight)"
              >
                <ChevronRight size={28} />
              </button>

            </div>

            {/* Bottom Captions Overlay (Pure clean layout - no overlay text displays as requested) */}
            <div 
              className="w-full max-w-3xl mx-auto text-center text-white pb-2 px-4 z-[1000]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Text captions omitted on photos for aesthetic minimalism */}
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};
