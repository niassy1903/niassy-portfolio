
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

export const Home: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const roles = ["Développeur Fullstack", "Spécialiste IoT", "Ingénieur Digital"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[roleIndex];
      if (isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        setTypingSpeed(50);
      } else {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        setTypingSpeed(100);
      }

      if (!isDeleting && displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setRoleIndex((roleIndex + 1) % roles.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, typingSpeed]);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col items-center text-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 px-6 py-2 bg-blue-50/50 backdrop-blur-md border border-blue-100 text-[#0066FF] rounded-full text-[10px] font-black uppercase tracking-[0.4em] flex items-center gap-2"
          >
            <Sparkles size={14} /> Ouvert à de nouveaux défis
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="text-6xl md:text-[100px] font-black text-slate-900 mb-8 tracking-[-0.05em] leading-[0.9]"
          >
            Coder l'avenir <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0066FF] to-[#60A5FA] text-glow italic">intelligent.</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-3xl text-slate-400 font-light mb-16 max-w-2xl leading-relaxed"
          >
            Mouhamadou Lamine Niassy, <br className="md:hidden" />
            <span className="text-slate-900 font-bold italic tracking-tight">{displayText}</span>
            <span className="animate-pulse text-[#0066FF]">|</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 items-center"
          >
            <a href="#portfolio" className="btn-percutant px-12 py-5 bg-[#0066FF] text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-slate-900 transition-all shadow-2xl shadow-blue-200">
              Voir mes projets
            </a>
            <a href="#contact" className="group flex items-center gap-3 px-8 py-5 text-slate-900 font-black text-sm uppercase tracking-widest hover:text-[#0066FF] transition-all">
              Me contacter <ArrowRight className="group-hover:translate-x-2 transition-transform" size={18} />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Floating decor */}
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-20 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl"
      />
      <motion.div 
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"
      />
    </section>
  );
};
