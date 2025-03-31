import React from 'react'
import {FiFacebook,FiTwitter,FiInstagram,FiYoutube} from 'react-icons/fi'
import{motion} from 'framer-motion'

import logo from '../assets/images/logoutn.png'
function Header() {
    return(
      <header className="flex w-full bg-emerald-800 items-center justify-between p-4">
          <div className="">
            <motion.img 
            initial="hidden"
            whileInView ="visible"
            viewport={{once: true, amount:0.5}}
            transition={{delay:0.2, duration:0.5}}
            variants={{
              hidden:{opacity:0, x:-50},
              visible:{opacity:1, x:0}
            }}
            className="w-64" src={logo} alt="" />
          </div>
          <div className="flex space-x-4">
            <motion.a href="https://www.facebook.com/profile.php?id=100063607237824" target="_blank "
              initial="hidden"
              whileInView ="visible"
              viewport={{once: true, amount:0.5}}
              transition={{delay:0.3, duration:0.5}}
              variants={{
                hidden:{opacity:0, x:50},
                visible:{opacity:1, x:0}
              }}
              className="text-3xl text-white hover:text-emerald-200 ">
              <FiFacebook />
            </motion.a>
            <motion.a href="https://twitter.com/utntucuman?t=bAIm6Uye2DypH1tCpgmKIQ&s=08" target="_blank " 
              initial="hidden"
              whileInView ="visible"
              viewport={{once: true, amount:0.5}}
              transition={{delay:0.3, duration:0.6}}
              variants={{
                hidden:{opacity:0, x:50},
                visible:{opacity:1, x:0}
              }}
              className="text-3xl text-white hover:text-emerald-200 ">
              <FiTwitter />
            </motion.a>
            <motion.a href="https://www.instagram.com/utntucuman/" target="_blank " 
              initial="hidden"
              whileInView ="visible"
              viewport={{once: true, amount:0.5}}
              transition={{delay:0.3, duration:0.7}}
              variants={{
                hidden:{opacity:0, x:50},
                visible:{opacity:1, x:0}
              }}
              className="text-3xl text-white hover:text-emerald-200 ">
              <FiInstagram />
            </motion.a>
            <motion.a href="https://www.youtube.com/@UTNFRT" target="_blank " 
              
              className="text-3xl text-white hover:text-emerald-200 ">
              <FiYoutube />
            </motion.a>
          </div>
      </header>
    )
}
export default Header;