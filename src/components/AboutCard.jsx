import React from 'react'

const AboutCard = ({pic,h,p}) => {
  return (
   <div className="container rounded shadow p-3 mb-5 bg-white rounded cardmax">
<img src={pic} alt=""  className='mb-2'/>
<h5 style={{color:"#8b3eea"}}>{h}</h5>
<p>{p}</p>

   </div>
  )
}

export default AboutCard