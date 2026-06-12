import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Clock, 
  Calendar, 
  Compass, 
  Users, 
  Send, 
  ChevronDown, 
  CheckCircle2, 
  Car, 
  Instagram, 
  Check 
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

// Localized translation blocks for perfect integration with the language context
const localT: Record<string, {
  heroTitle: string;
  heroSub: string;
  cardWaTitle: string;
  cardWaDesc: string;
  cardEmailTitle: string;
  cardEmailDesc: string;
  cardLocTitle: string;
  cardLocDesc: string;
  formTitle: string;
  formSub: string;
  formName: string;
  formGuests: string;
  formCheckIn: string;
  formCheckOut: string;
  formMessage: string;
  formSubmit: string;
  formSuccess: string;
  faqTitle: string;
  faqSub: string;
  mapTitle: string;
  mapSub: string;
  directionTitle: string;
  reachUsTitle: string;
}> = {
  ID: {
    heroTitle: "Hubungi Villa Agus Family",
    heroSub: "Pintu gerbang menuju liburan keluarga privat yang tenang di bawah kaki megah Karangasem, Bali Timur.",
    cardWaTitle: "WhatsApp Admin",
    cardWaDesc: "Hubungi tim pelayanan kami secara instan untuk respon cepat dan penawaran khusus harian/bulanan.",
    cardEmailTitle: "Hubungi via Email",
    cardEmailDesc: "Untuk permohonan kerjasama, dokumen pemesanan kelompok, atau pertanyaan jangka panjang.",
    cardLocTitle: "Alamat Lengkap",
    cardLocDesc: "Br. Dinas Kangkaang, Desa Kerthamandala, Kecamatan Abang, Kabupaten Karangasem, Bali.",
    formTitle: "Rencanakan Kunjungan Anda",
    formSub: "Gunakan formulir pintar ini untuk mengirim rincian liburan impian Anda langsung ke asisten WhatsApp kami.",
    formName: "Nama Lengkap",
    formGuests: "Jumlah Tamu",
    formCheckIn: "Tanggal Check-In",
    formCheckOut: "Tanggal Check-Out",
    formMessage: "Pesan atau Pertanyaan Khusus",
    formSubmit: "Kirim Pesan ke WhatsApp",
    formSuccess: "Formulir berhasil diproses! Mengarahkan Anda ke WhatsApp...",
    faqTitle: "Pertanyaan yang Sering Diajukan",
    faqSub: "Temukan jawaban cepat atas pertanyaan umum seputar kenyamanan, kapasitas, dan fasilitas kami.",
    mapTitle: "Peta Lokasi Presisi",
    mapSub: "Kami terletak di area tenang Karangasem yang asri, menawarkan perpaduan udara sejuk dan suasana aseli Bali.",
    directionTitle: "Panduan Rute Perjalanan",
    reachUsTitle: "Cara Menjangkau Kami"
  },
  EN: {
    heroTitle: "Contact Villa Agus Family",
    heroSub: "Your gateway to a peaceful and private family getaway in pristine East Bali, under the gaze of Mount Agung.",
    cardWaTitle: "WhatsApp Admin",
    cardWaDesc: "Contact our service team instantly for quick responses and special customized daily or monthly rates.",
    cardEmailTitle: "Inquire via Email",
    cardEmailDesc: "For trade partner collaborations, corporate retreats, long-term stays, or formal inquiries.",
    cardLocTitle: "Exact Address",
    cardLocDesc: "Br. Dinas Kangkaang, Kerthamandala Village, Abang District, Karangasem Regency, Bali.",
    formTitle: "Reserve Your Peaceful Holidays",
    formSub: "Fill out this smart form to easily dispatch your preferred booking details directly to our WhatsApp helpdesk.",
    formName: "Full Name",
    formGuests: "Number of Guests",
    formCheckIn: "Check-In Date",
    formCheckOut: "Check-Out Date",
    formMessage: "Special Messages or Inquiries",
    formSubmit: "Send Message to WhatsApp",
    formSuccess: "Inquiry prepared successfully! Redirecting you to WhatsApp...",
    faqTitle: "Frequently Asked Questions",
    faqSub: "Find quick answers to common queries regarding our villa capacities, kitchen, and local transport.",
    mapTitle: "Precision Location Map",
    mapSub: "Nestled in a peaceful village environment in Karangasem, far away from urban pollution and noise.",
    directionTitle: "Travel Directions Guide",
    reachUsTitle: "How to Search & Stand Here"
  },
  FR: {
    heroTitle: "Contactez Villa Agus Family",
    heroSub: "Votre passerelle vers une escapade familiale paisible et privée dans l'Est de Bali préservé.",
    cardWaTitle: "WhatsApp Concierge",
    cardWaDesc: "Contactez instantanément notre équipe pour des réponses rapides et des tarifs journaliers ou mensuels spéciaux.",
    cardEmailTitle: "Demande par Email",
    cardEmailDesc: "Pour les partenariats, les séjours de longue durée ou les demandes spécifiques.",
    cardLocTitle: "Adresse Exacte",
    cardLocDesc: "Br. Dinas Kangkaang, Village de Kerthamandala, District d'Abang, Région de Karangasem, Bali.",
    formTitle: "Préparez Votre Séjour",
    formSub: "Remplissez ce formulaire intelligent pour envoyer vos détails de séjour directement à notre bureau WhatsApp.",
    formName: "Nom Complet",
    formGuests: "Nombre de Personnes",
    formCheckIn: "Date d'Arrivée",
    formCheckOut: "Date de Départ",
    formMessage: "Demande Spéciale ou Questions",
    formSubmit: "Envoyer via WhatsApp",
    formSuccess: "Demande prête! Redirection vers WhatsApp en cours...",
    faqTitle: "Questions Fréquentes",
    faqSub: "Obtenez des réponses rapides sur le confort, la capacité d'accueil et nos équipements.",
    mapTitle: "Carte de Localisation",
    mapSub: "Situé dans la verdure sereine de Karangasem, offrant un air pur et l'authenticité de la culture balinaise.",
    directionTitle: "Guide d'Itinéraire",
    reachUsTitle: "Comment se Rendre Chez Nous"
  },
  DE: {
    heroTitle: "Kontakt Villa Agus Family",
    heroSub: "Ihr Tor zu einem ruhigen, privaten Familienurlaub im unberührten Osten von Bali unter dem Berg Agung.",
    cardWaTitle: "WhatsApp Service",
    cardWaDesc: "Kontaktieren Sie unsere Rezeption direkt für eine schelle Rückmeldung und ermäßigte Monatsangebote.",
    cardEmailTitle: "Anfrage per E-Mail",
    cardEmailDesc: "Für Kooperationen, langfristige Buchungen oder spezielle Gruppenanfragen.",
    cardLocTitle: "Genaue Adresse",
    cardLocDesc: "Br. Dinas Kangkaang, Dorf Kerthamandala, Bezirk Abang, Regierungsbezirk Karangasem, Bali.",
    formTitle: "Planen Sie Ihren Traumurlaub",
    formSub: "Tragen Sie Ihre Reisedaten ein, um eine automatische Buchungsanfrage direkt an unseren WhatsApp-Hilfebereich zu senden.",
    formName: "Vollständiger Name",
    formGuests: "Anzahl der Gäste",
    formCheckIn: "Anreisedatum",
    formCheckOut: "Abreisedatum",
    formMessage: "Spezielle Wünsche oder Fragen",
    formSubmit: "Anfrage via WhatsApp absenden",
    formSuccess: "Anfrage erstellt! Sie werden nun zu WhatsApp weitergeleitet...",
    faqTitle: "Häufig Gestellte Fragen",
    faqSub: "Suchen Sie schnelle Antworten auf Fragen zur Lage, Ausstattung und Kapazität unserer Ferienvilla.",
    mapTitle: "Präzise Standortkarte",
    mapSub: "Umgeben von purer Natur und ursprünglichen Dörfern in Karangasem, abseits von Hektik und Massentourismus.",
    directionTitle: "Anfahrtsbeschreibung",
    reachUsTitle: "Anreise & Routenübersicht"
  }
};

