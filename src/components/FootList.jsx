import React from 'react'

const FootList = ({n1,n2,n3,n4,n5}) => {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center'>
        <p className='mt-3'>{n1}</p>
        <p>{n2}</p>
        <p>{n3}</p>
        <p>{n4}</p>
        <p>{n5}</p>

    </div>
  )
}

export default FootList