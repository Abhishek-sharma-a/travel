import React from 'react'
import Card from 'react-bootstrap/Card';
import './Deal2.css'


const Deal2 = ({ photo, h3, rating, price }) => {
    return (
        

            <Card className='CardStyle2' >
                <div className='zz'><Card.Img variant="start" src={photo} /></div>
                <Card.Body className='cardBody'>
                    <Card.Title className='pb-1'>
                        <h5 style={{height:"1.3rem"}}>{h3}</h5>
                    </Card.Title>
               
                    <Card.Text className='mt-3 pb-2'>
                       <span className='fs-5'>{price} </span >
                        <span>price start from</span>
                    </Card.Text>
                </Card.Body>
            </Card>
           

    )
}

export default Deal2