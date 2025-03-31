import React from 'react'

import Header from '../components/Header'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import mecatronica from '../assets/images/mecatronica1.jpeg'

const TecMecat = () => {
  return (
    <div className='font-serif'>
      <Header/>
      <Nav/>
      <div>
      <div className="bg-slate-200 p-4 m-4 rounded-lg shadow-lg flex flex-col md:flex-row">
          <img src={mecatronica} alt="Imagen de la carrera" className="mb-4 rounded-lg shadow-md md:w-1/2" />  

          <div className="flex-1 p-4">
            <h1 className="text-3xl font-semibold mb-2">Tecnicatura Universitaria en Mecatronica.</h1>
            <ul className="list-disc pl-5 mb-4">
              <li>
                <b>Título:</b> Tecnico Superior en Mecatronica.
              </li>
              <li>
                <b>Duración:</b> 2 años
              </li>
              
            </ul>
            <h4 className="text-xl font-semibold mb-2">¿Qué es la Mecatronica?</h4>
            <p className="text-gray-700">
            La ingeniería mecatrónica, o simplemente mecatrónica, es una rama multidisciplinaria de la ingeniería, la cual desarrolla dispositivos y tecnologías de varios campos del conocimiento en los que se unen las ramas de sistemas, electrónica, mecánica y control, con el uso combinado de la robótica y de la ingeniería electrónica y ciencia de la Computación/Sistemas. La mecatrónica engloba así el desarrollo de productos que involucren un sistema de control para productos o procesos inteligentes, lo cual busca crear maquinaria más compleja para facilitar las actividades del ser humano a través de procesos electrónicos de sistemas de control aplicados en la industria. Esta disciplina une la Ingeniería de sistemas/ciencia de la computación,ingeniería electrónica, ingeniería mecánica e ingeniería de control.
            </p>
            <button>
              <a href="http://www.frt.utn.edu.ar/tecnicaturas/mecatronica/?s=454" target='blank' className="bg-emerald-900 hover:bg-emerald-300 text-white font-semibold py-2 px-4 rounded inline-block mt-4">
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

export default TecMecat