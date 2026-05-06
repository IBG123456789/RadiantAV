import { motion } from "motion/react";
import { Camera, Image as ImageIcon, Play, ExternalLink } from "lucide-react";

export function Gallery() {
  const images = [
    {
      url: "/gallery/quepadrescreen.jpg",
      title: "Que Padre LED Production",
      category: "LED Walls",
      colSpan: "md:col-span-2 md:row-span-2"
    },
    {
      url: "/gallery/rioswedding.jpg",
      title: "Rios Wedding Gala",
      category: "Weddings",
      colSpan: "md:col-span-1 md:row-span-1"
    },
    {
      url: "/gallery/dj.jpeg",
      title: "Live DJ & Lighting",
      category: "Entertainment",
       colSpan: "md:col-span-1 md:row-span-1"
    },
    {
      url: "/gallery/15bday.jpg",
      title: "15th Birthday Celebration",
      category: "Private Events",
       colSpan: "md:col-span-1 md:row-span-2"
    },
    {
      url: "/gallery/vbsscreen.jpg",
      title: "VBS Church Production",
      category: "LED Walls",
       colSpan: "md:col-span-2 md:row-span-1"
    },
    {
      url: "/gallery/360booth.jpg",
      title: "360 Video Experience",
      category: "Photo Booths",
       colSpan: "md:col-span-1 md:row-span-1"
    },
    {
      url: "/gallery/lizzardscreen.jpg",
      title: "Lizzard Event Visuals",
      category: "LED Walls",
       colSpan: "md:col-span-1 md:row-span-1"
    },
    {
      url: "/gallery/booth1.jpg",
      title: "The Radiant Booth",
      category: "Photo Booths",
       colSpan: "md:col-span-1 md:row-span-1"
    }
  ];

  return (
    <div className="pt-32 pb-20">
      <section className="section-padding">
        <div className="max-w-4xl mb-20 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-brand-cyan font-bold uppercase tracking-[0.3em] text-xs mb-4"
          >
            Visual Portfolio
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter mb-8 leading-none"
          >
            Moments <br className="hidden md:block" />
            <span className="text-brand-cyan not-italic">Electrified.</span>
          </motion.h1>
          <p className="text-lg md:text-xl text-white/40 italic max-w-2xl mx-auto md:mx-0">
            A curated look at how we transform spaces in San Antonio and beyond. From intimate weddings to massive corporate production.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[250px] gap-6">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className={`relative group overflow-hidden border border-white/5 ${img.colSpan}`}
            >
              <img 
                src={img.url} 
                alt={img.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 p-8 flex flex-col justify-end">
                <div className="text-brand-cyan text-[10px] font-bold uppercase tracking-[0.2em] mb-2">{img.category}</div>
                <h3 className="text-2xl font-black uppercase italic tracking-tighter">{img.title}</h3>
                <div className="mt-4 flex gap-2">
                   <button className="bg-white/10 hover:bg-brand-cyan hover:text-black p-2 transition-all">
                      <ImageIcon size={16} />
                   </button>
                   <button className="bg-white/10 hover:bg-brand-cyan hover:text-black p-2 transition-all">
                      <ExternalLink size={16} />
                   </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
           <div className="inline-flex flex-col items-center gap-4">
              <Camera size={40} className="text-brand-cyan animate-pulse" />
              <p className="text-white/40 font-bold uppercase text-xs tracking-widest italic">Follow us on Instagram for live updates and behind-the-scenes</p>
              <a 
                href="https://www.instagram.com/radiant.av" 
                target="_blank" 
                rel="noreferrer"
                className="text-brand-cyan font-black border-b border-brand-cyan/30 hover:border-brand-cyan transition-all italic text-xl uppercase tracking-tighter"
              >
                @radiant.av
              </a>
           </div>
        </div>
      </section>

      {/* Video Teaser Section */}
      <section className="bg-brand-gray py-24 mt-20 border-y border-white/5 overflow-hidden">
         <div className="section-padding flex flex-col items-center text-center relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-cyan/5 blur-[120px] -z-10" />
            <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-8 leading-none">See Us In <span className="text-brand-cyan not-italic">Motion</span></h2>
            <div className="relative w-full max-w-5xl aspect-video bg-black/50 border border-white/10 flex items-center justify-center group overflow-hidden">
               <video 
                 src="/gallery/barberevent.mp4" 
                 className="w-full h-full object-cover opacity-80"
                 autoPlay 
                 loop 
                 muted 
                 playsInline
               />
               <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500" />
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-24 h-24 rounded-full border-2 border-brand-cyan/30 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                  <Play size={40} className="text-brand-cyan" fill="currentColor" />
               </div>
               <div className="absolute bottom-8 left-8 text-left z-10">
                  <p className="text-brand-cyan text-xs font-bold uppercase tracking-widest italic">Live Production</p>
                  <p className="text-xl font-black uppercase tracking-tighter italic">Barber Event Showcase</p>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
