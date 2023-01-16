import './Tourtab.css'
import React from 'react'

const Tourtab = () => {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[current.getDay()];
    return (
        <div className='mt-3'>
           <div className="row d-flex ms-4 ">
                <div className="col-4 Flybg">
                    <p>Destination</p>
                    <input type="text"className='Flyinput' placeholder='Where are you going?' />
                    <p>Where are you going?</p>
                </div>
                <div className="col-5 d-flex Flybg ms-2 justify-content-between">
                    <div>
                        <p>Journey date</p>
                        <h3>{date}</h3>
                        <p>{day}</p>
                     </div>
                     <div className='ms-5'>
                        <p>Journey date</p>
                        <h3>{date}</h3>
                        <p>{day}</p>
                     </div>
                </div>
                <div className="col-2 Flybg ms-2">
                <p className='text-secondary'>Passenger, Class</p>
             <h3>0 Passenger</h3>
             <p>Business</p>
                </div>
            </div>
        </div>
    )
}

export default Tourtab
