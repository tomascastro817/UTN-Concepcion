import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md';
import {ImMenu } from 'react-icons/im';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left md:hidden w-screen">
      <div>
        <button
          type="button"
          onClick={toggleDropdown}
          className="-left-0"
          id="options-menu"
          aria-haspopup="listbox"
        >
        
          <ImMenu className="-mr-1 ml-2 h-5 w-5 text-3xl" />
        </button>
      </div>

      {isOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center z-50">
          <div className="origin-top-right absolute right-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <button
              onClick={toggleDropdown}
              className="inline-flex justify-center items-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-emerald-900 text-md font-medium text-white hover:bg-emerald-300"
            >
              <MdArrowBack className="mr-2 ml-2 h-5 w-5" /> Volver
            </button>
            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              <Link to="/" className="block justify-center px-4 py-2 text-gray-700 border-b-2 border-b-emerald-900 " role="menuitem">INICIO</Link>
            </div>
            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
          <h4 className="justify-center px-4 py-2  text-gray-700 border-b-2 border-b-emerald-900">OFERTAS ACADEMICAS</h4>
            <h4 className="justify-center px-4 py-2 text-sm text-emerald-800">CARRERAS DE GRADO</h4>
            <ul>
              <li className="px-4 py-2 text-sm text-gray-700">
                <Link to="/IngenieriaSistemas">Ingeniería en Sistemas de Información</Link>
              </li>
              <li className="px-4 py-2 text-sm text-gray-700">
                <Link to="/IngenieriaMecanica">Ingeniería Mecánica</Link>
              </li>
              <li className="px-4 py-2 text-sm text-gray-700">
                <Link to="/IngenieriaElectronica">Ingeniería Electrónica</Link>
              </li>
            </ul>
          </div>
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <h4 className="justify-center px-4 py-2 text-sm text-emerald-800">CARRERAS DE PREGRADO</h4>
            <ul>
              <li className="px-4 py-2 text-sm text-gray-700">
                <Link to="/TecnicaturaProgramacion">Tecnicatura Superior en Programación</Link>
              </li>
              <li className="px-4 py-2 text-sm text-gray-700">
                <Link to="/TecnicaturaHigieneSeguridad">Tecnicatura Universitaria en Higiene y Seguridad</Link>
              </li>
              <li className="px-4 py-2 text-sm text-gray-700">
                <Link to="/TecnicaturaMecatronica">Tecnicatura Universitaria en Mecatrónica</Link>
              </li>
              <li className="px-4 py-2 text-sm text-gray-700">
                <Link to="/TecnicaturaLogistica">Tecnicatura Universitaria en Logística</Link>
              </li>
            </ul>
          </div>
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <Link to="http://sysacad.frt.utn.edu.ar/" target="_blank" className="block justify-center px-4 py-2 text-gray-700 border-b-2 border-b-emerald-900">ALUMNOS</Link>
            <Link to="/CalendarioAcademico" className="block justify-center px-4 py-2 text-gray-700 border-b-2 border-b-emerald-900">CALENDARIO ACADÉMICO</Link>
          </div>
            </div>
            </div>
            
            
          )}
        </div>
      );
    };
    
    export default Dropdown;

