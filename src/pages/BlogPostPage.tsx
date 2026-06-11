import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import ReactMarkdown from "react-markdown";
import { blogPosts } from "../constants";
import { Calendar, Clock, User, ArrowLeft, Share2, MessageCircle } from "lucide-react";
import { useEffect } from "react";

const BlogPostPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!post && id) {
      navigate("/blog");
    }
  }, [post, id, navigate]);

  if (!post) return null;

  return (
    <div className="bg-white">
      {/* Article Header */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-end pt-32 pb-12">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10"></div>
        <img 
          src={post.image} 
          alt={post.title} 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="max-w-4xl mx-auto px-6 pb-12 relative z-20 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="px-4 py-1 bg-premium-purple text-white rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 inline-block">
              {post.category}
            </span>
            <h1 className="text-2xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-white/80 text-xs md:text-sm">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-premium-purple/20 flex items-center justify-center border border-white/20">
                  <User size={14} className="text-white" />
                </div>
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-premium-purple" />
                <span>{new Date(post.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-premium-purple" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar / Tools */}
            <aside className="lg:w-16 flex flex-row lg:flex-col gap-4 order-2 lg:order-1 justify-center lg:justify-start">
              <button title="Share" className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-premium-purple hover:text-white transition-all">
                <Share2 size={20} />
              </button>
              <a 
                href={`https://wa.me/6282199327798?text=Halo%20Nut%20Tonton%20Homes%20Misool,%20saya%20tertarik%20mendiskusikan%20topik%20artikel%20${encodeURIComponent(post.title)}`} 
                target="_blank" 
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-[#25D366] hover:text-white transition-all"
              >
                <MessageCircle size={20} />
              </a>
              <Link to="/blog" className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-premium-purple hover:text-white transition-all">
                <ArrowLeft size={20} />
              </Link>
            </aside>

            {/* Main Body */}
            <div className="flex-1 order-1 lg:order-2">
              <div className="markdown-body max-w-none">
                <ReactMarkdown>{post.content}</ReactMarkdown>
              </div>

              {/* Tags / Footer */}
              <div className="mt-16 pt-10 border-t border-gray-100 italic text-text-light text-sm font-light leading-relaxed">
                Temukan ketenangan jiwa yang hakiki dan petualangan laut purba Raja Ampat bersama Nut Tonton Homes Misool. Nikmati kemurnian tradisi berpadu kenyamanan modern yang berkesan.
              </div>

              {/* Navigation */}
              <div className="mt-12 flex justify-between items-center py-8 border-y border-gray-100">
                <Link to="/blog" className="flex items-center gap-2 text-premium-purple font-bold text-sm tracking-widest uppercase hover:gap-4 transition-all">
                  <ArrowLeft size={16} />
                  Lihat Artikel Lainnya
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Suggested Posts */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-text-dark mb-10">Artikel Terkait</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.filter(p => p.id !== post.id).slice(0, 3).map((p) => (
              <Link key={p.id} to={`/blog/${p.id}`} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all group">
                <div className="aspect-video overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <span className="text-[10px] font-bold text-premium-purple uppercase tracking-widest mb-2 block">{p.category}</span>
                  <h4 className="font-bold text-text-dark group-hover:text-premium-purple transition-colors line-clamp-2">{p.title}</h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPostPage;
