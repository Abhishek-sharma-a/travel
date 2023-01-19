import React from 'react'
import "./Products.css"
const Products = ({ img, h, p }) => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="procard mb-3" style={{ position: "relative", textAlign: "center", color: "white" ,}}>
                        <img src={img} alt="" />
                        <div className='centered'><h4>{h}</h4><p>{p} price starts from </p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products