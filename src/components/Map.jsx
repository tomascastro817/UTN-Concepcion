import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import { motion } from 'framer-motion';

mapboxgl.accessToken = 'pk.eyJ1IjoidG9tYXNjYXN0cm84MTciLCJhIjoiY2xvMTFrNzZuMThibDJpcDlibXhnYmthMyJ9.qaWQT-DfWrLGxItiYPDPJw';

export default function App() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-65.5957648);
  const [lat, setLat] = useState(-27.3570765);
  const [zoom, setZoom] = useState(15.00);

  useEffect(() => {
    if (map.current) return; // Inicializa el mapa solo una vez
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom
    });

    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });

    // Crear el marcador
    /*map.current.on('load', () => {
      const marker = new mapboxgl.Marker()
        .setLngLat([lng, lat])
        .addTo(map.current);
      marker.setOffset([0, 0]);
    });*/
    
  });

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: 150 },
        visible: { opacity: 1, y: 0 }
      }}
      className="bg-slate-200 p-2 md:p-4 rounded-lg shadow-lg max-w-screen-md mx-auto my-10"
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">¿Dónde nos encontramos?</h2>
      <div ref={mapContainer} className="w-full md:w-1/2 h-2/4 md:h-96 mx-auto rounded-lg shadow-md" />
    </motion.div>
  );
}
