
import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle }) => (
  <div className="mb-24 flex flex-col items-center text-center">
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="px-6 py-2 mb-8 rounded-full border border-blue-100 bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-[0.4em]"
    >
      {title}
    </motion.div>
    <motion.h2 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="text-5xl md:text-7xl font-black tracking-tighter text-blue-950"
    >
      {subtitle}
    </motion.h2>
  </div>
);
