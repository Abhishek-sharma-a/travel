import React from 'react'
import Card from 'react-bootstrap/Card';

const Deal = ({ photo, h3, rating, price }) => {
    return (
        <div className='ab'>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={photo} />
                <Card.Body>
                    <Card.Title>
                        <h3>{h3}</h3>
                    </Card.Title>
                    <Card.Text>
                        <p> {rating}</p>
                    </Card.Text>
                    <Card.Text>
                        <h3>{price} </h3>
                        <span>price start from</span>
                    </Card.Text>
                </Card.Body>
            </Card></div>

    )
}

export default Deal