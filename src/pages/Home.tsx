import { motion } from "motion/react";
import { ArrowRight, Star, CheckCircle2, Monitor, Camera, Music, Zap, Mic2, Users } from "lucide-react";
import { Link } from "react-router-dom";

export function Home() {
  const services = [
    {
      title: "LED Screens",
      desc: "High-definition video walls that make your content pop in any lighting.",
      icon: <Monitor className="text-brand-cyan" size={32} />,
      link: "/services/led-screens"
    },
    {
      title: "Photo Booths",
      desc: "Modern, interactive booths that keep guests entertained and sharing.",
      icon: <Camera className="text-brand-cyan" size={32} />,
      link: "/services/photo-booth"
    },
    {
      title: "Sound & Lighting",
      desc: "Concert-quality audio and immersive lighting design.",
      icon: <Zap className="text-brand-cyan" size={32} />,
      link: "/services/sound-lighting"
    },
    {
      title: "Premium DJs",
      desc: "Professional entertainers who know how to read the room and keep it alive.",
      icon: <Music className="text-brand-cyan" size={32} />,
      link: "/services/djs"
    }
  ];

  const events = [
    { title: "Corporate", img: "/gallery/quepadrescreen.jpg", link: "/events" },
    { title: "Weddings", img: "/gallery/rioswedding.jpg", link: "/events" },
    { title: "Quinceañeras", img: "/gallery/15bday.jpg", link: "/events" },
    { title: "Private Parties", img: "/gallery/dj.jpeg", link: "/events" }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Video/Image Pattern */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img 
            src="/gallery/home.jpg" 
            alt="Event Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-brand-dark to-transparent z-20" />
        </div>

        <div className="section-padding relative z-30 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 px-6 py-2 rounded-none border border-brand-cyan/30 bg-brand-cyan/10 text-brand-cyan text-[10px] md:text-xs font-black uppercase tracking-[0.3em] italic"
          >
            San Antonio's Premier Event Production Partner
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-[0.9] tracking-tighter uppercase italic"
          >
            Radiant Events.<br />
            <span className="glow-text tracking-widest not-italic">AV Mastery.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/70 max-w-2xl mb-12 leading-relaxed italic"
          >
            Premium LED screens, photo booths, and AV rentals for weddings, corporate galas, and private events across Texas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-6 sm:px-0"
          >
            <Link to="/quote" className="btn-primary text-base md:text-lg px-10 py-4 justify-center">
              Get an Instant Quote <ArrowRight size={20} />
            </Link>
            <Link to="/services" className="btn-secondary text-base md:text-lg px-10 py-4 justify-center">
              Explore Services
            </Link>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-16 flex flex-wrap justify-center items-center gap-8 md:gap-12"
          >
             <div className="flex items-center gap-3 font-black text-sm md:text-base uppercase tracking-[0.2em] text-white/60 hover:text-brand-cyan transition-colors group cursor-default bg-white/5 px-6 py-3 border border-white/10 italic">
               <CheckCircle2 className="text-brand-cyan group-hover:scale-125 transition-transform" size={18} /> 
               100+ Events
             </div>
             <div className="flex items-center gap-3 font-black text-sm md:text-base uppercase tracking-[0.2em] text-white/60 hover:text-brand-cyan transition-colors group cursor-default bg-white/5 px-6 py-3 border border-white/10 italic">
               <CheckCircle2 className="text-brand-cyan group-hover:scale-125 transition-transform" size={18} /> 
               5-Star Service
             </div>
             <div className="flex items-center gap-3 font-black text-sm md:text-base uppercase tracking-[0.2em] text-white/60 hover:text-brand-cyan transition-colors group cursor-default bg-white/5 px-6 py-3 border border-white/10 italic">
               <CheckCircle2 className="text-brand-cyan group-hover:scale-125 transition-transform" size={18} /> 
               Full Setup
             </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-brand-gray border-y border-white/5 relative">
        <div className="section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Core Event Services</h2>
            <p className="text-white/60 max-w-xl mx-auto">Everything you need to transform your venue into a high-production experience.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <motion.div
                key={service.title}
                whileHover={{ y: -10 }}
                className="bg-brand-dark p-8 rounded-none border border-white/5 hover:border-brand-cyan/50 transition-all group"
              >
                <div className="mb-6 p-4 bg-brand-gray rounded-none w-fit group-hover:scale-110 transition-all group-hover:bg-brand-cyan/10">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-black mb-3 uppercase italic tracking-tighter">{service.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Types Pathway */}
      <section className="section-padding">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 text-center md:text-left">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Tailored for Your Event</h2>
            <p className="text-white/60 max-w-xl">We specialize in various industries, ensuring the right vibe for every occasion.</p>
          </div>
          <Link to="/gallery" className="btn-secondary">View Portfolio</Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {events.map((event) => (
            <Link 
              to={event.link} 
              key={event.title}
              className="relative group overflow-hidden rounded-2xl aspect-[4/5]"
            >
              <img 
                src={event.img} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt={event.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h3 className="text-2xl font-bold uppercase italic tracking-tighter">{event.title}</h3>
                <div className="flex items-center gap-2 text-brand-cyan text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                  View Setup <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-brand-gray/50 py-24">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative w-full order-2 lg:order-1">
            <img 
              src="/gallery/vbsscreen.jpg" 
              className="rounded-none shadow-2xl relative z-10 border border-white/10 grayscale hover:grayscale-0 transition-all duration-700 w-full" 
              alt="AV Production Setup" 
            />
            <div className="hidden md:block absolute -top-10 -left-10 w-40 h-40 bg-brand-cyan/20 blur-3xl rounded-none" />
            <div className="hidden md:block absolute -bottom-10 -right-10 w-40 h-40 bg-blue-600/20 blur-3xl rounded-none" />
          </div>
          
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-black mb-8 italic uppercase tracking-tighter">The Radiant <span className="text-brand-cyan not-italic">Standard</span></h2>
            <div className="space-y-10">
              <div className="flex flex-col md:flex-row gap-6 items-center lg:items-start text-center md:text-left lg:text-left">
                <div className="bg-brand-cyan p-4 rounded-none h-fit shrink-0"><Users size={24} className="text-black" /></div>
                <div>
                  <h4 className="text-xl font-bold mb-2 uppercase tracking-tight">San Antonio Roots</h4>
                  <p className="text-white/60 leading-relaxed">Based in San Antonio, Xarian and Gustavo lead a team that knows the city's premier venues inside and out.</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-6 items-center lg:items-start text-center md:text-left lg:text-left">
                <div className="bg-brand-cyan p-4 rounded-none h-fit shrink-0"><Mic2 size={24} className="text-black" /></div>
                <div>
                  <h4 className="text-xl font-bold mb-2 uppercase tracking-tight">Premium Gear Only</h4>
                  <p className="text-white/60 leading-relaxed">We invest in the latest HD LED technology and concert-grade sound systems.</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-6 items-center lg:items-start text-center md:text-left lg:text-left">
                <div className="bg-brand-cyan p-4 rounded-none h-fit shrink-0"><Zap size={24} className="text-black" /></div>
                <div>
                  <h4 className="text-xl font-bold mb-2 uppercase tracking-tight">Worry-Free Setup</h4>
                  <p className="text-white/60 leading-relaxed">Our technicians handle every detail from delivery to live support.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Preview */}
      <section className="section-padding text-center border-t border-white/5">
        <div className="flex justify-center gap-1 mb-6">
          {[...Array(5)].map((_, i) => <Star key={i} className="text-brand-cyan fill-brand-cyan" size={24} />)}
        </div>
        <blockquote className="text-2xl md:text-4xl font-medium leading-relaxed mb-8 italic tracking-tight">
          "RadiantAV has been our exclusive AV partner for over 2 years. Every event they handle is executed with precision and a level of production that exceeds our expectations every time."
        </blockquote>
        <cite className="not-italic">
          <span className="block font-black text-xl uppercase tracking-[0.2em] text-brand-cyan italic">Rodrigo Zurita</span>
          <span className="text-white/40 uppercase text-xs font-bold tracking-widest mt-2 block">Owner/Operator, Ambassadors Coffee</span>
        </cite>
      </section>

      {/* Final CTA */}
      <section className="max-w-5xl mx-auto text-center relative overflow-hidden rounded-none bg-brand-gray border border-white/10 mb-20 py-20 px-6 w-[calc(100%-3rem)]">
         <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase italic tracking-tighter">Ready to <span className="text-brand-cyan not-italic">Ignite</span> Your Event?</h2>
            <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto italic">Get a custom quote back in under 24 hours. No hidden fees, just premium service.</p>
            <Link to="/quote" className="btn-primary text-xl px-12 py-5 inline-flex">Request Your Free Quote</Link>
         </div>
         <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan/5 blur-[100px]" />
         <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 blur-[100px]" />
      </section>
    </div>
  );
}
