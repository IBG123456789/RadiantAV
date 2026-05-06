import { Link } from "react-router-dom";
import { Mail, Phone, Instagram, Facebook, MapPin, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20 text-center md:text-left">
        <div className="space-y-8 flex flex-col items-center md:items-start">
          <Link to="/" className="flex items-center gap-2 group">
            <img 
              src="/logo.png" 
              alt="RadiantAV Logo" 
              className="h-20 w-auto group-hover:opacity-80 transition-opacity"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const fallback = document.getElementById('footer-text-logo');
                if (fallback) fallback.classList.remove('hidden');
              }}
            />
            <div id="footer-text-logo" className="hidden items-center gap-1">
              <span className="font-black text-xl tracking-tight uppercase whitespace-nowrap text-white group-hover:text-brand-cyan transition-colors">
                Radiant
              </span>
              <div className="flex flex-col -space-y-0.5">
                 <span className="font-black text-xl tracking-tighter text-brand-cyan italic">AV</span>
                 <div className="h-[1.5px] w-full bg-brand-cyan shadow-[0_0_8px_rgba(0,189,254,0.5)]" />
              </div>
            </div>
          </Link>
          <p className="text-white/30 text-[10px] font-black uppercase tracking-[0.1em] leading-relaxed italic max-w-xs">
            Premium event production and AV rentals in Texas. We turn standard venues into immersive experiences with world-class tech and talent.
          </p>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/radiant.av?igsh=NGJ4N21udWR6aGNy&utm_source=qr" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-none bg-white/5 flex items-center justify-center hover:bg-brand-cyan hover:text-black transition-all">
              <Instagram size={18} />
            </a>
            <a href="https://www.facebook.com/RadiantAV" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-none bg-white/5 flex items-center justify-center hover:bg-brand-cyan hover:text-black transition-all">
              <Facebook size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-black mb-6 uppercase text-[10px] tracking-[0.2em] text-brand-cyan">Services</h4>
          <ul className="space-y-4 text-white/40 text-[10px] font-black uppercase tracking-widest">
            <li><Link to="/services" className="hover:text-brand-cyan transition-all">LED Visual Walls</Link></li>
            <li><Link to="/services" className="hover:text-brand-cyan transition-all">Digital Photo Booths</Link></li>
            <li><Link to="/services" className="hover:text-brand-cyan transition-all">Audio & Lighting</Link></li>
            <li><Link to="/services" className="hover:text-brand-cyan transition-all">Event Entertainment</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-black mb-6 uppercase text-[10px] tracking-[0.2em] text-brand-cyan">Resources</h4>
          <ul className="space-y-4 text-white/40 text-[10px] font-black uppercase tracking-widest">
            <li><Link to="/gallery" className="hover:text-brand-cyan transition-all">Event Gallery</Link></li>
            <li><Link to="/quote" className="hover:text-brand-cyan transition-all">Special Offers</Link></li>
            <li><Link to="/about" className="hover:text-brand-cyan transition-all">Our Approach</Link></li>
            <li><Link to="/faq" className="hover:text-brand-cyan transition-all">Booking FAQ</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-black mb-8 uppercase text-[10px] tracking-[0.3em] text-brand-cyan italic">Contact Info</h4>
          <ul className="space-y-6 text-white/40 text-[10px] font-black uppercase tracking-[0.2em] flex flex-col items-center md:items-start">
            <li className="flex flex-col gap-2 w-full">
              <span className="flex items-center justify-center md:justify-start gap-4 text-brand-cyan font-black border-b border-white/5 pb-2 italic"><Phone size={14} /> Main: (210) 570-0862</span>
            </li>
            <li className="flex flex-col gap-2 w-full">
              <span className="flex items-center justify-center md:justify-start gap-4 text-white/60"><Phone size={14} className="text-brand-cyan/50" /> Xarian: (210) 710-4961</span>
            </li>
            <li className="flex flex-col gap-2 w-full">
              <span className="flex items-center justify-center md:justify-start gap-4 text-white/60"><Phone size={14} className="text-brand-cyan/50" /> Gustavo: (210) 740-1065</span>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-4 pt-2 text-white/80"><Mail size={14} className="text-brand-cyan" /> contact@radiant-av.com</li>
            <li className="flex items-center justify-center md:justify-start gap-4 italic text-white/80"><MapPin size={14} className="text-brand-cyan" /> San Antonio, Texas</li>
          </ul>
          <div className="flex justify-center md:justify-start">
            <Link to="/quote" className="mt-10 inline-flex items-center gap-3 text-brand-cyan font-black text-xs uppercase tracking-[0.3em] border-b border-brand-cyan/20 pb-2 hover:border-brand-cyan transition-all group italic">
              INITIATE PROJECT <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-white/20 text-xs">© 2026 RadiantAV Productions. All Rights Reserved.</p>
        <div className="flex gap-6 text-white/20 text-xs">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
