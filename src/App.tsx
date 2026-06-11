import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";

// Components
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";

// Pages
import { HomePage } from "./pages/HomePage";
import { KamarPage } from "./pages/KamarPage";
import { TourDetailPage } from "./pages/TourDetailPage";
import { DestinationsPage } from "./pages/DestinationsPage";
import { ActivitiesPage } from "./pages/ActivitiesPage";
import { ActivityDetailPage } from "./pages/ActivityDetailPage";
import { PackagesPage } from "./pages/PackagesPage";
import { GalleryPage } from "./pages/GalleryPage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen selection:bg-premium-green selection:text-white">
          {/* WhatsApp Floating Button */}
          <a 
            href="https://wa.me/6285738285726?text=Halo%20Villa%20Agus%20Familly,%20saya%20ingin%20tanya%20ketersediaan%20villa" 
            target="_blank" 
            rel="noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4.5 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center border border-[#1ebd5d]"
          >
            <MessageCircle size={28} fill="white" />
          </a>

          <Navbar 
            isScrolled={isScrolled} 
            isMobileMenuOpen={isMobileMenuOpen} 
            setIsMobileMenuOpen={setIsMobileMenuOpen} 
          />

           <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/informasi" element={<KamarPage />} />
            <Route path="/cottage" element={<KamarPage />} />
            <Route path="/tour/:tourId" element={<TourDetailPage />} />
            <Route path="/destinasi" element={<DestinationsPage />} />
            <Route path="/aktivitas" element={<ActivitiesPage />} />
            <Route path="/activities" element={<ActivitiesPage />} />
            <Route path="/galeri" element={<GalleryPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<BlogPostPage />} />
            <Route path="/activity/:activityId" element={<ActivityDetailPage />} />
          </Routes>

          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

