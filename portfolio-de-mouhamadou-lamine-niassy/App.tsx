
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUp, Github, Linkedin, Instagram, Twitter } from 'lucide-react';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Resume } from './pages/Resume';
import { Portfolio } from './pages/Portfolio';
import { Contact } from './pages/Contact';
import { PERSONAL_INFO } from './constants';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { id: 'hero', label: 'Accueil' },
    { id: 'about', label: 'Parcours' },
    { id: 'resume', label: 'Expertise' },
    { id: 'portfolio', label: 'Projets' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 120;

      sections.forEach(section => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(section.id);
          }
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ${scrolled ? 'glass-nav py-3 shadow-sm' : 'bg-transparent py-8'}`}>
        <div className="container mx-auto px-8 flex justify-between items-center">
          <a href="#hero" onClick={(e) => scrollToSection(e, 'hero')} className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-[#0066FF] rounded-xl flex items-center justify-center text-white font-black text-xl group-hover:rotate-12 transition-transform">M.L</div>
            <span className="text-slate-900 font-black tracking-tighter text-xl">NIASSY</span>
          </a>

          <div className="hidden lg:flex items-center gap-12">
            {navItems.map((item) => (
              <a 
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
                className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all relative ${
                  activeSection === item.id ? 'text-[#0066FF]' : 'text-slate-400 hover:text-slate-900'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div layoutId="navDot" className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#0066FF] rounded-full" />
                )}
              </a>
            ))}
            <a 
              href="#contact" 
              onClick={(e) => scrollToSection(e, 'contact')}
              className="bg-slate-900 text-white px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-[#0066FF] transition-all shadow-xl shadow-slate-200"
            >
              Lancer un projet
            </a>
          </div>

          <button className="lg:hidden text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      {/* Menu Mobile */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}
            className="fixed inset-0 bg-white z-[999] flex flex-col items-center justify-center p-12 lg:hidden"
          >
            <div className="flex flex-col gap-8 text-center">
              {navItems.map((item) => (
                <a key={item.id} href={`#${item.id}`} onClick={(e) => scrollToSection(e, item.id)} className="text-4xl font-black text-slate-900 hover:text-[#0066FF] transition-colors uppercase tracking-tighter">{item.label}</a>
              ))}
            </div>
            <div className="mt-16 flex gap-8">
              <a href={PERSONAL_INFO.socials.github} className="text-slate-300 hover:text-slate-900 transition-colors"><Github size={32} /></a>
              <a href={PERSONAL_INFO.socials.linkedin} className="text-slate-300 hover:text-slate-900 transition-colors"><Linkedin size={32} /></a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        <Home />
        <About />
        <Resume />
        <Portfolio />
        <Contact />
      </main>

      {/* Footer Premium */}
      <footer className="bg-white border-t border-slate-100 pt-32 pb-16 px-8 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 mb-24">
            
            <div className="lg:col-span-6">
              <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-[0.9] mb-8">
                Prêt à construire <br />le <span className="text-[#0066FF]">futur ?</span>
              </h2>
              <p className="text-xl text-slate-500 font-light max-w-md leading-relaxed">
                Fusionnons votre vision et mon expertise pour créer des expériences digitales hors du commun.
              </p>
            </div>

            <div className="lg:col-span-3">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-8">Navigation</h4>
              <ul className="space-y-4">
                {navItems.map(item => (
                  <li key={item.id}>
                    <a href={`#${item.id}`} onClick={(e) => scrollToSection(e, item.id)} className="text-slate-900 font-bold hover:text-[#0066FF] transition-colors">{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-3">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-8">Réseaux</h4>
              <div className="flex flex-col gap-4">
                <a href={PERSONAL_INFO.socials.linkedin} className="group flex items-center gap-3 text-slate-900 font-bold hover:text-[#0066FF] transition-colors">
                  <Linkedin size={20} className="text-slate-300 group-hover:text-[#0066FF] transition-colors" /> LinkedIn
                </a>
                <a href={PERSONAL_INFO.socials.github} className="group flex items-center gap-3 text-slate-900 font-bold hover:text-[#0066FF] transition-colors">
                  <Github size={20} className="text-slate-300 group-hover:text-slate-900 transition-colors" /> GitHub
                </a>
                <a href={PERSONAL_INFO.socials.instagram} className="group flex items-center gap-3 text-slate-900 font-bold hover:text-[#0066FF] transition-colors">
                  <Instagram size={20} className="text-slate-300 group-hover:text-rose-500 transition-colors" /> Instagram
                </a>
                <a href={PERSONAL_INFO.socials.twitter} className="group flex items-center gap-3 text-slate-900 font-bold hover:text-[#0066FF] transition-colors">
                  <Twitter size={20} className="text-slate-300 group-hover:text-blue-400 transition-colors" /> Twitter
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-16 border-t border-slate-50 gap-8">
            <div className="flex items-center gap-4">
               <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white font-black text-sm">N</div>
               <span className="text-slate-400 text-[10px] font-black uppercase tracking-[0.4em]">Mouhamadou Lamine Niassy • © 2025</span>
            </div>
            
            <button 
              onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
              className="w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-[#0066FF] hover:text-white hover:border-[#0066FF] transition-all"
            >
              <ArrowUp size={20} />
            </button>
            
            <div className="text-slate-400 text-[10px] font-black uppercase tracking-[0.4em]">
              Fait avec <span className="text-[#0066FF]">React</span> & <span className="text-[#0066FF]">Passion</span>
            </div>
          </div>
        </div>

        {/* Typographie géante décorative en fond */}
        <div className="absolute -bottom-20 -right-20 text-[20vw] font-black text-slate-50/50 -z-0 select-none pointer-events-none">
          NIASSY
        </div>
      </footer>
    </div>
  );
};

export default App;
