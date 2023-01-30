import React from 'react'
import Banner from './Banner'
import Aboutbg from "../assets/AboutImg/common-banner.6ccf3e41.png"

const NotFound = () => {
  return (
    <div>
       <Banner h1={"Page not found"} h2={"Error 404"} imgPath={Aboutbg} />
    </div>
  )
}

export default NotFound