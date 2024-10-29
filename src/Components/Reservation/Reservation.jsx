import React from 'react'
import ResCSS from './../Reservation/Reservation.module.css'

function Reservation() {
    return (
        <div className={`${ResCSS.ReservationWrapper} section`}>
            <h2 className="Section_title">Reservation</h2>
            <div className={ResCSS.form}>
                <div className={ResCSS.Container}>
                    <div className={ResCSS.InputWrapper}>
                        <i className="ri-user-line"></i>
                        <input type="text" placeholder="Enter Name" />
                    </div>
                    <div className={ResCSS.InputWrapper}>
                        <i className="ri-mail-line"></i>
                        <input type="email" placeholder="Enter Email" />
                    </div>
                    <div className={ResCSS.InputWrapper}>
                        <i className="ri-phone-line"></i>
                        <input type="text" placeholder="Enter Phone" />
                    </div>
                </div>
                <div className={ResCSS.Container}>
                    <div className={ResCSS.InputWrapper}>
                        <i className="ri-group-line"></i>
                        <input type="text" placeholder="Enter Number of People" />
                    </div>
                    <div className={ResCSS.InputWrapper}>
                        <i className="ri-calendar-line"></i>
                        <input type="text" placeholder="Date" />
                    </div>
                    <div className={ResCSS.InputWrapper}>
                        <i className="ri-time-line"></i>
                        <input type="text" placeholder="Time" />
                    </div>
                </div>
                <button AfterText="Book A table"><span>Book A Table</span></button>
            </div>
        </div>
    )
}

export default Reservation
