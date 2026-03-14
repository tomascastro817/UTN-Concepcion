import React, { useState } from 'react'
import { CgChevronDoubleDown } from 'react-icons/cg';
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Des from './Menu'

function Nav() {

  const [Abrir, setAbrir] = useState(false);

  function Menu() {
    setAbrir(!Abrir);
  };


  return (
    <nav className='w-full h-16 bg-slate-900/95 backdrop-blur-md sticky top-0 z-[100] text-slate-200 text-sm font-semibold tracking-wide border-b border-slate-700 flex items-center justify-center gap-4 shadow-sm transition-all duration-300'>
      <ul className='w-full hidden md:flex items-center justify-center space-x-8'>

        <motion.li

          className='hover:text-brand-light transition-colors duration-200'><Link to={"/"}>INICIO</Link>
        </motion.li>



        <li className="relative">
          <button onClick={Menu} className='p-2.5 focus:outline-none flex items-center cursor-pointer'>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 }
              }}
              className="flex items-center hover:text-brand-light transition-colors duration-200">
              OFERTA ACADÉMICA<CgChevronDoubleDown className={`ml-1 text-lg transition-transform duration-300 ${Abrir ? 'rotate-180' : ''}`} />
            </motion.div>
          </button>
          <AnimatePresence>
            {Abrir && (
              <motion.div
                key="dropdown"
                initial={{ opacity: 0, scaleY: 0.9, y: -8 }}
                animate={{ opacity: 1, scaleY: 1, y: 0 }}
                exit={{ opacity: 0, scaleY: 0.9, y: -8 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                style={{ transformOrigin: 'top center' }}
                className="absolute top-14 left-1/2 -translate-x-1/2 bg-slate-900/95 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-slate-700/60 z-50 flex gap-8"
              >
                <ul className="w-60 text-slate-300 flex flex-col space-y-1">
                  <li className="mb-3 border-b border-slate-700 pb-2">
                    <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-widest">CARRERAS DE GRADO</h4>
                  </li>
                  {[
                    { label: 'Ing. en Sistemas de Información', to: '/IngenieriaSistemas' },
                    { label: 'Ingeniería Mecánica', to: '/IngenieriaMecanica' },
                    { label: 'Ingeniería Electrónica', to: '/IngenieriaElectronica' },
                  ].map(item => (
                    <li key={item.to} onClick={() => setAbrir(false)}
                      className="hover:text-emerald-400 hover:translate-x-1 transition-all duration-200 cursor-pointer text-sm">
                      <Link className="block w-full py-1.5" to={item.to}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
                <ul className="w-60 text-slate-300 flex flex-col space-y-1">
                  <li className="mb-3 border-b border-slate-700 pb-2">
                    <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-widest">CARRERAS DE PREGRADO</h4>
                  </li>
                  {[
                    { label: 'Tec. en Programación', to: '/TecnicaturaProgramacion' },
                    { label: 'Tec. en Higiene y Seguridad', to: '/TecnicaturaHigieneSeguridad' },
                    { label: 'Tec. en Mecatrónica', to: '/TecnicaturaMecatronica' },
                    { label: 'Tec. en Logística', to: '/TecnicaturaLogistica' },
                  ].map(item => (
                    <li key={item.to} onClick={() => setAbrir(false)}
                      className="hover:text-emerald-400 hover:translate-x-1 transition-all duration-200 cursor-pointer text-sm">
                      <Link className="block w-full py-1.5" to={item.to}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </li>

        <motion.li
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
          }}
          className='hover:text-brand-light transition-colors duration-200'><Link to="http://sysacad.frt.utn.edu.ar/" target="blank">ALUMNOS</Link></motion.li>


        <motion.li
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
          }}
          className='hover:text-brand-light transition-colors duration-200'><Link to="/CalendarioAcademico">CALENDARIO ACADEMICO</Link>
        </motion.li>
      </ul>

      <Des />
    </nav>




  )


}

export default Nav;

