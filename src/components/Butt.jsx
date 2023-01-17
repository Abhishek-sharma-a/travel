import React from 'react'
import './Butt.css'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import pic from '../assets/images/hotel1.13d956e6.png'
import Deal from './Deal';

const Butt = () => {
    return (
        <div className='mx-auto my-3 buttFlex '>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={12} className="mb-5 mx-auto">
                        <Nav variant="pills" className="mx-auto">
                            <Nav.Item >
                                <Nav.Link eventKey="first" ml-3>Hotels</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second" >Tours</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third" >Space</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="forth" >Events</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={12}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first" className=''>

                              <div className="container">  <div class="grid-container">
                                    <div class="grid-item"> <Deal photo={pic} h3={"Kantua hotel, Thailand"} rating={"4.8/5 Excellent "} price={"$99.07"} /></div>
                                    <div class="grid-item"> <Deal photo={pic} h3={"Kantua hotel, Thailand"} rating={"4.8/5 Excellent "} price={"$99.07"} /></div>
                                    <div class="grid-item"> <Deal photo={pic} h3={"Kantua hotel, Thailand"} rating={"4.8/5 Excellent "} price={"$99.07"} /></div>
                                    <div class="grid-item"> <Deal photo={pic} h3={"Kantua hotel, Thailand"} rating={"4.8/5 Excellent "} price={"$99.07"} /></div>
                                    <div class="grid-item"> <Deal photo={pic} h3={"Kantua hotel, Thailand"} rating={"4.8/5 Excellent "} price={"$99.07"} /></div>
                                    <div class="grid-item"> <Deal photo={pic} h3={"Kantua hotel, Thailand"} rating={"4.8/5 Excellent "} price={"$99.07"} /></div>
                                    <div class="grid-item"> <Deal photo={pic} h3={"Kantua hotel, Thailand"} rating={"4.8/5 Excellent "} price={"$99.07"} /></div>
                                    <div class="grid-item"> <Deal photo={pic} h3={"Kantua hotel, Thailand"} rating={"4.8/5 Excellent "} price={"$99.07"} /></div>
                                </div></div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                gyhjfwesrgf
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                gyhjgrgfrger
                            </Tab.Pane>
                            <Tab.Pane eventKey="forth">
                                gyhjg
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    )
}

export default Butt