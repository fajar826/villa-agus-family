import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { CheckCircle2, Star, ChevronRight, MessageCircle } from "lucide-react";

export const DestinationsPage = () => {
  const destinations = [
    {
      id: "misool-explorer",
      title: "Dafalen Love Lagoon",
      category: "Romantic Lagoon & Karst",
      image: "https://fusofyeqniyyunromgnh.supabase.co/storage/v1/object/public/pemandangan%20dan%20aktivitas/pemandangan2.jpeg",
      description: "Surga perairan tersembunyi yang mendunia. Di sini, tebing-tebing karst kapur menjulang tinggi membentuk formasi unik yang melingkari cekungan laut toska membentuk pola hati (love) sempurna.",
      why: [
        "Viewpoint bukit karang dengan pemandangan hati yang spektakuler",
        "Air laut yang sangat tenang dan jernih, datar seperti cermin",
        "Sangat ideal untuk mendayung kayak transparan atau paddleboard",
        "Hutan bakau jernih tempat berkembang biak aneka ikan karang",
        "Hanya berjarak 30 menit perjalanan perahu dari Nut Tonton Homes"
      ],
      activities: [
        "Mendaki tangga kayu menuju viewpoint Dafalen",
        "Bermain kayak transparan di sekitar laguna",
        "Sesi fotografi lanskap laut estotik",
        "Snorkeling menjelajahi dinding tebing karang"
      ],
      package: {
        name: "Ultimate Misool Explorer 5 Hari 4 Malam",
        price: "Mulai dari Rp 5.850.000 /pax"
      }
    },
    {
      id: "stay-snorkel",
      title: "Goa Keramat & Sumalel Situs Prasejarah",
      category: "History & Mystical Adventure",
      image: "https://fusofyeqniyyunromgnh.supabase.co/storage/v1/object/public/pemandangan%20dan%20aktivitas/pemandangan.jpeg",
      description: "Destinasi spiritual dan sejarah yang memukau. Kunjungi goa laut prasejarah tempat berbaringnya sejarah leluhur, serta tebing batu Sumalel yang memajang lukisan stensil tangan purba berusia ribuan tahun.",
      why: [
        "Goa bawah air raksasa dengan stalaktit berkilau yang magis",
        "Situs lukisan tangan prasejarah merah oker yang otentik",
        "Air gua tawar-payau yang segar dan sangat bersih",
        "Suasana sakral yang sunyi dan sangat terawat keberdayaannya",
        "Akses perahu kayu langsung masuk ke mulut gua"
      ],
      activities: [
        "Eksplorasi dalam gua menggunakan obor dan perahu lambat",
        "Berenang di kolam air gua keramat yang menyegarkan",
        "Menyusuri tebing Sumalel mengamati lukisan prasejarah",
        "Belajar sejarah lokal bersama pemandu adat asli"
      ],
      package: {
        name: "Blissful Stay, Snorkel & Culture 3 Hari 2 Malam",
        price: "Mulai dari Rp 3.450.000 /pax"
      }
    },
    {
      id: "misool-explorer",
      title: "Danau Ubur-Ubur Lenmakana",
      category: "Rare Ecological Encounter",
      image: "https://fusofyeqniyyunromgnh.supabase.co/storage/v1/object/public/pemandangan%20dan%20aktivitas/aktivitas5.jpeg",
      description: "Alami salah satu fenomena alam paling langka di bumi. Berenang di danau karst terisolasi yang dihuni oleh jutaan ubur-ubur emas yang telah berevolusi kehilangan kemampuan menyengatnya.",
      why: [
        "Satu dari sedikit danau ubur-ubur tanpa sengat di dunia",
        "Dihuni oleh dua jenis ubur-ubur ramah (Mastigias & Aurelia)",
        "Dikelilingi oleh dinding tebing hutan hujan tropis yang rimbun",
        "Sensasi berenang yang magis dan damai secara sensorik",
        "Petualangan trekking tantangan mendaki cincin bukit karst"
      ],
      activities: [
        "Trekking tebing cincin karst menuju tepi danau dalam",
        "Snorkeling santai tanpa fin bersama jutaan ubur-ubur",
        "Pengamatan keunikan adaptasi ekologi ubur-ubur",
        "Makan siang piknik santai di pesisir bebatuan"
      ],
      package: {
        name: "Ultimate Misool Explorer 5 Hari 4 Malam",
        price: "Mulai dari Rp 5.850.000 /pax"
      }
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img 
          src="https://fusofyeqniyyunromgnh.supabase.co/storage/v1/object/public/pemandangan%20dan%20aktivitas/pemandangan.jpeg" 
          alt="Destinasi Nut Tonton Homes" 
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 bg-premium-purple/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold tracking-[0.3em] uppercase mb-6 rounded-full">
              LANDSCAPE & WONDERS
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold text-white mb-6">
              Keajaiban Alam Misool
            </h1>
            <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
              Jelajahi keindahan laut, tebing karst megah, gua prasejarah, dan keunikan ekosistem purba tepat dari gerbang depan Nut Tonton Homes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Destinations List */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto space-y-20 md:space-y-32">
          {destinations.map((dest, index) => (
            <motion.div 
              key={dest.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className={index % 2 !== 0 ? 'lg:order-2' : ''}>
                <div className="relative overflow-hidden rounded-2xl group border border-gray-100 shadow-sm">
                  <img 
                    src={dest.image} 
                    alt={dest.title} 
                    referrerPolicy="no-referrer"
                    className="w-full h-[300px] md:h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8">
                    <span className="text-[10px] bg-premium-purple px-2.5 py-1 text-white font-bold tracking-widest uppercase rounded mb-2 inline-block">
                      {dest.category}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-white">{dest.title}</h2>
                  </div>
                </div>
              </div>
              
              <div className={index % 2 !== 0 ? 'lg:order-1' : ''}>
                <div className="flex items-center gap-2 text-premium-purple mb-4">
                  <span className="w-8 h-[1px] bg-premium-purple"></span>
                  <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest">{dest.category}</span>
                </div>
                <h3 className="text-2xl md:text-4xl font-serif font-bold text-text-dark mb-6">{dest.title}</h3>
                <p className="text-sm md:text-base text-text-light mb-8 leading-relaxed font-light">
                  {dest.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                  <div>
                    <h4 className="font-bold text-text-dark mb-4 flex items-center gap-2 text-sm md:text-base font-serif">
                       <CheckCircle2 size={16} className="text-premium-purple flex-shrink-0" /> Keunikan Spot
                    </h4>
                    <ul className="space-y-2 md:space-y-3">
                      {dest.why.map((item, i) => (
                        <li key={i} className="text-xs md:text-sm text-text-light flex gap-2 font-light">
                          <span className="text-premium-purple flex-shrink-0">•</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-text-dark mb-4 flex items-center gap-2 text-sm md:text-base font-serif">
                       <Star size={16} className="text-premium-purple flex-shrink-0" /> Aktivitas Pilihan
                    </h4>
                    <ul className="space-y-2 md:space-y-3">
                      {dest.activities.map((item, i) => (
                        <li key={i} className="text-xs md:text-sm text-text-light flex items-center gap-2 font-light">
                          <div className="w-1.5 h-1.5 rounded-full bg-premium-purple/30 flex-shrink-0"></div> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-10 md:mt-12 p-6 bg-zinc-50 rounded-xl border border-gray-100">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-text-light block mb-2">Paket Akomodasi Rekomendasi</span>
                  <h5 className="font-bold text-text-dark text-base md:text-lg mb-1 font-serif">{dest.package.name}</h5>
                  <p className="text-premium-purple font-bold mb-6 text-sm md:text-base">{dest.package.price}</p>
                  <Link 
                    to={`/tour/${dest.id}`}
                    className="btn-premium py-3 px-8 text-xs md:text-sm flex items-center justify-center gap-2 w-full sm:w-fit"
                  >
                    EKSPLORASI DETAIL PAKET <ChevronRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-zinc-900 to-zinc-950 border-t border-zinc-800 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-premium-purple/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
            Siap Menjelajahi Keindahan Purba Raja Ampat?
          </h2>
          <p className="text-base md:text-lg text-zinc-300 mb-12 font-light max-w-2xl mx-auto leading-relaxed">
            Hubungi penasihat wisata Nut Tonton Homes sekarang untuk perencanaan jadwal boat trip, perlengkapan sewa snorkeling/diving, serta panduan musim terbaik.
          </p>
          <a 
            href="https://wa.me/6282199327798?text=Halo%2520Nut%2520Tonton%2520Homes%2520Misool%252C%2520saya%2520ingin%2520konsultasi%2520penjelajahan%2520wisata%2520Dafalen%2520dan%2520Danau%2520Ubur-Ubur" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-premium-purple hover:opacity-90 text-white px-8 md:px-10 py-4.5 rounded-[4px] font-bold text-xs tracking-widest uppercase transition-all shadow-xl w-full sm:w-auto justify-center"
          >
            <MessageCircle size={16} fill="white" /> HUBUNGI KAMI DI WHATSAPP
          </a>
        </div>
      </section>
    </div>
  );
};
