import React from 'react'
import './Heading.css'
const Heading = ({heading}) => {
  return (
  <div className="container"> 
   <div className='py-5 px-auto'>
  <h1 className='mb-3 pb-3 bor'>{heading}</h1>
</div></div>
  )
}

export default Heading