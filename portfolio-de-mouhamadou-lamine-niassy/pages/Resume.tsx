import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { EDUCATION, EXPERIENCE, PERSONAL_INFO, SKILLS } from '../constants';
import { ArrowDown, ArrowUpRight, Briefcase, Code2, Cpu, Download, GraduationCap, Heart, Network, Server, ShieldCheck, Sparkles } from 'lucide-react';

const skillIcons = [Code2, Server, Network, ShieldCheck, Cpu];

export const Resume: React.FC = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="resume" className="resume-section relative overflow-hidden px-6 py-24 md:px-10 md:py-32">
      <div className="resume-grid-pattern" aria-hidden="true" />
      <div className="container relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: .25 }}
          className="resume-cover mb-16 grid overflow-hidden rounded-[2rem] md:grid-cols-[.9fr_1.1fr] md:rounded-[2.5rem]"
        >
          <div className="resume-cover-copy relative z-10 flex flex-col items-start justify-center px-7 py-10 md:px-12 md:py-14">
            <div className="resume-eyebrow"><span className="resume-eyebrow-spark"><Sparkles size={12} /></span> Parcours · Compétences · Projets</div>
            <h2 className="mt-6 text-4xl font-black leading-[.98] tracking-[-.06em] text-white md:text-6xl">Mon CV,<br /><span>du code au terrain.</span></h2>
            <p className="mt-5 max-w-lg text-sm leading-7 text-blue-100/85 md:text-base">Développement fullstack, réseaux, vidéosurveillance et IoT : découvrez les expériences et formations qui façonnent mon profil.</p>
            <div className="mt-7 flex flex-wrap gap-2">
              {['Web & mobile', 'Réseaux & télécoms', 'IoT'].map((item) => <span className="resume-cover-chip" key={item}>{item}</span>)}
            </div>
            <a href="https://drive.google.com/file/d/1VL5_uLV-E0_7cwjUvKBYnLQZao1FZJ65/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="resume-download mt-9">
              <Download size={17} /> Ouvrir mon CV PDF <ArrowUpRight size={15} />
            </a>
          </div>

          <div className="resume-machine" role="img" aria-label="Illustration vectorielle animée d’un ordinateur, d’un clavier et d’une souris affichant du code">
            <div className="machine-orbit machine-orbit--one" />
            <div className="machine-orbit machine-orbit--two" />
            <span className="machine-label machine-label--top"><span /> PORTFOLIO / 2027</span>
            <svg className="machine-svg" viewBox="0 0 590 370" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="laptopEdge" x1="88" y1="282" x2="477" y2="322" gradientUnits="userSpaceOnUse"><stop stopColor="#91B9FF"/><stop offset="1" stopColor="#396DC3"/></linearGradient>
                <linearGradient id="screenGlow" x1="128" y1="49" x2="438" y2="253" gradientUnits="userSpaceOnUse"><stop stopColor="#142F5F"/><stop offset="1" stopColor="#0C1831"/></linearGradient>
                <filter id="machineShadow" x="45" y="14" width="505" height="356" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse"><feGaussianBlur stdDeviation="15"/></filter>
              </defs>
              <ellipse cx="300" cy="324" rx="210" ry="20" fill="#060E20" opacity=".62" filter="url(#machineShadow)" />
              <g className="machine-laptop">
                <rect x="116" y="33" width="352" height="232" rx="17" fill="#101A2C" stroke="#759FEC" strokeWidth="2" />
                <rect x="128" y="46" width="328" height="205" rx="10" fill="url(#screenGlow)" />
                <path d="M128 58a12 12 0 0 1 12-12h304a12 12 0 0 1 12 12v15H128V58Z" fill="#1A2D4C" />
                <circle cx="146" cy="60" r="4" fill="#F27D7D"/><circle cx="160" cy="60" r="4" fill="#EBC065"/><circle cx="174" cy="60" r="4" fill="#54C89B"/>
                <text x="202" y="64" fill="#9EB8E2" fontFamily="monospace" fontSize="8">niassy.dev — code workspace</text>
                <text x="151" y="103" fill="#7DE0BB" fontFamily="monospace" fontSize="11">const</text><text x="187" y="103" fill="#B8CFFF" fontFamily="monospace" fontSize="11">niassy = &#123;</text>
                <text x="169" y="125" fill="#87B8FF" fontFamily="monospace" fontSize="10">role:</text><text x="203" y="125" fill="#F1CE7E" fontFamily="monospace" fontSize="10">'fullstack developer',</text>
                <text x="169" y="147" fill="#87B8FF" fontFamily="monospace" fontSize="10">focus:</text><text x="207" y="147" fill="#F1CE7E" fontFamily="monospace" fontSize="10">['web', 'IoT', 'réseaux'],</text>
                <text x="169" y="169" fill="#87B8FF" fontFamily="monospace" fontSize="10">mission:</text><text x="222" y="169" fill="#B8CFFF" fontFamily="monospace" fontSize="10">'créer du concret'</text>
                <text x="151" y="191" fill="#B8CFFF" fontFamily="monospace" fontSize="11">&#125;</text>
                <text x="151" y="221" fill="#7DE0BB" fontFamily="monospace" fontSize="10">npm run</text><text x="205" y="221" fill="#E7BE66" fontFamily="monospace" fontSize="10">build</text>
                <rect className="machine-cursor" x="241" y="213" width="6" height="11" rx="1" fill="#75A9FF" />
                <path d="m83 272 35-9h352l37 9c5 2 6 8 1 11l-25 16c-3 2-6 3-10 3H116c-4 0-7-1-10-3l-24-16c-5-3-4-9 1-11Z" fill="url(#laptopEdge)" stroke="#A5C5FF" strokeWidth="1.5" />
                <path d="m118 270 17-4h320l18 4-18 22H137l-19-22Z" fill="#172944" />
                <g className="machine-keys" fill="#7392C4">
                  <rect x="145" y="270" width="19" height="4" rx="1"/><rect x="168" y="270" width="19" height="4" rx="1"/><rect x="191" y="270" width="19" height="4" rx="1"/><rect x="214" y="270" width="19" height="4" rx="1"/><rect x="237" y="270" width="19" height="4" rx="1"/><rect x="260" y="270" width="19" height="4" rx="1"/><rect x="283" y="270" width="19" height="4" rx="1"/><rect x="306" y="270" width="19" height="4" rx="1"/><rect x="329" y="270" width="19" height="4" rx="1"/><rect x="352" y="270" width="19" height="4" rx="1"/><rect x="375" y="270" width="19" height="4" rx="1"/><rect x="398" y="270" width="19" height="4" rx="1"/><rect x="421" y="270" width="19" height="4" rx="1"/>
                  <rect x="151" y="278" width="21" height="4" rx="1"/><rect x="176" y="278" width="21" height="4" rx="1"/><rect x="201" y="278" width="21" height="4" rx="1"/><rect x="226" y="278" width="21" height="4" rx="1"/><rect x="251" y="278" width="21" height="4" rx="1"/><rect x="276" y="278" width="21" height="4" rx="1"/><rect x="301" y="278" width="21" height="4" rx="1"/><rect x="326" y="278" width="21" height="4" rx="1"/><rect x="351" y="278" width="21" height="4" rx="1"/><rect x="376" y="278" width="21" height="4" rx="1"/><rect x="401" y="278" width="21" height="4" rx="1"/>
                  <rect className="machine-key-active" x="301" y="278" width="21" height="4" rx="1" />
                  <rect x="175" y="286" width="32" height="3" rx="1"/><rect x="212" y="286" width="32" height="3" rx="1"/><rect x="249" y="286" width="92" height="3" rx="1"/><rect x="346" y="286" width="32" height="3" rx="1"/><rect x="383" y="286" width="32" height="3" rx="1"/>
                </g>
                <path d="M488 284c0-11 9-19 19-19s19 8 19 19v15h-38v-15Z" fill="#EDF3FF" stroke="#80A8EB" strokeWidth="2" />
                <path d="M507 266v10" stroke="#80A8EB" strokeWidth="2" />
                <circle className="machine-mouse-click" cx="507" cy="280" r="3.5" fill="#F2C969" />
                <path d="M526 296c10 8 15 14 5 20" stroke="#80A8EB" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 4" />
              </g>
              <circle cx="500" cy="95" r="28" fill="#4C7ED1" opacity=".16" className="machine-signal" />
              <path d="m490 95 7 7 14-16" stroke="#9FC1FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="machine-float machine-float--code"><Code2 size={15} /> React · Node.js</div>
            <div className="machine-float machine-float--iot"><Cpu size={15} /> IoT · Réseaux</div>
            <span className="machine-label machine-label--bottom">BUILD SOMETHING THAT MATTERS <ArrowDown size={12} /></span>
          </div>
        </motion.div>

        <div className="resume-section-heading mb-10 flex flex-col justify-between gap-4 md:mb-12 md:flex-row md:items-end">
          <div><span className="resume-section-kicker">Le chemin parcouru</span><h3>Expériences & formation</h3></div>
          <p>Un parcours entre apprentissage, projets numériques et interventions terrain.</p>
        </div>

        <div className="resume-history-grid mb-20 grid gap-6 lg:grid-cols-2 lg:gap-8">
          <section className="resume-history-panel">
            <div className="resume-panel-title"><span className="resume-title-icon"><Briefcase size={19} /></span><div><span>01 / PRATIQUE</span><h4>Expériences & projets</h4></div></div>
            <div className="resume-timeline">
              {EXPERIENCE.map((item, index) => (
                <motion.article
                  key={`${item.company}-${item.period}`}
                  initial={reduceMotion ? false : { opacity: 0, x: -14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: .2 }}
                  transition={{ delay: reduceMotion ? 0 : index * .09, duration: .45 }}
                  className="resume-timeline-item"
                >
                  <span className="resume-timeline-node"><span /></span>
                  <span className="resume-date">{item.period}</span>
                  <h5>{item.title}</h5>
                  <p className="resume-company">{item.company}</p>
                  <ul>{item.description.map((description) => <li key={description}>{description}</li>)}</ul>
                </motion.article>
              ))}
            </div>
          </section>

          <section className="resume-history-panel">
            <div className="resume-panel-title"><span className="resume-title-icon resume-title-icon--gold"><GraduationCap size={20} /></span><div><span>02 / APPRENTISSAGE</span><h4>Formations</h4></div></div>
            <div className="resume-timeline resume-timeline--education">
              {EDUCATION.map((item, index) => (
                <motion.article
                  key={`${item.institution}-${item.year}`}
                  initial={reduceMotion ? false : { opacity: 0, x: 14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: .2 }}
                  transition={{ delay: reduceMotion ? 0 : index * .08, duration: .45 }}
                  className="resume-timeline-item"
                >
                  <span className="resume-timeline-node"><span /></span>
                  <span className="resume-date">{item.year}</span>
                  <h5>{item.degree}</h5>
                  <p className="resume-company">{item.institution}</p>
                  {item.description && <p className="resume-education-detail">{item.description}</p>}
                </motion.article>
              ))}
            </div>
          </section>
        </div>

        <div className="resume-section-heading mb-10 flex flex-col justify-between gap-4 md:mb-12 md:flex-row md:items-end">
          <div><span className="resume-section-kicker">Ma boîte à outils</span><h3>Compétences techniques</h3></div>
          <p>Des briques complémentaires pour concevoir, connecter et maintenir des solutions.</p>
        </div>

        <div className="resume-skill-grid mb-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((category, index) => {
            const Icon = skillIcons[index] || Sparkles;
            return (
              <motion.article
                key={category.title}
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: .25 }}
                transition={{ delay: reduceMotion ? 0 : (index % 3) * .08, duration: .4 }}
                className="resume-skill-card"
              >
                <div className="resume-skill-card-top"><span className="resume-skill-icon"><Icon size={19} /></span><span className="resume-skill-index">0{index + 1}</span></div>
                <h4>{category.title}</h4>
                <div className="resume-skill-tags">{category.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
              </motion.article>
            );
          })}
        </div>

        <div className="resume-extras grid gap-5 md:grid-cols-[1fr_1.25fr_1fr]">
          <div className="resume-extra-card">
            <span className="resume-extra-icon"><Sparkles size={17} /></span><div><span>LANGUES</span><h4>Français courant</h4><p>Anglais technique, lecture et documentation</p></div>
          </div>
          <div className="resume-extra-card resume-extra-card--quote">
            <span className="resume-quote-mark">“</span><div><span>MON APPROCHE</span><h4>Curieux, rigoureux, toujours prêt à apprendre.</h4><p>Du travail d’équipe au dépannage sur site, je m’adapte au besoin du projet.</p></div>
          </div>
          <div className="resume-extra-card">
            <span className="resume-extra-icon resume-extra-icon--gold"><Heart size={17} /></span><div><span>EN DEHORS DU CODE</span><h4>Football · photo</h4><p>Lecture & nouvelles technologies</p></div>
          </div>
        </div>

        <div className="resume-footer-note mt-10"><span><span className="resume-footer-pulse" /> {PERSONAL_INFO.address}</span><span>Conçu avec méthode & curiosité <Sparkles size={13} /></span></div>
      </div>
    </section>
  );
};
