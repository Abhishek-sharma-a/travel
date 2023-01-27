import React from 'react'
import Flight from './Flight'
import Height from './Height'
import Deal from './Deal'
import './Home.css'
import GoBeyond from './GoBeyond'
import Heading from './Heading'
import DestinationMain from './DestinationMain'
import girlRed from '../assets/images/big-img.a49b935c.png'
import Butt from './Butt'
import Hotdeal from './Hotdeal'
import pic from '../assets/images/hotel1.13d956e6.png'
import pic2 from '../assets/images/hotel2.840d2131.png'
import pic3 from '../assets/images/hotel3.9b69bb63.png'
import pic4 from '../assets/images/hotel4.bb75eb4a.png'
import bg from "../assets/images/bg.40066edd.png"
// import DestinationForYou from './DestinationWedding'
import Ourpartner from './Ourpartner'
import Banner from './Banner'

const Home = () => {

  return (
    <>
    <Banner h1={"Explore the world together"} h2={"Find awesome flights, hotel, tour, car and packages"} imgPath={bg}/>
      {/* <div className='home_one_banner'>
        <div className="container">
          <h1 className="text-center HeroHeading">Explore the world together</h1>
        </div>
        <h2 className='text-center text-white fontWeight fs-3 mt-4'>Find awesome flights, hotel, tour, car and packages</h2>
      </div> */}
      <Flight />
      <Height />
      <GoBeyond />
      <Heading heading={"Top destinations"} />
      <DestinationMain desLimg={girlRed} />
      <Heading heading={"Explore our hot deals"} />
      <Hotdeal />
      <Heading heading={"Our best promotional tours"} />
      <div className="container permostion">
        <div className="grid-container ">
          <div className="grid-item"> <Deal photo={pic} h3={"Kantua hotel, Thailand"} rating={"4.8/5 Excellent "} price={"$99.07"} /></div>
          <div className="grid-item"> <Deal photo={pic2} h3={"Kantua hotel, Thailand"} rating={"4.8/5 Excellent "} price={"$99.07"} /></div>
          <div className="grid-item"> <Deal photo={pic3} h3={"Kantua hotel, Thailand"} rating={"4.8/5 Excellent "} price={"$99.07"} /></div>
          <div className="grid-item"> <Deal photo={pic4} h3={"Kantua hotel, Thailand"} rating={"4.8/5 Excellent "} price={"$99.07"} /></div>
        </div>
      </div>
      <Heading heading={"Destinations for you"} />
      <Butt />

      {/* <DestinationForYou /> */}
      <Heading heading={"Our partners"} />
      <Ourpartner />



    </>
  )
}

export default Home