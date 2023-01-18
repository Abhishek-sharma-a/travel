import React from 'react'

const Banner = ({ h1, h2, imgPath }) => {console.log(imgPath);
    return (
       
            <div className='home_one_banner' style={{ backgroundImage: `url(${imgPath})`,height:"50px"}}>
                <div className="container" style={{backgroundImage:"abhsgd"}}>
                    <h1 className="text-center HeroHeading">{h1}</h1>
                </div>
                <h2 className='text-center text-white fontWeight fs-3 mt-4'>{h2}</h2>
            </div>
       
    )
}

export default Banner