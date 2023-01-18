import React from 'react'

const FootNum = ({ h5, h4 }) => {
    const footnum = {
        borderLeft: "2px solid #8b3eea",
        textAlign: "center",
        borderWidth: "2px",
        width: "max-content",
        margin: "0px auto"
    }

    const footnum2 = {
        borderWidth: "2px",
        margin: "0px auto",
        color:"#8b3eea"
    }


    return (
        <div>
            <h5 className='mb-2 ps-2 mt-4 ' style={footnum} >{h5}</h5>
            <h5 className='mb-4 ps-4  fs-4' style={footnum2} >{h4}</h5>
        </div>
    )
}

export default FootNum