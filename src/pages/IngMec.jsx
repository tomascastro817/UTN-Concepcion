import React from 'react'


import Header from '../components/Header'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

import mecanica from '../assets/images/mecanica.jpg'

const IngMec = () => {
  return (
    <div className='font-serif'>
      <Header/>
      <Nav/>
      <div>
      <div className="bg-slate-200 p-4 m-4 rounded-lg shadow-lg flex flex-col md:flex-row">
          <img src={mecanica} alt="Imagen de la carrera" className="mb-4 rounded-lg shadow-md md:w-1/2" />  

          <div className="flex-1 p-4">
            <h1 className="text-3xl font-semibold mb-2">Ingenieria Mecanica.</h1>
            <ul className="list-disc pl-5 mb-4">
              <li>
                <b>Título:</b> Grado - Ingeniería Mecánica 
              </li>
              <li>
                <b>Duración:</b> 5 años
              </li>
              
            </ul>
            <h4 className="text-xl font-semibold mb-2">¿Qué es la Ingeniería Mecánica?</h4>
            <p className="text-gray-700">
            La Ingeniería Mecánica es un campo muy amplio de la ingeniería que implica el uso de los principios de la física para el análisis, diseño, fabricación y mantenimiento de los sistemas mecánicos. Tradicionalmente, ha sido la rama de la Ingeniería que mediante la aplicación de los principios físicos ha permitido la creación de dispositivos útiles, como utensilios y máquinas. Las personas graduadas de ingeniería mecánica usan principios como el calor, la fuerza y la conservación de la masa y de la energía para analizar sistemas físicos, estáticos y dinámicos, contribuyendo a diseñar objetos. La Ingeniería Mecánica es la rama de las máquinas, equipos e instalaciones teniendo siempre en mente aspectos ecológicos y económicos para el beneficio de la sociedad.
            </p>
            
            <a href="http://www.frt.utn.edu.ar/departamentos/mecanica/?s=2047" tarjet='blank' className="bg-emerald-900 hover:bg-emerald-300 text-white font-semibold py-2 px-4 rounded inline-block mt-4">
              Ver plan de estudios 
            </a>
            
          </div>
        </div>

      </div>
      <Footer/>
    </div>
  )
}

export default IngMec