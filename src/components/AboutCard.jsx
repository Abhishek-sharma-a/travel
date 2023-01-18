import React from 'react'

const AboutCard = ({pic,h,p}) => {
  return (
   <div className="container">
<img src={pic} alt="" />
<h5>{h}</h5>
<p>{p}</p>

   </div>
  )
}

export default AboutCard