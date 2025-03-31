import React from 'react'

import Header from '../components/Header'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

import programacion from '../assets/images/programacion1.jpg'

const TecProg = () => {
  return (
    <div className='font-serif'>
      <Header/>
      <Nav/>
      <div>
      <div className="bg-slate-200 p-4 m-4 rounded-lg shadow-lg flex flex-col md:flex-row">
          <img src={programacion} alt="Imagen de la carrera" className="mb-4 rounded-lg shadow-md md:w-1/2" />  

          <div className="flex-1 p-4">
            <h1 className="text-3xl font-semibold mb-2">Tecnicatura Universitaria en Programacion.</h1>
            <ul className="list-disc pl-5 mb-4">
              <li>
                <b>Título:</b> Tecnico Superior en Programacion.
              </li>
              <li>
                <b>Duración:</b> 2 años
              </li>
              
            </ul>
            <h4 className="text-xl font-semibold mb-2">¿Qué es la Programacion?</h4>
            <p className="text-gray-700">
            La programación es el proceso de crear un conjunto de instrucciones
            que le dicen a una computadora como realizar algún tipo de tarea. Pero
            no solo la acción de escribir un código para que la computadora o el
            software lo ejecute. Incluye, además, todas las tareas necesarias para
            que el código funcione correctamente y cumpla el objetivo para el cual
            se escribió. En la actualidad, la noción de programación se
            encuentra muy asociada a la creación de aplicaciones de informática y
            videojuegos. En este sentido, es el proceso por el cual una persona
            desarrolla un programa, valiéndose de una herramienta que le permita
            escribir el código (el cual puede estar en uno o varios lenguajes,
            como C++, Java y Python, entre muchos otros) y de otra que sea capaz
            de “traducirlo” a lo que se conoce como lenguaje de máquina, que puede
            "comprender" el microprocesador.
            </p>
            <button>
              <a href="http://www.frt.utn.edu.ar/tecnicaturas/programacion/?s=447" target='blank' className="bg-emerald-900 hover:bg-emerald-300 text-white font-semibold py-2 px-4 rounded inline-block mt-4">
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

export default TecProg