import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, ArrowRight, Code2, Cpu, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const moments = [
  { action: 'Je code', role: 'Développeur Fullstack', detail: 'Applications web et mobiles avec React, Angular, Laravel et Node.js.', motion: 'code' },
  { action: 'Je connecte', role: 'Spécialiste IoT', detail: 'ESP32, Arduino, Raspberry Pi et MQTT, du capteur au tableau de bord.', motion: 'jump' },
  { action: 'Je configure', role: 'Technicien réseaux & télécoms', detail: 'Routeurs, serveurs, DNS, DHCP, VPN et téléphonie VoIP.', motion: 'roll' },
  { action: 'J’interviens', role: 'Technicien vidéosurveillance', detail: 'Installation, entretien et dépannage chez les clients.', motion: 'wave' },
];

export const Home: React.FC = () => {
  const [momentIndex, setMomentIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const moment = moments[momentIndex];

  useEffect(() => {
    if (reduceMotion) return;
    const timer = window.setInterval(() => setMomentIndex((index) => (index + 1) % moments.length), 3600);
    return () => window.clearInterval(timer);
  }, [reduceMotion]);

  return (
    <section id="hero" className="hero-section relative flex min-h-screen items-center overflow-hidden px-6 pb-16 pt-28 md:px-10">
      <div className="hero-grid absolute inset-0" aria-hidden="true" />
      <div className="hero-orb hero-orb-one" aria-hidden="true" />
      <div className="hero-orb hero-orb-two" aria-hidden="true" />
      <div className="container relative z-10 mx-auto max-w-6xl">
        <div className="grid items-center gap-14 lg:grid-cols-[1.08fr_.92fr] lg:gap-16">
          <div className="order-2 lg:order-1">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .55 }} className="mb-8 inline-flex items-center gap-3 rounded-full border border-blue-200/70 bg-white/75 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[.22em] text-blue-800 shadow-sm backdrop-blur">
              <span className="availability-dot" /> Basé à Dakar · Disponible pour de nouveaux projets
            </motion.div>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .15 }} className="mb-4 text-xs font-extrabold uppercase tracking-[.22em] text-blue-700">Je suis Mouhamadou Lamine Niassy · Portfolio 2027</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .1 }} className="max-w-3xl text-5xl font-black leading-[.98] tracking-[-.065em] text-slate-950 sm:text-6xl md:text-7xl xl:text-[5.5rem]">
              Développeur <span className="hero-title-accent">Fullstack</span> & technicien réseaux.
            </motion.h1>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .35 }} className="mt-7 flex min-h-8 items-center gap-3 text-base font-semibold text-slate-600 md:text-lg">
              <span className="h-px w-8 bg-blue-500" /><span key={momentIndex} className="role-swap">{moment.role}</span>
              <Sparkles size={16} className="text-blue-500" aria-hidden="true" />
            </motion.div>
            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .45 }} className="mt-5 max-w-xl text-base leading-8 text-slate-600 md:text-lg">
              Du web aux objets connectés, je conçois des outils élégants et fiables, pensés pour résoudre des problèmes concrets.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .55 }} className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#portfolio" className="btn-percutant inline-flex items-center justify-center gap-3 rounded-2xl bg-blue-700 px-7 py-4 text-sm font-extrabold text-white shadow-xl shadow-blue-900/20 transition hover:-translate-y-1 hover:bg-blue-800">Découvrir mes projets <ArrowRight size={17} /></a>
              <a href="#contact" className="inline-flex items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white/70 px-7 py-4 text-sm font-extrabold text-slate-800 transition hover:-translate-y-1 hover:border-blue-300 hover:text-blue-700">Parlons de votre idée</a>
            </motion.div>
            <div className="mt-12 grid max-w-lg grid-cols-2 gap-4">
              <div className="hero-skill-chip"><Code2 size={17} /><span>Web & applications</span></div>
              <div className="hero-skill-chip"><Cpu size={17} /><span>IoT & systèmes</span></div>
            </div>
          </div>

          <motion.div initial={{ opacity: 0, scale: .94, x: 16 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: .8, delay: .2 }} className="order-1 mx-auto w-full max-w-[440px] lg:order-2 lg:max-w-none">
            <div className="portrait-stage relative mx-auto aspect-[.87] max-w-[430px]">
              <div className="portrait-backdrop absolute inset-[7%_5%_3%_12%] rounded-[2.5rem] bg-gradient-to-br from-blue-300 via-blue-600 to-blue-950" />
              <div className="portrait-frame absolute inset-[0_12%_9%_0] overflow-hidden rounded-[2.3rem] border-[7px] border-white shadow-[0_35px_90px_-35px_rgba(14,53,130,.55)]">
                <img src="/assets/niassy.jpeg" alt="Portrait de Mouhamadou Lamine Niassy" fetchPriority="high" className="h-full w-full object-cover object-top" />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-slate-950/65 to-transparent" />
                <div className="absolute bottom-5 left-5 text-white"><p className="text-[10px] font-bold uppercase tracking-[.25em] text-blue-100">Construire · Connecter · Innover</p><p className="mt-1 text-lg font-black">Mouhamadou Lamine Niassy</p></div>
              </div>
              <motion.div animate={reduceMotion ? undefined : { y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} className="portrait-float-card absolute right-0 top-[18%] flex items-center gap-3 rounded-2xl border border-white/80 bg-white/90 p-4 shadow-xl backdrop-blur">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-700"><Code2 size={20} /></span><span><strong className="block text-xs font-extrabold text-slate-900">Code avec intention</strong><small className="text-[10px] text-slate-500">Du concept au produit</small></span>
              </motion.div>
              <div className="portrait-stamp absolute bottom-[2%] right-[2%] flex h-24 w-24 flex-col items-center justify-center rounded-full border-[5px] border-white bg-[#f2c969] text-center text-slate-950 shadow-lg"><span className="text-[9px] font-black uppercase tracking-widest">Made in</span><span className="text-xl font-black">Dakar</span><span className="text-[9px] font-bold">SN · 14°N</span></div>
              <div className="mascot-card absolute -bottom-6 -left-7 z-20 flex w-[min(21rem,90vw)] items-center gap-3 rounded-2xl border border-blue-100 bg-white/95 p-3 shadow-[0_22px_55px_-28px_rgba(13,52,125,.55)] backdrop-blur sm:-left-10 sm:gap-4 sm:p-4" aria-live="polite">
                <div className={`mascot-character mascot-character--${moment.motion}`} aria-hidden="true">
                  <svg viewBox="0 0 100 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="50" cy="110" rx="29" ry="4" fill="#173C83" opacity=".13" className="mascot-shadow" />
                    <g className="mascot-body">
                      <path d="M23 69c0-13 12-22 27-22s27 9 27 22v24H23V69Z" fill="#2868D4" />
                      <path d="M41 51h18l-3 13-6 8-6-8-3-13Z" fill="#F2C969" />
                      <path d="M47 69h6l5 24H42l5-24Z" fill="#F6F8FC" />
                      <path d="M23 89h54v7H23v-7Z" fill="#17489E" />
                      <path d="M28 92l9 1m4-1 9 1m4-1 9 1m4-1 8 1" stroke="#F2C969" strokeWidth="2" strokeLinecap="round" />
                      <path d="M20 72c-8 2-11 9-9 15 2 4 7 5 12 2l5-8m52-9c8 2 11 9 9 15-2 4-7 5-12 2l-5-8" fill="#2868D4" stroke="#17489E" strokeWidth="2" strokeLinecap="round" />
                      <circle cx="16" cy="89" r="5" fill="#8C542E" /><circle cx="84" cy="89" r="5" fill="#8C542E" />
                      <path d="M32 31c0-16 8-25 18-25s18 9 18 25v16H32V31Z" fill="#201B20" />
                      <circle cx="34" cy="16" r="3.5" fill="#201B20" /><circle cx="41" cy="10" r="3.5" fill="#201B20" /><circle cx="49" cy="8" r="3.5" fill="#201B20" /><circle cx="57" cy="10" r="3.5" fill="#201B20" /><circle cx="65" cy="16" r="3.5" fill="#201B20" /><circle cx="29" cy="22" r="3" fill="#201B20" /><circle cx="70" cy="22" r="3" fill="#201B20" />
                      <ellipse cx="50" cy="34" rx="22" ry="23" fill="#8C542E" />
                      <path d="M30 26c4-13 12-18 21-18 9 0 16 5 20 16-8-4-15-6-22-5-7 0-13 3-19 7Z" fill="#201B20" />
                      <path d="M33 34c0-4 3-7 7-7s7 3 7 7m4 0c0-4 3-7 7-7s7 3 7 7" stroke="#253658" strokeWidth="3" />
                      <path d="M47 34h6m-7 11c3 3 9 3 12 0" stroke="#253658" strokeWidth="2.5" strokeLinecap="round" />
                      <circle cx="40" cy="35" r="2" fill="#202A3B" /><circle cx="60" cy="35" r="2" fill="#202A3B" />
                      <path d="M49 38l-2 4h5" stroke="#63391F" strokeWidth="1.8" strokeLinecap="round" />
                      <path d="M39 8c3-4 7-5 10-2m4 0c3-3 7-2 9 1m-31 8 3-3m34 0 3 4" stroke="#342830" strokeWidth="3" strokeLinecap="round" />
                    </g>
                    <g className="mascot-wave-arm"><path d="M75 70c8-4 11-12 10-18" stroke="#2868D4" strokeWidth="7" strokeLinecap="round"/><circle cx="84" cy="49" r="5" fill="#8C542E"/></g>
                    <path d="M22 105h56" stroke="#2868D4" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 6" opacity=".5" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2"><span className="mascot-spark" /><p key={moment.action} className="mascot-action">{moment.action}</p></div>
                  <p key={moment.detail} className="mascot-message">{moment.detail}</p>
                  <span className="mascot-progress" aria-hidden="true"><span style={{ animationDuration: '14.4s' }} /></span>
                </div>
              </div>
              <svg className="portrait-scribble absolute -left-7 top-[14%] h-20 w-20 text-blue-600" viewBox="0 0 100 100" fill="none" aria-hidden="true"><path d="M10 80C22 20 69 8 89 31c16 18-1 43-25 34-18-7-8-28 11-25" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeDasharray="230" className="scribble-path"/><circle cx="20" cy="24" r="5" fill="currentColor" className="scribble-dot"/></svg>
            </div>
          </motion.div>
        </div>
        <div className="mt-14 flex items-center justify-between border-t border-blue-200/70 pt-5 text-[10px] font-bold uppercase tracking-[.2em] text-slate-500"><span>Développement · IoT · Innovation</span><a href="#about" className="inline-flex items-center gap-2 transition hover:text-blue-700">Faire défiler <ArrowDown size={14} /></a></div>
      </div>
    </section>
  );
};
