import React from 'react'
import calendario from '../assets/images/calendarioacademico.jpeg'

const Calendario = () => {
  return (
    <div>
      <div className="flex items-center justify-center h-screen bg-white font-serif m-4 md:m-40 lg:m-56">
        <div className="bg-white rounded-lg shadow-md p-8">
          <img
            src={calendario}
            alt="Calendario"
            className="w-full h-auto max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl"
          />
        </div>
      </div>
    </div>
  )
}

export default Calendario