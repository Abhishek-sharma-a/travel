import React from 'react'
import Aboutbg from "../assets/AboutImg/common-banner.6ccf3e41.png"
import Banner from './Banner'
import Flight from './Flight'
import Heading from './Heading'
import Height from './Height'
import Products from "./Products"
import pic from "../assets/packageimg/main-page1.c6a4ae3a.png"
import pic1 from "../assets/packageimg/main-page2.6711c9c4.png"
import pic2 from "../assets/packageimg/main-page3.fe428318.png"
import pic3 from "../assets/packageimg/main-page4.904ce86f.png"
import pic4 from "../assets/packageimg/main-page5.b7829437.png"
import pic5 from "../assets/packageimg/main-page6.be07a602.png"

const DestinationPackages = () => {
  return (
    <div>
      <Banner h1={"Packages"} h2={""} imgPath={Aboutbg} />
      <Flight />
      <Height />
      <Heading heading={"packages"} />
      <div className="container d-flex flex-column">
        <div className="row d-flex justify-content-center">
          <div className="col-3 "><Products img={pic} h={"Ancient egypt"} p={'$99.00'} /></div>
          <div className="col-3"><Products img={pic1} h={"Ancient egypt"} p={'$99.00'} /></div>
          <div className="col-3"><Products img={pic2} h={"Ancient egypt"} p={'$99.00'} /></div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-3"><Products img={pic3} h={"Ancient egypt"} p={'$99.00'} /></div>
          <div className="col-3"><Products img={pic4} h={"Ancient egypt"} p={'$99.00'} /></div>
          <div className="col-3"><Products img={pic5} h={"Ancient egypt"} p={'$99.00'} /></div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-3"><Products img={pic2} h={"Ancient egypt"} p={'$99.00'} /></div>
          <div className="col-3"><Products img={pic} h={"Ancient egypt"} p={'$99.00'} /></div>
          <div className="col-3"><Products img={pic3} h={"Ancient egypt"} p={'$99.00'} /></div>
        </div>
      </div>




    </div>
  )
}

export default DestinationPackages