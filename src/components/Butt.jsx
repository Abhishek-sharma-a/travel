import React from 'react'
import './Butt.css'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import pic from '../assets/images/hotel1.13d956e6.png'
import pic2 from '../assets/images/hotel2.840d2131.png'
import pic3 from '../assets/images/hotel3.9b69bb63.png'
import pic4 from '../assets/images/hotel4.bb75eb4a.png'
import pic5 from '../assets/images/hotel5.958e5097.png'
import pic6 from '../assets/images/hotel6.685d604c.png'
import pic7 from '../assets/images/hotel7.d1859bf9.png'
import pic8 from '../assets/images/hotel8.a9e710a2.png'
import Deal from './Deal';

const Butt = () => {
    return (
        <div className='mx-auto my-3 buttFlex '>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row className='m-0'>
                   <div className=" mb-5 ">
                     <Col sm={12} className='mx-auto'>
                        <Nav variant="pills" className="navflex">
                            <Nav.Item >
                                <Nav.Link eventKey="first">Hotels</Nav.Link>
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
                    </Col></div>
                    <Col sm={12}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">

                              <div className="container"> 
                               <div className="grid-container">
                                    <div className="grid-item"> <Deal photo={pic} h3={"Kantua hotel, Thailand"} rating={"4.8/5 Excellent "} price={"$99.07"} /></div>
                                    <div className="grid-item"> <Deal photo={pic2} h3={"Kantua hotel, Thailand"} rating={"4.8/5 Excellent "} price={"$99.07"} /></div>
                                    <div className="grid-item"> <Deal photo={pic3} h3={"Kantua hotel, Thailand"} rating={"4.8/5 Excellent "} price={"$99.07"} /></div>
                                    <div className="grid-item"> <Deal photo={pic4} h3={"Kantua hotel, Thailand"} rating={"4.8/5 Excellent "} price={"$99.07"} /></div>
                                    <div className="grid-item"> <Deal photo={pic5} h3={"Kantua hotel, Thailand"} rating={"4.8/5 Excellent "} price={"$99.07"} /></div>
                                    <div className="grid-item"> <Deal photo={pic6} h3={"Kantua hotel, Thailand"} rating={"4.8/5 Excellent "} price={"$99.07"} /></div>
                                    <div className="grid-item"> <Deal photo={pic7} h3={"Kantua hotel, Thailand"} rating={"4.8/5 Excellent "} price={"$99.07"} /></div>
                                    <div className="grid-item"> <Deal photo={pic8} h3={"Kantua hotel, Thailand"} rating={"4.8/5 Excellent "} price={"$99.07"} /></div>
                                </div>
                              </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                            <div className="container"> 
                               <div className="grid-container">
                                    <div className="grid-item"> <Deal photo={pic4} h3={"Kantua hotel, Thailand"} rating={"4.8/5 Excellent "} price={"$99.07"} /></div>
                                    <div className="grid-item"> <Deal photo={pic} h3={"Kantua hotel, Thailand"} rating={"4.8/5 Excellent "} price={"$99.07"} /></div>
                                    <div className="grid-item"> <Deal photo={pic8} h3={"Kantua hotel, Thailand"} rating={"4.8/5 Excellent "} price={"$99.07"} /></div>
                                    <div className="grid-item"> <Deal photo={pic3} h3={"Kantua hotel, Thailand"} rating={"4.8/5 Excellent "} price={"$99.07"} /></div>
                                </div>
                              </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                            <div className="container"> 
                               <div className="grid-container">
                                    <div className="grid-item"> <Deal photo={pic3} h3={"Kantua hotel, Thailand"} rating={"4.8/5 Excellent "} price={"$99.07"} /></div>
                                    <div className="grid-item"> <Deal photo={pic7} h3={"Kantua hotel, Thailand"} rating={"4.8/5 Excellent "} price={"$99.07"} /></div>
                                    <div className="grid-item"> <Deal photo={pic2} h3={"Kantua hotel, Thailand"} rating={"4.8/5 Excellent "} price={"$99.07"} /></div>
                                    <div className="grid-item"> <Deal photo={pic} h3={"Kantua hotel, Thailand"} rating={"4.8/5 Excellent "} price={"$99.07"} /></div>
                                </div>
                              </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="forth">
                            <div className="container"> 
                               <div className="grid-container">
                                    <div className="grid-item"> <Deal photo={pic8} h3={"Kantua hotel, Thailand"} rating={"4.8/5 Excellent "} price={"$99.07"} /></div>
                                    <div className="grid-item"> <Deal photo={pic5} h3={"Kantua hotel, Thailand"} rating={"4.8/5 Excellent "} price={"$99.07"} /></div>
                                    <div className="grid-item"> <Deal photo={pic6} h3={"Kantua hotel, Thailand"} rating={"4.8/5 Excellent "} price={"$99.07"} /></div>
                                    <div className="grid-item"> <Deal photo={pic7} h3={"Kantua hotel, Thailand"} rating={"4.8/5 Excellent "} price={"$99.07"} /></div>
                                </div>
                              </div>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    )
}

export default Butt