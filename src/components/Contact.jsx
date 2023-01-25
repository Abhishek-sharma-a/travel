import React from 'react'
import Aboutbg from "../assets/AboutImg/common-banner.6ccf3e41.png"
import Banner from './Banner'
import Concard from './Concard'
import Heading from './Heading'

const Contact = () => {
  return (
    <div>
      <Banner h1={"Contact us"} h2={""} imgPath={Aboutbg} />
      <Heading heading={"Contact with us"}/>
<div className="container" style={{backgroundColor:"whitesmoke"}}>
    <div className="row d-flex justify-content-between ">
    <div className='col-md-3 col-sm-12' > <Concard h6={"Head office"} h3={"New Mexico"} p={"4140 Parker Rd. Allentown, New Mexico 31134"}/></div>
     <div className='col-md-3 col-sm-12'> <Concard h6={"Washington office"} h3={"Washington"} p={"4517 Washington Ave. Manchester, Kentucky 39495"}/></div>
     <div className='col-md-3 col-sm-12'> <Concard h6={"California office"} h3={"California"} p={"3891 Ranchview Dr. Richardson, California 62639"}/></div>
     <div className='col-md-3 col-sm-12'> <Concard h6={"Office schedule"} h3={"Working hours"} p={"Monday to Friday 9 am to 10pm timing we do work in time"}/></div>
    </div>
</div>
     

    </div>
  )
}

export default Contact