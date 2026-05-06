import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, CheckCircle2, Calendar, MapPin, Package, User } from "lucide-react";

export function Quote() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    venue: "",
    eventType: "Corporate",
    services: [] as string[],
    message: ""
  });

  const services = ["LED Screens", "Photo Booth", "Sound System", "Lighting", "DJ Service", "Full Production"];

  const toggleService = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service) 
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json();
        // Handle both string errors and Resend error objects
        const errorMessage = typeof data.error === 'object' ? (data.error.message || JSON.stringify(data.error)) : data.error;
        throw new Error(errorMessage || "Failed to submit quote request.");
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="pt-40 section-padding min-h-screen text-center">
        <motion.div
           initial={{ scale: 0.8, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }}
           className="bg-brand-gray p-12 rounded-none max-w-xl mx-auto border border-brand-cyan/20"
        >
          <CheckCircle2 size={80} className="text-brand-cyan mx-auto mb-6" />
          <h2 className="text-4xl font-black mb-4 uppercase italic tracking-tighter">Request Received!</h2>
          <p className="text-white/60 text-lg mb-8 italic">
            Thank you, {formData.name}. Our event strategists will review your details and send a custom quote to <strong>{formData.email}</strong> within 24 hours.
          </p>
          <button 
            onClick={() => window.location.href = '/'}
            className="btn-primary w-full"
          >
            Back to Home
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto min-h-screen">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tighter italic">Get Your <span className="text-brand-gold not-italic">Custom Quote</span></h1>
        <p className="text-white/60">Fill out the details below and we'll build the perfect package for your event.</p>
      </div>

      {/* Progress Bar */}
      <div className="flex gap-2 mb-12">
        {[1, 2, 3].map(i => (
          <div 
            key={i} 
            className={`h-1 flex-grow transition-all duration-500 ${step >= i ? "bg-brand-cyan" : "bg-white/10"}`} 
          />
        ))}
      </div>

      <form onSubmit={handleSubmit} className="bg-brand-gray p-8 rounded-none border border-white/5 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/5 blur-[50px] -z-10" />
        
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div 
              key="step1"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3 mb-6 text-brand-cyan">
                <User size={24} />
                <h3 className="text-xl font-black uppercase italic tracking-tight">Who are you?</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                    <label className="block text-xs uppercase tracking-widest font-bold text-white/40 mb-2">Full Name</label>
                    <input 
                      required
                      type="text" 
                      className="w-full bg-brand-dark border border-white/10 rounded-none px-4 py-3 focus:border-brand-cyan outline-none transition-all"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                 </div>
                 <div>
                    <label className="block text-xs uppercase tracking-widest font-bold text-white/40 mb-2">Email Address</label>
                    <input 
                      required
                      type="email" 
                      className="w-full bg-brand-dark border border-white/10 rounded-none px-4 py-3 focus:border-brand-cyan outline-none transition-all"
                      placeholder="email@example.com"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                    />
                 </div>
                 <div className="md:col-span-2">
                    <label className="block text-xs uppercase tracking-widest font-bold text-white/40 mb-2">Phone Number</label>
                    <input 
                      required
                      type="tel" 
                      className="w-full bg-brand-dark border border-white/10 rounded-none px-4 py-3 focus:border-brand-cyan outline-none transition-all"
                      placeholder="(555) 000-0000"
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                    />
                 </div>
              </div>
              <button 
                type="button" 
                onClick={nextStep} 
                className="btn-primary w-full py-4 mt-4"
                disabled={!formData.name || !formData.email || !formData.phone}
              >
                Next Step
              </button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div 
              key="step2"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3 mb-6 text-brand-cyan">
                <Calendar size={24} />
                <h3 className="text-xl font-black uppercase italic tracking-tight">Event Details</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                    <label className="block text-xs uppercase tracking-widest font-bold text-white/40 mb-2">Event Date</label>
                    <input 
                      required
                      type="date" 
                      className="w-full bg-brand-dark border border-white/10 rounded-none px-4 py-3 focus:border-brand-cyan outline-none transition-all text-white/60"
                      value={formData.date}
                      onChange={e => setFormData({...formData, date: e.target.value})}
                    />
                 </div>
                 <div>
                    <label className="block text-xs uppercase tracking-widest font-bold text-white/40 mb-2">Event Type</label>
                    <select 
                      className="w-full bg-brand-dark border border-white/10 rounded-none px-4 py-3 focus:border-brand-cyan outline-none transition-all text-white/60"
                      value={formData.eventType}
                      onChange={e => setFormData({...formData, eventType: e.target.value})}
                    >
                       <option>Corporate</option>
                       <option>Wedding</option>
                       <option>Quinceañera</option>
                       <option>Private Party</option>
                       <option>Other</option>
                    </select>
                 </div>
                 <div className="md:col-span-2">
                    <label className="block text-xs uppercase tracking-widest font-bold text-white/40 mb-2 flex items-center gap-2"><MapPin size={14} /> Venue Name or City</label>
                    <input 
                      required
                      type="text" 
                      className="w-full bg-brand-dark border border-white/10 rounded-none px-4 py-3 focus:border-brand-cyan outline-none transition-all"
                      placeholder="Where is the magic happening?"
                      value={formData.venue}
                      onChange={e => setFormData({...formData, venue: e.target.value})}
                    />
                 </div>
              </div>
              <div className="flex gap-4">
                <button type="button" onClick={prevStep} className="btn-secondary flex-1">Back</button>
                <button type="button" onClick={nextStep} className="btn-primary flex-[2]" disabled={!formData.date || !formData.venue}>Continue</button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div 
              key="step3"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3 mb-6 text-brand-cyan">
                <Package size={24} />
                <h3 className="text-xl font-black uppercase italic tracking-tight">Select Services</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                 {services.map(s => (
                   <div 
                    key={s}
                    onClick={() => toggleService(s)}
                    className={`cursor-pointer border p-4 rounded-none text-xs font-bold uppercase tracking-widest text-center transition-all ${
                      formData.services.includes(s) 
                      ? "border-brand-cyan bg-brand-cyan/10 text-brand-cyan" 
                      : "border-white/10 hover:border-white/30"
                    }`}
                   >
                     {s}
                   </div>
                 ))}
              </div>
              <div>
                 <label className="block text-xs uppercase tracking-widest font-bold text-white/40 mb-2">Additional Comments (Optional)</label>
                 <textarea 
                   rows={3}
                   className="w-full bg-brand-dark border border-white/10 rounded-none px-4 py-3 focus:border-brand-cyan outline-none transition-all"
                   placeholder="Any specific requests or questions?"
                   value={formData.message}
                   onChange={e => setFormData({...formData, message: e.target.value})}
                 />
              </div>
               {error && (
                 <div className="p-4 bg-red-500/10 border border-red-500/50 text-red-500 text-sm font-bold uppercase tracking-wider mb-6">
                   {error}
                 </div>
               )}
               <div className="flex gap-4">
                 <button type="button" onClick={prevStep} className="btn-secondary flex-1" disabled={loading}>Back</button>
                 <button type="submit" className="btn-primary flex-[2]" disabled={loading}>
                   {loading ? "Sending..." : "Send Request"} <Send size={18} />
                 </button>
               </div>
            </motion.div>
          )}
        </AnimatePresence>
      </form>

      {/* Safety Net / Trust */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center opacity-60">
        <div className="flex flex-col items-center gap-2">
           <div className="text-brand-cyan font-black uppercase text-xs tracking-widest italic leading-none mb-1">24hr Response</div>
           <p className="text-[10px] uppercase font-bold tracking-tight">Guaranteed fast response</p>
        </div>
        <div className="flex flex-col items-center gap-2">
           <div className="text-brand-cyan font-black uppercase text-xs tracking-widest italic leading-none mb-1">Zero Hidden Fees</div>
           <p className="text-[10px] uppercase font-bold tracking-tight">Transparent flat-rate pricing</p>
        </div>
        <div className="flex flex-col items-center gap-2">
           <div className="text-brand-cyan font-black uppercase text-xs tracking-widest italic leading-none mb-1">Production Experts</div>
           <p className="text-[10px] uppercase font-bold tracking-tight">Decades of collective experience</p>
        </div>
      </div>
    </div>
  );
}
