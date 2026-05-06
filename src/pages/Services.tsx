import { motion } from "motion/react";
import { Monitor, Camera, Music, Zap, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function Services() {
  const allServices = [
    {
      id: "led-screens",
      title: "LED Screens & Video Walls",
      icon: <Monitor size={48} className="text-brand-cyan" />,
      features: ["Custom sizes & shapes", "Ultra-high brightness", "Outdoor & Indoor options", "Real-time content management"],
      image: "/gallery/quepadrescreen.jpg",
      desc: "Transform any space with vibrant LED displays. Perfect for presentations, digital backdrops, or immersive visuals."
    },
    {
      id: "photo-booth",
      title: "Premium Photo Booths",
      icon: <Camera size={48} className="text-brand-cyan" />,
      features: ["Instant social sharing", "Branded overlays", "High-res physical prints", "360 Video options"],
      image: "/gallery/booth1.jpg",
      desc: "Give your guests a professional-grade experience with modern tech and custom props for any theme."
    },
    {
      id: "sound-lighting",
      title: "Sound & Light",
      icon: <Zap size={48} className="text-brand-cyan" />,
      features: ["Digital sound consoles", "Intelligent moving lights", "Uplighting packages", "Cordless microphone systems"],
      image: "/gallery/vbsscreen.jpg",
      desc: "From soft ambient glows to high-energy light shows, we design sound and light that fits your event."
    },
    {
      id: "djs",
      title: "Professional DJs & MCs",
      icon: <Music size={48} className="text-brand-cyan" />,
      features: ["Music for all ages", "Professional MC services", "Interactive planning app", "Full setup & strike"],
      image: "/gallery/dj.jpeg",
      desc: "Our entertainers don't just play music — they drive the energy and flow of your entire event."
    }
  ];

  return (
    <div className="pt-32 pb-20">
      <section className="section-padding text-center mb-20">
         <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-5xl md:text-7xl font-black mb-6 italic tracking-tighter uppercase"
        >
          Our <span className="text-brand-cyan not-italic uppercase">Production</span> Toolkit
        </motion.h1>
         <p className="text-xl text-white/60 max-w-2xl mx-auto italic">High-performance tech meets meticulous planning for a flawless event execution.</p>
      </section>

      <div className="space-y-32 px-6 max-w-7xl mx-auto">
        {allServices.map((service, idx) => (
          <motion.div 
            key={service.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`flex flex-col ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-16 items-center text-center lg:text-left`}
          >
            <div className="flex-1 space-y-8 flex flex-col items-center lg:items-start">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="p-4 bg-white/5 rounded-none border border-brand-cyan/20 group-hover:bg-brand-cyan/10 transition-colors shrink-0">{service.icon}</div>
                <h2 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter">{service.title}</h2>
              </div>
              <p className="text-lg md:text-xl text-white/70 leading-relaxed italic">{service.desc}</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {service.features.map(f => (
                  <li key={f} className="flex items-center justify-center lg:justify-start gap-2 text-white/80 font-bold uppercase text-[10px] tracking-widest italic">
                    <CheckCircle2 size={14} className="text-brand-cyan shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
                <Link to="/quote" className="btn-primary justify-center">Reserve Services</Link>
                <Link to="/gallery" className="btn-secondary justify-center">View Examples</Link>
              </div>
            </div>
            
            <div className="flex-1 relative group">
              <div className="absolute -inset-4 bg-brand-cyan/10 rounded-none blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <img 
                src={service.image} 
                className="rounded-none shadow-2xl relative z-10 w-full aspect-video object-cover grayscale hover:grayscale-0 transition-all border border-white/10" 
                alt={service.title} 
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
