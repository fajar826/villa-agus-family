import { useParams, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { MapPin, Clock, Users, CheckCircle2, ChevronLeft, MessageCircle, X, Compass } from "lucide-react";

export const TourDetailPage = () => {
  const { tourId } = useParams();
  const navigate = useNavigate();

  const tourData: Record<string, any> = {
    "stay-snorkel": {
      title: "3D2N Blissful Stay & Snorkel",
      location: "Usaha Jaya, Misool Timur",
      price: "Rp 3.450.000 /pax",
      duration: "3 Hari 2 Malam",
      users: "Private Stay (Maks 3 Tamu)",
      image: "https://fusofyeqniyyunromgnh.supabase.co/storage/v1/object/public/website/y2.jpeg",
      description: "Nikmati ketenangan total menginap selama 3 hari 2 malam di Traditional Beachfront Cottage premium kami. Bangun tidur dengan embusan angin sepoi tropis, buka pintu kayu geser Anda untuk panorama laut kristal, dan lompat langsung untuk bersnorkeling bersama biota laut berlimpah tepat di depan teras kamar Anda pribadi.",
      highlights: ["Menginap di Traditional Beachfront Cottage", "Snorkeling di Depan Kamar Tak Terbatas", "Sunblock SPF 50+ Reef-Safe Sachet", "Full board meals (Makanan Segar Lokal)", "Private Lagoon Boat Check-in"],
      itinerary: [
        {
          day: 1,
          title: "Check-in Layanan Perahu & Senja Teras",
          items: [
            "Penjemputan di Pelabuhan Yellu, Misool Timur oleh tim perahu Nut Tonton",
            "Menikmati sejuknya angin laut menyusuri selat-selat karst menuju Usaha Jaya",
            "Tiba di hotel, welcome drink kelapa muda segar & pengenalan penginapan",
            "Check-in Traditional Beachfront Cottage pilihan AC / Kipas Angin",
            "Sore hari santai di hammock teras pribadi menikmati senja Misool yang hening",
            "Makan malam olahan laut segar (fresh local seafood) khas keluarga pulau"
          ]
        },
        {
          day: 2,
          title: "Petualangan Snorkeling Teras Tradisional & Santai Sore",
          items: [
            "Sarapan pagi di tepi laut menghadap laut lepas",
            "Pengarahan keselamatan snorkeling & pembagian perlengkapan berkualitas",
            "Sesi snorkeling pagi menjelajahi rumahan terumbu karang hidup tepat di bawah dermaga",
            "Berenang bersama ribuan gerombolan ikan hias, koral lunak, dan penyu",
            "Makan siang prasmanan masakan tradisional di ruang makan terbuka",
            "Free leisure: mendayung kayak transparan keliling perairan Usaha Jaya",
            "Makan malam bersama dengan iringan petikan gitar akustik ramah penduduk lokal"
          ]
        },
        {
          day: 3,
          title: "Sunrise Atas Air & Check-out Pelabuhan",
          items: [
            "Melihat sang mentari terbit langsung (sunrise) yang megah dari tempat tidur",
            "Sarapan pagi kelapa segar & pisang goreng kampung hangat",
            "Sesi foto bersama kru pengurus Nut Tonton Homes",
            "Check-out dan loading perlengkapan ke kapal cepat",
            "Diantar kembali menuju Pelabuhan Yellu untuk penyeberangan kembali ke Sorong",
            "Trip selesai dengan kesegaran batin lahiriah"
          ]
        }
      ],
      includes: ["Cottage Tradisional Private (2 Malam)", "Full board meals (Sarapan, Siang, Malam)", "Transportasi Speedboat Yellu - Resort PP", "Alat Snorkeling Lengkap Premium", "Gratis Penggunaan Kayak Transparan", "Kopi, Teh & Air Mineral Tak Terbatas"],
      excludes: ["Tiket Kapal Ferry Sorong - Misool PP", "Pengeluaran Pribadi", "Asuransi Perjalanan", "Tips untuk Crew Lokal"],
      pricing: {
        main: "Rp 3.450.000",
        addons: [
          { label: "Upgrade Kamar AC Premium", price: "+Rp 400.000" },
          { label: "Tambahan Malam Mengingap", price: "IDR 1.2M /malam" },
          { label: "Kapasitas Ekstra Bed (Orang ke-3)", price: "Rp 950.000" }
        ]
      }
    },
    "misool-explorer": {
      title: "5D4N Ultimate Misool Explorer",
      location: "Usaha Jaya, Misool Timur",
      price: "Rp 5.850.000 /pax",
      duration: "5 Hari 4 Malam",
      users: "Private Island Hopping Tour",
      image: "https://fusofyeqniyyunromgnh.supabase.co/storage/v1/object/public/pemandangan%20dan%20aktivitas/pemandangan2.jpeg",
      description: "Jelajahi seluruh daya tarik magis Misool secara eksklusif. Mulai dari mendayung kayak melintasi celah bukit karst purba, berenang di perairan sunyi laguna cinta Dafalen, eksplorasi lukisan prasejarah gua, hingga menikmati ketenangan tak tertandingi di Traditional Beachfront Cottage selama 5 hari penuh kepuasan.",
      highlights: ["Tebing Karst Karawap", "Laguna Cinta Dafalen", "Gua Keramat & Lukisan Tangan Purba", "Eksplorasi Danau Ubur-ubur Tanpa Sengat", "Snorkeling Terumbu Karang Bintang Lima", "Kayaking Eksklusif"],
      itinerary: [
        {
          day: 1,
          title: "Pemberangkatan, Sambutan Hangat & Senja di Usaha Jaya",
          items: [
            "Dijemput di Pelabuhan Yellu, perjalanan laut berpemandangan spektakuler",
            "Tiba di Nut Tonton Homes, check-in, orientation & welcome dinner",
            "Merasakan heningnya malam pertama di pulau tropis yang damai"
          ]
        },
        {
          day: 2,
          title: "Dafalen Love Lagoon, Harfat Peak & Bukit Karst Karawap",
          items: [
            "Sarapan bernutrisi di tepi pantai jernih",
            "Perjalanan kapal menjelajahi laguna cinta Dafalen yang ikonik dari atas bukit",
            "Trekking ringan mendaki puncak Harfat Peak untuk panorama karst 360 derajat",
            "Makan siang piknik box di pantai pasir putih teduh",
            "Snorkeling sore di spot karang Karawap yang padat biota warna-warni",
            "Kembali ke resort, makan malam hangat"
          ]
        },
        {
          day: 3,
          title: "Situs Sejarah Gua Keramat & Lukisan Prasejarah Sumalel",
          items: [
            "Sarapan menyambut pagi",
            "Menyusuri tebing karst purba Sumalel melihat coretan lukisan tangan leluhur ribuan tahun lalu",
            "Memasuki wilayah mistis Gua Goa Keramat menggunakan perahu pelan",
            "Berenang santai di dalam kolam gua air tawar alami yang sejuk",
            "Kembali ke resort untuk bersantai menikmati kelapa muda segar"
          ]
        },
        {
          day: 4,
          title: "Danau Ubur-Ubur Lenmakana & Sunset Kayak",
          items: [
            "Daki ringan menuju Danau Karst Lenmakana",
            "Berenang bersama jutaan ubur-ubur emas tanpa sengat yang ramah dan menakjubkan",
            "Makan siang di tepi pantai berpasir mutiara",
            "Petualangan senja ber-kayak keliling hutan bakau jernih depan cottage",
            "Makan malam BBQ ikan bakar segar tangkapan nelayan lokal"
          ]
        },
        {
          day: 5,
          title: "Sayonara Paradise, Kembali ke Sorong",
          items: [
            "Sarapan pagi terakhir dengan pemandangan lautan teduh",
            "Persiapan check-out dan pembagian souvenir taring kerang kayu khas Misool",
            "Diantar menuju Pelabuhan kapal cepat Yellu",
            "Selesai sudah pelarian indah Anda di surga tersembunyi"
          ]
        }
      ],
      includes: ["Cottage Tradisional Tepi Pantai (4 Malam)", "Makan Penuh 3x Sehari (Prasmanan)", "Sewa Kapal Hopping Boat Privat & BBM", "Semua Tiket Retribusi Masuk Situs Wisata", "Pemandu Guide Lokal Berpengalaman", "Dokumentasi Underwater & Drone Trip", "Alat Snorkeling + Penyelamat Jaket"],
      excludes: ["Tiket Pesawat ke Sorong PP", "Tiket Ferry Sorong - Yellu PP", "Pengeluaran Pribadi", "Asuransi Penjelajah"],
      pricing: {
        main: "Rp 5.850.000",
        addons: [
          { label: "Upgrade Speedboat Penjelajah", price: "+Rp 1.500.000" },
          { label: "Upgrade Cottage AC Single", price: "+Rp 800.000" }
        ]
      }
    },
    "diving-adventure": {
      title: "4D3N Underwater Coral Quest",
      location: "Usaha Jaya, Misool Timur",
      price: "Rp 6.500.000 /pax",
      duration: "4 Hari 3 Malam",
      users: "Diver Professional Only (6 Dives)",
      image: "https://fusofyeqniyyunromgnh.supabase.co/storage/v1/object/public/pemandangan%20dan%20aktivitas/diving.jpeg",
      description: "Misool diakui dunia sebagai wilayah dengan keanekaragaman hayati laut tertinggi di planet bumi. Paket penyelaman eksklusif ini dirancang bagi Anda penyelamat bersertifikat untuk menjelajahi situs selam legendaris seperti Magic Mountain, Boo Windows, dan Nudi Rock bersama Dive Master bersertifikat lokal yang menjaga kelestarian terumbu.",
      highlights: ["6 Sesi Penyelaman Lepas Pantai", "Situs Selam Magic Mountain & Boo Windows", "Nudi Rock & Fiabacet Pinnacle", "Dive Master Pendamping Lokal", "Penyewaan Alat Selam Standar Internasional"],
      itinerary: [
        {
          day: 1,
          title: "Check-in & Sesi Penyelaman Adaptasi (Check Dive)",
          items: [
            "Dijemput di Pelabuhan Yellu, pemandu mengantarkan ke Nut Tonton Homes",
            "Check-in resort, pembagian log book, dan penyiapan ukuran wetsuit",
            "Sesi Penyelaman 1 (Check Dive) di perairan teras rumah kami yang sehat",
            "Membiasakan buoyancy kontrol di atas koral meja murni",
            "Makan malam olahan bumbu rempah tradisi Papua"
          ]
        },
        {
          day: 2,
          title: "Diving Hari 2: Menembus Jantung Situs Selam Fiabacet",
          items: [
            "Sarapan pagi bertenaga tinggi",
            "Penyelaman 2 di Nudi Rock (melihat keajaiban nudibranch raksasa)",
            "Penyelaman 3 di Boo Windows (lubang karang ikonik berpancaran matahari)",
            "Makan siang hangat di kapal penyelam",
            "Penyelaman 4 di Fiabacet Ridge (dinding vertikal dipadati soft coral merah muda)",
            "Kembali ke cottage, istirahat dan evaluasi log dive"
          ]
        },
        {
          day: 3,
          title: "Diving Hari 3: Menari Bersama Pari Manta di Magic Mountain",
          items: [
            "Sarapan pagi menyemangati jiwa",
            "Penyelaman 5 di Magic Mountain (stasiun pembersih utama Manta Ray)",
            "Melihat manta berukuran 5 meter berenang melayang anggun di perairan dalam",
            "Makan siang di pantai berpasir mutiara terisolasi",
            "Penyelaman 6 di Yillet Pinnacle yang berarus kaya nutrisi ikan pelagis",
            "Makan malam BBQ perayaan kelulusan eksplorasi selam"
          ]
        },
        {
          day: 4,
          title: "Log Review & Transfer Kembali Yellu",
          items: [
            "Sarapan santai, no-fly time safety check",
            "Pemberian tanda kelulusan trip selam Nut Tonton",
            "Packing peralatan scuba milik pribadi",
            "Transfer perahu mengantarkan kembali ke Pelabuhan Yellu",
            "Sampai jumpa dalam kepakan fin berikutnya"
          ]
        }
      ],
      includes: ["Traditional Cottage (3 Malam)", "6 Sesi Penyelaman Berperahu", "Tabung Oksigen & Pemberat Sabuk", "Dive Master Berlisensi (Rasio 1:3)", "Sewa BCD, Regulator, Wetsuit, Fins & Mask", "Penuh Makanan 3x Sehari (Segar prasmanan)", "Speedboat Diving Berfasilitas Keselamatan Lengkap"],
      excludes: ["Tiket Penerbangan & Ferry PP", "Biaya Marine Park Raja Ampat PIN (IDR 500k lokal / 1M asing)", "Tips Crew Kapal Penyelam"],
      pricing: {
        main: "Rp 6.500.000",
        addons: [
          { label: "Night Dive Tambahan", price: "+Rp 650.000 /dive" },
          { label: "Log Sewa Dive Computer", price: "+Rp 150.000 /hari" }
        ]
      }
    }
  };

  const currentTour = tourId ? tourData[tourId] : null;

  if (!currentTour) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-24 px-6 text-center">
        <div className="p-4 rounded-full bg-gray-100 text-gray-400 mb-6 font-serif">
          <Compass size={48} />
        </div>
        <h2 className="text-3xl font-bold mb-4 font-serif">Halaman Paket Belum Tersedia</h2>
        <p className="text-text-light mb-8 max-w-md">Maaf, informasi detail untuk tipe paket ini sedang dalam pemutakhiran data oleh pengelola resort.</p>
        <button onClick={() => navigate("/")} className="btn-premium flex items-center gap-2">
          <ChevronLeft size={18} /> KEMBALI KE HOME
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Header Image */}
      <div className="relative h-[350px] sm:h-[400px] md:h-[500px] w-full">
        <img 
          src={currentTour.image} 
          alt={currentTour.title} 
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-black/20 to-black/30"></div>
        <div className="absolute bottom-[-60px] sm:bottom-0 left-0 w-full px-6 z-20">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-6 sm:p-8 md:p-12 rounded-lg card-shadow max-w-3xl block sm:inline-block border border-gray-100"
            >
              <div className="flex items-center gap-2 text-premium-purple mb-4">
                <MapPin size={18} />
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest">{currentTour.location}</span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold font-serif text-text-dark mb-4 leading-tight">{currentTour.title}</h1>
              <div className="flex flex-wrap gap-4 md:gap-8 text-xs md:sm font-medium text-text-light">
                <div className="flex items-center gap-2">
                  <Users size={16} className="text-premium-purple" /> {currentTour.users}
                </div>
                <div className="flex items-center gap-2 text-premium-purple font-bold">
                  {currentTour.price}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-24 sm:pt-20 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Destinasi Section */}
            <div className="mb-12">
               <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 font-serif">
                Sorotan Utama <span className="section-divider"></span>
              </h3>
              <div className="flex flex-wrap gap-3">
                {currentTour.highlights.map((item: string) => (
                  <span key={item} className="px-4 py-2 bg-gray-50 border border-gray-100 rounded-full text-sm font-medium text-text-dark">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Overview */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 font-serif">
                Tentang Paket Ini <span className="section-divider"></span>
              </h3>
              <p className="text-text-light leading-relaxed font-light text-base md:text-lg">
                {currentTour.description}
              </p>
            </div>

            {/* Itinerary */}
            <div className="mb-12">
               <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 font-serif">
                Rencana Kegiatan <span className="section-divider"></span>
              </h3>
              <div className="space-y-12 relative before:absolute before:left-[11px] before:top-4 before:bottom-4 before:w-[1px] before:bg-premium-purple/20">
                {currentTour.itinerary.map((day: any) => (
                  <div key={day.day} className="relative pl-10">
                    <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-premium-purple text-white flex items-center justify-center text-[10px] font-bold z-10">{day.day}</div>
                    <h4 className="text-xl font-bold mb-4 font-serif">{day.title}</h4>
                    <ul className="space-y-3 text-text-light text-sm font-light leading-relaxed">
                      {day.items.map((item: string, i: number) => (
                        <li key={i} className="flex gap-3"><CheckCircle2 size={16} className="text-premium-purple flex-shrink-0 mt-0.5" /> {item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Price Table Area */}
            <div className="bg-premium-purple p-8 rounded-lg text-white mb-20">
               <h3 className="text-2xl font-bold mb-6 font-serif">Kalkulatif Biaya</h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <span className="text-xs uppercase tracking-widest opacity-70 block mb-2">Harga Paket Tertera</span>
                    <div className="text-3xl sm:text-4xl font-bold mb-2">{currentTour.pricing.main} <span className="text-lg opacity-60 font-light">/pax</span></div>
                    <p className="text-sm opacity-80 leading-relaxed font-light mt-4">Penjemputan dimulai dari Pelabuhan Yellu, Misool Timur. Disarankan mencocokkan hari kedatangan kapal ferry Sorong-Yellu.</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md p-6 rounded border border-white/10">
                    <h5 className="font-bold mb-4 uppercase tracking-widest text-xs">Pilihan Tambahan / Opsional</h5>
                    <ul className="space-y-3 text-sm font-light">
                      {currentTour.pricing.addons.map((addon: any, i: number) => (
                        <li key={i} className={`flex justify-between ${i > 0 ? "border-t border-white/25 pt-3 mt-3" : ""}`}>
                          <span>{addon.label}</span> <span className="font-bold">{addon.price}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
               </div>
            </div>
          </div>

          {/* Sidebar / Booking */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-8">
              <div className="bg-white border border-gray-100 rounded-lg p-8 card-shadow">
                <h4 className="text-xl font-bold mb-6 text-text-dark font-serif">Fasilitas Termasuk (Inclusive)</h4>
                <ul className="space-y-4 text-sm text-text-light font-light mb-8">
                  {currentTour.includes.map((item: string) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-green-500 mt-1 flex-shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
                <a 
                  href={`https://wa.me/6282199327798?text=Halo%2520Nut%2520Tonton%2520Homes%2520Misool%252C%2520saya%2520tertarik%2520booking%2520paket%2520${encodeURIComponent(currentTour.title)}`} 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-full btn-premium py-4 flex items-center justify-center gap-3 text-xs font-bold tracking-widest shadow-xl"
                >
                  <MessageCircle size={18} fill="white" /> CEK KETERSEDIAAN WA
                </a>
              </div>

              <div className="bg-zinc-50 border border-zinc-100 rounded-lg p-8">
                <h4 className="text-xl font-bold mb-6 text-text-dark opacity-50 font-serif">Belum Termasuk (Exclusive)</h4>
                <ul className="space-y-4 text-xs text-text-light opacity-65 font-light">
                  {currentTour.excludes.map((item: string) => (
                    <li key={item} className="flex items-start gap-3">
                      <X size={14} className="text-red-400 mt-1 flex-shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
