import { Link, useNavigate, useLocation } from "react-router-dom";
import { Compass, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export const Footer = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
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

  return (
    <footer id="kontak" className="bg-zinc-950 text-white pt-20 pb-10 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="font-serif text-2xl font-bold tracking-wider text-white uppercase">
                VILLA AGUS <span className="font-light italic text-premium-green-dark">FAMILY</span>
              </span>
            </div>
            <p className="text-zinc-400 leading-relaxed mb-8 text-sm max-w-sm">
              {t.footer.description}
            </p>
            <div className="flex gap-4">
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col md:items-center">
             <div className="w-full max-w-[180px]">
                <h5 className="font-bold text-lg mb-8 text-white border-b-2 border-premium-green inline-block pb-2">{t.footer.navTitle}</h5>
                <ul className="flex flex-col gap-4 text-zinc-400 text-sm font-medium">
                  <li>
                    <a href="#/" onClick={(e) => handleNavClick("top", e)} className="hover:text-premium-green transition-colors">
                      {t.nav.home}
                    </a>
                  </li>
                  <li>
                    <Link to="/kamar" className="hover:text-premium-green transition-colors">
                      {t.nav.rooms}
                    </Link>
                  </li>
                  <li>
                    <Link to="/aktivitas" className="hover:text-premium-green transition-colors">
                      {t.nav.activities}
                    </Link>
                  </li>
                  <li>
                    <Link to="/paket" className="hover:text-premium-green transition-colors">
                      {t.nav.paket}
                    </Link>
                  </li>
                  <li>
                    <Link to="/tentang-kami" className="hover:text-premium-green transition-colors">
                      {t.nav.about}
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog" className="hover:text-premium-green transition-colors">
                      {t.nav.gallery} & Blog
                    </Link>
                  </li>
                  <li>
                    <Link to="/kontak" className="hover:text-premium-green transition-colors">
                      {t.nav.contact}
                    </Link>
                  </li>
                </ul>
             </div>
          </div>

          {/* Contact Info */}
          <div>
            <h5 className="font-bold text-lg mb-8 text-white border-b-2 border-premium-green inline-block pb-2">{t.footer.contactTitle}</h5>
            <ul className="flex flex-col gap-6 text-zinc-400">
               <li className="flex items-start gap-4">
                 <div className="text-premium-green mt-1"><MapPin size={20} /></div>
                 <div className="flex flex-col">
                   <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold mb-1">{t.footer.labelLocation}</span>
                   <span className="text-sm font-semibold text-zinc-200">
                     Karangasem, Bali
                   </span>
                 </div>
               </li>
               <li className="flex items-start gap-4">
                 <div className="text-premium-green mt-1"><Mail size={20} /></div>
                 <div className="flex flex-col">
                   <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold mb-1">E-mail</span>
                   <span className="text-sm font-semibold text-zinc-200">
                     -
                   </span>
                 </div>
               </li>
               <li className="flex items-start gap-4">
                 <div className="text-premium-green mt-1"><Phone size={20} /></div>
                 <div className="flex flex-col">
                   <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold mb-1">WhatsApp Reservation</span>
                   <a href="https://wa.me/6285738285726?text=Halo%2520Villa%2520Agus%2520Family%252C%2520saya%2520ingin%2520cek%2520ketersediaan%2520villa" target="_blank" rel="noreferrer" className="hover:text-premium-green transition-colors text-sm font-semibold text-zinc-200">
                     0857-3828-5726
                   </a>
                 </div>
               </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-800 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-500 text-xs font-medium uppercase tracking-[0.2em]">
            &copy; 2026 Villa Agus Family. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-zinc-500 text-xs uppercase tracking-widest font-bold">
            <span className="cursor-default">Bali, Indonesia</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
