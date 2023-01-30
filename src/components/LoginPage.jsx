import React from 'react'
import Banner from './Banner'
import Heading from './Heading'
import bg from "../assets/images/bg.40066edd.png"
import TripForm from './TripForm'

const LoginPage = () => {
  return (
    <div>
         <Banner h1={"Login Page"} h2={""} imgPath={bg} />
      <Heading heading={"Login"}/>
      <TripForm/>
    </div>
  )
}

export default LoginPage