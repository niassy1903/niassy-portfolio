import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ExternalLink, Github, Lock } from 'lucide-react';

export const Portfolio: React.FC = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <section id="portfolio" className="py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16">
          {PROJECTS.map((project, i) => {
            const isActive = activeProject === project.id;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative"
                onClick={() =>
                  setActiveProject(isActive ? null : project.id)
                }
              >
                <div className="relative aspect-[16/10] rounded-[56px] overflow-hidden shadow-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />

                  {/* Overlay */}
                  <div
                    className={`
                      absolute inset-0 bg-slate-900/90
                      flex flex-col items-center justify-center
                      transition-opacity duration-500
                      ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}
                    `}
                  >
                    <div className="flex gap-6 mb-10">

                      {/* GITHUB */}
                      {project.github && !project.githubPrivate && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            w-16 h-16 bg-white rounded-2xl
                            flex items-center justify-center
                            text-slate-900
                            hover:bg-[#0066FF] hover:text-white
                            transition-all
                            animate-pulse hover:animate-none
                            shadow-lg
                          "
                        >
                          <Github size={28} />
                        </a>
                      )}

                      {/* GITHUB PRIVÉ */}
                      {project.githubPrivate && (
                        <div
                          title="Repository privé"
                          className="
                            w-16 h-16 bg-slate-600/50 rounded-2xl
                            flex items-center justify-center
                            text-white cursor-not-allowed
                            shadow-inner
                          "
                        >
                          <Lock size={26} />
                        </div>
                      )}

                      {/* DEMO */}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            w-16 h-16 bg-[#0066FF] rounded-2xl
                            flex items-center justify-center
                            text-white
                            hover:bg-white hover:text-slate-900
                            transition-all
                            shadow-lg shadow-blue-500/40
                          "
                        >
                          <ExternalLink size={28} />
                        </a>
                      )}
                    </div>

                    {/* TAGS */}
                    <div className="flex flex-wrap justify-center gap-2">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-1.5 bg-white/10 text-white rounded-full text-[9px] font-black uppercase"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* TEXTE */}
                <div className="mt-10 px-6 flex justify-between">
                  <div>
                    <h3 className="text-3xl font-black">{project.title}</h3>
                    <p className="text-slate-400 text-sm">{project.description}</p>
                  </div>
                  <div className="text-slate-200 text-7xl font-black italic">
                    {i + 1}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};