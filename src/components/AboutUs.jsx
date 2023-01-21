import React from 'react'
import Banner from './Banner'
import Aboutbg from "../assets/AboutImg/common-banner.6ccf3e41.png"
import girl from "../assets/AboutImg/small_banner.fc6f89cb.png"
import girlwater from "../assets/AboutImg/big_banner.4d37afd7.png"
import aboutImg from "../assets/AboutImg/abour_right.177c8485.png"
import './AboutUs.css'
import pic1 from "../assets/AboutImg/download.png"
import pic2 from "../assets/AboutImg/download1.png"
import pic3 from "../assets/AboutImg/download2.png"
import pic4 from "../assets/AboutImg/download3.png"
import AboutCard from './AboutCard'
import bridge from "../assets/AboutImg/counter_bg.55b8b540.png"
import Review from './Review'
import Heading from './Heading'
import { useNavigate } from 'react-router-dom'


const AboutUs = () => { 
  const navex = useNavigate();
  return (
   
    <>
      <Banner h1={"About us"} h2={""} imgPath={Aboutbg} />
      <Heading heading={"About us"}/>
      <div className="container">
        <div className='row py-5 my-3'>
          <div className="Aleft col-md-6 col-sm-12 ">
            <h5>About us</h5>
            <h1>We Are The World Best Travel Agency Company Since 2000</h1>
            <p style={{ lineHeight: "30px" }}>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr </p><p>
              At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
            <div ><button className="btn_navber px-5 py-2 mb-4" onClick={()=>navex("/destinationpackages")} >Find Tours</button></div>
          </div>
          <div className="Aright col-md-6 col-sm-12">
            <img src={aboutImg} alt="" />
          </div>

        </div>
      </div>
      <div className="container d-flex justify-content-around">
        <div>
          <img src={girl} alt="" style={{ width: "100%" }} />
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <div>
          <img src={girlwater} alt="" style={{ width: "100%" }} />
        </div>
      </div>

      <div className="container">
        <div className="row d-flex justify-content-between">
         <div className="col-md-2 col-sm-12 px-2 py-5"> <AboutCard pic={pic1} h={"Best services"} p={"Phaseus site amet tristique ligua donec iaculis leo sus cipit. Consec tetur adipiscing elit. Incididunt ut dolore."} /></div>
          <div className="col-md-2 col-sm-12 px-2 py-5"><AboutCard pic={pic2} h={"Trusted payment"} p={"Phaseus site amet tristique ligua donec iaculis leo sus cipit. Consec tetur adipiscing elit. Incididunt ut."} /></div>
          <div className="col-md-2 col-sm-12 px-2 py-5"><AboutCard pic={pic3} h={"Top facility"} p={"Phaseus site amet tristique ligua donec iaculis leo sus cipit. Consec tetur adipiscing elit. Incididunt ut dolore."} /></div>
         <div className="col-md-2 col-sm-12 px-2 py-5"> <AboutCard pic={pic4} h={"Awesome deals"} p={"Phaseus site amet tristique ligua donec iaculis leo sus cipit. Consec tetur adipiscing elit. Incididunt ut dolore."} /></div>
        </div>
      </div>
     
    <Banner h1={"Have you any question?"} h2={"Find awesome flights, hotel, tour, car and packages"} imgPath={bridge}/>
<div className="container">
  <div className="row d-flex justify-content-between my-5 ">
    <div className="col-md-3 col-sm-12 "><Review h={"Jesica simpsn"} p={" Loved the overall tour for all 6 days covering jaipur jodhpur and jaisalmer. worth ur money for sure. thanks. Driver was very good and polite and safe driving for all 6 days. on time pickup and drop overall. Thanks for it. "}/></div>
    <div className="col-md-3 col-sm-12"><Review h={"Jesica simpsn"} p={" Loved the overall tour for all 6 days covering jaipur jodhpur and jaisalmer. worth ur money for sure. thanks. Driver was very good and polite and safe driving for all 6 days. on time pickup and drop overall. Thanks for it. "}/></div>
    <div className="col-md-3 col-sm-12 "><Review h={"Jesica simpsn"} p={" Loved the overall tour for all 6 days covering jaipur jodhpur and jaisalmer. worth ur money for sure. thanks. Driver was very good and polite and safe driving for all 6 days. on time pickup and drop overall. Thanks for it. "}/></div>
  </div>
</div>
   
    </>
  )
}

export default AboutUs