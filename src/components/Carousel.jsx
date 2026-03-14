import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { motion } from 'framer-motion';

import facultadEntrada from '../assets/images/facultadentrada.jpeg';
import facultad from '../assets/images/facultad.jpg';
import facultadFondo from '../assets/images/facultadfondo.jpg';
import facultadPasillo from '../assets/images/facultadpasillo.jpg';

const slides = [
  { src: facultad, caption: 'Campus Universitario', sub: 'Instalaciones modernas para tu formación profesional' },
  { src: facultadPasillo, caption: 'Vida en el Campus', sub: 'Espacios diseñados para el aprendizaje colaborativo' },
  { src: facultadEntrada, caption: 'Ingresá a UTN', sub: 'Formá parte de una institución de excelencia académica' },
  { src: facultadFondo, caption: 'Tu Futuro Comienza Aquí', sub: 'Ingeniería y tecnología al servicio de Argentina' },
];

const CarouselComponent = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="w-full bg-slate-950"
    >
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        showStatus={false}
        showThumbs={false}
        swipeable={true}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              onClick={onClickHandler}
              title={label}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-slate-900/70 backdrop-blur-sm border border-slate-700/60 text-white flex items-center justify-center hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300"
            >
              ‹
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              onClick={onClickHandler}
              title={label}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-slate-900/70 backdrop-blur-sm border border-slate-700/60 text-white flex items-center justify-center hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300"
            >
              ›
            </button>
          )
        }
      >
        {slides.map((slide, i) => (
          <div key={i} className="relative h-72 md:h-[400px] lg:h-[480px]">
            <img
              src={slide.src}
              alt={slide.caption}
              className="w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
            {/* Caption */}
            <div className="absolute bottom-10 left-0 right-0 text-center px-4">
              <p className="text-white font-extrabold text-xl md:text-3xl drop-shadow-lg">{slide.caption}</p>
              <p className="text-slate-300 text-sm md:text-base mt-1 drop-shadow-md">{slide.sub}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </motion.section>
  );
};

export default CarouselComponent;
