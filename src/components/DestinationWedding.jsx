import React from 'react'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Deal2 from './Deal2';
import pic from '../assets/images/hotel1.13d956e6.png'
import pic2 from '../assets/images/hotel2.840d2131.png'
import pic3 from '../assets/images/hotel3.9b69bb63.png'
import pic4 from '../assets/images/hotel4.bb75eb4a.png'
import pic5 from '../assets/images/hotel5.958e5097.png'
import pic6 from '../assets/images/hotel6.685d604c.png'

const DestinationForYou = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
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
                                        <Nav.Item >
                                            <Nav.Link eventKey="fifth" >Hotels</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item >
                                            <Nav.Link eventKey="sixth" >Hotels</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item >
                                            <Nav.Link eventKey="seventh">Hotels</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col></div>
                            <Col sm={12}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <div className="grid-container2">
                                            <div className="grid-item">
                                                <Deal2 photo={pic} h3={"Kantua hotel, Thailand"} price={"$99.07"} />
                                            </div>
                                            <div className="grid-item">
                                                <Deal2 photo={pic2} h3={"Kantua hotel, Thailand"} price={"$99.07"} />
                                            </div>
                                            <div className="grid-item">
                                                <Deal2 photo={pic3} h3={"Kantua hotel, Thailand"} price={"$99.07"} />
                                            </div><div className="grid-item">
                                                <Deal2 photo={pic4} h3={"Kantua hotel, Thailand"} price={"$99.07"} />
                                            </div><div className="grid-item">
                                                <Deal2 photo={pic5} h3={"Kantua hotel, Thailand"} price={"$99.07"} />
                                            </div><div className="grid-item">
                                                <Deal2 photo={pic6} h3={"Kantua hotel, Thailand"} price={"$99.07"} />
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <div className="grid-container2">
                                            <div className="grid-item">
                                                <Deal2 photo={pic} h3={"Kantua hotel, Thailand"} price={"$99.07"} />
                                            </div>
                                            <div className="grid-item">
                                                <Deal2 photo={pic3} h3={"Kantua hotel, Thailand"} price={"$99.07"} />
                                            </div>
                                            <div className="grid-item">
                                                <Deal2 photo={pic5} h3={"Kantua hotel, Thailand"} price={"$99.07"} />
                                            </div>
                                            <div className="grid-item">
                                                <Deal2 photo={pic6} h3={"Kantua hotel, Thailand"} price={"$99.07"} />
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <div className="grid-container2">
                                            <div className="grid-item">
                                                <Deal2 photo={pic} h3={"Kantua hotel, Thailand"} price={"$99.07"} />
                                            </div>
                                            <div className="grid-item">
                                                <Deal2 photo={pic} h3={"Kantua hotel, Thailand"} price={"$99.07"} />
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="forth">
                                        <div className="grid-container2">
                                            <div className="grid-item">
                                                <Deal2 photo={pic} h3={"Kantua hotel, Thailand"} price={"$99.07"} />
                                            </div>
                                            <div className="grid-item">
                                                <Deal2 photo={pic2} h3={"Kantua hotel, Thailand"} price={"$99.07"} />
                                            </div>
                                            <div className="grid-item">
                                                <Deal2 photo={pic3} h3={"Kantua hotel, Thailand"} price={"$99.07"} />
                                            </div>
                                            <div className="grid-item">
                                                <Deal2 photo={pic3} h3={"Kantua hotel, Thailand"} price={"$99.07"} />
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fifth">
                                        <div className="grid-container2">
                                            <div className="grid-item">
                                                <Deal2 photo={pic} h3={"Kantua hotel, Thailand"} price={"$99.07"} />
                                            </div>
                                            <div className="grid-item">
                                                <Deal2 photo={pic2} h3={"Kantua hotel, Thailand"} price={"$99.07"} />
                                            </div>
                                            <div className="grid-item">
                                                <Deal2 photo={pic3} h3={"Kantua hotel, Thailand"} price={"$99.07"} />
                                            </div>
                                            <div className="grid-item">
                                                <Deal2 photo={pic3} h3={"Kantua hotel, Thailand"} price={"$99.07"} />
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="sixth">
                                        <div className="grid-container2">
                                            <div className="grid-item">
                                                <Deal2 photo={pic} h3={"Kantua hotel, Thailand"} price={"$99.07"} />
                                            </div>
                                            <div className="grid-item">
                                                <Deal2 photo={pic2} h3={"Kantua hotel, Thailand"} price={"$99.07"} />
                                            </div>
                                            <div className="grid-item">
                                                <Deal2 photo={pic3} h3={"Kantua hotel, Thailand"} price={"$99.07"} />
                                            </div>
                                            <div className="grid-item">
                                                <Deal2 photo={pic3} h3={"Kantua hotel, Thailand"} price={"$99.07"} />
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="seventh">
                                        <div className="grid-container2">
                                            <div className="grid-item">
                                                <Deal2 photo={pic} h3={"Kantua hotel, Thailand"} price={"$99.07"} />
                                            </div>
                                            <div className="grid-item">
                                                <Deal2 photo={pic2} h3={"Kantua hotel, Thailand"} price={"$99.07"} />
                                            </div>
                                            <div className="grid-item">
                                                <Deal2 photo={pic3} h3={"Kantua hotel, Thailand"} price={"$99.07"} />
                                            </div>
                                            <div className="grid-item">
                                                <Deal2 photo={pic3} h3={"Kantua hotel, Thailand"} price={"$99.07"} />
                                            </div>
                                        </div>
                                    </Tab.Pane>


                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </div>
            </div>
        </div>
    )
}

export default DestinationForYou