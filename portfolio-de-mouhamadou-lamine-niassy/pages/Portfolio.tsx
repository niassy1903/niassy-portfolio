
import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ExternalLink, Github } from 'lucide-react';

export const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-32 px-6 scroll-mt-20 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-24 text-center relative">
          <motion.span 
            initial={{ opacity: 0, letterSpacing: '1em' }}
            whileInView={{ opacity: 1, letterSpacing: '0.4em' }}
            className="text-[#0066FF] font-black uppercase text-[10px] mb-4 block"
          >
            Réalisations
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black text-slate-900 tracking-tighter"
          >
            L'Impact par la <span className="text-[#0066FF] italic">Preuve.</span>
          </motion.h2>
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-slate-50 text-[10rem] font-black -z-10 select-none opacity-50">
            WORKS
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {PROJECTS.map((project, i) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group relative"
            >
              <div className="relative aspect-[16/10] rounded-[56px] overflow-hidden bg-slate-100 shadow-2xl transition-all duration-700 group-hover:-translate-y-6 group-hover:shadow-blue-200/50">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-slate-900/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-12 text-center backdrop-blur-sm">
                   <div className="flex gap-6 mb-10">
                     {project.github && (
                       <a href={project.github} className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-slate-900 hover:bg-[#0066FF] hover:text-white transition-all scale-0 group-hover:scale-100 delay-75 shadow-lg"><Github size={28} /></a>
                     )}
                     <a href={project.demo || "#"} className="w-16 h-16 bg-[#0066FF] rounded-2xl flex items-center justify-center text-white hover:bg-white hover:text-slate-900 transition-all scale-0 group-hover:scale-100 delay-150 shadow-lg shadow-blue-500/30"><ExternalLink size={28} /></a>
                   </div>
                   <div className="flex flex-wrap justify-center gap-2">
                     {project.tags.map((tag, idx) => (
                       <span key={idx} className="px-4 py-1.5 bg-white/10 text-white rounded-full text-[9px] font-black uppercase tracking-widest border border-white/20">
                         {tag}
                       </span>
                     ))}
                   </div>
                </div>
              </div>
              
              <div className="mt-10 px-6 flex justify-between items-end">
                <div className="max-w-[70%]">
                  <h3 className="text-3xl font-black text-slate-900 mb-3 tracking-tighter">{project.title}</h3>
                  <p className="text-slate-400 font-medium text-sm leading-relaxed">{project.description}</p>
                </div>
                <div className="text-slate-100 text-8xl font-black italic select-none leading-none opacity-40">
                  {i+1}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
