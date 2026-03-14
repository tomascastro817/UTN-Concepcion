import React from 'react';
import { Link } from 'react-router-dom';

import mecanica from '../assets/images/ingmec.jpg';
import electronica from '../assets/images/ingenieriaelectronica.jpg';
import isi from '../assets/images/ingenieriasistemas.jpeg';
import programacion from '../assets/images/programacion.jpg';
import mecatronica from '../assets/images/mecatronica.png';
import hys from '../assets/images/higieneyseguridad.jpg';
import logistica from '../assets/images/logistica.png';

import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const CarrerasCard = ({ title, description, image, link }) => {
  return (
    <motion.div
      variants={cardVariants}
      className="w-full sm:w-1/2 lg:w-1/3 p-4 flex"
    >
      <div className="group relative bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden flex flex-col w-full transition-all duration-400 hover:border-emerald-500/40 hover:shadow-[0_0_40px_rgba(5,150,105,0.2)] hover:-translate-y-1">
        {/* Image */}
        <div className="relative overflow-hidden h-52">
          <img
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
            src={image}
            alt={`Imagen de ${title}`}
          />
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
          {/* Emerald accent line at bottom of image */}
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-lg font-bold text-white mb-3 leading-snug group-hover:text-emerald-300 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">{description}</p>

          <div className="mt-auto pt-4 border-t border-slate-700/50">
            <Link
              to={link}
              className="w-full flex items-center justify-center gap-2 text-center border border-emerald-500/50 text-emerald-400 font-semibold py-2.5 px-6 rounded-xl hover:bg-emerald-500 hover:text-slate-950 hover:border-emerald-500 hover:shadow-[0_0_20px_rgba(16,185,129,0.35)] transition-all duration-300 text-sm"
            >
              Ver más →
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const SectionTitle = ({ label, highlight }) => (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.5 }}
    className="text-center mb-12"
  >
    <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
      {label} <span className="text-emerald-400">{highlight}</span>
    </h2>
    <div className="mt-4 mx-auto w-20 h-1 rounded-full bg-gradient-to-r from-emerald-500 to-teal-400" />
  </motion.div>
);

const Carreras = () => {
  const carrerasGrado = [
    {
      title: "Ingeniería Mecánica",
      description: "El ingeniero mecánico está capacitado para diseñar e instalar equipos mecánicos o térmicos, especificar materiales, costos y dirigir operaciones de manufactura y mantenimiento de maquinaria.",
      image: mecanica,
      link: "/IngenieriaMecanica",
    },
    {
      title: "Ingeniería en Sistemas de Información",
      description: "Los ingenieros de sistemas supervisan todos los aspectos de un proyecto tecnológico, convergiendo campos como matemática, programación, gestión de datos, software, hardware y redes.",
      image: isi,
      link: "/IngenieriaSistemas",
    },
    {
      title: "Ingeniería Electrónica",
      description: "Los ingenieros electrónicos se dedican al diseño y desarrollo de productos para telecomunicaciones, computación, sistemas de radar, televisión por satélite y tecnología embebida.",
      image: electronica,
      link: "/IngenieriaElectronica",
    },
  ];

  const carrerasPregrado = [
    {
      title: "Tecnicatura Superior en Programación",
      description: "Capacita para analizar problemas de procesamiento de datos y desarrollarlos en lenguajes de programación apropiados, seleccionando el algoritmo y la arquitectura adecuada.",
      image: programacion,
      link: "/TecnicaturaProgramacion",
    },
    {
      title: "Tecnicatura Superior en Mecatrónica",
      description: "Gestiona la planificación del mantenimiento de equipos e instalaciones de tecnología mecatrónica, vinculados a sistemas mecánicos, hidráulicos, eléctricos e informáticos.",
      image: mecatronica,
      link: "/TecnicaturaMecatronica",
    },
    {
      title: "Tecnicatura Superior en Higiene y Seguridad",
      description: "Prepara para evaluar y controlar situaciones inherentes a riesgos laborales de contaminación química, biológica, radioactiva y otros riesgos del trabajo en distintos ámbitos.",
      image: hys,
      link: "/TecnicaturaHigieneSeguridad",
    },
    {
      title: "Tecnicatura Superior en Logística",
      description: "Forma especialistas en gestión y organización de actividades vinculadas a recepción, almacenaje, transporte y expedición de mercancías en empresas y cadenas de suministro.",
      image: logistica,
      link: "/TecnicaturaLogistica",
    },
  ];

  return (
    <section id="carreras" className="py-20 bg-slate-950">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionTitle label="CARRERAS DE" highlight="GRADO" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-wrap justify-center -mx-4"
        >
          {carrerasGrado.map((carrera, index) => (
            <CarrerasCard key={index} {...carrera} />
          ))}
        </motion.div>

        <div className="mt-20">
          <SectionTitle label="CARRERAS DE" highlight="PREGRADO" />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-wrap justify-center -mx-4"
        >
          {carrerasPregrado.map((carrera, index) => (
            <CarrerasCard key={index} {...carrera} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Carreras;
