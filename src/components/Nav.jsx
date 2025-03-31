import React, { useState } from 'react'
import { CgChevronDoubleDown } from 'react-icons/cg';
import {Link} from 'react-router-dom'

import{motion} from 'framer-motion'

import Des from './Menu'
function Nav() {

    const[Abrir, setAbrir] = useState(false);
    
    function Menu(){
      setAbrir(!Abrir);
    }; 
  

  return (
    <nav className='w-full h-16 bg-emerald-900  text-white text-lg font-medium align-middle flex items-center justify-center gap-4'>
        <ul className='w-full hidden md:flex'>
    
        <motion.li 
        
        className='mr-5 p-2.5 hover:text-emerald-200 '><Link to={"/"}>INICIO</Link>
        </motion.li>


    
        <button onClick={Menu} className="relative">
            <li className='p-2.5'>
            <motion.a 
            initial="hidden"
            whileInView ="visible"
            viewport={{once: true, amount:0.5}}
            transition={{delay:0.4, duration:0.5}}
            variants={{
              hidden:{opacity:0, x:-50},
              visible:{opacity:1, x:0}
            }}
            className="text-white text-lg flex items-center text-center align-middle hover:text-emerald-200 " href="#">
              OFERTA ACADÉMICA<CgChevronDoubleDown className='text-xl'/>
            </motion.a>
            </li>
            {Abrir && (
              <div className="absolute top-16 left-0 bg-gray-700 rounded-xl p-2 z-50 md:flex transition-transform transform md:hover:scale-125">
                <ul className="w-64 text-white">
                  <li className="m-2">
                    <h4 className="text-xl font-semibold text-emerald-300 ">CARRERAS DE GRADO</h4>
                  </li>
                  <li className="hover:text-emerald-200 p-1 cursor-pointer">
                  <Link to={'/IngenieriaSistemas'}>Ingenieria en Sistemas de Informacion</Link>
                  </li>
                  <li className="hover:text-emerald-200 p-1 cursor-pointer">
                  <Link to={'/IngenieriaMecanica'}>Ingenieria Mecanica</Link>
                  </li>
                  <li className="hover:text-emerald-200 p-1 cursor-pointer">
                  <Link to={'/IngenieriaElectronica'}>Ingenieria Electronica</Link>
                  </li>
                </ul>
                <ul className="w-64 text-white">
                  <li className="m-2">
                    <h4 className="text-xl font-semibold text-emerald-300">CARRERAS DE PREGRADO</h4>
                  </li>
                  <li className="hover:text-emerald-200 p-1 cursor-pointer">
                  <Link to={'/TecnicaturaProgramacion'}>Tecnicatura Superior en Programacion</Link>
                  </li>
                  <li className="hover:text-emerald-200 p-1 cursor-pointer">
                  <Link to={'/TecnicaturaHigieneSeguridad'}>Tecnicatura Universitaria en Higuiene y seguridad</Link>
                  </li>
                  <li className="hover:text-emerald-200 p-1 cursor-pointer">
                  <Link to={'/TecnicaturaMecatronica'}>Tecnicatura Universitaria en Mecatronica</Link>
                  </li>
                  <li className="hover:text-emerald-200 p-1 cursor-pointer">
                  <Link to={'/TecnicaturaLogistica'}>Tecnicatura Universitaria en Logistica</Link>
                  </li>
                </ul>
              </div>



            )}
        </button>
    
        <motion.li 
          initial="hidden"
          whileInView ="visible"
          viewport={{once: true, amount:0.5}}
          transition={{delay:0.5, duration:0.5}}
          variants={{
            hidden:{opacity:0, x:-50},
            visible:{opacity:1, x:0}
            }}
        className='mr-5 p-2.5 hover:text-emerald-200 '><Link to="http://sysacad.frt.utn.edu.ar/" target="blank">ALUMNOS</Link></motion.li>


          <motion.li 
            initial="hidden"
            whileInView ="visible"
            viewport={{once: true, amount:0.5}}
            transition={{delay:0.6, duration:0.5}}
            variants={{
              hidden:{opacity:0, x:-50},
              visible:{opacity:1, x:0}
              }}
            className='mr-5 p-2.5 hover:text-emerald-200 '><Link to="/CalendarioAcademico">CALENDARIO ACADEMICO</Link>
          </motion.li>
        </ul>

        <Des/>
    </nav>

  
  
        
  )


}

export default Nav;

