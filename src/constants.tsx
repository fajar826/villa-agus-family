import { MapPin, Map as MapIcon, Compass } from "lucide-react";
import { ReactNode } from "react";

export interface Tour {
  id: string;
  title: string;
  location: string;
  price: string;
  rating: number;
  duration: string;
  description: string;
  image: string;
}

export interface Activity {
  id: string;
  title: string;
  price: string;
  location: string;
  icon: ReactNode;
  image: string;
  description: string;
}

export const categorizedGallery = {
  villa: [
    { title: "Kamar Utama", url: "https://kycscxrffjorfwmuogjp.supabase.co/storage/v1/object/public/galery%20villa%20agus%20family/kamar%20.jpeg", desc: "Villa Agus Familly" },
    { title: "Kamar 2", url: "https://kycscxrffjorfwmuogjp.supabase.co/storage/v1/object/public/galery%20villa%20agus%20family/kamar2.jpeg", desc: "Villa Agus Familly" }
  ],
  fasilitas: [
    { title: "Halaman Depan", url: "https://kycscxrffjorfwmuogjp.supabase.co/storage/v1/object/public/galery%20villa%20agus%20family/halaman%20depan.jpeg", desc: "Villa Agus Familly" },
    { title: "Pemandangan", url: "https://kycscxrffjorfwmuogjp.supabase.co/storage/v1/object/public/galery%20villa%20agus%20family/pemandangan.jpeg", desc: "Villa Agus Familly" }
  ],
  kamarmandi: [
    { title: "Kamar Mandi 1", url: "https://kycscxrffjorfwmuogjp.supabase.co/storage/v1/object/public/galery%20villa%20agus%20family/kamar%20mandi.jpeg", desc: "Villa Agus Familly" },
    { title: "Kamar Mandi 2", url: "https://kycscxrffjorfwmuogjp.supabase.co/storage/v1/object/public/galery%20villa%20agus%20family/kamar%20mandii.jpeg", desc: "Villa Agus Familly" }
  ],
  dapur: [
    { title: "Dapur", url: "https://kycscxrffjorfwmuogjp.supabase.co/storage/v1/object/public/galery%20villa%20agus%20family/dapur.jpeg", desc: "Villa Agus Familly" }
  ],
  video: [
    { title: "Video Halaman", url: "https://kycscxrffjorfwmuogjp.supabase.co/storage/v1/object/public/galery%20villa%20agus%20family/vidio%20halaman%20depan%20dan%20pemandangan.mp4", desc: "Villa Agus Familly" },
    { title: "Video Kamar", url: "https://kycscxrffjorfwmuogjp.supabase.co/storage/v1/object/public/galery%20villa%20agus%20family/vidio%20kamar%20dan%20pemandangan.mp4", desc: "Villa Agus Familly" }
  ]
};

export const galleryImages = [
  {
    url: "https://kycscxrffjorfwmuogjp.supabase.co/storage/v1/object/public/galery%20villa%20agus%20family/halaman%20depan.jpeg",
    title: "Halaman Depan",
    location: "Karangasem"
  },
  {
    url: "https://kycscxrffjorfwmuogjp.supabase.co/storage/v1/object/public/galery%20villa%20agus%20family/kamar%20.jpeg",
    title: "Kamar Utama",
    location: "Karangasem"
  },
  {
    url: "https://kycscxrffjorfwmuogjp.supabase.co/storage/v1/object/public/galery%20villa%20agus%20family/kamar2.jpeg",
    title: "Kamar 2",
    location: "Karangasem"
  },
  {
    url: "https://kycscxrffjorfwmuogjp.supabase.co/storage/v1/object/public/galery%20villa%20agus%20family/pemandangan.jpeg",
    title: "Pemandangan",
    location: "Karangasem"
  }
];

