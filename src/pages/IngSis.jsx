import React from 'react'

import Header from '../components/Header'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

import Sistemas from'../assets/images/Sistemas.jpg'

const IngSis = () => {
  return (
    <div className='font-serif'>
      <Header/>
      <Nav/>
      <div>
      <div className="bg-slate-200 p-4 m-4 rounded-lg shadow-lg flex flex-col md:flex-row">
          <img src={Sistemas} alt="Imagen de la carrera" className="mb-4 rounded-lg shadow-md md:w-1/2" />  

          <div className="flex-1 p-4">
            <h1 className="text-3xl font-semibold mb-2">Ingenieria en Sistemas de Informacion.</h1>
            <ul className="list-disc pl-5 mb-4">
              <li>
                <b>Título:</b> Grado - Ingeniería en Sistemas de Información
              </li>
              <li>
                <b>Duración:</b> 5 años
              </li>
              <li>
                <b>Título Intermedio:</b> Analista Universitario de Sistemas
              </li>
              <li>
                <b>Duración:</b> 3 años
              </li>
            </ul>
            <h4 className="text-xl font-semibold mb-2">¿Qué es la Ingeniería en Sistemas de Información?</h4>
            <p className="text-gray-700">
            La Ingeniería en
            Sistemas de Información se ocupa del diseño (desarrollo creativo de
            una idea), implementación (idea que se materializa), organización y
            control de la información requerida por organismos públicos y
            privados. En esta ingeniería convergen diversos campos de
            conocimiento: matemática, programación, gestión de datos, software,
            hardware y redes. También se ocupa de estudios de factibilidad (se
            puede hacer o no), presupuestación (cuánto cuesta), dirección (cómo
            realizamos el diseño propuesto) y proyectos vinculados con los
            sistemas de información de una organización.
            </p>
            
            <a href="http://www.frt.utn.edu.ar/tecnoweb/imagenes/file/Sistemas/Plan2023/1877-2022%20Diseño%20Curricular%20ISI%202023.pdf" className="bg-emerald-900 hover:bg-emerald-300 text-white font-semibold py-2 px-4 rounded inline-block mt-4" target='blank'>
              Ver plan de estudios 
            </a>
            
          </div>
        </div>

      </div>
      <Footer/>
    </div>
  )
}

export default IngSis