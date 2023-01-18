import React from 'react'
import './Hotdeal.css'

import pic1 from '../assets/images/offer1.dbf93843.png'
import pic2 from '../assets/images/offer2.cd566006.png'
import pic3 from '../assets/images/offer3.93ae44e4.png'
const Hotdeal = () => {
  return (
    <div className='py-5'>
        <div className="container my-5 ">
            <div className="row new ">
                <div className="col-6">
<img src={pic1} alt="" />
                </div>
                <div className="col-3">
<img src={pic2} alt="" />
                </div>
                <div className="col-3">
                <img src={pic3} alt="" />

                </div>
            </div>
        </div>
    </div>
  )
}

export default Hotdeal