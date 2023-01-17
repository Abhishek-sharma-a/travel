import React from 'react'
import Goimg1 from '../assets/images/imagination1.f968e853.png'
import Goimg2 from '../assets/images/imagination2.d48d8bae.png'
import Goimg3 from '../assets/images/imagination3.6a46d2fd.png'
import GobyondImg from './GobyondImg'
import './GoBeyond.css'
const GoBeyond = () => {
    return (
        <div>
            <div className="container my-5"  >
                <div className="row Go">
                    <div className='col-3'>
                        <h3 className='pb-2 border-bottom'>Go beyond your imagination</h3>
                        <p className='pt-3 fs-5'>Discover your ideal experience with us</p>
                    </div>
                    <div className="col-3"><GobyondImg img={Goimg1} /></div>
                    <div className="col-3"><GobyondImg img={Goimg2} /></div>
                    <div className="col-3"><GobyondImg img={Goimg3} /></div>
                 
                </div>

            </div>
        </div>
    )
}

export default GoBeyond