export const testimonials = [
  {
    name: "Tamu Keluarga",
    role: "Keluarga",
    content: "Villa Agus Familly sangat nyaman dan fasilitasnya lengkap. Sangat cocok untuk liburan keluarga di Karangasem.",
    avatar: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&q=80&w=150",
    rating: 5
  },
  {
    name: "Budi Santoso",
    role: "Wisatawan",
    content: "Keindahan alam yang luar biasa dan menenangkan! Pemandangan dari villa sangat memukau. Sangat direkomendasikan.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
    rating: 5
  },
  {
    name: "Putri Amanda",
    role: "Wisatawan",
    content: "Villanya sangat bersih, estetik, dan nyaman. Pelayanan ramah banget. Pasti bakal balik lagi ke sini!",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150",
    rating: 5
  }
];

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  image: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "waktu-terbaik-mengunjungi-misool",
    title: "Pesona Tersembunyi Karangasem: Destinasi Liburan Tenang di Bali",
    excerpt: "Temukan keindahan alam yang masih asri dan suasana pedesaan yang menenangkan di Karangasem, Bali.",
    content: `## Mengarungi Musim Terbaik di Misool, Raja Ampat

Misool adalah salah satu permata tersembunyi yang menawarkan eksotisme bawah laut dan kedamaian pulau tropis yang tiada duanya. Namun, karena lokasinya yang terpencil di timur Indonesia, memahami kapan waktu terbaik untuk berkunjung (best travel window) sangat krusial agar liburan Anda tidak terhambat ombak besar atau hujan badai.

### Musim Terbaik: Oktober hingga April (Matahari Melimpah & Laut Tenang)

Siklus musim di Raja Ampat, khususnya Misool, cenderung berbeda dengan wilayah barat Indonesia. Oktober hingga April dikenal sebagai **Golden Season**. Pada bulan-bulan ini, angin bertiup tenang, ombak laut hampir tidak ada (datar seperti cermin), dan warna air laut memancarkan gradasi biru-hijau toska yang sangat jernih.

*   **Under Water Visibility:** Kejernihan air mencapai 20-30 meter, sangat ideal untuk menyegarkan mata saat *snorkeling* tepat di depan **Nut Tonton Homes** atau melakukan penyelaman dalam (*diving*).
*   **Biota Laut Mengumpul:** Masa-masa ini adalah waktu migrasi pari manta raksasa (*Manta birostris*) dan ikan-ikan pelagis berukuran besar.

### Musim Angin Selatan: Juni hingga September (Periode Istirahat Resort)

Dari bulan **Juni hingga September**, angin bertiup kencang dari arah selatan. Ini menyebabkan ombak di sekitar penyeberangan laut Sorong ke Misool menjadi cukup tinggi dan bergejolak. 

Ketenangan tamu adalah prioritas kami. Di bulan-bulan ini, aktivitas penyeberangan boat trip biasanya dibatasi, dan suasana menjadi sangat basah. Kami merekomendasikan Anda untuk merencanakan kepanduan Anda di luar periode ini demi kenyamanan maksimal.

### Tips Tambahan untuk Wisatawan:
1.  **Pesan Tiket Jauh Hari:** Penyeberangan kapal ferry cepat dari Sorong ke Misool beroperasi terjadwal beberapa kali seminggu. Pastikan mencocokkan tanggal menginap Anda.
2.  **Hindari High Season Desember:** Liburan akhir tahun biasanya ramai dikunjungi turis. Pilih bulan **November atau Februari-Maret** jika Anda mengidamkan ketenangan pulau privat yang hening, sunyi, dan intim secara total.`,
    category: "Panduan Musim",
    author: "Nut Tonton Team",
    date: "2026-05-15",
    image: "https://kycscxrffjorfwmuogjp.supabase.co/storage/v1/object/public/galery%20villa%20agus%20family/kamar2.jpeg",
    readTime: "5 min read"
  },
  {
    id: "checklist-perlengkapan-trip-pulau-terpencil",
    title: "Tips Liburan Keluarga di Bali yang Berkesan",
    excerpt: "Berlibur bersama keluarga ke Bali membutuhkan persiapan matang. Berikut tips agar liburan berjalan lancar.",
    content: `## Menyiapkan Koper ke Villa Agus Familly
## ... (content omitted for brevity) ...`,
    category: "Tips Packing",
    author: "Admin Villa",
    date: "2026-05-18",
    image: "https://kycscxrffjorfwmuogjp.supabase.co/storage/v1/object/public/galery%20villa%20agus%20family/halaman%20depan.jpeg",
    readTime: "4 min read"
  }
];

export const activities: Activity[] = [
  {
    id: "relax-stay",
    title: "Bersantai di Villa",
    price: "Gratis untuk Tamu",
    location: "Area Villa",
    icon: <Compass size={20} />,
    image: "https://images.unsplash.com/photo-1595526114368-2323cc60af52?auto=format&fit=crop&q=80&w=800",
    description: "Nikmati ketenangan dalam kenyamanan villa kami."
  },
  {
    id: "explore-karangasem",
    title: "Wisata Karangasem",
    price: "Sesuai Destinasi",
    location: "Sekitar Villa",
    icon: <MapIcon size={20} />,
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800",
    description: "Jelajahi keindahan alam dan budaya Karangasem."
  },
  {
    id: "family-gathering",
    title: "Gathering Keluarga",
    price: "Custom",
    location: "Area Villa",
    icon: <MapPin size={20} />,
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=800",
    description: "Momen berharga bersama keluarga di lokasi yang tepat."
  }
];
