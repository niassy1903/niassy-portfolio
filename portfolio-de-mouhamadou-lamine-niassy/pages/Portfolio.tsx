import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ArrowDownRight, ArrowUpRight, Github, Lock, Sparkles } from 'lucide-react';

export const Portfolio: React.FC = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="portfolio" className="projects-section relative overflow-hidden px-6 py-28 md:px-10 md:py-36">
      <div className="projects-orbit projects-orbit--one" aria-hidden="true" />
      <div className="projects-orbit projects-orbit--two" aria-hidden="true" />
      <div className="container relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: .4 }}
          className="projects-heading mb-14 flex flex-col justify-between gap-7 md:mb-16 md:flex-row md:items-end"
        >
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/75 px-4 py-2 text-[10px] font-black uppercase tracking-[.22em] text-blue-800 shadow-sm">
              <Sparkles size={13} className="text-[#c89020]" /> Projets sélectionnés · {String(PROJECTS.length).padStart(2, '0')}
            </div>
            <h2 className="text-5xl font-black leading-[.95] tracking-[-.06em] text-slate-950 md:text-7xl">
              Du concret,<br /><span className="projects-heading-accent">ligne après ligne.</span>
            </h2>
          </div>
          <div className="max-w-sm md:pb-1">
            <p className="text-base leading-7 text-slate-600">Des applications web aux systèmes connectés, voici quelques projets pensés et réalisés pour répondre à des besoins réels.</p>
            <div className="mt-5 flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[.2em] text-blue-800"><span className="projects-live-dot" /> Web · IoT · Solutions métier</div>
          </div>
        </motion.div>

        <div className="projects-grid grid gap-6 md:grid-cols-2 md:gap-7">
          {PROJECTS.map((project, index) => {
            const isFeatured = index === 0;
            const hasRepository = Boolean(project.github?.includes('github.com'));
            const primaryUrl = project.demo || project.github;
            const primaryLabel = project.demo ? 'Voir le projet' : hasRepository ? 'Code source' : 'Découvrir';

            return (
              <motion.article
                key={project.id}
                initial={reduceMotion ? false : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: .15 }}
                transition={{ duration: .55, delay: reduceMotion ? 0 : Math.min(index % 2, 1) * .1, ease: [.2, .8, .2, 1] }}
                className={`project-card group ${isFeatured ? 'project-card--featured' : ''}`}
              >
                <div className="project-visual">
                  {project.image ? (
                    <img src={project.image} alt={`${project.title} — aperçu`} loading={index === 0 ? 'eager' : 'lazy'} />
                  ) : (
                    <div className="project-image-fallback"><Sparkles size={38} /><span>{project.title}</span></div>
                  )}
                  <div className="project-image-shade" aria-hidden="true" />
                  <span className="project-index">{String(index + 1).padStart(2, '0')}</span>
                  <span className="project-category"><span />{project.tags?.[0] || 'Projet'}</span>
                  <div className="project-visual-caption" aria-hidden="true"><span>Explorer le projet</span><ArrowDownRight size={19} /></div>
                </div>

                <div className="project-copy">
                  <div className="project-copy-top">
                    <div>
                      <p className="project-kicker">Projet {String(index + 1).padStart(2, '0')} <span>—</span> {project.tags?.slice(0, 2).join(' · ')}</p>
                      <h3>{project.title}</h3>
                    </div>
                    <span className="project-arrow" aria-hidden="true"><ArrowUpRight size={21} /></span>
                  </div>
                  <p className="project-description">{project.description}</p>
                  <div className="project-card-bottom">
                    <div className="project-tags" aria-label="Technologies utilisées">
                      {project.tags?.slice(0, isFeatured ? 4 : 3).map((tag) => <span key={tag}>{tag}</span>)}
                    </div>
                    <div className="project-actions">
                      {primaryUrl && (
                        <a href={primaryUrl} target="_blank" rel="noopener noreferrer" className="project-link project-link--primary">
                          {primaryLabel}<ArrowUpRight size={15} />
                        </a>
                      )}
                      {hasRepository && primaryUrl !== project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link project-link--icon" aria-label={`Code source de ${project.title}`} title="Code source"><Github size={16} /></a>
                      )}
                      {project.githubPrivate && <span className="project-link project-link--private" title="Code source privé"><Lock size={14} />Privé</span>}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="projects-contact mt-14 flex flex-col items-start justify-between gap-6 rounded-[2rem] px-7 py-8 md:mt-16 md:flex-row md:items-center md:px-10 md:py-9"
        >
          <div><span>Le prochain peut être le vôtre.</span><p>Parlons de votre idée et construisons quelque chose d’utile.</p></div>
          <a href="#contact" className="projects-contact-link">Démarrer une conversation <ArrowUpRight size={17} /></a>
        </motion.div>
      </div>
    </section>
  );
};
