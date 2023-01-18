import React from 'react'
import Card from 'react-bootstrap/Card';
import './Deal.css'

const Deal = ({ photo, h3, rating, price }) => {
    return (
        

            <Card className='CardStyle'>
                <Card.Img variant="top" src={photo} />
                <Card.Body>
                    <Card.Title>
                        <h5>{h3}</h5>
                    </Card.Title>
                    <Card.Text>
                        <span style={{color:"#8b3eea"}}> {rating}</span>
                    </Card.Text>
                    <Card.Text>
                        <span className='fs-4'>{price} </span >
                        <span>price start from</span>
                    </Card.Text>
                </Card.Body>
            </Card>
           

    )
}

export default Deal