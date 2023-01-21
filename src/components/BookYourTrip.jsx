import React from 'react'
import bg from "../assets/images/bg.40066edd.png"
import Banner from './Banner'
import Heading from './Heading'
import TripForm from './TripForm'

const BookYourTrip = () => {
  return (
    <div>
      <Banner h1={"Book your trip"} h2={""} imgPath={bg} />
      <Heading heading={"Book your trip"}/>
      <TripForm/>

    </div>
  )
}

export default BookYourTrip