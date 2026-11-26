import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';
import { ArrowRight, ArrowUpRight, Check, Github, Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone, Send, Sparkles } from 'lucide-react';

const WHATSAPP_NUMBER = '221704611894';
const WHATSAPP_DISPLAY = '+221 70 461 18 94';

export const Contact: React.FC = () => {
  const [whatsAppUrl, setWhatsAppUrl] = useState('');
  const reduceMotion = useReducedMotion();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const message = [
      `Bonjour Mouhamadou, je m'appelle ${formData.get('name')}.`,
      `Mon email : ${formData.get('email')}.`,
      `Sujet : ${formData.get('subject')}.`,
      '',
      String(formData.get('message')),
    ].join('\n');
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    setWhatsAppUrl(url);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="contact-section relative overflow-hidden px-6 py-24 md:px-10 md:py-32">
      <div className="contact-glow contact-glow--one" aria-hidden="true" />
      <div className="contact-glow contact-glow--two" aria-hidden="true" />
      <div className="container relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <span className="contact-kicker"><span /> Prenons contact</span>
          <h2 className="mt-5 max-w-4xl text-5xl font-black leading-[.95] tracking-[-.06em] text-slate-950 md:text-7xl">Une idée ?<br /><span>On la construit ensemble.</span></h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">Parlez-moi de votre besoin en développement web, réseaux, vidéosurveillance ou IoT. Je vous répondrai avec plaisir.</p>
        </motion.div>

        <div className="contact-layout grid gap-6 lg:grid-cols-[.92fr_1.08fr] lg:gap-7">
          <motion.aside
            initial={reduceMotion ? false : { opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: .2 }}
            transition={{ duration: .55 }}
            className="contact-info-card relative overflow-hidden rounded-[2rem] p-7 text-white md:rounded-[2.4rem] md:p-10"
          >
            <div className="contact-info-orbit" aria-hidden="true" />
            <div className="contact-info-content relative z-10 flex h-full flex-col">
              <div className="contact-status"><span /> Disponible pour de nouveaux projets</div>
              <h3 className="mt-7 text-3xl font-black leading-tight tracking-[-.04em] md:text-4xl">Chaque projet commence par une conversation.</h3>
              <p className="mt-4 max-w-md text-sm leading-7 text-blue-100/80">Un message suffit pour commencer. Écrivez-moi directement sur WhatsApp ou choisissez le moyen de contact qui vous convient.</p>

              <div className="contact-illustration" aria-hidden="true">
                <div className="contact-illustration-ring contact-illustration-ring--one" />
                <div className="contact-illustration-ring contact-illustration-ring--two" />
                <svg viewBox="0 0 320 190" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M89 149h137" stroke="#A9C8FF" strokeOpacity=".3" strokeDasharray="4 7" />
                  <g className="contact-chat-bubble">
                    <rect x="82" y="30" width="164" height="104" rx="22" fill="#F8FBFF" />
                    <path d="m112 134-11 19 30-19" fill="#F8FBFF" />
                    <circle cx="112" cy="82" r="6" fill="#3D76D5" className="contact-chat-dot contact-chat-dot--one" />
                    <circle cx="145" cy="82" r="6" fill="#3D76D5" className="contact-chat-dot contact-chat-dot--two" />
                    <circle cx="178" cy="82" r="6" fill="#3D76D5" className="contact-chat-dot contact-chat-dot--three" />
                    <path d="M104 105h119" stroke="#DFE9F8" strokeWidth="5" strokeLinecap="round" />
                  </g>
                  <g className="contact-chat-spark contact-chat-spark--one"><path d="M61 61v15m-7.5-7.5h15" stroke="#F2C969" strokeWidth="3" strokeLinecap="round" /></g>
                  <g className="contact-chat-spark contact-chat-spark--two"><path d="M263 105v12m-6-6h12" stroke="#8DB4FF" strokeWidth="3" strokeLinecap="round" /></g>
                  <circle cx="257" cy="49" r="22" fill="#54C68E" />
                  <path d="M249 42c1-2 3-2 4 0l3 5c1 1 0 2-1 3l-2 2c2 4 5 6 9 8l2-3c1-1 2-1 3 0l4 3c1 1 1 2 0 4-2 4-5 5-8 4-10-3-20-13-22-22-1-2 2-5 4-5Z" fill="#fff" />
                  <circle cx="257" cy="49" r="28" stroke="#71D7A7" strokeOpacity=".3" className="contact-wa-ring" />
                </svg>
              </div>

              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="contact-whatsapp-button">
                <MessageCircle size={19} /> <span><strong>Écrire sur WhatsApp</strong><small>{WHATSAPP_DISPLAY}</small></span><ArrowUpRight size={18} className="contact-whatsapp-arrow" />
              </a>

              <div className="contact-details mt-7">
                <a href={`mailto:${PERSONAL_INFO.email}`} className="contact-detail-row"><span className="contact-detail-icon"><Mail size={16} /></span><span><small>EMAIL</small><strong>{PERSONAL_INFO.email}</strong></span><ArrowRight size={14} /></a>
                <a href={`tel:${PERSONAL_INFO.phone.replace(/\s/g, '')}`} className="contact-detail-row"><span className="contact-detail-icon"><Phone size={16} /></span><span><small>TÉLÉPHONE</small><strong>{WHATSAPP_DISPLAY}</strong></span><ArrowRight size={14} /></a>
                <div className="contact-detail-row"><span className="contact-detail-icon"><MapPin size={16} /></span><span><small>LOCALISATION</small><strong>Dakar, Sénégal</strong></span></div>
              </div>

              <div className="contact-socials mt-auto flex gap-3 pt-8">
                {[
                  { icon: <Linkedin size={17} />, link: PERSONAL_INFO.socials.linkedin, label: 'LinkedIn' },
                  { icon: <Github size={17} />, link: PERSONAL_INFO.socials.github, label: 'GitHub' },
                  { icon: <Instagram size={17} />, link: PERSONAL_INFO.socials.instagram, label: 'Instagram' },
                ].map((social) => <a key={social.label} href={social.link} target="_blank" rel="noopener noreferrer" aria-label={social.label}>{social.icon}</a>)}
              </div>
            </div>
          </motion.aside>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: .2 }}
            transition={{ duration: .55, delay: .08 }}
            className="contact-form-card rounded-[2rem] p-6 md:rounded-[2.4rem] md:p-10"
          >
            {whatsAppUrl ? (
              <motion.div initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} className="contact-success-state" aria-live="polite">
                <span className="contact-success-icon"><Check size={30} /></span>
                <span className="contact-form-kicker">Message préparé</span>
                <h3>Il ne reste qu’à l’envoyer.</h3>
                <p>Votre message est préparé avec le sujet et vos coordonnées. Ouvrez WhatsApp pour le relire puis l’envoyer.</p>
                <a href={whatsAppUrl} target="_blank" rel="noopener noreferrer" className="contact-submit-button">Ouvrir WhatsApp <ArrowUpRight size={17} /></a>
              </motion.div>
            ) : (
              <>
                <div className="contact-form-heading"><span className="contact-form-icon"><Send size={17} /></span><div><span className="contact-form-kicker">Dites-moi tout</span><h3>Parlons de votre projet.</h3></div></div>
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="contact-field-grid">
                    <div className="contact-field"><label htmlFor="contact-name">Votre nom</label><input id="contact-name" name="name" required autoComplete="name" placeholder="Ex. Aïssatou Diop" /></div>
                    <div className="contact-field"><label htmlFor="contact-email">Votre email</label><input id="contact-email" name="email" required type="email" autoComplete="email" placeholder="nom@exemple.com" /></div>
                  </div>
                  <div className="contact-field"><label htmlFor="contact-subject">Sujet</label><select id="contact-subject" name="subject" defaultValue="Développement web / mobile"><option>Développement web / mobile</option><option>Réseaux & télécommunications</option><option>Vidéosurveillance</option><option>IoT & systèmes connectés</option><option>Autre projet</option></select></div>
                  <div className="contact-field"><label htmlFor="contact-message">Votre message</label><textarea id="contact-message" name="message" required rows={5} placeholder="Décrivez votre idée, votre besoin ou le défi que vous souhaitez relever…" /></div>
                  <p className="contact-form-note"><MessageCircle size={14} /> Votre message sera préparé dans WhatsApp pour que vous puissiez l’envoyer.</p>
                  <button type="submit" className="contact-submit-button">Continuer sur WhatsApp <ArrowRight size={17} /></button>
                </form>
              </>
            )}
          </motion.div>
        </div>

        <div className="contact-bottom-note"><span>Réponse directe, échange humain.</span><span><Sparkles size={13} /> Mouhamadou Lamine Niassy</span></div>
      </div>
    </section>
  );
};
