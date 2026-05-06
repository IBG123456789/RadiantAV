import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", path: "/services" },
    { name: "Events", path: "/events" },
    { name: "Gallery", path: "/gallery" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md py-4 border-b border-white/10" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <img 
            src="/logo.png" 
            alt="RadiantAV Logo" 
            className="h-20 w-auto group-hover:opacity-80 transition-opacity"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              const fallback = document.getElementById('navbar-text-logo');
              if (fallback) fallback.classList.remove('hidden');
            }}
          />
          <div id="navbar-text-logo" className="hidden items-center gap-1">
            <span className="font-bold text-2xl tracking-tight uppercase whitespace-nowrap text-white group-hover:text-brand-cyan transition-colors">
              Radiant
            </span>
            <div className="flex flex-col -space-y-1">
              <span className="font-black text-2xl tracking-tighter text-brand-cyan italic">AV</span>
              <div className="h-[2px] w-full bg-brand-cyan shadow-[0_0_8px_rgba(0,189,254,1)]" />
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-xs uppercase tracking-widest font-bold hover:text-brand-cyan transition-colors ${
                location.pathname === link.path ? "text-brand-cyan" : "text-white/60"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="h-6 w-[1px] bg-white/10 mx-2" />
          <a href="tel:2105700862" className="flex flex-col items-end gap-0 text-[10px] font-bold uppercase tracking-widest text-white/60 hover:text-brand-cyan transition-colors">
            <span>(210) 570-0862</span>
            <span className="text-[8px] opacity-50">San Antonio, TX</span>
          </a>
          <Link to="/quote" className="btn-primary py-2 px-6">
            Book Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-brand-gray border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 py-12 flex flex-col gap-8 items-center text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-2xl font-black uppercase italic tracking-tighter ${
                    location.pathname === link.path ? "text-brand-cyan" : "text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/quote" onClick={() => setIsOpen(false)} className="btn-primary w-full py-5 text-center text-lg uppercase italic tracking-widest font-black">
                Get a Quote
              </Link>
              <div className="flex flex-col gap-6 items-center pt-8 border-t border-white/10 w-full">
                <a href="tel:2105700862" className="flex items-center justify-center gap-3 text-brand-cyan hover:text-white transition-colors">
                  <Phone size={20} />
                  <span className="font-black text-lg tracking-tight uppercase italic">Main: (210) 570-0862</span>
                </a>
                <div className="flex flex-col gap-3 w-full items-center">
                  <a href="tel:2107104961" className="flex items-center gap-2 text-white/40 hover:text-white transition-colors">
                    <span className="text-xs uppercase font-bold tracking-widest">Xarian: (210) 710-4961</span>
                  </a>
                  <a href="tel:2107401065" className="flex items-center gap-2 text-white/40 hover:text-white transition-colors">
                    <span className="text-xs uppercase font-bold tracking-widest">Gustavo: (210) 740-1065</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
