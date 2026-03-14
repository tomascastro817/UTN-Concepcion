import React from 'react'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowLeft, FiExternalLink, FiClock, FiAward } from 'react-icons/fi'

import programacion from '../assets/images/programacion1.jpg'

const TecProg = () => {
  const facts = [
    { icon: <FiAward />, label: 'Título', value: 'Técnico Superior en Programación' },
    { icon: <FiClock />, label: 'Duración', value: '2 años y medio' },
  ];

  return (
    <div className="bg-slate-950 font-sans min-h-screen">
      <Header />
      <Nav />

      {/* Page Hero */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img src={programacion} alt="Tecnicatura en Programación" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-extrabold text-white tracking-tight"
          >
            Tecnicatura en <span className="text-emerald-400">Programación</span>
          </motion.h1>
          <p className="text-slate-400 text-sm mt-2">Carrera de Pregrado · 2 años y medio</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-emerald-400 text-sm mb-8 transition-colors duration-200">
          <FiArrowLeft /> Volver al inicio
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1 space-y-4">
            {facts.map((f, i) => (
              <div key={i} className="bg-slate-800/60 border border-slate-700/50 rounded-xl p-5 flex items-center gap-4">
                <span className="text-emerald-400 text-xl">{f.icon}</span>
                <div>
                  <p className="text-slate-500 text-xs uppercase tracking-wider">{f.label}</p>
                  <p className="text-white font-semibold text-sm mt-0.5">{f.value}</p>
                </div>
              </div>
            ))}
            <a
              href="http://www.frt.utn.edu.ar/tecnicaturas/programacion/?s=447"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-3 px-6 rounded-xl text-sm transition-all duration-300 hover:shadow-[0_0_25px_rgba(16,185,129,0.4)] hover:-translate-y-0.5"
            >
              <FiExternalLink /> Ver plan de estudios
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 bg-slate-800/40 border border-slate-700/50 rounded-2xl p-8"
          >
            <h2 className="text-xl font-bold text-emerald-400 mb-4">¿Qué es la Tecnicatura en Programación?</h2>
            <p className="text-slate-300 leading-relaxed text-sm">
              La programación es el proceso de crear un conjunto de instrucciones que le dicen a una computadora cómo realizar algún tipo de tarea. No solo incluye la acción de escribir código, sino todas las tareas necesarias para que el código funcione correctamente y cumpla el objetivo para el cual fue escrito.
            </p>
            <p className="text-slate-300 leading-relaxed text-sm mt-4">
              El Técnico Superior en Programación está capacitado para analizar problemas de procesamiento de datos y desarrollarlos en lenguajes de programación (como C++, Java, Python y otros), seleccionando el algoritmo adecuado y diseñando arquitecturas de software modernas y eficientes.
            </p>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default TecProg