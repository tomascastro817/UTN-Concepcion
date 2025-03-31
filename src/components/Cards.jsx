import React from 'react';
import {Link} from 'react-router-dom'

import mecanica from '../assets/images/ingmec.jpg';
import electronica from '../assets/images/ingenieriaelectronica.jpg';
import isi from '../assets/images/ingenieriasistemas.jpeg';
import programacion from '../assets/images/programacion.jpg';
import mecatronica from '../assets/images/mecatronica.png';
import hys from '../assets/images/higieneyseguridad.jpg';
import logistica from '../assets/images/logistica.png';

import{motion} from 'framer-motion'

const CarrerasCard = ({ title, description, image, link }) => {
  return (
    <motion.div 
    initial="hidden"
            whileInView ="visible"
            viewport={{once: true, amount:0.5}}
            transition={{delay:0.5, duration:0.5}}
            variants={{
              hidden:{opacity:0, y:150},
              visible:{opacity:1, y:0}
            }}
            
            
            
    className="w-full sm:w-1/2 lg:1/3 p-4 ">
      <div className="bg-slate-200 shadow-lg rounded-lg overflow-hidden m-4 transition-transform transform  hover:none md:hover:scale-105 md:hover:rotate-6">
        <img className="w-full h-48 object-cover" src={image} alt="Imagen de la tarjeta " />
        <div className="p-4">
          <div className="text-2xl font-bold">{title}</div>
          <p className="text-gray-600 mt-2">{description}</p>
          <div className="mt-4 flex justify-center">
              <button className="bg-emerald-800 text-white py-2 px-4 rounded-full hover:bg-emerald-400 transition duration-300">
                <Link to={link}>
                    Ver más
                </Link>
              </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Carreras = () => {
  const carrerasGrado = [
    {
      title: "Ingenieria Mecanica",
      description: "El ingeniero mecánico está capacitado para: Diseñar e instalar equipos mecánicos o térmicos; especificar materiales, costos y duración de la ejecución. Planear y dirigir operaciones de manufactura y mantenimiento de maquinaria; evaluar y optimizar procesos de conversión de energía.",
      image: mecanica,
      link: "/IngenieriaMecanica",
    },
    {
      title: "Ingenieria en Sistemas de Informacion",
      description: "Los ingenieros de sistemas supervisan todos los aspectos de un proyecto o sistema en una variedad de campos, como software, transporte, desarrollo de productos y fabricación.",
      image: isi,
      link: "/IngenieriaSistemas",
    },
    {
      title: "Ingenieria Electronica",
      description: "Los ingenieros electrónicos se dedican al diseño y desarrollo de productos electrónicos que utilizan, por ejemplo, los sistemas de telecomunicaciones, los ordenadores, el láser, y los sistemas de emisión por satélite, de radar y de televisión.",
      image: electronica,
      link: "/IngenieriaElectronica",
    },
  ];

  const carrerasPregrado = [
    {
      title: "Tecnicatura Superior en Programación",
      description: "El Técnico Superior en Programación está capacitado para: Analizar un problema de procesamiento de datos y desarrollarlo en un lenguaje apropiado para su resolución por una computadora, seleccionando el algoritmo adecuado.",
      image: programacion,
      link: "/TecnicaturaProgramacion",
    },
    {
      title: "Tecnicatura Superior en Mecatronica",
      description: "El Técnico Superior en Mecatrónica gestiona la planificación del mantenimiento de equipos e instalaciones de tecnología e infraestructura mecatrónica, vinculados a los sistemas mecánicos, hidráulicos, neumáticos, eléctricos, electrónicos e informáticos.",
      image: mecatronica,
      link: "/TecnicaturaHigieneSeguridad",
    },
    {
      title: "Tecnicatura Superior en Higiene y Seguridad",
      description: "Esta tecnicatura universitaria capacita a los estudiantes en diferentes ámbitos laborales y los prepara para evaluar y controlar situaciones inherentes a riesgos de contaminación química, biológica, radioactiva y otros riesgos del trabajo.",
      image: hys,
      link: "/TecnicaturaMecatronica",
    },
    {
      title: "Tecnicatura Superior en Logistica",
      description: "La técnica o el técnico de logística se encarga de gestionar y organizar las actividades relacionadas con la recepción, el almacenaje, el transporte y la expedición de mercancías en una empresa.",
      image: logistica,
      link: "/TecnicaturaLogistica",
    },
  ];

  return (
    <div>
      <div className="max-w-screen-xl mx-auto bg-gray-300 shadow-lg rounded-lg">
        <motion.div 
        initial="hidden"
            whileInView ="visible"
            viewport={{once: true, amount:0.5}}
            transition={{delay:0.5, duration:0.5}}
            variants={{
              hidden:{opacity:0, x:-150},
              visible:{opacity:1, x:0}
              
            }}
        className="text-3xl font-bold text-center my-4">CARRERAS DE GRADO</motion.div>
        <div className="flex flex-wrap justify-center">
        {carrerasGrado.map((carrera, index) => (
          <CarrerasCard key={index} title={carrera.title} description={carrera.description} image={carrera.image} link={carrera.link} />
        ))}

        </div>
        <motion.div 
        initial="hidden"
            whileInView ="visible"
            viewport={{once: true, amount:0.5}}
            transition={{delay:0.5, duration:0.5}}
            variants={{
              hidden:{opacity:0, x:-150},
              visible:{opacity:1, x:0}
            }}
        className="text-3xl font-bold text-center my-4">CARRERAS DE PREGRADO</motion.div>
        <div className="flex flex-wrap justify-center">
          {carrerasPregrado.map((carrera, index) => (
            <CarrerasCard key={index} title={carrera.title} description={carrera.description} image={carrera.image} link={carrera.link} />
          ))}

        </div>
      </div>
    </div>
  );
};

export default Carreras;

