import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Zap, Mic2, Tv, Music4, ArrowRight } from "lucide-react";

export function Events() {
  const eventTypes = [
    {
      title: "Corporate LED Visuals",
      description: "Transform your company's biggest night into an immersive brand experience with high-res LED walls and concert-grade audio.",
      icon: <Tv size={40} />,
      image: "/gallery/quepadrescreen.jpg"
    },
    {
      title: "Luxury Weddings",
      description: "Elite sound for the ceremony, high-energy vibes for the dance floor, and mood-defining lighting designs.",
      icon: <Music4 size={40} />,
      image: "/gallery/rioswedding.jpg"
    },
    {
      title: "Concerts & DJ Sets",
      description: "Professional stage production including line array sound systems, intelligent lighting, and visual effects.",
      icon: <Zap size={40} />,
      image: "/gallery/dj.jpeg"
    },
    {
       title: "Private Milestone Parties",
       description: "Crystal clear speech reinforcement and state-of-the-art presentation technology for high-stakes celebrations.",
       icon: <Mic2 size={40} />,
       image: "/gallery/15bday.jpg"
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
            Specialized Production
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter mb-8 leading-[0.9]"
          >
            Every Event <br className="hidden md:block" />
            <span className="text-brand-cyan not-italic">Has A Pulse.</span>
          </motion.h1>
          <p className="text-lg md:text-xl text-white/40 italic max-w-2xl mx-auto md:mx-0 leading-relaxed">
            Whether it's a high-stakes board meeting or a high-energy music festival, our job is to make sure your audience feels every moment.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {eventTypes.map((type, index) => (
            <motion.div 
               key={index}
               initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 bg-brand-gray/50 border border-white/5 overflow-hidden`}
            >
               <div className="w-full md:w-1/2 overflow-hidden h-[400px]">
                  <img 
                    src={type.image} 
                    className="w-full h-full object-cover grayscale transition-all duration-1000 hover:grayscale-0 hover:scale-105" 
                    alt={type.title}
                  />
               </div>
               <div className="w-full md:w-1/2 p-8 md:p-12 space-y-6 flex flex-col items-center md:items-start text-center md:text-left">
                  <div className="text-brand-cyan">{type.icon}</div>
                  <h3 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter leading-none">{type.title}</h3>
                  <p className="text-white/50 italic leading-relaxed text-sm md:text-base">{type.description}</p>
                  <Link to="/quote" className="inline-flex items-center gap-2 text-brand-cyan font-black uppercase italic tracking-widest text-[10px] md:text-xs border-b border-brand-cyan/30 hover:border-brand-cyan transition-all pb-1 group">
                    Inquire for this style <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
               </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA section */}
      <section className="section-padding text-center bg-brand-cyan text-black py-24 mb-10 overflow-hidden relative">
         <div className="absolute top-0 right-0 w-64 h-64 bg-black/5 rounded-full blur-[80px]" />
         <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter mb-8 leading-none">Ready to start <br /> the show?</h2>
         <Link to="/quote" className="inline-block bg-black text-white px-10 py-5 font-black uppercase italic tracking-[0.2em] text-sm hover:translate-y-[-2px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.3)] transition-all">
            Get My Custom Quote
         </Link>
      </section>
    </div>
  );
}
