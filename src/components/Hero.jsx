import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowDown, FiMail } from 'react-icons/fi';
import { HiAcademicCap } from 'react-icons/hi';

import heroImage from '../assets/images/facultadfondo.jpg';

const stats = [
  { value: '7', label: 'Carreras' },
  { value: '+3.000', label: 'Alumnos' },
  { value: '1953', label: 'Fundación' },
  { value: '100%', label: 'Acreditada' },
];

function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      {/* Multi-layer overlay: dark base + emerald accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-900/75 to-slate-950/95" />
      {/* Atmospheric glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-8 max-w-5xl mx-auto pt-12">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 text-emerald-400 text-sm font-medium tracking-wider"
        >
          <HiAcademicCap className="text-base" />
          <span>FACULTAD REGIONAL TUCUMÁN · EXTENSIÓN AULICA</span>
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white leading-tight tracking-tight mb-4"
        >
          Universidad{' '}
          <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500 bg-clip-text text-transparent">
            Tecnológica
          </span>{' '}
          Nacional
        </motion.h1>

        {/* Location pill */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-lg sm:text-xl text-slate-300 font-medium mb-4"
        >
          Concepción, Tucumán
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed mb-10"
        >
          Formamos profesionales de excelencia en ingeniería y tecnología, preparados para liderar el desarrollo 
          científico y productivo de Argentina. Carreras de grado y pregrado acreditadas por CONEAU.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-16"
        >
          <a
            href="#carreras"
            className="group relative px-8 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl text-sm tracking-wide transition-all duration-300 shadow-[0_0_30px_rgba(16,185,129,0.35)] hover:shadow-[0_0_45px_rgba(16,185,129,0.55)] hover:-translate-y-0.5 flex items-center gap-2"
          >
            <HiAcademicCap className="text-lg" />
            Ver Carreras
          </a>
          <a
            href="#contacto"
            className="px-8 py-3.5 border border-slate-600 hover:border-emerald-500/60 text-slate-300 hover:text-white font-semibold rounded-xl text-sm tracking-wide transition-all duration-300 hover:bg-slate-800/70 hover:-translate-y-0.5 flex items-center gap-2"
          >
            <FiMail className="text-base" />
            Contactanos
          </a>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="w-full max-w-3xl grid grid-cols-2 sm:grid-cols-4 gap-px bg-slate-700/40 rounded-2xl overflow-hidden border border-slate-700/50"
        >
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col items-center py-5 px-4 bg-slate-900/60 backdrop-blur-sm">
              <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400 leading-none mb-1">{s.value}</span>
              <span className="text-xs text-slate-400 font-medium tracking-widest uppercase">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <FiArrowDown className="text-xl text-emerald-500/70" />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
