import React from 'react'

const Concard = ({ h6, h3, p }) => {
    return (
        <>
            <div className="container">
                <div className='p-4 mt-4 shadow p-3 mb-5 bg-white rounded'>
                    <h6>{h6}</h6>
                    <h3 style={{color:"#8b3eea"}}>{h3}</h3>
                    <p>{p}</p>
                </div>
            </div>
        </>
    )
}

export default Concard