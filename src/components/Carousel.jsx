import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import facultadEntrada from '../assets/images/facultadentrada.jpeg'
import facultad from '../assets/images/facultad.jpg'
import facultadFondo from '../assets/images/facultadfondo.jpg'
import facultadPasillo from '../assets/images/facultadpasillo.jpg'

import{motion} from 'framer-motion'

const CarouselComponent = ({photo}) => {
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
      className="max-w-screen-xl mx-auto mt-8 bg-gray-300">
      <Carousel showArrows={true} infiniteLoop={true} autoPlay={true} interval={5000}>
        <div>
          <img src={facultad} alt="Imagen 1" />
        </div>
        <div>
          <img src={facultadPasillo} alt="Imagen 2" />
        </div>
        <div>
          <img src={facultadEntrada} alt="Imagen 3" />
        </div>
        <div>
          <img src={facultadFondo} alt="Imagen 3" />
        </div>
      </Carousel>
    </motion.div>
  );
};

export default CarouselComponent;
