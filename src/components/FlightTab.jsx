import React from 'react'
import './FlightTab.css'
import arrow from "../assets/webicon/icons8-data-transfer-24.png"
const FlightTab = () => {
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  let day = days[current.getDay()];
  return (
    <div className='m-4'>
        <div className="row d-flex flex-nowrap x pl-5">
             <div className="col-3 Flybg">
                <p className='text-secondary'>Form</p>
                <input type="text"className='Flyinput' placeholder='New York' />
                <p className='FlyPara'>JFK - John F. Kennedy International...</p>
                <div className="arrow"><i><img src={arrow} /></i></div>
            </div>
             <div className="col-3 Flybg ms-2">
             <p className='text-secondary'>To</p>
             <input type="text"className='Flyinput' placeholder='London' />
             <p className='FlyPara'>LCY, London city airport</p>

             </div>
             <div className="col-3 Flybg ms-2">
             <p className='text-secondary'>Journey date</p>
             <h3>{date}</h3>
             <p>{day}</p>
             </div>
             <div className="col-3 Flybg ms-2">
             <p className='text-secondary'>Passenger, Class</p>
             <h3>0 Passenger</h3>
             <p>Business</p>
              
             </div>
        </div>
    </div>
  )
}

export default FlightTab