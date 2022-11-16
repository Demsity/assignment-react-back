import React from 'react'
import ButtonRound from '../Elements/ButtonRound'

function SiteInfo() {
  return (
    <div className='__site-info-container container'>
        <div className='__border'></div>
        <div className='__info-wrapper'>
            <div className='__info-box'>
                <ButtonRound icon='fa-solid fa-headset' />
                <div className='__info-text'>
                    <p className='__info-title'>Customer Support</p>
                    <p>Village did removed enjoyed explain talking.</p>
                </div>
            </div>
            <div className='__info-box'>
                <ButtonRound icon='fa-solid fa-shop-lock' />
                <div className='__info-text'>
                    <p className='__info-title'>Secured Payment</p>
                    <p>Village did removed enjoyed explain talking.</p>
                </div>
            </div>
            <div className='__info-box'>
                <ButtonRound icon='fa-light fa-truck' />
                <div className='__info-text'>
                    <p className='__info-title'>Free Home Delivery</p>
                    <p>Village did removed enjoyed explain talking.</p>
                </div>
            </div>
            <div className='__info-box'>
                <ButtonRound icon='fa-light fa-truck' />
                <div className='__info-text'>
                    <p className='__info-title'>30 Day Reuters</p>
                    <p>Village did removed enjoyed explain talking.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SiteInfo