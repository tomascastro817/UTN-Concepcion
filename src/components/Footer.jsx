/* eslint-disable jsx-a11y/alt-text */
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import logoFooter from '../assets/images/logoFooter.png';
import { FaEnvelope } from 'react-icons/fa';
import { FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import { BsHouse } from 'react-icons/bs';
import { FiFacebook, FiTwitter, FiInstagram, FiYoutube } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const socialLinks = [
  { href: 'https://www.facebook.com/profile.php?id=100063607237824', icon: <FiFacebook />, label: 'Facebook', color: 'hover:text-blue-400' },
  { href: 'https://twitter.com/utntucuman?t=bAIm6Uye2DypH1tCpgmKIQ&s=08', icon: <FiTwitter />, label: 'Twitter', color: 'hover:text-sky-400' },
  { href: 'https://www.instagram.com/utntucuman/', icon: <FiInstagram />, label: 'Instagram', color: 'hover:text-pink-400' },
  { href: 'https://www.youtube.com/@UTNFRT', icon: <FiYoutube />, label: 'YouTube', color: 'hover:text-red-400' },
];

const quickLinks = [
  { label: 'Ingeniería en Sistemas', to: '/IngenieriaSistemas' },
  { label: 'Ingeniería Mecánica', to: '/IngenieriaMecanica' },
  { label: 'Ingeniería Electrónica', to: '/IngenieriaElectronica' },
  { label: 'Tec. en Programación', to: '/TecnicaturaProgramacion' },
  { label: 'Tec. en Mecatrónica', to: '/TecnicaturaMecatronica' },
  { label: 'Calendario Académico', to: '/CalendarioAcademico' },
];

function Footer() {
  const form = useRef();
  const [formData, setFormData] = useState({ user_name: '', user_email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    emailjs
      .sendForm('service_f6ij4g7', 'template_1xtphpo', form.current, 'kASb2b3O-GT7T3zvF')
      .then(() => {
        setSubmitted(true);
        setFormData({ user_name: '', user_email: '', message: '' });
      })
      .catch((error) => console.error(error.text))
      .finally(() => setSending(false));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <footer id="contacto" className="bg-slate-950 border-t border-slate-800/60">

      {/* Main footer grid */}
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Col 1 – Brand & Contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <img src={logoFooter} alt="Logo UTN" className="h-14 mb-6 object-contain" />
          <h3 className="text-white font-bold text-lg mb-4">Extensión Aúlica Concepción</h3>

          <ul className="space-y-3 text-slate-400 text-sm">
            <li className="flex items-start gap-3">
              <FiMapPin className="text-emerald-400 mt-0.5 flex-shrink-0" />
              <span>Raúl Alfonsín 70, Concepción, Tucumán</span>
            </li>
            <li className="flex items-center gap-3">
              <FiPhone className="text-emerald-400 flex-shrink-0" />
              <span>+54 9 3865-455002</span>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-emerald-400 flex-shrink-0" />
              <span>info@unifrtconcep.edu.com.ar</span>
            </li>
            <li className="flex items-center gap-3">
              <BsHouse className="text-emerald-400 flex-shrink-0" />
              <a href="http://frt.utn.edu.ar/" target="_blank" rel="noreferrer"
                className="text-emerald-400 hover:text-emerald-300 underline-offset-2 hover:underline transition-colors">
                frt.utn.edu.ar
              </a>
            </li>
          </ul>

          {/* Social icons */}
          <div className="flex items-center gap-4 mt-6">
            {socialLinks.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}
                className={`text-xl text-slate-500 transition-all duration-300 hover:scale-110 ${s.color}`}>
                {s.icon}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Col 2 – Quick links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3 className="text-white font-bold text-base mb-6 tracking-wider uppercase">Carreras</h3>
          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to}
                  className="text-slate-400 text-sm hover:text-emerald-400 hover:translate-x-1 transition-all duration-200 flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-emerald-500 flex-shrink-0" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Col 3 – Contact form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-white font-bold text-base mb-6 tracking-wider uppercase">Contactanos</h3>

          {submitted ? (
            <div className="flex flex-col items-center justify-center h-48 gap-3 text-center bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-8">
              <FiSend className="text-3xl text-emerald-400" />
              <p className="text-emerald-400 font-semibold text-lg">¡Mensaje enviado!</p>
              <p className="text-slate-400 text-sm">Te responderemos a la brevedad.</p>
            </div>
          ) : (
            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
              <input
                type="text"
                name="user_name"
                placeholder="Tu nombre"
                required
                value={formData.user_name}
                onChange={handleChange}
                className="w-full bg-slate-800/70 border border-slate-700 text-slate-200 placeholder-slate-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-emerald-500/70 focus:ring-1 focus:ring-emerald-500/30 transition-all duration-300"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Tu email"
                required
                value={formData.user_email}
                onChange={handleChange}
                className="w-full bg-slate-800/70 border border-slate-700 text-slate-200 placeholder-slate-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-emerald-500/70 focus:ring-1 focus:ring-emerald-500/30 transition-all duration-300"
              />
              <textarea
                name="message"
                placeholder="Tu consulta..."
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-slate-800/70 border border-slate-700 text-slate-200 placeholder-slate-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-emerald-500/70 focus:ring-1 focus:ring-emerald-500/30 transition-all duration-300 resize-none"
              />
              <button
                type="submit"
                disabled={sending}
                className="flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 disabled:opacity-60 text-slate-950 font-bold py-3 px-6 rounded-xl text-sm transition-all duration-300 hover:shadow-[0_0_25px_rgba(16,185,129,0.4)] hover:-translate-y-0.5"
              >
                <FiSend className="text-base" />
                {sending ? 'Enviando...' : 'Enviar mensaje'}
              </button>
            </form>
          )}
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800/60">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-slate-600 text-xs">
            © {new Date().getFullYear()} Universidad Tecnológica Nacional · Todos los derechos reservados.
          </p>
          <p className="text-slate-700 text-xs">Facultad Regional Tucumán</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
