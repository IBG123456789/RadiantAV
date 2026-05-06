import { motion } from "motion/react";
import { CheckCircle2, Award, Briefcase, Zap, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export function About() {
  const team = [
    { name: "Xarian R", role: "Co-Owner / Production Strategist", phone: "(210) 710-4961" },
    { name: "Gustavo O", role: "Co-Owner / Technical Director", phone: "(210) 740-1065" }
  ];

  return (
    <div className="pt-32 pb-20">
      <section className="section-padding">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-16 items-center text-center lg:text-left">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-brand-cyan font-bold uppercase tracking-[0.3em] text-xs mb-4"
            >
              The Story of RadiantAV
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter mb-8 leading-none">
              Elevating San Antonio <span className="text-brand-cyan not-italic">One Event</span> At A Time.
            </h1>
            <p className="text-lg md:text-xl text-white/60 mb-8 italic leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Founded by Xarian R and Gustavo O, RadiantAV was born out of a shared passion for high-production event experiences. We saw a gap in the San Antonio market for a premium, reliable AV partner that prioritizes both technical perfection and white-glove service.
            </p>
            <div className="flex flex-col items-center lg:items-start gap-4 mb-10">
              <div className="flex items-center gap-3 text-white/80 font-bold">
                <CheckCircle2 size={20} className="text-brand-cyan" /> 10+ Years Combined Experience
              </div>
              <div className="flex items-center gap-3 text-white/80 font-bold">
                <CheckCircle2 size={20} className="text-brand-cyan" /> 100+ Successful Productions
              </div>
              <div className="flex items-center gap-3 text-white/80 font-bold">
                <CheckCircle2 size={20} className="text-brand-cyan" /> Locally Owned & Operated
              </div>
            </div>
            <Link to="/quote" className="btn-primary inline-flex">Start Your Production</Link>
          </div>
          
          <div className="relative">
            <img 
              src="/gallery/teampic.jpeg" 
              className="rounded-none border-2 border-brand-cyan/20 w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-700" 
              alt="RadiantAV Team" 
            />
            <div className="absolute -bottom-8 -right-8 bg-brand-cyan text-black p-8 font-black uppercase italic tracking-tighter text-3xl">
              Est. 2024
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="bg-brand-gray py-24 border-y border-white/5">
        <div className="section-padding">
           <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter mb-4">Meet the <span className="text-brand-cyan not-italic">Architects</span></h2>
              <p className="text-white/40 uppercase text-xs font-bold tracking-widest italic">Direct service from the owners themselves.</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {team.map((member) => (
                <div key={member.name} className="bg-brand-dark p-10 border border-white/10 relative group overflow-hidden text-center md:text-left flex flex-col items-center md:items-start">
                   <h3 className="text-2xl font-black uppercase italic tracking-tighter mb-2 group-hover:text-brand-cyan transition-colors">{member.name}</h3>
                   <div className="bg-brand-cyan/10 text-brand-cyan px-3 py-1 text-[10px] font-bold uppercase tracking-widest inline-block mb-6">
                      {member.role}
                   </div>
                   <div className="space-y-4 w-full">
                      <a href="tel:2105700862" className="flex items-center justify-center md:justify-start gap-3 text-brand-cyan hover:text-white transition-colors text-sm font-black uppercase tracking-widest border-b border-white/5 pb-2 mb-2">
                         <Phone size={16} /> Office: (210) 570-0862
                      </a>
                      <a href={`tel:${member.phone.replace(/\D/g, '')}`} className="flex items-center justify-center md:justify-start gap-3 text-white/60 hover:text-white transition-colors text-xs font-bold tracking-tight">
                         <Phone size={14} className="opacity-50" /> Direct: {member.phone}
                      </a>
                      <a href="mailto:contact@radiant-av.com" className="flex items-center justify-center md:justify-start gap-3 text-white/60 hover:text-white transition-colors text-xs font-bold tracking-tight">
                         <Mail size={14} className="opacity-50" /> contact@radiant-av.com
                      </a>
                   </div>
                   <div className="absolute -bottom-4 -right-4 opacity-5 group-hover:opacity-10 transition-opacity hidden md:block">
                      <Award size={120} />
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
         <div>
            <div className="bg-brand-cyan/10 w-16 h-16 flex items-center justify-center mx-auto mb-6 text-brand-cyan border border-brand-cyan/20">
               <Briefcase size={32} />
            </div>
            <h4 className="text-xl font-black uppercase italic tracking-tighter mb-4">Professionalism</h4>
            <p className="text-white/50 text-sm leading-relaxed">We arrive early, dress professionally, and treat every event like our own family's celebration.</p>
         </div>
         <div>
            <div className="bg-brand-cyan/10 w-16 h-16 flex items-center justify-center mx-auto mb-6 text-brand-cyan border border-brand-cyan/20">
               <Zap size={32} />
            </div>
            <h4 className="text-xl font-black uppercase italic tracking-tighter mb-4">Innovation</h4>
            <p className="text-white/50 text-sm leading-relaxed">We constantly invest in the latest AV technology to ensure San Antonio gets the best tech available.</p>
         </div>
         <div>
            <div className="bg-brand-cyan/10 w-16 h-16 flex items-center justify-center mx-auto mb-6 text-brand-cyan border border-brand-cyan/20">
               <Award size={32} />
            </div>
            <h4 className="text-xl font-black uppercase italic tracking-tighter mb-4">Excellence</h4>
            <p className="text-white/50 text-sm leading-relaxed">Good enough isn't in our vocabulary. We aim for a flawless production every single time.</p>
         </div>
      </section>
    </div>
  );
}
