
import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';
import { Target, Zap, Shield, Cpu, Quote } from 'lucide-react';

export const About: React.FC = () => {
  const stats = [
    { label: "Projets", val: "8+", icon: <Zap className="text-yellow-500" /> },
    { label: "Domaines", val: "3 axes", icon: <Target className="text-blue-700" /> },
    { label: "Missions terrain", val: "2025+", icon: <Shield className="text-green-600" /> },
    { label: "Systèmes", val: "IoT", icon: <Cpu className="text-blue-500" /> },
  ];

  return (
    <section id="about" className="py-32 px-6 scroll-mt-20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* Main Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bento-card p-12 rounded-[40px]"
          >
            <span className="text-[#1557c0] font-black uppercase tracking-[0.3em] text-[10px] mb-6 block">Mon ADN</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tighter">
              Bâtir des ponts entre le <span className="italic font-light">code</span> et la <span className="text-[#1557c0]">réalité physique.</span>
            </h2>
            <p className="text-xl text-slate-500 font-light leading-relaxed mb-8">
              {PERSONAL_INFO.bio}
            </p>
            <div className="flex gap-4">
              <div className="w-12 h-1 bg-[#1557c0] rounded-full"></div>
              <p className="text-sm font-bold text-slate-500 italic">Curiosité, rigueur et impact concret.</p>
            </div>
          </motion.div>

          {/* Image/Profile Bento */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-5 rounded-[40px] overflow-hidden group relative"
          >
            <img 
              src="/assets/niassy.jpeg" 
              alt="Profil" 
              loading="lazy"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1557c0]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>

          <motion.figure
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-12 relative overflow-hidden rounded-[32px] bg-[#102f69] px-8 py-10 text-white md:px-14 md:py-12"
          >
            <Quote aria-hidden="true" className="absolute -right-3 -top-4 h-32 w-32 rotate-12 text-white/5" />
            <div className="relative max-w-4xl">
              <Quote aria-hidden="true" size={24} className="mb-5 text-[#f2c969]" />
              <blockquote className="text-2xl font-semibold leading-relaxed tracking-tight md:text-3xl">« {PERSONAL_INFO.quote} »</blockquote>
              <figcaption className="mt-6 text-[10px] font-extrabold uppercase tracking-[.25em] text-blue-200">Ma vision du numérique · {PERSONAL_INFO.name}</figcaption>
            </div>
          </motion.figure>

          {/* Stats Bento Grid */}
          <div className="lg:col-span-12 grid grid-cols-2 md:grid-cols-4 gap-8 mt-4">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bento-card p-8 rounded-[32px] flex flex-col items-center text-center group"
              >
                <div className="mb-4 p-3 bg-white rounded-2xl shadow-sm group-hover:scale-110 transition-transform">
                  {s.icon}
                </div>
                <div className="text-3xl font-black text-slate-900 mb-1">{s.val}</div>
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
