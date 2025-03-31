/* eslint-disable jsx-a11y/alt-text */
import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';

import logoFooter from '../assets/images/logoFooter.png'
import { FaEnvelope } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { FiMapPin } from "react-icons/fi";
import {BsHouse} from "react-icons/bs";
import {FaQuestion} from "react-icons/fa"
import {FiFacebook,FiTwitter,FiInstagram,FiYoutube} from 'react-icons/fi'


import {motion} from 'framer-motion'

function Footer() {
  const form = useRef();
  const [setIsFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs
      .sendForm('service_f6ij4g7', 'template_1xtphpo', form.current, 'kASb2b3O-GT7T3zvF')
      .then((result) => {
        console.log(result.text);
        alert('Correo enviado exitosamente');
        setFormData({
          user_name: '',
          user_email: '',
          message: '',
        });
        setIsFormSubmitted(true); // Marcar el formulario como enviado
      })
      .catch((error) => {
        console.error(error.text);
      });
    };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <footer className="flex flex-wrap bg-emerald-800 ">

        <div className="h-24 w-full bg-emerald-900 p-4">
            <motion.img 
            initial="hidden"
            whileInView ="visible"
            viewport={{once: true, amount:0.5}}
            transition={{delay:0.3, duration:0.5}}
            variants={{
              hidden:{opacity:0, x:-150},
              visible:{opacity:1, x:0}
            }}
            className="h-16" src={logoFooter} alt="Logo del Footer" />
        </div>



        <div className="w-full sm:w-1/2  text-white text-center font-medium p-8 ">
            <motion.h5 
            initial="hidden"
            whileInView ="visible"
            viewport={{once: true, amount:0.5}}
            transition={{delay:0.4, duration:0.5}}
            variants={{
              hidden:{opacity:0, x:-150},
              visible:{opacity:1, x:0}
            }}
            className="my-5 text-2xl ">Extension Aulica Concepcion</motion.h5>
            <motion.h6 
            initial="hidden"
            whileInView ="visible"
            viewport={{once: true, amount:0.5}}
            transition={{delay:0.5, duration:0.5}}
            variants={{
              hidden:{opacity:0, x:-150},
              visible:{opacity:1, x:0}
            }}
            className="text-lg mb-2 border-b-2 border-white">Contacto</motion.h6>
            <motion.p 
            initial="hidden"
            whileInView ="visible"
            viewport={{once: true, amount:0.5}}
            transition={{delay:0.6, duration:0.5}}
            variants={{
              hidden:{opacity:0, x:-150},
              visible:{opacity:1, x:0}
            }}
            className="flex items-center mb-2">
                <FiMapPin className="mr-2" />
                Dirección: Raul Alfonsin 70, Concepción/Tucumán
            </motion.p>
            <motion.p 
            initial="hidden"
            whileInView ="visible"
            viewport={{once: true, amount:0.5}}
            transition={{delay:0.7, duration:0.5}}
            variants={{
              hidden:{opacity:0, x:-150},
              visible:{opacity:1, x:0}
            }}
            className="flex items-center mb-2">
                <FiPhone className="mr-2" />
                Teléfono: +54 9 3865-455002
            </motion.p>
            <motion.p 
            initial="hidden"
            whileInView ="visible"
            viewport={{once: true, amount:0.5}}
            transition={{delay:0.8, duration:0.5}}
            variants={{
              hidden:{opacity:0, x:-150},
              visible:{opacity:1, x:0}
            }}
            className="flex items-center mb-2">
                <FaEnvelope className="mr-2" />
                Email: info@unifrtconcep.edu.com.ar
            </motion.p>
            <motion.p 
            initial="hidden"
            whileInView ="visible"
            viewport={{once: true, amount:0.5}}
            transition={{delay:0.9, duration:0.5}}
            variants={{
              hidden:{opacity:0, x:-150},
              visible:{opacity:1, x:0}
            }}
            className="flex items-center mb-2">
                <BsHouse className="mr-2" />
                Casa central:<a 
                className="underline decoration-pink-500"
                href="http://frt.utn.edu.ar/" target="blank" > http://frt.utn.edu.ar/</a>
            </motion.p>
            <motion.p 
            initial="hidden"
            whileInView ="visible"
            viewport={{once: true, amount:0.5}}
            transition={{delay:1, duration:0.5}}
            variants={{
              hidden:{opacity:0, x:-150},
              visible:{opacity:1, x:0}
            }}
            className="flex items-center mb-2">
                <FaQuestion className="mr-2" />
                Quienes somos
            </motion.p>
            

            <motion.h6 
            initial="hidden"
            whileInView ="visible"
            viewport={{once: true, amount:0.5}}
            transition={{delay:1.1, duration:0.5}}
            variants={{
              hidden:{opacity:0, x:-150},
              visible:{opacity:1, x:0}
            }}
            className="text-lg mb-2 border-b-2 border-white">Redes sociales</motion.h6>

            <div className="flex space-x-4 justify-center ">
            <motion.a href="https://www.facebook.com/profile.php?id=100063607237824" target="_blank "
              initial="hidden"
              whileInView ="visible"
              viewport={{once: true, amount:0.5}}
              transition={{delay:1.5, duration:0.5}}
              variants={{
                hidden:{opacity:0, x:-150},
                visible:{opacity:1, x:0}
              }}
              className="text-3xl text-white hover:text-emerald-200 mr-4">
              <FiFacebook />
            </motion.a>
            <motion.a href="https://twitter.com/utntucuman?t=bAIm6Uye2DypH1tCpgmKIQ&s=08" target="_blank " 
              initial="hidden"
              whileInView ="visible"
              viewport={{once: true, amount:0.5}}
              transition={{delay:1.4, duration:0.6}}
              variants={{
                hidden:{opacity:0, x:-150},
                visible:{opacity:1, x:0}
              }}
              className="text-3xl text-white hover:text-emerald-200 mr-4">
              <FiTwitter />
            </motion.a>
            <motion.a href="https://www.instagram.com/utntucuman/" target="_blank " 
              initial="hidden"
              whileInView ="visible"
              viewport={{once: true, amount:0.5}}
              transition={{delay:1.3, duration:0.7}}
              variants={{
                hidden:{opacity:0, x:-150},
                visible:{opacity:1, x:0}
              }}
              className="text-3xl text-white hover:text-emerald-200 mr-4">
              <FiInstagram />
            </motion.a>
            <motion.a href="https://www.youtube.com/@UTNFRT" target="_blank " 
              initial="hidden"
              whileInView ="visible"
              viewport={{once: true, amount:0.5}}
              transition={{delay:1.2, duration:0.7}}
              variants={{
                hidden:{opacity:0, x:-150},
                visible:{opacity:1, x:0}
              }}
              className="text-3xl text-white hover:text-emerald-200 mr-4">
              <FiYoutube />
            </motion.a>
          </div>



        </div>













        <div className="w-full sm:w-1/2  p-4">
              
            <form className="flex flex-wrap justify-center m-1.5" ref={form} onSubmit={sendEmail}>
                <div className="w-full sm:w-1/2">
                <motion.input
                    initial="hidden"
                    whileInView ="visible"
                    viewport={{once: true, amount:0.5}}
                    transition={{delay:0.3, duration:0.5}}
                    variants={{
                    hidden:{opacity:0, x:50},
                    visible:{opacity:1, x:0}
                    }}
                    type="text"
                    className=" w-full p-2 rounded-b border-b-2 bg-emerald-800 text-white mt-8"
                    placeholder="Nombre"
                    name="user_name"
                    required
                    value={formData.user_name}
                    onChange={handleChange}
                />
                
                </div>
                <div className=" w-full sm:w-1/2">
                <motion.input
                    initial="hidden"
                    whileInView ="visible"
                    viewport={{once: true, amount:0.5}}
                    transition={{delay:0.4, duration:0.5}}
                    variants={{
                    hidden:{opacity:0, x:50},
                    visible:{opacity:1, x:0}
                    }}
                    type="email"
                    className=" w-full p-2 rounded-b border-b-2 bg-emerald-800 text-white mt-8"
                    placeholder="Mail"
                    name="user_email" 
                    required
                    value={formData.user_email}
                    onChange={handleChange}
                />
                
                </div>
                <div className="w-full">
                <motion.textarea
                    initial="hidden"
                    whileInView ="visible"
                    viewport={{once: true, amount:0.5}}
                    transition={{delay:0.5, duration:0.5}}
                    variants={{
                    hidden:{opacity:0, x:50},
                    visible:{opacity:1, x:0}
                    }}
                    className="w-full p-2 rounded-b border-b-2 bg-emerald-800 text-white mt-8"
                    placeholder="Escriba su consulta"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                ></motion.textarea>
                </div>
                <motion.button
                    initial="hidden"
                    whileInView ="visible"
                    viewport={{once: true, amount:0.5}}
                    transition={{delay:0.5, duration:0.5}}
                    variants={{
                    hidden:{opacity:0, x:50},
                    visible:{opacity:1, x:0}
                    }}
                    className=" bg-emerald-900 text-white p-4 rounded-full hover:-translate-y-1 hover:scale-110 hover:bg-emerald-300 duration-300 mt-8 focus:ring focus:bg-emerald-400" 
                    type="submit"
                    title="Enviar Formulario"
                    >Enviar</motion.button>
            </form>
        </div>



      

        
        <div className="w-full bg-emerald-900 text-white py-4">
            <motion.p 
                initial="hidden"
                whileInView ="visible"
                viewport={{once: true, amount:0.5}}
                transition={{delay:0.5, duration:0.5}}
                variants={{
                hidden:{opacity:0, x:-150},
                visible:{opacity:1, x:0}
                }}
                className="text-center">
                &copy; {new Date().getFullYear()} Universidad Tecnológica Nacional.
                Todos los derechos reservados.
            </motion.p>
        </div>

    </footer>
  );
}

export default Footer;
