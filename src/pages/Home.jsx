import React from 'react'

import Cards from '../components/Cards';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import Map from '../components/Map';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <div className="bg-slate-950 font-sans min-h-screen">
      <Header />
      <Nav />
      <Hero />
      <Carousel />
      <Cards />
      <Map />
      <Footer />
    </div>
  )
}

export default Home