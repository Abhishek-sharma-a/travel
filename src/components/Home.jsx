import React from 'react'
import Flight from './Flight'
import Height from './Height'
import './Home.css'
import GoBeyond from './GoBeyond'
import Heading from './Heading'
import DestinationMain from './DestinationMain'
import girlRed from '../assets/images/big-img.a49b935c.png'
import Deal from './Deal'
import Butt from './Butt'
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
      <Height/>
      <GoBeyond/>
      <Heading heading={"Top destinations"}/>
      <DestinationMain desLimg={girlRed}/>
      <Heading heading={"Explore our hot deals"}/>
      <Butt/>
  


    </>
  )
}

export default Home