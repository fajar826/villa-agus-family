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
    name: "Budi Santoso",
    role: "Tamu Keluarga",
    content: "Villa Agus Familly luar biasa! Sangat nyaman untuk keluarga besar. Fasilitas per kamarnya lengkap dan privasi sangat terjaga selama kami menginap di sini.",
    avatar: "https://images.unsplash.com/photo-1596700877995-1772658a5da5?auto=format&fit=crop&q=80&w=150",
    rating: 5
  },
  {
    name: "Sinta Wijaya",
    role: "Wisatawan",
    content: "Tempat yang sangat menenangkan di Karangasem. Kamar luas dengan lemari pakaian yang pas, AC dingin, dan pemandangan luar biasa dari villa. Pasti kembali lagi!",
    avatar: "https://images.unsplash.com/photo-1544348817-5f2cf14b88c8?auto=format&fit=crop&q=80&w=150",
    rating: 5
  },
  {
    name: "Andi Pratama",
    role: "Wisatawan",
    content: "Villanya sangat estetik dan bersih. Fasilitas per kamar (bed, kamar mandi, lemari) sangat memadai. Pelayanan ramahan dan lokasi tenang. Sangat recomended!",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150",
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
    id: "pesona-karangasem-bali",
    title: "Keindahan Tersembunyi Karangasem: Surga Tenang di Bali Timur",
    excerpt: "Temukan keindahan alam yang masih asri dan suasana pedesaan yang menenangkan di Karangasem, Bali.",
    content: `## Menikmati Karangasem: Permata Tersembunyi di Bali Timur

Karangasem adalah wilayah yang menawarkan pengalaman berbeda di Bali. Jauh dari hiruk-pikuk pusat pariwisata yang ramai, Karangasem menyimpan ketenangan dan keaslian suasana pedesaan yang sangat menenangkan.

### Mengapa Karangasem Layak Dikunjungi?

Karangasem memiliki perpaduan antara pesisir pantai dengan latar belakang Gunung Agung yang megah. Pengunjung dapat menikmati hamparan sawah yang hijau, desa-desa adat yang masih terjaga keasliannya, dan pantai-pantai dengan pasir hitam khas vulkanik yang unik.

*   **Wisata Budaya:** Anda bisa mengunjungi Pura Besakih, pura terbesar di Bali yang terletak di lereng Gunung Agung.
*   **Keindahan Pantai:** Pantai Amed dan Candidasa menawarkan suasana yang sangat tenang dan pemandangan laut yang spektakuler, sempurna untuk bersantai.
*   **Suasana Pedesaan:** Menginap di Villa Agus Familly memberikan akses untuk merasakan langsung keramahan warga lokal dan keindahan alam pedesaan yang damai.

### Tips Menikmati Karangasem

1.  **Transportasi:** Kami menyarankan Anda untuk menyewa kendaraan pribadi agar lebih fleksibel menjelajahi berbagai spot wisata tersembunyi di Karangasem.
2.  **Waktu Terbaik:** Kunjungilah di luar musim hujan untuk mendapatkan pemandangan yang maksimal dan perjalanan yang lebih nyaman.
3.  **Persiapan:** Pastikan membawa kamera untuk mengabadikan momen-momen indah, serta pakaian yang sesuai untuk mengunjungi pura.`,
    category: "Panduan Wisata",
    author: "Admin Villa Agus Familly",
    date: "2026-06-11",
    image: "https://www.harapanrakyat.com/wp-content/uploads/2022/09/Kabupaten-Karangasem.jpg",
    readTime: "5 min read"
  },
  {
    id: "tips-liburan-keluarga-bali",
    title: "Tips Liburan Keluarga di Bali yang Berkesan",
    excerpt: "Berlibur bersama keluarga ke Bali membutuhkan persiapan matang. Berikut tips agar liburan berjalan lancar.",
    content: `## Merencanakan Liburan Keluarga yang Menyenangkan di Bali

Berlibur ke Bali bersama keluarga besar adalah momen yang sangat dinantikan. Agar liburan Anda di Villa Agus Familly menyenangkan dan bebas stres, persiapan matang sangat diperlukan.

### Tips Utama:

1.  **Pilih Akomodasi yang Tepat:** Pastikan villa yang dipilih memiliki fasilitas lengkap seperti dapur pribadi dan ruang berkumpul yang luas, seperti di Villa Agus Familly.
2.  **Susun Itinerary yang Fleksibel:** Jangan terlalu padat dalam menyusun jadwal wisata. Berikan waktu untuk anak-anak atau anggota keluarga lain untuk beristirahat.
3.  **Bawa Perlengkapan Secukupnya:** Fokuslah pada kenyamanan. Bawa obat-obatan pribadi, sunblock, dan baju ganti yang cukup.
4.  **Cicipi Kuliner Lokal:** Jangan lewatkan untuk mencoba makanan khas setempat, tapi tetap perhatikan kebutuhan konsumsi keluarga.

Liburan di Karangasem memberikan suasana yang lebih intim dan privat. Nikmati setiap momen kebersamaan Anda bersama orang-orang tercinta.`,
    category: "Tips Keluarga",
    author: "Admin Villa Agus Familly",
    date: "2026-06-11",
    image: "https://bankraya.co.id/uploads/insights/jO3TRUmMuBAuyilKHgu9Ovjfs3nFoubWiSSjB3Pn.jpg",
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
