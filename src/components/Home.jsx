import React from 'react'
import Flight from './Flight'
import './Home.css'

const Home = () => {
  return (
    <>
      <div className='home_one_banner'>
        <div className="container">
          <h1 className="text-center HeroHeading">Explore the world together</h1>
        </div>
          <h2 className='text-center text-white fontWeight fs-3 mt-4'>Find awesome flights, hotel, tour, car and packages</h2>
      </div>
      <Flight/>

    </>
  )
}

export default Home