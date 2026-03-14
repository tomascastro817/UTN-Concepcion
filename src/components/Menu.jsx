import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FiChevronRight } from 'react-icons/fi';

const menuSections = [
  {
    title: 'CARRERAS DE GRADO',
    links: [
      { label: 'Ingeniería en Sistemas de Información', to: '/IngenieriaSistemas' },
      { label: 'Ingeniería Mecánica', to: '/IngenieriaMecanica' },
      { label: 'Ingeniería Electrónica', to: '/IngenieriaElectronica' },
    ],
  },
  {
    title: 'CARRERAS DE PREGRADO',
    links: [
      { label: 'Tecnicatura en Programación', to: '/TecnicaturaProgramacion' },
      { label: 'Tecnicatura en Higiene y Seguridad', to: '/TecnicaturaHigieneSeguridad' },
      { label: 'Tecnicatura en Mecatrónica', to: '/TecnicaturaMecatronica' },
      { label: 'Tecnicatura en Logística', to: '/TecnicaturaLogistica' },
    ],
  },
];

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* Hamburger button */}
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Abrir menú"
        className="p-2 text-slate-300 hover:text-emerald-400 transition-colors duration-200"
      >
        <HiMenuAlt3 className="text-2xl" />
      </button>

      {/* Drawer overlay + panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-[200]"
            />

            {/* Side drawer */}
            <motion.div
              key="drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-72 bg-slate-900/95 backdrop-blur-xl border-l border-slate-700/60 shadow-2xl z-[300] flex flex-col"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-slate-700/50">
                <span className="text-emerald-400 font-bold text-sm tracking-widest uppercase">Menú</span>
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Cerrar menú"
                  className="text-slate-400 hover:text-white transition-colors duration-200"
                >
                  <HiX className="text-2xl" />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-6">
                {/* Inicio */}
                <Link
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 px-3 py-2.5 text-slate-200 font-semibold text-sm tracking-wider hover:text-emerald-400 hover:bg-emerald-500/10 rounded-lg transition-all duration-200"
                >
                  <FiChevronRight className="text-emerald-500 text-xs" />
                  INICIO
                </Link>

                {menuSections.map((section) => (
                  <div key={section.title}>
                    <h4 className="text-xs font-bold text-emerald-500 tracking-widest uppercase px-3 mb-2">
                      {section.title}
                    </h4>
                    <ul className="space-y-1">
                      {section.links.map((link) => (
                        <li key={link.to}>
                          <Link
                            to={link.to}
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-3 px-3 py-2.5 text-slate-300 text-sm hover:text-white hover:bg-slate-800/70 rounded-lg transition-all duration-200"
                          >
                            <FiChevronRight className="text-slate-600 text-xs flex-shrink-0" />
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                {/* Extra links */}
                <div className="border-t border-slate-700/50 pt-4 space-y-1">
                  <a
                    href="http://sysacad.frt.utn.edu.ar/"
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 px-3 py-2.5 text-slate-300 text-sm hover:text-white hover:bg-slate-800/70 rounded-lg transition-all duration-200"
                  >
                    <FiChevronRight className="text-slate-600 text-xs" />
                    ALUMNOS (SysAcad)
                  </a>
                  <Link
                    to="/CalendarioAcademico"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 px-3 py-2.5 text-slate-300 text-sm hover:text-white hover:bg-slate-800/70 rounded-lg transition-all duration-200"
                  >
                    <FiChevronRight className="text-slate-600 text-xs" />
                    CALENDARIO ACADÉMICO
                  </Link>
                </div>
              </nav>

              {/* Footer branding */}
              <div className="px-6 py-4 border-t border-slate-700/50">
                <p className="text-xs text-slate-600 text-center">UTN · Facultad Regional Tucumán</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown;
