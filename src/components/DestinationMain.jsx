import React from 'react'
import './DestinationMain.css'
import imgR1T from '../assets/images/destination1.40c89fca.png'
import imgR1M from '../assets/images/destination2.54f9f938.png'
import imgR1B from '../assets/images/destination3.ba50419e.png'
import imgR2T from '../assets/images/destination4.50780d51.png'
import imgR2M from '../assets/images/destination5.73428857.png'
import imgR2B from '../assets/images/destination6.4540162c.png'
import imgR3T from '../assets/images/destination7.db797940.png'
import imgR3M from '../assets/images/destination8.03d4b7a9.png'
import { useNavigate } from 'react-router-dom'



const DestinationMain = ({ desLimg }) => {

  const navegate = useNavigate();

  return (
    <div>

      <div className="container des">
        <div className="desL col-md-5 col-sm-12 ">
          <img src={desLimg} alt="" />
        </div>
        <div className="desR col-md-6 col-sm-12">
          <div className="col-md-3 col-sm-12 R1 ms-2">
            <div className='mb-4'><img src={imgR1T} alt="" /></div>
            <div className='mb-4'><img src={imgR1M} alt="" /></div>
            <div><img src={imgR1B} alt="" /></div>
          </div>
          <div className="col-md-3 col-sm-12 R1 ms-(-2)">
            <div className='mb-4'><img src={imgR2T} alt="" /></div>
            <div className='mb-4'><img src={imgR2M} alt="" /></div>
            <div><img src={imgR2B} alt="" /></div>

          </div>
          <div className="col-md-3 col-sm-12 R1">
            <div className='mb-4'><img src={imgR3T} alt="" /></div>
            <div className='mb-4'><img src={imgR3M} alt="" /></div>
            <div>  <div ><button className="btn_navber Viewbtn" onClick={() => navegate("/destinationpackages")} >View all</button></div></div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default DestinationMain