const localFAQs = {
  ID: [
    {
      q: "Berapa kapasitas maksimal kamar dan seluruh bangunan villa?",
      a: "Villa Agus Family dirancang khusus untuk kenyamanan keluarga dengan kapasitas optimal hingga 6 orang tamu. Kami memiliki 3 kamar tidur yang nyaman dengan tempat tidur berkualitas, area almari, serta 3 kamar mandi terpisah untuk privasi penuh Anda."
    },
    {
      q: "Apakah disediakan fasilitas memasak atau dapur pribadi?",
      a: "Ya! Kamar villa kami didukung dengan fasilitas dapur lengkap dengan peralatan memasak standar, kompor gas, kulkas, peralatan makan, serta dispenser air mineral gratis selama Anda menginap, sehingga Anda dapat menyiapkan hidangan favorit keluarga kapan saja."
    },
    {
      q: "Dimana lokasi tepatnya dan apakah aksesnya mudah untuk kendaraan?",
      a: "Kami berlokasi di Br. Dinas Kangkaang, Desa Kerthamandala, Kecamatan Abang, Kabupaten Karangasem, Bali. Lokasi villa kami memiliki akses jalan yang mulus beraspal, dilengkapi dengan halaman parkir yang sangat luas, aman, dan memadai untuk mobil tipe besar atau beberapa motor sekaligus secara privat."
    },
    {
      q: "Seberapa dekat lokasi Villa Agus Family dengan tempat wisata Karangasem?",
      a: "Lokasi kami sangat strategis dan dekat dengan ikon-ikon pariwisata Karangasem. Hanya berjarak sekitar 10-15 menit berkendara menuju istana air Tirta Gangga, 25-30 menit menuju Pantai Amed yang terkenal akan keindahan bawah lautnya, serta 30-40 menit berkendara menuju Pura Lempuyang (Heaven's Gate)."
    },
    {
      q: "Apakah tersedia koneksi internet untuk bekerja (Work from Villa)?",
      a: "Tentu saja. Kami menyediakan Free High-Speed WiFi berkualitas stabil di seluruh area villa, sehingga Anda tetap dapat terhubung secara lancar untuk pekerjaan jarak jauh atau sekadar berbagi momen liburan bersama rekan."
    },
    {
      q: "Bagaimana sistem pembayaran dan cara mengecek ketersediaan?",
      a: "Anda cukup mengecek ketersediaan tanggal check-in melalui tombol cek kami ataupun formulir di atas, yang akan langsung menyambungkan Anda dengan admin WhatsApp kami. Setelah ketersediaan dikonfirmasi, Anda dapat melakukan pemesanan resmi dengan metode pembayaran deposit transfer bank yang aman."
    }
  ],
  EN: [
    {
      q: "What is the maximum occupancy of the villa?",
      a: "Villa Agus Family is meticulously designed for family comfort, accommodating up to 6 guests layout-wise. The property boasts 3 spacious private bedrooms with comfortable beds, dedicated wardrobes, and 3 bathrooms for maximum resident privacy."
    },
    {
      q: "Is there a fully functional kitchen for cooking?",
      a: "Yes! Guest comfort is our priority, which is why a kitchen complete with high-quality utensils, a gas stove, single-door refrigerator, dinnerware, and complimentary mineral water dispensers is fully accessible for your family culinary creations."
    },
    {
      q: "Where is the property exactly and is there parking space?",
      a: "We are located at Br. Dinas Kangkaang, Desa Kerthamandala, Abang, Karangasem, Bali. The road is asphalted for smooth driving. Upon arrival, you'll find a massive private parking courtyard suited safely for SUVs, family vans, or multiple motorbikes."
    },
    {
      q: "How close is the villa to major Karangasem landmarks?",
      a: "Our strategic spot grants fast access: only 10-15 minutes driving to Tirta Gangga Water Palace, 25-30 minutes to Amed Beach (popular for coral snorkeling and sunsets), and 30-40 minutes to Lempuyang Temple (Gate of Heaven)."
    },
    {
      q: "Is the WiFi connection robust enough for remote working?",
      a: "Absolutely. We offer high-performance, complimentary WiFi accessible in both the indoor bedroom suites and outdoor areas, promising smooth streaming and stable Zoom/Skype connections if you are working remotely."
    },
    {
      q: "How do I secure my booking and check for dates?",
      a: "Simply input your expected dates in our smart contact form or tap any WhatsApp button. Our friendly reservations administrator will respond in real-time, helping you secure dates via trusted bank transfer deposit options."
    }
  ],
  FR: [
    {
      q: "Quelle is la capacité maximale de la villa?",
      a: "La Villa Agus Family est conçue pour accueillir confortablement jusqu'à 6 personnes. Elle comprend 3 chambres douillettes avec literie de qualité, placards, ainsi que 3 salles de bain pour une intimité totale."
    },
    {
      q: "Y a-t-il une cuisine équipée disponible?",
      a: "Tout à fait! La villa dispose d'une cuisine entièrement équipée avec plaques de cuisson, ustensiles, réfrigérateur, vaisselle complète et de l'eau minérale offerte."
    },
    {
      q: "Où se situe précisément la villa et le parking est-il facile?",
      a: "Nous sommes situés à Br. Dinas Kangkaang, village de Kerthamandala, Abang, Karangasem, Bali. La route est goudronnée et en excellent état, et nous offrons un très grand parking gratuit pour voitures et motos."
    },
    {
      q: "La villa est-elle proche des attractions touristiques?",
      a: "Idéalement située: à seulement 10-15 minutes de route du palais d'eau Tirta Gangga, 25-30 minutes de la plage de snorkeling d'Amed, et 30-40 minutes du temple de Lempuyang."
    }
  ],
  DE: [
    {
      q: "Wie viele Personen können in der Villa übernachten?",
      a: "Die Villa Agus Family ist optimal auf Familien ausgerichtet und bietet Platz für bis zu 6 Gäste. Es gibt 3 separate, einladende Schlafzimmer mit hochwertigen Matratzen und 3 eigene Badezimmer für vollkommene Privatsphäre."
    },
    {
      q: "Gibt es Kochmöglichkeiten in der Unterkunft?",
      a: "Ja, Ihnen steht eine voll ausgestattete Küche mit Herd, Geschirr, Kühlschrank und unbegrenztem Trinkwasser zur Verfügung, damit Sie sich flexibel selbst versorgen können."
    },
    {
      q: "Wie ist die Zufahrt und gibt es sichere Stellplätze?",
      a: "Die Villa liegt gut erreichbar an einer asphaltierten Straße in Br. Dinas Kangkaang, Kerthamandala, Abang, Karangasem. Wir bieten einen riesigen, abgeschlossenen Innenhof als Parkplatz für PKWs und Motorräder."
    },
    {
      q: "Wie lange fährt man zu den Sehenswürdigkeiten in Karangasem?",
      a: "Die Entfernungen sind kurz: Tirta Gangga Wasserpalast ist 10-15 Autominuten entfernt, Amed Beach erreichen Sie in ca. 25-30 Minuten, und der berühmte Lempuyang-Tempel liegt etwa 30-40 Minuten entfernt."
    }
  ]
};

