import React from 'react'

import Header from '../components/Header'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

import electronica from '../assets/images/Electronica.jpg';


const IngEle = () => {
  return (
    <div className='font-serif'>
      <Header/>
      <Nav/>
      <div>
      <div className="bg-slate-200 p-4 m-4 rounded-lg shadow-lg flex flex-col md:flex-row">
          <img src={electronica} alt="Imagen de la carrera" className="mb-4 rounded-lg shadow-md md:w-1/2" />  

          <div className="flex-1 p-4">
            <h1 className="text-3xl font-semibold mb-2">Ingeniería Electrónica</h1>
            <ul className="list-disc pl-5 mb-4">
              <li>
                <b>Título:</b> Grado - Ingeniería Electrónica
              </li>
              <li>
                <b>Duración:</b> 5 años
              </li>
            </ul>
            <h4 className="text-xl font-semibold mb-2">¿Qué es la Ingeniería Electrónica?</h4>
            <p className="text-gray-700">
              La carrera prepara profesionales con una sólida formación científica y tecnológica capacitados en: Planear, diseñar, fabricar, mantener y manejar sistemas, equipos y componentes electrónicos, con creatividad y espíritu crítico, teniendo presente el desarrollo tecnológico. Estudiar, construir, operar, reparar e inspeccionar sistemas, subsistemas, componentes, piezas de generación, transmisión, recepción, distribución, conversión, control, medición, automatización, registro, reproducción, procesamiento y/o utilización de señales electromagnéticas, ópticas, acústicas o de otro tipo en todas las frecuencias o potencias. Proyectar, dirigir, ejecutar, sistemas de enlace de comunicaciones, de procesamiento electrónico de datos -hardware- incluyendo su programación -software-. Entender en asuntos de Ingeniería legal, económica y financiera, realizar arbitrajes y pericias, tasaciones y valuaciones referidas a lo específico de la especialidad en los recursos humanos involucrados y en la enseñanza de los conocimientos tecnológicos y científicos correspondientes.
            </p>
            <button>
              <a href="http://www.frt.utn.edu.ar/tecnoweb/imagenes/file/electronica/plan%20nuevo/PlanEstudios%202012anexoI.xls" className="bg-emerald-900 hover:bg-emerald-300 text-white font-semibold py-2 px-4 rounded inline-block mt-4">
                Descargar Plan de Estudios (Excel)
              </a>
            </button>
          </div>
        </div>

      </div>
      <Footer/>
    </div>
  )
}

export default IngEle