import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Star, 
  ChevronRight, 
  ChevronLeft,
  MessageCircle,
  MapPin, 
  Compass, 
  Map as MapIcon, 
  Image as ImageIcon, 
  Quote, 
  Heart, 
  Camera, 
  Waves, 
  Zap, 
  Anchor, 
  HelpCircle, 
  X, 
  Calendar, 
  Clock, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";
import { Link } from "react-router-dom";
import { activities, categorizedGallery, testimonials, blogPosts } from "../constants";
import { useLanguage } from "../context/LanguageContext";

export const HomePage = () => {
  const { language, t } = useLanguage();
  const currentLang = (language || "ID") as "ID" | "EN" | "FR" | "DE";
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [galleryFilter, setGalleryFilter] = useState<"all" | "cottage" | "fasilitas" | "kamarmandi" | "dapur">("all");
  const [activeReviewIdx, setActiveReviewIdx] = useState(0);

  const reviews = testimonials.map((t, i) => ({
    id: i + 1,
    name: t.name,
    avatar: t.avatar,
    rating: t.rating,
    relativeTime: {
      ID: "Beberapa saat lalu",
      EN: "Recently",
      FR: "Récemment",
      DE: "Kürzlich"
    },
    comment: {
      ID: t.content,
      EN: t.content,
      FR: t.content,
      DE: t.content
    }
  }));

  const bentoImages = [
    {
      id: "halaman",
      url: "https://kycscxrffjorfwmuogjp.supabase.co/storage/v1/object/public/galery%20villa%20agus%20family/kamar2.jpeg",
      title: "Kamar Utama",
      caption: "Kamar utama yang nyaman",
      size: "md:col-span-6 md:row-span-1 col-span-1"
    },
    {
      id: "kamar1",
      url: "https://kycscxrffjorfwmuogjp.supabase.co/storage/v1/object/public/galery%20villa%20agus%20family/kamar%20.jpeg",
      title: "Kamar Utama",
      caption: "Kamar utama yang nyaman",
      size: "md:col-span-6 md:row-span-1 col-span-1"
    },
    {
      id: "kamar2",
      url: "https://kycscxrffjorfwmuogjp.supabase.co/storage/v1/object/public/galery%20villa%20agus%20family/kamar2.jpeg",
      title: "Kamar Kedua",
      caption: "Kamar kedua untuk keluarga",
      size: "md:col-span-6 md:row-span-1 col-span-1"
    },
    {
      id: "pemandangan",
      url: "https://kycscxrffjorfwmuogjp.supabase.co/storage/v1/object/public/galery%20villa%20agus%20family/pemandangan.jpeg",
      title: "Pemandangan",
      caption: "Pemandangan indah dari villa",
      size: "md:col-span-6 md:row-span-1 col-span-1"
    }
  ];

  const filtersText = {
    all: { ID: "All (Semua Foto)", EN: "All Photos", FR: "Toutes Photos", DE: "Alle Bilder" },
    cottage: { ID: "Kamar", EN: "Rooms", FR: "Chambres", DE: "Zimmer" },
    fasilitas: { ID: "Fasilitas & Area", EN: "Facilities & Area", FR: "Installations & Zone", DE: "Einrichtungen & Bereich" },
    kamarmandi: { ID: "Kamar Mandi", EN: "Bathroom", FR: "Salle de Bain", DE: "Badezimmer" },
    dapur: { ID: "Dapur", EN: "Kitchen", FR: "Cuisine", DE: "Küche" }
  };

  const HOME_GALLERY_IMAGES = [
    ...categorizedGallery.villa.map(img => ({ ...img, category: "cottage" as const })),
    ...categorizedGallery.fasilitas.map(img => ({ ...img, category: "fasilitas" as const })),
    ...categorizedGallery.kamarmandi.map(img => ({ ...img, category: "kamarmandi" as const })),
    ...categorizedGallery.dapur.map(img => ({ ...img, category: "dapur" as const }))
  ];

  const filteredGallery = galleryFilter === "all" 
    ? HOME_GALLERY_IMAGES 
    : HOME_GALLERY_IMAGES.filter(img => img.category === galleryFilter);

  // Update Buttons
  return (
    <div id="top" className="bg-white overflow-x-hidden pt-0 selection:bg-premium-purple selection:text-white">
      
      {/* 1. Hero Section */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Visual Background */}
        <div className="absolute inset-0 z-0 bg-zinc-950">
          <img 
            src="https://kycscxrffjorfwmuogjp.supabase.co/storage/v1/object/public/galery%20villa%20agus%20family/kamar%20.jpeg"
            alt="Hero Background"
            referrerPolicy="no-referrer"
            className="absolute top-0 left-0 w-full h-full object-cover transform-gpu opacity-80 brightness-[0.7] md:brightness-[0.6] transform scale-102 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/85 via-black/25 to-black/20 md:from-zinc-950 md:via-transparent md:to-black/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex items-center justify-center h-full">
          <div className="max-w-4xl text-center text-white mt-8 md:mt-16 flex flex-col items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-center justify-center"
            >

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-serif leading-[1.15] mb-4 tracking-tight text-white drop-shadow-md text-center">
                {t.hero.headline}
              </h1>
              
              <p className="text-xs sm:text-base md:text-lg text-zinc-200/85 mb-6 md:mb-8 max-w-2xl mx-auto font-light leading-relaxed text-center">
                {t.hero.subheadline}
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-3.5 w-full">
                <a 
                  href="https://wa.me/6285738285726?text=Halo%2520Villa%2520Agus%2520Familly,%2520saya%2520ingin%2520cek%2520ketersediaan"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-500 hover:text-white text-white px-5 py-3 md:px-8 md:py-4 rounded-full transition-all duration-300 ease-in-out uppercase tracking-wider md:tracking-widest text-[10px] md:text-xs font-bold flex items-center justify-center gap-2 md:gap-3 shadow-xl hover:shadow-emerald-600/20 cursor-pointer active:scale-95 border border-emerald-600 hover:border-emerald-500"
                >
                  {t.hero.cta} <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <Link 
                  to="/informasi"
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-5 py-3 md:px-8 md:py-4 rounded-full transition-all duration-300 uppercase tracking-wider md:tracking-widest text-[10px] md:text-xs font-bold text-center cursor-pointer active:scale-95 inline-block"
                >
                  {t.hero.explore}
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Section "The Cottage" & Galeri Visual */}
      <section id="kamar" className="py-24 bg-white border-b border-gray-100 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Room Summary Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
            <div className="lg:col-span-7">
              <span className="text-premium-purple font-bold text-xs uppercase tracking-[0.25em] mb-3 block">{t.cottage.badge}</span>
              <h2 className="text-3xl md:text-5xl font-bold font-serif text-text-dark mb-6 leading-tight">
                {t.cottage.title}
              </h2>
              <p className="text-text-light text-base md:text-lg leading-relaxed font-light max-w-3xl">
                {t.cottage.description}
              </p>
            </div>
            
            {/* Badges Panel */}
            <div className="lg:col-span-5 h-full flex flex-col justify-end">
              <div className="bg-zinc-50 border border-zinc-100 p-6 rounded-2xl">
                <p className="text-[10px] font-bold text-premium-purple uppercase tracking-widest mb-4">{t.cottage.facilitiesTitle}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center gap-2.5 text-sm text-text-dark font-medium">
                    <CheckCircle2 size={16} className="text-premium-purple" /> {t.cottage.maxGuests}
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-text-dark font-medium">
                    <CheckCircle2 size={16} className="text-premium-purple" /> {t.cottage.acOption}
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-text-dark font-medium">
                    <CheckCircle2 size={16} className="text-premium-purple" /> {t.cottage.privateBathroom}
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-text-dark font-medium">
                    <CheckCircle2 size={16} className="text-premium-purple" /> {t.cottage.privateTerrace}
                  </div>
                </div>
              </div>

              <div className="bg-white border border-zinc-100 p-6 rounded-2xl mt-4 shadow-sm">
                <p className="text-[10px] font-bold text-premium-purple uppercase tracking-widest mb-4">Informasi Harga</p>
                <div className="grid grid-cols-1 gap-2">
                  <div className="flex items-center gap-2.5 text-sm text-text-dark font-medium">
                    Bulanan: <span className="font-bold">Rp 6.000.000</span> / bulan / kamar
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-text-dark font-medium">
                    Harian: <span className="font-bold">Rp 300.000</span> / hari / kamar
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bento Grid Visual Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
            {bentoImages.map((img) => (
              <motion.div
                key={img.id}
                onClick={() => setSelectedImage(img.url)}
                whileHover={{ y: -4 }}
                className={`${img.size} relative overflow-hidden rounded-xl group cursor-zoom-in shadow-sm border border-gray-100`}
              >
                <img 
                  src={img.url} 
                  alt={`${img.title}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <div className="bg-white/90 p-3 rounded-full text-premium-purple shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <Camera size={20} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA Section after Kamar */}
      <section className="py-16 bg-zinc-50 border-t border-zinc-100 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-2xl font-bold font-serif text-text-dark mb-6">
            {currentLang === "ID" ? "Siap untuk pengalaman liburan tak terlupakan?" : "Ready for an unforgettable holiday experience?"}
          </h3>
          <a 
            href="https://wa.me/6285738285726?text=Halo%2520Villa%2520Agus%2520Familly,%2520saya%2520ingin%2520cek%2520ketersediaan"
            target="_blank"
            rel="noreferrer"
            className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-full transition-all duration-300 uppercase tracking-wider text-xs font-bold shadow-lg"
          >
            {currentLang === "ID" ? "Hubungi Admin Sekarang" : "Contact Admin Now"}
          </a>
        </div>
      </section>

      {/* 5. GALERI SECTION */}

      <section id="galeri" className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <span className="text-premium-purple font-bold text-xs uppercase tracking-[0.25em] mb-3 block">{t.gallerySec.badge}</span>
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-text-dark">
                {t.gallerySec.title} <span className="section-divider hidden sm:block"></span>
              </h2>
            </div>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              <button 
                onClick={() => setGalleryFilter("all")}
                className={`px-5 py-2 text-xs font-bold uppercase tracking-widest rounded transition-all cursor-pointer ${
                  galleryFilter === "all" ? "bg-premium-purple text-white shadow-md" : "bg-white text-text-light hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {filtersText.all[currentLang]}
              </button>
              <button 
                onClick={() => setGalleryFilter("cottage")}
                className={`px-5 py-2 text-xs font-bold uppercase tracking-widest rounded transition-all cursor-pointer ${
                  galleryFilter === "cottage" ? "bg-premium-purple text-white shadow-md" : "bg-white text-text-light hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {filtersText.cottage[currentLang]}
              </button>
              <button 
                onClick={() => setGalleryFilter("fasilitas")}
                className={`px-5 py-2 text-xs font-bold uppercase tracking-widest rounded transition-all cursor-pointer ${
                  galleryFilter === "fasilitas" ? "bg-premium-purple text-white shadow-md" : "bg-white text-text-light hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {filtersText.fasilitas[currentLang]}
              </button>
              <button 
                onClick={() => setGalleryFilter("kamarmandi")}
                className={`px-5 py-2 text-xs font-bold uppercase tracking-widest rounded transition-all cursor-pointer ${
                  galleryFilter === "kamarmandi" ? "bg-premium-purple text-white shadow-md" : "bg-white text-text-light hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {filtersText.kamarmandi[currentLang]}
              </button>
              <button 
                onClick={() => setGalleryFilter("dapur")}
                className={`px-5 py-2 text-xs font-bold uppercase tracking-widest rounded transition-all cursor-pointer ${
                  galleryFilter === "dapur" ? "bg-premium-purple text-white shadow-md" : "bg-white text-text-light hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {filtersText.dapur[currentLang]}
              </button>
            </div>
          </div>


          {/* Grid Display */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredGallery.map((img, idx) => (
              <motion.div
                key={`${img.url}-${idx}`}
                layout
                onClick={() => setSelectedImage(img.url)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                viewport={{ once: true }}
                className="relative aspect-square overflow-hidden rounded-xl bg-zinc-200 group cursor-zoom-in shadow-sm border border-gray-100"
              >
                {img.url.toLowerCase().endsWith(".mp4") ? (
                  <video 
                    src={img.url} 
                    muted 
                    loop 
                    autoPlay
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                ) : (
                  <img 
                    src={img.url} 
                    alt={`${img.title} - Villa Agus Familly`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <h4 className="text-white font-serif font-bold text-base leading-tight">{img.title}</h4>
                  <p className="text-white/70 text-[10px] uppercase tracking-widest mt-1 flex items-center gap-1">
                    <MapPin size={10} className="text-premium-purple" /> {img.desc || "Karangasem, Bali"}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. Why Choose Us (WCU Section) */}
      <section className="py-24 bg-gradient-to-br from-zinc-900 via-stone-900 to-zinc-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-premium-purple/10 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-premium-purple font-bold text-xs uppercase tracking-[0.25em] mb-4 block">{t.wcu.badge}</span>
              <h2 className="text-4xl md:text-5xl font-bold font-serif text-white mb-8 leading-tight">
                {t.wcu.titlePart1} <br />
                <span className="italic font-light text-zinc-300">{t.wcu.titlePart2}</span>
              </h2>
              <p className="text-zinc-300 text-base md:text-lg mb-10 leading-relaxed font-light">
                {t.wcu.description}
              </p>
              
              <div className="space-y-8">
                <div className="flex gap-4.5 group">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-premium-purple flex-shrink-0 transition-colors group-hover:bg-premium-purple group-hover:text-white border border-white/5">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold font-serif text-lg mb-1 text-white">{t.wcu.point1Title}</h4>
                    <p className="text-zinc-400 text-sm font-light leading-relaxed">{t.wcu.point1Desc}</p>
                  </div>
                </div>
                
                <div className="flex gap-4.5 group">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-premium-purple flex-shrink-0 transition-colors group-hover:bg-premium-purple group-hover:text-white border border-white/5">
                    <Waves size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold font-serif text-lg mb-1 text-white">{t.wcu.point2Title}</h4>
                    <p className="text-zinc-400 text-sm font-light leading-relaxed">{t.wcu.point2Desc}</p>
                  </div>
                </div>

                <div className="flex gap-4.5 group">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-premium-purple flex-shrink-0 transition-colors group-hover:bg-premium-purple group-hover:text-white border border-white/5">
                    <Heart size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold font-serif text-lg mb-1 text-white">{t.wcu.point3Title}</h4>
                    <p className="text-zinc-400 text-sm font-light leading-relaxed">{t.wcu.point3Desc}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Visual Block with Floating Experience Star */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-zinc-900">
                <img 
                  src="https://kycscxrffjorfwmuogjp.supabase.co/storage/v1/object/public/galery%20villa%20agus%20family/kamar%20.jpeg" 
                  alt="Kamar Villa Agus Family" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover brightness-95"
                />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-zinc-900/90 backdrop-blur-xl p-6 rounded-2xl shadow-2xl border border-white/10 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-premium-green rounded-full flex items-center justify-center text-white text-xl font-bold shadow-[0_0_20px_rgba(5,150,105,0.4)]">
                    100%
                  </div>
                  <div>
                    <h5 className="font-bold text-white text-md leading-tight font-serif">{t.wcu.badgeTitle}</h5>
                    <p className="text-[10px] text-zinc-400 uppercase tracking-widest mt-1">{t.wcu.badgeDesc}</p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 7. Blog / Cerita dari Misool */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="flex items-center justify-between gap-4 mb-16">
            <div>
              <span className="text-premium-purple font-bold text-xs uppercase tracking-[0.25em] mb-3 block">{t.blog.badge}</span>
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-text-dark">
                {t.blog.title} <span className="section-divider hidden sm:block"></span>
              </h2>
            </div>
            <Link 
              to="/blog" 
              className="text-premium-purple font-bold text-sm uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all"
            >
              {t.blog.more} <ChevronRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {blogPosts.map((post) => (
              <motion.article
                key={post.id}
                whileHover={{ y: -4 }}
                className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <Link to={`/blog/${post.id}`}>
                  <div className="relative aspect-[16/9] overflow-hidden bg-zinc-100">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-premium-purple text-white px-3 py-1 font-bold text-[9px] uppercase tracking-wider rounded">
                      {post.category}
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center gap-4 text-[10px] text-text-light font-bold uppercase tracking-wider mb-3">
                      <span className="flex items-center gap-1"><Calendar size={12} className="text-premium-purple" /> {post.date}</span>
                      <span className="flex items-center gap-1"><Clock size={12} className="text-premium-purple" /> {post.readTime}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold font-serif text-text-dark group-hover:text-premium-purple leading-tight mb-4">
                      {post.title}
                    </h3>
                    <p className="text-text-light text-sm font-light leading-relaxed mb-6">
                      {post.excerpt}
                    </p>
                    
                    <span className="text-[11px] font-bold uppercase tracking-widest text-premium-purple flex items-center gap-1.5 group-hover:gap-3">
                      Baca panduan lengkap <ArrowRight size={12} />
                    </span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

        </div>
      </section>


      <section className="py-24 bg-zinc-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <span className="text-premium-purple font-bold text-xs uppercase tracking-[0.25em] mb-4 block">
              {currentLang === "ID" ? "PROSEDUR RESERVASI" : "BOOKING PROCEDURE"}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-text-dark mb-6 leading-tight">
              {currentLang === "ID" ? "Informasi Cara Order" : "How to Book"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
                <span className="text-3xl font-bold text-premium-purple mb-4 block font-serif">01</span>
                <h3 className="text-xl font-bold text-text-dark mb-3">
                  {currentLang === "ID" ? "Pilih Tanggal & Jumlah Tamu" : "Select Dates & Guests"}
                </h3>
                <p className="text-text-light text-base leading-relaxed">
                  {currentLang === "ID" ? "Tentukan tanggal check-in, check-out, dan pastikan total tamu maksimal 6 orang." : "Select your check-in and check-out dates, ensuring a maximum of 6 guests."}
                </p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
                <span className="text-3xl font-bold text-premium-purple mb-4 block font-serif">02</span>
                <h3 className="text-xl font-bold text-text-dark mb-3">
                  {currentLang === "ID" ? "Hubungi Admin via WhatsApp" : "Contact Admin via WhatsApp"}
                </h3>
                <p className="text-text-light text-base leading-relaxed">
                  {currentLang === "ID" ? "Klik tombol booking di website untuk langsung terhubung dengan nomor resmi Villa Agus Family." : "Click the booking button on the website to connect directly with the official Villa Agus Family number."}
                </p>
            </div>                
            <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
                <span className="text-3xl font-bold text-premium-purple mb-4 block font-serif">03</span>
                <h3 className="text-xl font-bold text-text-dark mb-3">
                  {currentLang === "ID" ? "Konfirmasi Ketersediaan & Pembayaran" : "Availability & Payment Confirmation"}
                </h3>
                <p className="text-text-light text-base leading-relaxed">
                  {currentLang === "ID" ? "Admin akan mengecek ketersediaan tanggal. Jika aman, lakukan pembayaran aman langsung ke owner." : "Admin will check date availability. If available, make payments directly to the owner, avoiding platform fees."}
                </p>
            </div>                
            <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
                <span className="text-3xl font-bold text-premium-purple mb-4 block font-serif">04</span>
                <h3 className="text-xl font-bold text-text-dark mb-3">
                  {currentLang === "ID" ? "E-Invoice & Check-In" : "E-Invoice & Check-In"}
                </h3>
                <p className="text-text-light text-base leading-relaxed">
                  {currentLang === "ID" ? "Terima bukti reservasi digital (E-Invoice) resmi, dan Anda siap menikmati liburan tenang di Karangasem!" : "Receive your official E-Invoice and prepare for a peaceful holiday in Karangasem!"}
                </p>
            </div>
          </div>
        </div>
      </section>





      {/* 8. Trust & Review Swiper */}
      <section className="py-20 bg-zinc-50/80 border-t border-b border-zinc-200 overflow-hidden relative text-zinc-800 scroll-mt-16" id="testimoni">
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
                EXCELLENT
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
                                  {rev.relativeTime?.[currentLang] || rev.relativeTime?.["ID"] || "3 tahun lalu"}
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
                        activeReviewIdx === i ? "bg-zinc-800 w-4" : "bg-zinc-300"
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
                    className="shrink-0 w-[85vw] snap-center bg-white border border-zinc-200 rounded-xl p-6 flex flex-col justify-between min-h-[290px] shadow-sm relative text-left"
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

              {/* Progress Dots */}
              <div className="flex justify-center gap-1.5 mt-3">
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

      {/* 9. Booking CTA Banner */}
      <section className="relative py-28 overflow-hidden bg-zinc-950">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://kycscxrffjorfwmuogjp.supabase.co/storage/v1/object/public/galery%20villa%20agus%20family/kamar2.jpeg" 
            alt="Booking Banner Background" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-30 filter blur-[2px]"
          />
          <div className="absolute inset-0 bg-zinc-950/80"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-5xl font-bold font-serif text-white mb-6 leading-tight">
              {t.ctaBanner.title}
            </h2>
            <p className="text-zinc-300 text-base md:text-lg mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              {t.ctaBanner.description}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
              <a 
                href="https://wa.me/6282199327798?text=Halo%2520Nut%2520Tonton%2520Homes%2520Misool%252C%2520saya%2520ingin%2520pesan%2520cottage" 
                target="_blank"
                rel="noreferrer"
                className="bg-premium-purple hover:bg-white hover:text-text-dark text-white text-xs tracking-widest font-bold uppercase py-4.5 px-10 rounded-[4px] border border-premium-purple transition-all duration-300 w-full sm:w-auto"
              >
                {t.ctaBanner.btnBook}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Immersive Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/95 z-[999] flex items-center justify-center p-4 cursor-zoom-out"
          >
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white hover:text-premium-purple bg-white/5 rounded-full p-2"
            >
              <X size={24} />
            </button>
            {selectedImage.toLowerCase().endsWith(".mp4") ? (
              <video 
                src={selectedImage} 
                controls
                autoPlay
                loop
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl border border-zinc-800"
              />
            ) : (
              <img 
                src={selectedImage} 
                alt="Immersive Vision" 
                referrerPolicy="no-referrer"
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl border border-zinc-800"
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};
