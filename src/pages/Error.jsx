import React from 'react'
import { Link } from 'react-router-dom';

import Header from '../components/Header'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

import error from '../assets/images/error-404.jpg'

const Error = () => {
  return (
    <div className=''>
      <Header/>
      <Nav/>
        <div className="flex items-center justify-center h-screen bg-white font-serif m-16">
          <div className="bg-white rounded-lg shadow-md p-8">
            <button className="bg-emerald-800 hover:bg-emerald-300 text-white font-semibold py-2 px-4 rounded mt-4">
              <Link to="/" className="block text-center">
                Volver a la página de inicio
              </Link>
            </button>
            <p className="text-2xl text-emerald-900 mt-4 text-center font-semibold">
              PÁGINA NO ENCONTRADA
            </p>
            <img src={error} alt="Página no encontrada" className="w-full mx-auto mt-4" />
          </div>
        </div>
      <Footer/>
    </div>
  )
}

export default Error

