import React from 'react'
import './Flight.css'
import { useState } from 'react';
import FlightTab from './FlightTab';
import Tourtab from './Tourtab.jsx';
import Hoteltab from './Hoteltab';


const Flight = () => {
    const [Flight, setFlight] = useState(true);
    const [Hotel, setHotel] = useState(false);
    const [Tour, setTour] = useState(false);
    return (
        <div className='container delete'>
            <div className='container fth'>
                <div className="row rounded shadow p-3 mb-5 bg-white rounded">
                    <div className='d-flex flex-column'>
                        <div className="d-flex justify-content-between">
                            <div className="d-flex justify-content-around">
                                <div className='btn btn-primary ms-3 me-3 fs-5' onClick={() => {
                                    setFlight(true); setHotel(false); setTour(false)
                                }} style={{ backgroundColor: "#8b3eea", border: "none" }}>Flight</div>
                                <div className='btn btn-primary me-3 fs-5' onClick={() => {
                                    setFlight(false); setHotel(false); setTour(true)
                                }} style={{ backgroundColor: "white", color: "black", borderColor: "#8b3eea" }}>Tour</div>
                                <div className='btn btn-primary fs-5' onClick={() => {
                                    setFlight(false); setHotel(true); setTour(false)
                                }} style={{ backgroundColor: "white", color: "black", borderColor: "#8b3eea" }}>Hotels</div>
                            </div>
                            {/* <div className="d-flex justify-content-between fs-5">
                                <div className='me-2 OneWay' >One Way</div>
                                <div className='ms-2'>RoundTrip</div>
                                <div className='ms-2 me-2'>Multi City</div>
                            </div> */}
                        </div>
                        {Flight ? <div className='my-3'><FlightTab /></div> : null}
                        {Hotel ? <div className='my-3'><Hoteltab /></div> : null}
                        {Tour ? <div className='my-3'><Tourtab /></div> : null}

                        <div className='btn btn-primary mx-auto ' style={{ fontSize: "23px", backgroundColor: "#8b3eea", border: "none" }}>Search</div>
                    </div>
                </div>
            </div></div>
    )
}

export default Flight