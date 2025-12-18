
import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Cpu, Globe, Smartphone } from 'lucide-react';
import { SERVICES } from '../constants';

export const Services: React.FC = () => {
  const icons = [<Layout />, <Cpu />, <Globe />, <Smartphone />];

  return (
    <section id="services" className="py-32 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <h2 className="text-4xl font-light text-blue-950 mb-6 tracking-tight">Services <br /><span className="font-bold italic">& Expertise</span></h2>
            <p className="text-slate-500 font-light leading-relaxed mb-8">
              Chaque projet est une opportunité d'innover et de créer une valeur ajoutée durable.
            </p>
            <div className="flex items-center gap-4 group cursor-pointer">
              <span className="w-10 h-[1px] bg-blue-600 group-hover:w-16 transition-all" />
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Voir mon CV</span>
            </div>
          </div>

          <div className="lg:col-span-8 grid md:grid-cols-2 gap-8">
            {SERVICES.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-10 rounded-[40px] card-premium"
              >
                <div className="w-12 h-12 text-blue-600 mb-8 border-b border-blue-50 pb-4">
                  {React.cloneElement(icons[idx] as React.ReactElement<any>, { size: 28, strokeWidth: 1.5 })}
                </div>
                <h3 className="text-xl font-bold text-blue-950 mb-4">{service.title}</h3>
                <p className="text-slate-400 font-light text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
