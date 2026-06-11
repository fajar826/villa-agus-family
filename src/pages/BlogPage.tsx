import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { blogPosts } from "../constants";
import { Calendar, Clock, ArrowRight, MessageCircle } from "lucide-react";

const BlogPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-40 pb-28 md:h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/55 z-10"></div>
        <img 
          src="https://fusofyeqniyyunromgnh.supabase.co/storage/v1/object/public/pemandangan%20dan%20aktivitas/pemandangan.jpeg" 
          alt="Blog Header Background" 
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-premium-purple font-bold text-xs uppercase tracking-[0.3em] mb-4 block">WISDOMS & LOCAL TIPS</span>
            <h1 className="text-3xl md:text-6xl font-serif font-bold text-white mb-6">Blog & Berita Bali</h1>
            <p className="text-base md:text-lg text-zinc-200 max-w-2xl mx-auto font-light leading-relaxed">
              Panduan perjalanan komprehensif, tips liburan, dan inspirasi liburan keluarga dari keindahan Bali.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(109,40,217,0.08)] transition-all duration-500 group border border-gray-100"
              >
                <Link to={`/blog/${post.id}`}>
                  <div className="relative aspect-[16/9] overflow-hidden bg-zinc-100">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <div className="absolute top-6 left-6">
                      <span className="px-4 py-1.5 bg-premium-purple text-white rounded text-[10px] font-bold uppercase tracking-[0.2em] shadow-lg">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8 md:p-10">
                    <div className="flex items-center gap-5 text-[10px] text-text-light font-bold uppercase tracking-widest mb-5">
                      <div className="flex items-center gap-2">
                        <Calendar size={14} className="text-premium-purple" />
                        {new Date(post.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
                      </div>
                      <div className="w-1 h-1 bg-gray-200 rounded-full"></div>
                      <div className="flex items-center gap-2">
                        <Clock size={14} className="text-premium-purple" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-text-dark mb-4 group-hover:text-premium-purple transition-colors line-clamp-2 leading-tight font-serif">
                      {post.title}
                    </h3>
                    
                    <p className="text-text-light text-sm line-clamp-3 mb-8 leading-relaxed font-light">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center text-premium-purple font-bold text-[11px] uppercase tracking-[0.2em] gap-3 group/btn">
                      Lanjutkan Membaca
                      <div className="w-10 h-[1px] bg-premium-purple/30 group-hover/btn:w-16 transition-all duration-300"></div>
                      <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="py-24 bg-gradient-to-br from-zinc-900 to-zinc-950 border-t border-zinc-900 overflow-hidden relative text-white text-center">
        <div className="absolute top-0 right-0 w-64 h-64 bg-premium-purple/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Butuh Penjelasan & Rencana Lebih Rinci?</h2>
          <p className="text-zinc-300 mb-10 max-w-xl mx-auto font-light text-sm leading-relaxed">
            Ikuti terus catatan pemutakhiran jadwal penyeberangan kapal ferry Sorong menuju Misool Timur, ketersediaan penginapan, serta promo rombongan eksklusif di WhatsApp.
          </p>
          <a 
            href="https://wa.me/6282199327798?text=Halo%2520Nut%2520Tonton%2520Homes%2520Misool%252C%2520saya%2520tertarik%2520mendapatkan%2520informasi%2520terbaru%2520seputar%2520cuaca%2520dan%2520trip%2520kapal" 
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-10 py-4.5 bg-premium-purple hover:opacity-90 text-white font-bold text-xs uppercase tracking-widest rounded shadow-2xl transition-transform"
          >
            <MessageCircle size={16} fill="white" /> HUBUNGI MARKETING RESORT VIA WA
          </a>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
