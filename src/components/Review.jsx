import React from 'react'

const Review = ({ h, p }) => {
    return (

        <div classNmae="card rounded  py-3  ">
            <div className="card-body shadow p-3 mb-5 bg-white rounded">
                <h3 className="card-title mb-3" style={{color:"#8b3eea"}}>{h}</h3>
                <p className="card-text">{p}</p>
            </div>
        </div>
    )
}

export default Review