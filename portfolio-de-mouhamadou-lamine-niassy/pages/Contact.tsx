
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { PERSONAL_INFO } from '../constants';
import { Mail, Phone, Send, Linkedin, Github, Instagram, MapPin, CheckCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
    setTimeout(() => setIsSent(false), 5000);
  };

  return (
    <section id="contact" className="py-32 px-6 bg-slate-50 scroll-mt-20 relative overflow-hidden">
      {/* Fond décoratif */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-100/30 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto max-w-6xl">
        <div className="mb-20 text-center">
          <span className="text-[#0066FF] font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Connexion</span>
          <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter">Écrivons le <span className="text-[#0066FF]">Futur.</span></h2>
        </div>
        
        <div className="bg-white rounded-[72px] p-8 md:p-24 border border-white shadow-2xl shadow-blue-100/50 grid lg:grid-cols-2 gap-24 relative overflow-hidden">
          
          <div className="relative z-10 flex flex-col justify-between">
            <div>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight tracking-tighter">Une idée ? <br /><span className="text-[#0066FF] italic">Discutons-en.</span></h3>
              <p className="text-lg text-slate-500 font-medium mb-12 leading-relaxed max-w-sm">
                Je suis toujours ouvert aux projets innovants et aux défis technologiques ambitieux.
              </p>
              
              <div className="space-y-10">
                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-16 h-16 bg-blue-50 rounded-[20px] flex items-center justify-center text-[#0066FF] group-hover:bg-[#0066FF] group-hover:text-white transition-all duration-500 shadow-sm"><Mail size={24} /></div>
                  <div>
                    <p className="text-[9px] text-slate-400 font-black uppercase tracking-widest mb-1">Email direct</p>
                    <p className="text-lg font-bold text-slate-900 group-hover:text-[#0066FF] transition-colors">{PERSONAL_INFO.email}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-16 h-16 bg-slate-50 rounded-[20px] flex items-center justify-center text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-all duration-500 shadow-sm"><Phone size={24} /></div>
                  <div>
                    <p className="text-[9px] text-slate-400 font-black uppercase tracking-widest mb-1">Téléphone</p>
                    <p className="text-lg font-bold text-slate-900 group-hover:text-slate-900 transition-colors">{PERSONAL_INFO.phone}</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-16 h-16 bg-blue-50/50 rounded-[20px] flex items-center justify-center text-blue-400 transition-all"><MapPin size={24} /></div>
                  <div>
                    <p className="text-[9px] text-slate-400 font-black uppercase tracking-widest mb-1">Localisation</p>
                    <p className="text-lg font-bold text-slate-900 italic">{PERSONAL_INFO.address.split(',')[2]}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 flex gap-5">
              {[
                { icon: <Linkedin size={22} />, link: PERSONAL_INFO.socials.linkedin, color: "hover:bg-blue-600" },
                { icon: <Github size={22} />, link: PERSONAL_INFO.socials.github, color: "hover:bg-slate-900" },
                { icon: <Instagram size={22} />, link: PERSONAL_INFO.socials.instagram, color: "hover:bg-rose-500" }
              ].map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`w-14 h-14 bg-slate-50 text-slate-400 rounded-2xl flex items-center justify-center transition-all duration-500 hover:text-white ${social.color} hover:scale-110 active:scale-95 shadow-sm`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Formulaire */}
          <div className="relative z-10 bg-slate-50/50 p-10 md:p-14 rounded-[48px] border border-white">
            {isSent ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center p-8"
              >
                <div className="w-20 h-20 bg-[#0066FF] rounded-full flex items-center justify-center text-white mb-8 shadow-2xl shadow-blue-500/40">
                  <CheckCircle size={40} />
                </div>
                <h4 className="text-3xl font-black text-slate-900 mb-4 tracking-tighter">C'est envoyé !</h4>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">Merci pour votre confiance. <br />Je vous répondrai sous 24h.</p>
              </motion.div>
            ) : (
              <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="space-y-3">
                  <label className="text-[9px] font-black text-slate-400 ml-5 uppercase tracking-widest">Votre Nom</label>
                  <input required type="text" placeholder="Ex: niassy lamine" className="w-full px-8 py-5 bg-white border-2 border-transparent focus:border-[#0066FF] rounded-3xl outline-none transition-all font-bold text-slate-900 shadow-sm" />
                </div>
                
                <div className="space-y-3">
                  <label className="text-[9px] font-black text-slate-400 ml-5 uppercase tracking-widest">Votre Email</label>
                  <input required type="email" placeholder="nom@exemple.com" className="w-full px-8 py-5 bg-white border-2 border-transparent focus:border-[#0066FF] rounded-3xl outline-none transition-all font-bold text-slate-900 shadow-sm" />
                </div>
                
                <div className="space-y-3">
                  <label className="text-[9px] font-black text-slate-400 ml-5 uppercase tracking-widest">Votre Message</label>
                  <textarea required rows={5} placeholder="Décrivez brièvement votre projet..." className="w-full px-8 py-5 bg-white border-2 border-transparent focus:border-[#0066FF] rounded-3xl outline-none transition-all font-bold text-slate-900 resize-none shadow-sm"></textarea>
                </div>
                
                <button type="submit" className="group w-full py-6 bg-slate-900 text-white rounded-[28px] font-black text-sm shadow-2xl shadow-slate-200 hover:bg-[#0066FF] transition-all flex items-center justify-center gap-4 active:scale-[0.98]">
                  Envoyer le message <Send size={20} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
