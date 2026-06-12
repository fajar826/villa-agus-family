import { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Compass, Phone, X, Menu, Globe, ChevronDown, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { Language } from "../translations";

interface NavbarProps {
  isScrolled: boolean;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}

const LANGUAGES = [
  { code: "ID" as Language, label: "Indonesia" },
  { code: "EN" as Language, label: "English" },
  { code: "DE" as Language, label: "Deutsch (Jerman)" },
  { code: "FR" as Language, label: "Français (Prancis)" },
];

export const Navbar = ({ isScrolled, isMobileMenuOpen, setIsMobileMenuOpen }: NavbarProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLangDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    if (location.pathname === "/") {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate({ pathname: "/", hash: id });
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg py-4 border-b border-gray-100" : "bg-gradient-to-b from-black/50 to-transparent py-7"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <button onClick={handleLogoClick} className="flex items-center gap-3 group cursor-pointer text-left bg-transparent border-none p-0">
          <span className={`font-serif text-lg sm:text-lg md:text-xl font-bold tracking-wider transition-colors uppercase ${isScrolled ? "text-premium-green" : "text-white"}`}>
            VILLA AGUS <span className={`font-light italic transition-colors hidden sm:inline ${isScrolled ? "text-text-dark" : "text-white/80"}`}>FAMILLY</span>
          </span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center rounded-sm px-6 py-2 transition-opacity duration-300 gap-8">
          <button 
            onClick={() => handleNavClick("top")}
            className={`cursor-pointer ${isScrolled ? "nav-link" : "nav-link-hero"}`}
          >
            <motion.span layout transition={{ duration: 0.15 }}>{t.nav.home}</motion.span>
          </button>
          <Link 
            to="/informasi"
            className={`cursor-pointer ${isScrolled ? "nav-link" : "nav-link-hero"}`}
          >
            <motion.span layout transition={{ duration: 0.15 }}>{t.nav.rooms}</motion.span>
          </Link>
          <Link 
            to="/galeri"
            className={`cursor-pointer ${isScrolled ? "nav-link" : "nav-link-hero"}`}
          >
            <motion.span layout transition={{ duration: 0.15 }}>{t.nav.gallery}</motion.span>
          </Link>
          <Link 
            to="/kontak"
            className={`cursor-pointer ${isScrolled ? "nav-link" : "nav-link-hero"}`}
          >
            <motion.span layout transition={{ duration: 0.15 }}>{t.nav.contact}</motion.span>
          </Link>
        </div>

        {/* Desktop Controls (Dropdown Language & CTA Button) */}
        <div className="hidden md:flex items-center gap-4">
          {/* Custom Language Dropdown Selector */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-bold uppercase transition-all border ${
                isScrolled 
                  ? "text-text-dark border-gray-200 hover:bg-gray-50 hover:border-gray-300" 
                  : "text-white border-white/20 hover:bg-white/10"
              }`}
            >
              <Globe size={14} className="opacity-80" />
              <span>{language}</span>
              <ChevronDown size={12} className={`transition-transform duration-200 ${isLangDropdownOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {isLangDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 mt-2 w-48 bg-white text-zinc-900 rounded-lg shadow-xl border border-gray-100 overflow-hidden z-50 py-1"
                >
                  <div className="px-3 py-1 text-[10px] uppercase tracking-wider text-gray-400 font-bold border-b border-gray-50 mb-1">
                    {t.nav.selectLang}
                  </div>
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2.5 text-xs font-medium hover:bg-emerald-50 hover:text-premium-green transition-all flex items-center justify-between ${
                        language === lang.code ? "text-premium-green bg-emerald-50/50 font-bold" : ""
                      }`}
                    >
                      <span>{lang.label}</span>
                      {language === lang.code && <Check size={14} className="text-premium-green" />}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a 
            href="https://wa.me/6285738285726?text=Halo%20Villa%20Agus%20Familly,%20saya%20ingin%20tanya%20ketersediaan%20villa" 
            target="_blank"
            rel="noreferrer"
            className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-2.5 rounded-[4px] uppercase text-[13px] font-semibold flex items-center gap-2 cursor-pointer shadow-lg hover:shadow-emerald-600/20 active:scale-95 transition-all duration-300 ease-in-out border-none"
          >
            <Phone size={14} /> <motion.span layout transition={{ duration: 0.15 }}>{t.nav.cta}</motion.span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center gap-3">
          {/* Quick Mobile Language Circle */}
          <button
            onClick={() => {
              // Cycle through languages on quick mob tap to make it ultra fast
              const currentIndex = LANGUAGES.findIndex(l => l.code === language);
              const nextIndex = (currentIndex + 1) % LANGUAGES.length;
              setLanguage(LANGUAGES[nextIndex].code);
            }}
            className="p-2 rounded-full font-bold text-xs uppercase bg-white/10 border border-white/20 text-white min-w-9 h-9 flex items-center justify-center relative hover:bg-white/20 transition-all shadow-sm"
            title="Cycle Language"
          >
            <span className={isScrolled ? "text-premium-green" : "text-white"}>{language}</span>
          </button>

          <button 
            className={`p-2 rounded-full z-[80] relative transition-colors ${
              (isMobileMenuOpen || isScrolled) ? "text-premium-green bg-gray-100 shadow-sm" : "text-white bg-white/20"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[70] md:hidden flex flex-col bg-white h-screen"
          >
            {/* Header area in menu for logo */}
            <div className="px-6 py-5 border-b border-gray-100 flex items-center">
               <button onClick={(e) => { handleLogoClick(e); setIsMobileMenuOpen(false); }} className="flex items-center gap-3 text-left bg-transparent border-none p-0">
                <span className="font-serif text-lg font-bold tracking-tight text-premium-green uppercase">
                  VILLA AGUS <span className="font-light italic text-text-dark">FAMILLY</span>
                </span>
              </button>
            </div>

            <div className="flex flex-col p-10 gap-6 overflow-y-auto h-full">
              <div className="flex items-center gap-3 mb-2">
                <div>
                  <p className="text-[10px] font-bold text-premium-green uppercase tracking-widest">Villa Agus Familly</p>
                  <p className="text-xs text-text-light">{t.nav.menuTitle}</p>
                </div>
              </div>

              <button onClick={() => handleNavClick("top")} className="text-left text-2xl font-bold text-text-dark border-b border-gray-100 pb-4 hover:text-premium-green transition-colors bg-transparent border-none py-2">{t.nav.home}</button>
              <Link to="/informasi" onClick={() => setIsMobileMenuOpen(false)} className="text-left text-2xl font-bold text-text-dark border-b border-gray-100 pb-4 hover:text-premium-green transition-colors py-2 block">{t.nav.rooms}</Link>
              <Link to="/galeri" onClick={() => setIsMobileMenuOpen(false)} className="text-left text-2xl font-bold text-text-dark border-b border-gray-100 pb-4 hover:text-premium-green transition-colors py-2 block">{t.nav.gallery}</Link>
              <Link to="/kontak" onClick={() => setIsMobileMenuOpen(false)} className="text-left text-2xl font-bold text-text-dark border-b border-gray-100 pb-4 hover:text-premium-green transition-colors py-2 block">{t.nav.contact}</Link>
              
              {/* Mobile Dedicated Lang Selection Grid */}
              <div className="mt-4">
                <p className="text-[10px] font-bold text-premium-green uppercase tracking-widest mb-3">{t.nav.selectLang}</p>
                <div className="grid grid-cols-2 gap-2">
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => setLanguage(lang.code)}
                      className={`py-3 px-4 text-xs font-bold rounded-lg border text-center transition-all ${
                        language === lang.code 
                          ? "bg-premium-green border-premium-green text-white shadow-md shadow-emerald-600/15" 
                          : "border-gray-200 text-text-dark hover:border-gray-300 bg-white"
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-6 space-y-4 pb-10">
                <div className="p-5 bg-premium-green/5 rounded-2xl border border-premium-green/10 shadow-sm">
                  <p className="text-xs font-bold text-premium-green uppercase tracking-widest mb-2">{t.nav.checkAvail}</p>
                  <a href="https://wa.me/6285738285726?text=Halo%20Villa%20Agus%20Familly,%20saya%20ingin%20tanya%20ketersediaan%20villa" className="text-base font-bold text-text-dark flex items-center gap-2 group">
                    <Phone size={16} className="text-premium-green group-hover:scale-110 transition-transform" /> 0857-3828-5726
                  </a>
                </div>
                <a 
                  href="https://wa.me/6285738285726?text=Halo%20Villa%20Agus%20Familly,%20saya%20ingin%20tanya%20ketersediaan%20villa"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-500 text-white w-full text-base py-4 rounded-[4px] shadow-2xl text-center block font-semibold hover:shadow-emerald-600/20 active:scale-98 transition-all duration-300 ease-in-out"
                >
                  <motion.span layout transition={{ duration: 0.15 }}>{t.nav.cta}</motion.span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