const guideDistances = [
  { target: "Tirta Gangga Water Palace", time: "10-15 Mins", distance: "6.5 km", desc: "Instana Air peninggalan Kerajaan Karangasem" },
  { target: "Amed Beach & Snorkeling Spots", time: "25-30 Mins", distance: "18 km", desc: "Pantai berpasir hitam dengan terumbu karang indah" },
  { target: "Lempuyang Temple (Heavens Gate)", time: "30-40 Mins", distance: "14 km", desc: "Pura ikonik dengan latar foto Gunung Agung" },
  { target: "Taman Ujung Sukasada", time: "20-25 Mins", distance: "13 km", desc: "Taman peristirahatan kerajaan di pinggir pantai" },
  { target: "Ngurah Rai International Airport", time: "2.5 Hours", distance: "85 km", desc: "Akses berkendara lancar lewat Bypass Sanur" }
];

export const ContactPage = () => {
  const { language } = useLanguage();
  const currentLang = (language || "ID") as "ID" | "EN" | "FR" | "DE";
  const text = localT[currentLang] || localT["ID"];
  const faqList = localFAQs[currentLang] || localFAQs["ID"];

  // Form states
  const [formData, setFormData] = useState({
    name: "",
    guests: "2",
    checkIn: "",
    checkOut: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // FAQ Accordion State
  const [openFAQIdx, setOpenFAQIdx] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenFAQIdx(openFAQIdx === index ? null : index);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock preparation state
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);

      // WhatsApp format dispatching
      const checkInStr = formData.checkIn ? `Tanggal Check-In: ${formData.checkIn}` : "";
      const checkOutStr = formData.checkOut ? `Tanggal Check-Out: ${formData.checkOut}` : "";
      const waText = `Halo Villa Agus Family! Saya ${formData.name} ingin menanyakan ketersediaan reservasi.

Detail Rencana:*
- Jumlah Tamu: ${formData.guests} Orang
- ${checkInStr}
- ${checkOutStr}
- Pesan Tambahan: ${formData.message || "-"}

Mohon dicek apakah tanggal tersebut masih tersedia. Terima kasih!`;

      const encodedText = encodeURIComponent(waText);
      const waUrl = `https://wa.me/6285738285726?text=${encodedText}`;

      // Open in a new tab
      window.open(waUrl, "_blank");

      // Reset success banner after some time
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1200);
  };

  return (
    <div id="contact-container" className="pt-24 bg-zinc-50 min-h-screen text-zinc-800 selection:bg-emerald-600 selection:text-white pb-10">
      {/* 1. HERO SECTION */}
      <section className="relative py-28 text-center text-white overflow-hidden bg-zinc-950">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://kycscxrffjorfwmuogjp.supabase.co/storage/v1/object/public/galery%20villa%20agus%20family/pemandangan.jpeg" 
            alt="Villa Agus Family Scenic View" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-35 filter blur-[1px] brightness-[0.6]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-50 via-transparent to-black/50 z-10" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 z-20">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full bg-emerald-600/90 text-white font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] font-medium mb-6 shadow-sm shadow-emerald-600/20"
          >
            Villa Agus Family Bali
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif tracking-tight mb-6 text-white"
          >
            {text.heroTitle}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-lg text-zinc-200 font-sans leading-relaxed tracking-wide max-w-2xl mx-auto"
          >
            {text.heroSub}
          </motion.p>
        </div>
      </section>

      {/* 2. BENTO CONTACT INFO & FORM */}
      <section className="max-w-7xl mx-auto px-6 py-16 -mt-10 relative z-30">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Quick Info Grid - Left Column */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* WhatsApp Premium Card */}
            <motion.div 
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="p-6 sm:p-8 bg-white rounded-2xl shadow-md shadow-zinc-200/50 border border-zinc-100 flex items-start gap-5 group"
            >
              <div className="p-4 rounded-xl bg-emerald-50 text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-colors duration-300 shadow-sm flex-shrink-0">
                <MessageCircle size={28} className="animate-pulse" />
              </div>
              <div className="space-y-2">
                <h3 className="font-bold font-sans text-lg text-zinc-900 flex items-center gap-1.5">
                  {text.cardWaTitle}
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                </h3>
                <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed font-sans font-light">
                  {text.cardWaDesc}
                </p>
                <div className="pt-2 font-mono text-base font-bold text-zinc-800">
                  <a 
                    href="https://wa.me/6285738285726?text=Halo%20Villa%20Agus%20Family" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="hover:text-emerald-600 transition-colors inline-flex items-center gap-2 border-b border-zinc-200 pb-0.5 hover:border-emerald-600 cursor-pointer"
                  >
                    +62 857-3828-5726
                  </a>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] sm:text-xs text-zinc-400 font-sans mt-2">
                  <Clock size={12} />
                  <span>Respon Cepat: 07.00 - 22.00 (UTC+8)</span>
                </div>
              </div>
            </motion.div>

            {/* Location card */}
            <motion.div 
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="p-6 sm:p-8 bg-white rounded-2xl shadow-md border border-zinc-100/80 flex items-start gap-5 group"
            >
              <div className="p-4 rounded-xl bg-orange-50 text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300 shadow-sm flex-shrink-0">
                <MapPin size={28} />
              </div>
              <div className="space-y-2">
                <h3 className="font-bold font-sans text-lg text-zinc-900">{text.cardLocTitle}</h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-sans font-medium">
                  {text.cardLocDesc}
                </p>
                <div className="pt-1.5 flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-zinc-100 rounded text-[10px] font-bold text-zinc-500 tracking-wider uppercase">Karangasem</span>
                  <span className="px-2 py-1 bg-zinc-100 rounded text-[10px] font-bold text-zinc-500 tracking-wider uppercase">Bali, Indonesia</span>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Contact Inquiry Form Card - Right Column */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-6 sm:p-10 shadow-lg shadow-zinc-200 border border-zinc-100 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-[6px] bg-emerald-600" />
              
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-2">
                  <Compass size={18} className="text-emerald-600 animate-spin" style={{ animationDuration: "12s" }} />
                  <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">Inquiry Desk</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold font-serif text-zinc-900">{text.formTitle}</h2>
                <p className="text-xs sm:text-sm text-zinc-500 mt-2 font-sans font-light leading-relaxed">
                  {text.formSub}
                </p>
              </div>

              {/* Feedback Success Notification */}
              <AnimatePresence>
                {submitSuccess && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mb-6 p-4 bg-emerald-50 text-emerald-800 rounded-xl border border-emerald-100 flex items-center gap-3"
                  >
                    <CheckCircle2 className="text-emerald-600 shrink-0" size={20} />
                    <span className="text-xs sm:text-sm font-medium">{text.formSuccess}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-5">
                  {/* Full Name */}
                  <div className="sm:col-span-8">
                    <label className="block text-xs uppercase font-bold tracking-widest text-zinc-500 mb-2">{text.formName}</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      placeholder="Masukkan nama Anda"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-zinc-50 hover:bg-zinc-100/50 focus:bg-white border border-zinc-200 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none rounded-xl text-sm font-sans transition-all duration-200"
                    />
                  </div>

                  {/* Guests Selector */}
                  <div className="sm:col-span-4">
                    <label className="block text-xs uppercase font-bold tracking-widest text-zinc-500 mb-2">{text.formGuests}</label>
                    <div className="relative">
                      <select 
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 focus:border-emerald-600 outline-none rounded-xl text-sm font-sans appearance-none transition-all cursor-pointer"
                      >
                        <option value="1">1 Orang</option>
                        <option value="2">2 Orang</option>
                        <option value="3">3 Orang</option>
                        <option value="4">4 Orang</option>
                        <option value="5">5 Orang</option>
                        <option value="6">6 Orang (Maksimal)</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-zinc-400">
                        <ChevronDown size={14} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Check-In Date */}
                  <div>
                    <label className="block text-xs uppercase font-bold tracking-widest text-zinc-500 mb-2">{text.formCheckIn}</label>
                    <div className="relative">
                      <input 
                        type="date" 
                        name="checkIn"
                        value={formData.checkIn}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 focus:border-emerald-600 outline-none rounded-xl text-sm font-sans transition-all cursor-pointer"
                      />
                    </div>
                  </div>

                  {/* Check-Out Date */}
                  <div>
                    <label className="block text-xs uppercase font-bold tracking-widest text-zinc-500 mb-2">{text.formCheckOut}</label>
                    <div className="relative">
                      <input 
                        type="date" 
                        name="checkOut"
                        value={formData.checkOut}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 focus:border-emerald-600 outline-none rounded-xl text-sm font-sans transition-all cursor-pointer"
                      />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs uppercase font-bold tracking-widest text-zinc-500 mb-2">{text.formMessage}</label>
                  <textarea 
                    name="message"
                    rows={4}
                    placeholder="Halo, saya ingin menanyakan..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-zinc-50 hover:bg-zinc-100/50 focus:bg-white border border-zinc-200 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none rounded-xl text-sm font-sans transition-all duration-200 resize-none"
                  />
                </div>

                {/* Submit button */}
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-[#25D366] hover:bg-[#1ebd5d] text-white py-4 px-6 rounded-xl text-sm sm:text-base font-bold font-sans uppercase tracking-wider shadow-lg shadow-emerald-200 hover:shadow-emerald-300 transition-all active:scale-[0.98] duration-300 flex items-center justify-center gap-2.5 border-none cursor-pointer"
                >
                  <MessageCircle size={18} fill="white" />
                  <span>{isSubmitting ? "Processing..." : text.formSubmit}</span>
                  <Send size={15} />
                </button>
              </form>
            </motion.div>
          </div>

        </div>
      </section>

      {/* 3. INTERACTIVE FAQ SECTION */}
      <section className="py-20 bg-white border-t border-b border-zinc-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-bold text-xs uppercase tracking-widest mb-3 block">Villa Agus Family FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-zinc-900">{text.faqTitle}</h2>
            <p className="text-sm sm:text-base text-zinc-500 mt-3 font-sans max-w-lg mx-auto">
              {text.faqSub}
            </p>
          </div>

          <div className="space-y-4">
            {faqList.map((faq, i) => {
              const isOpen = openFAQIdx === i;
              return (
                <div 
                  key={i} 
                  className={`bg-zinc-50 rounded-2xl border transition-all duration-300 ${
                    isOpen ? "border-emerald-600/30 bg-emerald-50/5" : "border-zinc-200/80 hover:border-zinc-300"
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(i)}
                    className="w-full px-6 py-5 text-left flex justify-between items-center gap-4 bg-transparent border-none outline-none cursor-pointer"
                  >
                    <span className="font-bold text-zinc-900 text-sm sm:text-base font-sans pr-2">
                      {faq.q}
                    </span>
                    <ChevronDown 
                      size={18} 
                      className={`text-zinc-400 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-emerald-600" : ""}`} 
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 text-sm text-zinc-600 leading-relaxed font-sans font-light border-t border-zinc-100 pt-4">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. MAPS & ROUTE DIRECTIONS */}
      <section className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Guide & Directions - Left */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-emerald-600 font-bold text-xs uppercase tracking-widest mb-3 block">{text.directionTitle}</span>
                <h2 className="text-3xl font-bold font-serif text-zinc-900 leading-tight">{text.reachUsTitle}</h2>
                <p className="text-sm sm:text-base text-zinc-400 mt-2 font-sans font-light">
                  {text.mapSub}
                </p>
              </div>

              {/* Distance cards list */}
              <div className="space-y-4">
                {guideDistances.map((dist, idx) => (
                  <div key={idx} className="bg-white p-4.5 rounded-xl border border-zinc-100 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
                    <div className="p-2 rounded-lg bg-zinc-50 text-emerald-600 shrink-0">
                      {dist.time.includes("Hours") ? <Car size={18} /> : <Compass size={18} />}
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h4 className="font-bold text-sm text-zinc-900">{dist.target}</h4>
                        <span className="px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 text-[10px] font-bold shrink-0">{dist.time} ({dist.distance})</span>
                      </div>
                      <p className="text-xs text-zinc-400 font-sans font-light">{dist.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Embedded Google Maps - Right */}
            <div className="lg:col-span-7">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-orange-500 shrink-0" />
                  <span className="text-xs font-bold text-zinc-500 font-sans">Abang, Karangasem, Bali - Bali Timur</span>
                </div>
                
                <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg shadow-zinc-200 border border-zinc-200 bg-zinc-100 relative group">
                  {/* Google Map iframe targeting Abang, Karangasem */}
                  <iframe 
                    title="Villa Agus Family Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15783.170668471138!2d115.58981454479532!3d-8.32321453472097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd206cc4c9878ad%3A0x2424cf38914c6799!2sKerthamandala%2C%20Abang%2C%20Karangasem%20Regency%2C%20Bali!5e0!3m2!1sen!2sid!4v1718195820412!5m2!1sen!2sid"
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true}
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 w-full h-full"
                  />
                  
                  {/* Quick coordinates panel */}
                  <div className="absolute bottom-4 left-4 right-4 bg-zinc-900/95 text-white p-3.5 rounded-xl flex items-center justify-between text-xs backdrop-blur-sm shadow-xl pointer-events-none group-hover:scale-98 transition-transform z-10 duration-300">
                    <div>
                      <p className="font-bold font-sans">Villa Agus Family Coordinates</p>
                      <p className="text-zinc-400 font-mono text-[10px] mt-0.5">8.3232° S, 115.5898° E</p>
                    </div>
                    <span className="px-2 py-1 bg-emerald-600/90 text-white rounded font-bold uppercase tracking-wider text-[9px]">Live Map</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
