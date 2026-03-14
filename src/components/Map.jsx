import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';

mapboxgl.accessToken = 'pk.eyJ1IjoidG9tYXNjYXN0cm84MTciLCJhIjoiY2xvMTFrNzZuMThibDJpcDlibXhnYmthMyJ9.qaWQT-DfWrLGxItiYPDPJw';

const contactInfo = [
  { icon: <FiMapPin className="text-emerald-400 mt-0.5 flex-shrink-0" />, text: 'Raúl Alfonsín 70, Concepción, Tucumán' },
  { icon: <FiPhone className="text-emerald-400 flex-shrink-0" />, text: '+54 9 3865-455002' },
  { icon: <FiMail className="text-emerald-400 flex-shrink-0" />, text: 'info@unifrtconcep.edu.com.ar' },
];

export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng] = useState(-65.5957648);
  const [lat] = useState(-27.3570765);
  const [zoom] = useState(15.5);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v11',
      center: [lng, lat],
      zoom: zoom,
    });

    map.current.on('load', () => {
      new mapboxgl.Marker({ color: '#10b981' })
        .setLngLat([lng, lat])
        .setPopup(new mapboxgl.Popup({ offset: 25 }).setText('UTN · Extensión Aúlica Concepción'))
        .addTo(map.current);
    });
  }, []);

  return (
    <section id="contacto-mapa" className="bg-slate-950 py-20">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            ¿Dónde nos <span className="text-emerald-400">encontramos?</span>
          </h2>
          <div className="mt-4 mx-auto w-20 h-1 rounded-full bg-gradient-to-r from-emerald-500 to-teal-400" />
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {/* Info card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/3 bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 flex flex-col justify-center gap-6"
          >
            <h3 className="text-white font-bold text-lg">Extensión Aúlica Concepción</h3>
            <div className="space-y-4">
              {contactInfo.map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                  {item.icon}
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
            <a
              href="http://frt.utn.edu.ar/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 border border-emerald-500/40 rounded-xl px-5 py-3 hover:bg-emerald-500/10 hover:border-emerald-400 transition-all duration-300"
            >
              Casa Central (FRT) →
            </a>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:w-2/3 h-80 md:h-[420px] rounded-2xl overflow-hidden border border-slate-700/50 shadow-[0_0_40px_rgba(0,0,0,0.5)]"
          >
            <div ref={mapContainer} className="w-full h-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
