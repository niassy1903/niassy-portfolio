
import React from 'react';
import { motion } from 'framer-motion';
import { EDUCATION, EXPERIENCE, SKILLS } from '../constants';
import { Download, Briefcase, GraduationCap, Globe2, Heart } from 'lucide-react';

export const Resume: React.FC = () => {
  return (
    <section id="resume" className="py-32 px-6 bg-slate-50 scroll-mt-20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <span className="text-[#149ddd] font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Parcours</span>
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter">Mon Curriculum.</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Formations */}
          <div>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-md text-[#149ddd]">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-2xl font-black text-slate-900">Formations</h3>
            </div>
            
            <div className="space-y-8 border-l-4 border-white ml-6 pl-8">
              {EDUCATION.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative pb-4"
                >
                  <div className="absolute -left-[40px] top-1 w-6 h-6 rounded-full bg-[#149ddd] border-4 border-slate-50" />
                  <span className="text-xs font-black text-[#149ddd] uppercase tracking-widest">{item.year}</span>
                  <h4 className="text-xl font-bold text-slate-900 mt-2">{item.degree}</h4>
                  <p className="text-slate-500 font-bold mb-3">{item.institution}</p>
                  {item.description && <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Expériences */}
          <div>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-md text-[#149ddd]">
                <Briefcase size={24} />
              </div>
              <h3 className="text-2xl font-black text-slate-900">Expériences</h3>
            </div>

            <div className="space-y-8 border-l-4 border-white ml-6 pl-8">
              {EXPERIENCE.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative pb-4"
                >
                  <div className="absolute -left-[40px] top-1 w-6 h-6 rounded-full bg-slate-900 border-4 border-slate-50" />
                  <span className="text-xs font-black text-slate-400 uppercase tracking-widest">{item.period}</span>
                  <h4 className="text-xl font-bold text-slate-900 mt-2">{item.title}</h4>
                  <p className="text-[#149ddd] font-bold mb-4">{item.company}</p>
                  <ul className="space-y-2">
                    {item.description.map((desc, idx) => (
                      <li key={idx} className="text-slate-500 text-sm flex gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-200 mt-2 shrink-0" />
                        {desc}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-24 grid md:grid-cols-3 gap-12">
           {/* Compétences (Expanded list) */}
           <div className="md:col-span-2">
            <h3 className="text-xl font-black text-slate-900 mb-8">Expertises Techniques</h3>
            <div className="grid sm:grid-cols-2 gap-8">
              {SKILLS.map((category, idx) => (
                <div key={idx} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                  <h4 className="text-[#149ddd] font-black text-xs uppercase tracking-widest mb-4">{category.title}</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <span key={i} className="px-3 py-1 bg-slate-50 text-slate-500 rounded-lg text-[10px] font-bold border border-slate-100">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
           </div>

           {/* Langues & Intérêts */}
           <div className="space-y-12">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Globe2 className="text-[#149ddd]" size={20} />
                  <h3 className="text-xl font-black text-slate-900">Langues</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs font-bold mb-1">
                      <span>FRANÇAIS</span>
                      <span className="text-[#149ddd]">COURANT</span>
                    </div>
                    <div className="h-1.5 bg-white rounded-full overflow-hidden">
                      <div className="h-full bg-[#149ddd] w-full" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-bold mb-1">
                      <span>ANGLAIS</span>
                      <span className="text-slate-400">DÉBUTANT</span>
                    </div>
                    <div className="h-1.5 bg-white rounded-full overflow-hidden">
                      <div className="h-full bg-[#149ddd] w-1/3" />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Heart className="text-[#149ddd]" size={20} />
                  <h3 className="text-xl font-black text-slate-900">Loisirs</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {["Football", "Photographie", "Lecture", "Technologie"].map((hobby, i) => (
                    <span key={i} className="px-4 py-2 bg-white rounded-xl text-xs font-bold text-slate-600 shadow-sm border border-slate-100 italic">
                      # {hobby}
                    </span>
                  ))}
                </div>
              </div>
           </div>
        </div>

        <div className="mt-20 flex justify-center">
          <a 
            href="https://drive.google.com/file/d/1LDZ0ncVYOyRfj4l4ezTZZNJ1nNsYAQx3/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 bg-slate-900 text-white rounded-full font-black text-sm hover:bg-[#149ddd] transition-all shadow-xl hover:scale-105 active:scale-95"
          >
            <Download size={18} /> Télécharger mon CV Complet (PDF)
          </a>
        </div>
      </div>
    </section>
  );
};
