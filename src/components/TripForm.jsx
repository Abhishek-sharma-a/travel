import React from 'react'
import Form from 'react-bootstrap/Form';
import { useState } from 'react'
//modal

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const TripForm = () => {

    //modal
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    // modal


    const initial = {
        "email": "",
        "fname": "",
        "lname": "",
        "start": "",
        "sdate": "",
        "stop": "",
        "rdate": ""
    }
    const [formvalue, setValue] = useState(initial)
    const [submit, setSubmit] = useState(false)


    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setValue(formvalue => ({ ...formvalue, [name]: value }))


    }

    const handlesubmit = (e) => {

        // e.preventDefault();
        setSubmit(true);
        console.log(formvalue);


    }
    // handleBook = () => {


    // }

    return (<>
        <div className='container col-lg-6 col-md-3 col-sm-3'>
            <Form.Floating className="mb-3">
                <Form.Control
                    name="email"
                    type="email"
                    placeholder="name@example.com"
                    onChange={handleInput}
                    required
                />
                <label>Email address</label>
            </Form.Floating>
            <Form.Floating className="mb-3">
                <Form.Control
                    name="fname"
                    type="text"
                    placeholder="First Name"
                    onChange={handleInput}
                    required
                />
                <label>First Name</label>
            </Form.Floating>

            <Form.Floating className="mb-3">
                <Form.Control
                    name="lname"
                    type="text"
                    placeholder="Lirst Name"
                    required
                    onChange={handleInput}
                />
                <label>Last Name</label>
            </Form.Floating>
            <Form.Floating className="mb-3">
                <Form.Control
                    name="start"
                    type="text"
                    placeholder="Starting Point"
                    required
                    onChange={handleInput}
                />
                <label>Starting Point</label>
            </Form.Floating>
            <Form.Floating className="mb-3">
                <Form.Control
                    name="sdate"
                    type="date"
                    placeholder="Starting Point Date"
                    required
                    onChange={handleInput}
                />
                <label>Starting Point Date</label>
            </Form.Floating>

            <Form.Floating className="mb-3">
                <Form.Control
                    name="stop"
                    type="text"
                    placeholder="Destination"
                    required
                    onChange={handleInput}
                />
                <label>Destination Point</label>
            </Form.Floating>
            <Form.Floating className="mb-3">
                <Form.Control
                    name="rdate"
                    type="date"
                    placeholder="Return Date"
                    required
                    onChange={handleInput}
                />
                <label>Return Date</label>
            </Form.Floating>

            <button onClick={() => { handlesubmit(); handleShow(); }} className="btn btn-primary" type="submit" style={{ backgroundColor: "#8b3eea" }}>Submit form</button>

            {/* modal */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Want to book your ticket?</Modal.Title>
                </Modal.Header>
                <Modal.Body>in case you book your ticket your tour information sed to your email</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => { handleClose();  }}>
                        Book Ticket
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    </>
    )
}

export default TripForm