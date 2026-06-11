import { useParams, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { MapPin, Clock, CheckCircle2, ChevronLeft, MessageCircle, Compass } from "lucide-react";

export const ActivityDetailPage = () => {
  const { activityId } = useParams();
  const navigate = useNavigate();

  const activityData: Record<string, any> = {
    "diving-quest": {
      title: "The Ultimate Diving Quest",
      location: "Fiabacet Reef & Boo Area, Misool",
      price: "Rp 1.150.000 / Penyelaman",
      duration: "3 - 4 jam per Sesi",
      image: "https://fusofyeqniyyunromgnh.supabase.co/storage/v1/object/public/pemandangan%20dan%20aktivitas/diving.jpeg",
      description: "Jelajahi Segitiga Terumbu Karang Dunia. Pertemuan arus laut yang bergizi kaya di Misool melahirkan keanekaragaman hayati laut terkreatif di planet ini. Lihat langsung gerombolan penyu, gurita biru, nudibranch langka raksasa, hingga dinding vertikal soft-coral berkilau.",
      target: "Penyelam bersertifikat (SSI)",
      itinerary: [
        { title: "Briefing Pagi", text: "Analisis pasang surut arus, penyiapan log scuba, dan pemeriksaan regulator keselamatan mendalam" },
        { title: "Boat Ride", text: "Menuju situs selam terpilih (Magic Mountain / Boo Windows) selama 15-20 menit mengarungi bukit karst" },
        { title: "Under the Blue", text: "Penyelaman selama 45-60 menit didampingi Dive Master profesional lokal" },
        { title: "Debriefing", text: "Pengisian logbook selam, hidrasi kelapa muda segar, dan review temuan spesies terumbu" }
      ],
      includes: ["Pemandu Dive Master Lokal", "Penyewaan Tabung Udara & Pemberat", "Boat Transfer ke Lokasi Selam", "Camilan Buah Segar & Kopi", "Pembersih Alat Scuba"],
      pricing: "Rp 1.150.000"
    },
    "snorkel-kayak": {
      title: "Snorkeling & Kayaking Jernih",
      location: "Dermaga Tepi Pantai Usaha Jaya",
      price: "Gratis untuk Tamu Menginap (Rp 250.000 / Non-tamu)",
      duration: "Fleksibel Seharian",
      image: "https://fusofyeqniyyunromgnh.supabase.co/storage/v1/object/public/pemandangan%20dan%20aktivitas/aktivitas5.jpeg",
      description: "Berenang di air kristal hijau toska yang tenang, dikelilingi oleh ribuan ikan warna-warni tepat di depan cottage Anda. Anda juga dapat mendayung kayak transparan kami secara mandiri berkeliling laguna dan celah bukit karst yang senyap.",
      target: "Semua umur, keluarga besar, berpasangan santai",
      itinerary: [
        { title: "Gear Pickup", text: "Ambil kacamata selam, snorkel berkualitas, sepatu karang (booties), dan pelampung di pos resort" },
        { title: "Ocean Glide", text: "Berenang langsung dari dermaga kayu mengamati koral meja sehat di terumbu rumah (house reef)" },
        { title: "Kayak Exploration", text: "Dayung kayak transparan menembus perairan tenang bagai kaca menyusuri pepohonan bakau jernih" },
        { title: "Sunset Chill", text: "Kembalikan alat santai, dilanjutkan dengan mandi air hangat segar di cottage Anda" }
      ],
      includes: ["Sewa Alat Snorkeling Premium", "Sewa Kayak Transparan Kokoh", "Lifejacket Jaket Keselamatan", "Guide Pengawas Tepi Pantai"],
      pricing: "Rp 250.005"
    },
    "island-hop": {
      title: "Misool Island Hopping",
      location: "Laguna Cinta Dafalen & Goa Keramat",
      price: "Rp 1.500.000 /pax (Shared Trip)",
      duration: "1 Hari Penuh (08.00 - 17.00)",
      image: "https://fusofyeqniyyunromgnh.supabase.co/storage/v1/object/public/pemandangan%20dan%20aktivitas/pemandangan.jpeg",
      description: "Perjalanan perahu (boat trip) menyusuri gugusan pulau karang ikonik, laguna tersembunyi berair tenang, dan goa magis di Misool Timur. Destinasi andalan mencakup viewpoint cinta Dafalen, puncak Harfat Peak, dan lukisan prasejarah Sumalel.",
      target: "Pecinta fotografi alam lanskap, rombongan petualang",
      itinerary: [
        { title: "08.00 - Departure", text: "Sarapan pagi di dermaga, dilanjutkan menaiki speedboat penjelajah Nut Tonton" },
        { title: "10.00 - Dafalen Lagoon", text: "Mendaki tangga kayu puncak Harfat Peak menangkap visual romantis teluk cinta" },
        { title: "12.30 - Sumalel Rocks", text: "Gelar makan siang piknik di pantai terpencil, lalu menyusuri tebing prasejarah melihat seni purba" },
        { title: "14.30 - Sacred Goa", text: "Eksplorasi Goa Keramat menggunakan pelampung berenang melihat stalaktit magis" },
        { title: "17.00 - Return", text: "Perjalanan pulang santai ke resort menyambut sinar senja sunset yang berkilau" }
      ],
      includes: ["Charter Hopping Boat + BBM", "Tiket Retribusi Adat & Area Masuk", "Makan Siang Box Piknik Mewah", "Pemandu Adat Pulau Asli", "Dokumentasi Foto Udara Drone"],
      pricing: "Rp 1.500.000"
    }
  };

  let resolvedId = activityId;
  if (resolvedId === "snorkeling-kayak") resolvedId = "snorkel-kayak";
  if (resolvedId === "island-hopping") resolvedId = "island-hop";

  const currentActivity = resolvedId ? activityData[resolvedId] : null;

  if (!currentActivity) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-24 px-6 text-center">
        <div className="p-4 rounded-full bg-gray-100 text-gray-400 mb-6 font-serif">
          <Compass size={48} />
        </div>
        <h2 className="text-3xl font-bold mb-4 font-serif">Aktivitas Belum Tersedia</h2>
        <p className="text-text-light mb-8 max-w-md">Maaf, detail aktivitas alam ini sedang dalam pemutakhiran data oleh pengelola resort.</p>
        <button onClick={() => navigate("/")} className="btn-premium flex items-center gap-2">
          <ChevronLeft size={18} /> KEMBALI KE HOME
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Header Image */}
      <div className="relative h-[350px] sm:h-[450px] w-full">
        <img 
          src={currentActivity.image} 
          alt={currentActivity.title} 
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-black/20 to-black/30"></div>
        <div className="absolute bottom-[-50px] sm:bottom-0 left-0 w-full p-6 sm:p-12 z-20">
          <div className="max-w-7xl mx-auto">
             <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-6 sm:p-10 rounded-lg card-shadow max-w-2xl border border-gray-100"
            >
              <div className="flex items-center gap-2 text-premium-purple mb-3">
                <MapPin size={16} />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em]">{currentActivity.location}</span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold text-text-dark mb-4 leading-tight">{currentActivity.title}</h1>
              <div className="flex flex-wrap items-center gap-4 text-[10px] md:text-xs font-bold text-premium-purple uppercase tracking-widest">
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-24 sm:pt-16 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-4 font-serif">Deskripsi Aktivitas</h3>
              <p className="text-text-light text-base md:text-lg leading-relaxed font-light">{currentActivity.description}</p>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 font-serif">Alur Kegiatan (Timeline)</h3>
              <div className="space-y-6">
                {currentActivity.itinerary.map((item: any, i: number) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-premium-purple mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-bold text-text-dark font-serif text-lg block">{item.title}</span>
                      <p className="text-sm text-text-light font-light leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 bg-zinc-50 rounded-xl border border-gray-100">
               <h4 className="font-bold text-base mb-2 font-serif">Kesesuaian Wisatawan</h4>
               <p className="text-sm text-text-light font-light">{currentActivity.target}</p>
            </div>
          </div>

          <div className="lg:col-span-1">
             <div className="bg-white border border-gray-100 rounded-lg p-8 card-shadow sticky top-28">
                <h4 className="font-bold text-lg mb-6 font-serif">Termasuk Layanan Kami</h4>
                <ul className="space-y-4 text-sm text-text-light font-light mb-8">
                  {currentActivity.includes.map((incl: string) => (
                    <li key={incl} className="flex items-center gap-3">
                      <CheckCircle2 size={16} className="text-green-500" /> {incl}
                    </li>
                  ))}
                </ul>
                <a 
                  href={`https://wa.me/6282199327798?text=Halo%2520Nut%2520Tonton%2520Homes%2520Misool%252C%2520saya%2520ingin%2520booking%2520layanan%2520aktivitas%2520${encodeURIComponent(currentActivity.title)}`} 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-full btn-premium py-4 flex items-center justify-center gap-3 text-xs tracking-widest font-bold uppercase shadow-xl"
                >
                  <MessageCircle size={18} fill="white" /> TANYA JADWAL VIA WA
                </a>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
