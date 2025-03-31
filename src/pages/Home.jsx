import React from 'react'

import Cards from '../components/Cards';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import Map from '../components/Map';
const Home = () => {
  return (
    <div>
        <div className="bg-gray-300 font-serif">
            <Header/>
            <Nav></Nav>
            <Carousel></Carousel>
            <Cards/>
            <Map/>
            <Footer></Footer>
            </div>
    </div>
  )
}

export default Home