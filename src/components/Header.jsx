import React, { useEffect, useState } from 'react'
import { FiFacebook, FiTwitter, FiInstagram, FiYoutube } from 'react-icons/fi'
import { motion } from 'framer-motion'
import logo from '../assets/images/logoutn.png'

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const socialLinks = [
    { href: 'https://www.facebook.com/profile.php?id=100063607237824', icon: <FiFacebook />, label: 'Facebook', color: 'hover:text-blue-400 hover:drop-shadow-[0_0_8px_rgba(96,165,250,0.8)]' },
    { href: 'https://twitter.com/utntucuman?t=bAIm6Uye2DypH1tCpgmKIQ&s=08', icon: <FiTwitter />, label: 'Twitter', color: 'hover:text-sky-400 hover:drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]' },
    { href: 'https://www.instagram.com/utntucuman/', icon: <FiInstagram />, label: 'Instagram', color: 'hover:text-pink-400 hover:drop-shadow-[0_0_8px_rgba(244,114,182,0.8)]' },
    { href: 'https://www.youtube.com/@UTNFRT', icon: <FiYoutube />, label: 'YouTube', color: 'hover:text-red-400 hover:drop-shadow-[0_0_8px_rgba(248,113,113,0.8)]' },
  ];

  return (
    <header className={`flex w-full items-center justify-between px-6 md:px-12 py-3 z-50 transition-all duration-500
      bg-slate-950/95 backdrop-blur-md
      ${scrolled ? 'border-b border-emerald-500/30 shadow-[0_4px_30px_rgba(5,150,105,0.15)]' : 'border-b border-slate-800/50'}`}>

      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="flex-shrink-0"
      >
        <img className="w-56 md:w-64 object-contain" src={logo} alt="Logo UTN" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="flex items-center space-x-5"
      >
        {socialLinks.map((s, i) => (
          <motion.a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            aria-label={s.label}
            whileHover={{ scale: 1.2, y: -2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            className={`text-xl text-slate-400 transition-all duration-300 ${s.color}`}
          >
            {s.icon}
          </motion.a>
        ))}
      </motion.div>
    </header>
  );
}

export default Header;