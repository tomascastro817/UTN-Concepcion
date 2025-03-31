import React from 'react'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

import CalendarioA from '../components/CalendarioA'

const Calendario = () => {
  return (
    <div className='bg-scale-100'>
        <Header/>
        <Nav/>
        <CalendarioA/>
        <Footer/>
    </div>
  )
}

export default Calendario