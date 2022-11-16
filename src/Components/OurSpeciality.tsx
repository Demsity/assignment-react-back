import React from 'react'
import { NavLink } from 'react-router-dom'

function OurSpeciality() {
  return (
    <section className='container __spec-container'>
        <h3>Our Speciality</h3>
        <div className='__spec-box-wrapper'>
            <div className='__spec-box'>
                <div className='__box-text'>
                    <p>Track Your Order</p>
                    <NavLink className='__box-link' to={'/'}>Get Started<i className="ms-2 fa-regular fa-chevron-right"></i></NavLink>
                </div>
                <div className='__box-img'></div>
            </div>
            <div className='__spec-box'>
                <div className='__box-text'>
                    <p>Make a Return</p>
                    <NavLink className='__box-link' to={'/'}>Get Started<i className="ms-2 fa-regular fa-chevron-right"></i></NavLink>
                </div>
                <div className='__box-img'></div>
            </div>
            <div className='__spec-box'>
                <div className='__box-text'>
                    <p>Request a Price<br/> Adjustment</p>
                    <NavLink className='__box-link' to={'/'}>Get Started<i className="ms-2 fa-regular fa-chevron-right"></i></NavLink>
                </div>
                <div className='__box-img'></div>
            </div>
        </div>
    </section>
  )
}

export default OurSpeciality