import React from 'react'

import Header from '../components/Header'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

import hys from '../assets/images/higieneyseguridad1.jpg'

const TecHyS = () => {
  return (
    <div className='font-serif'>
      <Header/>
      <Nav/>
      <div>
      <div className="bg-slate-200 p-4 m-4 rounded-lg shadow-lg flex flex-col md:flex-row">
          <img src={hys} alt="Imagen de la carrera" className="mb-4 rounded-lg shadow-md w-full md:w-1/2" />  

          <div className="flex-1 p-4">
            <h1 className="text-3xl font-semibold mb-2">Tecnicatura Universitaria en Higiene y Seguridad.</h1>
            <ul className="list-disc pl-5 mb-4">
              <li>
                <b>Título:</b> Tecnico Superior en Higiene y Seguridad.
              </li>
              <li>
                <b>Duración:</b> 3 años
              </li>
              
            </ul>
            <h4 className="text-xl font-semibold mb-2">¿Qué es la Higiene y Seguridad?</h4>
            <p className="text-gray-700">
            El término seguridad se le atribuye a la prevención y protección
            personal frente a los propios riesgos de una actividad laboral
            determinada. Por el contrario el término higiene proviene de la
            medicina y que tiene por objeto la conservación de la salud y prevenir
            a las personas de posibles enfermedades. En los lugares de trabajo
            existen situaciones peligrosas a las que los profesionales y usuarios
            se encuentran expuestos. De esta manera, interviene la seguridad e
            higiene en el área laboral, intentando que se cumplan las normas y
            legislaciones para evitar posibles accidentes de los empleado y
            eliminar los factores de riesgo en el trabajo. La seguridad e higiene
            en el trabajo, permite que se construya un medio ambiente de trabajo
            adecuado y justo. De este modo, los trabajadores pueden desarrollar su
            actividad en un ambiente seguro, sin riesgos de accidentes y con las
            condiciones de higiene necesarias para que se desarrolle la actividad.
            </p>
            <button>
              <a href="http://www.frt.utn.edu.ar/tecnicaturas/higieneyseguridad/?s=446" target='blank' className="bg-emerald-900 hover:bg-emerald-300 text-white font-semibold py-2 px-4 rounded inline-block mt-4">
                Ver plan de estudios 
              </a>
            </button>
            
          </div>
        </div>

      </div>
      <Footer/>
    </div>
  )
}

export default TecHyS